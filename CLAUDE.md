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

## Run de 4.000 millones de operaciones (3 de septiembre de 2026)

Ejecutado dos veces con la misma lógica y resultados coincidentes: fuera del
navegador sobre 165 mercados resueltos (44 s) y dentro del navegador sobre los
107 de la app (45,1 s). El Monte Carlo vive ahora en un **Web Worker** creado
desde un Blob, porque en el hilo principal la página se quedaba pillada; la
interfaz sigue respondiendo mientras calcula, verificado cambiando de vista a
mitad del cálculo.

Hipótesis nula: el precio ya es la probabilidad correcta. Muestra de 165:

| Estrategia | n | Total | p |
|---|---|---|---|
| Comprar todo (referencia) | 165 | +105,6u | 0,111 |
| Comprar longshots (p≤10%) | 83 | +89,1u | 0,137 |
| Zona media 10–90% | 72 | +15,9u | 0,096 |
| Momentum alcista | 55 | +23,0u | 0,146 |
| Favoritos (p≥80%) | 17 | +1,7u | 0,197 |
| Momentum bajista | 65 | −2,4u | 0,777 |
| Vender longshots | 83 | −5,0u | 0,997 |

**Ninguna baja de p=0,05.** Control de sesgo: la media del azar sale 0,000
(mayor desvío 0,005u). Con 4.000 millones de tiradas el error de muestreo del
propio Monte Carlo es despreciable, así que estos valores p son los verdaderos:
el problema no es falta de simulaciones, es que no hay ventaja que encontrar.

El selector admite ahora objetivos en operaciones (`ops:1e9`, `ops:4e9`) además
de repeticiones, porque "4.000 millones de operaciones" se entiende y "7.407.408
repeticiones" no.

## Divisas: 4.000 millones de operaciones y por qué el hallazgo no era real

Ejecutado el 3 de septiembre de 2026 sobre 18 pares de Yahoo, 666 ventanas sin
solapar (señal 20 días, mantener 10). 4.000M de operaciones en 103 s.

**La prueba de Polymarket no vale aquí.** Allí la nula es "el precio es la
probabilidad" y necesita un desenlace de sí o no; una divisa no resuelve. La
nula correcta es **la señal no lleva información**: si elegir n ventanas por
momentum rinde lo mismo que elegir n al azar del mismo par, la señal no predice.
Contrastar contra cero solo diría que el mercado subió.

Resultado con permutación dentro de cada par:

| Estrategia | n | Media real | Media al azar | p |
|---|---|---|---|---|
| Reversión fuerte (−3%) | 22 | +0,736% | +0,015% | 0,006 |
| Reversión (−1%) | 129 | +0,290% | +0,056% | 0,011 |
| Momentum (+1%) | 245 | +0,134% | +0,237% | 0,953 |

Parecía un hallazgo. Sobrevivió a las cuatro comprobaciones obvias: repartido en
17 pares (máximo 11%), aguanta quitar cualquier par, sobrevive a Bonferroni con
7 estrategias, y a costes de hasta 0,20%.

**Pero se cae en las dos que importan:**

1. **Desfase temporal común a todos los pares.** La permutación por par rompe la
   correlación *entre* pares: cuando el dólar se mueve, medio mercado cae a la
   vez, así que la estrategia real elige ventanas correlacionadas y el azar no.
   Eso hace la nula demasiado estrecha. Desplazando la señal respecto al
   resultado con el mismo desfase en todos los pares, la reversión de −1% pasa de
   p=0,011 a **p=0,135**.

2. **No replica en datos independientes.** Los tipos oficiales del BCE
   (`/api/bce`, vía frankfurter.dev, gratis y sin clave) dan sobre 15 cruces del
   euro y 735 ventanas: reversión fuerte **p=0,408**, reversión **p=0,245**,
   momentum **p=0,694**. El efecto cae de +0,736% a +0,226%.

**Conclusión: nada predice en divisas.** Si alguien vuelve a encontrar algo aquí,
las dos pruebas que hay que pasar son el desfase común y la réplica en el BCE;
las otras cuatro se pasan solas y no valen.

**Aviso sobre EDGE en divisas:** estima 0,36%–0,97% de spread en pares mayores,
lo cual es falso (lo real son 0,01%–0,04%). EDGE supone precios negociados y las
barras de divisas de Yahoo son cotizaciones indicativas. **No usar el coste de
EDGE para divisas**; en acciones sí es válido.

## Divisas: por qué no hay señales de compra, y qué hay en su lugar

Se auditaron **las tres** señales direccionales de divisas. Ninguna sobrevive:

| Señal | Yahoo | BCE oficial |
|---|---|---|
| Momentum (+1%) | p=0,953 | p=0,694 |
| Reversión (−1%) | p=0,011 → **0,135** con desfase | p=0,245 |
| Reversión fuerte (−3%) | p=0,006 → **0,027** con desfase | **p=0,408** |
| Cointegración de pares | 60% aciertos, +0,308% | **50% aciertos, −0,018%** |

La cointegración acierta exactamente 50% en datos oficiales: cara o cruz.

**En su lugar hay cinco herramientas que no predicen dirección** (panel
"DIVISAS · ESTRUCTURA Y RIESGO", `fxQuantRender`). Validadas contra casos de
respuesta conocida antes de fiarse de ellas:

1. **Componentes principales**. Un factor explica el 31% de todo. Validación en
   datos reales: los pares XXX/USD cargan positivo y los USD/XXX negativo, que
   es el factor dólar con el signo invertido por la convención de cotización.
   Ojo al interpretar: **carga negativa no es independencia**, es que el dólar
   está en el otro lado de la fracción. El listón es 1/√k (carga uniforme), no
   un umbral fijo.
2. **Razón de varianzas de Lo y MacKinlay** con error típico robusto. Validada:
   paseo aleatorio z=−1,0, tendencia impuesta z=+11,7, reversión impuesta
   z=−5,5. En datos reales, **15 de 18 pares son paseo aleatorio**.
3. **Cono de volatilidad**. Validado: mediana 15,8% frente a 15,9% teórico.
4. **VaR y pérdida esperada**, histórico y Cornish-Fisher. Aquí está el mayor
   valor práctico: AUD/USD tiene curtosis 16,2 y asimetría −1,31, así que el VaR
   histórico dice −1,25% y el corregido por colas **−3,92%**. Tres veces más.
   AUD/JPY igual: −1,69% frente a −4,54%.
5. **Número efectivo de apuestas** (inverso de Herfindahl sobre los valores
   propios): **3,9 apuestas independientes entre 18 pares**.

Si alguien vuelve a proponer una señal direccional de divisas, las dos pruebas
que hay que pasar son el **desfase temporal común** (respeta la correlación entre
pares) y la **réplica en `/api/bce`**. Las otras comprobaciones se pasan solas.

## Fibonacci y caos, medidos (3 de septiembre de 2026)

**Fibonacci no aporta nada.** Se marcaron los retrocesos 23,6 / 38,2 / 50 / 61,8
/ 78,6% sobre 8 divisas, tramo de 60 sesiones, y se midió si el precio rebota al
cruzarlos. **945 cruces: rebota el 45,0%.** Niveles elegidos al azar en el mismo
rango, 400 repeticiones: **44,0%** (rango 41,1–47,4%). **p = 0,20.** Fibonacci no
se distingue de marcar una raya cualquiera. Nota adicional: al ser menor del 50%,
lo típico es que el precio siga, no que rebote.

**Caos: hay estructura no lineal en 2 de 6 pares**, medida con el contraste BDS
de Brock, Dechert y Scheinkman tras quitar la parte lineal AR(1). EUR/USD z=2,31
y USD/JPY z=2,14 a m=3. Es real, pero es volatilidad agrupada: dice cuánto se
moverá, **no hacia dónde**. Lyapunov y dimensión de correlación necesitan miles
de puntos; con 400 dan un número que siempre sale y siempre miente.

## Ficha de contratista: se rellena por nombre

Al pulsar un adjudicatario que no está en la lista de 33 se abría con cuatro
paneles vacíos. Nuevo `/api/contratista?n=NOMBRE`: resuelve el símbolo por Yahoo,
trae precio, noticias y pleitos de CourtListener.

**Tres trampas encontradas y cerradas, todas del mismo tipo — datos de OTRA
empresa son peor que ningún dato:**

1. Las barras invertidas de los literales `/.../` **se perdieron al generar el
   fichero**, dejando `[^ws&-]`, que borra todo menos esas cuatro letras: "AT&T
   ENTERPRISES, LLC" quedaba en `"&"`. Ahora los patrones se construyen con
   `new RegExp("...")` desde texto. **Si algo parece un fallo de expresión
   regular en `worker.js`, comprobar primero si hay caracteres de control
   reales en el fichero.**
2. Yahoo devuelve titulares cualesquiera cuando no encuentra la empresa: para
   AECOM traía noticias de Offerpad y Opendoor. Ahora se exige que el titular o
   el medio mencionen una palabra distintiva del nombre.
3. CourtListener con una palabra corta trae homónimos, personas físicas
   incluidas. Mínimo cinco caracteres útiles o no se consulta.

Verificado: Lockheed → LMT con precio, noticias suyas y pleitos suyos. AT&T
Enterprises → sin símbolo y **cero** noticias, en vez de ocho ajenas.

## Coherencia de de Finetti (3 de septiembre de 2026)

`/api/coherencia`, panel en INVESTIGACIÓN. De Finetti (1937): un vector de
precios sobre eventos ligados por lógica es coherente si y solo si cae dentro de
la envolvente convexa de los mundos posibles. Si cae fuera, el teorema de
separación devuelve la cartera exacta con pago no negativo en todos los mundos.

**Validado antes de conectarlo a nada** (`definetti-core.mjs`): símplex contra
cuatro problemas de solución conocida, y el motor de arbitraje contra cinco
casos hechos a mano. Lo decisivo: en los casos SIN arbitraje devuelve
**exactamente 0**. Un símplex mal hecho no falla, inventa arbitrajes.

**Dos trampas encontradas al conectarlo a datos reales:**

1. **Grupo incompleto tratado como completo.** El filtro de mercados descarta
   patas por precio o liquidez, así que un grupo de 8 salidas llegaba con 2, y
   afirmar "exactamente una de estas dos gana" es falso. Propuso comprar los
   tramos SPD 5-7% y 7-9% como si fueran las únicas salidas: **+3,50% de
   arbitraje inexistente**. Guarda: se exige `ids.length === g.n && g.completo`
   y que los precios sumen entre 0,90 y 1,12.
2. **Sentido de la implicación por fecha.** "Ocurre ANTES DE" es acumulativo
   (más plazo, más probable) pero "CONTINÚA HASTA" es supervivencia (al revés).
   Sin distinguirlo, cada familia de supervivencia produce arbitrajes fantasma.

**Incoherencia y arbitraje no son lo mismo**, y se listan por separado. Ejemplo
real: GPT-6 antes del 30 de noviembre cotiza 95,9% y antes del 31 de diciembre
95,7%. Diciembre no puede valer menos. Pero el bid de noviembre es 95,2 y el ask
de diciembre 96,3: **la horquilla se lo come**. Es información sobre dónde el
mercado está descuidado, no dinero.

**Las implicaciones por fecha se extraen por regla, sin modelo y con error cero.**
El agente de relaciones había clasificado "Hormuz normal antes del 31 de
diciembre" y "antes del 30 de septiembre" como SIN RELACIÓN, que es un error
claro. Hoy la regla extrae 22 implicaciones, 21 coherentes y 1 violada.

## Traducción al inglés: el método estaba mal (3 de septiembre de 2026)

El diccionario se aplicaba **palabra a palabra dentro de las frases**, y sin
parar tras la primera coincidencia. El resultado eran frases mutantes, peores
que no traducir:

- "Cargando los datos del **day**…"
- "**Amount** que el Pentágono adjudica a una empresa"

**Método nuevo**, en `traducir()`, por orden: coincidencia de frase completa;
si no, del texto original (en modo sencillo el primer diccionario ya lo cambió);
si no, prefijo con clave de 7+ caracteres **y** separador detrás; si no encaja
nada, **se deja en castellano**. Una frase en el idioma equivocado es mejor que
una inventada.

**Tres guardas que hubo que añadir, las tres del mismo tipo — reescribir el
`innerHTML` de un padre destruye a sus hijos:**

1. Elementos con `select`/`input`/`button` dentro: traducirlos borraba el
   control y luego todo lo que lo buscaba encontraba `null`.
2. Elementos con hijos **con identificador**: los títulos llevan contadores
   (`<h3>TABLA QUANT <span id="q-cnt"></span></h3>`) y al traducir el título
   desaparecía el contador y el repintado moría.
3. Elementos con hijos **traducibles** (`.st`, `.k`, `.s`): al reescribir el
   padre se recreaban los hijos, que quedaban huérfanos, y la lista de nodos ya
   estaba capturada. Por eso los sufijos "— cointegración" seguían en castellano
   aunque estuvieran en el diccionario.

En todos esos casos se traduce **solo el primer nodo de texto** y se deja que
los hijos se traduzcan por su cuenta.

Resultado medido: **de 273 cadenas en castellano a 10**, cero errores de
JavaScript, controles intactos y el castellano vuelve intacto al cambiar de
idioma. Lo que queda son dos párrafos largos y algunas etiquetas con contador.
**Los nombres de mercados de Polymarket NO se traducen** y no deben: son datos.

## Móvil (3 de septiembre de 2026)

Antes había **una sola** media query en toda la app, a 1250 px, y solo cambiaba
columnas. En un teléfono real la cabecera se salía, la fila de vistas se cortaba
sin indicar que había más, los títulos de mercado quedaban en "Will S…" y las
tablas se cortaban por el borde.

Decisiones y su motivo:

- **No se ocultan columnas.** La primera columna queda **fija** al desplazar en
  horizontal, que es lo que permite leer una tabla ancha sin perder de vista de
  qué fila se trata. Ocultar columnas sería esconder información sin avisar.
- Las dos filas de navegación se desplazan con un **degradado en el borde**, que
  es la señal de que hay más a la derecha.
- Objetivos táctiles a **40 px**; campos a **16 px** para que el navegador no
  haga zoom solo al enfocarlos.
- Por debajo de 560 px se ocultan las columnas `.mates` aunque estés en modo
  completo: en esa anchura la jerga sobra.

Trampa: `display:inline-flex` en las etiquetas de filtro **colapsa el espacio**
entre el texto y su contador, y salía "Todas400". Se arregla con `gap`.

## Traducción: dos gaps más

- **Los atributos no son texto visible.** Los `placeholder` y los `title` nunca
  pasaban por `traducir()`. Ahora se traducen aparte, por frase completa, con su
  propio `data-o*` para poder revertirlos.
- **Las etiquetas del semáforo las compone el JavaScript** (`fiable`,
  `reservas`, `cuidado`), así que el diccionario del DOM no las alcanzaba. Van
  con `T(es,en)` al construirlas.
- El umbral de prefijo baja a 5 caracteres **solo si lo que sigue es un contador
  o una etiqueta** (`"Todas 400"`, `"Cripto <span>73</span>"`). Con esa guarda
  una clave corta no puede morder una frase larga, que es lo que producía
  "Market Will Sarah Huckabee…".

## Aitchison, matrices aleatorias y dependencia de cola (3 de septiembre de 2026)

Los tres validados fuera del navegador antes de integrarlos (`mate3.mjs`).

**1. Geometría del símplex (Aitchison, 1982).** El símplex de probabilidades no
es euclídeo. Medido: la distancia euclídea da **0,0141 tanto para 1%→2% (que
DUPLICA la probabilidad) como para 50%→51% (que no es nada)**. Aitchison da
0,497 frente a 0,028: 17,6 veces más para el que importa. Verificada también la
invariancia al reescalar. El ranking de movimientos del día estaba ciego justo a
las patas baratas, que son las que se mueven antes de una resolución. Ahora la
lista de mayores movimientos marca la sorpresa de Aitchison cuando supera 0,35.

**2. Marchenko-Pastur (1967).** Con N activos y T periodos, los autovalores de
datos sin estructura caen en [(1−√q)², (1+√q)²] con q=N/T. Validado: con series
independientes (N=20, T=400, banda [0,603 · 1,497]) el mayor autovalor sale
1,427 y **ninguno** supera el techo; con un factor común impuesto sale 10,58 y
**exactamente uno** lo supera.

Resultado real sobre las 33 empresas: **solo 2 factores son reales de 32**, el
mayor explica el 16%, y el resto del espectro es ruido de muestreo.

Se usan retornos **semanales**, no diarios: Tel Aviv, Seúl, São Paulo y Nueva
York no cierran a la vez y con datos diarios las correlaciones entre husos salen
sesgadas a la baja (efecto Epps).

**3. Dependencia de cola (Coles, Heffernan y Tawn, 1999).** La correlación mide
el centro y no dice nada del día malo. Validado con datos fabricados: con un
golpe común el 5% de los días, **χ vale 0,49 mientras la correlación se queda en
0,45 y no lo ve**.

Resultado real: **21 pares caen juntos más de lo que explicaría el azar**. El
peor, Data Patterns y MTAR Technologies (ambas indias), se hunden juntas el 71%
de las veces. El umbral no es cero: sale de barajar las fechas 60 veces y tomar
el percentil 95, porque con pocos días malos la χ de un par suelto es ruido.

## TradingView incrustado

La ficha de empresa tiene ahora dos pestañas: el gráfico propio y el de
TradingView. El guion se pide **bajo demanda**, solo al abrir la pestaña. Solo
se intenta con mercados que TradingView reconoce (lista `TV_OK`); con el resto
se explica por qué no se puede en vez de dejar un recuadro vacío. Al cambiar de
empresa se vuelve al gráfico propio, para que no quede a la vista el de la
empresa anterior.

## Bitcoin arriba/abajo y temperatura (3 de septiembre de 2026)

### Bitcoin: la regla, identificada al 100%

`slug=bitcoin-up-or-down-on-{mes}-{dia}-{año}` **con `&closed=true`**, que es
imprescindible: sin él las consultas por slug no devuelven los resueltos.

Resuelve ARRIBA si el cierre de la vela de **1 minuto** de Binance BTC/USDT en el
instante de `endDate` supera al de 24 horas antes. **Verificado: 40 de 40 días.**
Con velas horarias solo explicaba el 92%, y con la ventana desplazada un día, el
77%. La referencia se conoce desde el primer minuto y no cambia.

**El modelo de volatilidad NO bate al mercado.** Sobre 80 días y 172
observaciones, con `P = Φ(ln(S/A)/(σ√T))`:

| Horas restantes | Brier mercado | Brier modelo | Gana |
|---|---|---|---|
| 12 | 0,2093 | 0,2340 | mercado |
| 8 | 0,2121 | 0,2334 | mercado |
| 4 | 0,2009 | 0,2040 | mercado |

Remuestreando **por día** (no por observación), el modelo gana en el 2,9% de las
réplicas a 12h y el 3,2% a 8h: el mercado es significativamente mejor. La
aparente infravaloración del mercado en la tabla de calibración es un sesgo de
muestra de 29 días con deriva alcista, no una ventaja.

### Temperatura: el sesgo es por ciudad, y es grande

El mercado resuelve contra una **estación** concreta (el Observatorio de Hong
Kong, por ejemplo), no contra un modelo. Open-Meteo da el valor de una celda de
rejilla que está en otro sitio. Medido sobre 16 días resueltos por ciudad:

| Ciudad | Sesgo | Dispersión residual | Acierta el tramo |
|---|---|---|---|
| Taipéi | **−1,64 °C** | 0,96 | 38% |
| Hong Kong | −0,29 | 0,90 | 44% |
| Tokio | +0,42 | 1,31 | 19% |
| Shanghái | +0,48 | 0,83 | 44% |
| Kuala Lumpur | **+1,51 °C** | 1,25 | 56% |

**3,2 °C de diferencia entre ciudades.** Quien use el valor crudo se equivoca de
forma sistemática. `/api/clima` corrige por ciudad y combina la dispersión
residual con la discrepancia entre los cuatro modelos (ECMWF, GFS, ICON, JMA).

**Dos avisos que no hay que perder:** las ciudades con `calibradoCon:0` no están
calibradas. Y cuando el día ya ha ocurrido el mercado conoce el dato y cotiza al
100%: comparar entonces con una previsión no significa nada. Por eso la
respuesta lleva `horasRestantes` y `yaDecidido`.

**No está demostrado que esto gane dinero.** Lo demostrado es que la previsión
corregida está centrada. Falta el contraste contra el precio de mercado, que es
el que decide.

## Versión clara, acabado neón y rastro de navegación (3 de septiembre de 2026)

**El tema no se podía cambiar solo con variables.** Había **74 colores escritos a
mano**: 44 en los gráficos generados desde JavaScript y 30 en el CSS. Al pasar a
claro se quedaba media pantalla en negro. Se convirtieron todos a variables (los
atributos `fill` y `stroke` de un SVG incrustado aceptan `var()`), y se añadieron
tres niveles de fondo que faltaban: `--fondo0` (cinta, pie, barra de comandos),
`--fondo1` (cabeceras pegajosas) y `--fondo2` (controles).

El lienzo del fondo topográfico no entiende de CSS, así que `dibujarTopo()` lee
el tema. Se descartó invertirlo con un filtro porque también invertía el color de
las curvas y quedaba turbio.

**La paleta clara no es la oscura invertida.** Sobre blanco, el ámbar y el verde
brillantes no se leen, así que los acentos se oscurecen (`--am` pasa de `#e3a44a`
a `#a86a12`) y los grises se recalculan para conservar la jerarquía.

**Acabado neón, con una regla:** brilla lo que hay que mirar y nada más. Si todo
brilla no destaca nada y se lee peor. El halo se reserva para la cifra grande de
cada bloque, el filo superior de los paneles y lo que está vivo. En pantallas de
menos de 560 px el brillo se quita: cansa más de cerca. Y se respeta
`prefers-reduced-motion`.

**Rastro de navegación.** Los atajos F1-F12 ya funcionaban y el buscador salta a
cualquier sitio, pero faltaba lo más básico: saber dónde estás. Con dos niveles
de pestañas y trece pantallas, eso desorienta. Ahora hay una línea con grupo y
vista, cada parte pulsable, más el nivel de la ficha abierta. El botón de volver
**solo aparece cuando hay a dónde volver**: un botón que no hace nada es peor que
ninguno.

## Volumen, fondo e interactividad (3 de septiembre de 2026)

**3D con CSS y SVG, sin librerías.** WebGL costaría cientos de kilobytes y
dejaría fuera equipos modestos para algo que se mira, no se juega. Regla: el
relieve solo entra donde **añade información**.

- Las cifras se levantan al pasar el ratón, lo que dice que son pulsables.
- El reparto del gasto pasa a ser un anillo con grosor real (`donut3d`): 24 capas
  de elipse simulan volumen. Un círculo plano solo muestra la proporción.
- El mapa de calor se convierte en relieve: la altura acompaña al color.

**Fondo con profundidad.** El relieve topográfico se desplaza unos píxeles con el
ratón. Se mueve el **lienzo ya dibujado** con una transformación, nunca
repintándolo: redibujar miles de curvas a cada movimiento quemaría la batería de
un portátil para nada. Se desactiva por debajo de 900 px y con
`prefers-reduced-motion`.

**Cruceta en los gráficos de área.** `areaChart` usaba `<title>`, que solo sale
tras un segundo largo y en una caja del sistema. Ahora hay lectura del punto al
pasar, igual que en el gráfico de precio.

**Trampa que costó encontrar:** al añadir la capa de degradado del fondo
(`body::after`, posicionada con `z-index:0`), el rastro de navegación quedó
**invisible**: era `position:static` sin `z-index`, y en ese caso los elementos
posicionados con z-index 0 pintan por encima. La lista de elementos que suben al
plano 1 (`.hdr,.nav,.nav2,.navwrap,.tape,#rastro,main,.ftr,#dt,#fe`) hay que
mantenerla al día si se añade cualquier capa de fondo nueva.

## Redes, VHLA Media y vídeo corto (3 de septiembre de 2026)

**Qué se puede integrar sin claves de API, que es la condición del proyecto:**

- **VHLA Media** (`/api/vhla`): no publica canal RSS, así que se lee su página de
  artículos. Una petición para diez artículos en vez de 233. Tres trampas de
  raspado que costaron encontrar: el titular salía del atributo `class` (se
  arregla saltando los atributos con `[^>]*>`); la imagen está **antes** del
  enlace, porque el enlace es una capa que cubre la tarjeta; y Webflow sirve en
  diferido, así que hay que mirar `src`, `data-src` y `srcset`, descartando
  logotipos. Resultado: 10 de 10 con imagen.
- **YouTube**: admite incrustar por búsqueda sin clave, así que los canales
  temáticos de vídeo corto funcionan de verdad.
- **X, TikTok, Instagram y LinkedIn**: exigen clave o bloquean el incrustado. Van
  como **búsquedas preparadas**, no como paneles vacíos con su logo. Fingir una
  integración que no existe es peor que no tenerla.

Enlaces propios del usuario, los primeros de la lista: **Stratton Capital**
(`stratton-capital-9n5.pages.dev`) e **Instagram @blackdelta5**.

## Trampa recurrente: `</div>` de más

Han aparecido **tres veces** al insertar vistas nuevas con `rep()` sobre el
marcador `<div class="view" id="v-xxx">`: cada inserción añadía un cierre que
sobraba, `<main>` se cerraba antes de tiempo y el navegador sacaba las últimas
vistas fuera del contenedor, pintándose unas encima de otras.

**Comprobación obligatoria tras tocar el marcado:** el balance de `<div>` y
`</div>` dentro de `<main>` tiene que dar exactamente 0, y
`document.querySelectorAll('body > .view')` tiene que estar vacío.
