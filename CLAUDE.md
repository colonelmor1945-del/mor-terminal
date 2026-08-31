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
- `worker.js` — backend Cloudflare Worker: sirve la UI + API propia + histórico en KV + cron + alertas Telegram.
- `docs/DESPLIEGUE.md` — cómo publicarlo en Cloudflare paso a paso.

## Estado actual
- Desplegado en `https://mor-terminal.colonelmor1945.workers.dev` (versión antigua).
- `index.html` es la versión NUEVA y mejor. Pendiente: subirla al Worker.
- KV namespace `RADAR_KV` creado y enlazado como binding `RADAR`.
- Cron activo: `0 7 * * *` (snapshot diario).
- Telegram NO configurado todavía (faltan vars `TELEGRAM_TOKEN` y `TELEGRAM_CHAT`).

## Fuentes de datos y trampas conocidas (IMPORTANTE)
1. **USAspending** (`api.usaspending.gov`, POST `/api/v2/search/spending_by_award/`)
   - ⚠️ Desde un **Cloudflare Worker** devuelve **HTTP 525** (fallo de handshake TLS
     entre Cloudflare y su origen). **Desde el navegador funciona perfecto** y permite CORS.
   - Por eso el frontend hace el fetch directo si el Worker falla. NO quitar ese respaldo.
2. **Polymarket** (`gamma-api.polymarket.com/markets`) — funciona desde ambos lados. Sin API key.
3. **Noticias** — Google News RSS bloquea peticiones desde centros de datos (503).
   Cadena de respaldo implementada, en este orden:
   `war.gov RSS` (oficial, CORS ok) → `rss2json` → `codetabs` → `allorigins` → `r.jina.ai`.
   El terminal muestra qué fuente respondió.

## Convenciones de código
- Sin frameworks, sin build, sin dependencias. JS ES5-ish para máxima compatibilidad.
- Todo en un archivo. Estética terminal: negro + ámbar (#ff9f1a), verde (#00e08a), rojo (#ff4d5e).
- Gráficos en **SVG hecho a mano** (sin librerías): `spark`, `areaChart`, `donut`, `hist`, `scatter`.
- Los "gigantes" (primes) se filtran por la lista `PRIMES`.
- La watchlist se guarda en `localStorage` con la clave `mor_w`.

## Roadmap (siguiente)
1. Subir `index.html` al Worker (sustituir el HTML embebido).
2. Mover el universo `SC` a Google Sheets o KV para editarlo sin redesplegar. ← prioridad
3. Configurar alertas Telegram (BotFather + 2 variables).
4. Añadir licitaciones UE/OTAN (TED, NSPA).
5. Matching automático adjudicatario → empresa cotizada (ahora es por coincidencia de nombre).
6. Landing + captar los primeros 10 usuarios de prueba.

## Reglas
- Nada en el producto es recomendación de inversión; mantener el aviso visible.
- Los cruces son coincidencias de nombre: siempre marcarlos como "verificar a mano".
- No construir bots de trading automático ni HFT. El producto es información, no ejecución.
