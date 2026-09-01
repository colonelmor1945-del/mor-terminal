const PRIMES = ["LOCKHEED","RAYTHEON","RTX","BOEING","NORTHROP","GENERAL DYNAMICS","BAE","L3HARRIS","L3 ","LEIDOS","HUNTINGTON INGALLS","BOOZ ALLEN","GENERAL ELECTRIC","PRATT","COLLINS","TEXTRON","HONEYWELL","SAIC","CACI","AMENTUM","KBR","JACOBS","ACCENTURE","MICROSOFT","AMAZON","GOOGLE","ORACLE","PALANTIR","ANDURIL","CLARK CONSTRUCTION","FLUOR","VECTRUS","V2X","PARSONS","AECOM"];

const SC = [
 {name:"Ondas Holdings",tk:"NASDAQ:ONDS",country:"EE.UU.",region:"Norteamérica",size:1,niche:"Drones autónomos y redes para seguridad/militar"},
 {name:"Byrna Technologies",tk:"NASDAQ:BYRN",country:"EE.UU.",region:"Norteamérica",size:1,niche:"Armamento menos-letal"},
 {name:"Cadre Holdings",tk:"NYSE:CDRE",country:"EE.UU.",region:"Norteamérica",size:2,niche:"Blindaje corporal y equipos EOD"},
 {name:"Ducommun",tk:"NYSE:DCO",country:"EE.UU.",region:"Norteamérica",size:1,niche:"Estructuras y electrónica aeroespacial"},
 {name:"Astronics",tk:"NASDAQ:ATRO",country:"EE.UU.",region:"Norteamérica",size:1,niche:"Electrónica y ensayos para aviación militar"},
 {name:"CPI Aerostructures",tk:"AMEX:CVU",country:"EE.UU.",region:"Norteamérica",size:0,niche:"Aeroestructuras (micro-cap)"},
 {name:"Espey Mfg & Electronics",tk:"AMEX:ESP",country:"EE.UU.",region:"Norteamérica",size:0,niche:"Electrónica de potencia militar (micro-cap)"},
 {name:"Comtech Telecom",tk:"NASDAQ:CMTL",country:"EE.UU.",region:"Norteamérica",size:1,niche:"Comunicaciones satelitales tácticas"},
 {name:"Karman Holdings",tk:"NYSE:KRMN",country:"EE.UU.",region:"Norteamérica",size:2,niche:"Componentes de misiles e hipersónicos (IPO 2025)"},
 {name:"Theon International",tk:"EURONEXT:THEON",country:"Grecia/P.Bajos",region:"Europa",size:2,niche:"Visión nocturna y térmica para OTAN"},
 {name:"Exail Technologies",tk:"EURONEXT:EXA",country:"Francia",region:"Europa",size:2,niche:"Navegación inercial, drones navales"},
 {name:"Cohort plc",tk:"LSE:CHRT",country:"Reino Unido",region:"Europa",size:1,niche:"Electrónica de defensa y comunicaciones"},
 {name:"Avon Technologies",tk:"LSE:AVON",country:"Reino Unido",region:"Europa",size:1,niche:"Máscaras de protección NBQ y cascos"},
 {name:"MilDef Group",tk:"OMXSTO:MILDEF",country:"Suecia",region:"Europa",size:1,niche:"Electrónica rugerizada militar"},
 {name:"Invisio",tk:"OMXSTO:IVSO",country:"Suecia",region:"Europa",size:2,niche:"Comunicación y protección auditiva táctica"},
 {name:"W5 Solutions",tk:"OMXSTO:W5",country:"Suecia",region:"Europa",size:0,niche:"Sistemas de entrenamiento militar (micro-cap)"},
 {name:"Lubawa",tk:"GPW:LBW",country:"Polonia",region:"Europa Este",size:0,niche:"Equipamiento militar, camuflaje (micro-cap)"},
 {name:"Katmerciler",tk:"BIST:KATMR",country:"Turquía",region:"Europa Este",size:1,niche:"Vehículos blindados"},
 {name:"Next Vision Stabilized",tk:"TASE:NXSN",country:"Israel",region:"Oriente Medio",size:2,niche:"Cámaras estabilizadas para drones"},
 {name:"Paras Defence",tk:"NSE:PARAS",country:"India",region:"Asia Sur",size:1,niche:"Óptica y electrónica de defensa"},
 {name:"Data Patterns",tk:"NSE:DATAPATTNS",country:"India",region:"Asia Sur",size:2,niche:"Radares y aviónica"},
 {name:"ideaForge",tk:"NSE:IDEAFORGE",country:"India",region:"Asia Sur",size:1,niche:"Drones militares"},
 {name:"MTAR Technologies",tk:"NSE:MTARTECH",country:"India",region:"Asia Sur",size:1,niche:"Precisión para misiles y espacio"},
 {name:"Astra Microwave",tk:"NSE:ASTRAMICRO",country:"India",region:"Asia Sur",size:1,niche:"Subsistemas de radar y guerra electrónica"},
 {name:"Victek",tk:"KRX:065450",country:"Corea del Sur",region:"Asia Este",size:0,niche:"Guerra electrónica y radar (micro-cap)"},
 {name:"Firstec",tk:"KRX:010820",country:"Corea del Sur",region:"Asia Este",size:1,niche:"Componentes para K9, misiles"},
 {name:"Howa Machinery",tk:"TSE:6203",country:"Japón",region:"Asia Este",size:1,niche:"Armas ligeras (fusil Type 20)"},
 {name:"Ishikawa Seisakusho",tk:"TSE:6208",country:"Japón",region:"Asia Este",size:1,niche:"Munición y minas navales"},
 {name:"DroneShield",tk:"ASX:DRO",country:"Australia",region:"Oceanía",size:2,niche:"Anti-drones (counter-UAS)"},
 {name:"Electro Optic Systems",tk:"ASX:EOS",country:"Australia",region:"Oceanía",size:1,niche:"Estaciones de armas remotas, láser"},
 {name:"XTEK",tk:"ASX:XTE",country:"Australia",region:"Oceanía",size:0,niche:"Balística y drones (micro-cap)"},
 {name:"Austal",tk:"ASX:ASB",country:"Australia",region:"Oceanía",size:2,niche:"Buques militares (US Navy + RAN)"},
 {name:"Taurus Armas",tk:"BMFBOVESPA:TASA4",country:"Brasil",region:"Sudamérica",size:1,niche:"Armas ligeras"}
];
SC.forEach(s => { const w = s.name.toUpperCase().split(/[^A-Z0-9]+/).filter(x => x.length >= 4); s.token = w[0] || s.name.toUpperCase(); });

const NEWS_FEEDS = {
 "Pentágono":  {q:"Pentagon defense contract award", hl:"en-US", gl:"US", ceid:"US:en"},
 "Europa Este":{q:"defense contract Poland OR Romania OR Baltic OR Ukraine", hl:"en-US", gl:"US", ceid:"US:en"},
 "Rusia/Asia C.":{q:"Russia defense industry OR Mongolia military", hl:"en-US", gl:"US", ceid:"US:en"},
 "Asia Sur":   {q:"defense contract India OR Pakistan", hl:"en-US", gl:"US", ceid:"US:en"},
 "Asia Este":  {q:"defense contract Korea OR Japan OR Taiwan", hl:"en-US", gl:"US", ceid:"US:en"},
 "Oceanía":    {q:"defence contract Australia OR New Zealand", hl:"en-AU", gl:"AU", ceid:"AU:en"},
 "África":     {q:"defense contract Africa military procurement", hl:"en-US", gl:"US", ceid:"US:en"},
 "Sudamérica": {q:"defensa contrato militar Brasil OR Argentina OR Chile", hl:"es-419", gl:"AR", ceid:"AR:es-419"},
 "España":     {q:"contrato defensa ejército España", hl:"es", gl:"ES", ceid:"ES:es"}
};

function contractBody(days, limit) {
  const end = new Date(), start = new Date(end - days * 864e5);
  return {
    filters: {
      award_type_codes: ["A","B","C","D"],
      agencies: [{ type:"awarding", tier:"toptier", name:"Department of Defense" }],
      time_period: [{ start_date: start.toISOString().slice(0,10), end_date: end.toISOString().slice(0,10) }]
    },
    fields: ["Award ID","Recipient Name","Award Amount","Description","Start Date"],
    sort: "Award Amount", order: "desc", limit, page: 1
  };
}

function mapAwards(j) {
  return (j.results || []).map(r => ({
    name: r["Recipient Name"] || "—",
    amount: r["Award Amount"] || 0,
    date: r["Start Date"] || "",
    desc: r["Description"] || "",
    prime: PRIMES.some(p => (r["Recipient Name"] || "").toUpperCase().includes(p))
  }));
}

async function fetchContracts(days = 30, limit = 100) {
  const body = JSON.stringify(contractBody(days, limit));
  const url = "https://api.usaspending.gov/api/v2/search/spending_by_award/";
  let lastErr = "";
  for (let i = 0; i < 2; i++) {
    try {
      const res = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json", "User-Agent": "MorTerminal/1.0" }, body });
      if (res.ok) return mapAwards(await res.json());
      lastErr = "HTTP " + res.status;
    } catch (e) { lastErr = String(e.message || e); }
  }
  throw new Error("USAspending " + lastErr);
}

async function fetchPM(limit = 60) {
  const res = await fetch("https://gamma-api.polymarket.com/markets?limit=" + limit + "&active=true&closed=false&order=volume24hr&ascending=false");
  if (!res.ok) throw new Error("Polymarket HTTP " + res.status);
  const list = await res.json();
  return list.map(m => {
    let price = 0;
    try { price = parseFloat(JSON.parse(m.outcomePrices || "[]")[0] || 0); } catch (e) {}
    return {
      q: m.question || "—", price,
      chg: m.oneDayPriceChange || 0,
      vol24: m.volume24hr || 0,
      liq: m.liquidityNum || parseFloat(m.liquidity || 0),
      spread: m.spread || 0,
      url: "https://polymarket.com/market/" + (m.slug || "")
    };
  });
}

function decodeEnt(s) {
  return (s || "")
    .replace(/<!\[CDATA\[/g, "").replace(/\]\]>/g, "")
    .replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<").replace(/&gt;/g, ">");
}

function parseRSS(xml, max) {
  const items = [];
  const blocks = xml.match(/<item>[\s\S]*?<\/item>/g) || [];
  for (const b of blocks.slice(0, max || 25)) {
    const g = (tag) => { const m = b.match(new RegExp("<" + tag + ">([\\s\\S]*?)</" + tag + ">")); return m ? decodeEnt(m[1].trim()) : ""; };
    const srcM = b.match(/<source[^>]*>([\s\S]*?)<\/source>/);
    items.push({ title: g("title"), link: g("link"), date: g("pubDate").slice(0, 16), src: srcM ? decodeEnt(srcM[1]) : "" });
  }
  return items;
}

async function fetchNews(region) {
  const f = NEWS_FEEDS[region] || NEWS_FEEDS["Pentágono"];
  const rss = "https://news.google.com/rss/search?q=" + encodeURIComponent(f.q) + "&hl=" + f.hl + "&gl=" + f.gl + "&ceid=" + f.ceid;
  try {
    const res = await fetch(rss, { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" } });
    if (res.ok) { const it = parseRSS(await res.text()); if (it.length) return it; }
  } catch (e) {}
  try {
    const res = await fetch("https://api.rss2json.com/v1/api.json?count=25&rss_url=" + encodeURIComponent(rss));
    if (res.ok) {
      const j = await res.json();
      if (j.items && j.items.length) return j.items.map(i => ({ title: i.title, link: i.link, date: (i.pubDate || "").slice(0, 16), src: i.author || "" }));
    }
  } catch (e) {}
  throw new Error("Fuente de noticias no disponible");
}

function findMatches(contracts) {
  const out = [];
  for (const c of contracts) {
    const u = c.name.toUpperCase();
    for (const s of SC) if (u.includes(s.token)) out.push({ recipient: c.name, amount: c.amount, date: c.date, company: s.name, tk: s.tk });
  }
  return out;
}

async function getHistory(env) {
  if (!env.RADAR) return { note: "KV no configurado." };
  const list = await env.RADAR.list({ prefix: "hist:", limit: 90 });
  const out = [];
  for (const k of list.keys.slice(-60)) {
    const v = await env.RADAR.get(k.name, "json");
    if (v) out.push(v);
  }
  out.sort((a, b) => a.date < b.date ? 1 : -1);
  return { snapshots: out };
}

async function sendTelegram(env, text) {
  if (!env.TELEGRAM_TOKEN || !env.TELEGRAM_CHAT) return false;
  const res = await fetch("https://api.telegram.org/bot" + env.TELEGRAM_TOKEN + "/sendMessage", {
    method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: env.TELEGRAM_CHAT, text, disable_web_page_preview: true })
  });
  return res.ok;
}

const fmtM = n => n >= 1e9 ? "$" + (n/1e9).toFixed(2) + "B" : n >= 1e6 ? "$" + (n/1e6).toFixed(1) + "M" : "$" + Math.round(n/1e3) + "K";

async function dailyJob(env, contractsIn) {
  const contracts = contractsIn && contractsIn.length ? contractsIn : await fetchContracts(30, 100);
  const radar = contracts.filter(c => !c.prime);
  const matches = findMatches(contracts);
  const snap = {
    date: new Date().toISOString().slice(0, 10),
    n: contracts.length,
    total: contracts.reduce((a, c) => a + c.amount, 0),
    radarN: radar.length,
    radarTotal: radar.reduce((a, c) => a + c.amount, 0),
    topRadar: radar.slice(0, 5).map(c => ({ name: c.name, amount: c.amount })),
    matches
  };
  if (env.RADAR) await env.RADAR.put("hist:" + snap.date, JSON.stringify(snap));
  let alerted = false;
  if (matches.length) {
    const lines = matches.slice(0, 10).map(m => "• " + m.recipient + " → " + m.company + " (" + m.tk + ") " + fmtM(m.amount));
    alerted = await sendTelegram(env, "⚡ MOR TERMINAL — " + matches.length + " cruce(s) contrato↔small cap:\n" + lines.join("\n") + "\nVerifícalo a mano.");
  } else if (radar[0] && radar[0].amount >= 1e8) {
    alerted = await sendTelegram(env, "▮ MOR TERMINAL — mayor contrato fuera de gigantes (30d): " + radar[0].name + " " + fmtM(radar[0].amount));
  }
  snap.alerted = alerted;
  return snap;
}


/* ---------- PRECIOS (server-side; el navegador no puede por CORS) ----------
   Fuente: Yahoo Finance chart API. Sin clave, sin límite documentado, y cubre
   todos los mercados del universo SC (.AX .NS .KQ .KS .T .ST .WA .IS .TA .SA .L .PA .AS).
   Stooq se abandonó el 31/08/2026: metió un desafío proof-of-work JS y devuelve
   HTML en vez de CSV desde cualquier servidor. No intentar resolverlo.        */
async function fetchPx(sym) {
  const clean = String(sym).trim().toUpperCase().replace(/[^A-Z0-9.\-=^]/g, "");
  if (!clean) throw new Error("Símbolo vacío");

  const hosts = ["query1.finance.yahoo.com", "query2.finance.yahoo.com"];
  let last = "";

  for (const h of hosts) {
    const u = "https://" + h + "/v8/finance/chart/" + encodeURIComponent(clean) +
              "?range=2y&interval=1d";
    try {
      const r = await fetch(u, { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" } });
      if (!r.ok) { last = "HTTP " + r.status; continue; }
      const j = await r.json();

      const ch = j && j.chart;
      if (ch && ch.error) { last = ch.error.description || "símbolo no encontrado"; continue; }
      const res = ch && ch.result && ch.result[0];
      if (!res) { last = "respuesta vacía"; continue; }

      const ts = res.timestamp || [];
      const q = res.indicators && res.indicators.quote && res.indicators.quote[0];
      const cl = (q && q.close) || [];

      const d = [], c = [];
      for (let i = 0; i < ts.length; i++) {
        const v = cl[i];
        // Yahoo mete null en días sin cotización (festivos locales, suspensiones).
        if (ts[i] && typeof v === "number" && isFinite(v) && v > 0) {
          d.push(new Date(ts[i] * 1000).toISOString().slice(0, 10));
          c.push(v);
        }
      }
      if (c.length < 30) { last = "serie corta (" + c.length + ")"; continue; }

      const keep = 400;
      return {
        s: clean,
        cur: (res.meta && res.meta.currency) || "",
        name: (res.meta && (res.meta.longName || res.meta.shortName)) || "",
        d: d.slice(-keep),
        c: c.slice(-keep)
      };
    } catch (e) { last = String(e.message || e); }
  }
  throw new Error("Precios no disponibles (" + last + ")");
}

/* ---------- CEREBRO QUANT DE PREDICCIÓN ----------
   Trampa que costó encontrar (01/09/2026): `gamma-api/markets` tapa a 100 resultados
   aunque pidas más, así que agrupar por evento sobre esa lista da GRUPOS TRUNCADOS y
   sobre-redondeos falsos (el US Open salía con 13 de 49 salidas y sumaba 0.48).
   Solución: pedir `/events`, que trae los markets del evento embebidos y completos.
   Además solo `negRisk === true` es excluyente: "Bitcoin above ___" son umbrales
   anidados y sumarlos no significa nada.                                            */

const PM_FEE = 0.05;   // comisión taker de Polymarket (feeSchedule.rate)

function pmPrice(m) {
  try { const a = JSON.parse(m.outcomePrices || "[]"); const p = parseFloat(a[0]); return isFinite(p) ? p : null; }
  catch (e) { return null; }
}

/* ¿La pata cotiza de verdad? Polymarket rellena los grupos grandes con patas fantasma
   ("Company F", "Team H"…) que salen con p=0.5 exacto, libro vacío (bid=0 / ask=1),
   lastTradePrice=0 y volumen 0. Si se cuelan, un grupo de 25 salidas suma 9.02 en vez
   de 1.02 y el sobre-redondeo es pura ficción. Detectadas por el libro vacío.        */
function pmLive(m) {
  const bid = parseFloat(m.bestBid), ask = parseFloat(m.bestAsk);
  if (!isFinite(bid) || !isFinite(ask)) return false;
  if (bid <= 0 || ask >= 1) return false;                       // libro sin dos lados
  const vol = parseFloat(m.volumeNum || m.volume || 0);
  return isFinite(vol) && vol > 0;
}

function pmEnrich(m, ev) {
  const p = pmPrice(m);
  if (p === null || p <= 0 || p >= 1) return null;

  const bid = parseFloat(m.bestBid), ask = parseFloat(m.bestAsk);
  const spread = isFinite(m.spread) ? m.spread : (isFinite(ask) && isFinite(bid) ? ask - bid : 0);
  const liq = m.liquidityNum || parseFloat(m.liquidity || 0) || 0;
  const vol24 = m.volume24hr || 0;

  const end = m.endDate ? new Date(m.endDate).getTime() : 0;
  const days = end ? Math.max(0.5, (end - Date.now()) / 864e5) : null;

  // Varianza terminal de un binario: p(1-p). Recorrido absoluto esperado = 2p(1-p).
  const varT = p * (1 - p);
  const travel = 2 * varT;

  return {
    id: m.id,
    q: m.question || m.groupItemTitle || "—",
    leg: m.groupItemTitle || "",
    ev: (ev && ev.title) || "",
    evSlug: (ev && ev.slug) || "",
    negRisk: !!(ev && ev.negRisk),
    live: pmLive(m),
    cid: m.conditionId || "",
    url: "https://polymarket.com/market/" + (m.slug || ""),
    tok: (function () { try { return JSON.parse(m.clobTokenIds || "[]")[0] || ""; } catch (e) { return ""; } })(),

    p: p,
    spread: spread,
    // Un spread de 0.001 sobre p=0.02 es el 5%: en absoluto engaña, en relativo no.
    spreadRel: p > 0 ? spread / p : null,
    liq: liq,
    vol24: vol24,
    turn: liq > 0 ? vol24 / liq : null,      // rotación: detecta mercados fantasma
    comp: isFinite(m.competitive) ? m.competitive : null,

    c1d: m.oneDayPriceChange || 0,
    c1w: m.oneWeekPriceChange || 0,
    c1m: m.oneMonthPriceChange || 0,

    days: days,
    varT: varT,
    travel: travel,
    // Urgencia: recorrido pendiente por día que queda. Alto = tiene que moverse ya.
    urg: days ? travel / Math.sqrt(days) : null
  };
}

/* ---------- ARBITRAJE POR MONOTONÍA (implicación lógica) ----------
   Idea tomada de `implication_arb_strategy` de oracle3 (Apache-2.0): si A implica B,
   entonces p(A) ≤ p(B) SIEMPRE, y violarlo es arbitraje sin riesgo de modelo. Allí el
   par lo indica un humano; aquí se detecta solo en la familia donde es mecánico: los
   mercados de umbral de un mismo evento.
     "BTC > 70k" ⟸ "BTC > 72k"  →  p debe decrecer al subir el umbral.
     "tregua sigue hasta el 1-ago" ⟸ "...hasta el 30-sep" → decrece con la fecha.
   Rescata justo los eventos que NO son negRisk y donde sumar probabilidades no vale.  */

const MESES = { january:1,february:2,march:3,april:4,may:5,june:6,july:7,
                august:8,september:9,october:10,november:11,december:12 };

/* Clave de orden. Devuelve {k, tipo, cadena} o null.
   - Fechas y números NO se mezclan: sacar el "7" de "September 7" pondría julio
     junto a diciembre.
   - Las flechas ↑/↓ marcan cadenas OPUESTAS ("¿hasta dónde sube?" frente a "¿hasta
     dónde baja?"). Van en `cadena` y cada una se evalúa por separado; mezclarlas
     produciría infracciones inventadas.                                          */
function pmKey(t) {
  let s = String(t || "").trim();
  let cadena = "";
  const fl = s.match(/^([↑↓⬆⬇])\s*/);
  if (fl) { cadena = (fl[1] === "↑" || fl[1] === "⬆") ? "sube" : "baja"; s = s.slice(fl[0].length).trim(); }

  const md = s.toLowerCase().match(/^([a-z]+)\s+(\d{1,2})$/);
  if (md && MESES[md[1]]) return { k: MESES[md[1]] * 100 + Number(md[2]), tipo: "fecha", cadena: cadena };

  const nm = s.replace(/[$,\s]/g, "").match(/^[<>≥≤]?=?(-?\d+(?:\.\d+)?)([kKmM])?$/);
  if (nm) {
    let v = parseFloat(nm[1]);
    if (nm[2]) v *= (nm[2].toLowerCase() === "k" ? 1e3 : 1e6);
    return { k: v, tipo: "numero", cadena: cadena };
  }
  return null;
}

function pmMonotone(ev, ms) {
  const live = ms.filter(m => m.live && m.leg);
  if (live.length < 3) return null;

  const claves = live.map(m => pmKey(m.leg));
  if (claves.some(c => !c)) return null;
  const tipo = claves[0].tipo;
  if (claves.some(c => c.tipo !== tipo)) return null;          // no mezclar fecha y número

  // Cada cadena (↑ / ↓ / sin flecha) es una relación de implicación distinta.
  const porCadena = {};
  live.forEach((m, i) => {
    const c = claves[i].cadena;
    (porCadena[c] = porCadena[c] || []).push({ leg: m.leg, k: claves[i].k, p: m.p, sp: m.spread });
  });
  let mejor = null;
  for (const c in porCadena) {
    const r = pmMonoCadena(ev, porCadena[c], tipo, c, live);
    if (r && (!mejor || r.neto > mejor.neto)) mejor = r;
  }
  return mejor;
}

function pmMonoCadena(ev, arr, tipo, cadena, live) {
  if (arr.length < 3) return null;
  const pts = arr.slice().sort((a, b) => a.k - b.k);
  if (new Set(pts.map(x => x.k)).size !== pts.length) return null;  // claves repetidas

  // La dirección no se adivina por el texto: se mide. Se prueban las dos y gana la
  // que menos infrinja; si ninguna domina claramente, el evento no es monótono.
  let vDec = 0, vInc = 0;
  for (let i = 0; i + 1 < pts.length; i++) {
    const d = pts[i + 1].p - pts[i].p;
    if (d > 0) vDec += d; else vInc += -d;
  }
  const dec = vDec <= vInc;
  const total = dec ? vDec : vInc, otro = dec ? vInc : vDec;
  if (otro > 0 && total > otro * 0.5) return null;             // dirección ambigua

  // Mayor infracción entre patas contiguas, neta del spread de ambas.
  let peor = null;
  for (let i = 0; i + 1 < pts.length; i++) {
    const a = pts[i], b = pts[i + 1];
    const v = dec ? (b.p - a.p) : (a.p - b.p);
    if (v <= 0) continue;
    const coste = (a.sp + b.sp) / 2;
    const neto = v - coste;
    if (!peor || neto > peor.neto)
      peor = { neto: neto, bruto: v, coste: coste,
               caro: dec ? b.leg : a.leg, barato: dec ? a.leg : b.leg,
               pCaro: dec ? b.p : a.p, pBarato: dec ? a.p : b.p };
  }
  if (!peor || peor.neto <= 0) return null;

  return {
    ev: ev.title || "—", slug: ev.slug || "", n: pts.length, tipo: tipo,
    cadena: cadena, dir: dec ? "decreciente" : "creciente",
    neto: peor.neto, bruto: peor.bruto, coste: peor.coste,
    caro: peor.caro, barato: peor.barato, pCaro: peor.pCaro, pBarato: peor.pBarato,
    liq: live.reduce((a, m) => a + m.liq, 0),
    legs: pts.map(x => ({ leg: x.leg, p: x.p }))
  };
}

async function fetchPMQ(pages = 3) {
  const evs = [];
  for (let i = 0; i < pages; i++) {
    const u = "https://gamma-api.polymarket.com/events?active=true&closed=false&limit=100&offset=" +
              (i * 100) + "&order=volume24hr&ascending=false";
    const r = await fetch(u);
    if (!r.ok) { if (i === 0) throw new Error("Polymarket HTTP " + r.status); break; }
    const l = await r.json();
    if (!l || !l.length) break;
    evs.push.apply(evs, l);
  }

  const markets = [], groups = [], mono = [];

  for (const ev of evs) {
    const ms = (ev.markets || []).map(m => pmEnrich(m, ev)).filter(Boolean);
    if (!ms.length) continue;
    markets.push.apply(markets, ms);

    // Los eventos NO excluyentes pueden seguir teniendo restricción de monotonía.
    if (!ev.negRisk) { const mo = pmMonotone(ev, ms); if (mo) mono.push(mo); continue; }
    if (ms.length < 2) continue;

    const todas = (ev.markets || []).length;
    const live = ms.filter(m => m.live);
    if (live.length < 2) continue;

    const sum = live.reduce((a, m) => a + m.p, 0);
    const cost = live.reduce((a, m) => a + m.spread / 2, 0);
    const dev = sum - 1;
    const completo = live.length === todas;

    /* ASIMETRÍA IMPORTANTE. Si el grupo tiene patas de relleno excluidas, la masa de
       probabilidad que falta vive en ellas, así que Σp < 1 NO es descuento: es hueco.
       Pero Σp > 1 sigue valiendo: vendiendo todas las patas vivas, si gana una salida
       no cotizada cobras igual. Por eso el lado comprador exige grupo completo.        */
    if (!completo && dev <= 0) continue;

    groups.push({
      ev: ev.title || "—",
      slug: ev.slug || "",
      n: live.length,
      nTotal: todas,
      completo: completo,
      sum: sum,
      dev: dev,
      cost: cost,
      // Ventaja neta: lo que queda del desvío tras pagar medio spread en cada pata.
      net: Math.abs(dev) - cost,
      side: dev > 0 ? "vender todas" : "comprar todas",
      liq: live.reduce((a, m) => a + m.liq, 0),
      vol24: live.reduce((a, m) => a + m.vol24, 0),
      legs: live.map(m => ({ leg: m.leg || m.q, p: m.p, spread: m.spread })).sort((a, b) => b.p - a.p)
    });
  }

  // z-scores de momentum a 3 horizontes (mismo motor que la vista QUANT de acciones).
  ["c1d", "c1w", "c1m"].forEach(k => {
    const v = markets.map(m => m[k]).filter(x => isFinite(x));
    const mu = v.reduce((a, b) => a + b, 0) / (v.length || 1);
    const sg = Math.sqrt(v.reduce((a, b) => a + (b - mu) * (b - mu), 0) / ((v.length - 1) || 1)) || 1;
    markets.forEach(m => { m["z" + k] = isFinite(m[k]) ? (m[k] - mu) / sg : 0; });
  });
  markets.forEach(m => { m.z = (m.zc1d + m.zc1w + m.zc1m) / 3; });

  groups.sort((a, b) => b.net - a.net);
  mono.sort((a, b) => b.neto - a.neto);
  markets.sort((a, b) => (b.vol24 || 0) - (a.vol24 || 0));

  return {
    ts: new Date().toISOString(),
    fee: PM_FEE,
    nEvents: evs.length,
    markets: markets.slice(0, 400),
    groups: groups,
    mono: mono
  };
}

/* ---------- VIGILANTE DE 8-K (SEC EDGAR) ----------
   El 8-K es el instante en que informacion privada se vuelve publica: la empresa
   esta OBLIGADA a comunicarlo. USAspending ensena la adjudicacion despues; esto la
   ensena cuando la empresa la anuncia, que suele ser antes.
   Busqueda a texto completo de EDGAR: gratis, sin clave. La SEC exige User-Agent
   con contacto real y pide no pasar de 10 peticiones por segundo.                */

const EDGAR_UA = "MOR Terminal - contacto colonelmor1945@gmail.com";

const EDGAR_Q = [
  '"Department of Defense"',
  '"Defense Logistics Agency"',
  '"Missile Defense Agency"',
  '"Naval Sea Systems Command"',
  '"Defense Advanced Research Projects"'
];

/* Codigos de partida del 8-K. 1.01 es el que importa: acuerdo material definitivo,
   que es lo que se presenta al firmar un contrato. 2.02 son solo resultados.      */
const EDGAR_ITEMS = {
  "1.01": "acuerdo material firmado",
  "1.02": "acuerdo material terminado",
  "2.02": "resultados",
  "7.01": "divulgacion Reg FD",
  "8.01": "otro hecho relevante"
};

/* Citar al DoD en un 8-K no significa contrato de defensa: farmaceuticas lo citan
   por becas de investigacion y los hospitales por TRICARE. En la ventana de prueba
   eran 21 de 59. El codigo SIC los separa limpiamente, asi que se clasifica en vez
   de filtrar a ciegas: se ve el sector y por que entra o no.                      */
const SIC_DEF = {
  "3480":"Municion y armamento","3482":"Municion ligera","3483":"Municion pesada","3489":"Ordenanza",
  "3585":"Sistemas termicos","3559":"Maquinaria especial","3620":"Maquinaria electrica","3621":"Motores electricos",
  "3663":"Radiodifusion y comunicaciones","3669":"Comunicaciones","3670":"Componentes electronicos",
  "3672":"Circuitos impresos","3674":"Semiconductores","3679":"Componentes electronicos",
  "3711":"Vehiculos (militares)","3713":"Carroceria","3714":"Piezas de vehiculo",
  "3721":"Aeronaves","3724":"Motores aeronauticos","3728":"Partes de aeronave",
  "3730":"Construccion naval","3731":"Buques","3761":"Misiles guiados","3764":"Propulsion espacial",
  "3769":"Vehiculos espaciales","3812":"Busqueda, deteccion y navegacion","3827":"Instrumentos opticos",
  "3829":"Instrumentos de medida","7372":"Software","7373":"Servicios informaticos",
  "7363":"Servicios de personal","8711":"Ingenieria","8731":"I+D comercial","1731":"Instalaciones electricas"
};
/* Sectores que generan el ruido: se marcan explicitamente para poder excluirlos. */
const SIC_RUIDO = {
  "2833":"Farmacia","2834":"Farmacia","2835":"Diagnostico","2836":"Biologicos",
  "3841":"Dispositivos medicos","3842":"Suministro medico","3845":"Electromedicina",
  "8060":"Hospitales","8062":"Hospitales","8090":"Servicios sanitarios",
  "6770":"Sociedad en blanco (SPAC)","6199":"Financiero","6022":"Banca","2860":"Quimica industrial"
};

function edgarTicker(nombre) {
  // "374Water Inc.  (SCWO)  (CIK 0000933972)" -> SCWO
  const m = String(nombre || "").match(/\(([A-Z][A-Z0-9.\-]{0,6})\)/);
  return m ? m[1] : "";
}
function edgarNombre(s) {
  return String(s || "").replace(/\s*\(.*$/, "").trim();
}

async function edgarBuscar(q, desde, hasta) {
  const u = "https://efts.sec.gov/LATEST/search-index?q=" + encodeURIComponent(q) +
            "&forms=8-K&startdt=" + desde + "&enddt=" + hasta;
  const r = await fetch(u, { headers: { "User-Agent": EDGAR_UA, "Accept": "application/json" } });
  if (!r.ok) throw new Error("EDGAR HTTP " + r.status);
  const j = await r.json();
  return ((j.hits || {}).hits) || [];
}

async function fetchEdgar(dias) {
  const d = Math.max(1, Math.min(90, dias || 30));
  const hasta = new Date().toISOString().slice(0, 10);
  const desde = new Date(Date.now() - d * 864e5).toISOString().slice(0, 10);

  // Tickers del universo SC, sin el prefijo de mercado. Solo las cotizadas en
  // EE.UU. pueden aparecer: una empresa extranjera no presenta 8-K.
  const univ = {};
  SC.forEach(s => { const t = String(s.tk).split(":").pop(); if (t) univ[t] = s; });

  const vistos = {}, out = [];
  for (const q of EDGAR_Q) {
    let hits = [];
    try { hits = await edgarBuscar(q, desde, hasta); } catch (e) { continue; }
    for (const h of hits) {
      const s = h._source || {};
      const nombreCompleto = (s.display_names || [])[0] || "";
      const adsh = s.adsh || "";
      if (!adsh || vistos[adsh]) continue;
      vistos[adsh] = 1;

      const tk = edgarTicker(nombreCompleto);
      const nom = edgarNombre(nombreCompleto);
      const NOM = nom.toUpperCase();
      const items = s.items || [];
      const cik = (s.ciks || [])[0] || "";
      const sic = (s.sics || [])[0] || "";
      const arch = String(h._id || "").split(":")[1] || "";

      out.push({
        fecha: s.file_date || "",
        nombre: nom,
        tk: tk,
        cik: cik,
        items: items,
        // 1.01 = contrato firmado. Es la senal fuerte; el resto es contexto.
        firma: items.indexOf("1.01") >= 0,
        etiquetas: items.map(i => EDGAR_ITEMS[i] || i),
        q: q.replace(/"/g, ""),
        sic: sic,
        sector: SIC_DEF[sic] || SIC_RUIDO[sic] || "sin clasificar",
        // Plausible como contratista: el SIC encaja y no es de los sectores ruido.
        defensa: !!SIC_DEF[sic],
        ruido: !!SIC_RUIDO[sic],
        // Gigante: interesa como contexto, no como oportunidad.
        prime: PRIMES.some(p => NOM.includes(p)),
        // El cruce: ya esta en tu universo de small caps.
        enUniverso: !!univ[tk],
        universo: univ[tk] ? univ[tk].name : "",
        url: cik && arch
          ? "https://www.sec.gov/Archives/edgar/data/" + Number(cik) + "/" +
            adsh.replace(/-/g, "") + "/" + arch
          : "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=" + cik
      });
    }
  }

  out.sort((a, b) => {
    if (a.enUniverso !== b.enUniverso) return a.enUniverso ? -1 : 1;
    if (a.firma !== b.firma) return a.firma ? -1 : 1;
    return a.fecha < b.fecha ? 1 : -1;
  });

  const cruces = out.filter(x => x.enUniverso);
  // Candidatas: no son gigantes y no estan en el universo. Es como crece la lista.
  // Candidatas: contrato firmado, no gigante, fuera del universo y con SIC plausible.
  const cand = out.filter(x => !x.enUniverso && !x.prime && x.firma && x.defensa);
  const descartadas = out.filter(x => x.ruido).length;

  return { desde: desde, hasta: hasta, n: out.length, descartadas: descartadas,
           cruces: cruces, candidatas: cand.slice(0, 40), todas: out.slice(0, 120) };
}

/* Alerta diaria: solo lo que de verdad merece interrumpir. Un cruce con el universo
   siempre; una candidata solo si firmo contrato y el SIC encaja. Se guarda lo ya
   avisado para no repetir el mismo 8-K cada dia.                                  */
async function edgarJob(env) {
  const r = await fetchEdgar(3);
  if (!env.RADAR) return { note: "KV no configurado", n: r.n };
  const NL = String.fromCharCode(10);

  const nuevos = [];
  for (const x of r.cruces.concat(r.candidatas)) {
    const k = "edgar:visto:" + x.cik + ":" + x.fecha;
    if (await env.RADAR.get(k)) continue;
    await env.RADAR.put(k, "1", { expirationTtl: 2592000 });
    nuevos.push(x);
  }
  if (!nuevos.length) return { n: r.n, nuevos: 0 };

  const cru = nuevos.filter(x => x.enUniverso), can = nuevos.filter(x => !x.enUniverso);
  const li = [];
  if (cru.length) li.push("CRUCE con tu universo:", ...cru.map(x =>
    "- " + x.universo + " (" + x.tk + ") - " + x.etiquetas.join(", ") + NL + "  " + x.url));
  if (can.length) li.push("Candidatas nuevas:", ...can.map(x =>
    "- " + x.nombre + (x.tk ? " (" + x.tk + ")" : "") + " - " + x.sector + NL + "  " + x.url));

  await sendTelegram(env, "SEC 8-K - " + nuevos.length + " presentacion(es) citando defensa:" + NL +
    li.join(NL) + NL + "Verificalo a mano: citar al DoD no es ganar un contrato.");
  return { n: r.n, nuevos: nuevos.length };
}

/* ---------- MOTOR DE PAPEL ----------
   Existe porque el backtest sobre mercados cerrados tiene sesgo de seleccion: se
   piden ordenados por volumen, asi que la muestra son los mercados famosos. Aqui
   se registra la senal EN EL MOMENTO en que se emite, sin saber el desenlace, y se
   liquida cuando el mercado resuelve. En unas semanas da una muestra propia y
   limpia con la que saber si alguna senal tiene ventaja de verdad.
   No ejecuta nada ni mueve dinero: solo anota.                                    */

const PAPER_MAX = 400;   // tope de posiciones abiertas en KV

function paperId(tipo, id, ts) { return "paper:" + tipo + ":" + id + ":" + ts; }

async function paperSnap(env, q) {
  if (!env.RADAR) return { error: "KV no configurado" };
  const datos = q || await fetchPMQ(3);
  const ts = new Date().toISOString();
  const dia = ts.slice(0, 10);

  // Una sola instantanea por dia y tipo: si no, el cron duplicaria las mismas senales.
  const yaHay = await env.RADAR.get("paper:dia:" + dia);
  if (yaHay) return { note: "ya registrado hoy", dia: dia, n: 0 };

  const nuevas = [];

  // 1. Direccionales: es lo que de verdad hay que validar.
  const porSesgo = datos.markets.filter(m => m.live !== false && m.days !== null && m.days > 2 &&
                                             m.p > 0.03 && m.p < 0.97 && m.liq > 5000);
  const topZ = porSesgo.slice().sort((a, b) => Math.abs(b.z) - Math.abs(a.z)).slice(0, 5);
  topZ.forEach(m => nuevas.push({
    tipo: "momentum", senal: m.z > 0 ? "SI" : "NO", id: m.id, cid: m.cid,
    q: m.q.slice(0, 90), p: m.p, z: m.z, dias: Math.round(m.days), ts: ts
  }));

  // 2. Arbitraje: aqui el beneficio es aritmetico; lo que se comprueba es que el
  //    grupo resuelva de verdad con una sola pata ganadora.
  (datos.groups || []).filter(g => g.net > 0 && g.dev > 0).slice(0, 5).forEach(g => nuevas.push({
    tipo: "arb_suma", senal: "VENDER_TODAS", id: g.slug, q: g.ev.slice(0, 90),
    sum: g.sum, n: g.n, completo: g.completo, capital: g.n - g.sum,
    benTeorico: g.dev - g.cost, ts: ts
  }));
  (datos.mono || []).slice(0, 3).forEach(g => nuevas.push({
    tipo: "arb_mono", senal: "PAR", id: g.slug, q: g.ev.slice(0, 90),
    caro: g.caro, barato: g.barato, pCaro: g.pCaro, pBarato: g.pBarato,
    benTeorico: g.neto, ts: ts
  }));

  for (const p of nuevas) await env.RADAR.put(paperId(p.tipo, p.id, ts), JSON.stringify(p));
  await env.RADAR.put("paper:dia:" + dia, ts, { expirationTtl: 172800 });
  return { dia: dia, n: nuevas.length, tipos: nuevas.reduce((a, p) => (a[p.tipo] = (a[p.tipo] || 0) + 1, a), {}) };
}

async function paperSettle(env, limite) {
  if (!env.RADAR) return { error: "KV no configurado" };
  const lista = await env.RADAR.list({ prefix: "paper:momentum:", limit: limite || 60 });
  let liquidadas = 0, aciertos = 0, sumR = 0;

  for (const k of lista.keys) {
    const p = await env.RADAR.get(k.name, "json");
    if (!p || !p.id) continue;
    let m = null;
    try {
      // Ojo: `?id=` devuelve lista VACIA. El id va en la ruta y devuelve un objeto.
      const r = await fetch("https://gamma-api.polymarket.com/markets/" + encodeURIComponent(p.id));
      if (!r.ok) continue;
      m = await r.json();
    } catch (e) { continue; }
    if (!m || !m.id || !m.closed) continue;

    let o = null;
    try {
      const a = JSON.parse(m.outcomePrices || "[]");
      const y = parseFloat(a[0]), nn = parseFloat(a[1]);
      if (y === 1 && nn === 0) o = 1; else if (y === 0 && nn === 1) o = 0;
    } catch (e) {}
    if (o === null) continue;

    // Retorno por unidad arriesgada. Comprar SI a p paga (o - p)/p; comprar NO
    // a (1-p) paga ((1-o) - (1-p))/(1-p).
    const r = p.senal === "SI" ? (o - p.p) / p.p : ((1 - o) - (1 - p.p)) / (1 - p.p);
    const cerrada = Object.assign({}, p, { o: o, r: r, tsCierre: new Date().toISOString() });
    await env.RADAR.put("paper:done:" + p.tipo + ":" + p.id + ":" + p.ts, JSON.stringify(cerrada));
    await env.RADAR.delete(k.name);
    liquidadas++; sumR += r; if (r > 0) aciertos++;
  }
  return { liquidadas: liquidadas, aciertos: aciertos, retornoMedio: liquidadas ? sumR / liquidadas : null };
}

async function paperState(env) {
  if (!env.RADAR) return { error: "KV no configurado" };
  const ab = await env.RADAR.list({ prefix: "paper:", limit: PAPER_MAX });
  const abiertas = [], cerradas = [];
  for (const k of ab.keys) {
    if (k.name.indexOf("paper:dia:") === 0) continue;
    const v = await env.RADAR.get(k.name, "json");
    if (!v) continue;
    (k.name.indexOf("paper:done:") === 0 ? cerradas : abiertas).push(v);
  }
  abiertas.sort((a, b) => a.ts < b.ts ? 1 : -1);
  cerradas.sort((a, b) => a.tsCierre < b.tsCierre ? 1 : -1);

  // Estadistica solo de las direccionales cerradas: el arbitraje no se puntua asi.
  const dir = cerradas.filter(x => x.tipo === "momentum" && isFinite(x.r));
  let est = null;
  if (dir.length >= 2) {
    const rs = dir.map(x => x.r);
    const mu = rs.reduce((a, b) => a + b, 0) / rs.length;
    const sg = Math.sqrt(rs.reduce((a, b) => a + (b - mu) * (b - mu), 0) / (rs.length - 1)) || 0;
    est = { n: rs.length, media: mu, acierto: dir.filter(x => x.r > 0).length / rs.length,
            t: sg > 0 ? mu / (sg / Math.sqrt(rs.length)) : 0 };
  }
  return { abiertas: abiertas.slice(0, 120), cerradas: cerradas.slice(0, 120), est: est,
           nAbiertas: abiertas.length, nCerradas: cerradas.length };
}

/* Histórico del CLOB para volatilidad realizada (el navegador no puede: sin CORS). */
async function fetchPMHist(token, interval) {
  const t = String(token || "").replace(/[^0-9]/g, "");
  if (!t) throw new Error("token vacío");
  const iv = ["1h", "6h", "1d", "1w", "1m", "max"].indexOf(String(interval)) >= 0 ? interval : "1m";
  const u = "https://clob.polymarket.com/prices-history?market=" + t + "&interval=" + iv + "&fidelity=60";
  const r = await fetch(u);
  if (!r.ok) throw new Error("CLOB HTTP " + r.status);
  const j = await r.json();
  const h = (j && j.history) || [];
  return { t: h.map(x => x.t), p: h.map(x => x.p) };
}

// <<< HTML GENERADO DESDE index.html — no editar a mano; regenerar con: node sync.mjs
const HTML = `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>MOR TERMINAL</title>
<style>
:root{--bg:#000;--pane:#080b10;--pane2:#0c1118;--line:#1a2231;--line2:#131a26;
--txt:#d5dee9;--dim:#5f7186;--dim2:#3d4a5c;--am:#ff9f1a;--gr:#00e08a;--rd:#ff4d5e;--cy:#22d3ee;--vi:#a78bfa}
*{margin:0;padding:0;box-sizing:border-box}
html,body{height:100%}
body{background:var(--bg);color:var(--txt);font:12px/1.35 "SF Mono","Roboto Mono","Cascadia Mono",Consolas,monospace;overflow:hidden}
::-webkit-scrollbar{width:8px;height:8px}::-webkit-scrollbar-track{background:#05070a}
::-webkit-scrollbar-thumb{background:#1d2635;border-radius:4px}::-webkit-scrollbar-thumb:hover{background:#2a3648}
#app{display:flex;flex-direction:column;height:100vh}
.hdr{display:flex;align-items:center;gap:12px;padding:0 12px;height:40px;background:linear-gradient(180deg,#0b1017,#05080c);border-bottom:1px solid var(--line);flex:0 0 auto}
.brand{color:var(--am);font-weight:700;letter-spacing:3px;font-size:13px;white-space:nowrap}
.brand em{font-style:normal;display:inline-block;width:7px;height:7px;background:var(--am);margin-right:7px;box-shadow:0 0 9px var(--am);animation:bl 2.4s infinite}
@keyframes bl{0%,100%{opacity:1}50%{opacity:.25}}
.cmd{flex:1;max-width:460px;position:relative}
.cmd input{width:100%;background:#0a1017;border:1px solid var(--line);border-left:2px solid var(--am);color:var(--txt);padding:6px 10px;font:inherit;letter-spacing:1px;outline:none}
.cmd input:focus{border-color:var(--am);background:#0d141d;box-shadow:0 0 0 1px rgba(255,159,26,.2)}
.cmd .hint{position:absolute;right:8px;top:6px;color:var(--dim2);font-size:10px;pointer-events:none}
.lights{display:flex;gap:5px}
.lt{display:flex;align-items:center;gap:5px;font-size:9.5px;color:var(--dim);border:1px solid var(--line);padding:3px 7px;background:var(--pane);white-space:nowrap}
.lt b{width:6px;height:6px;border-radius:50%;background:var(--dim2);display:block}
.lt.ok b{background:var(--gr);box-shadow:0 0 7px var(--gr)}
.lt.ld b{background:var(--am);animation:bl 1s infinite}
.lt.er b{background:var(--rd);box-shadow:0 0 7px var(--rd)}
.lt.ok{color:var(--txt)}.lt.er{color:var(--rd);border-color:#3a1e26}
.clk{color:var(--dim);font-size:11px;white-space:nowrap;font-variant-numeric:tabular-nums}
.rl{background:var(--pane2);border:1px solid var(--line);color:var(--dim);padding:4px 9px;font:inherit;font-size:10px;cursor:pointer}
.rl:hover{border-color:var(--am);color:var(--am)}
.tape{height:24px;background:#04070a;border-bottom:1px solid var(--line);overflow:hidden;white-space:nowrap;flex:0 0 auto}
.tape .run{display:inline-block;padding-top:5px;animation:sc 80s linear infinite;will-change:transform}
@keyframes sc{from{transform:translateX(0)}to{transform:translateX(-50%)}}
.tk{margin:0 18px;font-size:10.5px;color:var(--dim)}
.tk b{color:#9fb0c4;font-weight:400}
.up{color:var(--gr)}.dn{color:var(--rd)}
.nav{display:flex;background:#06090d;border-bottom:1px solid var(--line);flex:0 0 auto}
.nav button{background:none;border:none;border-right:1px solid var(--line2);color:var(--dim);padding:7px 15px;font:inherit;font-size:10.5px;letter-spacing:1.3px;cursor:pointer}
.nav button:hover{color:var(--txt);background:#0b1119}
.nav button.on{color:#05080c;background:var(--am);font-weight:700}
.nav .sp{flex:1}
.nav .meta{color:var(--dim2);font-size:10px;padding:7px 12px}
main{flex:1;overflow:auto;padding:8px}
.grid{display:grid;gap:8px}
.g4{grid-template-columns:repeat(4,1fr)}
.g3{grid-template-columns:repeat(3,1fr)}
.g2{grid-template-columns:1fr 1fr}
.g23{grid-template-columns:2fr 1fr}
.g32{grid-template-columns:1fr 2fr}
@media(max-width:1250px){.g4{grid-template-columns:repeat(2,1fr)}.g3,.g2,.g23,.g32{grid-template-columns:1fr}}
.p{background:var(--pane);border:1px solid var(--line);display:flex;flex-direction:column;min-height:0}
.p>h3{font-size:9.5px;letter-spacing:1.6px;color:var(--dim);text-transform:uppercase;padding:6px 9px;border-bottom:1px solid var(--line);background:linear-gradient(180deg,#0d131b,#090d13);display:flex;justify-content:space-between;align-items:center;flex:0 0 auto;gap:8px}
.p>h3 span{color:var(--am);font-size:9.5px;white-space:nowrap}
.p .bd{overflow:auto;flex:1;min-height:0}
.kpi{background:linear-gradient(150deg,#0e141d,#080b10);border:1px solid var(--line);border-top:2px solid var(--am);padding:9px 11px}
.kpi.c2{border-top-color:var(--gr)}.kpi.c3{border-top-color:var(--cy)}.kpi.c4{border-top-color:var(--vi)}
.kpi .k{color:var(--dim);font-size:9px;letter-spacing:1.4px;text-transform:uppercase}
.kpi .v{font-size:26px;margin-top:2px;font-variant-numeric:tabular-nums;letter-spacing:-.5px}
.kpi .s{color:var(--dim);font-size:9.5px;margin-top:1px}
.kpi .spark{margin-top:6px;height:28px}
table{width:100%;border-collapse:collapse;font-size:11px}
th{position:sticky;top:0;z-index:2;text-align:left;color:var(--dim);font-size:9px;letter-spacing:1px;text-transform:uppercase;padding:6px 8px;background:#0a0f16;border-bottom:1px solid var(--line);cursor:pointer;user-select:none;white-space:nowrap}
th:hover{color:var(--am)}
td{padding:5px 8px;border-bottom:1px solid var(--line2);vertical-align:top}
tbody tr:hover td{background:#0e151f}
.amt{color:var(--gr);white-space:nowrap;font-variant-numeric:tabular-nums;text-align:right}
.n{white-space:nowrap;font-variant-numeric:tabular-nums;text-align:right}
.el{max-width:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.dsc{color:var(--dim);font-size:10px}
a{color:var(--cy);text-decoration:none}a:hover{text-decoration:underline}
.tg{display:inline-block;font-size:8.5px;padding:1px 5px;border:1px solid;white-space:nowrap}
.t1{color:var(--am);border-color:#4a3410;background:rgba(255,159,26,.08)}
.t2{color:var(--dim);border-color:#232d3d}
.t3{color:var(--gr);border-color:#12432f}.t4{color:var(--rd);border-color:#43151d}
.t5{color:var(--cy);border-color:#0d3d4a}.t6{color:var(--vi);border-color:#2f2456;background:rgba(167,139,250,.1)}
.hb{display:flex;align-items:center;gap:7px;padding:3px 9px;font-size:10.5px}
.hb .nm{width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.hb .tr{flex:1;height:12px;background:#0d141d;position:relative;overflow:hidden}
.hb .tr i{position:absolute;inset:0 auto 0 0;background:linear-gradient(90deg,var(--am),rgba(255,159,26,.25))}
.hb.pr .tr i{background:linear-gradient(90deg,#26344a,#182231)}
.hb .vl{width:64px;text-align:right;color:var(--gr);font-variant-numeric:tabular-nums}
.pbar{height:4px;background:#0d141d;position:relative;margin-top:3px;overflow:hidden}
.pbar i{position:absolute;inset:0 auto 0 0;background:linear-gradient(90deg,var(--cy),var(--gr))}
.heat{display:grid;grid-template-columns:repeat(auto-fill,minmax(84px,1fr));gap:3px;padding:8px}
.hc{padding:6px;border:1px solid var(--line);min-height:50px;display:flex;flex-direction:column;justify-content:space-between}
.hc .t{font-size:9px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.hc .m{font-size:12px;font-variant-numeric:tabular-nums}
.ni{padding:8px 10px;border-bottom:1px solid var(--line2)}
.ni:hover{background:#0d1219}
.ni .mt{color:var(--dim);font-size:9.5px;margin-top:3px}
.ni .sm{color:var(--dim);font-size:10px;margin-top:4px;line-height:1.45}
.st{color:var(--dim);font-size:10.5px;padding:7px 10px}
.er{color:var(--rd)}
.mt-row{border-left:2px solid var(--vi);padding:8px 10px;border-bottom:1px solid var(--line2);background:rgba(167,139,250,.05)}
.sk{height:9px;margin:7px 10px;border-radius:2px;background:linear-gradient(90deg,#0d141d,#18202c,#0d141d);background-size:200% 100%;animation:shm 1.2s infinite}
@keyframes shm{0%{background-position:200% 0}100%{background-position:-200% 0}}
.emp{padding:22px 12px;text-align:center;color:var(--dim);font-size:10.5px;line-height:1.8}
.emp b{display:block;font-size:20px;opacity:.35;margin-bottom:5px;font-weight:400}
.chips{display:flex;gap:4px;padding:6px 8px;flex-wrap:wrap;border-bottom:1px solid var(--line2);background:#070b10;align-items:center}
.chips button,.chips select{background:#0b1119;border:1px solid var(--line);color:var(--dim);padding:4px 9px;font:inherit;font-size:10px;cursor:pointer}
.chips button.on{border-color:var(--cy);color:var(--cy);background:rgba(34,211,238,.08)}
.chips button:hover{color:var(--txt)}
.str{cursor:pointer;color:#2b3a4d;font-size:13px}
/* ---- panel de detalle de mercado ---- */
#dt{position:fixed;inset:0;background:rgba(0,0,0,.78);z-index:60;display:none}
#dt.on{display:flex;align-items:center;justify-content:center}
#dtb{width:min(1400px,95vw);height:min(900px,93vh);background:var(--pane);border:1px solid var(--line);
 border-top:2px solid var(--am);display:flex;flex-direction:column;min-height:0}
#dth{display:flex;align-items:flex-start;gap:12px;padding:10px 13px;border-bottom:1px solid var(--line);flex:0 0 auto}
#dth h2{font-size:13px;font-weight:600;color:var(--txt);line-height:1.35}
#dth .sub{font-size:10px;color:var(--dim);margin-top:3px}
#dtx{margin-left:auto;background:#0b1119;border:1px solid var(--line);color:var(--dim);
 padding:4px 10px;font:inherit;font-size:11px;cursor:pointer;flex:0 0 auto}
#dtx:hover{color:var(--rd);border-color:var(--rd)}
#dtc{flex:1;overflow:auto;padding:10px 13px;display:grid;gap:9px;
 grid-template-columns:1.35fr 1fr;grid-auto-rows:min-content}
#dtc .full{grid-column:1/-1}
.dp{background:var(--pane2);border:1px solid var(--line2);display:flex;flex-direction:column;min-height:0}
.dp>h4{font-size:9.5px;letter-spacing:.09em;color:var(--dim);padding:6px 9px;border-bottom:1px solid var(--line2);text-transform:uppercase}
.dp>.c{padding:8px 9px;min-height:0}
.mg{display:grid;grid-template-columns:repeat(auto-fill,minmax(112px,1fr));gap:7px}
.mg div{background:#0a0f16;border:1px solid var(--line2);padding:6px 8px}
.mg .l{font-size:9px;color:var(--dim);letter-spacing:.05em}
.mg .v{font-size:14px;margin-top:2px;font-variant-numeric:tabular-nums}
.lg{display:flex;flex-direction:column;gap:3px;max-height:230px;overflow:auto}
.lg .r{display:grid;grid-template-columns:1fr 54px 44px;gap:7px;align-items:center;font-size:10.5px}
.lg .bar{position:relative;background:#0a0f16;height:16px;overflow:hidden}
.lg .bar i{position:absolute;inset:0 auto 0 0;background:rgba(255,159,26,.24);display:block}
.lg .bar span{position:relative;padding-left:6px;line-height:16px;color:var(--txt)}
.lg .pv{text-align:right;font-variant-numeric:tabular-nums;color:var(--txt)}
.lg .sp{text-align:right;font-variant-numeric:tabular-nums;color:var(--dim);font-size:9.5px}
.dom{display:grid;grid-template-columns:1fr 1fr;gap:9px;font-size:10.5px}
.dom .side{display:flex;flex-direction:column;gap:2px}
.dom .row{position:relative;display:flex;justify-content:space-between;padding:2px 6px;background:#0a0f16}
.dom .row i{position:absolute;top:0;bottom:0;left:0;display:block}
.dom .row b,.dom .row em{position:relative;font-style:normal;font-variant-numeric:tabular-nums}
.dom .bid i{background:rgba(0,224,138,.18)} .dom .ask i{background:rgba(255,77,94,.16)}
.str.on{color:var(--am);text-shadow:0 0 7px rgba(255,159,26,.6)}
.view{display:none}.view.on{display:block}
.ftr{flex:0 0 auto;padding:5px 12px;border-top:1px solid var(--line);color:var(--dim2);font-size:9.5px;background:#05080c;display:flex;gap:14px;flex-wrap:wrap}
kbd{border:1px solid var(--line);padding:0 4px;color:var(--dim);font-size:9px}
svg text{font:9px "SF Mono",Consolas,monospace;fill:var(--dim)}
.lg{display:flex;gap:12px;padding:4px 10px;font-size:9.5px;color:var(--dim);flex-wrap:wrap}
.lg i{display:inline-block;width:8px;height:8px;margin-right:4px}
</style>
</head>
<body>
<div id="app">
<div class="hdr">
  <div class="brand"><em></em>MOR TERMINAL</div>
  <div class="cmd"><input id="cmd" placeholder="COMANDO / BUSCAR…" autocomplete="off"><span class="hint">↵</span></div>
  <div class="lights">
    <div class="lt ld" id="L1"><b></b><span>DOD</span></div>
    <div class="lt ld" id="L2"><b></b><span>PM</span></div>
    <div class="lt ld" id="L3"><b></b><span>NEWS</span></div>
  </div>
  <button class="rl" id="rel">⟳ REFRESH</button>
  <div class="clk" id="clk"></div>
</div>
<div class="tape"><div class="run" id="tape"></div></div>
<div class="nav" id="nav">
  <button data-v="dash" class="on">F1 DASH</button>
  <button data-v="con">F2 CONTRATOS</button>
  <button data-v="sc">F3 SMALL CAPS</button>
  <button data-v="pm">F4 POLYMARKET</button>
  <button data-v="news">F5 NOTICIAS</button>
  <button data-v="quant">F6 QUANT</button>
  <button data-v="brain">F7 CEREBRO</button>
  <button data-v="sim">F8 SIMULADOR</button>
  <button data-v="cart">F9 CARTERA</button>
  <button data-v="lib">F10 BIBLIOTECA</button>
  <div class="sp"></div>
  <div class="meta" id="meta"></div>
</div>
<main>

<div class="view on" id="v-dash">
  <div class="grid g4" style="margin-bottom:8px">
    <div class="kpi"><div class="k">DoD 30D · VALOR</div><div class="v" id="k1">—</div><div class="s" id="k1s">cargando…</div><div class="spark" id="k1sp"></div></div>
    <div class="kpi c2"><div class="k">FUERA DE GIGANTES</div><div class="v" id="k2">—</div><div class="s" id="k2s">—</div><div class="spark" id="k2sp"></div></div>
    <div class="kpi c3"><div class="k">POLYMARKET VOL 24H</div><div class="v" id="k3">—</div><div class="s" id="k3s">—</div><div class="spark" id="k3sp"></div></div>
    <div class="kpi c4"><div class="k">⚡ CRUCES</div><div class="v" id="k4">—</div><div class="s" id="k4s">contrato ↔ small cap</div><div class="spark" id="k4sp"></div></div>
  </div>
  <div class="grid g23" style="margin-bottom:8px">
    <div class="p" style="height:250px"><h3>FLUJO DIARIO DE ADJUDICACIONES · 30D <span id="h-flow"></span></h3><div class="bd" id="d-flow"></div></div>
    <div class="p" style="height:250px"><h3>REPARTO DEL GASTO</h3><div class="bd" id="d-donut"></div></div>
  </div>
  <div class="grid g23" style="margin-bottom:8px">
    <div class="p" style="height:265px"><h3>ADJUDICATARIOS · TOP 30D <span id="h-con"></span></h3><div class="bd" id="d-bars"></div></div>
    <div class="p" style="height:265px"><h3>⚡ CRUCES DETECTADOS</h3><div class="bd" id="d-match"></div></div>
  </div>
  <div class="grid g2" style="margin-bottom:8px">
    <div class="p" style="height:255px"><h3>POLYMARKET · VOLUMEN vs PROBABILIDAD</h3><div class="bd" id="d-scat"></div></div>
    <div class="p" style="height:255px"><h3>DISTRIBUCIÓN DE PROBABILIDADES</h3><div class="bd" id="d-hist"></div></div>
  </div>
  <div class="grid g2" style="margin-bottom:8px">
    <div class="p" style="height:250px"><h3>MAYORES MOVIMIENTOS 24H</h3><div class="bd" id="d-mov"></div></div>
    <div class="p" style="height:250px"><h3>MAPA DE CALOR</h3><div class="bd" id="d-heat"></div></div>
  </div>
  <div class="grid g3">
    <div class="p" style="height:240px"><h3>⭐ WATCHLIST</h3><div class="bd" id="d-wl"></div></div>
    <div class="p" style="height:240px"><h3>UNIVERSO POR REGIÓN</h3><div class="bd" id="d-reg"></div></div>
    <div class="p" style="height:240px"><h3>ÚLTIMO DEL PENTÁGONO <span id="h-news"></span></h3><div class="bd" id="d-news"></div></div>
  </div>
</div>

<div class="view" id="v-con">
  <div class="grid g2" style="margin-bottom:8px">
    <div class="p" style="height:250px"><h3>DISTRIBUCIÓN · TOP 12</h3><div class="bd" id="c-bars"></div></div>
    <div class="p" style="height:250px"><h3>ACUMULADO DEL PERIODO</h3><div class="bd" id="c-cum"></div></div>
  </div>
  <div class="p" style="margin-bottom:8px">
    <h3>VIGILANTE 8-K · SEC EDGAR <span id="e-cnt"></span> <span class="st" style="font-weight:400;text-transform:none">— el instante en que la información privada se vuelve pública</span></h3>
    <div class="chips" style="align-items:center;gap:8px">
      <label class="st">Ventana <select id="e-d"><option value="7">7 días</option><option value="30" selected>30 días</option><option value="60">60 días</option></select></label>
      <button id="e-load">⟳ Buscar presentaciones</button>
      <span class="st" id="e-st">Busca 8-K citando al Departamento de Defensa y los cruza con tu universo.</span>
    </div>
    <div class="bd" style="max-height:230px"><table><thead><tr>
      <th style="width:9%">Fecha</th><th style="width:8%">Ticker</th><th style="width:26%">Empresa</th>
      <th style="width:17%">Sector (SIC)</th><th style="width:22%">Partidas del 8-K</th><th style="width:18%">Señal</th>
    </tr></thead><tbody id="e-rows"></tbody></table></div>
    <div class="st">La partida <b>1.01</b> es «acuerdo material definitivo»: es la que se presenta al firmar un contrato, y por eso vale más que el resto. Citar al DoD <b>no</b> es ganar un contrato — las farmacéuticas lo citan por becas y los hospitales por TRICARE, así que esos sectores se descartan por código SIC. Verifícalo a mano siempre.</div>
  </div>

  <div class="p" style="height:calc(100vh - 640px);min-height:220px">
    <h3>CONTRATOS DEPARTMENT OF DEFENSE · 30 DÍAS <span id="c-cnt"></span></h3>
    <div class="chips">
      <button id="fa" class="on">TODOS</button><button id="fr">⚡ SIN GIGANTES</button>
      <select id="fm"><option value="0">Importe: todos</option><option value="10000000">≥ $10M</option><option value="50000000">≥ $50M</option><option value="100000000">≥ $100M</option></select>
      <span class="st" id="c-st"></span>
    </div>
    <div class="bd"><table><thead><tr>
      <th data-k="name" style="width:26%">Adjudicatario</th><th data-k="amount" style="width:9%">Importe</th>
      <th data-k="date" style="width:9%">Fecha</th><th style="width:9%">Señal</th><th>Descripción</th>
    </tr></thead><tbody id="c-rows"></tbody></table></div>
  </div>
</div>

<div class="view" id="v-sc">
  <div class="p" style="height:calc(100vh - 180px);min-height:320px">
    <h3>UNIVERSO SMALL CAP DEFENSA · GLOBAL <span id="s-cnt"></span></h3>
    <div class="chips" id="s-chips"></div>
    <div class="chips"><button id="scsv">⬇ CSV</button><button id="swl">⭐ SOLO WATCHLIST</button><span class="st" id="s-st"></span></div>
    <div class="bd"><table><thead><tr>
      <th style="width:26px"></th><th data-k="name" style="width:20%">Empresa</th><th data-k="country" style="width:11%">País</th>
      <th data-k="size" style="width:8%">Tamaño</th><th>Nicho</th><th style="width:20%">Abrir</th>
    </tr></thead><tbody id="s-rows"></tbody></table></div>
  </div>
</div>

<div class="view" id="v-pm">
  <div class="p" style="height:calc(100vh - 180px);min-height:320px">
    <h3>POLYMARKET · MERCADOS POR VOLUMEN 24H <span id="p-cnt"></span></h3>
    <div class="chips"><button id="pa" class="on">TODOS</button><button id="ps">⚡ CON SEÑAL</button><span class="st" id="p-st"></span></div>
    <div class="bd"><table><thead><tr>
      <th data-k="q">Mercado</th><th data-k="price" style="width:9%">Prob.</th><th data-k="chg" style="width:8%">Δ24h</th>
      <th data-k="vol24" style="width:9%">Vol 24h</th><th data-k="liq" style="width:9%">Liquidez</th>
      <th data-k="spread" style="width:7%">Spread</th><th style="width:18%">Señales</th>
    </tr></thead><tbody id="p-rows"></tbody></table></div>
  </div>
</div>

<div class="view" id="v-news">
  <div class="p" style="height:calc(100vh - 180px);min-height:320px">
    <h3>INTELIGENCIA · TITULARES <span id="n-cnt"></span></h3>
    <div class="chips" id="n-chips"></div>
    <div class="st" id="n-st"></div>
    <div class="bd" id="n-rows"></div>
  </div>
</div>

<div class="view" id="v-quant">
  <div class="grid g4" style="margin-bottom:8px">
    <div class="kpi"><div class="k">COBERTURA DE PRECIOS</div><div class="v" id="q1">—</div><div class="s" id="q1s">series descargadas</div></div>
    <div class="kpi c2"><div class="k">MEJOR MOMENTUM 6M</div><div class="v" id="q2">—</div><div class="s" id="q2s">—</div></div>
    <div class="kpi c3"><div class="k">MEDIA VOL. ANUAL</div><div class="v" id="q3">—</div><div class="s" id="q3s">riesgo del universo</div></div>
    <div class="kpi c4"><div class="k">SEÑALES ACTIVAS</div><div class="v" id="q4">—</div><div class="s" id="q4s">momentum + tendencia</div></div>
  </div>
  <div class="grid g2" style="margin-bottom:8px">
    <div class="p" style="height:260px"><h3>RANKING POR MOMENTUM COMPUESTO (Z-SCORE)</h3><div class="bd" id="q-rank"></div></div>
    <div class="p" style="height:260px"><h3>RIESGO vs RETORNO · 6 MESES</h3><div class="bd" id="q-rr"></div></div>
  </div>
  <div class="p" style="height:calc(100vh - 470px);min-height:280px">
    <h3>TABLA QUANT · SMALL CAPS DEFENSA <span id="q-cnt"></span></h3>
    <div class="chips"><button id="qload">⟳ Cargar / actualizar precios</button><span class="st" id="q-st">Los precios pasan por tu Worker (Yahoo Finance; el navegador no puede por CORS).</span></div>
    <div class="bd"><table><thead><tr>
      <th data-k="name" style="width:17%">Empresa</th><th style="width:9%">Precio</th>
      <th data-k="r1" style="width:7%">1M</th><th data-k="r3" style="width:7%">3M</th><th data-k="r6" style="width:7%">6M</th>
      <th data-k="vol" style="width:8%">Vol.anual</th><th data-k="dd" style="width:8%">Max DD</th>
      <th data-k="z" style="width:8%">Z-score</th><th style="width:13%">Tendencia</th><th style="width:12%">Señal</th>
    </tr></thead><tbody id="q-rows"></tbody></table></div>
    <div class="st">Z-score = media de los z de los retornos 1M/3M/6M (momentum compuesto transversal). Vol. anual = desviación típica de retornos diarios × √252. Max DD = mayor caída desde máximo. Informativo, no es recomendación.</div>
  </div>
</div>

<div class="view" id="v-brain">
  <div class="grid g4" style="margin-bottom:8px">
    <div class="kpi"><div class="k">MERCADOS ANALIZADOS</div><div class="v" id="b1">—</div><div class="s" id="b1s">de eventos activos</div></div>
    <div class="kpi c2"><div class="k">GRUPOS CON VENTAJA</div><div class="v" id="b2">—</div><div class="s" id="b2s">neta tras costes</div></div>
    <div class="kpi c3"><div class="k">MEJOR VENTAJA NETA</div><div class="v" id="b3">—</div><div class="s" id="b3s">—</div></div>
    <div class="kpi c4"><div class="k">SESGO FAVORITO-LONGSHOT</div><div class="v" id="b4">—</div><div class="s" id="b4s">λ de Wang (mediana)</div></div>
  </div>

  <div class="grid g2" style="margin-bottom:8px">
    <div class="p" style="height:290px">
      <h3>ARBITRAJE ESTRUCTURAL <span id="b-acnt"></span></h3>
      <div class="bd"><table><thead><tr>
        <th style="width:34%">Evento</th><th style="width:11%">Tipo</th><th style="width:8%">Salidas</th>
        <th style="width:10%">Medida</th><th style="width:9%">Bruto</th><th style="width:9%">Coste</th>
        <th style="width:9%">Neto</th><th style="width:10%">Acción</th>
      </tr></thead><tbody id="b-arb"></tbody></table></div>
      <div class="st"><b>Σ excluyente</b>: las patas de un grupo mutuamente excluyente deben sumar 1. <b>Monotonía</b>: si A implica B, p(A) ≤ p(B) siempre — «BTC cae a 15.000» implica «BTC cae a 20.000», así que la primera no puede cotizar más cara. Ambas son aritmética verificable, sin riesgo de modelo. Coste = medio spread por pata.</div>
    </div>
    <div class="p" style="height:290px">
      <h3>DISTORSIÓN DE WANG · PRECIO vs PROBABILIDAD REAL</h3>
      <div class="bd" id="b-wang"></div>
    </div>
  </div>

  <div class="p" style="margin-bottom:8px">
    <h3>CALCULADORA DE VENTAJA Y KELLY</h3>
    <div class="chips" style="align-items:center;flex-wrap:wrap;gap:10px">
      <label class="st">Mercado <select id="b-kmkt" style="max-width:340px"></select></label>
      <label class="st">Tu probabilidad <input id="b-kp" type="number" min="0.1" max="99.9" step="0.1" value="50" style="width:70px"> %</label>
      <label class="st">Fracción Kelly <select id="b-kf"><option value="0.25">¼ (prudente)</option><option value="0.5">½</option><option value="1">completo</option></select></label>
      <span class="st" id="b-kout">—</span>
    </div>
    <div class="st">Kelly: f* = (p·b − q)/b con b = (1−precio)/precio. La probabilidad la pones tú: el terminal no la estima. Kelly completo maximiza crecimiento a largo plazo pero asume probabilidad exacta y tolera caídas muy grandes; por eso el uso habitual es fraccional. <b>Informativo. No es recomendación de inversión ni de apuesta.</b></div>
  </div>

  <div class="p" style="height:calc(100vh - 640px);min-height:260px">
    <h3>TABLA DE MERCADOS <span id="b-cnt"></span> <span class="st" style="font-weight:400;text-transform:none">— clic en una fila para el desglose completo</span></h3>
    <div class="chips">
      <button id="bload">⟳ Cargar / actualizar cerebro</button>
      <button id="bvol">σ Calcular volatilidad realizada (top 20)</button>
      <span class="st" id="b-st">Necesita los endpoints /api/pmq y /api/pmh en tu Worker.</span>
    </div>
    <div class="bd"><table><thead><tr>
      <th data-k="q" style="width:26%">Mercado</th><th data-k="p" style="width:7%">Precio</th>
      <th data-k="fair" style="width:8%">Justo (Wang)</th><th data-k="edge" style="width:7%">Sesgo</th>
      <th data-k="spreadRel" style="width:8%">Spread rel.</th><th data-k="turn" style="width:7%">Rotación</th>
      <th data-k="snorm" style="width:8%">σ norm.</th><th data-k="urg" style="width:7%">Urgencia</th>
      <th data-k="days" style="width:7%">Días</th><th data-k="z" style="width:7%">Z mom.</th><th style="width:8%">Señal</th>
    </tr></thead><tbody id="b-rows"></tbody></table></div>
    <div class="st">Justo (Wang) = g⁻¹(precio) = Φ(Φ⁻¹(p) − λ), la probabilidad sin la prima de riesgo que el mercado incorpora. Sesgo = precio − justo: positivo significa longshot caro. σ norm. = volatilidad realizada ÷ √(p(1−p)), comparable entre niveles de precio. Urgencia = 2p(1−p)/√días. Informativo, no es recomendación.</div>
  </div>
</div>

<div class="view" id="v-sim">
  <div class="grid g4" style="margin-bottom:8px">
    <div class="kpi"><div class="k">MERCADOS RESUELTOS</div><div class="v" id="s1">—</div><div class="s" id="s1s">muestra del backtest</div></div>
    <div class="kpi c2"><div class="k">BRIER SCORE</div><div class="v" id="s2">—</div><div class="s" id="s2s">0 = perfecto · 0.25 = moneda</div></div>
    <div class="kpi c3"><div class="k">λ EMPÍRICA</div><div class="v" id="s3">—</div><div class="s" id="s3s">sesgo medido, no teórico</div></div>
    <div class="kpi c4"><div class="k">MEJOR ESTRATEGIA</div><div class="v" id="s4">—</div><div class="s" id="s4s">—</div></div>
  </div>

  <div class="p" style="margin-bottom:8px">
    <h3>CONFIGURACIÓN DEL BACKTEST</h3>
    <div class="chips" style="align-items:center;flex-wrap:wrap;gap:10px">
      <label class="st">Mercados <select id="s-n"><option value="120">120</option><option value="250" selected>250</option><option value="400">400</option></select></label>
      <label class="st">Entrada a <select id="s-h"><option value="1">1 día</option><option value="7" selected>7 días</option><option value="30">30 días</option></select> del cierre</label>
      <label class="st">Volumen mínimo <select id="s-v"><option value="10000">10 mil $</option><option value="100000" selected>100 mil $</option><option value="1000000">1 M$</option></select></label>
      <button id="srun">▶ Ejecutar simulación</button>
      <span class="st" id="s-st">Descarga histórico real del CLOB de mercados ya resueltos. Tarda 1–3 min.</span>
    </div>
  </div>

  <div class="grid g2" style="margin-bottom:8px">
    <div class="p" style="height:300px">
      <h3>CALIBRACIÓN · LO QUE EL MERCADO DICE vs LO QUE PASA</h3>
      <div class="bd" id="s-cal"></div>
    </div>
    <div class="p" style="height:300px">
      <h3>CURVA DE CAPITAL · MEJOR ESTRATEGIA</h3>
      <div class="bd" id="s-eq"></div>
    </div>
  </div>

  <div class="p" style="margin-bottom:8px">
    <h3>PRUEBA DE CHOQUE · MONTE CARLO CONTRA EL AZAR <span id="mc-cnt"></span></h3>
    <div class="chips" style="align-items:center;gap:9px;flex-wrap:wrap">
      <label class="st">Repeticiones <select id="mc-n">
        <option value="100000">100 mil</option>
        <option value="1000000" selected>1 millón</option>
        <option value="10000000">10 millones</option>
      </select></label>
      <button id="mc-run">▶ Ejecutar prueba de choque</button>
      <span class="st" id="mc-st">Necesita la simulación ejecutada arriba. Regenera los desenlaces bajo la hipótesis de mercado perfectamente valorado.</span>
    </div>
    <div class="bd" style="max-height:210px"><table><thead><tr>
      <th style="width:26%">Estrategia</th><th style="width:9%">Apuestas</th><th style="width:11%">Observado</th>
      <th style="width:12%">Azar (media)</th><th style="width:14%">Rango del azar 95%</th>
      <th style="width:10%">p-valor</th><th style="width:18%">Veredicto</th>
    </tr></thead><tbody id="mc-rows"></tbody></table></div>
    <div class="st">Bajo la hipótesis nula el precio <b>es</b> la probabilidad verdadera, así que cada desenlace se regenera como Bernoulli(precio de entrada). El p-valor es la fracción de repeticiones en las que el puro azar iguala o supera lo observado. Un p-valor de 0,30 significa que tres de cada diez universos sin ninguna ventaja dan un resultado igual de bueno. <b>No es una prueba de que la estrategia funcione: es una prueba de que podría no ser suerte.</b></div>
  </div>

  <div class="p" style="margin-bottom:8px">
    <h3>REGISTRO EN PAPEL <span id="p-cnt"></span> <span class="st" style="font-weight:400;text-transform:none">— muestra propia y sin sesgo: la señal se anota al emitirse, sin saber el desenlace</span></h3>
    <div class="chips" style="align-items:center;gap:8px">
      <button id="p-snap">✎ Anotar señales de hoy</button>
      <button id="p-set">✓ Liquidar resueltas</button>
      <span class="st" id="p-st">El cron diario lo hace solo. Necesita KV configurado en el Worker.</span>
    </div>
    <div class="bd" style="max-height:190px"><table><thead><tr>
      <th style="width:11%">Estado</th><th style="width:11%">Tipo</th><th style="width:9%">Señal</th>
      <th style="width:38%">Mercado</th><th style="width:9%">Entrada</th><th style="width:11%">Anotada</th><th style="width:11%">Retorno</th>
    </tr></thead><tbody id="p-rows"></tbody></table></div>
    <div class="st" id="p-est">Sin datos todavía.</div>
  </div>

  <div class="p" style="height:calc(100vh - 830px);min-height:220px">
    <h3>ESTRATEGIAS SIMULADAS <span id="s-cnt"></span></h3>
    <div class="bd"><table><thead><tr>
      <th style="width:24%">Estrategia</th><th style="width:7%">Apuestas</th><th style="width:8%">Acierto</th>
      <th style="width:10%">Medio</th><th style="width:9%">Mediana</th><th style="width:10%">Total</th><th style="width:9%">Max DD</th>
      <th style="width:9%">t-stat</th><th style="width:18%">¿Significativo?</th>
    </tr></thead><tbody id="s-rows"></tbody></table></div>
    <div class="st">Media y mediana divergen mucho a propósito: un longshot acertado a 0.02 paga 50× y arrastra la media él solo, así que la mediana dice mejor qué pasa en la apuesta típica. Retorno por unidad arriesgada: comprar SÍ a precio p paga (desenlace − p)/p. t-stat = media ÷ (desviación/√n): por encima de 2 el resultado difícilmente es azar. <b>Rentabilidad pasada simulada sobre datos históricos; no predice resultados futuros y no descuenta el impacto de mercado. Informativo, no es recomendación de inversión ni de apuesta.</b></div>
  </div>
</div>
<div class="view" id="v-cart">
  <div class="grid g4" style="margin-bottom:8px">
    <div class="kpi"><div class="k">CAPITAL COMPROMETIDO</div><div class="v" id="c1">—</div><div class="s" id="c1s">de tu capital</div></div>
    <div class="kpi c2"><div class="k">VALOR ESPERADO</div><div class="v" id="c2">—</div><div class="s" id="c2s">según TUS probabilidades</div></div>
    <div class="kpi c3"><div class="k">PEOR CASO</div><div class="v" id="c3">—</div><div class="s" id="c3s">si fallan todas</div></div>
    <div class="kpi c4"><div class="k">ARBITRAJE DISPONIBLE</div><div class="v" id="c4">—</div><div class="s" id="c4s">sin pronosticar nada</div></div>
  </div>

  <div class="p" style="margin-bottom:8px">
    <h3>PARÁMETROS</h3>
    <div class="chips" style="align-items:center;flex-wrap:wrap;gap:10px">
      <label class="st">Capital <input id="c-cap" type="number" min="10" step="50" value="1000" style="width:96px"> €</label>
      <label class="st">Fracción Kelly <select id="c-frac"><option value="0.25" selected>¼ (prudente)</option><option value="0.5">½</option><option value="1">completo</option></select></label>
      <label class="st">Tope por posición <select id="c-mp"><option value="0.05">5%</option><option value="0.1" selected>10%</option><option value="0.2">20%</option></select></label>
      <label class="st">Tope total <select id="c-mt"><option value="0.3">30%</option><option value="0.5" selected>50%</option><option value="0.8">80%</option></select></label>
      <span class="st" id="c-st">Añade mercados y pon TU probabilidad. El terminal no la estima.</span>
    </div>
  </div>

  <div class="p" style="margin-bottom:8px;min-height:210px">
    <h3>TUS POSICIONES · REPARTO KELLY</h3>
    <div class="chips" style="align-items:center;gap:8px">
      <label class="st">Mercado <select id="c-mkt" style="max-width:420px"></select></label>
      <label class="st">Tu probabilidad <input id="c-p" type="number" min="0.1" max="99.9" step="0.1" value="50" style="width:74px"> %</label>
      <button id="c-add">+ Añadir</button><button id="c-clr">Vaciar</button>
    </div>
    <div class="bd"><table><thead><tr>
      <th style="width:28%">Mercado</th><th style="width:7%">Precio</th><th style="width:7%">Tu prob.</th>
      <th style="width:8%">Ventaja</th><th style="width:8%">Kelly</th><th style="width:9%">Importe</th>
      <th style="width:8%">Títulos</th><th style="width:9%">Si acierta</th><th style="width:8%">Salida</th><th style="width:8%"></th>
    </tr></thead><tbody id="c-rows"></tbody></table></div>
    <div class="st">Kelly para un binario: <b>f* = (p − precio) / (1 − precio)</b>. «Salida» es el precio al que tu ventaja se agota, que es tu propia probabilidad — no es un objetivo de beneficio, es donde deja de haber razón para seguir. El reparto entre varias posiciones se escala proporcionalmente hasta el tope: es una aproximación, el Kelly multi-activo exacto exige la distribución conjunta. <b>Informativo. No es recomendación de inversión ni de apuesta.</b></div>
  </div>

  <div class="p" style="height:calc(100vh - 620px);min-height:230px">
    <h3>PLAN DE ARBITRAJE <span id="c-acnt"></span> <span class="st" style="font-weight:400;text-transform:none">— aquí no se pronostica: las patas y las salidas salen de la aritmética</span></h3>
    <div class="bd"><table><thead><tr>
      <th style="width:30%">Oportunidad</th><th style="width:10%">Tipo</th><th style="width:10%">Patas</th>
      <th style="width:12%">Capital a inmovilizar</th><th style="width:10%">Beneficio</th>
      <th style="width:10%">Retorno s/capital ▼</th><th style="width:18%">Entrada y salida</th>
    </tr></thead><tbody id="c-arb"></tbody></table></div>
    <div class="st">Vender las n patas de un grupo excluyente cuesta Σ(1−pᵢ) = n − Σp e ingresa n − 1 con certeza, así que el beneficio es Σp − 1. <b>El retorno sobre capital es mucho menor que el sobre-redondeo</b>: para vender 32 patas hay que inmovilizar casi 31 unidades. Riesgos reales no simulados: el libro puede no tener profundidad para todas las patas al precio mostrado, y el capital queda inmovilizado hasta la resolución.</div>
  </div>
</div>
<div class="view" id="v-lib">
  <div class="grid g4" style="margin-bottom:8px">
    <div class="kpi"><div class="k">IMPLEMENTADO</div><div class="v" id="l1">—</div><div class="s">métodos en producción</div></div>
    <div class="kpi c2"><div class="k">EN COLA</div><div class="v" id="l2">—</div><div class="s">por orden de prioridad</div></div>
    <div class="kpi c3"><div class="k">DESCARTADO</div><div class="v" id="l3">—</div><div class="s">no aplica a binarios</div></div>
    <div class="kpi c4"><div class="k">CUELLO DE BOTELLA</div><div class="v" style="font-size:15px">muestra</div><div class="s">no faltan métodos, falta evidencia</div></div>
  </div>

  <div class="p" style="margin-bottom:8px">
    <h3>POR QUÉ LA MITAD NO PORTA</h3>
    <div class="st" style="padding:8px 10px;line-height:1.55">
      Un binario de predicción <b>no es una serie de precios</b>: es una martingala acotada en [0,1] que termina en 0 o en 1.
      La varianza terminal está fijada en p(1−p) — es una identidad, no un parámetro que estimar. No hay deriva bajo la medida
      de mercado, así que una estrategia de tendencia apuesta contra una martingala por construcción. Y el proceso <b>termina</b>:
      no hay largo plazo donde converger, que es lo que cointegración y reversión a la media necesitan.
      Lo que sí traslada es la maquinaria de probabilidad (distorsión, calibración, teoría de la información) y la de
      microestructura, que no depende de la forma del proceso.
    </div>
  </div>

  <div class="p" style="height:calc(100vh - 400px);min-height:300px">
    <h3>BIBLIOTECA QUANT · ESTADO EN EL PROYECTO <span id="l-cnt"></span></h3>
    <div class="chips">
      <button class="lf on" data-f="all">Todas</button>
      <button class="lf" data-f="ok">Implementado</button>
      <button class="lf" data-f="cola">En cola</button>
      <button class="lf" data-f="no">Descartado</button>
    </div>
    <div class="bd"><table><thead><tr>
      <th style="width:4%">#</th><th style="width:17%">Familia</th><th style="width:9%">Estado</th>
      <th style="width:20%">Qué se usa / usaría</th><th style="width:8%">Dónde</th><th style="width:42%">Razón</th>
    </tr></thead><tbody id="l-rows"></tbody></table></div>
    <div class="st">Evaluado contra 146 mercados resueltos de Polymarket. El t-stat de la deriva a 7 días pasaba de 5,35 a 0,30 al agrupar por mercado: las ventanas solapadas inflan la significancia. Ese es el criterio con el que está juzgada cada fila.</div>
  </div>
</div>
</main>

<div id="dt"><div id="dtb">
  <div id="dth">
    <div style="min-width:0">
      <h2 id="dt-q">—</h2>
      <div class="sub" id="dt-sub">—</div>
    </div>
    <button id="dtx">✕ CERRAR · Esc</button>
  </div>
  <div id="dtc">
    <div class="dp full"><h4>Métricas</h4><div class="c"><div class="mg" id="dt-met"></div></div></div>
    <div class="dp" style="height:280px"><h4>Histórico y niveles de Fibonacci</h4><div class="c" style="flex:1" id="dt-fib"></div></div>
    <div class="dp" style="height:280px"><h4 id="dt-gh">Todas las probabilidades del grupo</h4><div class="c" style="flex:1;overflow:auto"><div class="lg" id="dt-grp"></div></div></div>
    <div class="dp" style="height:250px"><h4>Matrix · profundidad del libro</h4><div class="c" style="flex:1;overflow:auto" id="dt-dom"></div></div>
    <div class="dp" style="height:250px"><h4>Delta · flujo de órdenes (CVD)</h4><div class="c" style="flex:1" id="dt-del"></div></div>
  </div>
</div></div>
<div class="ftr">
  <span><kbd>F1-F10</kbd> vistas</span><span><kbd>/</kbd> buscar</span>
  <span>Comandos: CON · SC · PM · NEWS · DASH · CEREBRO · SIM · CARTERA · REFRESH</span>
  <span style="margin-left:auto">USAspending · Polymarket · war.gov · Google News — informativo, no es recomendación de inversión</span>
</div>
</div>
<script>
var PRIMES=["LOCKHEED","RAYTHEON","RTX","BOEING","NORTHROP","GENERAL DYNAMICS","BAE","L3HARRIS","LEIDOS","HUNTINGTON INGALLS","BOOZ ALLEN","GENERAL ELECTRIC","PRATT","COLLINS","TEXTRON","HONEYWELL","SAIC","CACI","AMENTUM","KBR","JACOBS","ACCENTURE","MICROSOFT","AMAZON","GOOGLE","ORACLE","PALANTIR","ANDURIL","CLARK CONSTRUCTION","FLUOR","VECTRUS","V2X","PARSONS","AECOM","SIKORSKY","BECHTEL"];
var SC=[
{name:"Ondas Holdings",tk:"NASDAQ:ONDS",c:"EE.UU.",r:"Norteamérica",z:1,n:"Drones autónomos y redes militares"},
{name:"Byrna Technologies",tk:"NASDAQ:BYRN",c:"EE.UU.",r:"Norteamérica",z:1,n:"Armamento menos-letal"},
{name:"Cadre Holdings",tk:"NYSE:CDRE",c:"EE.UU.",r:"Norteamérica",z:2,n:"Blindaje corporal y equipos EOD"},
{name:"Ducommun",tk:"NYSE:DCO",c:"EE.UU.",r:"Norteamérica",z:1,n:"Estructuras y electrónica aeroespacial"},
{name:"Astronics",tk:"NASDAQ:ATRO",c:"EE.UU.",r:"Norteamérica",z:1,n:"Electrónica para aviación militar"},
{name:"CPI Aerostructures",tk:"AMEX:CVU",c:"EE.UU.",r:"Norteamérica",z:0,n:"Aeroestructuras (micro-cap)"},
{name:"Espey Mfg",tk:"AMEX:ESP",c:"EE.UU.",r:"Norteamérica",z:0,n:"Electrónica de potencia militar"},
{name:"Comtech Telecom",tk:"NASDAQ:CMTL",c:"EE.UU.",r:"Norteamérica",z:1,n:"Comunicaciones satelitales tácticas"},
{name:"Karman Holdings",tk:"NYSE:KRMN",c:"EE.UU.",r:"Norteamérica",z:2,n:"Misiles e hipersónicos (IPO 2025)"},
{name:"Theon International",tk:"EURONEXT:THEON",c:"Grecia/NL",r:"Europa",z:2,n:"Visión nocturna y térmica OTAN"},
{name:"Exail Technologies",tk:"EURONEXT:EXA",c:"Francia",r:"Europa",z:2,n:"Navegación inercial, drones navales"},
{name:"Cohort plc",tk:"LSE:CHRT",c:"Reino Unido",r:"Europa",z:1,n:"Electrónica de defensa"},
{name:"Avon Technologies",tk:"LSE:AVON",c:"Reino Unido",r:"Europa",z:1,n:"Protección NBQ y cascos"},
{name:"MilDef Group",tk:"OMXSTO:MILDEF",c:"Suecia",r:"Europa",z:1,n:"Electrónica rugerizada militar"},
{name:"Invisio",tk:"OMXSTO:IVSO",c:"Suecia",r:"Europa",z:2,n:"Comunicación táctica"},
{name:"W5 Solutions",tk:"OMXSTO:W5",c:"Suecia",r:"Europa",z:0,n:"Entrenamiento militar (micro-cap)"},
{name:"Lubawa",tk:"GPW:LBW",c:"Polonia",r:"Europa Este",z:0,n:"Equipamiento y camuflaje"},
{name:"Katmerciler",tk:"BIST:KATMR",c:"Turquía",r:"Europa Este",z:1,n:"Vehículos blindados"},
{name:"Next Vision",tk:"TASE:NXSN",c:"Israel",r:"Oriente Medio",z:2,n:"Cámaras estabilizadas para drones"},
{name:"Paras Defence",tk:"NSE:PARAS",c:"India",r:"Asia Sur",z:1,n:"Óptica y electrónica de defensa"},
{name:"Data Patterns",tk:"NSE:DATAPATTNS",c:"India",r:"Asia Sur",z:2,n:"Radares y aviónica"},
{name:"ideaForge",tk:"NSE:IDEAFORGE",c:"India",r:"Asia Sur",z:1,n:"Drones militares"},
{name:"MTAR Technologies",tk:"NSE:MTARTECH",c:"India",r:"Asia Sur",z:1,n:"Precisión para misiles y espacio"},
{name:"Astra Microwave",tk:"NSE:ASTRAMICRO",c:"India",r:"Asia Sur",z:1,n:"Radar y guerra electrónica"},
{name:"Victek",tk:"KRX:065450",c:"Corea Sur",r:"Asia Este",z:0,n:"Guerra electrónica (micro-cap)"},
{name:"Firstec",tk:"KRX:010820",c:"Corea Sur",r:"Asia Este",z:1,n:"Componentes K9 y misiles"},
{name:"Howa Machinery",tk:"TSE:6203",c:"Japón",r:"Asia Este",z:1,n:"Armas ligeras (Type 20)"},
{name:"Ishikawa Seisakusho",tk:"TSE:6208",c:"Japón",r:"Asia Este",z:1,n:"Munición y minas navales"},
{name:"DroneShield",tk:"ASX:DRO",c:"Australia",r:"Oceanía",z:2,n:"Anti-drones (counter-UAS)"},
{name:"Electro Optic Systems",tk:"ASX:EOS",c:"Australia",r:"Oceanía",z:1,n:"Armas remotas, láser"},
{name:"XTEK",tk:"ASX:XTE",c:"Australia",r:"Oceanía",z:0,n:"Balística y drones (micro-cap)"},
{name:"Austal",tk:"ASX:ASB",c:"Australia",r:"Oceanía",z:2,n:"Buques militares US Navy + RAN"},
{name:"Taurus Armas",tk:"BMFBOVESPA:TASA4",c:"Brasil",r:"Sudamérica",z:1,n:"Armas ligeras"}];
SC.forEach(function(s){var w=s.name.toUpperCase().split(/[^A-Z0-9]+/).filter(function(x){return x.length>=4});s.tok=w[0]||s.name.toUpperCase()});

/* feeds: rss = fuente directa (CORS ok) ; gq = consulta Google News de respaldo */
var NQ={
"Pentágono":{rss:"https://www.war.gov/DesktopModules/ArticleCS/RSS.ashx?ContentType=1&Site=945&max=30",gq:"Pentagon defense contract award",hl:"en-US",gl:"US",ce:"US:en"},
"Europa Este":{gq:"defense contract Poland OR Romania OR Baltic OR Ukraine",hl:"en-US",gl:"US",ce:"US:en"},
"Rusia":{gq:"Russia defense industry military",hl:"en-US",gl:"US",ce:"US:en"},
"Asia Sur":{gq:"defence contract India OR Pakistan",hl:"en-US",gl:"US",ce:"US:en"},
"Asia Este":{gq:"defense contract Korea OR Japan OR Taiwan",hl:"en-US",gl:"US",ce:"US:en"},
"Oceanía":{gq:"defence contract Australia OR New Zealand",hl:"en-AU",gl:"AU",ce:"AU:en"},
"África":{gq:"Africa military procurement contract",hl:"en-US",gl:"US",ce:"US:en"},
"Sudamérica":{gq:"defensa contrato militar Brasil OR Argentina OR Chile",hl:"es-419",gl:"AR",ce:"AR:es-419"},
"España":{gq:"contrato defensa ejército España",hl:"es",gl:"ES",ce:"ES:es"}};
var SZ=["MICRO","SMALL","MID"],SZC=["t4","t1","t3"];
var REG=["Todas","Norteamérica","Europa","Europa Este","Oriente Medio","Asia Sur","Asia Este","Oceanía","Sudamérica"];

var CON=[],PM=[],MATCH=[],NEWS={},NSRC={},ERR={},VIEW="dash",SORT={k:"amount",d:-1},FP="all",PF="all",RG="Todas",WO=false,NR="Pentágono";
var W={};try{W=JSON.parse(localStorage.getItem("mor_w")||"{}")}catch(e){W={}}
function sw(){try{localStorage.setItem("mor_w",JSON.stringify(W))}catch(e){}}
function $(i){return document.getElementById(i)}
function f$(n){return n>=1e9?"$"+(n/1e9).toFixed(2)+"B":n>=1e6?"$"+(n/1e6).toFixed(1)+"M":n>=1e3?"$"+Math.round(n/1e3)+"K":"$"+Math.round(n)}
function esc(s){return (s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;")}
function lt(id,st,tx){var e=$(id);if(!e)return;e.className="lt "+st;if(tx)e.lastElementChild.textContent=tx}
function sk(n){var o="";for(var i=0;i<(n||4);i++)o+="<div class='sk' style='width:"+(92-i*11)+"%'></div>";return o}
function eur(n){n=+n||0;return (n>=1e4?Math.round(n).toLocaleString("es-ES"):n.toFixed(2))+" €"}
function fn(n){n=+n||0;return n>=1e6?(n/1e6).toFixed(2)+"M":n>=1e3?(n/1e3).toFixed(1)+"K":Math.round(n).toString()}
function emp(ic,m){return "<div class='emp'><b>"+ic+"</b>"+m+"</div>"}
function tick(){var d=new Date();$("clk").textContent=d.toLocaleDateString("es-ES")+"  "+d.toLocaleTimeString("es-ES")}
setInterval(tick,1000);tick();

/* ---------- SVG CHARTS ---------- */
function spark(el,v,c){if(!v||v.length<2){el.innerHTML="";return}
 var w=160,h=28,mn=Math.min.apply(null,v),mx=Math.max.apply(null,v),rg=(mx-mn)||1;
 var p=v.map(function(x,i){return (i/(v.length-1)*w).toFixed(1)+","+(h-((x-mn)/rg)*(h-4)-2).toFixed(1)}).join(" ");
 el.innerHTML="<svg viewBox='0 0 "+w+" "+h+"' preserveAspectRatio='none' style='width:100%;height:100%'>"+
 "<polyline points='0,"+h+" "+p+" "+w+","+h+"' fill='"+c+"' opacity='.12' stroke='none'/>"+
 "<polyline points='"+p+"' fill='none' stroke='"+c+"' stroke-width='1.4' vector-effect='non-scaling-stroke'/></svg>"}

function areaChart(el,pts,col,fmtY){
 if(!pts.length){el.innerHTML=emp("📉","Sin datos");return}
 var W=760,H=190,ml=52,mb=22,mt=10,mr=8;
 var iw=W-ml-mr, ih=H-mt-mb;
 var mx=Math.max.apply(null,pts.map(function(p){return p.v}))||1;
 var step=pts.length>1?iw/(pts.length-1):iw;
 var xy=pts.map(function(p,i){return [ml+i*step, mt+ih-(p.v/mx)*ih]});
 var line=xy.map(function(a){return a[0].toFixed(1)+","+a[1].toFixed(1)}).join(" ");
 var grid="",gy=[0,.25,.5,.75,1];
 gy.forEach(function(g){var y=mt+ih-g*ih;
  grid+="<line x1='"+ml+"' y1='"+y.toFixed(1)+"' x2='"+(W-mr)+"' y2='"+y.toFixed(1)+"' stroke='#141c28'/>"+
  "<text x='"+(ml-6)+"' y='"+(y+3).toFixed(1)+"' text-anchor='end'>"+fmtY(mx*g)+"</text>"});
 var bars=xy.map(function(a,i){return "<rect x='"+(a[0]-Math.max(1,step*.3)).toFixed(1)+"' y='"+a[1].toFixed(1)+"' width='"+Math.max(2,step*.6).toFixed(1)+"' height='"+(mt+ih-a[1]).toFixed(1)+"' fill='"+col+"' opacity='.20'><title>"+pts[i].k+" · "+fmtY(pts[i].v)+"</title></rect>"}).join("");
 var lab="";pts.forEach(function(p,i){if(i%Math.ceil(pts.length/7)===0)
  lab+="<text x='"+xy[i][0].toFixed(1)+"' y='"+(H-6)+"' text-anchor='middle'>"+p.k.slice(5)+"</text>"});
 el.innerHTML="<svg viewBox='0 0 "+W+" "+H+"' style='width:100%;height:100%' preserveAspectRatio='none'>"+grid+bars+
 "<polyline points='"+ml+","+(mt+ih)+" "+line+" "+(ml+(pts.length-1)*step).toFixed(1)+","+(mt+ih)+"' fill='"+col+"' opacity='.10'/>"+
 "<polyline points='"+line+"' fill='none' stroke='"+col+"' stroke-width='1.6' vector-effect='non-scaling-stroke'/>"+
 xy.map(function(a,i){return "<circle cx='"+a[0].toFixed(1)+"' cy='"+a[1].toFixed(1)+"' r='2' fill='"+col+"'><title>"+pts[i].k+" · "+fmtY(pts[i].v)+"</title></circle>"}).join("")+
 lab+"</svg>"}

function donut(el,parts){
 var tot=parts.reduce(function(a,p){return a+p.v},0)||1,R=62,r=38,cx=90,cy=90,ang=-Math.PI/2,seg="";
 parts.forEach(function(p){
  var a2=ang+2*Math.PI*(p.v/tot),lg=(a2-ang)>Math.PI?1:0;
  var x1=cx+R*Math.cos(ang),y1=cy+R*Math.sin(ang),x2=cx+R*Math.cos(a2),y2=cy+R*Math.sin(a2);
  var x3=cx+r*Math.cos(a2),y3=cy+r*Math.sin(a2),x4=cx+r*Math.cos(ang),y4=cy+r*Math.sin(ang);
  seg+="<path d='M"+x1.toFixed(1)+" "+y1.toFixed(1)+" A"+R+" "+R+" 0 "+lg+" 1 "+x2.toFixed(1)+" "+y2.toFixed(1)+
   " L"+x3.toFixed(1)+" "+y3.toFixed(1)+" A"+r+" "+r+" 0 "+lg+" 0 "+x4.toFixed(1)+" "+y4.toFixed(1)+" Z' fill='"+p.c+"'><title>"+p.k+" "+f$(p.v)+"</title></path>";
  ang=a2});
 var lg2=parts.map(function(p){return "<span><i style='background:"+p.c+"'></i>"+p.k+" "+Math.round(100*p.v/tot)+"% · "+f$(p.v)+"</span>"}).join("");
 el.innerHTML="<div style='display:flex;align-items:center;gap:6px;padding:6px'><svg viewBox='0 0 180 180' style='width:150px;height:150px;flex:0 0 auto'>"+seg+
 "<text x='90' y='86' text-anchor='middle' style='font-size:11px;fill:#8ca0b8'>TOTAL</text>"+
 "<text x='90' y='102' text-anchor='middle' style='font-size:14px;fill:#d5dee9'>"+f$(tot)+"</text></svg>"+
 "<div class='lg' style='flex-direction:column;gap:7px'>"+lg2+"</div></div>"}

function hist(el,vals){
 if(!vals.length){el.innerHTML=sk(4);return}
 var b=new Array(10).fill(0);
 vals.forEach(function(v){var i=Math.min(9,Math.floor(v*10));b[i]++});
 var mx=Math.max.apply(null,b)||1,W=740,H=190,ml=34,mb=24,mt=10,iw=W-ml-8,ih=H-mt-mb,bw=iw/10;
 var bars="";
 b.forEach(function(c,i){var h=(c/mx)*ih,col=i<3?"#ff4d5e":i>6?"#00e08a":"#3d5570";
  bars+="<rect x='"+(ml+i*bw+3).toFixed(1)+"' y='"+(mt+ih-h).toFixed(1)+"' width='"+(bw-6).toFixed(1)+"' height='"+h.toFixed(1)+"' fill='"+col+"' opacity='.75'><title>"+(i*10)+"-"+(i*10+10)+"% · "+c+" mercados</title></rect>"+
  "<text x='"+(ml+i*bw+bw/2).toFixed(1)+"' y='"+(H-8)+"' text-anchor='middle'>"+(i*10)+"</text>"+
  (c?"<text x='"+(ml+i*bw+bw/2).toFixed(1)+"' y='"+(mt+ih-h-4).toFixed(1)+"' text-anchor='middle' style='fill:#8ca0b8'>"+c+"</text>":"")});
 el.innerHTML="<svg viewBox='0 0 "+W+" "+H+"' style='width:100%;height:100%' preserveAspectRatio='none'>"+
 "<line x1='"+ml+"' y1='"+(mt+ih)+"' x2='"+(W-8)+"' y2='"+(mt+ih)+"' stroke='#1a2231'/>"+bars+
 "<text x='"+(W-8)+"' y='"+(H-8)+"' text-anchor='end'>% probabilidad</text></svg>"}

function scatter(el,ms){
 if(!ms.length){el.innerHTML=sk(4);return}
 var W=740,H=190,ml=44,mb=22,mt=12,mr=10,iw=W-ml-mr,ih=H-mt-mb;
 var mv=Math.max.apply(null,ms.map(function(m){return m.vol24}))||1;
 var pts=ms.map(function(m){
  var x=ml+(m.price)*iw, lv=Math.log10(1+m.vol24)/Math.log10(1+mv);
  var y=mt+ih-lv*ih, r=Math.max(2.2,Math.min(9,Math.sqrt(m.vol24/mv)*13));
  var c=m.chg>=0?"#00e08a":"#ff4d5e";
  return "<circle cx='"+x.toFixed(1)+"' cy='"+y.toFixed(1)+"' r='"+r.toFixed(1)+"' fill='"+c+"' opacity='.45' stroke='"+c+"' stroke-width='.7'><title>"+esc(m.q.slice(0,70))+"\\n"+(m.price*100).toFixed(1)+"% · vol "+f$(m.vol24)+" · Δ"+(m.chg*100).toFixed(1)+"</title></circle>"}).join("");
 var gr="";[0,.25,.5,.75,1].forEach(function(g){var x=ml+g*iw;
  gr+="<line x1='"+x.toFixed(1)+"' y1='"+mt+"' x2='"+x.toFixed(1)+"' y2='"+(mt+ih)+"' stroke='#141c28'/>"+
  "<text x='"+x.toFixed(1)+"' y='"+(H-6)+"' text-anchor='middle'>"+(g*100)+"%</text>"});
 el.innerHTML="<svg viewBox='0 0 "+W+" "+H+"' style='width:100%;height:100%' preserveAspectRatio='none'>"+gr+pts+
 "<text x='"+(ml-6)+"' y='"+(mt+8)+"' text-anchor='end'>vol↑</text>"+
 "<text x='"+(ml-6)+"' y='"+(mt+ih)+"' text-anchor='end'>bajo</text></svg>"+
 "<div class='lg'><span><i style='background:#00e08a'></i>subiendo 24h</span><span><i style='background:#ff4d5e'></i>bajando 24h</span><span>tamaño = volumen</span></div>"}

/* ---------- FETCH ---------- */
function loadCon(){
 lt("L1","ld","DOD");$("d-bars").innerHTML=sk(6);$("c-bars").innerHTML=sk(6);$("d-flow").innerHTML=sk(5);
 var e=new Date(),s=new Date(e-30*864e5);
 fetch("https://api.usaspending.gov/api/v2/search/spending_by_award/",{method:"POST",headers:{"Content-Type":"application/json"},
  body:JSON.stringify({filters:{award_type_codes:["A","B","C","D"],agencies:[{type:"awarding",tier:"toptier",name:"Department of Defense"}],
   time_period:[{start_date:s.toISOString().slice(0,10),end_date:e.toISOString().slice(0,10)}]},
   fields:["Award ID","Recipient Name","Award Amount","Description","Start Date"],sort:"Award Amount",order:"desc",limit:100,page:1})})
 .then(function(r){if(!r.ok)throw new Error("HTTP "+r.status);return r.json()})
 .then(function(j){
  CON=(j.results||[]).map(function(r){var nm=r["Recipient Name"]||"—";
   return{name:nm,amount:r["Award Amount"]||0,date:(r["Start Date"]||"").slice(0,10),desc:r["Description"]||"",
    prime:PRIMES.some(function(p){return nm.toUpperCase().indexOf(p)>=0})}});
  ERR.con=null;lt("L1","ok","DOD "+CON.length);
  MATCH=[];CON.forEach(function(c){var u=c.name.toUpperCase();SC.forEach(function(x){if(u.indexOf(x.tok)>=0)MATCH.push({c:c,s:x})})});
  render()})
 .catch(function(x){CON=[];ERR.con=String(x.message||x);lt("L1","er","DOD ERR");render()})}

function loadPM(){
 lt("L2","ld","PM");
 fetch("https://gamma-api.polymarket.com/markets?limit=90&active=true&closed=false&order=volume24hr&ascending=false")
 .then(function(r){if(!r.ok)throw new Error("HTTP "+r.status);return r.json()})
 .then(function(l){
  PM=l.map(function(m){var p=0;try{p=parseFloat(JSON.parse(m.outcomePrices||"[]")[0]||0)}catch(e){}
   var o={q:m.question||"—",price:p,chg:m.oneDayPriceChange||0,vol24:m.volume24hr||0,
    liq:m.liquidityNum||parseFloat(m.liquidity||0),spread:m.spread||0,url:"https://polymarket.com/market/"+(m.slug||"")};
   o.sg=[];if(Math.abs(o.chg)>=.05)o.sg.push(["MOVER","t1"]);if(o.spread>=.02)o.sg.push(["SPREAD","t4"]);if(o.vol24>=1e6)o.sg.push(["HOT","t5"]);
   return o});
  ERR.pm=null;lt("L2","ok","PM "+PM.length);tape();render()})
 .catch(function(x){PM=[];ERR.pm=String(x.message||x);lt("L2","er","PM ERR");render()})}

/* ----- NOTICIAS: cadena de 5 proveedores ----- */
function parseXML(t){
 var d=new DOMParser().parseFromString(t,"text/xml"),it=d.querySelectorAll("item"),o=[];
 for(var i=0;i<it.length&&i<30;i++){var x=it[i];
  var g=function(t2){var n=x.querySelector(t2);return n?n.textContent.trim():""};
  var dsc=g("description").replace(/<[^>]*>/g,"").slice(0,190);
  o.push({t:g("title"),l:g("link"),d:g("pubDate").slice(0,16),s:g("source")||g("creator")||"",x:dsc})}
 return o}
function gurl(f){return "https://news.google.com/rss/search?q="+encodeURIComponent(f.gq)+"&hl="+f.hl+"&gl="+f.gl+"&ceid="+f.ce}
function tryJSON(u){return fetch(u).then(function(r){if(!r.ok)throw 0;return r.json()})}
function tryTXT(u){return fetch(u).then(function(r){if(!r.ok)throw 0;return r.text()})}

function loadNews(rg,force){
 if(NEWS[rg]&&NEWS[rg].length&&!force){render();return}
 lt("L3","ld","NEWS");$("n-rows").innerHTML=sk(6);$("n-st").textContent="Buscando "+rg+"…";
 var f=NQ[rg],g=f.gq?gurl(f):null,chain=[];
 if(f.rss)chain.push({n:"war.gov",go:function(){return tryTXT(f.rss).then(parseXML)}});
 if(g){
  chain.push({n:"rss2json",go:function(){return tryJSON("https://api.rss2json.com/v1/api.json?count=30&rss_url="+encodeURIComponent(g))
    .then(function(j){if(!j.items||!j.items.length)throw 0;
     return j.items.map(function(i){return{t:i.title,l:i.link,d:(i.pubDate||"").slice(0,16),s:i.author||"",x:(i.description||"").replace(/<[^>]*>/g,"").slice(0,190)}})})}});
  chain.push({n:"codetabs",go:function(){return tryTXT("https://api.codetabs.com/v1/proxy/?quest="+encodeURIComponent(g)).then(parseXML)}});
  chain.push({n:"allorigins",go:function(){return tryTXT("https://api.allorigins.win/raw?url="+encodeURIComponent(g)).then(parseXML)}});
  chain.push({n:"jina",go:function(){return tryTXT("https://r.jina.ai/"+g).then(parseXML)}});
 }
 (function nxt(i){
  if(i>=chain.length){NEWS[rg]=[];NSRC[rg]="";lt("L3","er","NEWS ERR");render();return}
  chain[i].go().then(function(a){
   if(!a||!a.length)throw 0;
   NEWS[rg]=a;NSRC[rg]=chain[i].n;lt("L3","ok","NEWS "+a.length);render()})
  .catch(function(){nxt(i+1)})
 })(0)}

function tape(){
 if(!PM.length){$("tape").innerHTML="<span class='tk'>SIN DATOS DE MERCADO</span>";return}
 var h=PM.slice(0,26).map(function(m){
  return "<span class='tk'><b>"+esc(m.q.slice(0,46))+"</b> "+(m.price*100).toFixed(1)+"% <span class='"+(m.chg>=0?"up":"dn")+"'>"+(m.chg>=0?"▲":"▼")+Math.abs(m.chg*100).toFixed(1)+"</span></span>"}).join("");
 $("tape").innerHTML=h+h}

/* ---------- RENDER ---------- */
function hbars(l,mx){return l.map(function(x){var w=Math.max(2,Math.round(100*x.amount/mx));
 return "<div class='hb"+(x.prime?" pr":"")+"'><div class='nm' title='"+esc(x.name)+"'>"+esc(x.name)+"</div><div class='tr'><i style='width:"+w+"%'></i></div><div class='vl'>"+f$(x.amount)+"</div></div>"}).join("")}
function srt(rows,def){if(!rows.length)return rows;var k=SORT.k in rows[0]?SORT.k:def;
 rows.sort(function(a,b){var x=a[k],y=b[k];return (x>y?1:x<y?-1:0)*SORT.d});return rows}
function qv(){return $("cmd").dataset.q||""}

function render(){
 var Q=qv().toLowerCase();
 var rad=CON.filter(function(c){return !c.prime}),tot=CON.reduce(function(a,c){return a+c.amount},0),
  rtot=rad.reduce(function(a,c){return a+c.amount},0),pv=PM.reduce(function(a,m){return a+m.vol24},0);

 $("k1").textContent=CON.length?f$(tot):(ERR.con?"—":"…");
 $("k1s").textContent=CON.length?CON.length+" contratos · 30 días":(ERR.con?"fuente caída":"cargando…");
 $("k2").textContent=CON.length?rad.length:"—";
 $("k2s").textContent=CON.length?Math.round(100*rad.length/CON.length)+"% · "+f$(rtot):"—";
 $("k3").textContent=PM.length?f$(pv):"—";
 $("k3s").textContent=PM.length?PM.length+" mercados activos":"—";
 $("k4").textContent=MATCH.length;
 $("k4s").textContent=MATCH.length?"verifícalos a mano":"contrato ↔ small cap";
 if(CON.length){spark($("k1sp"),CON.slice(0,26).map(function(c){return c.amount}).reverse(),"#ff9f1a");
  spark($("k2sp"),rad.slice(0,26).map(function(c){return c.amount}).reverse(),"#00e08a")}
 if(PM.length){spark($("k3sp"),PM.slice(0,26).map(function(m){return m.vol24}).reverse(),"#22d3ee");
  spark($("k4sp"),PM.slice(0,26).map(function(m){return Math.abs(m.chg)*100}),"#a78bfa")}
 $("meta").textContent=(CON.length?CON.length+" CONTRATOS":"")+(PM.length?"  ·  "+PM.length+" MERCADOS":"")+"  ·  "+SC.length+" SMALL CAPS";

 /* flujo diario */
 if(CON.length){
  var by={};CON.forEach(function(c){if(c.date)by[c.date]=(by[c.date]||0)+c.amount});
  var ks=Object.keys(by).sort(),pts=ks.map(function(k){return{k:k,v:by[k]}});
  $("h-flow").textContent=pts.length+" días con actividad";
  areaChart($("d-flow"),pts,"#ff9f1a",f$);
  var cum=0,cp=pts.map(function(p){cum+=p.v;return{k:p.k,v:cum}});
  areaChart($("c-cum"),cp,"#00e08a",f$);
  donut($("d-donut"),[{k:"Gigantes",v:tot-rtot,c:"#2a3a4f"},{k:"Resto (tu terreno)",v:rtot,c:"#ff9f1a"}]);
 }else{var m0=ERR.con?emp("⚠","USAspending no responde.<br>Pulsa ⟳ REFRESH."):sk(5);
  $("d-flow").innerHTML=m0;$("c-cum").innerHTML=m0;$("d-donut").innerHTML=m0}

 $("h-con").textContent=rad.length?rad.length+" no-gigantes":"";
 $("d-bars").innerHTML=CON.length?hbars(CON.slice(0,12),CON[0].amount):(ERR.con?emp("⚠","Sin datos"):sk(6));

 $("d-match").innerHTML=MATCH.length?MATCH.map(function(m){
  return "<div class='mt-row'><span class='tg t6'>MATCH</span> <b>"+esc(m.c.name)+"</b><div style='margin-top:4px' class='dsc'>"+f$(m.c.amount)+" — coincide con <b style='color:var(--vi)'>"+esc(m.s.name)+"</b> ("+m.s.tk+") · <a target='_blank' rel='noopener' href='https://simplywall.st/search?query="+encodeURIComponent(m.s.name)+"'>ficha →</a></div></div>"}).join("")
  :(CON.length?emp("🎯","Ningún cruce en 30 días.<br>Es lo normal: cuando salte uno, será señal de verdad."):(ERR.con?emp("⚠","Sin datos"):sk(3)));

 scatter($("d-scat"),PM.slice(0,60));
 hist($("d-hist"),PM.map(function(m){return m.price}));

 var mv=PM.slice().sort(function(a,b){return Math.abs(b.chg)-Math.abs(a.chg)}).slice(0,12);
 $("d-mov").innerHTML=mv.length?"<table><tbody>"+mv.map(function(m){
  return "<tr><td class='el'><a target='_blank' rel='noopener' href='"+m.url+"'>"+esc(m.q.slice(0,56))+"</a></td>"+
  "<td class='n' style='width:50px'>"+(m.price*100).toFixed(1)+"%</td>"+
  "<td class='n "+(m.chg>=0?"up":"dn")+"' style='width:54px'>"+(m.chg>=0?"+":"")+(m.chg*100).toFixed(1)+"</td>"+
  "<td class='n dsc' style='width:58px'>"+f$(m.vol24)+"</td></tr>"}).join("")+"</tbody></table>":sk(5);

 $("d-heat").innerHTML=PM.length?"<div class='heat'>"+PM.slice(0,30).map(function(m){var p=m.price,c;
  if(p>=.75)c="rgba(0,224,138,.30)";else if(p>=.55)c="rgba(0,224,138,.16)";
  else if(p>=.45)c="rgba(120,140,160,.13)";else if(p>=.25)c="rgba(255,77,94,.16)";else c="rgba(255,77,94,.30)";
  return "<div class='hc' style='background:"+c+"' title='"+esc(m.q)+"'><div class='t'>"+esc(m.q.slice(0,24))+"</div><div class='m'>"+(p*100).toFixed(0)+"%<span class='"+(m.chg>=0?"up":"dn")+"' style='font-size:9px;margin-left:4px'>"+(m.chg>=0?"+":"")+(m.chg*100).toFixed(1)+"</span></div></div>"}).join("")+"</div>":sk(6);

 var wl=SC.filter(function(s){return W[s.tk]});
 $("d-wl").innerHTML=wl.length?"<table><tbody>"+wl.map(function(s){
  return "<tr><td>"+esc(s.name)+"<div class='dsc'>"+s.tk+"</div></td><td class='n'><a target='_blank' rel='noopener' href='https://www.tradingview.com/chart/?symbol="+encodeURIComponent(s.tk)+"'>📈</a> <a target='_blank' rel='noopener' href='https://simplywall.st/search?query="+encodeURIComponent(s.name)+"'>🧱</a></td></tr>"}).join("")+"</tbody></table>"
  :emp("⭐","Marca ☆ en SMALL CAPS<br>para seguirlas aquí.");

 var cn={};SC.forEach(function(s){cn[s.r]=(cn[s.r]||0)+1});
 var ks2=Object.keys(cn).sort(function(a,b){return cn[b]-cn[a]}),mxr=cn[ks2[0]]||1;
 $("d-reg").innerHTML=ks2.map(function(r){var w=Math.round(100*cn[r]/mxr);
  return "<div class='hb'><div class='nm'>"+r+"</div><div class='tr'><i style='width:"+w+"%'></i></div><div class='vl' style='color:var(--txt)'>"+cn[r]+"</div></div>"}).join("");

 var dn=(NEWS["Pentágono"]||[]).slice(0,7);
 $("h-news").textContent=NSRC["Pentágono"]?("vía "+NSRC["Pentágono"]):"";
 $("d-news").innerHTML=dn.length?dn.map(function(n){
  return "<div class='ni'><a target='_blank' rel='noopener' href='"+n.l+"'>"+esc(n.t.slice(0,92))+"</a><div class='mt'>"+esc(n.s)+" · "+n.d+"</div></div>"}).join("")
  :(NEWS["Pentágono"]?emp("📰","Fuente no disponible.<br>Pulsa ⟳ REFRESH."):sk(5));

 if(VIEW==="con"){renderEdgar();
  var mn=+$("fm").value;
  var rw=CON.filter(function(d){return (FP==="all"||!d.prime)&&d.amount>=mn&&(!Q||(d.name+" "+d.desc).toLowerCase().indexOf(Q)>=0)});
  $("c-cnt").textContent=rw.length+" filas";
  $("c-st").textContent=rw.length?("total "+f$(rw.reduce(function(a,c){return a+c.amount},0))):"";
  var tp=rw.slice().sort(function(a,b){return b.amount-a.amount}).slice(0,12);
  $("c-bars").innerHTML=tp.length?hbars(tp,tp[0].amount):(ERR.con?emp("⚠","Sin conexión con USAspending"):emp("🔍","Nada con esos filtros"));
  rw=srt(rw,"amount");
  $("c-rows").innerHTML=rw.length?rw.map(function(d){
   return "<tr><td class='el' title='"+esc(d.name)+"'>"+esc(d.name)+"</td><td class='amt'>"+f$(d.amount)+"</td><td class='n dsc'>"+d.date+"</td>"+
   "<td><span class='tg "+(d.prime?"t2":"t1")+"'>"+(d.prime?"GIGANTE":"⚡RADAR")+"</span></td><td class='dsc el' title='"+esc(d.desc)+"'>"+esc((d.desc||"").slice(0,130))+"</td></tr>"}).join("")
   :"<tr><td colspan='5'>"+(ERR.con?emp("⚠","Sin conexión con USAspending"):emp("🔍","Nada con esos filtros"))+"</td></tr>"}

 if(VIEW==="sc"){
  $("s-chips").innerHTML=REG.map(function(r){return "<button data-r='"+r+"' class='"+(r===RG?"on":"")+"'>"+r+"</button>"}).join("");
  var r2=SC.filter(function(s){return (RG==="Todas"||s.r===RG)&&(!WO||W[s.tk])&&(!Q||(s.name+" "+s.c+" "+s.n+" "+s.tk).toLowerCase().indexOf(Q)>=0)});
  $("s-cnt").textContent=r2.length+" de "+SC.length;r2=srt(r2,"name");
  $("s-rows").innerHTML=r2.length?r2.map(function(s){
   return "<tr><td><span class='str "+(W[s.tk]?"on":"")+"' data-tk='"+s.tk+"'>"+(W[s.tk]?"★":"☆")+"</span></td>"+
   "<td>"+esc(s.name)+"<div class='dsc'>"+s.tk+"</div></td><td class='dsc' style='color:var(--txt)'>"+esc(s.c)+"</td>"+
   "<td><span class='tg "+SZC[s.z]+"'>"+SZ[s.z]+"</span></td><td class='dsc'>"+esc(s.n)+"</td>"+
   "<td><a target='_blank' rel='noopener' href='https://www.tradingview.com/chart/?symbol="+encodeURIComponent(s.tk)+"'>TradingView</a> · <a target='_blank' rel='noopener' href='https://simplywall.st/search?query="+encodeURIComponent(s.name)+"'>Simply Wall St</a></td></tr>"}).join("")
   :"<tr><td colspan='6'>"+emp("🔍","Ninguna empresa con esos filtros")+"</td></tr>"}

 if(VIEW==="pm"){
  var r3=PM.filter(function(m){return (PF==="all"||m.sg.length)&&(!Q||m.q.toLowerCase().indexOf(Q)>=0)});
  $("p-cnt").textContent=r3.length+" mercados";
  $("p-st").textContent=r3.length?("vol 24h "+f$(r3.reduce(function(a,m){return a+m.vol24},0))):"";
  r3=srt(r3,"vol24");
  $("p-rows").innerHTML=r3.length?r3.map(function(m){var p=(m.price*100).toFixed(1);
   return "<tr><td class='el'><a target='_blank' rel='noopener' href='"+m.url+"'>"+esc(m.q)+"</a></td>"+
   "<td class='n'>"+p+"%<div class='pbar'><i style='width:"+p+"%'></i></div></td>"+
   "<td class='n "+(m.chg>=0?"up":"dn")+"'>"+(m.chg>=0?"+":"")+(m.chg*100).toFixed(1)+"</td>"+
   "<td class='n'>"+f$(m.vol24)+"</td><td class='n dsc'>"+f$(m.liq)+"</td><td class='n dsc'>"+(m.spread*100).toFixed(1)+"¢</td>"+
   "<td>"+m.sg.map(function(g){return "<span class='tg "+g[1]+"'>"+g[0]+"</span>"}).join("")+"</td></tr>"}).join("")
   :"<tr><td colspan='7'>"+(PM.length?emp("🔍","Ningún mercado con esos filtros"):(ERR.pm?emp("⚠","Polymarket no responde"):sk(5)))+"</td></tr>"}

 if(VIEW==="quant"){renderQuant()}
 if(VIEW==="brain"){renderBrain()}
 if(VIEW==="sim"){renderSim();renderMC();renderPaper()}
 if(VIEW==="cart"){renderCart()}
 if(VIEW==="lib"){renderLib()}
 if(VIEW==="news"){
  $("n-chips").innerHTML=Object.keys(NQ).map(function(r){return "<button data-n='"+r+"' class='"+(r===NR?"on":"")+"'>"+r+"</button>"}).join("")+
   "<button data-nf='1' style='border-color:#4a3410;color:var(--am)'>⟳ reintentar</button>";
  var arr=NEWS[NR];
  if(arr===undefined){$("n-st").textContent="Cargando "+NR+"…";$("n-rows").innerHTML=sk(6)}
  else{var it=arr.filter(function(n){return !Q||n.t.toLowerCase().indexOf(Q)>=0});
   $("n-cnt").textContent=it.length+" titulares";
   $("n-st").innerHTML=arr.length?("● "+NR+" · fuente: "+NSRC[NR]):"<span class='er'>Ninguna fuente respondió. Pulsa ⟳ reintentar.</span>";
   $("n-rows").innerHTML=it.length?it.map(function(n){
    return "<div class='ni'><a target='_blank' rel='noopener' href='"+n.l+"'>"+esc(n.t)+"</a>"+
    (n.x?"<div class='sm'>"+esc(n.x)+"…</div>":"")+"<div class='mt'>"+esc(n.s)+(n.s?" · ":"")+n.d+"</div></div>"}).join("")
    :emp("📰",arr.length?"Nada coincide con la búsqueda.":"Ninguna fuente disponible ahora.<br>Prueba otra región o ⟳ reintentar.")}}
}


/* ================= CAPA QUANT ================= */
var PX={},QUANT=[],QLOAD=false;
/* mapa a códigos Stooq (los que no existen quedan sin datos) */
/* Ticker TradingView -> símbolo Yahoo Finance (lo que consume /api/px).
   Verificado 31/08/2026: los 32 devuelven serie diaria de 2 años.
   ASX:XTE (XTEK) no está: deslistada de la ASX, sin símbolo en Yahoo. */
var SMAP={"NASDAQ:ONDS":"ONDS","NASDAQ:BYRN":"BYRN","NYSE:CDRE":"CDRE","NYSE:DCO":"DCO",
"NASDAQ:ATRO":"ATRO","AMEX:CVU":"CVU","AMEX:ESP":"ESP","NASDAQ:CMTL":"CMTL","NYSE:KRMN":"KRMN",
"EURONEXT:THEON":"THEON.AS","EURONEXT:EXA":"EXA.PA","LSE:CHRT":"CHRT.L","LSE:AVON":"AVON.L",
"OMXSTO:MILDEF":"MILDEF.ST","OMXSTO:IVSO":"IVSO.ST","OMXSTO:W5":"W5.ST","GPW:LBW":"LBW.WA",
"BIST:KATMR":"KATMR.IS","TASE:NXSN":"NXSN.TA",
"NSE:PARAS":"PARAS.NS","NSE:DATAPATTNS":"DATAPATTNS.NS","NSE:IDEAFORGE":"IDEAFORGE.NS",
"NSE:MTARTECH":"MTARTECH.NS","NSE:ASTRAMICRO":"ASTRAMICRO.NS",
"KRX:065450":"065450.KQ","KRX:010820":"010820.KS","TSE:6203":"6203.T","TSE:6208":"6208.T",
"ASX:DRO":"DRO.AX","ASX:EOS":"EOS.AX","ASX:ASB":"ASB.AX","BMFBOVESPA:TASA4":"TASA4.SA"};

function mean(a){return a.reduce(function(x,y){return x+y},0)/(a.length||1)}
function sd(a){if(a.length<2)return 0;var m=mean(a);return Math.sqrt(a.reduce(function(x,y){return x+(y-m)*(y-m)},0)/(a.length-1))}
function ret(c,n){if(!c||c.length<n+1)return null;var a=c[c.length-1-n],b=c[c.length-1];return a>0?(b/a-1):null}
function maxDD(c){var pk=-Infinity,d=0;for(var i=0;i<c.length;i++){if(c[i]>pk)pk=c[i];var x=c[i]/pk-1;if(x<d)d=x}return d}
function annVol(c){var r=[];for(var i=1;i<c.length;i++){if(c[i-1]>0)r.push(c[i]/c[i-1]-1)}return sd(r)*Math.sqrt(252)}
function sma(c,n){if(c.length<n)return null;return mean(c.slice(-n))}

function loadPx(){
 if(QLOAD)return;QLOAD=true;
 $("q-st").textContent="Descargando series de precios… (puede tardar)";
 var list=SC.filter(function(s){return SMAP[s.tk]});
 var done=0;
 list.forEach(function(s){
  fetch("/api/px?s="+encodeURIComponent(SMAP[s.tk]),{cache:"no-store"})
   .then(function(r){return r.json()})
   .then(function(j){if(j&&j.c&&j.c.length>30)PX[s.tk]={c:j.c,d:j.d}})
   .catch(function(){})
   .then(function(){done++;if(done===list.length){QLOAD=false;computeQuant();render()}
    else{$("q-st").textContent="Descargando… "+done+"/"+list.length}})});
 if(!list.length){QLOAD=false;$("q-st").textContent="Sin símbolos mapeados."}
}

function computeQuant(){
 QUANT=[];
 SC.forEach(function(s){
  var p=PX[s.tk];if(!p)return;
  var c=p.c;
  var o={s:s,px:c[c.length-1],r1:ret(c,21),r3:ret(c,63),r6:ret(c,126),
   vol:annVol(c.slice(-126)),dd:maxDD(c.slice(-126)),
   s50:sma(c,50),s200:sma(c,200),c:c};
  o.trend=(o.s50&&o.s200)?(o.s50>o.s200?"alcista":"bajista"):(o.s50?(o.px>o.s50?"sobre 50d":"bajo 50d"):"—");
  QUANT.push(o)});
 ["r1","r3","r6"].forEach(function(k){
  var v=QUANT.map(function(q){return q[k]}).filter(function(x){return x!==null&&isFinite(x)});
  var m=mean(v),d=sd(v)||1;
  QUANT.forEach(function(q){q["z"+k]=(q[k]===null||!isFinite(q[k]))?0:(q[k]-m)/d})});
 QUANT.forEach(function(q){q.z=(q.zr1+q.zr3+q.zr6)/3;
  q.sig=(q.z>=0.8&&q.trend==="alcista")?["FUERTE","t3"]:(q.z<=-0.8?["DÉBIL","t4"]:["NEUTRO","t2"])});
 QUANT.sort(function(a,b){return b.z-a.z});
}

function pct(x){return (x===null||!isFinite(x))?"—":((x>=0?"+":"")+(x*100).toFixed(1)+"%")}
function pcl(x){return (x===null||!isFinite(x))?"":(x>=0?"up":"dn")}

function renderQuant(){
 var Q=qv().toLowerCase();
 if(!QUANT.length){
  var msg=Object.keys(PX).length?emp("📊","Calculando…"):emp("📈","Pulsa ⟳ Cargar precios.<br>Necesita el endpoint /api/px en tu Worker.");
  $("q-rows").innerHTML="<tr><td colspan='10'>"+msg+"</td></tr>";
  $("q-rank").innerHTML=msg;$("q-rr").innerHTML=msg;return}
 $("q1").textContent=QUANT.length;$("q1s").textContent="de "+SC.length+" empresas";
 var best=QUANT.slice().sort(function(a,b){return (b.r6||-9)-(a.r6||-9)})[0];
 $("q2").textContent=best?pct(best.r6):"—";$("q2s").textContent=best?best.s.name:"—";
 var vv=QUANT.map(function(q){return q.vol}).filter(isFinite);
 $("q3").textContent=vv.length?(mean(vv)*100).toFixed(0)+"%":"—";
 var sg=QUANT.filter(function(q){return q.sig[0]==="FUERTE"});
 $("q4").textContent=sg.length;$("q4s").textContent=sg.length?sg.slice(0,2).map(function(q){return q.s.name}).join(", "):"ninguna ahora";

 var mz=Math.max.apply(null,QUANT.map(function(q){return Math.abs(q.z)}))||1;
 $("q-rank").innerHTML=QUANT.slice(0,14).map(function(q){
  var w=Math.round(50+50*q.z/mz),col=q.z>=0?"var(--gr)":"var(--rd)";
  return "<div class='hb'><div class='nm' title='"+esc(q.s.name)+"'>"+esc(q.s.name)+"</div>"+
  "<div class='tr'><i style='left:50%;width:"+Math.abs(w-50)+"%;"+(q.z<0?"left:"+w+"%;":"")+"background:"+col+"'></i></div>"+
  "<div class='vl' style='color:"+col+"'>"+q.z.toFixed(2)+"</div></div>"}).join("");

 var W2=740,H2=190,ml=48,mb=24,mt=12,iw=W2-ml-14,ih=H2-mt-mb;
 var xs=QUANT.map(function(q){return q.vol}).filter(isFinite),ys=QUANT.map(function(q){return q.r6}).filter(function(x){return x!==null&&isFinite(x)});
 if(xs.length&&ys.length){
  var xm=Math.max.apply(null,xs)||1,y0=Math.min.apply(null,ys),y1=Math.max.apply(null,ys),yr=(y1-y0)||1;
  var pts=QUANT.filter(function(q){return isFinite(q.vol)&&q.r6!==null&&isFinite(q.r6)}).map(function(q){
   var x=ml+(q.vol/xm)*iw,y=mt+ih-((q.r6-y0)/yr)*ih,c=q.r6>=0?"#00e08a":"#ff4d5e";
   return "<circle cx='"+x.toFixed(1)+"' cy='"+y.toFixed(1)+"' r='5' fill='"+c+"' opacity='.5' stroke='"+c+"'><title>"+esc(q.s.name)+"\\nvol "+(q.vol*100).toFixed(0)+"% · 6M "+pct(q.r6)+"</title></circle>"}).join("");
  var zeroY=mt+ih-((0-y0)/yr)*ih;
  $("q-rr").innerHTML="<svg viewBox='0 0 "+W2+" "+H2+"' style='width:100%;height:100%' preserveAspectRatio='none'>"+
   "<line x1='"+ml+"' y1='"+zeroY.toFixed(1)+"' x2='"+(W2-14)+"' y2='"+zeroY.toFixed(1)+"' stroke='#2a3546' stroke-dasharray='3 3'/>"+
   pts+"<text x='"+(W2-14)+"' y='"+(H2-6)+"' text-anchor='end'>volatilidad anual →</text>"+
   "<text x='"+(ml-6)+"' y='"+(mt+8)+"' text-anchor='end'>ret 6M</text></svg>"}

 var rows=QUANT.filter(function(q){return !Q||(q.s.name+" "+q.s.tk).toLowerCase().indexOf(Q)>=0});
 $("q-cnt").textContent=rows.length+" con datos";
 $("q-rows").innerHTML=rows.map(function(q){
  return "<tr><td>"+esc(q.s.name)+"<div class='dsc'>"+q.s.tk+"</div></td>"+
  "<td class='n'>"+q.px.toFixed(2)+"</td>"+
  "<td class='n "+pcl(q.r1)+"'>"+pct(q.r1)+"</td><td class='n "+pcl(q.r3)+"'>"+pct(q.r3)+"</td><td class='n "+pcl(q.r6)+"'>"+pct(q.r6)+"</td>"+
  "<td class='n dsc'>"+(isFinite(q.vol)?(q.vol*100).toFixed(0)+"%":"—")+"</td>"+
  "<td class='n dn'>"+(isFinite(q.dd)?(q.dd*100).toFixed(0)+"%":"—")+"</td>"+
  "<td class='n' style='color:"+(q.z>=0?"var(--gr)":"var(--rd)")+"'>"+q.z.toFixed(2)+"</td>"+
  "<td class='dsc'>"+q.trend+"</td>"+
  "<td><span class='tg "+q.sig[1]+"'>"+q.sig[0]+"</span></td></tr>"}).join("");
}

/* ---------- EVENTOS ---------- */
/* ================= CEREBRO QUANT DE PREDICCIÓN =================
   Normal CDF (Abramowitz & Stegun 26.2.17) y cuantil normal (Beasley-Springer-Moro),
   portados de oracle3/pricing/distortion.py (Apache-2.0) para no depender de nada.
   Error ~1e-7: de sobra para señales, no para publicar p-valores.               */
function nCdf(x){
 var a1=0.254829592,a2=-0.284496736,a3=1.421413741,a4=-1.453152027,a5=1.061405429,pp=0.3275911;
 var sg=x>=0?1:-1;x=Math.abs(x)/Math.SQRT2;
 var t=1/(1+pp*x);
 var y=1-(((((a5*t+a4)*t)+a3)*t+a2)*t+a1)*t*Math.exp(-x*x);
 return 0.5*(1+sg*y)}
function nPpf(p){
 p=Math.max(1e-10,Math.min(1-1e-10,p));
 var a=[-3.969683028665376e1,2.209460984245205e2,-2.759285104469687e2,1.383577518672690e2,-3.066479806614716e1,2.506628277459239e0],
     b=[-5.447609879822406e1,1.615858368580409e2,-1.556989798598866e2,6.680131188771972e1,-1.328068155288572e1],
     c=[-7.784894002430293e-3,-3.223964580411365e-1,-2.400758277161838e0,-2.549732539343734e0,4.374664141464968e0,2.938163982698783e0],
     d=[7.784695709041462e-3,3.224671290700398e-1,2.445134137142996e0,3.754408661907416e0],q,r;
 if(p<0.02425){q=Math.sqrt(-2*Math.log(p));
  return (((((c[0]*q+c[1])*q+c[2])*q+c[3])*q+c[4])*q+c[5])/((((d[0]*q+d[1])*q+d[2])*q+d[3])*q+1)}
 if(p<=0.97575){q=p-0.5;r=q*q;
  return (((((a[0]*r+a[1])*r+a[2])*r+a[3])*r+a[4])*r+a[5])*q/(((((b[0]*r+b[1])*r+b[2])*r+b[3])*r+b[4])*r+1)}
 q=Math.sqrt(-2*Math.log(1-p));
 return -(((((c[0]*q+c[1])*q+c[2])*q+c[3])*q+c[4])*q+c[5])/((((d[0]*q+d[1])*q+d[2])*q+d[3])*q+1)}

/* Transformada de Wang (2000): p_mercado = Φ(Φ⁻¹(p_real) + λ).
   λ>0 genera el sesgo favorito-longshot como TEOREMA, no como anomalía empírica:
   el ratio g(p)/p decrece con p, así que los longshots salen sistemáticamente caros. */
function wangFwd(p,l){return nCdf(nPpf(p)+l)}
function wangInv(p,l){return nCdf(nPpf(p)-l)}

/* λ implícita de un grupo excluyente: la que hace que las probabilidades sin prima
   de riesgo sumen exactamente 1. Σ wangInv(pᵢ,λ) decrece con λ → bisección. */
function fitLambda(ps){
 if(!ps||ps.length<2)return null;
 var f=function(l){var s=0;for(var i=0;i<ps.length;i++)s+=wangInv(ps[i],l);return s-1};
 var lo=-3,hi=3;
 if(f(lo)<0||f(hi)>0)return null;
 for(var i=0;i<60;i++){var m=(lo+hi)/2;if(f(m)>0)lo=m;else hi=m}
 return (lo+hi)/2}

var BQ=null,BVOL={},BLOAD=false,BSORT={k:"vol24",d:-1},BLAM=0,BNLAM=0;

function loadBrain(force){
 if(BLOAD)return; if(BQ&&!force){render();return}
 BLOAD=true;$("b-st").textContent="Analizando eventos de Polymarket…";
 fetch("/api/pmq?pages=3",{cache:"no-store"})
  .then(function(r){return r.json()})
  .then(function(j){
   if(j.error)throw new Error(j.error);
   BQ=j;computeBrain();
   $("b-st").textContent=j.markets.length+" mercados · "+j.nEvents+" eventos · "+j.groups.length+" grupos excluyentes · "+new Date(j.ts).toLocaleTimeString()}
  )
  .catch(function(e){BQ=null;$("b-st").textContent="Error: "+(e.message||e)+" — ¿está desplegado /api/pmq en tu Worker?"})
  .then(function(){BLOAD=false;render()})}

function computeBrain(){
 if(!BQ)return;
 // λ por grupo completo -> mediana como prima de riesgo del mercado en su conjunto.
 var ls=[];
 BQ.groups.forEach(function(g){
  if(!g.completo)return;
  var l=fitLambda(g.legs.map(function(x){return x.p}));
  g.lam=l; if(l!==null&&isFinite(l))ls.push(l)});
 ls.sort(function(a,b){return a-b});
 BLAM=ls.length?(ls.length%2?ls[(ls.length-1)/2]:(ls[ls.length/2-1]+ls[ls.length/2])/2):0;
 BNLAM=ls.length;

 BQ.markets.forEach(function(m){
  m.fair=wangInv(m.p,BLAM);
  m.edge=m.p-m.fair;                       // >0: longshot caro
  var v=BVOL[m.id];
  m.snorm=(v&&m.varT>0)?v/Math.sqrt(m.varT):null;
  var sg=[];
  if(m.spreadRel!==null&&m.spreadRel>0.10)sg.push(["CARO","t4"]);
  if(m.turn!==null&&m.turn<0.02)sg.push(["SECO","t4"]);
  if(m.urg!==null&&m.urg>0.25)sg.push(["URGE","t1"]);
  if(Math.abs(m.z)>1.2)sg.push([m.z>0?"SUBE":"BAJA","t5"]);
  if(m.snorm!==null&&m.snorm>1.5)sg.push(["NERVIOSO","t3"]);
  m.sg=sg});
 fillKellySelect()}

function loadBVol(){
 if(!BQ){$("b-st").textContent="Carga el cerebro primero.";return}
 var top=BQ.markets.filter(function(m){return m.tok}).slice(0,20);
 if(!top.length){$("b-st").textContent="Sin tokens CLOB disponibles.";return}
 var done=0;$("b-st").textContent="Descargando históricos… 0/"+top.length;
 top.forEach(function(m){
  fetch("/api/pmh?t="+encodeURIComponent(m.tok)+"&i=1m",{cache:"no-store"})
   .then(function(r){return r.json()})
   .then(function(j){
    var p=(j&&j.p)||[];
    if(p.length<20)return;
    // Volatilidad realizada del PRECIO (no del log): un binario vive en [0,1].
    var d=[];for(var i=1;i<p.length;i++)d.push(p[i]-p[i-1]);
    BVOL[m.id]=sd(d)*Math.sqrt(365*24);   // series horarias -> anualizada
   })
   .catch(function(){})
   .then(function(){done++;$("b-st").textContent="Descargando históricos… "+done+"/"+top.length;
    if(done===top.length){computeBrain();$("b-st").textContent="σ calculada en "+Object.keys(BVOL).length+" mercados.";render()}})})}

function fillKellySelect(){
 var s=$("b-kmkt");if(!s||!BQ)return;
 var cur=s.value;
 s.innerHTML=BQ.markets.slice(0,120).map(function(m){
  return "<option value='"+m.id+"'>"+esc(m.q.slice(0,70))+" — "+(m.p*100).toFixed(1)+"%</option>"}).join("");
 if(cur)s.value=cur;
 syncKellyP();kellyCalc()}

function syncKellyP(){
 var s=$("b-kmkt");if(!s||!BQ)return;
 for(var i=0;i<BQ.markets.length;i++)if(String(BQ.markets[i].id)===String(s.value)){
  $("b-kp").value=(BQ.markets[i].p*100).toFixed(1);return}}

function kellyCalc(){
 var s=$("b-kmkt"),out=$("b-kout");if(!s||!BQ||!out)return;
 var m=null,id=s.value;
 for(var i=0;i<BQ.markets.length;i++)if(String(BQ.markets[i].id)===String(id)){m=BQ.markets[i];break}
 if(!m){out.textContent="—";return}
 var p=Math.max(0.01,Math.min(0.99,(parseFloat($("b-kp").value)||50)/100));
 var frac=parseFloat($("b-kf").value)||0.25;
 var price=m.p,q=1-p;
 var b=(1-price)/price;                       // cuota neta: gana b por cada 1 arriesgado
 var evv=p*b-q;                               // valor esperado por unidad apostada
 var f=b>0?evv/b:0;                           // Kelly completo
 var fa=Math.max(0,f)*frac;
 var cls=evv>0?"up":"dn";
 out.innerHTML="Precio <b>"+(price*100).toFixed(1)+"%</b> · cuota <b>"+(1/price).toFixed(2)+"×</b> · "+
  "ventaja <b class='"+cls+"'>"+(evv>=0?"+":"")+(evv*100).toFixed(1)+"%</b> · "+
  "Kelly completo <b>"+(f*100).toFixed(1)+"%</b> · <b class='"+cls+"'>tamaño sugerido "+(fa*100).toFixed(1)+"% del banco</b>"+
  (evv<=0?" — sin ventaja: Kelly dice no entrar":"")}

function bfmt(x,d){return (x===null||x===undefined||!isFinite(x))?"—":(x*100).toFixed(d===undefined?1:d)+"%"}

function wangCurve(){
 var W=460,H=200,pad=34;
 var l=BLAM;
 var pts=[],pts2=[];
 for(var i=1;i<100;i++){var p=i/100;
  pts.push([pad+(W-pad-10)*p, H-pad-(H-pad-14)*wangFwd(p,l)]);
  pts2.push([pad+(W-pad-10)*p, H-pad-(H-pad-14)*p])}
 var path=function(a){return a.map(function(q,i){return (i?"L":"M")+q[0].toFixed(1)+","+q[1].toFixed(1)}).join("")};
 return "<svg viewBox='0 0 "+W+" "+H+"' style='width:100%;height:100%'>"+
  "<line x1='"+pad+"' y1='"+(H-pad)+"' x2='"+(W-10)+"' y2='"+(H-pad)+"' stroke='var(--border)'/>"+
  "<line x1='"+pad+"' y1='14' x2='"+pad+"' y2='"+(H-pad)+"' stroke='var(--border)'/>"+
  "<path d='"+path(pts2)+"' fill='none' stroke='var(--dim)' stroke-dasharray='3 3'/>"+
  "<path d='"+path(pts)+"' fill='none' stroke='var(--amber)' stroke-width='2'/>"+
  "<text x='"+pad+"' y='10' fill='var(--dim)' font-size='9'>probabilidad real →  precio de mercado</text>"+
  "<text x='"+(W-10)+"' y='"+(H-pad+12)+"' fill='var(--dim)' font-size='9' text-anchor='end'>p real</text>"+
  "<text x='"+(pad+6)+"' y='"+(H-pad+12)+"' fill='var(--dim)' font-size='9'>0</text>"+
  "<text x='"+(W/2)+"' y='"+(H-8)+"' fill='var(--dim)' font-size='10' text-anchor='middle'>"+
   "λ = "+l.toFixed(3)+(l>0.02?" · longshots caros, favoritos baratos":(l<-0.02?" · sesgo invertido":" · sin sesgo apreciable"))+"</text>"+
  "</svg>"}

function renderBrain(){
 if(!BQ){
  var msg=emp("🧠","Pulsa ⟳ Cargar cerebro.<br>Necesita /api/pmq en tu Worker.");
  $("b-rows").innerHTML="<tr><td colspan='11'>"+msg+"</td></tr>";
  $("b-arb").innerHTML="<tr><td colspan='8'>"+msg+"</td></tr>";
  $("b-wang").innerHTML=msg;return}

 var gs=BQ.groups,ms=BQ.markets;
 var conV=gs.filter(function(g){return g.net>0}).concat(BQ.mono||[]);
 $("b1").textContent=ms.length;$("b1s").textContent="de "+BQ.nEvents+" eventos activos";
 $("b2").textContent=conV.length;$("b2s").textContent="de "+gs.length+" grupos excluyentes";
 var mej=conV.slice().sort(function(a,b){return (b.net||b.neto)-(a.net||a.neto)})[0];
 $("b3").textContent=mej?bfmt(mej.net!==undefined?mej.net:mej.neto,2):"—";
 $("b3s").textContent=mej?mej.ev.slice(0,42):"ninguno cubre costes";
 $("b4").textContent=BLAM.toFixed(3);
 $("b4s").textContent=(BNLAM<3?"muestra insuficiente ("+BNLAM+" grupos)":
   (BLAM>0.02?"longshots caros · "+BNLAM+" grupos":(BLAM<-0.02?"sesgo invertido · "+BNLAM+" grupos":"sin sesgo apreciable · "+BNLAM+" grupos")));

 // Las dos familias de restricción en una sola lista, ordenada por ventaja neta.
 var opor=gs.map(function(g){return {
   k:"suma",ev:g.ev,slug:g.slug,n:g.n+(g.completo?"":"/"+g.nTotal),
   med:g.sum.toFixed(4),bruto:Math.abs(g.dev),coste:g.cost,neto:g.net,
   acc:g.net>0?g.side:null,det:"Σ debe ser 1"}})
  .concat((BQ.mono||[]).map(function(g){return {
   k:"mono",ev:g.ev,slug:g.slug,n:String(g.n),
   med:(g.pBarato*100).toFixed(1)+"% < "+(g.pCaro*100).toFixed(1)+"%",
   bruto:g.bruto,coste:g.coste,neto:g.neto,acc:"vender la cara",
   det:g.caro+" no puede superar a "+g.barato}}))
  .sort(function(a,b){return b.neto-a.neto});
 $("b-acnt").textContent="("+opor.length+")";
 $("b-arb").innerHTML=opor.slice(0,40).map(function(g){
  var pos=g.neto>0;
  return "<tr>"+
   "<td title='"+esc(g.ev)+"'><a href='https://polymarket.com/event/"+esc(g.slug)+"' target='_blank' rel='noopener'>"+esc(g.ev.slice(0,48))+"</a></td>"+
   "<td><span class='"+(g.k==="mono"?"t5":"t2")+"' title='"+esc(g.det)+"'>"+(g.k==="mono"?"monotonía":"Σ excluyente")+"</span></td>"+
   "<td>"+g.n+"</td>"+
   "<td class='dim' style='font-size:10px'>"+esc(g.med)+"</td>"+
   "<td>"+bfmt(g.bruto,2)+"</td>"+
   "<td class='dim'>"+bfmt(g.coste,2)+"</td>"+
   "<td><b class='"+(pos?"up":"dn")+"'>"+bfmt(g.neto,2)+"</b></td>"+
   "<td>"+(pos?"<span class='t3'>"+g.acc+"</span>":"<span class='dim'>no cubre</span>")+"</td>"+
  "</tr>"}).join("")||"<tr><td colspan='8'>"+emp("∑","Sin restricciones violadas ahora mismo.")+"</td></tr>";

 $("b-wang").innerHTML=wangCurve();

 var Q=qv().toLowerCase();
 var rows=ms.filter(function(m){return !Q||m.q.toLowerCase().indexOf(Q)>=0||(m.ev||"").toLowerCase().indexOf(Q)>=0});
 rows.sort(function(a,b){var k=BSORT.k,x=a[k],y=b[k];
  if(typeof x==="string")return BSORT.d*x.localeCompare(y);
  return BSORT.d*(((y===null||!isFinite(y))?-1e9:y)-((x===null||!isFinite(x))?-1e9:x))});
 $("b-cnt").textContent="("+rows.length+")";
 $("b-rows").innerHTML=rows.slice(0,150).map(function(m){
  return "<tr data-mid='"+m.id+"' style='cursor:pointer'>"+
   "<td title='"+esc(m.q)+"'>"+esc(m.q.slice(0,58))+
     (m.leg?" <span class='dim'>· "+esc(m.leg.slice(0,20))+"</span>":"")+"</td>"+
   "<td><b>"+bfmt(m.p,1)+"</b></td>"+
   "<td class='dim'>"+bfmt(m.fair,1)+"</td>"+
   "<td class='"+(m.edge>0?"dn":"up")+"'>"+(m.edge>=0?"+":"")+(m.edge*100).toFixed(1)+"</td>"+
   "<td class='"+(m.spreadRel>0.1?"dn":"")+"'>"+bfmt(m.spreadRel,1)+"</td>"+
   "<td class='"+(m.turn!==null&&m.turn<0.02?"dn":"")+"'>"+(m.turn===null?"—":m.turn.toFixed(2))+"</td>"+
   "<td>"+(m.snorm===null?"<span class='dim'>—</span>":m.snorm.toFixed(2))+"</td>"+
   "<td>"+(m.urg===null?"—":m.urg.toFixed(3))+"</td>"+
   "<td class='dim'>"+(m.days===null?"—":Math.round(m.days))+"</td>"+
   "<td class='"+(m.z>0?"up":"dn")+"'>"+m.z.toFixed(2)+"</td>"+
   "<td>"+m.sg.map(function(s){return "<span class='"+s[1]+"'>"+s[0]+"</span>"}).join(" ")+"</td>"+
  "</tr>"}).join("")||"<tr><td colspan='11'>"+emp("🔍","Sin resultados para ese filtro.")+"</td></tr>"}

/* ================= SIMULADOR DE ESTRATEGIAS =================
   Corre en el NAVEGADOR a propósito: gamma-api y clob.polymarket.com sirven ambos
   con Access-Control-Allow-Origin *, y un backtest necesita cientos de peticiones,
   muy por encima del límite de 50 subpeticiones por request del plan gratuito de
   Cloudflare. Mismo patrón que ya se usa con USAspending.                        */
var BT=null,BTLOAD=false;

function pool(items,work,conc,prog){
 return new Promise(function(res){
  var i=0,done=0,out=new Array(items.length);
  function next(){
   if(i>=items.length)return;
   var k=i++;
   work(items[k],k).then(function(v){out[k]=v},function(){out[k]=null})
    .then(function(){done++;if(prog)prog(done,items.length);
     if(done===items.length)res(out);else next()})}
  for(var j=0;j<Math.min(conc,items.length);j++)next();
  if(!items.length)res(out)})}

function btOutcome(m){
 try{var a=JSON.parse(m.outcomePrices||"[]");
  var y=parseFloat(a[0]),n=parseFloat(a[1]);
  if(y===1&&n===0)return 1; if(y===0&&n===1)return 0; return null}catch(e){return null}}

function btPriceAt(h,ts){
 // punto de histórico más cercano a ts, exigiendo que sea ANTERIOR al cierre
 var best=null,bd=Infinity;
 for(var i=0;i<h.length;i++){var d=Math.abs(h[i].t-ts);
  if(d<bd){bd=d;best=h[i]}}
 return (best&&bd<86400*3)?best.p:null}   // tolerancia 3 días

function btRun(){
 if(BTLOAD)return;BTLOAD=true;
 var N=+$("s-n").value,H=+$("s-h").value,MV=+$("s-v").value;
 $("s-st").textContent="Buscando mercados resueltos…";
 var want=Math.ceil(N/100)*100,pages=[],k;
 for(k=0;k<want/100;k++)pages.push(k);

 pool(pages,function(pg){
  return fetch("https://gamma-api.polymarket.com/markets?closed=true&limit=100&offset="+(pg*100)+
               "&order=volumeNum&ascending=false").then(function(r){return r.json()})},4)
 .then(function(chunks){
  var all=[];chunks.forEach(function(c){if(c&&c.length)all=all.concat(c)});
  var cand=all.filter(function(m){
   var o=btOutcome(m);
   if(o===null)return false;
   if((parseFloat(m.volumeNum||m.volume||0)||0)<MV)return false;
   if(!m.endDate)return false;
   try{if(!JSON.parse(m.clobTokenIds||"[]")[0])return false}catch(e){return false}
   return true}).slice(0,N);
  if(!cand.length)throw new Error("ningún mercado resuelto cumple el filtro");
  $("s-st").textContent="Descargando históricos… 0/"+cand.length;

  return pool(cand,function(m){
   var tok=JSON.parse(m.clobTokenIds)[0];
   return fetch("https://clob.polymarket.com/prices-history?market="+tok+"&interval=max&fidelity=1440")
    .then(function(r){return r.json()})
    .then(function(j){
     var h=(j&&j.history)||[];
     if(h.length<8)return null;
     var end=h[h.length-1].t;                  // cierre efectivo = último dato real
     var pe=btPriceAt(h,end-H*86400);          // precio de entrada
     var pp=btPriceAt(h,end-(H+14)*86400);     // 14 días antes -> momentum
     if(pe===null||pe<0.005||pe>0.99)return null;
     return {q:m.question||"—",p:pe,prev:pp,o:btOutcome(m),
             end:m.endDate,vol:parseFloat(m.volumeNum||m.volume||0)||0}})
    .catch(function(){return null})},8,
   function(d,t){$("s-st").textContent="Descargando históricos… "+d+"/"+t})})
 .then(function(rows){
  var S=rows.filter(Boolean);
  if(S.length<20)throw new Error("muestra demasiado pequeña ("+S.length+")");
  S.sort(function(a,b){return new Date(a.end)-new Date(b.end)});
  BT=btMetrics(S,H);
  $("s-st").textContent=S.length+" mercados resueltos · entrada a "+H+" días del cierre · "+new Date().toLocaleTimeString()})
 .catch(function(e){BT=null;$("s-st").textContent="Error: "+(e.message||e)})
 .then(function(){BTLOAD=false;render()})}

function btStats(name,trades){
 if(!trades.length)return {name:name,n:0};
 var r=trades.map(function(t){return t.r});
 var m=mean(r),s=sd(r),n=r.length;
 var wins=trades.filter(function(t){return t.r>0}).length;
 var sorted=r.slice().sort(function(a,b){return a-b});
 var med=sorted.length%2?sorted[(sorted.length-1)/2]:(sorted[sorted.length/2-1]+sorted[sorted.length/2])/2;
 var eq=[],c=0,pk=0,dd=0;
 for(var i=0;i<r.length;i++){c+=r[i];eq.push(c);if(c>pk)pk=c;if(pk-c>dd)dd=pk-c}
 var t=s>0?m/(s/Math.sqrt(n)):0;
 return {name:name,n:n,win:wins/n,mean:m,med:med,total:c,dd:dd,t:t,eq:eq}}

function btMetrics(S,H){
 // Brier: media de (p - desenlace)². 0.25 es lanzar una moneda.
 var brier=mean(S.map(function(x){return (x.p-x.o)*(x.p-x.o)}));
 var base=mean(S.map(function(x){return x.o}));
 var brierBase=mean(S.map(function(x){return (base-x.o)*(base-x.o)}));

 // λ empírica: la que hace que las probabilidades sin prima sumen los aciertos reales.
 var sumO=S.reduce(function(a,x){return a+x.o},0);
 var f=function(l){var s=0;for(var i=0;i<S.length;i++)s+=wangInv(S[i].p,l);return s-sumO};
 var lam=null;
 if(f(-3)>0&&f(3)<0){var lo=-3,hi=3;
  for(var i=0;i<60;i++){var mm=(lo+hi)/2;if(f(mm)>0)lo=mm;else hi=mm}lam=(lo+hi)/2}

 // Calibración en 10 tramos
 var cal=[];
 for(var b=0;b<10;b++){
  var lo2=b/10,hi2=(b+1)/10;
  var g=S.filter(function(x){return x.p>=lo2&&x.p<(b===9?1.01:hi2)});
  if(g.length>=5)cal.push({lo:lo2,hi:hi2,n:g.length,
   pm:mean(g.map(function(x){return x.p})),fr:mean(g.map(function(x){return x.o}))})}

 var yes=function(x){return (x.o-x.p)/x.p};          // comprar SÍ
 var no=function(x){return ((1-x.o)-(1-x.p))/(1-x.p)}; // comprar NO
 var mk=function(arr,fn){return arr.map(function(x){return {r:fn(x),end:x.end}})};

 var ls=S.filter(function(x){return x.p<=0.10}),
     fav=S.filter(function(x){return x.p>=0.90}),
     mid=S.filter(function(x){return x.p>0.10&&x.p<0.90}),
     up=S.filter(function(x){return x.prev!==null&&x.p-x.prev>=0.05}),
     dn=S.filter(function(x){return x.prev!==null&&x.p-x.prev<=-0.05});

 var strats=[
  btStats("Comprar longshots (p≤10%)",mk(ls,yes)),
  btStats("VENDER longshots (comprar NO)",mk(ls,no)),
  btStats("Comprar favoritos (p≥90%)",mk(fav,yes)),
  btStats("Vender favoritos (comprar NO)",mk(fav,no)),
  btStats("Momentum alcista (+5% en 14d)",mk(up,yes)),
  btStats("Momentum bajista (−5% en 14d)",mk(dn,no)),
  btStats("Comprar todo (referencia)",mk(S,yes)),
  btStats("Zona media 10–90% (SÍ)",mk(mid,yes))
 ].filter(function(x){return x.n>=10});
 strats.sort(function(a,b){return b.t-a.t});

 return {S:S,H:H,brier:brier,brierBase:brierBase,base:base,lam:lam,cal:cal,strats:strats}}

function calChart(cal){
 if(!cal.length)return emp("📐","Muestra insuficiente para calibrar.");
 var W=440,H=210,pad=32,w=W-pad-12,h=H-pad-20;
 var X=function(p){return pad+w*p},Y=function(p){return H-pad-h*p};
 var pts=cal.map(function(c){return [X(c.pm),Y(c.fr)]});
 return "<svg viewBox='0 0 "+W+" "+H+"' style='width:100%;height:100%'>"+
  "<line x1='"+X(0)+"' y1='"+Y(0)+"' x2='"+X(1)+"' y2='"+Y(1)+"' stroke='var(--dim)' stroke-dasharray='3 3'/>"+
  "<line x1='"+pad+"' y1='"+Y(0)+"' x2='"+(W-12)+"' y2='"+Y(0)+"' stroke='var(--border)'/>"+
  "<line x1='"+pad+"' y1='"+Y(1)+"' x2='"+pad+"' y2='"+Y(0)+"' stroke='var(--border)'/>"+
  pts.map(function(q,i){return "<circle cx='"+q[0].toFixed(1)+"' cy='"+q[1].toFixed(1)+"' r='"+
    Math.min(9,3+Math.sqrt(cal[i].n)/2).toFixed(1)+"' fill='var(--amber)' opacity='.75'/>"}).join("")+
  "<polyline points='"+pts.map(function(q){return q[0].toFixed(1)+","+q[1].toFixed(1)}).join(" ")+
    "' fill='none' stroke='var(--cyan)' stroke-width='1.5'/>"+
  "<text x='"+pad+"' y='12' fill='var(--dim)' font-size='9'>frecuencia real ↑ · precio del mercado →</text>"+
  "<text x='"+(W/2)+"' y='"+(H-4)+"' fill='var(--dim)' font-size='9' text-anchor='middle'>"+
   "sobre la diagonal = el mercado se queda corto · por debajo = pide de más</text></svg>"}

function eqChart(s){
 if(!s||!s.eq||s.eq.length<3)return emp("📈","Sin curva.");
 var W=440,H=210,pad=32,w=W-pad-12,h=H-pad-24;
 var lo=Math.min.apply(null,s.eq.concat([0])),hi=Math.max.apply(null,s.eq.concat([0]));
 var rg=(hi-lo)||1;
 var pts=s.eq.map(function(v,i){
  return [pad+w*(i/(s.eq.length-1)),H-pad-h*((v-lo)/rg)]});
 var zero=H-pad-h*((0-lo)/rg);
 return "<svg viewBox='0 0 "+W+" "+H+"' style='width:100%;height:100%'>"+
  "<line x1='"+pad+"' y1='"+zero.toFixed(1)+"' x2='"+(W-12)+"' y2='"+zero.toFixed(1)+"' stroke='var(--dim)' stroke-dasharray='3 3'/>"+
  "<polyline points='"+pts.map(function(q){return q[0].toFixed(1)+","+q[1].toFixed(1)}).join(" ")+
   "' fill='none' stroke='"+(s.total>=0?"var(--green)":"var(--red)")+"' stroke-width='1.8'/>"+
  "<text x='"+pad+"' y='12' fill='var(--dim)' font-size='9'>"+esc(s.name)+" · "+s.n+" apuestas</text>"+
  "<text x='"+(W-12)+"' y='12' fill='"+(s.total>=0?"var(--green)":"var(--red)")+"' font-size='11' text-anchor='end'>"+
   (s.total>=0?"+":"")+s.total.toFixed(1)+"u</text></svg>"}

/* ================= PRUEBA DE CHOQUE (MONTE CARLO) =================
   No existen millones de operaciones REALES: Polymarket tiene unos cientos de
   mercados resueltos utilizables. Lo que sí se puede es regenerar la muestra real
   millones de veces bajo la hipótesis nula de que el precio ES la probabilidad
   verdadera, y medir con qué frecuencia el azar iguala lo observado.
   Eso convierte "parece que funciona" en un p-valor.                            */
var MC=null,MCRUN=false;

// Generador rápido y determinista (mulberry32). Math.random no vale: no se puede
// reproducir una prueba, y aquí la reproducibilidad es parte del resultado.
function rng32(a){return function(){
 a|=0;a=a+0x6D2B79F5|0;
 var t=Math.imul(a^a>>>15,1|a);
 t=t+Math.imul(t^t>>>7,61|t)^t;
 return ((t^t>>>14)>>>0)/4294967296}}

function mcStrats(S){
 // Mismos cortes que la tabla de estrategias, pero sobre indices para ir rápido.
 return [
  {n:"Comprar longshots (p≤10%)",  f:function(x){return x.p<=0.10}, lado:1},
  {n:"VENDER longshots (comprar NO)",f:function(x){return x.p<=0.10}, lado:0},
  {n:"Comprar favoritos (p≥90%)",  f:function(x){return x.p>=0.90}, lado:1},
  {n:"Zona media 10–90% (SÍ)",     f:function(x){return x.p>0.10&&x.p<0.90}, lado:1},
  {n:"Comprar todo (referencia)",  f:function(x){return true}, lado:1}
 ].map(function(s){
  var sub=S.filter(s.f);
  return {nombre:s.n,lado:s.lado,p:Float64Array.from(sub.map(function(x){return x.p})),
          o:Float64Array.from(sub.map(function(x){return x.o})),n:sub.length}})
  .filter(function(s){return s.n>=10})}

// Retorno total de una estrategia dados unos desenlaces.
function mcTotal(p,o,lado,n){
 var t=0;
 if(lado===1){for(var i=0;i<n;i++)t+=(o[i]-p[i])/p[i]}
 else{for(var j=0;j<n;j++)t+=((1-o[j])-(1-p[j]))/(1-p[j])}
 return t}

function mcRun(){
 if(MCRUN)return;
 if(!BT||!BT.S||BT.S.length<20){$("mc-st").textContent="Ejecuta antes la simulación de arriba: hace falta la muestra real.";return}
 MCRUN=true;
 var iters=+$("mc-n").value,S=BT.S,ss=mcStrats(S);
 if(!ss.length){MCRUN=false;$("mc-st").textContent="Muestra insuficiente por estrategia.";return}

 var obs=ss.map(function(s){return mcTotal(s.p,s.o,s.lado,s.n)});
 var acum=ss.map(function(s){return {suma:0,suma2:0,ge:0,muestras:new Float64Array(Math.min(iters,20000)),k:0}});
 var rnd=rng32(20260901);
 var hecho=0,lote=Math.max(2000,Math.floor(iters/200));
 var opsPorIter=ss.reduce(function(a,s){return a+s.n},0);
 var t0=Date.now();

 function paso(){
  var fin=Math.min(hecho+lote,iters);
  for(var it=hecho;it<fin;it++){
   for(var k=0;k<ss.length;k++){
    var s=ss[k],a=acum[k],t=0;
    // Hipótesis nula: el desenlace se sortea con la probabilidad que marca el precio.
    if(s.lado===1){for(var i=0;i<s.n;i++){var o=rnd()<s.p[i]?1:0;t+=(o-s.p[i])/s.p[i]}}
    else{for(var j=0;j<s.n;j++){var o2=rnd()<s.p[j]?1:0;t+=((1-o2)-(1-s.p[j]))/(1-s.p[j])}}
    a.suma+=t;a.suma2+=t*t;
    if(t>=obs[k])a.ge++;
    if(a.k<a.muestras.length)a.muestras[a.k++]=t;
   }
  }
  hecho=fin;
  $("mc-st").textContent="Simulando… "+(hecho/iters*100).toFixed(0)+"% · "+
    (hecho*opsPorIter/1e6).toFixed(1)+" M operaciones";
  if(hecho<iters){setTimeout(paso,0);return}

  MC={iters:iters,ops:iters*opsPorIter,seg:(Date.now()-t0)/1000,
   filas:ss.map(function(s,k){
    var a=acum[k],mu=a.suma/iters,va=a.suma2/iters-mu*mu;
    var m=Array.prototype.slice.call(a.muestras.subarray(0,a.k)).sort(function(x,y){return x-y});
    var q=function(f){return m.length?m[Math.min(m.length-1,Math.floor(f*m.length))]:0};
    return {nombre:s.nombre,n:s.n,obs:obs[k],mu:mu,sd:Math.sqrt(Math.max(0,va)),
            lo:q(0.025),hi:q(0.975),p:a.ge/iters}})};
  MCRUN=false;
  $("mc-st").textContent=MC.iters.toLocaleString("es-ES")+" repeticiones · "+
    (MC.ops/1e6).toFixed(0)+" millones de operaciones simuladas · "+MC.seg.toFixed(1)+" s";
  render()}
 setTimeout(paso,0)}

function renderMC(){
 if(!MC){$("mc-rows").innerHTML="<tr><td colspan='7'>"+emp("🎲","Pulsa «Ejecutar prueba de choque».")+"</td></tr>";return}
 $("mc-cnt").textContent="("+(MC.ops/1e6).toFixed(0)+" M operaciones)";
 $("mc-rows").innerHTML=MC.filas.map(function(r){
  var v=r.p<0.01?["muy improbable por azar","t3"]:
        (r.p<0.05?["improbable por azar","t5"]:
        (r.p<0.20?["dudoso","t2"]:["indistinguible del azar","t4"]));
  return "<tr>"+
   "<td>"+esc(r.nombre)+"</td><td>"+r.n+"</td>"+
   "<td class='"+(r.obs>=0?"up":"dn")+"'><b>"+(r.obs>=0?"+":"")+r.obs.toFixed(1)+"u</b></td>"+
   "<td class='dim'>"+(r.mu>=0?"+":"")+r.mu.toFixed(1)+"u</td>"+
   "<td class='dim' style='font-size:10.5px'>"+r.lo.toFixed(1)+" a "+r.hi.toFixed(1)+"u</td>"+
   "<td><b>"+(r.p<0.0001?"&lt;0,0001":r.p.toFixed(4).replace(".",","))+"</b></td>"+
   "<td><span class='"+v[1]+"'>"+v[0]+"</span></td></tr>"}).join("")}

var PAP=null;
function loadPaper(accion){
 var u=accion==="snap"?"/api/paper/snap":(accion==="set"?"/api/paper/settle?n=40":"/api/paper");
 $("p-st").textContent="Consultando…";
 fetch(u,{cache:"no-store"}).then(function(r){return r.json()}).then(function(j){
  if(j.error)throw new Error(j.error);
  if(accion){$("p-st").textContent=JSON.stringify(j);return fetch("/api/paper",{cache:"no-store"}).then(function(r){return r.json()})}
  return j})
 .then(function(j){if(j&&!j.error){PAP=j;if(!accion)$("p-st").textContent=j.nAbiertas+" abiertas · "+j.nCerradas+" liquidadas";}render()})
 .catch(function(e){$("p-st").textContent="Error: "+(e.message||e)+" — ¿KV configurado?"})}

function renderPaper(){
 if(!PAP){$("p-rows").innerHTML="<tr><td colspan='7'>"+emp("✎","Pulsa «Anotar señales de hoy».")+"</td></tr>";return}
 var todas=PAP.cerradas.map(function(x){return {c:1,x:x}}).concat(PAP.abiertas.map(function(x){return {c:0,x:x}}));
 $("p-cnt").textContent="("+PAP.nAbiertas+" abiertas / "+PAP.nCerradas+" liquidadas)";
 $("p-rows").innerHTML=todas.slice(0,60).map(function(r){var x=r.x;
  return "<tr>"+
   "<td><span class='"+(r.c?"t3":"t2")+"'>"+(r.c?"liquidada":"abierta")+"</span></td>"+
   "<td class='dim'>"+esc(x.tipo)+"</td>"+
   "<td>"+esc(x.senal||"—")+"</td>"+
   "<td title='"+esc(x.q||"")+"'>"+esc((x.q||"").slice(0,52))+"</td>"+
   "<td>"+(x.p!==undefined?(x.p*100).toFixed(1)+"%":(x.sum!==undefined?"Σ "+x.sum.toFixed(4):"—"))+"</td>"+
   "<td class='dim'>"+esc((x.ts||"").slice(0,10))+"</td>"+
   "<td class='"+(x.r>0?"up":(x.r<0?"dn":""))+"'>"+(x.r!==undefined?((x.r>=0?"+":"")+(x.r*100).toFixed(0)+"%"):"—")+"</td>"+
  "</tr>"}).join("")||"<tr><td colspan='7'>"+emp("✎","Nada anotado todavía.")+"</td></tr>";
 var e=PAP.est;
 $("p-est").innerHTML=e?("Direccionales liquidadas: <b>"+e.n+"</b> · acierto <b>"+(e.acierto*100).toFixed(0)+"%</b> · retorno medio <b class='"+
   (e.media>=0?"up":"dn")+"'>"+(e.media>=0?"+":"")+(e.media*100).toFixed(1)+"%</b> · t-stat <b>"+e.t.toFixed(2)+"</b> — "+
   (Math.abs(e.t)>=2?"<b class='up'>significativo</b>":"todavía indistinguible del azar"+(e.n<30?", y con "+e.n+" casos es pronto para nada":""))):
   "Sin liquidaciones todavía. Hacen falta semanas de cron para tener muestra.";}

function renderSim(){
 if(!BT){
  var msg=emp("🧪","Pulsa ▶ Ejecutar simulación.<br>Descarga histórico real de mercados ya resueltos.");
  $("s-rows").innerHTML="<tr><td colspan='9'>"+msg+"</td></tr>";
  $("s-cal").innerHTML=msg;$("s-eq").innerHTML=msg;return}
 var b=BT,best=b.strats[0];
 $("s1").textContent=b.S.length;$("s1s").textContent="entrada a "+b.H+" días del cierre";
 $("s2").textContent=b.brier.toFixed(4);
 $("s2s").textContent=(b.brier<b.brierBase?"mejor":"peor")+" que la tasa base ("+b.brierBase.toFixed(4)+")";
 $("s3").textContent=b.lam===null?"—":b.lam.toFixed(3);
 $("s3s").textContent=b.lam===null?"no converge":(b.lam>0.02?"longshots caros de verdad":(b.lam<-0.02?"sesgo invertido":"sin sesgo medible"));
 $("s4").textContent=best?((best.total>=0?"+":"")+best.total.toFixed(1)+"u"):"—";
 $("s4s").textContent=best?best.name:"—";
 $("s-cal").innerHTML=calChart(b.cal);
 $("s-eq").innerHTML=eqChart(best);
 $("s-cnt").textContent="("+b.strats.length+")";
 $("s-rows").innerHTML=b.strats.map(function(s){
  var sig=Math.abs(s.t)>=2.6?["sí, fuerte","t3"]:(Math.abs(s.t)>=2?["sí","t5"]:(Math.abs(s.t)>=1?["débil","t2"]:["no, es ruido","t4"]));
  return "<tr>"+
   "<td>"+esc(s.name)+"</td><td>"+s.n+"</td>"+
   "<td>"+(s.win*100).toFixed(0)+"%</td>"+
   "<td class='"+(s.mean>=0?"up":"dn")+"'>"+(s.mean>=0?"+":"")+(s.mean*100).toFixed(1)+"%</td>"+
   "<td class='"+(s.med>=0?"up":"dn")+"'>"+(s.med>=0?"+":"")+(s.med*100).toFixed(1)+"%</td>"+
   "<td class='"+(s.total>=0?"up":"dn")+"'><b>"+(s.total>=0?"+":"")+s.total.toFixed(1)+"u</b></td>"+
   "<td class='dn'>−"+s.dd.toFixed(1)+"u</td>"+
   "<td>"+s.t.toFixed(2)+"</td>"+
   "<td><span class='"+sig[1]+"'>"+sig[0]+"</span></td></tr>"}).join("")}

/* ================= DETALLE DE MERCADO =================
   Todo se pide directo desde el navegador: gamma-api, clob y data-api sirven con
   Access-Control-Allow-Origin *, así que no hace falta pasar por el Worker.       */
var DT=null;

function dtOpen(id){
 var m=null;
 if(BQ)for(var i=0;i<BQ.markets.length;i++)if(String(BQ.markets[i].id)===String(id)){m=BQ.markets[i];break}
 if(!m)return;
 DT=m;$("dt").classList.add("on");
 $("dt-q").textContent=m.q;
 $("dt-sub").innerHTML=(m.ev?esc(m.ev)+" · ":"")+
   "<a href='"+esc(m.url)+"' target='_blank' rel='noopener'>abrir en Polymarket ↗</a>"+
   (m.days!==null?" · cierra en "+Math.round(m.days)+" días":"");
 dtMetrics(m);
 ["dt-fib","dt-grp","dt-dom","dt-del"].forEach(function(k){$(k).innerHTML=emp("⏳","Cargando…")});

 // Histórico -> Fibonacci
 fetch("https://clob.polymarket.com/prices-history?market="+encodeURIComponent(m.tok)+"&interval=1m&fidelity=60")
  .then(function(r){return r.json()})
  .then(function(j){var h=(j&&j.history)||[];
   $("dt-fib").innerHTML=h.length>5?fibChart(h):emp("📉","Sin histórico suficiente.")})
  .catch(function(){$("dt-fib").innerHTML=emp("⚠️","No se pudo cargar el histórico.")});

 // Grupo completo: se pide el evento entero, no las patas que hubiera en memoria.
 if(m.evSlug){
  fetch("https://gamma-api.polymarket.com/events?slug="+encodeURIComponent(m.evSlug))
   .then(function(r){return r.json()})
   .then(function(l){
    var ev=l&&l[0];if(!ev)throw 0;
    var legs=(ev.markets||[]).map(function(x){
     var p=null;try{p=parseFloat(JSON.parse(x.outcomePrices||"[]")[0])}catch(e){}
     var bid=parseFloat(x.bestBid),ask=parseFloat(x.bestAsk);
     var viva=isFinite(bid)&&isFinite(ask)&&bid>0&&ask<1&&(parseFloat(x.volumeNum||x.volume||0)||0)>0;
     return {n:x.groupItemTitle||x.question||"—",p:p,sp:x.spread||0,viva:viva,
             yo:String(x.id)===String(m.id)}})
     .filter(function(x){return x.p!==null&&isFinite(x.p)})
     .sort(function(a,b){return b.p-a.p});
    $("dt-gh").textContent="Todas las probabilidades del grupo ("+legs.length+" salidas)";
    dtGroup(legs,!!ev.negRisk)})
   .catch(function(){$("dt-grp").innerHTML=emp("—","Este mercado no pertenece a un grupo.")})}
 else $("dt-grp").innerHTML=emp("—","Sin grupo asociado.");

 // Libro de órdenes -> matrix / profundidad
 fetch("https://clob.polymarket.com/book?token_id="+encodeURIComponent(m.tok))
  .then(function(r){return r.json()})
  .then(function(b){dtDom(b)})
  .catch(function(){$("dt-dom").innerHTML=emp("⚠️","Libro no disponible.")});

 // Trades -> delta y CVD
 if(m.cid){
  fetch("https://data-api.polymarket.com/trades?market="+encodeURIComponent(m.cid)+"&limit=250")
   .then(function(r){return r.json()})
   .then(function(t){dtDelta(t)})
   .catch(function(){$("dt-del").innerHTML=emp("⚠️","Flujo no disponible.")})}
 else $("dt-del").innerHTML=emp("—","Sin identificador de mercado.")}

function dtClose(){$("dt").classList.remove("on");DT=null}

function dtMetrics(m){
 var k=function(l,v,c){return "<div><div class='l'>"+l+"</div><div class='v "+(c||"")+"'>"+v+"</div></div>"};
 var b=(1-m.p)/m.p;
 $("dt-met").innerHTML=
  k("PRECIO",bfmt(m.p,1))+
  k("CUOTA",(1/m.p).toFixed(2)+"×")+
  k("JUSTO (WANG)",bfmt(m.fair,1))+
  k("SESGO",(m.edge>=0?"+":"")+(m.edge*100).toFixed(1),m.edge>0?"dn":"up")+
  k("SPREAD REL.",bfmt(m.spreadRel,1),m.spreadRel>0.1?"dn":"")+
  k("LIQUIDEZ",f$(m.liq))+
  k("VOL. 24H",f$(m.vol24))+
  k("ROTACIÓN",m.turn===null?"—":m.turn.toFixed(2),m.turn!==null&&m.turn<0.02?"dn":"")+
  k("σ NORMALIZ.",m.snorm===null?"—":m.snorm.toFixed(2))+
  k("URGENCIA",m.urg===null?"—":m.urg.toFixed(3))+
  k("Z MOMENTUM",m.z.toFixed(2),m.z>0?"up":"dn")+
  k("DÍAS",m.days===null?"—":Math.round(m.days))}

function dtGroup(legs,neg){
 var vivas=legs.filter(function(x){return x.viva});
 var s=vivas.reduce(function(a,x){return a+x.p},0);
 var mx=Math.max.apply(null,legs.map(function(x){return x.p}))||1;
 var cab="<div class='r' style='color:var(--dim);font-size:9px;letter-spacing:.05em'>"+
   "<div>SALIDA</div><div class='pv'>PROB.</div><div class='sp'>SPREAD</div></div>";
 var filas=legs.map(function(x){
  return "<div class='r'>"+
   "<div class='bar'><i style='width:"+(100*x.p/mx).toFixed(1)+"%"+
     (x.yo?";background:rgba(34,211,238,.34)":(x.viva?"":";background:rgba(95,113,134,.15)"))+"'></i>"+
     "<span"+(x.yo?" style='color:var(--cy)'":(x.viva?"":" style='color:var(--dim2)'"))+">"+
     esc(x.n.slice(0,42))+(x.viva?"":" · sin libro")+"</span></div>"+
   "<div class='pv'>"+(x.p*100).toFixed(1)+"%</div>"+
   "<div class='sp'>"+(x.sp?(x.sp*100).toFixed(1):"—")+"</div></div>"}).join("");
 var pie=neg?
  ("<div class='st' style='margin-top:6px'>Suma de las "+vivas.length+" patas cotizadas: <b class='"+
   (Math.abs(s-1)<0.005?"":(s>1?"up":"dn"))+"'>"+s.toFixed(4)+"</b> — "+
   (s>1?("sobre-redondeo de +"+((s-1)*100).toFixed(2)+"%: el conjunto cotiza caro"):
    (s<1?("descuento de "+((s-1)*100).toFixed(2)+"%"+(vivas.length<legs.length?" (poco fiable: hay patas sin libro que se quedan la probabilidad que falta)":"")):"suma exacta"))+
   "</div>"):
  "<div class='st' style='margin-top:6px'>Este evento <b>no</b> es mutuamente excluyente, así que sumar sus probabilidades no significa nada.</div>";
 $("dt-grp").innerHTML=cab+filas+pie}

/* Fibonacci sobre el rango del periodo. En un binario los niveles se recortan a [0,1]:
   un retroceso que caiga fuera no existe como precio posible.                        */
function fibChart(h){
 var W=560,H=230,pad=34,w=W-pad-46,ht=H-pad-18;
 var ps=h.map(function(x){return x.p});
 var lo=Math.min.apply(null,ps),hi=Math.max.apply(null,ps),rg=(hi-lo)||1;
 var Y=function(p){return H-pad-ht*((p-lo)/rg)};
 var X=function(i){return pad+w*(i/(ps.length-1))};
 var niveles=[[0,"0%"],[0.236,"23.6%"],[0.382,"38.2%"],[0.5,"50%"],[0.618,"61.8%"],[0.786,"78.6%"],[1,"100%"]];
 var lineas=niveles.map(function(n){
  var p=hi-(hi-lo)*n[0];
  if(p<0||p>1)return "";
  var y=Y(p);
  return "<line x1='"+pad+"' y1='"+y.toFixed(1)+"' x2='"+(pad+w)+"' y2='"+y.toFixed(1)+
   "' stroke='"+(n[0]===0.618||n[0]===0.382?"var(--am)":"var(--line)")+"' stroke-width='1' opacity='"+
   (n[0]===0.618||n[0]===0.382?".7":".45")+"' stroke-dasharray='4 4'/>"+
   "<text x='"+(pad+w+4)+"' y='"+(y+3).toFixed(1)+"' fill='var(--dim)' font-size='8.5'>"+n[1]+" · "+(p*100).toFixed(1)+"%</text>"}).join("");
 var linea="<polyline points='"+ps.map(function(p,i){return X(i).toFixed(1)+","+Y(p).toFixed(1)}).join(" ")+
   "' fill='none' stroke='var(--cy)' stroke-width='1.6'/>";
 return "<svg viewBox='0 0 "+W+" "+H+"' style='width:100%;height:100%'>"+lineas+linea+
  "<text x='"+pad+"' y='11' fill='var(--dim)' font-size='9'>máx "+(hi*100).toFixed(1)+"% · mín "+(lo*100).toFixed(1)+
   "% · "+ps.length+" puntos horarios</text></svg>"}

function dtDom(b){
 var bids=(b&&b.bids)||[],asks=(b&&b.asks)||[];
 if(!bids.length&&!asks.length){$("dt-dom").innerHTML=emp("—","Libro vacío.");return}
 // La API los da de peor a mejor: se invierten para que el mejor quede arriba.
 var B=bids.slice().sort(function(x,y){return y.price-x.price}).slice(0,12);
 var A=asks.slice().sort(function(x,y){return x.price-y.price}).slice(0,12);
 var mx=Math.max.apply(null,B.concat(A).map(function(x){return +x.size}))||1;
 var lado=function(arr,cls){return "<div class='side'>"+arr.map(function(x){
  return "<div class='row "+cls+"'><i style='width:"+(100*(+x.size)/mx).toFixed(1)+"%'></i>"+
   "<b>"+(+x.price*100).toFixed(1)+"%</b><em>"+fn(+x.size)+"</em></div>"}).join("")+"</div>"};
 var tb=B.reduce(function(a,x){return a+(+x.size)},0),ta=A.reduce(function(a,x){return a+(+x.size)},0);
 var des=tb+ta>0?(tb-ta)/(tb+ta):0;
 $("dt-dom").innerHTML=
  "<div class='dom'><div><div class='st' style='color:var(--gr);margin-bottom:3px'>COMPRA "+fn(tb)+"</div>"+lado(B,"bid")+"</div>"+
  "<div><div class='st' style='color:var(--rd);margin-bottom:3px'>VENTA "+fn(ta)+"</div>"+lado(A,"ask")+"</div></div>"+
  "<div class='st' style='margin-top:6px'>Desequilibrio del libro: <b class='"+(des>0?"up":"dn")+"'>"+
   (des>=0?"+":"")+(des*100).toFixed(1)+"%</b> — "+(des>0?"más profundidad comprando":"más profundidad vendiendo")+
   ". Es la foto actual, no histórico.</div>"}

function dtDelta(t){
 if(!t||!t.length){$("dt-del").innerHTML=emp("—","Sin operaciones recientes.");return}
 /* Normalización imprescindible: comprar "No" es económicamente vender "Yes".
    Sin esto el delta sale con el signo cambiado en la mitad de las operaciones. */
 var tr=t.map(function(x){
  var esYes=String(x.outcome||"").toLowerCase()==="yes";
  var comp=String(x.side||"").toUpperCase()==="BUY";
  var sgn=(esYes===comp)?1:-1;
  return {t:+x.timestamp,s:sgn*Math.abs(parseFloat(x.size)||0)}})
  .sort(function(a,b){return a.t-b.t});
 var cvd=[],c=0,cb=0,cs=0;
 tr.forEach(function(x){c+=x.s;cvd.push(c);if(x.s>0)cb+=x.s;else cs-=x.s});
 var W=560,H=200,pad=34,w=W-pad-12,ht=H-pad-20;
 var lo=Math.min.apply(null,cvd.concat([0])),hi=Math.max.apply(null,cvd.concat([0])),rg=(hi-lo)||1;
 var Y=function(v){return H-pad-ht*((v-lo)/rg)};
 var pts=cvd.map(function(v,i){return (pad+w*(i/((cvd.length-1)||1))).toFixed(1)+","+Y(v).toFixed(1)}).join(" ");
 $("dt-del").innerHTML=
  "<svg viewBox='0 0 "+W+" "+H+"' style='width:100%;height:calc(100% - 22px)'>"+
   "<line x1='"+pad+"' y1='"+Y(0).toFixed(1)+"' x2='"+(pad+w)+"' y2='"+Y(0).toFixed(1)+"' stroke='var(--dim)' stroke-dasharray='3 3'/>"+
   "<polyline points='"+pts+"' fill='none' stroke='"+(c>=0?"var(--gr)":"var(--rd)")+"' stroke-width='1.7'/>"+
   "<text x='"+pad+"' y='11' fill='var(--dim)' font-size='9'>delta acumulado · "+tr.length+" operaciones</text>"+
   "<text x='"+(pad+w)+"' y='11' fill='"+(c>=0?"var(--gr)":"var(--rd)")+"' font-size='11' text-anchor='end'>"+
    (c>=0?"+":"−")+fn(Math.abs(c))+"</text></svg>"+
  "<div class='st'>Compras "+fn(cb)+" · ventas "+fn(cs)+" · presión neta <b class='"+(c>=0?"up":"dn")+"'>"+
   (c>=0?"compradora":"vendedora")+"</b>. Comprar «No» cuenta como vender «Sí».</div>"}

/* ================= CARTERA =================
   Dos mitades con naturaleza distinta, y conviene no confundirlas:
   - Posiciones direccionales: dependen de TU probabilidad. El terminal solo hace
     la aritmética de Kelly; el pronóstico lo pones tú.
   - Arbitraje: no depende de ningún pronóstico. Patas, importes y salida se
     deducen de la aritmética, así que ahí sí cabe un plan mecánico.            */
var POS=[];

function cCap(){return Math.max(0,parseFloat($("c-cap").value)||0)}

/* Kelly de un contrato binario. Comprando a \`q\` con probabilidad propia \`p\`:
   b=(1−q)/q  →  f* = (p·b − (1−p))/b = (p − q)/(1 − q).                       */
function kellyBin(p,q){return q>=1?0:(p-q)/(1-q)}

function cFill(){
 var s=$("c-mkt");if(!s||!BQ)return;
 var cur=s.value;
 s.innerHTML=BQ.markets.slice(0,150).map(function(m){
  return "<option value='"+m.id+"'>"+esc(m.q.slice(0,74))+" — "+(m.p*100).toFixed(1)+"%</option>"}).join("");
 if(cur)s.value=cur}

function cAdd(){
 if(!BQ)return;
 var id=$("c-mkt").value,p=Math.max(0.001,Math.min(0.999,(parseFloat($("c-p").value)||50)/100));
 for(var i=0;i<POS.length;i++)if(String(POS[i].id)===String(id)){POS[i].p=p;render();return}
 POS.push({id:id,p:p});render()}

function cCompute(){
 if(!BQ)return{filas:[],tot:0,ev:0,peor:0};
 var frac=parseFloat($("c-frac").value)||0.25,
     mp=parseFloat($("c-mp").value)||0.1,
     mt=parseFloat($("c-mt").value)||0.5,
     cap=cCap();
 var filas=[];
 POS.forEach(function(x){
  var m=null;
  for(var i=0;i<BQ.markets.length;i++)if(String(BQ.markets[i].id)===String(x.id)){m=BQ.markets[i];break}
  if(!m)return;
  var f=kellyBin(x.p,m.p);
  filas.push({m:m,p:x.p,f:f,fa:Math.max(0,f)*frac})});

 // Tope por posición y, si el conjunto se pasa, escalado proporcional al tope total.
 filas.forEach(function(r){r.fa=Math.min(r.fa,mp)});
 var suma=filas.reduce(function(a,r){return a+r.fa},0);
 var esc2=suma>mt&&suma>0?mt/suma:1;
 filas.forEach(function(r){
  r.fa*=esc2;
  r.imp=cap*r.fa;
  r.tit=r.m.p>0?r.imp/r.m.p:0;          // títulos comprados
  r.gana=r.tit-r.imp;                    // beneficio neto si resuelve a favor
  r.ev=r.p*r.tit-r.imp});                // valor esperado con TU probabilidad
 var tot=filas.reduce(function(a,r){return a+r.imp},0);
 var ev=filas.reduce(function(a,r){return a+r.ev},0);
 // Peor caso: fallan todas. Su probabilidad conjunta solo vale si son independientes.
 var pFallo=filas.reduce(function(a,r){return a*(1-r.p)},1);
 return {filas:filas,tot:tot,ev:ev,peor:-tot,pFallo:filas.length?pFallo:0,escalado:esc2<1};
}

/* Plan mecánico de arbitraje. Aquí el capital importa tanto como el margen:
   vender las n patas de un grupo cuesta Σ(1−pᵢ)=n−Σp e ingresa n−1 con certeza. */
function cArb(){
 if(!BQ)return[];
 var out=[];
 (BQ.groups||[]).forEach(function(g){
  if(g.net<=0||g.dev<=0)return;                 // solo el lado vendedor es solido
  var coste=g.n-g.sum, ben=g.dev-g.cost;
  if(coste<=0||ben<=0)return;
  out.push({k:"Σ excluyente",ev:g.ev,slug:g.slug,n:g.n+" patas",
   coste:coste,ben:ben,ret:ben/coste,
   plan:"Comprar el NO de las "+g.n+" patas · salir cuando Σp vuelva a 1 o al vencimiento"})});
 (BQ.mono||[]).forEach(function(g){
  var coste=g.pBarato+(1-g.pCaro), ben=g.neto;
  if(coste<=0||ben<=0)return;
  out.push({k:"monotonía",ev:g.ev,slug:g.slug,n:"2 patas",
   coste:coste,ben:ben,ret:ben/coste,
   plan:"Comprar SÍ de «"+g.barato+"» y NO de «"+g.caro+"» · salir cuando se restablezca el orden"})});
 out.sort(function(a,b){return b.ret-a.ret});
 return out}

function renderCart(){
 if(!BQ){
  var msg=emp("💼","Carga el cerebro (F7) para tener mercados.");
  $("c-rows").innerHTML="<tr><td colspan='10'>"+msg+"</td></tr>";
  $("c-arb").innerHTML="<tr><td colspan='7'>"+msg+"</td></tr>";return}
 cFill();
 var r=cCompute(),cap=cCap(),ar=cArb();

 $("c1").textContent=eur(r.tot);
 $("c1s").textContent=cap>0?((r.tot/cap*100).toFixed(1)+"% de "+eur(cap)+(r.escalado?" · escalado al tope":"")):"pon capital";
 $("c2").textContent=(r.ev>=0?"+":"−")+eur(Math.abs(r.ev));
 $("c2").className="v "+(r.ev>=0?"up":"dn");
 $("c3").textContent=r.tot>0?("−"+eur(r.tot)):eur(0);
 $("c3s").textContent=r.filas.length?("probabilidad "+(r.pFallo*100).toFixed(1)+"% si son independientes"):"sin posiciones";
 $("c4").textContent=ar.length?((ar[0].ret*100).toFixed(2)+"%"):"—";
 $("c4s").textContent=ar.length?(ar.length+" operaciones · mejor retorno s/capital"):"nada cubre costes";

 $("c-rows").innerHTML=r.filas.map(function(x){
  return "<tr>"+
   "<td title='"+esc(x.m.q)+"'>"+esc(x.m.q.slice(0,52))+"</td>"+
   "<td>"+(x.m.p*100).toFixed(1)+"%</td>"+
   "<td style='color:var(--cy)'>"+(x.p*100).toFixed(1)+"%</td>"+
   "<td class='"+(x.p>x.m.p?"up":"dn")+"'>"+((x.p-x.m.p)>=0?"+":"")+((x.p-x.m.p)*100).toFixed(1)+"</td>"+
   "<td>"+(x.f*100).toFixed(1)+"%</td>"+
   "<td><b>"+x.imp.toFixed(2)+" €</b></td>"+
   "<td class='dim'>"+x.tit.toFixed(1)+"</td>"+
   "<td class='up'>+"+x.gana.toFixed(2)+" €</td>"+
   "<td class='dim'>"+(x.p*100).toFixed(1)+"%</td>"+
   "<td><button data-del='"+x.m.id+"' style='background:none;border:0;color:var(--dim);cursor:pointer'>✕</button></td>"+
  "</tr>"}).join("")||"<tr><td colspan='10'>"+emp("➕","Añade un mercado y pon tu probabilidad.")+"</td></tr>";

 $("c-acnt").textContent="("+ar.length+")";
 $("c-arb").innerHTML=ar.slice(0,25).map(function(a){
  var esc3=cap>0?Math.min(1,cap/ (a.coste*100) ):0;   // referencia: 100 uds nominales
  return "<tr>"+
   "<td title='"+esc(a.ev)+"'><a href='https://polymarket.com/event/"+esc(a.slug)+"' target='_blank' rel='noopener'>"+esc(a.ev.slice(0,44))+"</a></td>"+
   "<td><span class='"+(a.k==="monotonía"?"t5":"t2")+"'>"+a.k+"</span></td>"+
   "<td class='dim'>"+a.n+"</td>"+
   "<td>"+a.coste.toFixed(3)+" u <span class='dim'>por unidad de premio</span></td>"+
   "<td class='up'>+"+(a.ben*100).toFixed(2)+"%</td>"+
   "<td><b class='up'>"+(a.ret*100).toFixed(3)+"%</b></td>"+
   "<td class='dim' style='font-size:10px'>"+esc(a.plan)+"</td>"+
  "</tr>"}).join("")||"<tr><td colspan='7'>"+emp("⚖️","Ninguna restricción violada cubre costes ahora.")+"</td></tr>"}

/* ================= BIBLIOTECA QUANT =================
   Las 7 familias de la Quant Master Library evaluadas contra los datos reales del
   terminal. \`pri\` es el orden de construccion; null = no entra.                  */
var LIB=[
 {i:"01",fam:"Matemática financiera",tema:"cálculo estocástico · browniano · Itô",e:"cola",pri:7,
  usa:"Presupuesto de varianza y volatilidad implícita en escala probit",dnd:"F7",
  por:"Browniano geométrico es incorrecto: permite precios fuera de [0,1] y supone deriva libre. La reformulación válida es en escala probit, que respeta las fronteras y conecta con la Wang ya implementada. Aprovechable: si la varianza terminal es p(1−p) y quedan T días, hay una σ implícita que consume ese presupuesto; comparada con la realizada dice si la volatilidad está cara."},
 {i:"02",fam:"Arbitraje estadístico",tema:"cointegración · pares · residuos",e:"ok",pri:null,
  usa:"Arbitraje por restricción lógica: Σp=1 y monotonía",dnd:"F7",
  por:"Cointegrar exige series que persistan, y estos mercados resuelven: dos que convergen no revierten a la media, se acercan a la misma verdad. La variante sin riesgo de modelo ya está construida — arbitraje estadístico con la estadística sustituida por aritmética, que es estrictamente mejor. Pendiente: lead-lag entre mercados del mismo tema."},
 {i:"03",fam:"Microestructura",tema:"libros · HFT · liquidez",e:"ok",pri:2,
  usa:"Profundidad del libro, delta y CVD · falta OFI y lambda de Kyle",dnd:"F7",
  por:"La única familia que no depende de la forma del proceso, y los datos existen: libro completo y operaciones con lado BUY/SELL. Falta el Order Flow Imbalance de Cont–Kukanov–Stoikov y la lambda de Kyle (impacto por unidad negociada). Necesita grabar snapshots con el cron: Polymarket solo da la foto actual y el dato no se recupera hacia atrás. HFT fuera: sin colocación no hay ventaja de latencia."},
 {i:"04",fam:"Anomalías ocultas",tema:"calendario · transversales",e:"cola",pri:4,
  usa:"Sesgo favorito-longshot (Wang) · falta escáner de mercados nuevos",dnd:"F7",
  por:"Los efectos de calendario no portan: estos mercados resuelven en fechas de acontecimientos, no en cierres de trimestre. Las anomalías propias del dominio sí: el sesgo favorito-longshot (λ̂=0,183 sobre 291.000 contratos según oracle3) y el mercado recién listado, mal valorado antes de que llegue dinero informado. El z-score transversal ya está."},
 {i:"05",fam:"Machine learning",tema:"transformers · refuerzo · features",e:"no",pri:6,
  usa:"Solo calibración isotónica, y no todavía",dnd:"—",
  por:"Con n=107 y ninguna estrategia por encima de |t|≥2, meter transformers es añadir parámetros al ruido: encuentran patrones inexistentes y con una convicción que engaña. El refuerzo optimiza ejecución y no hay ejecución que optimizar. Excepción de bajo riesgo: calibración isotónica sobre el histórico resuelto, pocos parámetros e interpretable. Solo cuando el motor de papel acumule muestra."},
 {i:"06",fam:"Crypto quant",tema:"AMMs · DeFi · entre exchanges",e:"cola",pri:1,
  usa:"Kalshi vía pmxt: mismo acontecimiento, dos precios",dnd:"—",
  por:"Las matemáticas de AMM no aplican: Polymarket usa libro, no creador automático. Pero las señales entre exchanges son lo más desaprovechado: Kalshi y Polymarket cotizan los mismos acontecimientos a precios distintos. Mismo rigor que el arbitraje por restricción y con márgenes mayores, porque hay fricción real entre plataformas. pmxt (2.111★, MIT) da la API unificada."},
 {i:"07",fam:"Experimental",tema:"econofísica · fractales · régimen · información",e:"cola",pri:3,
  usa:"Descomposición del Brier · detección de cambio de régimen",dnd:"F8",
  por:"Fractales y econofísica son trampa: el exponente de Hurst sobre una martingala acotada mide la frontera, no memoria. Cambio de régimen sí, con matiz: estos mercados tienen regímenes reales (hay noticia o no la hay) y la detección bayesiana distingue revalorización por información de simple deriva. Teoría de la información es lo mejor de la biblioteca y lo más nativo: descomponer el Brier en fiabilidad, resolución e incertidumbre dice POR QUÉ el mercado acierta, no solo cuánto."}
];
var LF="all";

function renderLib(){
 var E={ok:["implementado","t3"],cola:["en cola","t2"],no:["descartado","t4"]};
 var f=LIB.filter(function(x){return LF==="all"||x.e===LF});
 $("l1").textContent=LIB.filter(function(x){return x.e==="ok"}).length;
 $("l2").textContent=LIB.filter(function(x){return x.e==="cola"}).length;
 $("l3").textContent=LIB.filter(function(x){return x.e==="no"}).length;
 $("l-cnt").textContent="("+f.length+" de "+LIB.length+")";
 f.sort(function(a,b){return (a.pri===null?99:a.pri)-(b.pri===null?99:b.pri)});
 $("l-rows").innerHTML=f.map(function(x){
  var st=E[x.e];
  return "<tr>"+
   "<td class='dim'>"+x.i+"</td>"+
   "<td><b>"+esc(x.fam)+"</b><br><span class='dim' style='font-size:10px'>"+esc(x.tema)+"</span></td>"+
   "<td><span class='"+st[1]+"'>"+st[0]+"</span>"+(x.pri?"<br><span class='dim' style='font-size:10px'>prioridad "+x.pri+"</span>":"")+"</td>"+
   "<td>"+esc(x.usa)+"</td>"+
   "<td class='dim'>"+esc(x.dnd)+"</td>"+
   "<td class='dim' style='font-size:10.5px;line-height:1.5'>"+esc(x.por)+"</td>"+
  "</tr>"}).join("")}

/* ---- Vigilante de 8-K ---- */
var EDG=null,EDGL=false;
function loadEdgar(){
 if(EDGL)return;EDGL=true;
 $("e-st").textContent="Consultando EDGAR…";
 fetch("/api/edgar?d="+(+$("e-d").value||30),{cache:"no-store"})
  .then(function(r){return r.json()})
  .then(function(j){
   if(j.error)throw new Error(j.error);
   EDG=j;
   $("e-st").textContent=j.n+" presentaciones · "+j.descartadas+" descartadas por sector · "+
     j.cruces.length+" cruces · "+j.candidatas.length+" candidatas"})
  .catch(function(e){EDG=null;$("e-st").textContent="Error: "+(e.message||e)})
  .then(function(){EDGL=false;render()})}

function renderEdgar(){
 if(!EDG){$("e-rows").innerHTML="<tr><td colspan='6'>"+emp("📄","Pulsa ⟳ para buscar presentaciones 8-K.")+"</td></tr>";return}
 var f=EDG.cruces.concat(EDG.candidatas);
 $("e-cnt").textContent="("+f.length+")";
 $("e-rows").innerHTML=f.map(function(x){
  var sg=x.enUniverso?["CRUCE","t1"]:(x.firma?["contrato firmado","t3"]:["mención","t2"]);
  return "<tr>"+
   "<td class='dim'>"+esc(x.fecha)+"</td>"+
   "<td><b>"+esc(x.tk||"—")+"</b></td>"+
   "<td title='"+esc(x.nombre)+"'><a href='"+esc(x.url)+"' target='_blank' rel='noopener'>"+esc(x.nombre.slice(0,40))+"</a>"+
     (x.enUniverso?" <span class='dim'>· "+esc(x.universo)+"</span>":"")+"</td>"+
   "<td class='dim' style='font-size:10.5px'>"+esc(x.sector)+"</td>"+
   "<td class='dim' style='font-size:10.5px'>"+esc(x.etiquetas.join(", ").slice(0,44))+"</td>"+
   "<td><span class='"+sg[1]+"'>"+sg[0]+"</span></td></tr>"}).join("")||
  "<tr><td colspan='6'>"+emp("—","Ninguna presentación relevante en la ventana.")+"</td></tr>"}

function go(v){VIEW=v;
 ["dash","con","sc","pm","news","quant","brain","sim","cart","lib"].forEach(function(x){$("v-"+x).classList.toggle("on",x===v)});
 [].forEach.call($("nav").querySelectorAll("button"),function(b){b.classList.toggle("on",b.dataset.v===v)});
 if(v==="news")loadNews(NR);
 if(v==="con"&&!EDG&&!EDGL)loadEdgar();
 if((v==="brain"||v==="cart")&&!BQ&&!BLOAD)loadBrain();
 if(v==="sim"&&!PAP)loadPaper();
 render()}
[].forEach.call($("nav").querySelectorAll("button"),function(b){b.onclick=function(){go(b.dataset.v)}});
$("cmd").addEventListener("input",function(e){e.target.dataset.q=e.target.value;render()});
$("cmd").addEventListener("keydown",function(e){
 if(e.key!=="Enter")return;
 var c=e.target.value.trim().toUpperCase();
 var m={CON:"con",CONTRATOS:"con",SC:"sc",SMALLCAPS:"sc",PM:"pm",POLYMARKET:"pm",NEWS:"news",NOTICIAS:"news",DASH:"dash",F1:"dash",QUANT:"quant",Q:"quant",BRAIN:"brain",CEREBRO:"brain",PQ:"brain",SIM:"sim",SIMULADOR:"sim",BT:"sim",CART:"cart",CARTERA:"cart",LIB:"lib",BIBLIOTECA:"lib"};
 if(m[c]){e.target.value="";e.target.dataset.q="";go(m[c])}
 else if(c==="REFRESH"||c==="RELOAD"){e.target.value="";e.target.dataset.q="";refresh()}});
document.addEventListener("keydown",function(e){
 if(e.key==="Escape"&&DT){dtClose();return}
 if(e.key==="/"&&document.activeElement!==$("cmd")){e.preventDefault();$("cmd").focus();return}
 var m={F1:"dash",F2:"con",F3:"sc",F4:"pm",F5:"news",F6:"quant",F7:"brain",F8:"sim",F9:"cart",F10:"lib"};
 if(m[e.key]){e.preventDefault();go(m[e.key])}});
document.addEventListener("click",function(e){var t=e.target;
 if(t.classList.contains("str")){W[t.dataset.tk]=!W[t.dataset.tk];sw();render()}
 if(t.dataset&&t.dataset.r){RG=t.dataset.r;render()}
 if(t.dataset&&t.dataset.n){NR=t.dataset.n;loadNews(NR);render()}
 if(t.dataset&&t.dataset.nf){loadNews(NR,true)}
 if(t.dataset&&t.dataset.del){POS=POS.filter(function(x){return String(x.id)!==String(t.dataset.del)});render();return}
 if(t.closest){var tr=t.closest("tr[data-mid]");
  if(tr&&t.tagName!=="A"){dtOpen(tr.dataset.mid)}}});
[].forEach.call(document.querySelectorAll("th[data-k]"),function(th){
 var enBrain=!!(th.closest&&th.closest("#v-brain"));
 th.onclick=function(){var k=th.dataset.k;
  if(enBrain){BSORT=BSORT.k===k?{k:k,d:-BSORT.d}:{k:k,d:1}}
  else{SORT=SORT.k===k?{k:k,d:-SORT.d}:{k:k,d:1}}
  render()}});
$("bload").onclick=function(){loadBrain(true)};
$("srun").onclick=btRun;
[].forEach.call(document.querySelectorAll(".lf"),function(b){b.onclick=function(){
 LF=b.dataset.f;[].forEach.call(document.querySelectorAll(".lf"),function(o){o.classList.toggle("on",o===b)});render()}});
$("e-load").onclick=loadEdgar;
$("e-d").onchange=loadEdgar;
$("mc-run").onclick=mcRun;
$("p-snap").onclick=function(){loadPaper("snap")};
$("p-set").onclick=function(){loadPaper("set")};
$("c-add").onclick=cAdd;
$("c-clr").onclick=function(){POS=[];render()};
["c-cap","c-frac","c-mp","c-mt"].forEach(function(k){$(k).oninput=render;$(k).onchange=render});
$("c-mkt").onchange=function(){
 // arrancar con la probabilidad implícita: así la ventaja parte de cero
 if(!BQ)return;for(var i=0;i<BQ.markets.length;i++)
  if(String(BQ.markets[i].id)===String($("c-mkt").value)){$("c-p").value=(BQ.markets[i].p*100).toFixed(1);break}};
$("dtx").onclick=dtClose;
$("dt").addEventListener("click",function(e){if(e.target.id==="dt")dtClose()});
$("bvol").onclick=loadBVol;
$("b-kmkt").onchange=function(){syncKellyP();kellyCalc()};
$("b-kp").oninput=kellyCalc;
$("b-kf").onchange=kellyCalc;
$("fa").onclick=function(){FP="all";$("fa").classList.add("on");$("fr").classList.remove("on");render()};
$("fr").onclick=function(){FP="r";$("fr").classList.add("on");$("fa").classList.remove("on");render()};
$("fm").onchange=render;
$("pa").onclick=function(){PF="all";$("pa").classList.add("on");$("ps").classList.remove("on");render()};
$("ps").onclick=function(){PF="s";$("ps").classList.add("on");$("pa").classList.remove("on");render()};
$("swl").onclick=function(){WO=!WO;$("swl").classList.toggle("on",WO);render()};
$("scsv").onclick=function(){
 var NL=String.fromCharCode(10),rows=[["Empresa","Ticker","Pais","Region","Tamano","Nicho","Watchlist"]];
 SC.forEach(function(s){rows.push([s.name,s.tk,s.c,s.r,SZ[s.z],s.n,W[s.tk]?"SI":""])});
 var csv=rows.map(function(r){return r.map(function(c){return '"'+String(c).replace(/"/g,'""')+'"'}).join(",")}).join(NL);
 var a=document.createElement("a");a.href=URL.createObjectURL(new Blob([csv],{type:"text/csv"}));a.download="smallcaps_defensa.csv";a.click()};
function refresh(){NEWS={};NSRC={};loadCon();loadPM();loadNews("Pentágono",true);if(NR!=="Pentágono")loadNews(NR,true)}
$("rel").onclick=refresh;
$("qload").onclick=loadPx;
refresh();render();
setInterval(function(){loadPM()},120000);
</script>
</body>
</html>
`;
// >>> FIN HTML GENERADO

function json(d) {
  return new Response(JSON.stringify(d), { headers: { "content-type": "application/json;charset=utf-8", "access-control-allow-origin": "*", "cache-control": "no-store" } });
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const p = url.pathname;
    try {
      if (p === "/api/contracts") return json(await fetchContracts());
      if (p === "/api/pm") return json(await fetchPM());
      if (p === "/api/px") return json(await fetchPx(url.searchParams.get("s") || "ONDS"));
      if (p === "/api/news") return json(await fetchNews(url.searchParams.get("region") || "Pentágono"));
      if (p === "/api/pmq") return json(await fetchPMQ(Number(url.searchParams.get("pages")) || 3));
      if (p === "/api/pmh") return json(await fetchPMHist(url.searchParams.get("t"), url.searchParams.get("i")));
      if (p === "/api/edgar") return json(await fetchEdgar(Number(url.searchParams.get("d")) || 30));
      if (p === "/api/paper") return json(await paperState(env));
      if (p === "/api/paper/snap") return json(await paperSnap(env));
      if (p === "/api/paper/settle") return json(await paperSettle(env, Number(url.searchParams.get("n")) || 60));
      if (p === "/api/history") return json(await getHistory(env));
      if (p === "/api/run") return json(await dailyJob(env));
    } catch (e) {
      return json({ error: String(e && e.message || e) });
    }
    // index.html trae su propio SC / PRIMES / feeds embebidos, así que se sirve tal cual.
    // Cuando el universo SC pase a KV (roadmap 2), inyectar aquí el override antes de </body>.
    return new Response(HTML, { headers: { "content-type": "text/html;charset=utf-8" } });
  },
  async scheduled(event, env, ctx) {
    ctx.waitUntil((async () => {
      await dailyJob(env);
      // El motor de papel vive del cron: anota las senales del dia y liquida las
      // que ya hayan resuelto. Si falla, no debe tumbar el trabajo de contratos.
      try { await edgarJob(env); } catch (e) {}
      try { await paperSnap(env); } catch (e) {}
      try { await paperSettle(env, 40); } catch (e) {}
    })());
  }
};
