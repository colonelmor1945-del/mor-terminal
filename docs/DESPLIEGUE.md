# Publicar MOR TERMINAL

## Lo importante primero

**No hace falta instalar nada.** El terminal entero son dos archivos, y `worker.js`
ya lleva `index.html` dentro. Se despliega copiando y pegando en el panel de
Cloudflare. Tamaño actual: **76 KB comprimidos**, contra el límite de 1 MB del plan
gratuito.

Para cargarlo en el portapapeles de una vez:

```bash
cd C:\Users\colon\Proyectos\mor-terminal; node sync.mjs; cmd /c "type worker.js | clip"
```

Usa `type ... | clip`, no `Set-Clipboard`: con archivos de este tamano el segundo
falla en silencio y deja el portapapeles vacio.

---

## Antes de pegar: sincronizar

`worker.js` contiene una copia de `index.html`. Si has tocado la interfaz, hay que
regenerarla o subirás la versión vieja:

```bash
cd C:\Users\colon\Proyectos\mor-terminal
node sync.mjs
```

Debe decir `OK — index.html (N B) embebido en worker.js`.

## Probar en local antes de subir

```bash
node dev.mjs
```

Abre `http://localhost:8787`. Ejecuta el Worker igual que Cloudflare, con un KV
falso en memoria. Si algo falla aquí, fallará allí.

---

## Desplegar (5 minutos, sin instalar nada)

1. Entra en **dash.cloudflare.com** → *Workers & Pages* → tu worker `mor-terminal`.
2. Botón **Edit code** (o *Quick edit*).
3. Borra todo el contenido y pega `worker.js` entero.
4. **Save and deploy**.

Eso es todo. La interfaz nueva sale al recargar.

### Alternativa con wrangler (si prefieres línea de comandos)

`wrangler.toml` **ya esta en el repositorio**, con tu binding real, tu cron y tu
fecha de compatibilidad leidos del Worker en produccion. Solo hace falta:

```toml
name = "mor-terminal"
main = "worker.js"
compatibility_date = "2026-01-01"

[[kv_namespaces]]
binding = "RADAR"
id = "PON_AQUI_EL_ID_DE_TU_NAMESPACE"

[triggers]
crons = ["0 7 * * *"]
```

Y luego:

```bash
npx wrangler deploy
```

La primera vez abre el navegador para autorizar.

⚠️ Probado en este equipo y **falla**: `wrangler login` se cae con `Assertion
failed` de libuv en Windows y nunca recibe el testigo. La via recomendada sigue
siendo copiar y pegar.

---

## Configuración en el panel

### Almacenamiento (ya lo tienes)

*Settings → Variables → KV Namespace Bindings*

| Nombre de la variable | Namespace |
|---|---|
| `RADAR` | `RADAR_KV` |

Sin esto no funcionan: el motor de papel, el histórico, las claves de acceso ni la
memoria del vigilante de 8-K.

### Cron (ya lo tienes)

*Settings → Triggers → Cron Triggers*: `0 7 * * *`

Cada día a las 07:00 hace el snapshot de contratos, revisa los 8-K nuevos, anota
las señales del día y liquida las que ya hayan resuelto.

### Asistente (Workers AI)

*Settings → Bindings → Add → Workers AI*, con nombre exactamente `AI`.
Sin esto el asistente responde con un error explicando que falta; el resto del
terminal funciona igual.

### Variables opcionales

*Settings → Variables → Environment Variables*

| Variable | Para qué | Tipo |
|---|---|---|
| `TELEGRAM_TOKEN` | Alertas de cruces y 8-K | **Secreto** |
| `TELEGRAM_CHAT` | Tu chat de destino | Texto |
| `EXIGIR_CLAVE` | Ponla a `1` para exigir clave de acceso | Texto |
| `ADMIN_TOKEN` | Permite dar de alta claves | **Secreto** |

`ADMIN_TOKEN` y `TELEGRAM_TOKEN` van como **secretos (Encrypt)**, nunca como texto
plano y nunca en el repositorio.

### Telegram, paso a paso

1. En Telegram, habla con **@BotFather** → `/newbot` → te da el token.
2. Escríbele algo a tu bot nuevo.
3. Abre `https://api.telegram.org/bot<TU_TOKEN>/getUpdates` y busca `"chat":{"id":`.
4. Ese número es `TELEGRAM_CHAT`.

---

## Activar el control de acceso

Solo si vas a cobrar o limitar el uso.

1. Pon `EXIGIR_CLAVE = 1` y `ADMIN_TOKEN` como secreto.
2. Date de alta tu propia clave:

```bash
curl -H "Authorization: Bearer TU_ADMIN_TOKEN" "https://mor-terminal.colonelmor1945.workers.dev/api/admin/clave?plan=pro&nota=yo"
```

3. Guárdala: **solo se muestra una vez**. En el KV se almacena su SHA-256, así que
   no se puede recuperar.
4. En el terminal, pégala en el campo *Clave de acceso* de la portada.

Planes: `libre` (50 llamadas/día, sin EDGAR ni pleitos) y `pro` (5.000, todo).

---

## Cobrar en USDC (Solana / Phantom)

Solo si vas a cobrar. **Nunca hace falta tu clave privada ni tu frase semilla**: el
Worker solo LEE la cadena, que es pública.

1. En el panel, *Settings → Variables*, añade:

| Variable | Valor | Tipo |
|---|---|---|
| `WALLET_SOL` | Tu dirección **pública** de Phantom | Texto |
| `PRECIO_USDC` | Precio mensual, p.ej. `20` | Texto |

2. Activa también `EXIGIR_CLAVE = 1`, o el terminal seguirá siendo de acceso libre
   y nadie tendrá motivo para pagar.

3. El usuario te envía USDC y pega la firma de la transacción en la portada. El
   Worker comprueba cuatro cosas y las cuatro hacen falta:
   - La transacción existe, está **finalizada** y no falló.
   - El dinero llega **a tu dirección**, no a otra.
   - El importe alcanza el precio.
   - Esa firma **no se ha canjeado antes**. Sin esto, uno paga una vez y genera
     claves infinitas reenviando la misma firma.

4. Si todo cuadra emite una clave `pro` con caducidad. Pagar el triple da tres meses.

Probado con seis transacciones simuladas: pago correcto aceptado, pago a otra
cartera rechazado, importe insuficiente rechazado, transacción fallida rechazada,
otro token rechazado, y reintento del pago válido rechazado por repetido.

**Aviso legal, no técnico:** cobrar por información financiera tributa igual en
cripto que en euros, y desde 2026 los exchanges reportan a Hacienda. Consúltalo con
un gestor antes de facturar.

---

## Comprobar que fue bien

```bash
curl https://mor-terminal.colonelmor1945.workers.dev/api/estado
```

Debe responder `{"ok":true,...}`. Si dice `"control":"activo"` es que las claves
están exigiéndose.

---

## Si algo falla

| Síntoma | Causa casi segura |
|---|---|
| Sale la interfaz vieja | Olvidaste `node sync.mjs` antes de pegar |
| `KV no configurado` | Falta el binding `RADAR` |
| Los precios no cargan | Yahoo caído, o símbolo mal en `SMAP` |
| Los contratos no cargan | USAspending da 525 desde el Worker; el navegador tiene respaldo directo |
| `429` en pleitos | CourtListener limita el uso anónimo; espera un minuto |
| Sin alertas de Telegram | Faltan `TELEGRAM_TOKEN` o `TELEGRAM_CHAT` |

---

## Alternativas gratuitas a Cloudflare

Solo **3 de 10 fuentes** necesitan servidor: SEC EDGAR, precios de Yahoo y noticias
de Yahoo. El resto permite CORS y el navegador las llama directo. Eso abre opciones.

| Opción | Encaja porque | Lo que pierdes |
|---|---|---|
| **Cloudflare Workers** (actual) | Ya funciona, KV y cron incluidos | Nada. El único límite que tocamos son 50 subpeticiones por request, ya resuelto |
| **Deno Deploy** | Misma API web estándar, KV y cron propios. Portar sería casi copiar y pegar | Hay que reescribir el acceso al KV |
| **GitHub Pages + Actions** | Pages sirve el HTML gratis y para siempre; Actions hace de cron | No hay servidor: adiós a las claves de acceso y hay que montar un proxy aparte para EDGAR y Yahoo |
| **Val.town** | Muy ligero, JS con cron y almacenamiento | Menos maduro para algo que crece |
| **Vercel / Netlify** | Funciones y cron | El almacenamiento va aparte (Upstash u otro) |

**Recomendación:** quédate en Cloudflare. El problema nunca fue la plataforma sino
no tener guía de despliegue, y eso es lo que arregla este documento. Los límites de
los planes gratuitos cambian a menudo; comprueba los vigentes antes de migrar.
