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
- `docs/DESPLIEGUE.md` — PENDIENTE: lo citan README y este archivo, pero no existe en el repo.

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
