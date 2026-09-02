# MOR TERMINAL — contexto del proyecto

Terminal financiero de nicho al estilo Bloomberg, enfocado en **contratos de defensa
(EE.UU.) cruzados con small caps cotizadas poco conocidas** y en **mercados de predicción
(Polymarket)**. Autor: BAYE MOR. Presupuesto: 0 €. Todo con APIs públicas y gratuitas.

## Tesis del producto
A los grandes (Bloomberg, bancos) no les compensa cubrir empresas de defensa de 50–500 M$
en Corea, Polonia, India o Australia. Ahí no hay competencia porque el premio les parece
pequeño — pero para un producto de suscripción de nicho es suficiente.
La señal estrella es el **cruce**: un adjudicatario del Pentágono que coincide con una
empresa del universo small cap seguido.

## Archivos
- `index.html` — terminal completo (frontend autónomo, funciona con doble clic, sin build).
  **Es la única fuente de verdad de la UI.**
- `worker.js` — backend Cloudflare Worker: sirve la UI + API propia + histórico en KV + cron + alertas Telegram.
  La constante `HTML` se genera desde `index.html`; **no editarla a mano**.
- `sync.mjs` — `node sync.mjs` re-embebe `index.html` dentro de `worker.js`.
  Ejecutar SIEMPRE tras tocar `index.html` y antes de desplegar.
- `dev.mjs` — `node dev.mjs` levanta el Worker en `localhost:8787` sin wrangler,
  con KV falso en memoria. Recarga `worker.js` en cada petición.
- `docs/DESPLIEGUE.md` — cómo publicarlo. **No hace falta wrangler ni instalar nada**:
  se pega `worker.js` en el panel de Cloudflare. 76 KB comprimidos contra 1 MB de
  límite. No existe `wrangler.toml` en el repo; el documento trae la plantilla por
  si algún día se prefiere línea de comandos.

## Estado actual
- Desplegado en `https://mor-terminal.colonelmor1945.workers.dev` (versión antigua).
- `index.html` ya está embebido en `worker.js` vía `sync.mjs`. **Pendiente: desplegar.**
- KV namespace `RADAR_KV` creado y enlazado como binding `RADAR`.
- Cron activo: `0 7 * * *` (snapshot diario).
- Telegram NO configurado todavía (faltan vars `TELEGRAM_TOKEN` y `TELEGRAM_CHAT`).

## Fuentes de datos y trampas conocidas (IMPORTANTE)
1. **USAspending** (`api.usaspending.gov`, POST `/api/v2/search/spending_by_award/`)
   - ⚠️ Desde un **Cloudflare Worker** devuelve **HTTP 525** (fallo de handshake TLS
     entre Cloudflare y su origen). **Desde el navegador funciona perfecto** y permite CORS.
   - Por eso el frontend hace el fetch directo si el Worker falla. NO quitar ese respaldo.
2. **Polymarket** (`gamma-api.polymarket.com/markets`) — funciona desde ambos lados. Sin API key.
3. **Precios** (`/api/px`, solo server-side; el navegador no puede por CORS)
   - ⚠️ **Stooq murió el 31/08/2026**: metió un desafío proof-of-work en JS y devuelve
     HTML en vez de CSV desde cualquier servidor. No intentar resolverlo.
   - Sustituido por **Yahoo Finance chart API**
     (`query1/query2.finance.yahoo.com/v8/finance/chart/SYM?range=2y&interval=1d`).
     Sin clave. Cubre todos los mercados del universo: `.AX .NS .KQ .KS .T .ST .WA .IS .TA .SA .L .PA .AS`.
   - `SMAP` en `index.html` mapea ticker TradingView → símbolo Yahoo. 32 de 33 verificados.
   - Yahoo mete `null` en días sin cotización; hay que filtrarlos.
4. **Polymarket avanzado** (cerebro F7 y simulador F8)
   - `gamma-api/markets` **tapa a 100** aunque pidas más → agrupar por evento sobre esa
     lista da GRUPOS TRUNCADOS. Usar `/events`, que trae los markets embebidos y completos.
   - Solo `negRisk === true` es mutuamente excluyente. "Bitcoin above ___" son umbrales
     anidados: sumar sus probabilidades no significa nada.
   - ⚠️ **Patas fantasma**: Polymarket rellena grupos grandes con salidas tipo
     "Company F"…"Company T" a `p=0.5` exacto, libro vacío (bid=0 / ask=1) y volumen 0.
     Si se cuelan, un grupo de 25 suma 9.02 en vez de 1.02. Filtrar con `pmLive()`.
   - ⚠️ **Asimetría del sobre-redondeo**: si hay patas excluidas, Σp<1 NO es descuento
     (la masa que falta vive en las patas sin libro); solo vale el lado vendedor.
   - ⚠️ `endDate` **no** es cuando el mercado dejó de cotizar: en ~45% de los resueltos
     no hay histórico cerca de esa fecha. Anclar al ÚLTIMO punto real del histórico.
   - `gamma-api` y `clob.polymarket.com` sirven con `Access-Control-Allow-Origin: *`,
     así que el backtest corre en el NAVEGADOR. Es obligatorio: el plan gratuito de
     Cloudflare permite 50 subpeticiones por request y un backtest necesita cientos.
   - Disponible y aún sin usar: `clob/book?token_id=` (libro con profundidad, para
     DOM/bookmap) y `data-api/trades` (trades con lado BUY/SELL, para delta y CVD).
5. **Noticias** — Google News RSS bloquea peticiones desde centros de datos (503).
   Cadena de respaldo implementada, en este orden:
   `war.gov RSS` (oficial, CORS ok) → `rss2json` → `codetabs` → `allorigins` → `r.jina.ai`.
   El terminal muestra qué fuente respondió.

## Convenciones de código
- Sin frameworks, sin dependencias, sin bundler. JS ES5-ish para máxima compatibilidad.
  `sync.mjs` no es un build: solo copia `index.html` dentro de `worker.js` (Node puro, 0 deps).
  `index.html` sigue abriéndose con doble clic sin nada instalado.
- Todo en un archivo. Estética terminal: negro + ámbar (#ff9f1a), verde (#00e08a), rojo (#ff4d5e).
- Gráficos en **SVG hecho a mano** (sin librerías): `spark`, `areaChart`, `donut`, `hist`, `scatter`.
- Los "gigantes" (primes) se filtran por la lista `PRIMES`.
- La watchlist se guarda en `localStorage` con la clave `mor_w`.

## Vistas
F1 DASH · F2 CONTRATOS · F3 SMALL CAPS · F4 POLYMARKET · F5 NOTICIAS
F6 QUANT (acciones) · F7 CEREBRO (quant de predicción) · F8 SIMULADOR (backtest)

## Matemática del cerebro (F7)
- **Transformada de Wang (2000)**: `p_mercado = Φ(Φ⁻¹(p_real) + λ)`. Genera el sesgo
  favorito-longshot como teorema. `nCdf`/`nPpf` portados de `oracle3` (Apache-2.0),
  sin dependencias. λ se estima por bisección: la que hace que las patas sumen 1.
- **Volatilidad normalizada**: `σ/√(p(1−p))`. La varianza terminal de un binario es
  p(1−p), así que σ cruda no es comparable entre niveles de precio.
- **Urgencia**: `2p(1−p)/√días` — recorrido pendiente por día hasta resolución.
- **Spread relativo**: `spread/p`. 0.001 sobre p=0.02 es el 5%; en absoluto engaña.
- **Kelly**: `f* = (p·b − q)/b`, `b=(1−precio)/precio`. La probabilidad la pone el
  usuario; el terminal NO la estima. Se muestra fraccional por defecto.

## Hallazgos del backtest (01/09/2026, n=107, entrada a 7 días)
- Brier 0.110 vs 0.213 de la tasa base → el mercado **sí** aporta información real.
- **Ninguna estrategia alcanza |t| ≥ 2**: no hay ventaja demostrada en esta muestra.
- "Comprar longshots" da media +76.7% pero **mediana −100%** y 7% de acierto: la media
  la sostienen unos pocos aciertos enormes. Por eso la tabla muestra las dos.
- Muestra sesgada: los cerrados se piden ordenados por volumen. Pendiente muestrear
  al azar antes de sacar cualquier conclusión.

## OSINT (el motor real del producto)
El Monte Carlo (10 M repeticiones, 4.010 M operaciones) no encontró NINGUNA estrategia
con p<0,05. Pero el Brier de 0,128 frente a 0,219 dice que el mercado incorpora bien
la información existente. Las dos cosas juntas significan que **no hay ventaja
estadística; solo la hay informativa**. Por eso el OSINT dejó de ser accesorio.

Verificadas y funcionando, sin clave:
- **SEC EDGAR full-text** (`efts.sec.gov/LATEST/search-index`) — exige User-Agent con
  contacto real. Devuelve empresa, TICKER, SIC, partidas del 8-K y enlace al documento.
  Partida **1.01 = acuerdo material definitivo**, que es la que se presenta al firmar.
  ⚠️ Citar al DoD no es ganar un contrato: farmacéuticas (SIC 283x) lo citan por becas
  y hospitales (806x) por TRICARE. Eran 22 de 59. Se separan por SIC, no a ciegas.
- **Wikipedia pageviews** — atención diaria por artículo.
- **Federal Register** — acciones regulatorias de EE.UU.
- **OpenSky Network** — tráfico aéreo, anónimo y sin clave.
- **Wayback CDX** — da la huella del contenido, así que detecta cuándo cambió de
  verdad una web corporativa.

No disponibles: **GDELT** (agotó el tiempo 3 veces desde aquí, sin confirmar),
**SAM.gov** (licitaciones PRE-adjudicación — necesita clave gratuita, pedirla),
**OpenCorporates** (401, clave gratuita).

## Qué necesita servidor y qué no
Medido con cabeceras CORS reales. Solo **3 de 10** fuentes necesitan pasar por el
Worker; el resto las llama el navegador directamente:
- **Necesitan proxy:** SEC EDGAR, Yahoo precios, Yahoo noticias.
- **CORS abierto:** USAspending, Polymarket gamma, Polymarket CLOB, CourtListener,
  DexScreener, Federal Register, war.gov RSS.

Eso importa para dos cosas: permite que el backtest corra en el navegador
(esquivando el límite de 50 subpeticiones), y significa que migrar a un hosting
estático sería posible — a costa de perder el control de acceso por claves.

## Acceso, claves y qué protege realmente
La interfaz es HTML que el navegador descarga: **es copiable, siempre**. Ofuscarla
solo encarece copiarla. Lo que sí protege es que el cálculo valioso viva en el
Worker y solo responda con clave — si alguien clona la interfaz, se queda sin datos.

- `EXIGIR_CLAVE=1` activa el control. Sin esa variable todo queda abierto, para que
  el desarrollo local no se rompa.
- `ADMIN_TOKEN` es secreto de Cloudflare, **nunca en el repositorio**. Da de alta
  claves en `/api/admin/clave?plan=libre|pro`.
- Las claves se guardan **hasheadas (SHA-256)**, nunca en claro. Se devuelven una
  sola vez y no se pueden recuperar.
- Planes: `libre` 50 llamadas/día sin EDGAR ni litigios; `pro` 5.000 y todo.
  Cupo diario con reinicio automático y cabecera `x-cuota-restante`.
- El cliente manda la clave en `Authorization`, nunca en la URL: las direcciones
  quedan en historiales y registros de servidor.

**Qué se movió al servidor:** el motor de Wang (CDF normal, cuantil, ajuste de λ por
bisección), el valor justo, el sesgo y la curva de distorsión. `/api/pmq` los
devuelve ya calculados.

**Qué NO se puede mover, y por qué:** el backtest y el Monte Carlo necesitan cientos
de peticiones y Cloudflare gratis corta en 50 subpeticiones por request. Corren en
el navegador por obligación, y llevan la matemática normal estándar — que es de
libro de texto y no protege nada. Lo propietario es la aplicación sobre TUS grupos,
no la fórmula.

## Asistente (F1, botón flotante)
No es un modelo "entrenado con el quant": eso envejecería el día que se entrena.
`/api/chat` reúne los datos EN VIVO (precio, pleitos, 8-K, arbitraje del día) y el
modelo solo los redacta. Motor: **Workers AI**, que ya viene con la cuenta.

Regla de diseño, tras todo lo aparecido en el proyecto: **que no se invente nada**.
El prompt le prohíbe salirse del contexto, le obliga a decir "ese dato no lo tengo
cargado" cuando falte, y le impide recomendar comprar, vender o apostar.

⚠️ Necesita el binding **AI** en el panel (Settings → Bindings → Add → Workers AI,
nombre `AI`). Sin él devuelve un error explicando cómo añadirlo.
`dev.mjs` trae un AI simulado que devuelve el contexto, para probar sin gastar cuota.

## Grafo de restricciones lógicas entre eventos (F8)
Polymarket trata cada evento por separado, así que **nadie comprueba si mercados de
eventos distintos se contradicen entre sí**. «Cae el régimen iraní antes de 2027»
implica «cambio de liderazgo en Irán antes de 2027»: la primera no puede cotizar
más cara.

**El reparto de trabajo es lo que hace esto honesto: la IA PROPONE la relación
lógica, la ARITMÉTICA la juzga.** El modelo solo devuelve una de cuatro etiquetas,
nunca estima probabilidades. Si alucina, sale un falso positivo, no una pérdida:
no puede inventarse una ventaja porque la calcula la aritmética.

Tres defensas, todas necesarias y probadas:
1. **Coherencia al invertir.** Si dice «A implica B», al preguntarle (B,A) tiene que
   decir «B es implicada por A». Si responde lo mismo en ambos órdenes no razona,
   reconoce un patrón. Con un modelo que decía IMPLICA a todo: de 6 falsos
   positivos a 0.
2. **Rareza de palabras (IDF).** Sin ella el emparejador se llenaba de partidas de
   Counter-Strike que comparten «counter», «strike» e «iem».
3. **Fuera enfrentamientos directos.** Un partido no implica lógicamente otro.

⚠️ **Límite real, encontrado probando:** la aritmética es tan buena como la lógica
que recibe. Un modelo marcó como excluyentes «gana las elecciones de Brasil» y
«queda segundo en la PRIMERA VUELTA» — y no lo son, porque hay segunda vuelta.
Los hallazgos se presentan como **propuestas a verificar**, nunca como confirmadas.

Las relaciones se cachean en KV: la relación lógica entre dos preguntas no cambia
con el tiempo. Segunda ejecución: 0 consultas al modelo.

## Roadmap (siguiente)
1. ~~Subir `index.html` al Worker~~ hecho (31/08/2026, vía `sync.mjs`). Falta desplegar.
2. Mover el universo `SC` a Google Sheets o KV para editarlo sin redesplegar. ← prioridad
   Punto de inyección ya marcado con comentario en el handler `fetch` de `worker.js`.
3. Configurar alertas Telegram (BotFather + 2 variables).
4. Añadir licitaciones UE/OTAN (TED, NSPA).
5. Matching automático adjudicatario → empresa cotizada (ahora es por coincidencia de nombre).
6. Landing + captar los primeros 10 usuarios de prueba.
7. Detalle al hacer clic en un mercado: resumen respaldado con todas las probabilidades
   del grupo, histórico, métricas y Kelly. ← pedido por el usuario
8. Gráficos dinámicos: Fibonacci sobre histórico, MATRIX/DOM desde `clob/book`,
   DELTA y CVD desde `data-api/trades`, y bookmap acumulando snapshots del libro en KV.
9. Memecoins como universo adicional (más adelante).

## Reglas
- Nada en el producto es recomendación de inversión; mantener el aviso visible.
- Los cruces son coincidencias de nombre: siempre marcarlos como "verificar a mano".
- No construir bots de trading automático ni HFT. El producto es información, no ejecución.
- `ASX:XTE` (XTEK) está deslistada: sigue en `SC` pero sin símbolo en `SMAP`. Revisar si sustituirla.

## Trampas encontradas en la auditoría del 2 de septiembre de 2026

- **Las funciones de gráfico escriben DENTRO del elemento**: `areaChart(el,pts,col,fmtY)`,
  `precioChart(el,cierres)`, `donut(el,…)`, `hist(el,…)`, `scatter(el,…)`. Ninguna
  devuelve HTML. `x.innerHTML = areaChart(datos)` revienta y, como la excepción corta
  la función a medias, deja en blanco todo lo que se pinta después (así se vaciaban
  cinco paneles de la ficha de empresa). Si un popup sale medio vacío, buscar una
  excepción a mitad de su función antes que un problema de datos.
- **`traducir()` hay que llamarla tras cada `render()`**: los repintados escriben
  castellano encima. Ya está al final de `render()`; si se añade otra función de
  pintado que no pase por `render()`, llamarla también.
- **El idioma es independiente del modo**: inglés tiene que funcionar en modo completo.
  El guard de `traducir()` es `if(!simple&&!en)`, no `if(!simple)`.
- **`/api/pm` (lista de portada) no trae `id`**: solo `q, price, chg, vol24, liq, spread,
  url`. Para abrir un mercado desde ahí se usa `pmIrA(null, q)` → APUESTAS con el
  buscador global relleno. Los ids solo están en `BQ.markets` (cerebro).
- **Clics por delegación**: una fila/celda es navegable si lleva `data-tk` (ficha
  empresa), `data-emp` (ídem), `data-con` (ficha contratista), `data-mid` (mercado),
  `data-q` (mercado por título) o `data-ev` (cerebro filtrado por evento). Una tabla
  nueva sin uno de estos atributos está muerta al clic.
- **`#cmd` es el buscador global**: filtra todas las tablas vía `dataset.q` + `render()`.
  Rellenarlo con `buscarGlobal(texto)`.
- **`resize_window` en el navegador embebido deja una emulación pegada**: si una
  captura sale como una cajita diminuta en negro, no es la app; hay que hacer
  `resize_window preset:desktop` antes de juzgar el diseño.
- **El buscador Ctrl+K y las rutas `#emp/…`, `#mer/…`, `#vista`** viven al final del
  script principal; `go()`, `feAbrir()`, `dtOpen()` y sus cierres escriben la ruta.

## Run-test del 2 de septiembre de 2026 (cifras reales de producción)

**Polymarket — 107 mercados resueltos, ventana de 7 días.**
Ninguna estrategia supera al azar. Monte Carlo de 1.000.000 de simulaciones con
hipótesis nula Bernoulli(precio de entrada):

| Estrategia | n | Total | p | Veredicto |
|---|---|---|---|---|
| Comprar longshots (p≤10%) | 59 | +45,2u | 0,206 | indistinguible del azar |
| Comprar todo (referencia) | 107 | +61,2u | 0,169 | dudoso |
| Zona media 10–90% | 39 | +15,4u | 0,065 | dudoso |
| Vender longshots | 59 | −2,6u | 0,969 | indistinguible del azar |

Brier 0,110 frente a tasa base 0,213: **el mercado está bien calibrado**, que es
la razón de fondo por la que no hay estrategia que lo bata.

**λ empírica = −0,366, signo CONTRARIO al +0,183 de la literatura** que usa el
valor justo. No se le da la vuelta (n=107, nada significativo, sería ajustar a
la muestra) pero se avisa en el VEREDICTO con las dos cifras. Si alguien vuelve
a tocar el valor justo, este conflicto sigue abierto.

**Divisas — 10 pares, 370 ventanas sin solapar, mantener 10 días.**

| Estrategia | n | Acierto | t agrupado | t ingenuo |
|---|---|---|---|---|
| Momentum 20d | 137 | 65,7% | 2,07 | 2,78 |
| Comprar siempre (referencia) | 370 | 60,8% | 2,01 | 2,56 |
| Reversión 20d | 69 | 62,3% | 1,72 | 0,93 |

**Trampa: el momentum (t=2,07) no bate a comprar y ya está (t=2,01).** El t
supera 2 pero contra la referencia no aporta nada, y el total son +0,4 unidades
en 137 ventanas, que el spread se come. Falta el test SPA de Hansen para
corregir el sesgo de haber buscado entre varias estrategias; el agrupado por par
solo corrige el solapamiento de ventanas, que es otro sesgo distinto.

## Aprendizaje y test SPA (2 de septiembre de 2026)

**El terminal aprende de su propio historial.** El registro en papel ya guardaba
señales y las liquidaba, pero eso no cambiaba nada. Ahora `/api/aprendizaje`
recorre `paper:done:*` y el cron guarda el resultado en `aprendido:lambda`, que
es lo que lee `fetchPMQ` para el valor justo.

Todo lo aprendido pasa por un **encogimiento**, porque con pocos casos una tasa
cruda es ruido:

- **Beta-Binomial** con previa Beta(2,2) por tipo de señal. Verificado: 3/4
  aciertos da 62,5% (no 75%) con intervalo 36–89%; 300/400 da 74,8%.
- **λ con encogimiento** hacia la literatura, con `LAMBDA_N_PREVIA = 150`.
  Arranca en +0,183 y solo cruza a negativo con ~150 casos propios. Esto resuelve
  el conflicto documentado arriba sin darle la vuelta al signo por una muestra
  corta.
- **PAVA** (regresión isotónica, algoritmo de scikit-learn, BSD-3) y
  **descomposición de Murphy** del Brier en fiabilidad, resolución e
  incertidumbre. Verificado que la identidad se cumple. Se usa para *ver* dónde
  falla, no para recalibrar: con esta muestra recalibrar sería sobreajustar.

**Test SPA de Hansen con remuestreo estacionario por bloques** (Politis-Romano),
en la vista del simulador. Corrige un sesgo DISTINTO del t-stat agrupado: el
agrupado corrige que las ventanas se solapen, el SPA corrige haber probado
varias estrategias y quedarse con la mejor.

**Trampa que ya cayó una vez aquí:** la primera versión contrastaba contra CERO
y daba p=0,004 anunciando que el momentum "sobrevive", marcando como
superviviente hasta a la propia referencia. Contra cero, cualquier estrategia
comprada en un mercado que sube sale significativa: eso es la deriva, no una
ventaja. Contrastando contra la referencia pasiva, que es el planteamiento de
Hansen, sale **p = 0,223: ninguna bate a comprar y ya está**, que coincide con
el análisis manual (momentum t=2,07 frente a referencia t=2,01). Si alguien
vuelve a tocar `spaTest`, el contraste es contra `iRef`, nunca contra cero.

Los retornos por operación se guardan en `btStats` como `rs`: sin ellos no hay
con qué remuestrear.
