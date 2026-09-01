// Servidor de desarrollo: ejecuta worker.js igual que Cloudflare, sin wrangler.
//   node dev.mjs         -> http://localhost:8787
// Recarga worker.js en cada petición, así que basta con `node sync.mjs` y refrescar.
import { createServer } from "node:http";

const PORT = Number(process.argv[2]) || 8787;
const WORKER = new URL("./worker.js", import.meta.url).href;

// KV falso en memoria, para que /api/history y el cron no revienten.
const kv = new Map();
const env = {
  RADAR: {
    get: async (k) => kv.get(k) ?? null,
    put: async (k, v) => void kv.set(k, v),
    list: async () => ({ keys: [...kv.keys()].map((name) => ({ name })) })
  }
};

createServer(async (req, res) => {
  const url = "http://localhost:" + PORT + req.url;
  try {
    // Cache-buster para recoger cambios de worker.js sin reiniciar el proceso.
    const mod = await import(WORKER + "?t=" + Date.now());
    const r = await mod.default.fetch(new Request(url, { method: req.method }), env, { waitUntil() {} });
    const body = Buffer.from(await r.arrayBuffer());
    const h = {};
    r.headers.forEach((v, k) => { h[k] = v; });
    res.writeHead(r.status, h);
    res.end(body);
    console.log(r.status, req.url.slice(0, 70));
  } catch (e) {
    res.writeHead(500, { "content-type": "text/plain;charset=utf-8" });
    res.end("dev.mjs: " + (e && e.stack || e));
    console.error("ERROR", req.url, e && e.message);
  }
}).listen(PORT, () => console.log("MOR TERMINAL en http://localhost:" + PORT));
