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
/* EDGE: spread efectivo a partir de OHLC. Devuelve la raiz del spread cuadratico
   medio en tanto por uno, o null si la serie no da. Traducido del pseudocodigo
   publicado en eguidotti/bidask (MIT). */
function edgeSpread(O, H, L, C) {
  const N = C.length;
  if (!(N > 3)) return null;
  const ln = Math.log;
  const o = [], h = [], l = [], c = [], m = [];
  for (let i = 0; i < N; i++) {
    if (!(O[i] > 0 && H[i] > 0 && L[i] > 0 && C[i] > 0)) return null;
    o.push(ln(O[i])); h.push(ln(H[i])); l.push(ln(L[i])); c.push(ln(C[i]));
    m.push((ln(H[i]) + ln(L[i])) / 2);
  }
  /* Series alineadas: cada observacion compara el dia con el anterior. Los dias
     en que maximo y minimo coinciden no aportan (no hubo rango) y se pesan a 0. */
  const x1 = [], x2 = [], pt = [];
  for (let i = 1; i < N; i++) {
    x1.push((m[i] - o[i]) * (o[i] - m[i - 1]) + (m[i] - c[i - 1]) * (c[i - 1] - m[i - 1]));
    x2.push((m[i] - o[i]) * (o[i] - c[i - 1]) + (o[i] - c[i - 1]) * (c[i - 1] - m[i - 1]));
    pt.push((h[i] === l[i] || (i > 1 && c[i - 1] === m[i - 1])) ? 0 : 1);
  }
  const k = pt.reduce((a, b) => a + b, 0);
  if (k < 3) return null;
  const med = a => { let t = 0; for (let i = 0; i < a.length; i++) t += a[i] * pt[i]; return t / k; };
  const e1 = med(x1), e2 = med(x2);
  const v1 = med(x1.map(v => v * v)) - e1 * e1;
  const v2 = med(x2.map(v => v * v)) - e2 * e2;
  const vs = v1 + v2;
  // Combinacion de minima varianza de los dos estimadores.
  const w1 = vs > 0 ? v2 / vs : 0.5;
  const s2 = -4 * (w1 * e1 + (1 - w1) * e2);
  /* Una varianza negativa significa que el estimador no converge con esta serie,
     no que operar sea gratis. Devolver 0 haria parecer sin coste una operacion
     que si lo tiene, asi que se admite que no hay estimacion. */
  if (!isFinite(s2) || s2 <= 0) return null;
  return Math.sqrt(s2);
}

/* Barras horarias del ultimo mes. Se usa para el rango a pocas horas: NO para
   predecir direccion, que a ese plazo no se predice. */
async function fetchIntra(sym) {
  const clean = String(sym).trim().toUpperCase().replace(/[^A-Z0-9.\-=^]/g, "");
  if (!clean) throw new Error("Símbolo vacío");
  for (const h of ["query1.finance.yahoo.com", "query2.finance.yahoo.com"]) {
    try {
      const r = await fetch("https://" + h + "/v8/finance/chart/" + encodeURIComponent(clean) +
        "?range=1mo&interval=60m", { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" } });
      if (!r.ok) continue;
      const j = await r.json();
      const res = j && j.chart && j.chart.result && j.chart.result[0];
      if (!res) continue;
      const q = res.indicators && res.indicators.quote && res.indicators.quote[0];
      const c = ((q && q.close) || []).filter(x => typeof x === "number" && isFinite(x) && x > 0);
      if (c.length < 20) continue;
      // Volatilidad por barra sobre log-retornos.
      const r2 = [];
      for (let i = 1; i < c.length; i++) r2.push(Math.log(c[i] / c[i - 1]));
      const mu = r2.reduce((a, b) => a + b, 0) / r2.length;
      const sg = Math.sqrt(r2.reduce((a, b) => a + (b - mu) * (b - mu), 0) / ((r2.length - 1) || 1));
      /* Mayor movimiento de 8 barras observado de verdad en el mes, sin solapar,
         para poder contrastar la banda teorica con lo que de veras paso. */
      let peor = 0;
      for (let i = 8; i < c.length; i += 8) {
        const v = Math.abs(c[i] / c[i - 8] - 1);
        if (v > peor) peor = v;
      }
      return { s: clean, barras: c.length, ultimo: c[c.length - 1], sigmaBarra: sg, peor8: peor };
    } catch (e) {}
  }
  throw new Error("sin datos intradía para " + clean);
}

/* TIPOS OFICIALES DEL BANCO CENTRAL EUROPEO. Segunda fuente, independiente de
   Yahoo, gratis y sin clave: una fijacion diaria en dias habiles, solo cruces
   contra el euro. Sirve para lo que Yahoo no puede servir: comprobar si un
   hallazgo es real o es un artefacto de la fuente. Ya salvo de creerse una
   reversion que en Yahoo daba p=0,027 y aqui p=0,408. */
async function fetchBCE(monedas, desde, hasta) {
  const m = String(monedas || "USD,GBP,JPY,CHF,AUD,NZD,CAD,SEK,PLN,NOK")
    .toUpperCase().replace(/[^A-Z,]/g, "").slice(0, 120);
  const hoy = new Date().toISOString().slice(0, 10);
  const ini = /^\d{4}-\d{2}-\d{2}$/.test(desde || "") ? desde
            : new Date(Date.now() - 730 * 86400000).toISOString().slice(0, 10);
  const fin = /^\d{4}-\d{2}-\d{2}$/.test(hasta || "") ? hasta : hoy;
  const r = await fetch("https://api.frankfurter.dev/v1/" + ini + ".." + fin +
    "?base=EUR&symbols=" + m, { redirect: "follow" });
  if (!r.ok) throw new Error("BCE HTTP " + r.status);
  const j = await r.json();
  const fechas = Object.keys(j.rates || {}).sort();
  if (!fechas.length) throw new Error("el BCE no devolvió fijaciones");
  const series = {};
  for (const mon of m.split(",").filter(Boolean)) {
    const c = [], d = [];
    for (const f of fechas) {
      const v = j.rates[f][mon];
      if (typeof v === "number" && isFinite(v) && v > 0) { c.push(v); d.push(f) }
    }
    if (c.length > 30) series["EUR/" + mon] = { d, c };
  }
  return {
    fuente: "Banco Central Europeo (fijación diaria de referencia)",
    desde: fechas[0], hasta: fechas[fechas.length - 1], nFijaciones: fechas.length,
    nota: "Una fijación al día (14:15 CET), días hábiles, solo cruces contra el euro. " +
          "Independiente de Yahoo: sirve para comprobar si un hallazgo es real o es de la fuente.",
    series
  };
}

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
      const op = (q && q.open) || [], hi = (q && q.high) || [], lo = (q && q.low) || [];

      const d = [], c = [], O = [], HI = [], LO = [];
      for (let i = 0; i < ts.length; i++) {
        const v = cl[i];
        // Yahoo mete null en días sin cotización (festivos locales, suspensiones).
        if (ts[i] && typeof v === "number" && isFinite(v) && v > 0) {
          d.push(new Date(ts[i] * 1000).toISOString().slice(0, 10));
          c.push(v);
          // Si falta alguna pata del OHLC se cae al cierre: el estimador lo tolera.
          O.push(typeof op[i] === "number" && op[i] > 0 ? op[i] : v);
          HI.push(typeof hi[i] === "number" && hi[i] > 0 ? hi[i] : v);
          LO.push(typeof lo[i] === "number" && lo[i] > 0 ? lo[i] : v);
        }
      }
      if (c.length < 30) { last = "serie corta (" + c.length + ")"; continue; }

      const keep = 400;
      return {
        s: clean,
        cur: (res.meta && res.meta.currency) || "",
        name: (res.meta && (res.meta.longName || res.meta.shortName)) || "",
        d: d.slice(-keep),
        c: c.slice(-keep),
        // Spread efectivo estimado, en tanto por uno. null si no se puede.
        spread: edgeSpread(O.slice(-keep), HI.slice(-keep), LO.slice(-keep), c.slice(-keep))
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

/* ---------- DISTORSIÓN DE WANG (server-side) ----------
   Vivía en el cliente, donde cualquiera lo leía abriendo el inspector. Aquí no.
   Normal CDF (Abramowitz & Stegun 26.2.17) y cuantil normal (Beasley-Springer-Moro),
   portados de oracle3/pricing/distortion.py (Apache-2.0). Error ~1e-7.            */
function nCdf(x) {
  const a1 = 0.254829592, a2 = -0.284496736, a3 = 1.421413741,
        a4 = -1.453152027, a5 = 1.061405429, pp = 0.3275911;
  const sg = x >= 0 ? 1 : -1;
  x = Math.abs(x) / Math.SQRT2;
  const t = 1 / (1 + pp * x);
  const y = 1 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);
  return 0.5 * (1 + sg * y);
}
function nPpf(p) {
  p = Math.max(1e-10, Math.min(1 - 1e-10, p));
  const a = [-3.969683028665376e1, 2.209460984245205e2, -2.759285104469687e2,
             1.383577518672690e2, -3.066479806614716e1, 2.506628277459239e0],
        b = [-5.447609879822406e1, 1.615858368580409e2, -1.556989798598866e2,
             6.680131188771972e1, -1.328068155288572e1],
        c = [-7.784894002430293e-3, -3.223964580411365e-1, -2.400758277161838e0,
             -2.549732539343734e0, 4.374664141464968e0, 2.938163982698783e0],
        d = [7.784695709041462e-3, 3.224671290700398e-1, 2.445134137142996e0, 3.754408661907416e0];
  let q, r;
  if (p < 0.02425) {
    q = Math.sqrt(-2 * Math.log(p));
    return (((((c[0]*q+c[1])*q+c[2])*q+c[3])*q+c[4])*q+c[5]) / ((((d[0]*q+d[1])*q+d[2])*q+d[3])*q+1);
  }
  if (p <= 0.97575) {
    q = p - 0.5; r = q * q;
    return (((((a[0]*r+a[1])*r+a[2])*r+a[3])*r+a[4])*r+a[5])*q / (((((b[0]*r+b[1])*r+b[2])*r+b[3])*r+b[4])*r+1);
  }
  q = Math.sqrt(-2 * Math.log(1 - p));
  return -(((((c[0]*q+c[1])*q+c[2])*q+c[3])*q+c[4])*q+c[5]) / ((((d[0]*q+d[1])*q+d[2])*q+d[3])*q+1);
}
const wangInv = (p, l) => nCdf(nPpf(p) - l);

/* λ implícita de un grupo excluyente: la que hace que las probabilidades sin prima
   de riesgo sumen 1. Σ wangInv decrece con λ, así que bisección.                  */
function fitLambda(ps) {
  if (!ps || ps.length < 2) return null;
  const f = l => ps.reduce((a, p) => a + wangInv(p, l), 0) - 1;
  let lo = -3, hi = 3;
  if (f(lo) < 0 || f(hi) > 0) return null;
  for (let i = 0; i < 60; i++) { const m = (lo + hi) / 2; if (f(m) > 0) lo = m; else hi = m; }
  return (lo + hi) / 2;
}

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
    slug: m.slug || "",
    /* Polymarket sirve los mercados bajo /event/<evento>/<mercado>, no bajo
       /market/<mercado>, que era lo que se estaba enlazando y daba 404. Si no hay
       slug de evento se cae al del mercado, y si no hay ninguno a la busqueda. */
    url: (ev && ev.slug)
      ? ("https://polymarket.com/event/" + ev.slug + (m.slug ? "/" + m.slug : ""))
      : (m.slug ? "https://polymarket.com/event/" + m.slug
                : "https://polymarket.com/markets?_q=" + encodeURIComponent((m.question || "").slice(0, 60))),
    tok: (function () { try { return JSON.parse(m.clobTokenIds || "[]")[0] || ""; } catch (e) { return ""; } })(),

    p: p,
    bid: isFinite(bid) ? bid : null,
    ask: isFinite(ask) ? ask : null,
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

/* ---------- SEMAFORO DE FIABILIDAD Y PROBABILIDAD PROPIA ----------
   Distincion que hay que mantener o esto vende humo: el terminal NO dice si una
   apuesta va a salir bien -el Monte Carlo con 4.010 millones de operaciones no
   encontro ninguna estrategia que superara al azar-. Dice si la apuesta es SOLIDA
   o es una trampa, que es otra cosa y si la sostienen los datos.

   La probabilidad propia se construye con tres pasos, todos defendibles:
     1. Precio medio del libro (bid+ask)/2 en vez del ultimo cruce, que puede ser
        viejo o de un lote minusculo.
     2. Normalizar por la suma del grupo excluyente. Si las patas suman 1,0475 hay
        un 4,75% de sobre-redondeo repartido; quitarlo es ARITMETICA, no modelo.
     3. Corregir el sesgo favorito-longshot con la transformada de Wang.

   IMPORTANTE sobre la lambda: NO se usa la que sale de nuestra muestra. Con n=107
   dio -0,366 y era ruido. Se usa 0,183, calibrada por oracle3 sobre 291.000
   contratos resueltos (Apache-2.0, con paper). Nuestro dato no llegaba ni de lejos.
   Cuando el mercado no esta en un grupo completo, la estimacion pierde el paso 2 y
   se marca como de menor confianza: hay que decirlo, no disimularlo.            */

const LAMBDA_LIT = 0.183;   // oracle3, 291k contratos resueltos
/* Referencia al KV para las funciones que no reciben env. Se fija en el fetch. */
let ENV_KV = null;

function pmSemaforo(m) {
  const av = [];
  let mal = 0, reg = 0;

  if (!m.live) { av.push("sin libro de ordenes"); mal++; }
  if (m.liq < 2000) { av.push("liquidez muy baja"); mal++; }
  else if (m.liq < 15000) { av.push("liquidez justa"); reg++; }

  if (m.spreadRel !== null) {
    if (m.spreadRel > 0.15) { av.push("entrar cuesta mas del 15%"); mal++; }
    else if (m.spreadRel > 0.05) { av.push("coste de entrada alto"); reg++; }
  }

  if (m.turn !== null && m.turn < 0.02) { av.push("casi no se negocia"); mal++; }
  if (m.days !== null && m.days < 1) { av.push("cierra en menos de un dia"); reg++; }
  if (m.p < 0.02 || m.p > 0.98) { av.push("precio en el extremo: poco margen"); reg++; }

  const luz = mal > 0 ? "rojo" : (reg > 1 ? "ambar" : (reg === 1 ? "ambar" : "verde"));
  return {
    luz: luz,
    avisos: av,
    texto: luz === "verde" ? "Mercado solido: hay libro, liquidez y el coste de entrar es razonable."
         : luz === "ambar" ? "Se puede operar, pero con reservas."
         : "Cuidado: aqui entrar o salir puede costarte mas que la ventaja."
  };
}

function pmEstimacion(m, sumaGrupo, grupoCompleto) {
  // 1. Precio medio del libro si lo hay
  const bid = m.bid, ask = m.ask;
  const mid = (isFinite(bid) && isFinite(ask) && bid > 0 && ask < 1) ? (bid + ask) / 2 : m.p;

  // 2. Quitar el sobre-redondeo repartido (solo si el grupo esta completo)
  let base = mid, paso2 = false;
  if (grupoCompleto && sumaGrupo > 0.5 && sumaGrupo < 5) { base = mid / sumaGrupo; paso2 = true; }

  // 3. Corregir el sesgo favorito-longshot
  const est = Math.max(0.001, Math.min(0.999, wangInv(base, LAMBDA_LIT)));

  // Confianza: sin el paso 2 la estimacion es bastante mas floja, y hay que decirlo.
  const conf = (paso2 && m.live && m.liq > 15000) ? "alta"
             : (paso2 || (m.live && m.liq > 15000)) ? "media" : "baja";

  return {
    est: est, mid: mid, dif: est - m.p, normalizado: paso2, confianza: conf,
    como: (paso2 ? "precio medio del libro, sin el sobre-redondeo del grupo, " :
                   "precio medio del libro, ") + "corregido por sesgo longshot (λ=" + LAMBDA_LIT + ")"
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

  /* Sobre-redondeo por grupo, en escala probit. OJO: esto NO es el sesgo
     favorito-longshot, aunque se ajuste con la misma funcion. Sobre un grupo
     completo -que ya suma ~1- la solucion es ~0 por construccion; se guarda
     solo como diagnostico del grupo. */
  groups.forEach(g => { if (g.completo) g.lam = fitLambda(g.legs.map(x => x.p)); });

  /* Valor justo: Wang con la lambda de la literatura DENTRO de cada grupo
     excluyente y renormalizado a 1. Renormalizar es lo que convierte un
     desplazamiento de nivel -que diria "vender todo"- en el sesgo relativo que
     de verdad se observa: las patas improbables caras frente a las favoritas.
     Fuera de un grupo completo no hay con que comparar y se deja sin estimar. */
  /* Lambda aprendida: arranca en la de la literatura y se va desplazando hacia
     la propia segun se acumulan mercados resueltos. Guardada por el cron para
     no rehacer el recuento en cada peticion. */
  let LAM = { lam: LAMBDA_LIT, peso: 0, n: 0, fuente: "literatura" };
  try {
    const g = ENV_KV && await ENV_KV.get("aprendido:lambda", "json");
    if (g && isFinite(g.lam)) LAM = g;
  } catch (e) {}

  markets.forEach(m => { m.fair = null; m.edge = null; });
  let nFair = 0;
  for (const ev of evs) {
    if (!ev.negRisk) continue;
    const ms = markets.filter(m => m.evSlug === (ev.slug || "") && m.live);
    if (ms.length < 2 || ms.length !== (ev.markets || []).length) continue;
    const cru = ms.map(m => wangInv(m.p, LAM.lam));
    const tot = cru.reduce((a, x) => a + x, 0);
    if (!(tot > 0)) continue;
    ms.forEach((m, i) => { m.fair = cru[i] / tot; m.edge = m.p - m.fair; nFair++; });
  }
  const lam = LAM.lam;

  // z-scores de momentum a 3 horizontes (mismo motor que la vista QUANT de acciones).
  ["c1d", "c1w", "c1m"].forEach(k => {
    const v = markets.map(m => m[k]).filter(x => isFinite(x));
    const mu = v.reduce((a, b) => a + b, 0) / (v.length || 1);
    const sg = Math.sqrt(v.reduce((a, b) => a + (b - mu) * (b - mu), 0) / ((v.length - 1) || 1)) || 1;
    markets.forEach(m => { m["z" + k] = isFinite(m[k]) ? (m[k] - mu) / sg : 0; });
  });
  markets.forEach(m => { m.z = (m.zc1d + m.zc1w + m.zc1m) / 3; });

  /* Semaforo y estimacion propia. Se hace al final porque la estimacion necesita
     saber la suma del grupo al que pertenece cada mercado. */
  const sumaPorEvento = {};
  groups.forEach(g => { sumaPorEvento[g.slug] = { suma: g.sum, completo: g.completo }; });
  markets.forEach(m => {
    m.sem = pmSemaforo(m);
    const g = sumaPorEvento[m.evSlug];
    m.est = pmEstimacion(m, g ? g.suma : 1, !!(g && g.completo));
    /* Habia dos estimadores compitiendo y dando numeros distintos para lo mismo:
       m.fair (grupo + Wang renormalizado) y m.est (mid, quitar sobre-redondeo,
       Wang sin renormalizar). El segundo arrastra el mismo sesgo de nivel que
       hacia inservible al primero, asi que cuando hay valor justo de grupo -que
       es el estimador correcto- manda ese, y m.est solo cubre los mercados
       sueltos, avisando de que la confianza es baja. */
    if (m.fair !== null && isFinite(m.fair)) {
      m.est = {
        est: m.fair, mid: m.est.mid, dif: m.fair - m.p, normalizado: true,
        confianza: (m.live && m.liq > 15000) ? "alta" : "media",
        como: "Wang (lambda=" + LAMBDA_LIT + ") aplicado a las salidas del grupo y renormalizado a 1"
      };
    }
  });

  groups.sort((a, b) => b.net - a.net);
  mono.sort((a, b) => b.neto - a.neto);
  markets.sort((a, b) => (b.vol24 || 0) - (a.vol24 || 0));

  return {
    ts: new Date().toISOString(),
    fee: PM_FEE,
    nEvents: evs.length,
    lam: lam, nLam: markets.slice(0, 400).filter(m => m.fair !== null).length,
    lamFuente: LAM.fuente, lamPeso: LAM.peso, lamN: LAM.n, lamPropia: LAM.propia,
    // Curva de distorsion lista para pintar: el cliente no recalcula nada.
    curva: (function () { const c = []; for (let i = 1; i < 100; i++) { const p = i / 100; c.push([p, nCdf(nPpf(p) + lam)]); } return c; })(),
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
        tkUniv: univ[tk] ? univ[tk].tk : "",
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

/* ---------- VIGILANTE DE LITIGIOS (CourtListener) ----------
   Un pleito es material y es publico el dia que se presenta. Para una small cap de
   50-500 M$ una demanda de valores mueve la cotizacion sola, y nadie la esta
   cruzando contra un universo de defensa.
   Clave: buscar por PARTE, no a texto libre. "Astronics" en texto libre da 825
   resultados (aparece en cualquier documento); party:"Astronics" da 35 y todos son
   realmente sobre la empresa.
   Solo cotizadas en EE.UU.: una empresa australiana o india no litiga en tribunal
   federal estadounidense, asi que consultarlas es gastar peticiones para nada.    */

const CL_UA = "MOR Terminal - contacto colonelmor1945@gmail.com";

/* Codigo "nature of suit" -> que significa y si es material para la cotizacion. */
const CL_NAT = {
  "850": ["Valores y materias primas", 3],
  "830": ["Patentes", 3],
  "820": ["Derechos de autor", 2],
  "840": ["Marcas", 2],
  "190": ["Contrato: otros", 2],
  "195": ["Contrato: responsabilidad de producto", 3],
  "196": ["Franquicia", 1],
  "710": ["Salarios y jornada", 1],
  "442": ["Empleo", 1],
  "790": ["Otros laborales", 1],
  "890": ["Otras acciones legales", 1],
  "422": ["Concurso de acreedores", 3],
  "423": ["Concurso: retirada", 3],
  "440": ["Otros derechos civiles", 1],
  "360": ["Danos personales", 1],
  "896": ["Arbitraje", 2]
};

function clNat(s) {
  const c = String(s || "").match(/^(\d{3})/);
  const k = c ? c[1] : "";
  const v = CL_NAT[k];
  const libre = String(s || "").replace(/^\d+\s*/, "").trim();
  return { cod: k, txt: v ? v[0] : (libre || "sin clasificar"),
           peso: v ? v[1] : (libre ? 1 : 0) };
}

/* Buscar por parte casa apellidos: party:"Ducommun" devuelve a "Joel Edward
   Ducommun", una persona, no la empresa. Se exige que alguna parte lleve marca
   societaria; las personas fisicas no la llevan.                                 */
const CL_SOC = /(?:^|[^a-zA-Z])(inc|corp|corporation|company|co|llc|ltd|limited|holdings|technologies|systems|group|plc|lp|industries|international|solutions)(?:[^a-zA-Z]|$)/i;

function clEsEmpresa(partes, nombre) {
  const tok = String(nombre).split(/\s+/)[0].toLowerCase();
  for (const p of (partes || [])) {
    const t = String(p);
    if (t.toLowerCase().indexOf(tok) >= 0 && CL_SOC.test(t)) return true;
  }
  return false;
}

async function clBuscar(parte, desde) {
  const u = "https://www.courtlistener.com/api/rest/v4/search/?type=r&order_by=dateFiled%20desc" +
            "&q=" + encodeURIComponent('party:"' + parte + '"') +
            "&filed_after=" + desde;
  const r = await fetch(u, { headers: { "User-Agent": CL_UA, "Accept": "application/json" } });
  // 429: CourtListener estrangula el uso anonimo. Nueve consultas seguidas lo
  // disparan. Con token gratuito el limite sube bastante (cabecera Authorization).
  if (r.status === 429) throw new Error("limite de peticiones (429)");
  if (!r.ok) throw new Error("CourtListener HTTP " + r.status);
  return await r.json();
}

async function fetchLitigios(dias, soloTk) {
  const d = Math.max(7, Math.min(730, dias || 365));
  const desde = new Date(Date.now() - d * 864e5).toISOString().slice(0, 10);

  // Mercados estadounidenses: son las unicas que pueden aparecer en PACER.
  const US = ["NASDAQ", "NYSE", "AMEX"];
  let objetivo = SC.filter(s => US.indexOf(String(s.tk).split(":")[0]) >= 0);
  // Una ficha de empresa solo necesita la suya: consultar las nueve tarda 12 s.
  if (soloTk) objetivo = objetivo.filter(s => s.tk === soloTk);

  const casos = [];
  const errores = [];
  for (const s of objetivo) {
    // El nombre se recorta a las dos primeras palabras: "Ondas Holdings", no
    // "Ondas Holdings Inc.", que no casa con como lo escriben los tribunales.
    const parte = s.name.split(/\s+/).slice(0, 2).join(" ");
    let j = null;
    try { j = await clBuscar(parte, desde); }
    catch (e) { errores.push(s.name + ": " + (e.message || e)); continue; }
    // Ritmo entre consultas: sin esto se agota el cupo anonimo a mitad de lista.
    await new Promise(r => setTimeout(r, 1200));
    for (const x of (j.results || [])) {
      if (!clEsEmpresa(x.party, parte)) continue;   // descarta homonimos personales
      const nat = clNat(x.suitNature);
      casos.push({
        empresa: s.name, tk: s.tk, nicho: s.niche,
        caso: x.caseName || "—",
        fecha: x.dateFiled || "",
        cerrado: x.dateTerminated || null,
        tribunal: x.court_citation_string || x.court || "",
        num: x.docketNumber || "",
        causa: x.cause || "",
        natCod: nat.cod, natTxt: nat.txt, peso: nat.peso,
        // Contra el Estado: puede ser una disputa por el propio contrato.
        contraEstado: /United States|Department of|Secretary of|Army|Navy|Air Force/i.test(x.caseName || ""),
        url: "https://www.courtlistener.com" + (x.docket_absolute_url || "")
      });
    }
  }

  casos.sort((a, b) => {
    if (a.peso !== b.peso) return b.peso - a.peso;
    return a.fecha < b.fecha ? 1 : -1;
  });
  const materiales = casos.filter(c => c.peso >= 3);
  return { desde: desde, consultadas: objetivo.length, n: casos.length,
           materiales: materiales.length, errores: errores, casos: casos.slice(0, 120) };
}

/* ---------- COBRO EN CRIPTO (Solana / Phantom) ----------
   El usuario paga USDC a TU cartera y pega aqui la firma de la transaccion. El
   Worker la verifica contra la cadena y, si cuadra, emite una clave de acceso.

   Nunca se toca ninguna clave privada ni frase semilla: solo se LEE la cadena, que
   es publica. Tu direccion de cartera va en la variable WALLET_SOL del panel; es
   publica por naturaleza, pero asi la controlas tu y no vive en el repositorio.

   Cuatro comprobaciones, y las cuatro hacen falta:
     1. La transaccion existe, esta finalizada y no fallo.
     2. El dinero llega A TU direccion (no a otra).
     3. El importe alcanza el precio.
     4. Esa firma NO se ha usado antes. Sin esto, uno paga una vez y genera claves
        infinitas reenviando la misma firma.                                      */

const SOL_RPC = "https://api.mainnet-beta.solana.com";
const USDC_MINT = "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v";

async function solRpc(metodo, params) {
  const r = await fetch(SOL_RPC, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ jsonrpc: "2.0", id: 1, method: metodo, params: params })
  });
  if (!r.ok) throw new Error("RPC HTTP " + r.status);
  const j = await r.json();
  if (j.error) throw new Error("RPC: " + (j.error.message || "error"));
  return j.result;
}

/* Cuanto USDC entro en `destino` en esta transaccion. Se mira la diferencia entre
   los saldos de tokens antes y despues: es el metodo que no se puede falsear
   mirando solo las instrucciones.                                               */
function usdcRecibido(tx, destino) {
  const meta = tx && tx.meta;
  if (!meta) return 0;
  const pre = meta.preTokenBalances || [], post = meta.postTokenBalances || [];
  const clave = b => b.accountIndex + ":" + b.mint;
  const antes = {};
  pre.forEach(b => { antes[clave(b)] = Number((b.uiTokenAmount || {}).uiAmount) || 0; });
  let total = 0;
  post.forEach(b => {
    if (b.mint !== USDC_MINT) return;
    if (b.owner !== destino) return;
    const d = (Number((b.uiTokenAmount || {}).uiAmount) || 0) - (antes[clave(b)] || 0);
    if (d > 0) total += d;
  });
  return total;
}

async function verificarPago(env, firma) {
  const sig = String(firma || "").trim();
  if (!/^[1-9A-HJ-NP-Za-km-z]{60,120}$/.test(sig))
    return { error: "Esa no parece una firma de Solana válida." };
  if (!env.RADAR) return { error: "KV no configurado: no puedo evitar pagos repetidos." };
  if (!env.WALLET_SOL) return {
    error: "Falta la variable WALLET_SOL. Ponla en el panel de Cloudflare con tu " +
           "dirección pública de Phantom (Settings → Variables)."
  };

  const precio = Number(env.PRECIO_USDC) || 20;
  const destino = String(env.WALLET_SOL).trim();

  // 4. Antifraude por repeticion: primero, antes que nada.
  const kUsada = "pago:" + sig;
  if (await env.RADAR.get(kUsada))
    return { error: "Esa transacción ya se canjeó. Cada pago genera una sola clave." };

  let tx;
  try {
    tx = await solRpc("getTransaction", [sig, {
      encoding: "jsonParsed", commitment: "finalized", maxSupportedTransactionVersion: 0
    }]);
  } catch (e) { return { error: "No pude consultar la cadena: " + (e.message || e) }; }

  // 1. Existe, finalizada y sin error
  if (!tx) return { error: "No encuentro esa transacción finalizada. Si acabas de pagar, espera un minuto." };
  if (tx.meta && tx.meta.err) return { error: "Esa transacción falló en la cadena." };

  // 2 y 3. Llega a tu direccion y cubre el precio
  const recibido = usdcRecibido(tx, destino);
  if (recibido <= 0) return {
    error: "Esa transacción no envía USDC a la cartera del terminal. Comprueba la dirección."
  };
  if (recibido + 1e-6 < precio) return {
    error: "El importe no llega: recibidos " + recibido.toFixed(2) + " USDC de " + precio + " necesarios."
  };

  // Todo cuadra: se marca la firma y se emite la clave.
  const meses = Math.max(1, Math.floor(recibido / precio));
  const clave = nuevaClave();
  const id = (await sha256(clave)).slice(0, 12);
  const caduca = new Date(Date.now() + meses * 30 * 864e5).toISOString();

  await env.RADAR.put("key:" + (await sha256(clave)), JSON.stringify({
    id: id, plan: "pro", creada: new Date().toISOString(), caduca: caduca,
    nota: "pago " + recibido.toFixed(2) + " USDC"
  }));
  // La firma se marca DESPUES de crear la clave: si algo falla antes, el usuario
  // puede reintentar en vez de perder el pago.
  await env.RADAR.put(kUsada, id);

  return {
    ok: true, clave: clave, plan: "pro", pagado: recibido, meses: meses, caduca: caduca,
    aviso: "Guarda la clave ahora: solo se almacena su hash y no se puede recuperar."
  };
}

/* ---------- ASISTENTE ----------
   No es un modelo "entrenado con el quant": eso envejeceria el dia que lo entrenas.
   Consulta los datos EN VIVO y el modelo solo los redacta.

   Regla de diseno, despues de todo lo que ha aparecido en este proyecto: que NO se
   invente nada. Se le da el contexto, se le prohibe salirse de el, y si el dato no
   esta se le obliga a decirlo. Un asistente que rellena huecos con plausibilidades
   es peor que no tenerlo, porque suena igual de seguro cuando acierta que cuando
   se lo inventa.                                                                 */

const CHAT_MODELOS = [
  "@cf/meta/llama-3.3-70b-instruct-fp8-fast",
  "@cf/meta/llama-3.1-8b-instruct",
  "@cf/mistral/mistral-7b-instruct-v0.2"
];

/* Acciones que el asistente puede pedirle a la interfaz. Se le da una lista cerrada
   y tiene que responder con una linea ACCION: exacta. No se le deja ejecutar codigo
   ni inventarse acciones: si pide una que no esta en la lista, se ignora.        */
const CHAT_ACCIONES = [
  ["ver_inicio",     "ir a la portada"],
  ["ver_contratos",  "ir a contratos del Pentagono y avisos 8-K"],
  ["ver_empresas",   "ir al listado de las 33 empresas"],
  ["ver_apuestas",   "ir a los mercados de Polymarket"],
  ["ver_noticias",   "ir a noticias"],
  ["ver_analisis",   "ir al analisis quant de empresas"],
  ["ver_veredicto",  "ir al veredicto: donde conviene comprar o vender, con posicion, entrada, stop y objetivo"],
  ["ver_oportunidades", "ir a arbitraje y oportunidades"],
  ["ver_simulador",  "ir al simulador de estrategias"],
  ["ver_cartera",    "ir a la calculadora de cuanto apostar"],
  ["ver_metodos",    "ir a la biblioteca de metodos"],
  ["ficha:TICKER",   "abrir la ficha de una empresa, p.ej. ficha:NASDAQ:BYRN"],
  ["cargar_precios", "descargar los precios de las 33 empresas"],
  ["cargar_divisas", "descargar y analizar las 18 divisas (momentum, regimen, cointegracion)"],
  ["buscar_oportunidades", "PEINAR EL TERRENO: cargar lo que falte y revisar empresas, apuestas, divisas y arbitrajes, y contar lo mejor de cada uno. Usala siempre que pidan buscar oportunidades, que mires que hay, o que le eches un vistazo a todo"],
  ["simular",        "lanzar el backtest sobre Polymarket (tarda 1-3 min)"],
  ["simular_divisas","lanzar el backtest sobre divisas"],
  ["prueba_choque",  "lanzar el Monte Carlo contra el azar"],
  ["anotar_papel",   "anotar las senales de hoy en el registro en papel"]
];

const BR = String.fromCharCode(10);

const CHAT_SISTEMA =
  "Eres el asistente de MOR TERMINAL, un terminal de inteligencia financiera sobre " +
  "contratos de defensa de EE.UU., small caps de defensa y mercados de prediccion.\n\n" +
  "REGLAS ABSOLUTAS:\n" +
  "1. Responde SOLO con los datos del CONTEXTO. Si el dato no esta ahi, di " +
  "exactamente: 'Ese dato no lo tengo cargado ahora mismo'. NUNCA lo inventes ni lo " +
  "estimes de memoria.\n" +
  "2. Cita siempre las cifras concretas del contexto. Nada de generalidades.\n" +
  "3. Cuando pregunten que hacer, MOJATE: da una inclinacion clara ('me inclinaria " +
  "por...', 'yo no entraria', 'esperaria') y justificala con UNA cifra del contexto. " +
  "Termina siempre con una frase corta recordando que la decision es suya y que esto " +
  "no es consejo profesional. Nunca digas simplemente que no puedes opinar.\n" +
  "4. No prometas resultados: si te preguntan que va a pasar, di lo que apuntan los " +
  "datos y su limite (probamos las estrategias con 4.010 millones de operaciones " +
  "simuladas y ninguna supero al azar de forma fiable), y aun asi da tu inclinacion.\n" +
  "5. Los cruces por nombre son coincidencias, no hechos: di siempre que hay que " +
  "verificarlos a mano.\n" +
  "6. Responde en espanol llano, breve, sin jerga. Maximo 5 frases salvo que te " +
  "pidan detalle.\n" +
  "7. HORIZONTES CORTOS. Si preguntan que hara el precio en horas o manana, di " +
  "claro que la DIRECCION a ese plazo no se predice, y da en cambio CUANTO se " +
  "mueve normalmente en ese rato, que si esta medido. Nunca des una direccion a " +
  "pocas horas.\n" +
  "8. HASTA CUANDO. Si preguntan cuanto aguantar una posicion, usa el plazo y la " +
  "condicion de salida del bloque VEREDICTO del contexto, con sus cifras. Si ese " +
  "bloque no esta, di que hace falta cargar los precios." + BR + BR +
  "PUEDES MANEJAR EL TERMINAL. Si lo que piden se hace en una pantalla concreta o " +
  "requiere lanzar algo, termina tu respuesta con una linea suelta asi:" + BR +
  "ACCION: nombre_de_la_accion" + BR +
  "Usa SOLO estas acciones, ninguna inventada:" + BR +
  CHAT_ACCIONES.map(function(a){return "  " + a[0] + " = " + a[1]}).join(BR) + BR +
  "Una sola ACCION por respuesta, y solo si aporta. Avisa si lo que lanzas tarda.";

/* Reune el contexto con lo que ya calcula el terminal. Se recorta a proposito: los
   modelos gratuitos tienen ventana corta y un contexto enorme empeora la respuesta. */
/* Que necesita esta pregunta. Barato y explicito: mejor una regla que se lee
   que un clasificador que hay que adivinar. */
function chatIntencion(q, hayEmpresa) {
  const t = " " + String(q || "").toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "") + " ";
  const tiene = re => re.test(t);
  const saludo = /^\s*(hola|buenas|hey|que tal|holi|buenos dias|buenas tardes|buenas noches|gracias|adios|ok|vale)\s*[!?.]*\s*$/i
    .test(String(q || "").trim());
  return {
    saludo: saludo,
    empresa: hayEmpresa,
    // Apuestas: arbitraje, mercados, probabilidades.
    pm: !saludo && (hayEmpresa === null || !hayEmpresa) &&
        tiene(/arbitraje|apuesta|mercado|polymarket|probabilidad|prediccion|cuota|longshot|grupo|cuentas/),
    // Presentaciones a la SEC.
    edgar: !saludo && tiene(/8-k|8k|sec|edgar|presentacion|aviso oficial|comunicado/),
    // Contratos del Pentagono.
    con: !saludo && tiene(/contrato|pentagono|dod|adjudic|licitac|defensa de ee|usaspending/)
  };
}

async function chatContexto(pregunta) {
  const q = String(pregunta || "").toLowerCase();

  /* Todo en PARALELO y con tope de tiempo. En serie tardaba mas de 60 s y la
     peticion moria: cada fuente esperaba a la anterior sin necesidad.
     Si una fuente tarda o falla, se sigue sin ella: mas vale contexto parcial
     que ninguna respuesta.                                                      */
  const limite = (p, seg, siFalla) =>
    Promise.race([
      Promise.resolve(p).catch(() => siFalla),
      new Promise(r => setTimeout(() => r(siFalla), seg * 1000))
    ]);

  const emp = SC.find(s => {
    const n = s.name.toLowerCase(), t = String(s.tk).split(":").pop().toLowerCase();
    return (n.length > 3 && q.includes(n.split(" ")[0].toLowerCase())) || (t.length > 2 && q.includes(t));
  });

  /* Solo se pide lo que la pregunta necesita. Antes se pedia todo siempre y un
     saludo costaba 21 segundos. Si no hay ninguna senal clara se cae al bloque
     de apuestas, que es el nucleo del terminal. */
  const it = chatIntencion(q, !!emp);
  const nada = !it.empresa && !it.pm && !it.edgar && !it.con && !it.saludo;
  const quierePm = it.pm || nada;

  const [px, lit, intra, pmq, ed, con] = await Promise.all([
    emp ? limite(fetchPx(emp.tk.split(":").pop()), 6, null) : null,
    emp ? limite(fetchLitigios(730, emp.tk), 8, null) : null,
    // Barras horarias solo si preguntan por horas: es lo unico que las usa.
    (emp && /\bhora|intradia|hoy mismo|ahora mismo|corto plazo|minutos\b/.test(q))
      ? limite(fetchIntra(emp.tk.split(":").pop()), 6, null) : null,
    quierePm ? limite(fetchPMQ(1), 9, null) : null,
    it.edgar ? limite(fetchEdgar(30), 9, null) : null,
    (it.con || it.empresa) ? limite(fetchContracts(30, 100), 8, null) : null
  ]);

  const partes = [];
  if (emp) {
    partes.push("EMPRESA: " + emp.name + " (" + emp.tk + "), " + emp.country + ", " +
                emp.region + ", nicho: " + emp.niche);
    if (px && px.c && px.c.length) {
      const c = px.c, u = c[c.length - 1];
      const m1 = c.length > 21 ? ((u / c[c.length - 22] - 1) * 100).toFixed(1) : null;
      partes.push("PRECIO: " + u.toFixed(2) + " " + (px.cur || "") +
                  (m1 !== null ? ", " + (m1 >= 0 ? "+" : "") + m1 + "% en el ultimo mes" : ""));
    } else partes.push("PRECIO: no disponible ahora mismo");
    if (intra && isFinite(intra.sigmaBarra)) {
      const s8 = intra.sigmaBarra * Math.sqrt(8);
      partes.push("MOVIMIENTO EN 8 HORAS (medido sobre " + intra.barras + " barras horarias): " +
        "se mueve +-" + (s8 * 100).toFixed(2) + "% dos de cada tres veces, y +-" +
        (1.96 * s8 * 100).toFixed(2) + "% casi siempre. El mayor salto real de 8 horas del ultimo mes fue " +
        (intra.peor8 * 100).toFixed(2) + "%. Esto es CUANTO se mueve, no hacia donde.");
    }
    if (lit && lit.casos) {
      partes.push("PLEITOS (2 anos): " + (lit.casos.length
        ? lit.casos.slice(0, 3).map(c => c.fecha + " " + c.caso + " [" + c.natTxt + "]").join(" | ")
        : "ninguno"));
    }
  }

  if (pmq) {
    const ops = (pmq.groups || []).filter(g => g.net > 0).slice(0, 4);
    partes.push("ARBITRAJE HOY (" + ops.length + " con ventaja neta): " + (ops.length
      ? ops.map(g => g.ev + " suma " + g.sum.toFixed(4) + " (neto " +
          (g.net * 100).toFixed(2) + "%, " + g.side + ")").join(" | ")
      : "ninguno cubre costes"));
    if ((pmq.mono || []).length)
      partes.push("MONOTONIA VIOLADA: " + pmq.mono.slice(0, 2).map(g =>
        g.ev + ": " + g.caro + " no puede superar a " + g.barato).join(" | "));
  } else partes.push("ARBITRAJE: no se pudo consultar ahora mismo");

  // Mercados que encajan con la pregunta.
  if (pmq && Array.isArray(pmq.markets)) {
    const sinAcentos = t => String(t || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    // Sinonimos minimos castellano -> ingles, que es el idioma de los mercados.
    const SIN = { tipos: "rate", tipo: "rate", bajar: "cut", baje: "cut", bajen: "cut", subir: "hike",
                  suba: "hike", elecciones: "election", eleccion: "election", guerra: "war", paz: "ceasefire",
                  alto: "ceasefire", fuego: "ceasefire", petroleo: "oil", oro: "gold", presidente: "president",
                  gane: "win", ganar: "win", gana: "win", campeon: "champion", precio: "price",
                  septiembre: "september", octubre: "october", noviembre: "november", diciembre: "december",
                  enero: "january", febrero: "february", marzo: "march", abril: "april", mayo: "may",
                  junio: "june", julio: "july", agosto: "august" };
    const PARA = new Set(["mercado", "market", "entro", "entrar", "apuesta", "apostar", "compro", "comprar",
                          "vender", "vendo", "sobre", "para", "esta", "este", "esto", "hago", "debo",
                          "que", "con", "del", "las", "los", "una", "uno", "the", "will", "and", "para",
                          "hay", "como", "cual", "cuanto", "donde", "cuando", "puede", "pueden"]);
    const pal = sinAcentos(q).split(/[^a-z0-9]+/).filter(x => x.length >= 3 && !PARA.has(x));
    const claves = [];
    pal.forEach(x => { claves.push(x); if (SIN[x]) claves.push(SIN[x]); });
    if (claves.length) {
      const punt = pmq.markets.map(m => {
        const t = sinAcentos((m.q || "") + " " + (m.ev || ""));
        let s = 0; claves.forEach(k => { if (t.includes(k)) s += (k.length >= 5 ? 2 : 1); });
        return [s, m];
      }).filter(x => x[0] >= 2).sort((a, b) => b[0] - a[0]).slice(0, 3);
      if (punt.length) partes.push("MERCADOS QUE ENCAJAN CON LA PREGUNTA: " + punt.map(([s, m]) =>
        (m.q || "") + (m.ev && m.ev !== m.q ? " [" + m.ev + "]" : "") +
        ": precio " + (m.p * 100).toFixed(1) + "%" +
        (typeof m.fair === "number" ? ", justo " + (m.fair * 100).toFixed(1) + "%" : "") +
        (typeof m.spreadRel === "number" ? ", spread " + (m.spreadRel * 100).toFixed(0) + "%" : "") +
        (typeof m.days === "number" ? ", " + Math.round(m.days) + " dias" : "")
      ).join(" | "));
    }
  }

  if (ed) {
    partes.push("AVISOS 8-K (30 dias): " + ed.n + " presentaciones, " + ed.descartadas +
      " descartadas por sector. Cruces con el universo: " + (ed.cruces.length
        ? ed.cruces.map(x => x.universo + " el " + x.fecha).join(", ") : "ninguno") +
      ". Candidatas nuevas: " + (ed.candidatas.length
        ? ed.candidatas.slice(0, 3).map(x => x.nombre + " (" + x.sector + ")").join(", ")
        : "ninguna"));
  }

  if (con) {
    const radar = con.filter(c => !c.prime);
    partes.push("CONTRATOS DoD (30 dias): " + con.length + " adjudicados, " + radar.length +
      " fuera de los gigantes. Mayor fuera de gigantes: " +
      (radar[0] ? radar[0].name + " " + fmtM(radar[0].amount) : "n/d"));
  }

  partes.push("UNIVERSO: " + SC.length + " small caps de defensa seguidas.");
  partes.push("AVISO PERMANENTE: ninguna estrategia direccional del terminal ha " +
              "superado al azar en 4.010 millones de operaciones simuladas.");
  return partes.join(String.fromCharCode(10));
}

async function chatResponder(env, pregunta, estado, historia) {
  const p = String(pregunta || "").trim().slice(0, 400);
  const est = String(estado || "").trim().slice(0, 1500);
  /* Historia: pares "tu|ia" separados por barra vertical doble, ya recortados
     por el cliente. Se validan aqui igualmente. */
  let hist = [];
  try {
    hist = String(historia || "").split("||").filter(Boolean).slice(-6).map(x => {
      const i = x.indexOf("|");
      const rol = x.slice(0, i) === "ia" ? "assistant" : "user";
      return { role: rol, content: x.slice(i + 1).slice(0, 400) };
    });
  } catch (e) { hist = []; }
  if (!p) return { error: "pregunta vacia" };
  if (!env.AI) return {
    error: "Falta el binding AI. En el panel de Cloudflare: Settings -> Bindings -> " +
           "Add -> Workers AI, con nombre AI."
  };

  const ctx = await chatContexto(p);
  const mensajes = [
    { role: "system", content: CHAT_SISTEMA },
    ...hist,
    { role: "user", content: "CONTEXTO (datos reales de ahora mismo):\n" + ctx +
                             (est ? "\n\nLO QUE EL USUARIO TIENE EN PANTALLA:\n" + est : "") +
                             "\n\nPREGUNTA: " + p }
  ];

  /* Si la pregunta nombra una empresa o pide algo inequivoco, la accion la
     decide una regla. El modelo solo elige cuando no esta claro. */
  function accionPorRegla(txt) {
    const t = " " + String(txt || "").toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "") + " ";
    const e = SC.find(s => {
      const nom = s.name.toLowerCase().split(" ")[0];
      const tk = String(s.tk).split(":").pop().toLowerCase();
      return (nom.length > 3 && t.indexOf(nom) >= 0) || (tk.length > 2 && t.indexOf(" " + tk + " ") >= 0);
    });
    if (e) return "ficha:" + e.tk;
    if (/busca|buscar|peina|echa un vistazo|que hay|encuentra|oportunidad|revisa todo|mira todo|escanea/.test(t)) return "buscar_oportunidades";
    if (/\bveredicto|que compro|que vendo|donde entro|hasta cuando|stop|objetivo|posicion\b/.test(t)) return "ver_veredicto";
    if (/\barbitraje|cuentas que no cuadran|sobra dinero\b/.test(t)) return "ver_oportunidades";
    if (/\bdivisa|forex|euro|dolar|yen|par de\b/.test(t)) return "ver_analisis";
    if (/\bsimula|backtest|funciona|acierto|t-stat|azar\b/.test(t)) return "ver_simulador";
    if (/\bcontrato|pentagono|adjudic\b/.test(t)) return "ver_contratos";
    if (/\bnoticia|titular|prensa\b/.test(t)) return "ver_noticias";
    return null;
  }
  const accionRegla = accionPorRegla(p);
  const validas = CHAT_ACCIONES.map(a => a[0]);
  let ultimo = "";
  for (const modelo of CHAT_MODELOS) {
    try {
      // Tope por modelo: si uno se atasca se pasa al siguiente en vez de morir.
      const r = await Promise.race([
        env.AI.run(modelo, { messages: mensajes, max_tokens: 380 }),
        new Promise((_, rej) => setTimeout(() => rej(new Error("modelo lento")), 15000))
      ]);
      let txt = ((r && (r.response || r.result || "")) + "").trim();
      if (!txt) { ultimo = "respuesta vacia"; continue; }

      // Se extrae la accion y se VALIDA contra la lista cerrada. Si el modelo se
      // inventa una, se descarta en silencio: la respuesta sigue siendo util.
      let accion = null;
      const m = txt.match(/^ACCION:\s*(\S+)\s*$/mi);
      if (m) {
        const a = m[1].trim();
        const base = a.split(":")[0];
        if (validas.indexOf(a) >= 0 || (base === "ficha" && a.length > 6)) accion = a;
        txt = txt.replace(m[0], "").trim();
      }
      // La regla manda: solo se usa la del modelo si no habia regla aplicable.
      return { respuesta: txt, accion: accionRegla || accion, modelo: modelo, contexto: ctx };
    } catch (e) { ultimo = String(e && e.message || e); }
  }
  return { error: "Ningun modelo respondio (" + ultimo + ")", contexto: ctx };
}

/* ---------- GRAFO DE RESTRICCIONES LOGICAS ENTRE EVENTOS ----------
   Polymarket trata cada evento por separado, asi que nadie comprueba si mercados
   de eventos DISTINTOS se contradicen entre si. "Cae el regimen irani antes de
   2027" implica "cambio de liderazgo en Iran antes de 2027": la primera nunca
   puede cotizar mas cara que la segunda.

   REPARTO DE TRABAJO, y es lo que hace esto honesto:
     La IA PROPONE la relacion logica. La ARITMETICA la juzga.

   El modelo solo responde una de cuatro etiquetas. Nunca estima probabilidades,
   nunca predice. Si alucina una relacion, el peor caso es que la comprobacion no
   encuentre violacion y no pase nada: NO puede inventarse una ventaja, porque la
   ventaja la calcula la aritmetica. Reconocer implicacion entre dos frases es la
   unica tarea donde un modelo de lenguaje no puede mentirte de forma peligrosa.  */

/* Pregunta de control para EXCLUYE, formulada al reves a proposito: si el modelo
   razona, "no pueden pasar las dos" y "pueden pasar las dos" deben contradecirse.
   Si contesta que si a ambas, no razona. */
const REL_RETO =
  "Te doy dos afirmaciones sobre el futuro. Responde UNA SOLA palabra:\n" +
  "  SI   si es posible que AMBAS resulten ciertas.\n" +
  "  NO   si es imposible que ambas sean ciertas a la vez.\n" +
  "Piensa si hay algun escenario, aunque sea poco probable, en que las dos se " +
  "cumplan. Fijate en las FECHAS: plazos distintos casi siempre permiten que ambas " +
  "ocurran. Ante la duda, SI.";

/* Horizonte temporal de una pregunta. Dos afirmaciones con plazos distintos casi
   nunca son excluyentes: es lo que fallaba en ambos falsos positivos. */
const REL_MESES = { january:1,february:2,march:3,april:4,may:5,june:6,july:7,
                    august:8,september:9,october:10,november:11,december:12 };
function relHorizonte(q) {
  const t = String(q || "").toLowerCase();
  const anio = (t.match(/\b(20\d\d)\b/) || [])[1];
  const mes = (t.match(/\b(january|february|march|april|may|june|july|august|september|october|november|december)\b/) || [])[1];
  if (!anio && !mes) return null;
  return (anio ? Number(anio) * 12 : 0) + (mes ? REL_MESES[mes] : 0);
}

const REL_SISTEMA =
  "Eres un clasificador de logica. Te doy dos afirmaciones sobre el futuro (A y B).\n" +
  "Responde UNA SOLA palabra, sin explicar nada:\n" +
  "  IMPLICA_AB  si siempre que A sea cierta, B tiene que ser cierta.\n" +
  "  IMPLICA_BA  si siempre que B sea cierta, A tiene que ser cierta.\n" +
  "  EXCLUYE     si A y B no pueden ser ciertas a la vez.\n" +
  "  NINGUNA     en cualquier otro caso, incluido si solo estan relacionadas por tema.\n" +
  "Se ESTRICTO: 'relacionadas' o 'parecidas' NO es implicacion. Ante la duda, NINGUNA.";

/* Palabras que no distinguen nada: sin quitarlas, "will the" empareja todo. */
/* Enfrentamientos directos: un partido no implica logicamente otro, son sucesos
   independientes por construccion. Solo generan ruido en el emparejador y gastan
   consultas al modelo para nada.                                               */
const REL_DEPORTE = /vs.?| v.? |bo[1-9]|match|game [0-9]|playoffs?|winner.*(cup|league|open|series|championship|tournament)|counter-?strike|dota|league of legends|valorant|nba|nfl|mlb|nhl|ufc|atp|wta/i;

const REL_VACIAS = new Set(("will the be by on in of a an and or to for at from is are was " +
  "before after during any more than what which who when how much many new next this that " +
  "there their its it his her they them he she we you i us our").split(" "));

function relClaves(q) {
  const t = String(q || "").toLowerCase().replace(/[^a-z0-9 ]/g, " ").split(/\s+/);
  const out = new Set();
  for (const w of t) if (w.length >= 4 && !REL_VACIAS.has(w)) out.add(w);
  return out;
}

/* Candidatos: mercados de EVENTOS DISTINTOS que comparten entidades. Sin este
   filtro serian 400x400 = 160.000 pares y no cabria ni en tiempo ni en cuota.   */
/* Amplitud del barrido. Estricto encuentra pocos pares pero casi todos tienen
   sentido; amplio encuentra muchos mas pero la mayoria son ruido que gasta
   consultas. Como la cache es permanente, un barrido amplio se paga una vez.   */
const REL_AMPLITUD = {
  estricto: { minComunes: 2, minFuerza: 5.0, maxMercados: 140 },
  medio:    { minComunes: 2, minFuerza: 3.5, maxMercados: 180 },
  amplio:   { minComunes: 1, minFuerza: 2.0, maxMercados: 240 }
};

function relCandidatos(markets, maxPares, amplitud) {
  const A = REL_AMPLITUD[amplitud] || REL_AMPLITUD.estricto;
  const vivos = markets.filter(m => m.live && m.liq > 3000 && m.p > 0.01 && m.p < 0.99
                                    && !REL_DEPORTE.test(m.q))
                       .slice(0, A.maxMercados)
                       .map(m => ({ m: m, k: relClaves(m.q) }));

  /* Rareza de cada palabra. Sin esto el emparejador se llena de partidas de
     Counter-Strike, que comparten "counter", "strike" e "iem" y se emparejan entre
     si sin tener nada que ver. Una palabra que sale en 30 mercados es plantilla,
     no entidad: solo cuentan las que aparecen en pocos.                         */
  const frec = {};
  vivos.forEach(v => v.k.forEach(w => { frec[w] = (frec[w] || 0) + 1; }));
  const peso = w => {
    const f = frec[w] || 1;
    if (f > vivos.length * 0.12) return 0;      // plantilla: no cuenta
    return Math.log(vivos.length / f);          // cuanto mas rara, mas pesa
  };

  const pares = [];
  for (let i = 0; i < vivos.length; i++) {
    for (let j = i + 1; j < vivos.length; j++) {
      const a = vivos[i], b = vivos[j];
      if (a.m.evSlug && a.m.evSlug === b.m.evSlug) continue;   // mismo evento: ya cubierto
      let comunes = 0, fuerza = 0;
      for (const w of a.k) if (b.k.has(w)) { const p = peso(w); if (p > 0) { comunes++; fuerza += p; } }
      if (comunes < A.minComunes || fuerza < A.minFuerza) continue;
      /* Dos preguntas casi identicas salvo por los numeros son tramos del mismo
         indicador (rangos de tuits, de temperatura, de precio). Eso es exclusion,
         no implicacion, y es donde el modelo mas se equivoca. Fuera.            */
      const limpia = q => String(q).toLowerCase().replace(/[0-9]+/g, "#").replace(/[^a-z# ]/g, "").trim();
      if (limpia(a.m.q) === limpia(b.m.q)) continue;
      pares.push({ a: a.m, b: b.m, comunes: comunes, fuerza: fuerza });
    }
  }
  pares.sort((x, y) => (y.fuerza - x.fuerza) || ((y.a.liq + y.b.liq) - (x.a.liq + x.b.liq)));
  return pares.slice(0, maxPares);
}

/* Coherencia al invertir: si el modelo dice "A implica B", al preguntarle (B,A)
   TIENE que decir "B es implicada por A". Si contesta lo mismo en ambos ordenes no
   esta razonando, esta reconociendo un patron, y su etiqueta no vale. Cuesta el
   doble de consultas -que se cachean- y mata la mayoria de falsos positivos.    */
function relInversa(r) {
  if (r === "IMPLICA_AB") return "IMPLICA_BA";
  if (r === "IMPLICA_BA") return "IMPLICA_AB";
  return r;   // EXCLUYE y NINGUNA son simetricas
}

async function relClasificar(env, a, b) {
  // La relacion logica entre dos preguntas NO cambia con el tiempo: se cachea.
  /* La version va en la clave: al endurecer las comprobaciones hay que invalidar
     lo cacheado, o las etiquetas equivocadas de antes se seguirian sirviendo sin
     pasar por las guardas nuevas. v2 = con guardas de EXCLUYE. */
  const clave = "rel:v2:" + (await sha256(a.q + "||" + b.q)).slice(0, 24);
  if (env.RADAR) {
    const c = await env.RADAR.get(clave);
    if (c) return { rel: c, cache: true };
  }
  if (!env.AI) return { rel: "NINGUNA", error: "sin binding AI" };

  const mensajes = [
    { role: "system", content: REL_SISTEMA },
    { role: "user", content: "A: " + a.q + BR + "B: " + b.q }
  ];
  let rel = "NINGUNA";
  for (const modelo of CHAT_MODELOS) {
    try {
      const r = await Promise.race([
        env.AI.run(modelo, { messages: mensajes, max_tokens: 12 }),
        new Promise((_, rj) => setTimeout(() => rj(new Error("lento")), 12000))
      ]);
      const t = ((r && (r.response || r.result || "")) + "").toUpperCase();
      const m = t.match(/IMPLICA_AB|IMPLICA_BA|EXCLUYE|NINGUNA/);
      if (m) { rel = m[0]; break; }
    } catch (e) {}
  }
  // Segunda pasada con el orden invertido. Solo se acepta si son coherentes.
  if (rel !== "NINGUNA") {
    let rel2 = "NINGUNA";
    const men2 = [
      { role: "system", content: REL_SISTEMA },
      { role: "user", content: "A: " + b.q + BR + "B: " + a.q }
    ];
    for (const modelo of CHAT_MODELOS) {
      try {
        const r = await Promise.race([
          env.AI.run(modelo, { messages: men2, max_tokens: 12 }),
          new Promise((_, rj) => setTimeout(() => rj(new Error("lento")), 12000))
        ]);
        const t = ((r && (r.response || r.result || "")) + "").toUpperCase();
        const mm = t.match(/IMPLICA_AB|IMPLICA_BA|EXCLUYE|NINGUNA/);
        if (mm) { rel2 = mm[0]; break; }
      } catch (e) {}
    }
    if (rel2 !== relInversa(rel)) rel = "NINGUNA";   // incoherente -> se descarta
  }

  /* Guardas propias de EXCLUYE, que la comprobacion anterior no examina por ser
     simetrica. Aqui se concentraban TODOS los falsos positivos. */
  if (rel === "EXCLUYE") {
    // 1. Plazos distintos: "antes de septiembre" y "antes de marzo de 2027" pueden
    //    cumplirse las dos. Es exactamente el caso que se colaba.
    const ha = relHorizonte(a.q), hb = relHorizonte(b.q);
    if (ha !== null && hb !== null && ha !== hb) rel = "NINGUNA";
  }
  if (rel === "EXCLUYE") {
    // 2. Pregunta de control al reves. Si dice que SI pueden darse ambas, se cae.
    let reto = "SI";
    const men3 = [
      { role: "system", content: REL_RETO },
      { role: "user", content: "1: " + a.q + BR + "2: " + b.q }
    ];
    for (const modelo of CHAT_MODELOS) {
      try {
        const r = await Promise.race([
          env.AI.run(modelo, { messages: men3, max_tokens: 8 }),
          new Promise((_, rj) => setTimeout(() => rj(new Error("lento")), 12000))
        ]);
        const t = ((r && (r.response || r.result || "")) + "").toUpperCase();
        if (/\bNO\b/.test(t)) { reto = "NO"; break; }
        if (/\bS[IÍ]\b|\bYES\b/.test(t)) { reto = "SI"; break; }
      } catch (e) {}
    }
    if (reto !== "NO") rel = "NINGUNA";
  }

  if (env.RADAR) await env.RADAR.put(clave, rel, { expirationTtl: 2592000 });
  return { rel: rel, cache: false };
}

/* La aritmetica. Aqui no hay modelo ni criterio: o los numeros violan la relacion
   o no la violan.                                                               */
function relVerificar(rel, a, b) {
  const coste = (a.spread + b.spread) / 2;
  if (rel === "IMPLICA_AB") {
    // A implica B  =>  p(A) <= p(B)
    const v = a.p - b.p;
    if (v > 0) return { viola: true, bruto: v, coste: coste, neto: v - coste,
      dice: "«" + a.q.slice(0, 60) + "» implica «" + b.q.slice(0, 60) + "», asi que no puede cotizar mas cara",
      accion: "vender A (" + (a.p * 100).toFixed(1) + "%) y comprar B (" + (b.p * 100).toFixed(1) + "%)" };
  } else if (rel === "IMPLICA_BA") {
    const v = b.p - a.p;
    if (v > 0) return { viola: true, bruto: v, coste: coste, neto: v - coste,
      dice: "«" + b.q.slice(0, 60) + "» implica «" + a.q.slice(0, 60) + "», asi que no puede cotizar mas cara",
      accion: "vender B (" + (b.p * 100).toFixed(1) + "%) y comprar A (" + (a.p * 100).toFixed(1) + "%)" };
  } else if (rel === "EXCLUYE") {
    // No pueden ser ciertas a la vez  =>  p(A) + p(B) <= 1
    const v = a.p + b.p - 1;
    if (v > 0) return { viola: true, bruto: v, coste: coste, neto: v - coste,
      dice: "no pueden pasar las dos, y juntas suman " + ((a.p + b.p) * 100).toFixed(1) + "%",
      accion: "vender las dos" };
  }
  return { viola: false };
}

async function fetchRelaciones(env, maxPares, desde, amplitud) {
  /* Tope por peticion: cada par son DOS consultas al modelo (ida y vuelta para la
     comprobacion de coherencia) y Cloudflare gratis corta en 50 subpeticiones. Con
     18 pares son 36 llamadas mas las 2 de datos: cabe justo.                     */
  const N = Math.max(4, Math.min(18, maxPares || 12));
  const off = Math.max(0, desde || 0);
  const datos = await fetchPMQ(2);
  /* Se piden mas candidatos de los que se van a mirar y se avanza con un cursor.
     Como las relaciones se cachean para siempre -la logica entre dos preguntas no
     cambia- cada pasada cubre terreno NUEVO y el grafo se va llenando solo.      */
  const todos = relCandidatos(datos.markets, off + N + 2000, amplitud);
  const pares = todos.slice(off, off + N);

  const hallazgos = [], revisados = [];
  let deCache = 0, consultas = 0;

  for (const p of pares) {
    const { rel, cache } = await relClasificar(env, p.a, p.b);
    if (cache) deCache++; else consultas++;
    revisados.push({ a: p.a.q.slice(0, 70), b: p.b.q.slice(0, 70), rel: rel, comunes: p.comunes });
    if (rel === "NINGUNA") continue;
    const v = relVerificar(rel, p.a, p.b);
    if (!v.viola) continue;
    hallazgos.push({
      rel: rel, dice: v.dice, accion: v.accion,
      explica: rel === "EXCLUYE"
        ? "La IA propone que NO pueden ser ciertas las dos a la vez."
        : "La IA propone que la primera implica la segunda.",
      comprobar: "Lee ambas preguntas: ¿de verdad no pueden pasar las dos? Ojo con " +
                 "vueltas electorales, ventanas de fechas distintas y fuentes de resolucion distintas.",
      bruto: v.bruto, coste: v.coste, neto: v.neto,
      a: { q: p.a.q, p: p.a.p, url: p.a.url, ev: p.a.ev, liq: p.a.liq },
      b: { q: p.b.q, p: p.b.p, url: p.b.url, ev: p.b.ev, liq: p.b.liq }
    });
  }
  hallazgos.sort((x, y) => y.neto - x.neto);

  // Los hallazgos se guardan: encontrar una contradiccion y perderla al recargar
  // no sirve de nada cuando el barrido dura dias.
  if (env.RADAR) {
    for (const h of hallazgos) {
      const k = "rel:hallazgo:" + (await sha256(h.a.q + "||" + h.b.q)).slice(0, 20);
      await env.RADAR.put(k, JSON.stringify(Object.assign({ visto: new Date().toISOString() }, h)),
        { expirationTtl: 604800 });
    }
  }

  return {
    ts: new Date().toISOString(),
    desde: off, siguiente: off + N, totalCandidatos: todos.length,
    amplitud: amplitud || "estricto",
    paresCandidatos: pares.length, consultasIA: consultas, deCache: deCache,
    hallazgos: hallazgos, revisados: revisados.slice(0, 30),
    aviso: "PROPUESTAS, no confirmaciones. La IA solo propone la relacion logica y la " +
           "aritmetica la comprueba, asi que la ventaja nunca se la inventa el modelo. Pero " +
           "la aritmetica es tan buena como la logica que recibe: en pruebas, un modelo " +
           "marco como excluyentes \"gana las elecciones de Brasil\" y \"queda segundo en la " +
           "PRIMERA VUELTA\", y no lo son porque hay segunda vuelta. Lee las dos preguntas " +
           "enteras antes de operar."
  };
}

/* AGENTE DE BARRIDO. El cron avanza un trozo cada dia y guarda el cursor. Como
   las relaciones se cachean, en una semana el grafo cubre miles de parejas sin
   pasarse nunca del limite de subpeticiones de una sola peticion.               */
async function relAgente(env) {
  if (!env.RADAR) return { note: "KV no configurado" };
  const cur = Number(await env.RADAR.get("rel:cursor")) || 0;
  const amp = (await env.RADAR.get("rel:amplitud")) || "estricto";
  const r = await fetchRelaciones(env, 18, cur, amp);

  // Al llegar al final se vuelve a empezar: los mercados cambian y hay pares nuevos.
  const sig = (r.siguiente >= r.totalCandidatos) ? 0 : r.siguiente;
  await env.RADAR.put("rel:cursor", String(sig));

  // Solo se avisa de lo NUEVO, o el cron repetiria la misma alerta cada dia.
  const nuevos = [];
  for (const h of r.hallazgos) {
    const k = "rel:avisado:" + (await sha256(h.a.q + "||" + h.b.q)).slice(0, 20);
    if (await env.RADAR.get(k)) continue;
    await env.RADAR.put(k, "1", { expirationTtl: 2592000 });
    nuevos.push(h);
  }

  if (nuevos.length) {
    const li = nuevos.slice(0, 4).map(h =>
      "- +" + (h.neto * 100).toFixed(2) + "% neto" + BR +
      "  " + (h.a.p * 100).toFixed(1) + "% " + h.a.q.slice(0, 70) + BR +
      "  " + (h.b.p * 100).toFixed(1) + "% " + h.b.q.slice(0, 70));
    await sendTelegram(env,
      "MOR TERMINAL - " + nuevos.length + " contradiccion(es) entre mercados:" + BR +
      li.join(BR) + BR +
      "PROPUESTAS, no confirmaciones: lee las dos preguntas enteras antes de operar.");
  }
  return { cursor: cur, siguiente: sig, total: r.totalCandidatos,
           revisados: r.paresCandidatos, hallazgos: r.hallazgos.length, avisados: nuevos.length };
}

/* Todo lo que los agentes han encontrado, aunque fuera hace dias. */
async function relAcumulado(env) {
  if (!env.RADAR) return { hallazgos: [], nota: "KV no configurado" };
  const l = await env.RADAR.list({ prefix: "rel:hallazgo:", limit: 200 });
  const out = [];
  for (const k of l.keys) {
    const v = await env.RADAR.get(k.name, "json");
    if (v) out.push(v);
  }
  out.sort((a, b) => b.neto - a.neto);
  // cuantas relaciones lleva clasificadas el grafo
  const rel = await env.RADAR.list({ prefix: "rel:", limit: 1000 });
  const clasificadas = rel.keys.filter(k => k.name.indexOf("rel:v2:") === 0).length;
  return { hallazgos: out, clasificadas: clasificadas };
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


/* ---------- Encogimiento Beta-Binomial (Bayes empirico) ----------
   La tasa de acierto observada se mezcla con una previa Beta(a,b). Con pocos
   casos el resultado se queda pegado a la previa; segun llegan datos se
   despega. Es lo que evita anunciar un 75% de acierto con cuatro operaciones.
   Se devuelve tambien el intervalo creible al 90%, que con n pequeno sale
   ancho, y eso es exactamente la informacion util.                            */
function betaEncoger(aciertos, total, aPrev, bPrev) {
  const a = aciertos + (aPrev || 2), b = (total - aciertos) + (bPrev || 2);
  const media = a / (a + b);
  // Desviacion de la Beta; con a+b grande la normal aproxima de sobra.
  const va = (a * b) / ((a + b) * (a + b) * (a + b + 1));
  const sd = Math.sqrt(va);
  return {
    n: total, crudo: total ? aciertos / total : null, media: media,
    lo: Math.max(0, media - 1.645 * sd), hi: Math.min(1, media + 1.645 * sd),
    // Cuanto pesa lo observado frente a la previa: 0 = todo previa, 1 = todo datos.
    peso: total / (total + (aPrev || 2) + (bPrev || 2))
  };
}

/* ---------- Lambda que se va aprendiendo ----------
   El valor justo usaba 0,183 de la literatura, pero los mercados resueltos del
   propio terminal apuntaban al signo contrario. Ni ignorarlo ni darle la vuelta
   por una muestra corta: se encoge. Con pocos casos manda la literatura; con
   muchos, manda lo propio. N_PREVIA es cuantos casos propios harian falta para
   empatar con la literatura, y se fija alto a proposito porque la literatura
   viene de 291.000 contratos.                                                 */
const LAMBDA_N_PREVIA = 150;
function lambdaAprendida(lamPropia, nPropia) {
  if (lamPropia === null || !isFinite(lamPropia) || !nPropia) {
    return { lam: LAMBDA_LIT, n: 0, peso: 0, fuente: "literatura" };
  }
  const peso = nPropia / (nPropia + LAMBDA_N_PREVIA);
  return {
    lam: (1 - peso) * LAMBDA_LIT + peso * lamPropia,
    n: nPropia, peso: peso, propia: lamPropia,
    fuente: peso < 0.15 ? "literatura" : (peso > 0.6 ? "propia" : "mezcla")
  };
}

/* ---------- Calibracion por tramos (PAVA / regresion isotonica) ----------
   Pool Adjacent Violators: la version de scikit-learn (BSD-3). Ordena por
   probabilidad anunciada y fuerza que la frecuencia observada no baje nunca al
   subir el precio, promediando los tramos que se contradicen. Sirve para ver
   DONDE falla el mercado, no para recalibrar: con esta muestra recalibrar seria
   sobreajustar, y asi se dice en la interfaz.                                 */
function pava(ys, ws) {
  const y = ys.slice(), wgt = (ws || ys.map(() => 1)).slice();
  const val = [], pes = [], tam = [];
  for (let i = 0; i < y.length; i++) {
    let v = y[i], p = wgt[i], t = 1;
    while (val.length && val[val.length - 1] > v) {
      const v0 = val.pop(), p0 = pes.pop(), t0 = tam.pop();
      v = (v0 * p0 + v * p) / (p0 + p); p = p0 + p; t = t0 + t;
    }
    val.push(v); pes.push(p); tam.push(t);
  }
  const out = [];
  for (let i = 0; i < val.length; i++) for (let j = 0; j < tam[i]; j++) out.push(val[i]);
  return out;
}

/* ---------- Descomposicion de Murphy del Brier ----------
   Brier = fiabilidad - resolucion + incertidumbre. Responde a algo que un Brier
   suelto no responde: si el numero es malo porque el mercado esta descalibrado
   -fiabilidad alta, se arregla- o porque el suceso es intrinsecamente
   impredecible -resolucion baja, no se arregla-.                              */
function murphy(ps, os) {
  const N = ps.length;
  if (!N) return null;
  const base = os.reduce((a, b) => a + b, 0) / N;
  // Diez tramos de ancho fijo; con pocos datos, mas tramos serian ruido.
  const T = 10, sum = [], cnt = [], acc = [];
  for (let i = 0; i < T; i++) { sum.push(0); cnt.push(0); acc.push(0); }
  for (let i = 0; i < N; i++) {
    const k = Math.min(T - 1, Math.floor(ps[i] * T));
    sum[k] += ps[i]; cnt[k]++; acc[k] += os[i];
  }
  let fiab = 0, reso = 0;
  const tramos = [];
  for (let k = 0; k < T; k++) {
    if (!cnt[k]) continue;
    const pMed = sum[k] / cnt[k], oMed = acc[k] / cnt[k];
    fiab += cnt[k] * (pMed - oMed) * (pMed - oMed);
    reso += cnt[k] * (oMed - base) * (oMed - base);
    tramos.push({ tramo: k * 10, n: cnt[k], anunciado: pMed, observado: oMed });
  }
  return {
    fiabilidad: fiab / N, resolucion: reso / N, incertidumbre: base * (1 - base),
    base: base, tramos: tramos
  };
}

/* ---------- Lo que el terminal ha aprendido hasta hoy ---------- */
async function aprendizaje(env) {
  if (!env.RADAR) return { error: "KV no configurado" };
  const lista = await env.RADAR.list({ prefix: "paper:done:", limit: 1000 });
  const porTipo = {}, ps = [], os = [];
  let total = 0;

  for (const k of lista.keys) {
    const p = await env.RADAR.get(k.name, "json");
    if (!p || typeof p.r !== "number") continue;
    total++;
    const t = p.tipo || "otro";
    if (!porTipo[t]) porTipo[t] = { n: 0, aciertos: 0, sumR: 0 };
    porTipo[t].n++; porTipo[t].sumR += p.r;
    if (p.r > 0) porTipo[t].aciertos++;
    // Para calibracion: probabilidad que implicaba la senal y lo que paso.
    if (typeof p.p === "number" && (p.o === 0 || p.o === 1)) {
      const pr = p.senal === "SI" ? p.p : 1 - p.p;
      const ob = p.senal === "SI" ? p.o : 1 - p.o;
      ps.push(pr); os.push(ob);
    }
  }

  const tipos = {};
  Object.keys(porTipo).forEach(t => {
    const v = porTipo[t];
    tipos[t] = Object.assign(betaEncoger(v.aciertos, v.n, 2, 2),
      { retornoMedio: v.n ? v.sumR / v.n : null });
  });

  // Lambda aprendida a partir de la calibracion propia.
  let lamPropia = null;
  if (ps.length >= 12) {
    // Lambda que mejor explica la diferencia entre lo anunciado y lo observado.
    let mejor = null, mejorErr = Infinity;
    for (let l = -1.2; l <= 1.2; l += 0.01) {
      let e = 0;
      for (let i = 0; i < ps.length; i++) {
        const aj = nCdf(nPpf(Math.min(0.999, Math.max(0.001, ps[i]))) - l);
        e += (aj - os[i]) * (aj - os[i]);
      }
      if (e < mejorErr) { mejorErr = e; mejor = l; }
    }
    lamPropia = mejor;
  }

  // Calibracion ordenada por probabilidad anunciada, para el PAVA.
  let iso = null;
  if (ps.length >= 12) {
    const idx = ps.map((p, i) => i).sort((a, b) => ps[a] - ps[b]);
    const yOrd = idx.map(i => os[i]);
    const aj = pava(yOrd);
    iso = idx.map((i, j) => ({ p: ps[i], ajustado: aj[j] }))
             .filter((x, j) => j % Math.max(1, Math.floor(idx.length / 12)) === 0);
  }

  return {
    ts: new Date().toISOString(),
    totalLiquidadas: total,
    tipos: tipos,
    lambda: lambdaAprendida(lamPropia, ps.length),
    calibracion: murphy(ps, os),
    isotonica: iso,
    nCalibracion: ps.length
  };
}


/* ---------- Simplex denso de dos fases (validado aparte) ----------
   maximizar c^T x sujeto a Ax <= b, x >= 0, con b >= 0. */
function dfSimplex(c, A, b, iterMax) {
  const m = A.length, nv = c.length;
  if (!m) return null;
  const total = nv + m, T = [];
  for (let i = 0; i < m; i++) {
    const fila = new Float64Array(total + 1);
    for (let j = 0; j < nv; j++) fila[j] = A[i][j];
    fila[nv + i] = 1; fila[total] = b[i];
    T.push(fila);
  }
  const z = new Float64Array(total + 1);
  for (let j = 0; j < nv; j++) z[j] = -c[j];
  T.push(z);
  const base = [];
  for (let i = 0; i < m; i++) base.push(nv + i);
  const EPS = 1e-9;
  for (let it = 0; it < (iterMax || 3000); it++) {
    let col = -1, mejor = -EPS;
    for (let j = 0; j < total; j++) if (T[m][j] < mejor) { mejor = T[m][j]; col = j }
    if (col < 0) break;
    let fila = -1, raz = Infinity;
    for (let i = 0; i < m; i++) if (T[i][col] > EPS) {
      const r = T[i][total] / T[i][col];
      if (r < raz - 1e-12) { raz = r; fila = i }
    }
    if (fila < 0) return { ilimitado: true };
    const pv = T[fila][col];
    for (let j = 0; j <= total; j++) T[fila][j] /= pv;
    for (let i = 0; i <= m; i++) {
      if (i === fila) continue;
      const f = T[i][col];
      if (Math.abs(f) < 1e-14) continue;
      for (let j = 0; j <= total; j++) T[i][j] -= f * T[fila][j];
    }
    base[fila] = col;
  }
  const x = new Float64Array(nv);
  for (let i = 0; i < m; i++) if (base[i] < nv) x[base[i]] = T[i][total];
  return { x: Array.from(x), valor: T[m][total] };
}

/* ---------- Cartera de arbitraje sobre un conjunto de mundos ----------
   W[i][w] = pago del mercado i en el mundo w (0 o 1).
   Comprar cuesta el ask; vender ingresa el bid. Se maximiza el PEOR beneficio
   con el tamano total acotado a 1, y se desplaza c = t-1 porque el simplex
   exige variables no negativas y el peor beneficio puede ser negativo. */
function dfArbitraje(px, W, nMundos) {
  const m = px.length;
  if (!m || !nMundos) return null;
  const nv = 2 * m + 1, A = [], b = [];
  for (let w = 0; w < nMundos; w++) {
    const fila = new Array(nv).fill(0);
    for (let i = 0; i < m; i++) {
      fila[i]     = -(W[i][w] - px[i].ask);
      fila[m + i] =  (W[i][w] - px[i].bid);
    }
    fila[2 * m] = 1;
    A.push(fila); b.push(1);
  }
  const cap = new Array(nv).fill(0);
  for (let i = 0; i < 2 * m; i++) cap[i] = 1;
  A.push(cap); b.push(1);
  const c = new Array(nv).fill(0); c[2 * m] = 1;
  const s = dfSimplex(c, A, b);
  if (!s || s.ilimitado) return null;
  const y = [];
  for (let i = 0; i < m; i++) y.push(s.x[i] - s.x[m + i]);
  const tam = y.reduce((a, v) => a + Math.abs(v), 0);
  return { peor: s.valor - 1, y, tam };
}

/* ---------- Implicaciones por fecha, sin modelo y sin error ----------
   Si dos preguntas son identicas salvo el plazo, la temprana implica la tardia:
   lo que pasa antes de septiembre pasa antes de diciembre. Ojo con el sentido:
   "ocurre ANTES DE" es acumulativo, pero "CONTINUA HASTA" es supervivencia y va
   al reves. Sin esa distincion cada familia de supervivencia produce
   arbitrajes fantasma. */
const DF_MESES = { january:1,february:2,march:3,april:4,may:5,june:6,july:7,
                   august:8,september:9,october:10,november:11,december:12 };
const DF_RE = new RegExp("\\b(by|before|until|through|on or before|prior to)\\s+" +
  "(january|february|march|april|may|june|july|august|september|october|november|december)" +
  "\\s*(\\d{1,2})?(?:st|nd|rd|th)?(?:,)?\\s*(\\d{4})?", "i");

function dfFecha(q) {
  const t = String(q || ""), m = t.match(DF_RE);
  if (!m) return null;
  const prep = m[1].toLowerCase();
  return {
    clave: (m[4] ? Number(m[4]) : 2026) * 10000 + DF_MESES[m[2].toLowerCase()] * 100 +
           (m[3] ? Number(m[3]) : 28),
    familia: t.replace(DF_RE, " @F@ ").replace(new RegExp("\\s+", "g"), " ")
              .trim().toLowerCase().replace(new RegExp("[?.]+$"), ""),
    superv: prep === "through" || prep === "until"
  };
}

/* ---------- Enumeracion de mundos posibles ----------
   Un mundo asigna 0 o 1 a cada mercado de la componente. Se enumera POR GRUPOS
   -exactamente una pata viva por grupo excluyente- en vez de bit a bit, que es
   lo que convierte 2^n en el producto de los tamanos de grupo. Despues se
   filtran los que violan alguna implicacion o exclusion. */
function dfMundos(ids, grupos, sueltos, impl, excl, tope) {
  const idx = {}; ids.forEach((x, i) => idx[x] = i);
  let mundos = [new Array(ids.length).fill(0)];
  // Grupos: exactamente uno verdadero.
  for (const g of grupos) {
    const nuevos = [];
    for (const base of mundos) {
      for (const gid of g) {
        const m2 = base.slice();
        for (const otro of g) m2[idx[otro]] = (otro === gid) ? 1 : 0;
        nuevos.push(m2);
      }
      if (nuevos.length > tope) break;
    }
    mundos = nuevos;
    if (mundos.length > tope) return null;
  }
  // Mercados sueltos: dos estados cada uno.
  for (const sid of sueltos) {
    const nuevos = [];
    for (const base of mundos) {
      const a = base.slice(); a[idx[sid]] = 0; nuevos.push(a);
      const b2 = base.slice(); b2[idx[sid]] = 1; nuevos.push(b2);
      if (nuevos.length > tope) break;
    }
    mundos = nuevos;
    if (mundos.length > tope) return null;
  }
  // Filtro logico: implicaciones y exclusiones.
  const ok = mundos.filter(mu => {
    for (const [a, b2] of impl) if (mu[idx[a]] === 1 && mu[idx[b2]] === 0) return false;
    for (const [a, b2] of excl) if (mu[idx[a]] === 1 && mu[idx[b2]] === 1) return false;
    return true;
  });
  return ok;
}

/* ---------- Coherencia sobre los mercados vivos ---------- */
async function coherencia(env, opciones) {
  const op = opciones || {};
  const q = await fetchPMQ(3);
  const M = (q.markets || []).filter(m => m.live !== false && m.p > 0 && m.p < 1);
  const porId = {}; M.forEach(m => porId[m.id] = m);

  /* 1. Grupos excluyentes completos: exactamente una pata gana. */
  const grupos = [];
  for (const g of (q.groups || [])) {
    if (!g.completo) continue;
    const ids = M.filter(m => m.evSlug === g.slug).map(m => m.id);
    /* GUARDA IMPRESCINDIBLE. El filtro de M descarta patas por precio o por
       liquidez, asi que un grupo de ocho salidas puede llegar aqui con dos. Si
       entonces se afirma "exactamente una de estas dos gana" se esta mintiendo,
       y el simplex encuentra un arbitraje que no existe: paso de verdad con el
       voto del SPD, donde propuso comprar los tramos 5-7% y 7-9% como si fuesen
       las unicas salidas posibles. Solo se acepta el grupo si estan TODAS. */
    if (ids.length !== g.n || !g.completo) continue;
    /* Segunda comprobacion, barata y con datos: si estan todas las salidas, sus
       precios tienen que sumar cerca de 1. Un grupo completo que suma 0,93 o
       1,4 es que no esta completo, diga lo que diga la bandera. */
    const suma = ids.reduce((t, id) => t + porId[id].p, 0);
    if (suma < 0.90 || suma > 1.12) continue;
    if (ids.length >= 2 && ids.length <= 12) grupos.push(ids);
  }

  /* 2. Implicaciones por fecha. Deterministas: no dependen de ningun modelo. */
  const fam = {};
  for (const m of M) {
    const f = dfFecha(m.q);
    if (!f) continue;
    (fam[f.familia] = fam[f.familia] || { superv: f.superv, ms: [] }).ms.push({ id: m.id, c: f.clave });
  }
  const impl = [], origen = {};
  for (const k of Object.keys(fam)) {
    const g = fam[k].ms.slice().sort((a, b) => a.c - b.c);
    if (g.length < 2) continue;
    for (let i = 0; i + 1 < g.length; i++) {
      if (g[i].c === g[i+1].c) continue;
      // acumulativo: temprana implica tardia. supervivencia: al reves.
      const par = fam[k].superv ? [g[i+1].id, g[i].id] : [g[i].id, g[i+1].id];
      impl.push(par);
      origen[par[0] + ">" + par[1]] = "fecha";
    }
  }

  /* 3. Implicaciones y exclusiones del grafo del modelo de lenguaje, si las hay
        guardadas. Estas SI pueden estar mal, y se marcan como tales. */
  const excl = [];
  if (env && env.RADAR && op.usarIA !== false) {
    try {
      const l = await env.RADAR.list({ prefix: "rel:v2:", limit: 400 });
      for (const k of l.keys.slice(0, 200)) {
        const r = await env.RADAR.get(k.name, "json");
        if (!r || !r.rel || r.rel === "NINGUNA") continue;
        if (!porId[r.idA] || !porId[r.idB]) continue;
        if (r.rel === "IMPLICA") { impl.push([r.idA, r.idB]); origen[r.idA + ">" + r.idB] = "modelo" }
        else if (r.rel === "EXCLUYE") { excl.push([r.idA, r.idB]); origen[r.idA + ">" + r.idB] = "modelo" }
      }
    } catch (e) {}
  }

  /* 4. Componentes conexas. */
  const vecinos = {};
  const une = (a, b) => { (vecinos[a] = vecinos[a] || new Set()).add(b); (vecinos[b] = vecinos[b] || new Set()).add(a) };
  grupos.forEach(g => { for (let i = 0; i < g.length; i++) for (let j = i+1; j < g.length; j++) une(g[i], g[j]) });
  impl.forEach(([a, b]) => une(a, b));
  excl.forEach(([a, b]) => une(a, b));

  const visto = new Set(), comps = [];
  for (const id of Object.keys(vecinos)) {
    if (visto.has(id)) continue;
    const cola = [id], comp = [];
    visto.add(id);
    while (cola.length) {
      const x = cola.pop(); comp.push(x);
      for (const v of (vecinos[x] || [])) if (!visto.has(v)) { visto.add(v); cola.push(v) }
    }
    if (comp.length >= 2 && comp.length <= (op.maxNodos || 14)) comps.push(comp);
  }

  /* 5. Por cada componente: enumerar mundos y buscar la cartera. */
  /* Incoherencias en precio medio: se listan aparte porque no todas son
     cobrables. Solo miran pares con implicacion, que es donde la comprobacion
     es de una linea. */
  const incoherencias = [];
  for (const [a, b2] of impl) {
    const A = porId[a], B = porId[b2];
    if (!A || !B) continue;
    // A implica B, luego p(A) <= p(B). Si no, hay incoherencia.
    const d = A.p - B.p;
    if (d <= 0.001) continue;
    const bidA = (typeof A.bid === "number") ? A.bid : null;
    const askB = (typeof B.ask === "number") ? B.ask : null;
    const cobrable = (bidA !== null && askB !== null) ? (bidA - askB) : null;
    incoherencias.push({
      implica: (A.q || "").slice(0, 88), implicado: (B.q || "").slice(0, 88),
      pA: A.p, pB: B.p, exceso: d,
      cobrable: cobrable,
      origen: origen[a + ">" + b2] || "modelo",
      lectura: (cobrable !== null && cobrable > 0)
        ? "se puede cobrar vendiendo el primero y comprando el segundo"
        : "la horquilla se lo come: es información, no dinero"
    });
  }
  incoherencias.sort((x, y) => y.exceso - x.exceso);

  const hallazgos = [];
  let compsMirados = 0, mundosTotal = 0;
  for (const comp of comps) {
    const dentro = new Set(comp);
    const gr = grupos.filter(g => g.every(x => dentro.has(x))).map(g => g.filter(x => dentro.has(x)));
    const enGrupo = new Set(); gr.forEach(g => g.forEach(x => enGrupo.add(x)));
    const sueltos = comp.filter(x => !enGrupo.has(x));
    if (sueltos.length > 12) continue;
    const im = impl.filter(([a, b]) => dentro.has(a) && dentro.has(b));
    const ex = excl.filter(([a, b]) => dentro.has(a) && dentro.has(b));

    const mundos = dfMundos(comp, gr, sueltos, im, ex, op.topeMundos || 6000);
    if (!mundos || mundos.length < 2) continue;
    compsMirados++; mundosTotal += mundos.length;

    /* Precios ejecutables. Sin bid/ask no se puede afirmar nada: se descarta la
       componente entera en vez de usar el punto medio, que fabrica arbitrajes
       que no existen. */
    const px = [];
    let completo = true;
    for (const id of comp) {
      const m = porId[id];
      const bid = (typeof m.bid === "number" && m.bid > 0 && m.bid < 1) ? m.bid : null;
      const ask = (typeof m.ask === "number" && m.ask > 0 && m.ask < 1) ? m.ask : null;
      if (bid === null || ask === null || ask < bid) { completo = false; break }
      px.push({ bid, ask });
    }
    if (!completo) continue;

    const W = comp.map((_, i) => mundos.map(mu => mu[i]));
    const r = dfArbitraje(px, W, mundos.length);
    if (!r || !(r.peor > 0.002) || !(r.tam > 0.01)) continue;

    /* De que aristas depende: si se quita una y el arbitraje desaparece, esa
       arista es imprescindible. Las de fecha son seguras; las del modelo hay
       que mirarlas a ojo antes de operar. */
    const criticas = [];
    for (const par of im.concat(ex)) {
      const im2 = im.filter(p => p !== par), ex2 = ex.filter(p => p !== par);
      const mu2 = dfMundos(comp, gr, sueltos, im2, ex2, op.topeMundos || 6000);
      if (!mu2 || mu2.length < 2) continue;
      const W2 = comp.map((_, i) => mu2.map(x => x[i]));
      const r2 = dfArbitraje(px, W2, mu2.length);
      if (!r2 || r2.peor <= 0.002) criticas.push({
        a: (porId[par[0]].q || "").slice(0, 70),
        b: (porId[par[1]].q || "").slice(0, 70),
        origen: origen[par[0] + ">" + par[1]] || "modelo"
      });
    }

    hallazgos.push({
      nMercados: comp.length, nMundos: mundos.length,
      porUnidad: r.peor / r.tam, peor: r.peor, tam: r.tam,
      // Solo dependen de aristas del modelo si alguna critica lo es.
      soloFechas: criticas.every(c => c.origen === "fecha"),
      criticas,
      patas: comp.map((id, i) => ({
        q: (porId[id].q || "").slice(0, 90),
        ev: (porId[id].ev || "").slice(0, 60),
        peso: r.y[i], lado: r.y[i] > 0 ? "COMPRAR" : "VENDER",
        precio: r.y[i] > 0 ? px[i].ask : px[i].bid
      })).filter(x => Math.abs(x.peso) > 0.005)
    });
  }
  hallazgos.sort((a, b) => b.porUnidad - a.porUnidad);

  return {
    ts: new Date().toISOString(),
    mercados: M.length, grupos: grupos.length,
    implicaciones: impl.length, implicacionesFecha: impl.filter(p => origen[p[0]+">"+p[1]] === "fecha").length,
    exclusiones: excl.length,
    componentes: comps.length, componentesAnalizadas: compsMirados, mundosExaminados: mundosTotal,
    incoherencias: incoherencias.slice(0, 20),
    hallazgos: hallazgos.slice(0, 20),
    nota: "El pago se comprueba mundo a mundo, así que la aritmética lleva certificado. " +
          "Lo que puede fallar es la semántica: que una relación del grafo esté mal clasificada. " +
          "Las implicaciones por fecha no dependen de ningún modelo."
  };
}

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

/* Noticias por ticker. Yahoo NO permite CORS en este endpoint (el navegador da
   "Failed to fetch"), asi que tiene que pasar por aqui.                          */
/* Todo lo que se puede saber de una empresa a partir de su NOMBRE. Las cuatro
   consultas van en paralelo y cada una con su tope: si una fuente falla, la
   ficha se rellena con las demas en vez de quedarse en blanco. */
async function fetchContratista(nombre) {
  const nom = String(nombre || "").trim().slice(0, 120);
  if (!nom) throw new Error("nombre vacío");

  /* Del nombre legal a algo buscable: fuera las formas societarias y lo que
     venga tras una coma, que en USAspending suele ser la razon social larga. */
  /* Se construyen con RegExp desde texto a proposito: al generar este fichero
     las barras invertidas de un literal /.../ se perdieron una vez, dejando
     [^ws&-], que borraba todo menos esas cuatro letras: "AT&T ENTERPRISES,
     LLC" acababa siendo "&". */
  const RE_FORMA = new RegExp("\\b(inc|llc|l\\.l\\.c|corp|corporation|company|co|ltd|" +
    "limited|plc|holdings?|group|technologies|technology|systems|services|solutions|" +
    "industries|international|enterprises|the)\\b\\.?", "gi");
  const limpio = nom.replace(/,.*$/, "")
    .replace(RE_FORMA, " ")
    .replace(new RegExp("[^\\w\\s&-]", "g"), " ")
    .replace(new RegExp("\\s+", "g"), " ").trim();
  const busca = limpio || nom;
  /* Guarda: con un resto demasiado corto la busqueda trae cualquier cosa, y
     rellenar la ficha con datos de OTRA empresa es peor que dejarla vacia. */
  if (busca.replace(new RegExp("[^A-Za-z0-9]", "g"), "").length < 4) {
    return { nombre: nom, buscado: busca, simbolo: null, precio: null,
      noticias: [], litigios: [],
      nota: "El nombre no deja bastante texto distintivo para buscar sin " +
            "arriesgarse a traer datos de otra empresa." };
  }

  const tope = (p, seg, siFalla) => Promise.race([
    Promise.resolve(p).catch(() => siFalla),
    new Promise(r => setTimeout(() => r(siFalla), seg * 1000))
  ]);

  /* Yahoo: en una sola llamada da el simbolo mas probable y las noticias. */
  const yahoo = (async () => {
    const u = "https://query2.finance.yahoo.com/v1/finance/search?q=" +
      encodeURIComponent(busca) + "&newsCount=8&quotesCount=5";
    const r = await fetch(u, { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" } });
    if (!r.ok) throw new Error("Yahoo HTTP " + r.status);
    return await r.json();
  })();

  const [y, lit] = await Promise.all([
    tope(yahoo, 8, null),
    tope((async () => {
      const desde = new Date(Date.now() - 730 * 864e5).toISOString().slice(0, 10);
      const parte = busca.split(new RegExp("\\s+")).slice(0, 2).join(" ");
      /* Con menos de cinco caracteres utiles CourtListener devuelve homonimos
         de todo tipo, personas fisicas incluidas. */
      if (parte.replace(new RegExp("[^A-Za-z0-9]", "g"), "").length < 5) return [];
      const j = await clBuscar(parte, desde);
      return (j.results || []).filter(x => clEsEmpresa(x.party, parte)).slice(0, 8).map(x => {
        const nat = clNat(x.suitNature);
        return {
          caso: x.caseName || "—", fecha: x.dateFiled || "",
          tribunal: x.court_citation_string || x.court || "",
          natTxt: nat.txt,
          contraEstado: /United States|Department of|Secretary of|Army|Navy|Air Force/i.test(x.caseName || ""),
          url: "https://www.courtlistener.com" + (x.docket_absolute_url || "")
        };
      });
    })(), 10, null)
  ]);

  /* Simbolo: solo se acepta una accion de un mercado reconocible, y se exige que
     el nombre se parezca de verdad. Un simbolo equivocado es peor que ninguno:
     pintaria el precio de OTRA empresa. */
  let sim = null, nomYahoo = null, bolsa = null;
  if (y && Array.isArray(y.quotes)) {
    const pal = busca.toLowerCase().split(/s+/).filter(x => x.length > 2);
    for (const q of y.quotes) {
      if (!q.symbol || (q.quoteType && q.quoteType !== "EQUITY")) continue;
      const nq = String(q.longname || q.shortname || "").toLowerCase();
      if (!nq) continue;
      const casan = pal.filter(p => nq.indexOf(p) >= 0).length;
      if (pal.length && casan / pal.length >= 0.5) {
        sim = q.symbol; nomYahoo = q.longname || q.shortname; bolsa = q.exchDisp || q.exchange || "";
        break;
      }
    }
  }

  let px = null;
  if (sim) { try { px = await tope(fetchPx(sim), 8, null) } catch (e) {} }

  return {
    nombre: nom, buscado: busca,
    simbolo: sim, nombreBolsa: nomYahoo, bolsa: bolsa,
    precio: px ? { c: px.c, d: px.d, cur: px.cur, spread: px.spread } : null,
    noticias: (function () {
      const brutas = (y && y.news ? y.news : []).map(x => ({
        t: x.title || "", url: x.link || "", medio: x.publisher || "",
        ts: x.providerPublishTime || null }));
      /* Palabras distintivas del nombre: las de mas de tres letras. */
      const pal = busca.toLowerCase().split(/\s+/).filter(x => x.length > 3);
      if (!pal.length) return [];
      const casan = brutas.filter(x => {
        const t = (x.t + " " + x.medio).toLowerCase();
        return pal.some(p => t.indexOf(p) >= 0);
      });
      /* Si ninguna menciona la empresa, Yahoo ha devuelto ruido: mejor nada. */
      return casan;
    })(),
    litigios: lit,
    nota: sim ? null : "No se ha encontrado un símbolo de bolsa que case con el nombre. " +
                       "Puede ser una filial, una empresa no cotizada o un nombre distinto en bolsa."
  };
}

async function fetchYNews(sym) {
  const s = String(sym || "").trim().toUpperCase().replace(/[^A-Z0-9.\-=^]/g, "");
  if (!s) throw new Error("simbolo vacio");
  const u = "https://query2.finance.yahoo.com/v1/finance/search?q=" + encodeURIComponent(s) +
            "&newsCount=10&quotesCount=0";
  const r = await fetch(u, { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" } });
  if (!r.ok) throw new Error("Yahoo HTTP " + r.status);
  const j = await r.json();
  return { s: s, noticias: (j.news || []).map(x => ({
    t: x.title || "", url: x.link || "", medio: x.publisher || "",
    ts: x.providerPublishTime || null })) };
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
:root{
 /* Un solo acento (--am) y color semantico solo para arriba/abajo. El cian y el
    violeta se degradan a usos puntuales: cuando todo grita, nada destaca. */
 --bg:#07090c; --pane:#0d1117; --pane2:#111823; --line:#1d2430; --line2:#161d27;
 --txt:#e6edf3; --dim:#8b949e; --dim2:#5a636d;
 --am:#e3a44a; --gr:#3fb950; --rd:#f0605d; --cy:#5aa8c7; --vi:#8b7fc7;
 --ui:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
 --num:"SF Mono","Roboto Mono","Cascadia Mono",Consolas,monospace}
*{margin:0;padding:0;box-sizing:border-box}
/* Fondo topografico generado por codigo: sin archivos externos, se redibuja al
   cambiar de tamano y queda detras de todo.                                     */
#topo{position:fixed;inset:0;z-index:0;pointer-events:none}
.hdr,.nav,main,.ftr,#dt,#fe{position:relative;z-index:1}
html,body{height:100%}
body{background:var(--bg);color:var(--txt);font:13px/1.5 var(--ui);overflow:hidden;
 -webkit-font-smoothing:antialiased}
/* Las cifras en monoespaciada y tabulares: en una tabla financiera las columnas
   tienen que alinearse solas. El texto va en sans, que se lee mucho mejor. */
.amt,.n,.v,td.num,.num,.mg .v,.kpi .v,.tarj .g{font-family:var(--num);font-variant-numeric:tabular-nums}
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
/* Dos niveles: once pestanas en fila no se leen. Arriba cuatro grupos, debajo
   solo las vistas del grupo activo. */
.nav2{display:flex;gap:2px;background:#0a0e14;border-bottom:1px solid var(--line);
 flex:0 0 auto;padding:0 10px}
.nav2 button{background:none;border:0;color:var(--dim);padding:11px 16px;font:inherit;
 font-size:11.5px;font-weight:600;letter-spacing:.5px;cursor:pointer;position:relative}
.nav2 button:hover{color:var(--txt)}
.nav2 button.on{color:var(--am)}
.nav2 button.on::after{content:"";position:absolute;left:14px;right:14px;bottom:-1px;
 height:2px;background:var(--am);border-radius:2px 2px 0 0}
.nav{display:flex;background:#080b10;border-bottom:1px solid var(--line);flex:0 0 auto;
 overflow-x:auto;padding:0 8px;min-height:34px;align-items:center}
.nav button[data-v]{display:none}
.nav button[data-v].vis{display:inline-block}
.nav button{background:none;border:none;color:var(--dim);padding:9px 14px;
 font:inherit;font-size:11px;font-weight:500;letter-spacing:.4px;cursor:pointer;
 transition:color .12s}
.nav button:hover{color:var(--txt);background:#0b1119}
.nav button.on{color:var(--txt);background:rgba(227,164,74,.10);border-radius:3px;font-weight:600}
.nav .sp{flex:1}
.nav .meta{color:var(--dim2);font-size:10px;padding:7px 12px;font-family:var(--num)}
main{flex:1;overflow:auto;padding:8px}
.grid{display:grid;gap:11px}
.g4{grid-template-columns:repeat(4,1fr)}
.g3{grid-template-columns:repeat(3,1fr)}
.g2{grid-template-columns:1fr 1fr}
.g23{grid-template-columns:2fr 1fr}
.g32{grid-template-columns:1fr 2fr}
@media(max-width:1250px){.g4{grid-template-columns:repeat(2,1fr)}.g3,.g2,.g23,.g32{grid-template-columns:1fr}}
.p{background:rgba(13,17,23,.94);border:1px solid var(--line);border-radius:3px;
 display:flex;flex-direction:column;min-height:0}
.p>h3{font-size:11px;letter-spacing:.7px;color:var(--dim);text-transform:uppercase;
 font-weight:600;padding:10px 14px;border-bottom:1px solid var(--line2);
 display:flex;justify-content:space-between;align-items:center;flex:0 0 auto;gap:8px}
.p>h3 span{color:var(--am);font-size:11px;white-space:nowrap;font-weight:500}
.p .bd{overflow:auto;flex:1;min-height:0}
.kpi{background:linear-gradient(165deg,rgba(20,26,35,.96),rgba(13,17,23,.94));
 border:1px solid var(--line);border-radius:4px;padding:14px 16px;position:relative;overflow:hidden}
.kpi::before{content:"";position:absolute;top:0;left:0;right:0;height:1px;
 background:linear-gradient(90deg,transparent,rgba(227,164,74,.5),transparent)}
.kpi.c2{border-top-color:var(--gr)}.kpi.c3{border-top-color:var(--cy)}.kpi.c4{border-top-color:var(--vi)}
.kpi .k{color:var(--dim);font-size:10.5px;letter-spacing:.6px;text-transform:uppercase;font-weight:600}
.kpi .v{font-size:30px;margin-top:6px;font-variant-numeric:tabular-nums;letter-spacing:-.8px;line-height:1.05;font-weight:500}
.kpi .s{color:var(--dim2);font-size:11px;margin-top:5px;line-height:1.4}
.kpi .spark{margin-top:6px;height:28px}
table{width:100%;border-collapse:collapse;font-size:12px}
th{position:sticky;top:0;z-index:2;text-align:left;color:var(--dim);font-size:9px;letter-spacing:1px;text-transform:uppercase;padding:6px 8px;background:#0a0f16;border-bottom:1px solid var(--line);cursor:pointer;user-select:none;white-space:nowrap}
th:hover{color:var(--am)}
td{padding:7px 10px;border-bottom:1px solid var(--line2);vertical-align:top}
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
/* semaforo de fiabilidad */
.sem{display:inline-flex;align-items:center;gap:5px;font-size:11px;white-space:nowrap}
.sem i{width:8px;height:8px;border-radius:50%;flex:0 0 auto;display:block}
.sem.verde i{background:var(--gr);box-shadow:0 0 6px rgba(63,185,80,.55)}
.sem.ambar i{background:var(--am);box-shadow:0 0 6px rgba(227,164,74,.5)}
.sem.rojo  i{background:var(--rd);box-shadow:0 0 6px rgba(240,96,93,.5)}
.sem.verde{color:var(--gr)} .sem.ambar{color:var(--am)} .sem.rojo{color:var(--rd)}
.conf{font-size:9.5px;color:var(--dim2);letter-spacing:.3px}
.hb{display:flex;align-items:center;gap:10px;padding:5px 13px;font-size:11.5px}
.hb .nm{width:190px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--txt)}
.hb .tr{flex:1;height:7px;background:rgba(255,255,255,.035);position:relative;overflow:hidden;border-radius:4px}
.hb .tr i{position:absolute;inset:0 auto 0 0;border-radius:4px;background:linear-gradient(90deg,rgba(227,164,74,.85),rgba(227,164,74,.28))}
.hb.pr .tr i{background:linear-gradient(90deg,rgba(120,140,170,.42),rgba(120,140,170,.14))}
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
.st{color:var(--dim);font-size:11.5px;padding:8px 11px;line-height:1.5}
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
#dt,#fe{position:fixed;inset:0;background:rgba(0,0,0,.78);z-index:60;display:none}
#fe.on{display:flex;align-items:center;justify-content:center}
#feb{width:min(1400px,95vw);height:min(900px,93vh);background:var(--pane);border:1px solid var(--line);
 border-top:2px solid var(--cy);display:flex;flex-direction:column;min-height:0}
#feh{display:flex;align-items:flex-start;gap:12px;padding:10px 13px;border-bottom:1px solid var(--line);flex:0 0 auto}
#feh h2{font-size:14px;font-weight:600;color:var(--txt)}
#feh .sub{font-size:10.5px;color:var(--dim);margin-top:3px}
#fex{margin-left:auto;background:#0b1119;border:1px solid var(--line);color:var(--dim);
 padding:4px 10px;font:inherit;font-size:11px;cursor:pointer;flex:0 0 auto}
#fex:hover{color:var(--rd);border-color:var(--rd)}
#fec{flex:1;overflow:auto;padding:10px 13px;display:grid;gap:9px;grid-template-columns:1fr 1fr;grid-auto-rows:min-content}
#fec .full{grid-column:1/-1}
.fila{padding:8px 0;border-bottom:1px solid var(--line2);font-size:11.5px;line-height:1.45}
.fila b{font-size:12px}
.fila .m{color:var(--dim);font-size:10.5px}
/* ---- asistente ---- */
#iabtn.abierto{right:16px;bottom:calc(min(560px,100vh - 90px) + 26px)}
#iabtn{position:fixed;right:16px;bottom:16px;z-index:72;background:var(--pane);
 border:1px solid var(--am);color:var(--am);padding:9px 15px;font:inherit;font-size:11px;
 letter-spacing:.06em;cursor:pointer;box-shadow:0 4px 18px rgba(0,0,0,.6)}
#iabtn:hover{background:rgba(255,159,26,.12)}
#iap{position:fixed;right:16px;bottom:16px;width:min(430px,calc(100vw - 32px));
 height:min(560px,calc(100vh - 90px));background:var(--pane);border:1px solid var(--line);
 border-top:2px solid var(--am);z-index:71;display:none;flex-direction:column;
 box-shadow:0 8px 34px rgba(0,0,0,.75)}
#iap.on{display:flex}
#iah{display:flex;align-items:center;gap:8px;padding:9px 11px;border-bottom:1px solid var(--line)}
#iah b{font-size:12px;color:var(--am)}
#iax{margin-left:auto;background:none;border:0;color:var(--dim);cursor:pointer;font-size:14px}
#iam{flex:1;overflow:auto;padding:10px 11px;display:flex;flex-direction:column;gap:9px}
.iab{padding:8px 10px;font-size:12px;line-height:1.55;max-width:92%}
.iab.tu{background:var(--pane2);border:1px solid var(--line2);align-self:flex-end}
.iab.ia{background:rgba(255,159,26,.06);border-left:2px solid var(--am);align-self:flex-start}
.iab.err{background:rgba(255,77,94,.08);border-left:2px solid var(--rd);align-self:flex-start;color:var(--txt)}
#iaf{display:flex;gap:6px;padding:9px 11px;border-top:1px solid var(--line)}
#iaq{flex:1;background:#0b1119;border:1px solid var(--line);color:var(--txt);
 padding:7px 9px;font:inherit;font-size:12px}
#iag{background:#0b1119;border:1px solid var(--am);color:var(--am);padding:7px 13px;
 font:inherit;font-size:11px;cursor:pointer}
#iamic{background:#0b1119;border:1px solid var(--line);color:var(--dim);padding:7px 10px;
 font:inherit;font-size:13px;cursor:pointer;line-height:1}
#iamic:hover{border-color:var(--am);color:var(--am)}
.iaeg{display:flex;flex-wrap:wrap;gap:5px;padding:0 11px 9px}
.iaeg button{background:#0b1119;border:1px solid var(--line2);color:var(--dim);
 padding:4px 8px;font:inherit;font-size:10px;cursor:pointer}
.iaeg button:hover{color:var(--am);border-color:var(--am)}
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
/* ---- modo simple ---- */
#lang{background:#0b1119;border:1px solid var(--line);color:var(--dim);padding:4px 10px;
 font:inherit;font-size:10px;letter-spacing:.08em;cursor:pointer}
#lang:hover{color:var(--am);border-color:var(--am)}
#modo{background:#0b1119;border:1px solid var(--line);color:var(--dim);padding:4px 11px;
 font:inherit;font-size:10px;letter-spacing:.06em;cursor:pointer;white-space:nowrap}
#modo.pro{border-color:var(--am);color:var(--am)}
/* El modo sencillo NO esconde herramientas: las traduce. Solo se oculta el
   comando de texto, que es para teclear ordenes tipo terminal.                  */
body.simple .solo-cmd{display:none !important}
/* Columnas y celdas de matematica: fuera en modo sencillo. */
body.simple .mates{display:none !important}
body.simple .ayuda{display:block}
.ayuda{display:none;font-size:12px;line-height:1.55;color:var(--txt);background:rgba(255,159,26,.06);
 border-left:2px solid var(--am);padding:8px 11px;margin:0 0 8px}
.tarj{background:var(--pane);border:1px solid var(--line);border-left:3px solid var(--am);padding:14px 16px;
 display:flex;flex-direction:column;gap:6px;min-height:0}
.tarj.ok{border-left-color:var(--gr)} .tarj.no{border-left-color:var(--rd)} .tarj.inf{border-left-color:var(--cy)}
.tarj .t{font-size:11px;letter-spacing:.08em;color:var(--dim);text-transform:uppercase}
.tarj .g{font-size:26px;line-height:1.1;font-variant-numeric:tabular-nums}
.tarj .x{font-size:12.5px;color:var(--txt);line-height:1.5}
.tarj .y{font-size:11px;color:var(--dim);line-height:1.45}
.expl{font-size:12.5px;line-height:1.6;color:var(--txt)}
.expl b{color:var(--am)}
.gloss{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:8px}
.gloss div{background:var(--pane2);border:1px solid var(--line2);padding:8px 10px}
.gloss .k{font-size:11px;color:var(--am);margin-bottom:3px}
.su{}
.su.on{border-color:var(--am) !important;color:var(--am) !important;background:rgba(255,159,26,.08) !important}
.gloss .v{font-size:11.5px;color:var(--dim);line-height:1.45}
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
/* --- modo en vivo --- */
@keyframes destSube{0%{background:rgba(63,185,80,.42)}100%{background:transparent}}
@keyframes destBaja{0%{background:rgba(240,96,93,.42)}100%{background:transparent}}
.sube{animation:destSube 1.1s ease-out}
.baja{animation:destBaja 1.1s ease-out}
#vivo{display:flex;align-items:center;gap:6px;background:var(--pane2);border:1px solid var(--line);
 border-radius:6px;padding:4px 9px;margin-left:8px;font-size:11px;color:var(--dim);cursor:pointer}
#vivo.on{border-color:var(--gr);color:var(--txt)}
#vivo .pt{width:7px;height:7px;border-radius:50%;background:var(--dim2);flex:none}
#vivo.on .pt{background:var(--gr);animation:latido 1.6s ease-in-out infinite}
@keyframes latido{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.35;transform:scale(.75)}}
#vivo select{background:transparent;border:0;color:inherit;font:inherit;cursor:pointer;outline:none}
#vivo-t{font-variant-numeric:tabular-nums;color:var(--dim2)}
/* --- inclinacion del terminal --- */
.sug{grid-column:1/-1;border:1px solid var(--line);border-left:3px solid var(--am);border-radius:6px;padding:8px 12px;margin-bottom:6px;background:rgba(227,164,74,.05)}
.sug .v{font-size:15px;font-weight:700;letter-spacing:.02em;margin:2px 0}
/* --- buscador global --- */
#pal{position:fixed;inset:0;z-index:200;background:rgba(3,5,8,.72);backdrop-filter:blur(3px);display:none}
#pal.on{display:block}
#palc{max-width:640px;margin:9vh auto 0;background:var(--pane);border:1px solid var(--line);
 border-radius:10px;box-shadow:0 24px 70px rgba(0,0,0,.6);overflow:hidden}
#palq{width:100%;background:transparent;border:0;border-bottom:1px solid var(--line);color:var(--txt);
 font:600 15px/1 inherit;padding:15px 17px;outline:none;letter-spacing:.01em}
#palr{max-height:56vh;overflow:auto}
#palr .it{display:flex;align-items:center;gap:10px;padding:9px 17px;cursor:pointer;border-left:2px solid transparent}
#palr .it.sel{background:var(--pane2);border-left-color:var(--am)}
#palr .it .tg{font-size:9px;letter-spacing:.09em;text-transform:uppercase;color:var(--bg);
 background:var(--dim);border-radius:3px;padding:2px 5px;flex:none;min-width:64px;text-align:center;font-weight:700}
#palr .it .tg.v{background:var(--am)} #palr .it .tg.e{background:var(--cy)}
#palr .it .tg.m{background:var(--vi)} #palr .it .tg.c{background:var(--gr)}
#palr .it .n{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:12.5px}
#palr .it .d{font-size:10px;color:var(--dim2);flex:none}
#palf{padding:7px 17px;border-top:1px solid var(--line);font-size:10px;color:var(--dim2);display:flex;gap:14px}
#palf kbd{background:var(--pane2);border:1px solid var(--line);border-radius:3px;padding:1px 5px;font-size:9px}
#buscar{display:flex;align-items:center;gap:7px;background:var(--pane2);border:1px solid var(--line);
 border-radius:6px;padding:5px 10px;cursor:pointer;color:var(--dim);font-size:11px;margin-left:10px}
#buscar:hover{border-color:var(--am);color:var(--txt)}
#buscar kbd{background:var(--bg);border:1px solid var(--line);border-radius:3px;padding:1px 4px;font-size:9px}

/* ===================== MÓVIL Y TABLETA ===================== */
@media(max-width:900px){
 /* Cabecera: se permite que baje de linea en vez de salirse. */
 .top{flex-wrap:wrap;height:auto;padding:6px 8px;gap:6px}
 .top .lt{font-size:10px}
 .brand{font-size:14px;letter-spacing:.14em}
 #buscar span:not(.pt){display:none}
 #buscar kbd{display:none}
 #buscar::after{content:"⌕";font-size:15px}
 #vivo{margin-left:4px;padding:4px 7px}
 /* Las dos filas de navegacion se desplazan, con aviso de que hay mas. */
 .nav2,.nav{overflow-x:auto;overflow-y:hidden;-webkit-overflow-scrolling:touch;
  scrollbar-width:none;position:relative}
 .nav2::-webkit-scrollbar,.nav::-webkit-scrollbar{display:none}
 .nav2 button,.nav button{white-space:nowrap;flex:0 0 auto;min-height:40px}
 .nav .sp,.nav .meta{display:none}
 /* Degradado en el borde derecho: dice que la fila sigue. */
 .navwrap{position:relative}
 .navwrap::after{content:"";position:absolute;right:0;top:0;bottom:0;width:26px;
  background:linear-gradient(90deg,transparent,var(--bg));pointer-events:none}
 main{padding:6px}
 .grid{gap:8px}
 .g4,.g3,.g2,.g23,.g32{grid-template-columns:1fr}
 /* Dos por fila para las cifras: cuatro no caben y una sola desperdicia. */
 .g4{grid-template-columns:repeat(2,1fr)}
 .kpi{padding:10px 11px}
 .kpi .v{font-size:20px}
 .kpi .k{font-size:9px}
 .p{min-height:0}
 .p>h3{padding:9px 11px;font-size:10px;flex-wrap:wrap;gap:4px}
 /* La primera columna se queda fija: sin esto no sabes de que fila lees. */
 table{min-width:640px}
 td:first-child,th:first-child{position:sticky;left:0;z-index:2;
  background:var(--pane);box-shadow:1px 0 0 var(--line2)}
 tr:hover td:first-child{background:var(--pane2)}
 th{font-size:9px;padding:7px 8px}
 td{padding:9px 8px;font-size:12px}
 /* Nombres de mercado y de empresa: mas sitio, y hasta dos lineas. */
 td:first-child{max-width:190px;white-space:normal;line-height:1.3}
 .chips{gap:5px}
 .chips button,.chips label{min-height:38px;display:inline-flex;align-items:center;gap:5px}
 .chips input[type=text],.chips input[type=number]{min-height:38px;font-size:16px}
 /* 16px evita que el navegador haga zoom solo al enfocar un campo. */
 select,input{font-size:16px;min-height:38px}
 #iabtn{right:10px;bottom:10px;padding:11px 14px;font-size:12px}
 #iap{left:6px;right:6px;width:auto;max-height:70vh}
 .ov .box,#fe .box,#dt .box{width:96vw;max-width:96vw;max-height:92vh}
 .dp{height:auto !important;min-height:210px}
 .tape{height:22px}
}
@media(max-width:560px){
 .g4{grid-template-columns:1fr}
 .brand span{display:none}
 .top .lt span{display:none}
 .nav2 button{padding:11px 12px;font-size:11px}
 .nav button{padding:9px 10px;font-size:10px}
 td:first-child{max-width:150px}
 .kpi .v{font-size:18px}
 /* En pantallas asi de estrechas, la jerga sobra aunque estes en modo completo. */
 .mates{display:none !important}
}
</style>
</head>
<body>
<div id="app">
<canvas id="topo"></canvas>
<button id="iabtn">🧠 PREGUNTA AL TERMINAL</button>
<div id="iap">
  <div id="iah"><b>ASISTENTE</b><span class="st">responde solo con tus datos</span><button id="iax">✕</button></div>
  <div id="iam"></div>
  <div class="iaeg" id="iaeg"></div>
  <div id="iaf">
   <button id="iamic" title="Hablar">🎤</button>
   <input id="iaq" placeholder="Pregunta o pulsa el micrófono" autocomplete="off">
   <button id="iag">Enviar</button>
 </div>
 <div class="st" style="padding:0 11px 8px;display:flex;align-items:center;gap:8px">
   <label style="cursor:pointer"><input type="checkbox" id="iavoz"> leer en voz alta</label>
   <label style="cursor:pointer"><input type="checkbox" id="iaconv"> chat de voz continuo</label>
   <span style="margin-left:auto">puede moverse por el terminal y lanzar simulaciones</span>
 </div>
</div>
<div class="hdr">
  <div class="brand"><em></em>MOR TERMINAL</div>
  <button id="lang" title="Language / Idioma">ES</button>
  <button id="volver" title="Volver a la pantalla anterior" style="display:none">← VOLVER</button>
  <button id="modo" title="Cambia entre vista sencilla y vista completa">MODO SENCILLO</button>
  <div class="cmd solo-cmd"><input id="cmd" placeholder="COMANDO / BUSCAR…" autocomplete="off"><span class="hint">↵</span></div>
  <div class="lights">
    <div class="lt ld" id="L1"><b></b><span>DOD</span></div>
    <div class="lt ld" id="L2"><b></b><span>PM</span></div>
    <div class="lt ld" id="L3"><b></b><span>NEWS</span></div>
  </div>
  <div id="vivo" title="Refresca los mercados de Polymarket automáticamente">
    <span class="pt"></span><span id="vivo-e">EN VIVO</span>
    <select id="vivo-n" onclick="event.stopPropagation()">
      <option value="0">apagado</option>
      <option value="2">2 s · lo más rápido posible</option>
        <option value="5">5 s</option>
        <option value="10">10 s</option>
      <option value="30" selected>30 s</option>
      <option value="60">60 s</option>
    </select><span id="vivo-t"></span>
  </div>
  <div id="buscar" title="Buscar en todo el terminal"><span>⌕</span><span id="buscar-t">Buscar…</span><kbd>Ctrl K</kbd></div>
  <button class="rl" id="rel">⟳ REFRESH</button>
  <div class="clk" id="clk"></div>
</div>
<div id="pal"><div id="palc"><input id="palq" autocomplete="off" spellcheck="false" placeholder="Ir a una vista, empresa, mercado o contrato…"><div id="palr"></div><div id="palf"><span><kbd>↑↓</kbd> moverse</span><span><kbd>↵</kbd> abrir</span><span><kbd>Esc</kbd> cerrar</span></div></div></div>
<div class="tape"><div class="run" id="tape"></div></div>
<div class="navwrap"><div class="nav2" id="nav2"></div></div>
<div class="navwrap"><div class="nav" id="nav">
  <button data-v="ini" class="on">F1 INICIO</button>
  <button data-v="dash">F2 DASH</button>
  <button data-v="con">F3 CONTRATOS</button>
  <button data-v="sc">F4 EMPRESAS</button>
  <button data-v="pm">F5 APUESTAS</button>
  <button data-v="news">F6 NOTICIAS</button>
  <button data-v="quant">F7 QUANT</button>
  <button data-v="ver">VEREDICTO</button>
  <button data-v="brain">F8 CEREBRO</button>
  <button data-v="sim">F9 SIMULADOR</button>
  <button data-v="cart">F10 CARTERA</button>
  <button data-v="inv">F11 INVESTIGACIÓN</button>
  <button data-v="lib">F12 BIBLIOTECA</button>
  <div class="sp"></div>
  <div class="meta" id="meta"></div>
</div></div>
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
    <h3>POLYMARKET <span id="p-cnt"></span> <span class="st" style="font-weight:400;text-transform:none">— clic en cualquier fila para el desglose completo</span></h3>
    <div class="chips" id="pm-cat" style="gap:5px;flex-wrap:wrap"></div>
    <div class="chips" style="align-items:center;gap:8px">
      <input id="pm-q" placeholder="Buscar dentro de estos mercados…" style="width:230px" autocomplete="off">
      <button id="pa" class="on">Todos</button><button id="ps">⚡ Con señal</button>
      <button id="pf">🟢 Solo fiables</button>
      <span class="st" id="p-st"></span>
    </div>
    <div class="bd"><table><thead><tr>
      <th style="width:9%">Fiabilidad</th><th data-k="q">Mercado</th>
      <th data-k="p" style="width:8%">Prob.</th><th style="width:8%">Estimado</th>
      <th class="mates" data-k="c1d" style="width:7%">Δ24h</th><th data-k="vol24" style="width:9%">Vol 24h</th>
      <th data-k="liq" style="width:9%">Liquidez</th><th style="width:16%">Señales</th>
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
    <h3>TABLA QUANT · SMALL CAPS DEFENSA <span id="q-cnt"></span> <span class="st" style="font-weight:400;text-transform:none">— clic en una empresa para su ficha completa</span></h3>
    <div class="chips"><button id="qload">⟳ Cargar / actualizar precios</button><span class="st" id="q-st">Los precios pasan por tu Worker (Yahoo Finance; el navegador no puede por CORS).</span></div>
    <div class="bd"><table><thead><tr>
      <th data-k="name" style="width:17%">Empresa</th><th style="width:9%">Precio</th>
      <th data-k="r1" style="width:7%">1M</th><th data-k="r3" style="width:7%">3M</th><th data-k="r6" style="width:7%">6M</th>
      <th class="mates" data-k="vol" style="width:8%">Vol.anual</th><th class="mates" data-k="dd" style="width:8%">Max DD</th>
      <th class="mates" data-k="z" style="width:8%">Z-score</th><th style="width:13%">Tendencia</th><th style="width:12%">Señal</th>
    </tr></thead><tbody id="q-rows"></tbody></table></div>
    <div class="st">Z-score = media de los z de los retornos 1M/3M/6M (momentum compuesto transversal). Vol. anual = desviación típica de retornos diarios × √252. Max DD = mayor caída desde máximo. Informativo, no es recomendación.</div>
  </div>

  <div class="p" style="margin-top:8px">
    <h3>DIVISAS · QUANT <span id="fx-cnt"></span> <span class="st" style="font-weight:400;text-transform:none">— clic en un par para su gráfico</span></h3>
    <div class="chips"><button id="fxload">⟳ Cargar divisas</button><span class="st" id="fx-st">18 pares: mayores, cruces y emergentes. Pasan por tu Worker (Yahoo Finance).</span></div>
    <div class="grid g4" style="margin:8px 0">
      <div class="kpi"><div class="k">PARES CARGADOS</div><div class="v" id="fx1">…</div><div class="s" id="fx1s">cargando al entrar en esta pantalla</div></div>
      <div class="kpi c2"><div class="k">MEJOR MOMENTUM</div><div class="v" id="fx2">—</div><div class="s" id="fx2s">—</div></div>
      <div class="kpi c3"><div class="k">EN TENSIÓN</div><div class="v" id="fx3">—</div><div class="s" id="fx3s">volatilidad reciente por encima de la normal</div></div>
      <div class="kpi c4"><div class="k">PARES ESTIRADOS</div><div class="v" id="fx4">—</div><div class="s" id="fx4s">diferencias que suelen volver a su sitio</div></div>
    </div>
    <div class="bd" style="max-height:420px;overflow:auto"><table><thead><tr>
      <th style="width:12%">Par</th><th style="width:8%">Último</th>
      <th style="width:7%">1M</th><th style="width:7%">3M</th><th style="width:7%">6M</th>
      <th class="mates" style="width:8%">Vol.anual</th><th style="width:10%">Régimen</th>
      <th class="mates" style="width:7%">Hurst</th><th class="mates" style="width:7%">Z mom.</th>
      <th style="width:11%">Tendencia</th><th class="mates" style="width:8%">Kelly</th><th style="width:8%">Señal</th>
    </tr></thead><tbody id="fx-rows"><tr><td colspan="12"><div class="emp"><b>💱</b>Pulsa <b>⟳ Cargar divisas</b>.</div></td></tr></tbody></table></div>
    <div class="grid g2" style="margin-top:8px">
      <div class="p" style="height:300px"><h3 id="fx-ch-t">GRÁFICO</h3><div class="bd" id="fx-chart"><div class="emp"><b>📈</b>Elige un par en la tabla.</div></div></div>
      <div class="p" style="height:300px"><h3>PARES QUE SE MUEVEN JUNTOS <span class="st" style="font-weight:400;text-transform:none">— cointegración</span></h3>
        <div class="bd" style="overflow:auto"><table><thead><tr><th>Par A</th><th>Par B</th><th class="mates">β</th><th>Diferencia (z)</th><th class="mates">Vida media</th><th>Lectura</th></tr></thead><tbody id="fx-coint"><tr><td colspan="6"><div class="emp"><b>⏳</b>Esperando a que carguen las divisas.</div></td></tr></tbody></table></div></div>
    </div>
    <div class="p" style="margin-top:8px"><h3>COHERENCIA TRIANGULAR <span class="st" style="font-weight:400;text-transform:none">— EUR/USD × USD/JPY debería dar EUR/JPY</span></h3>
      <div class="bd" style="overflow:auto"><table><thead><tr><th>Cruce</th><th>Cotizado</th><th>Implícito</th><th>Desvío</th><th>Lectura</th></tr></thead><tbody id="fx-tri"><tr><td colspan="5"><div class="emp"><b>⏳</b>Esperando a que carguen las divisas.</div></td></tr></tbody></table></div>
      <div class="st">Con cierres diarios los desvíos de unos pocos puntos básicos son ruido de horario (cada par cierra en un instante distinto), no arbitraje. Es un control de calidad del dato; un desvío grande señala un precio malo.</div>
    </div>


    <div class="p" style="margin-top:8px">
      <h3>ESTRUCTURA REAL Y RIESGO CONJUNTO <span id="es-cnt"></span>
        <span class="st" style="font-weight:400;text-transform:none">— cuántas apuestas distintas tienes de verdad</span></h3>
      <div class="expl" style="border:1px solid var(--line);border-left:3px solid var(--cy);border-radius:6px;padding:9px 12px;margin:8px 0;font-size:12px;color:var(--dim)">
        <b style="color:var(--txt)">Dos preguntas que la correlación no responde.</b> La primera: de todas las correlaciones que ves entre tus 33 empresas, ¿cuáles son reales y cuáles son ruido de tener pocos datos? Marchenko y Pastur demostraron en 1967 que los datos sin ninguna estructura producen autovalores dentro de una banda calculable; lo que sale por encima es real, y así hay un umbral en vez de un codo mirado a ojo.<br><br>
        La segunda: la correlación mide el centro y <b>no dice nada del día malo</b>. Dos empresas pueden tener correlación 0,2 y caer juntas el 60% de las veces que una se hunde. Eso lo mide la dependencia de cola. Comprobado con datos fabricados: con un golpe común el 5% de los días, la dependencia de cola vale 0,49 mientras la correlación se queda en 0,45 y no lo ve.<br><br>
        Se usan retornos <b>semanales</b> a propósito: Tel Aviv, Seúl, São Paulo y Nueva York no cierran a la vez, y con datos diarios las correlaciones entre husos salen falseadas.
      </div>
      <div class="chips"><button id="es-run">⟳ Calcular</button><span class="st" id="es-st">Necesita los precios cargados arriba.</span></div>
      <div class="grid g4" style="margin:8px 0">
        <div class="kpi c3"><div class="k">FACTORES REALES</div><div class="v" id="es1">—</div><div class="s" id="es1s">—</div></div>
        <div class="kpi"><div class="k">EL MAYOR EXPLICA</div><div class="v" id="es2">—</div><div class="s" id="es2s">—</div></div>
        <div class="kpi c2"><div class="k">APUESTAS REALES</div><div class="v" id="es3">—</div><div class="s" id="es3s">—</div></div>
        <div class="kpi c4"><div class="k">CAEN JUNTAS</div><div class="v" id="es4">—</div><div class="s" id="es4s">—</div></div>
      </div>
      <div class="grid g2">
        <div class="p"><h3>QUÉ ES REAL Y QUÉ ES RUIDO <span class="st" style="font-weight:400;text-transform:none">— Marchenko-Pastur</span></h3>
          <div class="bd" style="max-height:300px;overflow:auto"><table><thead><tr><th>#</th><th>Autovalor</th><th style="width:38%">Peso</th><th>Veredicto</th></tr></thead><tbody id="es-ev"><tr><td colspan="4"><div class="emp"><b>⏳</b>Pulsa ⟳ Calcular.</div></td></tr></tbody></table></div></div>
        <div class="p"><h3>LAS QUE SE HUNDEN JUNTAS <span class="st" style="font-weight:400;text-transform:none">— dependencia de cola</span></h3>
          <div class="bd" style="max-height:300px;overflow:auto"><table><thead><tr><th>Empresa</th><th>Empresa</th><th>Juntas</th><th>Lectura</th></tr></thead><tbody id="es-cola"><tr><td colspan="4"><div class="emp"><b>⏳</b>Pulsa ⟳ Calcular.</div></td></tr></tbody></table></div></div>
      </div>
      <div class="st">El umbral de "caen juntas" no es cero: sale de barajar las fechas 60 veces y quedarse con el percentil 95. Con pocos días malos, la dependencia de cola de un par suelto es ruido, así que lo que importa es cuántos pares superan ese umbral, no el valor de ninguno.</div>
    </div>
    <div class="p" style="margin-top:8px">
      <h3>DIVISAS · ESTRUCTURA Y RIESGO
        <span class="st" style="font-weight:400;text-transform:none">— ninguna de estas herramientas predice dirección, y es a propósito</span></h3>
      <div class="chips"><button id="fq-run">⟳ Calcular</button><span class="st" id="fq-st">Necesita las divisas cargadas arriba.</span></div>
      <div class="expl" style="border:1px solid var(--line);border-left:3px solid var(--rd);border-radius:6px;padding:9px 12px;margin:8px 0;font-size:12px;color:var(--dim)">
        <b style="color:var(--txt)">Por qué no hay señales de compra aquí.</b> Momentum, reversión y cointegración se probaron con 4.000 millones de operaciones simuladas. En datos de Yahoo la reversión parecía funcionar (p=0,006), pero al respetar que las divisas se mueven juntas cayó a p=0,135, y en los tipos oficiales del Banco Central Europeo no replica: p=0,408. La cointegración acierta el 60% en Yahoo y el 50% exacto en el BCE. Nada predice la dirección. Lo que sigue sí tiene información: cuánto riesgo hay, de dónde viene y cuántas apuestas distintas tienes de verdad.
      </div>
      <div class="grid g4" style="margin:8px 0">
        <div class="kpi c2"><div class="k">FACTOR COMÚN</div><div class="v" id="fq1">—</div><div class="s" id="fq1s">—</div></div>
        <div class="kpi"><div class="k">APUESTAS REALES</div><div class="v" id="fq2">—</div><div class="s" id="fq2s">—</div></div>
        <div class="kpi c3"><div class="k">SEGUNDO FACTOR</div><div class="v" id="fq3">—</div><div class="s" id="fq3s">—</div></div>
        <div class="kpi c4"><div class="k">PASEO ALEATORIO</div><div class="v" id="fq4">—</div><div class="s" id="fq4s">—</div></div>
      </div>
      <div class="grid g2">
        <div class="p"><h3>DE QUÉ DEPENDE CADA PAR <span class="st" style="font-weight:400;text-transform:none">— componente principal</span></h3>
          <div class="bd" style="max-height:280px;overflow:auto"><table><thead><tr><th>Par</th><th>Carga</th><th style="width:34%">Peso</th><th>Lectura</th></tr></thead><tbody id="fq-pca"><tr><td colspan="4"><div class="emp"><b>⏳</b>Esperando a que carguen las divisas.</div></td></tr></tbody></table></div></div>
        <div class="p"><h3>¿ES UN PASEO ALEATORIO? <span class="st" style="font-weight:400;text-transform:none">— razón de varianzas (Lo y MacKinlay)</span></h3>
          <div class="bd" style="max-height:280px;overflow:auto"><table><thead><tr><th>Par</th><th>2 días</th><th>5 días</th><th>10 días</th><th>Lectura</th></tr></thead><tbody id="fq-vr"><tr><td colspan="5"><div class="emp"><b>⏳</b>Esperando a que carguen las divisas.</div></td></tr></tbody></table></div></div>
      </div>
      <div class="p" style="margin-top:8px"><h3>RIESGO REAL DE CADA PAR</h3>
        <div class="bd" style="overflow:auto"><table><thead><tr>
          <th>Par</th><th>Volatilidad hoy</th><th>Su rango histórico</th><th>Percentil</th>
          <th>Peor día de 100</th><th>Ídem, con colas gruesas</th><th>Si pasa, cuánto</th><th class="mates">Asim. / Curt.</th>
        </tr></thead><tbody id="fq-riesgo"><tr><td colspan="8"><div class="emp"><b>⏳</b>Esperando a que carguen las divisas.</div></td></tr></tbody></table></div>
        <div class="st">Volatilidad anualizada de 21 sesiones. <b>Peor día de 100</b> es el valor en riesgo al 99% (histórico), y la columna siguiente lo corrige por asimetría y colas gruesas (Cornish-Fisher), que en divisas se quedan cortas justo cuando importa. <b>Si pasa, cuánto</b> es la pérdida esperada en la cola. Informativo, no es recomendación.</div>
      </div>
    </div>
    <div class="st">Régimen = vol. 20 sesiones / vol. 100 sesiones. Hurst (R/S) &gt;0,55 tendencial, &lt;0,45 reversión. Z mom. = media de los z transversales de 1M/3M/6M. Kelly continuo = μ/σ² diario, teórico y sin costes. Informativo, no es recomendación.</div>
  </div>
</div>


<div class="view" id="v-ver">
  <div class="ayuda-fija" style="border:1px solid var(--line);border-left:3px solid var(--am);border-radius:6px;padding:9px 12px;margin-bottom:8px;font-size:12px;color:var(--dim)">
   <b style="color:var(--txt)">Lectura del terminal con los datos de ahora mismo.</b> Posición alcista = comprar; bajista = vender o no entrar. El <b>stop</b> es donde el terminal admite que se equivocó (dos veces el movimiento típico de 14 sesiones) y el <b>objetivo</b> el doble de esa distancia, para que la operación sea 2:1. <b>Cuánto</b> es medio Kelly, entre el 1% y el 10% del capital. <b>Neto tras coste</b> descuenta el spread efectivo real estimado del propio precio (método EDGE de Ardia, Guidotti y Kroencke): si sale en rojo, la idea no paga ni el peaje de entrar y salir. <b>Hasta cuándo</b> es el plazo que hace falta, con la volatilidad de esta serie, para recorrer la distancia al objetivo; sal igualmente si se cumple la condición que invalida la idea. No es consejo: <b>tú decides</b>.
  </div>
  <div class="grid g4" style="margin-bottom:8px">
    <div class="kpi c2"><div class="k">ALCISTAS</div><div class="v" id="ve1">—</div><div class="s" id="ve1s">empresas y divisas para comprar</div></div>
    <div class="kpi c4"><div class="k">BAJISTAS</div><div class="v" id="ve2">—</div><div class="s" id="ve2s">para vender o no entrar</div></div>
    <div class="kpi c3"><div class="k">APUESTAS CON VENTAJA</div><div class="v" id="ve3">—</div><div class="s" id="ve3s">precio lejos de lo justo</div></div>
    <div class="kpi"><div class="k">ARBITRAJES</div><div class="v" id="ve4">—</div><div class="s" id="ve4s">cuentas que no cuadran</div></div>
  </div>
  <div class="chips" style="margin-bottom:8px"><button id="ver-calc">⟳ Recalcular todo</button><span class="st" id="ver-st">Carga precios, cerebro y divisas y vuelve a decidir.</span></div>
  <div class="p" style="margin-bottom:8px"><h3>EMPRESAS <span id="ver-emp-cnt"></span> <span class="st" style="font-weight:400;text-transform:none">— clic para la ficha</span></h3>
    <div class="bd" style="overflow:auto"><table><thead><tr><th style="width:22%">Empresa</th><th style="width:10%">Posición</th><th style="width:10%">Entrada</th><th style="width:10%">Stop</th><th style="width:10%">Objetivo</th><th style="width:8%">Cuánto</th><th style="width:11%">Neto tras coste</th><th style="width:14%">Hasta cuándo</th><th>Por qué</th></tr></thead><tbody id="ver-emp"></tbody></table></div></div>
  <div id="ver-aviso" style="display:none;border:1px solid var(--rd);border-left:3px solid var(--rd);border-radius:6px;padding:9px 12px;margin-bottom:8px;font-size:12px;color:var(--dim);background:rgba(240,96,93,.06)"></div>
  <div class="p" style="margin-bottom:8px"><h3>APUESTAS <span id="ver-pm-cnt"></span> <span class="st" style="font-weight:400;text-transform:none">— clic para el mercado</span></h3>
    <div class="bd" style="overflow:auto"><table><thead><tr><th style="width:34%">Mercado</th><th style="width:9%">Posición</th><th style="width:9%">Entrada</th><th style="width:9%">Salir si</th><th style="width:9%">Objetivo</th><th style="width:8%">Cuánto</th><th style="width:13%">Hasta cuándo</th><th>Por qué</th></tr></thead><tbody id="ver-pm"></tbody></table></div></div>
  <div class="grid g2" style="margin-bottom:8px">
    <div class="p"><h3>DIVISAS · RIESGO <span id="ver-fx-cnt"></span>
        <span class="st" style="font-weight:400;text-transform:none">— aquí no hay señal de compra, y está explicado</span></h3>
      <div class="bd" style="overflow:auto"><table><thead><tr><th>Par</th><th>Aleatorio</th><th>Volatilidad</th><th>Peor día de 100</th><th>Factor común</th></tr></thead><tbody id="ver-fx"></tbody></table></div></div>
    <div class="p"><h3>ARBITRAJES <span id="ver-arb-cnt"></span> <span class="st" style="font-weight:400;text-transform:none">— aritmética, no predicción</span></h3>
      <div class="bd" style="overflow:auto"><table><thead><tr><th>Grupo</th><th>Qué hacer</th><th>Neto</th></tr></thead><tbody id="ver-arb"></tbody></table></div></div>
  </div>
</div>

<div class="view" id="v-brain">
  <div class="grid g4" style="margin-bottom:8px">
    <div class="kpi"><div class="k">MERCADOS ANALIZADOS</div><div class="v" id="b1">—</div><div class="s" id="b1s">de eventos activos</div></div>
    <div class="kpi c2"><div class="k">GRUPOS CON VENTAJA</div><div class="v" id="b2">—</div><div class="s" id="b2s">neta tras costes</div></div>
    <div class="kpi c3"><div class="k">MEJOR VENTAJA NETA</div><div class="v" id="b3">—</div><div class="s" id="b3s">—</div></div>
    <div class="kpi c4"><div class="k">SESGO FAVORITO-LONGSHOT</div><div class="v" id="b4">—</div><div class="s" id="b4s">λ = 0,183 · oracle3, 291.000 contratos resueltos</div></div>
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
      <th style="width:9%">Fiabilidad</th>
      <th data-k="q" style="width:22%">Mercado</th><th data-k="p" style="width:7%">Precio</th>
      <th style="width:9%">Estimado</th><th class="mates" data-k="edge" style="width:7%">Sesgo</th>
      <th data-k="spreadRel" style="width:8%">Spread rel.</th><th data-k="turn" style="width:7%">Rotación</th>
      <th class="mates" data-k="snorm" style="width:8%">σ norm.</th><th class="mates" data-k="urg" style="width:7%">Urgencia</th>
      <th data-k="days" style="width:7%">Días</th><th class="mates" data-k="z" style="width:7%">Z mom.</th><th style="width:8%">Señal</th>
    </tr></thead><tbody id="b-rows"></tbody></table></div>
    <div class="st"><b>Fiabilidad</b> no dice si vas a ganar: dice si el mercado tiene libro, liquidez y un coste de entrar razonable, o si es una trampa donde entrar y salir te cuesta más que la ventaja. <b>Estimado</b> es la probabilidad que calcula el terminal: precio medio del libro, sin el sobre-redondeo del grupo, y corregido por el sesgo favorito-longshot con λ=0,183 — calibrada sobre 291.000 contratos resueltos, no sobre nuestra muestra, que era demasiado pequeña para fiarse. Mira siempre la confianza debajo. <b>Que el estimado difiera del precio NO es una predicción</b>: ninguna estrategia direccional superó al azar en 4.010 millones de operaciones simuladas.<br>Justo (Wang) = g⁻¹(precio) = Φ(Φ⁻¹(p) − λ), la probabilidad sin la prima de riesgo que el mercado incorpora. Sesgo = precio − justo: positivo significa longshot caro. σ norm. = volatilidad realizada ÷ √(p(1−p)), comparable entre niveles de precio. Urgencia = 2p(1−p)/√días. Informativo, no es recomendación.</div>
  </div>
</div>

<div class="view" id="v-sim">
  <div class="grid g4" style="margin-bottom:8px">
    <div class="kpi"><div class="k">MERCADOS RESUELTOS</div><div class="v" id="s1" style="font-size:15px">sin ejecutar</div><div class="s" id="s1s">pulsa ▶ abajo · tarda 1–3 min</div></div>
    <div class="kpi c2"><div class="k">BRIER SCORE</div><div class="v" id="s2" style="font-size:15px">sin ejecutar</div><div class="s" id="s2s">0 = perfecto · 0,25 = moneda</div></div>
    <div class="kpi c3"><div class="k">λ EMPÍRICA</div><div class="v" id="s3" style="font-size:15px">sin ejecutar</div><div class="s" id="s3s">sesgo medido, no teórico</div></div>
    <div class="kpi c4"><div class="k">MEJOR ESTRATEGIA</div><div class="v" id="s4" style="font-size:15px">sin ejecutar</div><div class="s" id="s4s">descarga históricos reales del CLOB</div></div>
  </div>

  <div class="p" style="margin-bottom:8px">
    <h3>QUÉ ESTÁS SIMULANDO</h3>
    <div class="chips" style="gap:7px;flex-wrap:wrap">
      <button class="su on" data-u="pm">Polymarket · predicción</button>
      <button class="su" data-u="fx">Forex · divisas</button>
      <button class="su" data-u="mc">Memecoins</button>
    </div>
    <div id="s-uinfo" class="st" style="padding:9px 10px;line-height:1.55;border-top:1px solid var(--line2);margin-top:6px"></div>
  </div>

  <div class="p" style="margin-bottom:8px" id="s-cfgpm">
    <h3>CONFIGURACIÓN DEL BACKTEST</h3>
    <div class="chips" style="align-items:center;flex-wrap:wrap;gap:10px">
      <label class="st">Mercados <select id="s-n"><option value="120">120</option><option value="250" selected>250</option><option value="400">400</option></select></label>
      <label class="st">Entrada a <select id="s-h"><option value="1">1 día</option><option value="7" selected>7 días</option><option value="30">30 días</option></select> del cierre</label>
      <label class="st">Volumen mínimo <select id="s-v"><option value="10000">10 mil $</option><option value="100000" selected>100 mil $</option><option value="1000000">1 M$</option></select></label>
      <button id="srun">▶ Ejecutar simulación</button>
      <span class="st" id="sim-st">Descarga histórico real del CLOB de mercados ya resueltos. Tarda 1–3 min.</span>
    </div>
  </div>

  <div class="p" style="margin-bottom:8px;display:none" id="s-cfgfx">
    <h3>CONFIGURACIÓN · DIVISAS</h3>
    <div class="chips" style="align-items:center;flex-wrap:wrap;gap:10px">
      <label class="st">Señal a <select id="f-n"><option value="5">5 días</option><option value="20" selected>20 días</option><option value="60">60 días</option></select></label>
      <label class="st">Mantener <select id="f-h"><option value="5">5 días</option><option value="10" selected>10 días</option><option value="20">20 días</option></select></label>
      <button id="frun">▶ Ejecutar sobre divisas</button>
      <span class="st" id="f-st">10 pares, 400 sesiones cada uno, desde Yahoo vía tu Worker.</span>
    </div>
  </div>

  <div class="p" style="margin-bottom:8px;display:none" id="s-cfgmc">
    <h3>MEMECOINS · POR QUÉ AQUÍ NO HAY BOTÓN DE BACKTEST</h3>
    <div class="st" style="padding:9px 10px;line-height:1.6">
      Lo comprobé con datos reales: de 27 pares recién listados, <b>15 ya tenían liquidez cero</b>
      — no se pueden vender — y la edad media era de <b>1,5 horas</b>.<br><br>
      Y hay algo peor. DexScreener solo lista lo que <b>sigue existiendo</b>: las que murieron
      del todo desaparecen de la lista. Un backtest sobre lo que hoy se ve mediría
      <b style="color:var(--rd)">solo a los supervivientes</b>, y daría rentabilidades espectaculares que
      serían pura ilusión. Es el mismo error que hizo que un t-stat de 5,35 fuese en realidad 0,30.<br><br>
      Por eso aquí solo cabe <b>seguimiento hacia delante</b>: se anota hoy el universo entero
      —con sus futuras muertas dentro— y se sigue. En semanas tendrás una muestra honesta.
      Cualquier otra cosa sería mentirte con números bonitos.
    </div>
    <div class="chips" style="gap:8px">
      <button id="mcsnap">✎ Anotar el universo de hoy</button>
      <span class="st" id="mc-st2">Se guarda con el motor de papel y se sigue solo.</span>
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
        <option value="ops:1e9">mil millones de operaciones</option>
        <option value="ops:4e9">4.000 millones de operaciones</option>
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
    <h3>REGISTRO EN PAPEL <span id="pa-cnt"></span> <span class="st" style="font-weight:400;text-transform:none">— muestra propia y sin sesgo: la señal se anota al emitirse, sin saber el desenlace</span></h3>
    <div class="chips" style="align-items:center;gap:8px">
      <button id="p-snap">✎ Anotar señales de hoy</button>
      <button id="p-set">✓ Liquidar resueltas</button>
      <span class="st" id="pa-st">El cron diario lo hace solo. Necesita KV configurado en el Worker.</span>
    </div>
    <div class="bd" style="max-height:190px"><table><thead><tr>
      <th style="width:11%">Estado</th><th style="width:11%">Tipo</th><th style="width:9%">Señal</th>
      <th style="width:38%">Mercado</th><th style="width:9%">Entrada</th><th style="width:11%">Anotada</th><th style="width:11%">Retorno</th>
    </tr></thead><tbody id="pa-rows"></tbody></table></div>
    <div class="st" id="pa-est">Sin datos todavía.</div>
  </div>

  <div class="p" style="height:calc(100vh - 830px);min-height:220px">
    <h3>ESTRATEGIAS SIMULADAS <span id="sim-cnt"></span></h3>
    <div class="bd"><table><thead><tr>
      <th style="width:24%">Estrategia</th><th style="width:7%">Apuestas</th><th style="width:8%">Acierto</th>
      <th style="width:10%">Medio</th><th style="width:9%">Mediana</th><th style="width:10%">Total</th><th style="width:9%">Max DD</th>
      <th class="mates" style="width:9%">t-stat</th><th style="width:18%">¿Significativo?</th>
    </tr></thead><tbody id="sim-rows"></tbody></table></div>
    <div class="st">Media y mediana divergen mucho a propósito: un longshot acertado a 0.02 paga 50× y arrastra la media él solo, así que la mediana dice mejor qué pasa en la apuesta típica. Retorno por unidad arriesgada: comprar SÍ a precio p paga (desenlace − p)/p. t-stat = media ÷ (desviación/√n): por encima de 2 el resultado difícilmente es azar. En divisas se muestra <b>agrupado por par y con ventanas sin solapar</b>, y debajo el «ingenuo» para que veas la diferencia: contar ventanas solapadas como si fueran independientes dispara el t-stat y hace pasar por ventaja lo que es ruido. <b>Rentabilidad pasada simulada sobre datos históricos; no predice resultados futuros y no descuenta el impacto de mercado. Informativo, no es recomendación de inversión ni de apuesta.</b></div>
  </div>
</div>

  <div class="p" style="margin-top:8px">
    <h3>LO QUE EL TERMINAL HA APRENDIDO <span id="ap-cnt"></span>
      <span class="st" style="font-weight:400;text-transform:none">— de su propio historial, no de la teoría</span></h3>
    <div class="chips"><button id="ap-load">⟳ Ver aprendizaje</button>
      <span class="st" id="ap-st">Cada día se anotan las señales y se liquidan las que resuelven. De ahí sale todo esto.</span></div>
    <div class="grid g4" style="margin:8px 0">
      <div class="kpi"><div class="k">CASOS LIQUIDADOS</div><div class="v" id="ap1">—</div><div class="s" id="ap1s">señales con resultado conocido</div></div>
      <div class="kpi c2"><div class="k">λ QUE USA HOY</div><div class="v" id="ap2">—</div><div class="s" id="ap2s">mezcla de literatura y experiencia propia</div></div>
      <div class="kpi c3"><div class="k">¿ESTÁ CALIBRADO?</div><div class="v" id="ap3">—</div><div class="s" id="ap3s">fiabilidad: 0 es perfecto</div></div>
      <div class="kpi c4"><div class="k">¿ES PREDECIBLE?</div><div class="v" id="ap4">—</div><div class="s" id="ap4s">resolución: cuanto más alta, mejor</div></div>
    </div>
    <div class="bd" style="overflow:auto"><table><thead><tr>
      <th style="width:22%">Tipo de señal</th><th style="width:9%">Casos</th><th style="width:12%">Acierto crudo</th>
      <th style="width:14%">Acierto corregido</th><th style="width:20%">Intervalo (90%)</th>
      <th style="width:11%">Retorno medio</th><th>Cuánto pesa lo vivido</th>
    </tr></thead><tbody id="ap-rows"><tr><td colspan="7"><div class="emp"><b>🎓</b>Pulsa <b>⟳ Ver aprendizaje</b>.</div></td></tr></tbody></table></div>
    <div class="st" id="ap-nota">El acierto corregido encoge el crudo hacia el 50% mientras haya pocos casos: acertar 3 de 4 no es un 75%, son cuatro datos. El intervalo es lo que de verdad sabes. Nada de esto se usa para dimensionar posiciones hasta que el intervalo se estreche.</div>
  </div>
  <div class="p" style="margin-top:8px">
    <h3>PRUEBA CONTRA EL AUTOENGAÑO <span class="st" style="font-weight:400;text-transform:none">— test SPA de Hansen con remuestreo por bloques</span></h3>
    <div class="chips"><button id="spa-run">▶ Ejecutar</button>
      <span class="st" id="spa-st">Necesita una simulación ejecutada. Corrige el sesgo de haber probado varias estrategias y quedarse con la mejor.</span></div>
    <div class="bd" style="overflow:auto"><table><thead><tr>
      <th style="width:34%">Estrategia</th><th style="width:14%">Exceso sobre referencia</th><th style="width:12%">p individual</th>
      <th style="width:14%">p corregido (SPA)</th><th>Lectura</th>
    </tr></thead><tbody id="spa-rows"><tr><td colspan="5"><div class="emp"><b>🎯</b>Pulsa <b>▶ Ejecutar</b> tras una simulación.</div></td></tr></tbody></table></div>
    <div class="st">El t-stat agrupado corrige que las ventanas se solapen. Esto corrige otra cosa distinta: que hayas mirado varias estrategias y te quedes con la que mejor salió. Si pruebas seis, la mejor parece buena por puro azar. El p corregido es el que cuenta.</div>
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
      <span class="st" id="ca-st">Añade mercados y pon TU probabilidad. El terminal no la estima.</span>
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
    </tr></thead><tbody id="ca-rows"></tbody></table></div>
    <div class="st">Kelly para un binario: <b>f* = (p − precio) / (1 − precio)</b>. «Salida» es el precio al que tu ventaja se agota, que es tu propia probabilidad — no es un objetivo de beneficio, es donde deja de haber razón para seguir. El reparto entre varias posiciones se escala proporcionalmente hasta el tope: es una aproximación, el Kelly multi-activo exacto exige la distribución conjunta. <b>Informativo. No es recomendación de inversión ni de apuesta.</b><br>
    Si tu probabilidad es muchas veces mayor que el precio del mercado, la calculadora te avisa: casi siempre es un error de tecleo, y el «valor esperado» sale disparado por ese único dato.</div>
  </div>

  <div class="p" style="height:calc(100vh - 620px);min-height:230px">
    <h3>PLAN DE ARBITRAJE <span id="c-acnt"></span> <span class="st" style="font-weight:400;text-transform:none">— aquí no se pronostica: las patas y las salidas salen de la aritmética</span></h3>
    <div class="bd"><table><thead><tr>
      <th style="width:30%">Oportunidad</th><th style="width:10%">Tipo</th><th style="width:10%">Patas</th>
      <th style="width:12%">Capital a inmovilizar</th><th style="width:10%">Beneficio</th>
      <th style="width:10%">Retorno s/capital ▼</th><th style="width:18%">Entrada y salida</th>
    </tr></thead><tbody id="ca-arb"></tbody></table></div>
    <div class="st">Vender las n patas de un grupo excluyente cuesta Σ(1−pᵢ) = n − Σp e ingresa n − 1 con certeza, así que el beneficio es Σp − 1. <b>El retorno sobre capital es mucho menor que el sobre-redondeo</b>: para vender 32 patas hay que inmovilizar casi 31 unidades. Riesgos reales no simulados: el libro puede no tener profundidad para todas las patas al precio mostrado, y el capital queda inmovilizado hasta la resolución.</div>
  </div>
</div>
<div class="view on" id="v-ini">
  <div class="grid g2" style="margin-bottom:9px">
    <div class="p" style="padding:16px 18px">
      <div class="expl" id="i-hoy">Cargando…</div>
    </div>
    <div class="p" style="padding:16px 18px">
      <div class="t" style="font-size:11px;letter-spacing:.08em;color:var(--dim);text-transform:uppercase;margin-bottom:8px">Qué es esto</div>
      <div class="expl">
        Este terminal vigila tres cosas a la vez y busca dónde <b>se cruzan</b>:
        los contratos que reparte el Pentágono, unas 33 empresas de defensa pequeñas
        y poco seguidas por todo el mundo, y los mercados donde se apuesta sobre
        acontecimientos reales.<br><br>
        La idea es sencilla: a los grandes no les compensa cubrir una empresa coreana
        o polaca de 200 millones. Ahí no hay competencia porque el premio les parece
        pequeño. <b>Para ti sí es suficiente.</b>
      </div>
    </div>
  </div>

  <div class="grid g4" style="margin-bottom:9px" id="i-tarj"></div>

  <div class="grid g2" style="margin-bottom:9px">
    <div class="p" style="height:250px">
      <h3>LO QUE MERECE UN VISTAZO HOY</h3>
      <div class="bd" style="padding:6px 10px" id="i-lista"></div>
    </div>
    <div class="p" style="height:250px">
      <h3>SI TE PREGUNTAS QUÉ SIGNIFICA CADA COSA</h3>
      <div class="bd" style="padding:9px 10px"><div class="gloss">
        <div><div class="k">Contrato de defensa</div><div class="v">Dinero que el Pentágono adjudica a una empresa. Es público. Si la que lo gana cotiza en bolsa y es pequeña, puede notarse en su precio.</div></div>
        <div><div class="k">Gigante</div><div class="v">Lockheed, Boeing, RTX… Se llevan casi todo, ya los cubre todo el mundo y ahí no hay nada que descubrir. El terminal los aparta.</div></div>
        <div><div class="k">Small cap</div><div class="v">Empresa cotizada pequeña, aquí entre 50 y 500 millones. Poca gente las sigue, y por eso su precio reacciona tarde.</div></div>
        <div><div class="k">Mercado de predicción</div><div class="v">Un sitio donde se compra y vende la probabilidad de que algo pase. Si algo cotiza a 30, el mercado cree que hay un 30% de que ocurra.</div></div>
        <div><div class="k">Arbitraje</div><div class="v">Cuando las cuentas no cuadran solas. Si las opciones de un mismo suceso suman más de 100%, sobra dinero en la mesa sin tener que adivinar nada.</div></div>
        <div><div class="k">8-K</div><div class="v">Un aviso que una empresa estadounidense está OBLIGADA a publicar cuando le pasa algo importante. Es el momento exacto en que deja de ser secreto.</div></div>
        <div><div class="k">Cruce</div><div class="v">La señal estrella: una empresa de tu lista aparece ganando un contrato o publicando un aviso. Es lo que dispara la alerta.</div></div>
        <div><div class="k">Verificar a mano</div><div class="v">Siempre. El terminal encuentra coincidencias, no verdades. Que un nombre coincida no significa que sea la misma empresa.</div></div>
      </div></div>
    </div>
  </div>

  <div class="p" style="padding:13px 16px;margin-bottom:9px" id="i-pago">
    <div class="t" style="font-size:11px;letter-spacing:.08em;color:var(--dim);text-transform:uppercase;margin-bottom:8px">Acceso</div>
    <div class="expl" style="font-size:12px;margin-bottom:9px" id="i-pinfo">Comprobando…</div>
    <div class="chips" style="align-items:center;gap:9px;flex-wrap:wrap">
      <span class="st">¿Ya pagaste? Pega la firma</span>
      <input id="i-sig" placeholder="firma de la transacción" style="width:250px" autocomplete="off">
      <button id="i-sigok">Canjear</button>
      <span class="st" id="i-sigst"></span>
    </div>
    <div class="st" style="margin-top:7px">La firma es el identificador largo que te da Phantom al enviar. Cada pago genera <b>una sola</b> clave.</div>
  </div>

  <div class="p" style="padding:13px 16px;margin-bottom:9px">
    <div class="chips" style="align-items:center;gap:9px;flex-wrap:wrap">
      <span class="st">Clave de acceso</span>
      <input id="i-key" type="password" placeholder="mor_…" style="width:230px" autocomplete="off">
      <button id="i-keyok">Guardar</button>
      <span class="st" id="i-keyst"></span>
    </div>
    <div class="st">Se guarda solo en este navegador y viaja cifrada en la cabecera, nunca en la dirección. Si el terminal funciona sin clave es que el acceso está abierto.</div>
  </div>

  <div class="p" style="padding:13px 16px">
    <div class="expl" style="color:var(--dim);font-size:11.5px">
      <b style="color:var(--rd)">Lo que este terminal NO hace:</b> no te dice dónde invertir ni predice precios.
      Probamos las estrategias con 4.010 millones de operaciones simuladas y <b style="color:var(--txt)">ninguna
      superó al azar</b>. Lo que sí hace es enseñarte información pública antes de que
      la mire nadie más, y marcar cuando las cuentas de un mercado no cuadran.
      Nada de esto es recomendación de inversión.

    </div>
  </div>
</div>

<div class="view" id="v-inv">
  <div class="p" style="padding:15px 17px;margin-bottom:9px">
    <div class="t" style="font-size:11px;letter-spacing:.08em;color:var(--am);text-transform:uppercase;margin-bottom:8px">Zona de investigación</div>
    <div class="expl">
      Lo que hay aquí <b>no está validado</b>. Son ideas en prueba que aún no han
      demostrado nada, separadas a propósito del resto del terminal para que no se
      confundan con lo que sí está comprobado.<br><br>
      El arbitraje de la pantalla de oportunidades es <b>aritmética cerrada</b>: si las
      probabilidades de un grupo suman 1,05, sobra un 5% y punto. Lo de aquí depende de
      que una IA clasifique bien una relación lógica, y eso <b>puede fallar</b> — abajo
      tienes un caso real en el que falló.
    </div>
  </div>

  <div class="p" style="margin-bottom:8px">
    <h3>CONTRADICCIONES ENTRE MERCADOS <span id="rl-cnt"></span> <span class="st" style="font-weight:400;text-transform:none">— apuestas de eventos distintos que se contradicen entre sí</span></h3>
    <div class="st" style="padding:6px 10px 0">Un agente barre un trozo cada día con el cron y guarda lo que encuentra. Como la lógica entre dos preguntas no cambia nunca, lo ya clasificado no se vuelve a consultar: el grafo se llena solo y sale gratis.</div>
    <div class="chips" style="align-items:center;gap:8px">
      <label class="st">Amplitud <select id="rl-a">
        <option value="estricto" selected>estricta · ~65 pares</option>
        <option value="medio">media · ~120 pares</option>
        <option value="amplio">amplia · ~1.070 pares</option>
      </select></label>
      <label class="st">Por pasada <select id="rl-n"><option value="8">8</option><option value="14" selected>14</option><option value="18">18</option></select></label>
      <button id="rl-run">⟳ Buscar contradicciones</button>
      <span class="st" id="rl-st">Polymarket trata cada evento por separado, así que nadie comprueba si se contradicen entre sí.</span>
    </div>
    <div class="bd" style="max-height:250px;padding:0 4px" id="rl-res"></div>
    <div class="st"><b>Cómo funciona:</b> la IA solo propone la relación lógica («A implica B», «no pueden pasar las dos»); la ventaja la calcula la <b>aritmética</b>, así que el modelo nunca se la puede inventar. Si propone una relación falsa, sale un falso positivo, no una pérdida.<br>
    <b class="dn">Verifícalo siempre a mano.</b> En pruebas, un modelo marcó como excluyentes «gana las elecciones de Brasil» y «queda segundo en la <b>primera vuelta</b>» — y no lo son, porque hay segunda vuelta. Lee las dos preguntas enteras.</div>
  </div>


</div>


  <div class="p" style="margin-top:8px">
    <h3>COHERENCIA DE DE FINETTI <span id="co-cnt"></span>
      <span class="st" style="font-weight:400;text-transform:none">— matemática de 1937 sobre un grafo que hasta 2023 no se podía construir</span></h3>
    <div class="expl" style="border:1px solid var(--line);border-left:3px solid var(--cy);border-radius:6px;padding:9px 12px;margin:8px 0;font-size:12px;color:var(--dim)">
      <b style="color:var(--txt)">Qué hace.</b> Un conjunto de precios sobre eventos ligados por lógica o es coherente, o regala dinero. De Finetti demostró en 1937 que los precios coherentes son exactamente los que caen dentro de la envolvente de los mundos lógicamente posibles; si un precio cae fuera, el teorema de separación devuelve <b>la cartera exacta</b> que cobra pase lo que pase.<br><br>
      <b style="color:var(--txt)">Por qué no lo hace nadie aquí.</b> Polymarket comprueba la coherencia dentro de cada evento, nunca entre eventos distintos. Cruzarlos exigía extraer relaciones lógicas de miles de preguntas escritas en inglés corriente, que no era barato hasta que hubo modelos de lenguaje. Y los fondos grandes no están: el mercado es demasiado pequeño para ellos.<br><br>
      <b style="color:var(--txt)">Qué puede fallar.</b> La aritmética no: el pago se comprueba mundo a mundo. Lo que puede fallar es que una relación esté mal clasificada. Por eso las <b>implicaciones por fecha</b> —si pasa antes de septiembre, pasa antes de diciembre— se extraen por regla y no dependen de ningún modelo, y cada hallazgo dice de qué relaciones depende.
    </div>
    <div class="chips"><button id="co-run">▶ Buscar incoherencias</button>
      <label class="st"><input type="checkbox" id="co-ia"> incluir relaciones del modelo (pueden fallar)</label>
      <span class="st" id="co-st">Tarda unos segundos: enumera todos los mundos posibles de cada grupo de mercados ligados.</span></div>
    <div class="grid g4" style="margin:8px 0">
      <div class="kpi c3"><div class="k">RELACIONES</div><div class="v" id="co1">—</div><div class="s" id="co1s">restricciones lógicas encontradas</div></div>
      <div class="kpi"><div class="k">MUNDOS EXAMINADOS</div><div class="v" id="co2">—</div><div class="s" id="co2s">combinaciones lógicamente posibles</div></div>
      <div class="kpi c2"><div class="k">INCOHERENCIAS</div><div class="v" id="co3">—</div><div class="s" id="co3s">precios que se contradicen</div></div>
      <div class="kpi c4"><div class="k">COBRABLES</div><div class="v" id="co4">—</div><div class="s" id="co4s">tras pagar la horquilla</div></div>
    </div>
    <div class="p" style="margin-bottom:8px"><h3>CARTERAS CON PAGO GARANTIZADO</h3>
      <div class="bd" style="overflow:auto"><table><thead><tr><th style="width:11%">Por unidad</th><th style="width:11%">Mundos</th><th style="width:13%">Depende de</th><th>Qué hacer</th></tr></thead><tbody id="co-arb"></tbody></table></div></div>
    <div class="p"><h3>INCOHERENCIAS DE PRECIO <span class="st" style="font-weight:400;text-transform:none">— no todas se pueden cobrar, y se dice cuáles</span></h3>
      <div class="bd" style="overflow:auto"><table><thead><tr><th style="width:34%">Esto implica…</th><th style="width:34%">…esto</th><th style="width:9%">Exceso</th><th style="width:9%">Origen</th><th>Lectura</th></tr></thead><tbody id="co-inc"></tbody></table></div></div>
  </div>
</div>
<div class="view" id="v-lib">
  <div class="grid g4" style="margin-bottom:8px">
    <div class="kpi"><div class="k">IMPLEMENTADO</div><div class="v" id="l1">—</div><div class="s">métodos en producción</div></div>
    <div class="kpi c2"><div class="k">EN COLA</div><div class="v" id="l2">—</div><div class="s">por orden de prioridad</div></div>
    <div class="kpi c3"><div class="k">DESCARTADO</div><div class="v" id="l3">—</div><div class="s">no aplica a binarios</div></div>
    <div class="kpi c4"><div class="k">CUELLO DE BOTELLA</div><div class="v" id="l4" style="font-size:15px">muestra</div><div class="s">no faltan métodos, falta evidencia</div></div>
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

<div id="fe"><div id="feb">
  <div id="feh">
    <div style="min-width:0"><h2 id="fe-n">—</h2><div class="sub" id="fe-s">—</div></div>
    <button id="fex">✕ CERRAR · Esc</button>
  </div>
  <div id="fec">
    <div class="dp full"><h4 id="fe-h1">Lo esencial</h4><div class="c"><div class="mg" id="fe-met"></div></div></div>
    <div class="dp" style="height:340px"><h4 id="fe-h2">Precio · último año
      <span class="chips" style="margin-left:auto;padding:0">
        <button id="fe-tab-p" class="on" style="padding:3px 9px;font-size:10px">Propio</button>
        <button id="fe-tab-tv" style="padding:3px 9px;font-size:10px">TradingView</button>
      </span></h4>
      <div class="c" style="flex:1" id="fe-px"></div>
      <div class="c" style="flex:1;display:none" id="fe-tv"></div></div>
    <div class="dp" style="height:270px"><h4 id="fe-h3">Avisos oficiales a la SEC (8-K)</h4><div class="c" style="flex:1;overflow:auto" id="fe-8k"></div></div>
    <div class="dp" style="height:230px"><h4 id="fe-h4">Pleitos en tribunales</h4><div class="c" style="flex:1;overflow:auto" id="fe-lit"></div></div>
    <div class="dp" style="height:230px"><h4 id="fe-h5">Noticias</h4><div class="c" style="flex:1;overflow:auto" id="fe-news"></div></div>
    <div class="dp full"><h4 id="fe-h6">Contratos del Pentágono que podrían ser suyos</h4><div class="c" style="overflow:auto;max-height:200px" id="fe-con"></div></div>
  </div>
</div></div>

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

var CON=[],PM=[],MATCH=[],NEWS={},NSRC={},ERR={},VIEW="ini",SORT={k:"amount",d:-1},FP="all",PF="all",RG="Todas",WO=false,NR="Pentágono";
var W={};try{W=JSON.parse(localStorage.getItem("mor_w")||"{}")}catch(e){W={}}
function sw(){try{localStorage.setItem("mor_w",JSON.stringify(W))}catch(e){}}
function $(i){return document.getElementById(i)}
function f$(n){return n>=1e9?"$"+(n/1e9).toFixed(2)+"B":n>=1e6?"$"+(n/1e6).toFixed(1)+"M":n>=1e3?"$"+Math.round(n/1e3)+"K":"$"+Math.round(n)}
/* Clave de acceso del usuario. Se guarda solo en su navegador y viaja en la
   cabecera Authorization, no en la URL: las URLs quedan en historiales y registros. */
function morKey(){try{return localStorage.getItem("mor_key")||""}catch(e){return ""}}
function setKey(k){try{k?localStorage.setItem("mor_key",k):localStorage.removeItem("mor_key")}catch(e){}}
function api(ruta,opt){
 opt=opt||{};var k=morKey();
 if(k){opt.headers=opt.headers||{};opt.headers.authorization="Bearer "+k}
 return fetch(ruta,opt).then(function(r){
  if(r.status===401||r.status===403||r.status===429){
   return r.json().catch(function(){return{}}).then(function(j){
    throw new Error(j.error||("acceso denegado ("+r.status+")"))})}
  return r})}

function esc(s){return (s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;")}
function lt(id,st,tx){var e=$(id);if(!e)return;e.className="lt "+st;if(tx)e.lastElementChild.textContent=tx}
function sk(n){var o="";for(var i=0;i<(n||4);i++)o+="<div class='sk' style='width:"+(92-i*11)+"%'></div>";return o}
function eur(n){n=+n||0;
 // Siempre con dos decimales: "10.809" con separador español se lee como 10,8 de
 // un vistazo y aquí eso puede ser un cero de diferencia.
 return n.toLocaleString("es-ES",{minimumFractionDigits:2,maximumFractionDigits:2})+" €"}
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

/* Grafico de precio estilo mesa quant: precio, medias 50/200, retrocesos de
   Fibonacci sobre el rango del periodo, sombreado de la maxima caida y cruceta.
   Recibe cierres escalares -que es lo que devuelve la API- y no necesita fechas. */
function mediaMovil(c,p){var o=[],a=0;for(var i=0;i<c.length;i++){a+=c[i];if(i>=p)a-=c[i-p];o.push(i>=p-1?a/p:null)}return o}
function precioChart(el,c,op){
 op=op||{};
 if(!el)return;
 if(!c||c.length<5){el.innerHTML=emp("\\uD83D\\uDCC9",T("Sin datos de precio.","No price data."));return}
 var W=780,H=250,ml=8,mr=62,mt=14,mb=20,iw=W-ml-mr,ih=H-mt-mb;
 var lo=Math.min.apply(null,c), hi=Math.max.apply(null,c), rg=(hi-lo)||1;
 // Un 6% de aire arriba y abajo para que la linea no bese los bordes.
 var y0=lo-rg*0.06, y1=hi+rg*0.06, yr=y1-y0;
 var X=function(i){return ml+(c.length>1?i*iw/(c.length-1):0)};
 var Y=function(v){return mt+ih-((v-y0)/yr)*ih};
 var dec=hi<10?3:(hi<1000?2:0);
 var f=function(v){return v.toFixed(dec)};

 // --- maxima caida: del pico anterior al valle mas profundo ---
 var pico=c[0],ipico=0,mejorPico=0,mejorValle=0,peor=0;
 for(var i=0;i<c.length;i++){
  if(c[i]>pico){pico=c[i];ipico=i}
  var d=c[i]/pico-1;
  if(d<peor){peor=d;mejorPico=ipico;mejorValle=i}
 }

 var g="";
 // rejilla y eje de precios a la derecha
 for(var k=0;k<=4;k++){
  var v=y0+yr*k/4, y=Y(v);
  g+="<line x1='"+ml+"' y1='"+y.toFixed(1)+"' x2='"+(W-mr)+"' y2='"+y.toFixed(1)+"' stroke='#161d27'/>"+
     "<text x='"+(W-mr+6)+"' y='"+(y+3.5).toFixed(1)+"' fill='#5a636d' font-size='10'>"+f(v)+"</text>";
 }
 // --- retrocesos de Fibonacci sobre el rango del periodo ---
 if(op.fib!==false){
  [0,0.236,0.382,0.5,0.618,1].forEach(function(r){
   var v=hi-(hi-lo)*r, y=Y(v);
   g+="<line x1='"+ml+"' y1='"+y.toFixed(1)+"' x2='"+(W-mr)+"' y2='"+y.toFixed(1)+
      "' stroke='#8b7fc7' stroke-width='.8' stroke-dasharray='2,4' opacity='.5'/>"+
      "<text x='"+(ml+4)+"' y='"+(y-3).toFixed(1)+"' fill='#8b7fc7' font-size='9' opacity='.85'>"+
      (r*100).toFixed(1).replace(".0","")+"%</text>";
  });
 }
 // --- zona de maxima caida ---
 if(peor<-0.05&&mejorValle>mejorPico){
  g+="<rect x='"+X(mejorPico).toFixed(1)+"' y='"+mt+"' width='"+(X(mejorValle)-X(mejorPico)).toFixed(1)+
     "' height='"+ih+"' fill='#f0605d' opacity='.07'/>"+
     "<text x='"+((X(mejorPico)+X(mejorValle))/2).toFixed(1)+"' y='"+(mt+12)+
     "' text-anchor='middle' fill='#f0605d' font-size='9' opacity='.9'>"+(peor*100).toFixed(0)+"%</text>";
 }
 // --- area y linea de precio ---
 var pts=c.map(function(v,i){return X(i).toFixed(1)+","+Y(v).toFixed(1)}).join(" ");
 g+="<polygon points='"+ml+","+(mt+ih)+" "+pts+" "+X(c.length-1).toFixed(1)+","+(mt+ih)+
    "' fill='url(#gpx)' opacity='.5'/>"+
    "<polyline points='"+pts+"' fill='none' stroke='#5aa8c7' stroke-width='1.5' vector-effect='non-scaling-stroke'/>";
 // --- medias moviles ---
 [[50,"#e3a44a"],[200,"#8b7fc7"]].forEach(function(m){
  if(c.length<m[0]+2)return;
  var mm=mediaMovil(c,m[0]),p=[];
  for(var i=0;i<mm.length;i++)if(mm[i]!==null)p.push(X(i).toFixed(1)+","+Y(mm[i]).toFixed(1));
  if(p.length>1)g+="<polyline points='"+p.join(" ")+"' fill='none' stroke='"+m[1]+
   "' stroke-width='1.1' opacity='.8' vector-effect='non-scaling-stroke'/>";
 });
 // --- ultimo precio, con su etiqueta en el eje ---
 var uv=c[c.length-1],uy=Y(uv);
 g+="<line x1='"+ml+"' y1='"+uy.toFixed(1)+"' x2='"+(W-mr)+"' y2='"+uy.toFixed(1)+
    "' stroke='#e6edf3' stroke-width='.7' stroke-dasharray='3,3' opacity='.55'/>"+
    "<circle cx='"+X(c.length-1).toFixed(1)+"' cy='"+uy.toFixed(1)+"' r='3' fill='#e6edf3'/>"+
    "<rect x='"+(W-mr+2)+"' y='"+(uy-8).toFixed(1)+"' width='56' height='16' rx='2' fill='#e6edf3'/>"+
    "<text x='"+(W-mr+8)+"' y='"+(uy+3.5).toFixed(1)+"' fill='#07090c' font-size='10' font-weight='700'>"+f(uv)+"</text>";

 el.innerHTML=
  "<div style='display:flex;gap:12px;font-size:9px;color:var(--dim2);padding:0 4px 3px;flex-wrap:wrap'>"+
   "<span><b style='color:#5aa8c7'>&#9473;</b> "+T("precio","price")+"</span>"+
   "<span><b style='color:#e3a44a'>&#9473;</b> "+T("media 50","50-day avg")+"</span>"+
   "<span><b style='color:#8b7fc7'>&#9473;</b> "+T("media 200","200-day avg")+"</span>"+
   "<span><b style='color:#8b7fc7'>&#9476;</b> Fibonacci</span>"+
   "<span><b style='color:#f0605d'>&#9608;</b> "+T("peor caída","max drawdown")+"</span>"+
  "</div>"+
  "<svg viewBox='0 0 "+W+" "+H+"' style='width:100%;height:calc(100% - 14px)' preserveAspectRatio='none'>"+
   "<defs><linearGradient id='gpx' x1='0' y1='0' x2='0' y2='1'>"+
    "<stop offset='0%' stop-color='#5aa8c7' stop-opacity='.34'/>"+
    "<stop offset='100%' stop-color='#5aa8c7' stop-opacity='0'/></linearGradient></defs>"+
   g+"<g class='cruz'></g></svg>";

 // --- cruceta: lee el precio del punto que senala el raton ---
 var svg=el.querySelector("svg"),cruz=svg.querySelector(".cruz");
 svg.addEventListener("mousemove",function(ev){
  var r=svg.getBoundingClientRect();
  var i=Math.round(((ev.clientX-r.left)/r.width*W-ml)/(iw||1)*(c.length-1));
  if(i<0||i>=c.length){cruz.innerHTML="";return}
  var x=X(i),y=Y(c[i]),izq=x>W*0.6;
  cruz.innerHTML="<line x1='"+x.toFixed(1)+"' y1='"+mt+"' x2='"+x.toFixed(1)+"' y2='"+(mt+ih)+
   "' stroke='#e6edf3' stroke-width='.7' opacity='.45'/>"+
   "<circle cx='"+x.toFixed(1)+"' cy='"+y.toFixed(1)+"' r='3.5' fill='#e6edf3'/>"+
   "<text x='"+(izq?x-8:x+8).toFixed(1)+"' y='"+(y-9).toFixed(1)+"' fill='#e6edf3' font-size='11' font-weight='700' text-anchor='"+
   (izq?"end":"start")+"'>"+f(c[i])+"</text>"+
   "<text x='"+(izq?x-8:x+8).toFixed(1)+"' y='"+(y+4).toFixed(1)+"' fill='#8b949e' font-size='9' text-anchor='"+
   (izq?"end":"start")+"'>"+(c.length-1-i)+T(" sesiones atrás"," sessions ago")+"</text>";
 });
 svg.addEventListener("mouseleave",function(){cruz.innerHTML=""});
}

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
 var tot=parts.reduce(function(a,p){return a+p.v},0)||1,R=64,r=53,cx=90,cy=90,ang=-Math.PI/2,seg="";
 parts.forEach(function(p){
  var a2=ang+2*Math.PI*(p.v/tot),lg=(a2-ang)>Math.PI?1:0;
  var x1=cx+R*Math.cos(ang),y1=cy+R*Math.sin(ang),x2=cx+R*Math.cos(a2),y2=cy+R*Math.sin(a2);
  var x3=cx+r*Math.cos(a2),y3=cy+r*Math.sin(a2),x4=cx+r*Math.cos(ang),y4=cy+r*Math.sin(ang);
  seg+="<path d='M"+x1.toFixed(1)+" "+y1.toFixed(1)+" A"+R+" "+R+" 0 "+lg+" 1 "+x2.toFixed(1)+" "+y2.toFixed(1)+
   " L"+x3.toFixed(1)+" "+y3.toFixed(1)+" A"+r+" "+r+" 0 "+lg+" 0 "+x4.toFixed(1)+" "+y4.toFixed(1)+" Z' fill='"+p.c+"'><title>"+p.k+" "+f$(p.v)+"</title></path>";
  ang=a2});
 var lg2=parts.map(function(p){return "<span><i style='background:"+p.c+"'></i>"+p.k+" "+Math.round(100*p.v/tot)+"% · "+f$(p.v)+"</span>"}).join("");
 el.innerHTML="<div style='display:flex;align-items:center;gap:6px;padding:6px'><svg viewBox='0 0 180 180' style='width:150px;height:150px;flex:0 0 auto'>"+seg+
 "<text x='90' y='84' text-anchor='middle' style='font-size:10px;fill:#5a636d;letter-spacing:.8px'>TOTAL</text>"+
 "<text x='90' y='104' text-anchor='middle' style='font-size:17px;fill:#e6edf3;font-weight:500'>"+f$(tot)+"</text></svg>"+
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
 var vs=ms.map(function(m){return Math.log10(1+m.vol24)});
 var mv=Math.max.apply(null,ms.map(function(m){return m.vol24}))||1;
 var lmin=Math.min.apply(null,vs), lmax=Math.max.apply(null,vs), lrg=(lmax-lmin)||1;
 var pts=ms.map(function(m){
  var x=ml+(m.price)*iw, lv=(Math.log10(1+m.vol24)-lmin)/lrg;
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
 return "<div class='hb"+(x.prime?" pr":"")+"' data-con='"+esc(x.name)+"' style='cursor:pointer'><div class='nm' title='"+esc(x.name)+"'>"+esc(x.name)+"</div><div class='tr'><i style='width:"+w+"%'></i></div><div class='vl'>"+f$(x.amount)+"</div></div>"}).join("")}
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
 if(CON.length){spark($("k1sp"),CON.slice(0,26).map(function(c){return c.amount}).reverse(),"#e3a44a");
  spark($("k2sp"),rad.slice(0,26).map(function(c){return c.amount}).reverse(),"#00e08a")}
 if(PM.length){spark($("k3sp"),PM.slice(0,26).map(function(m){return m.vol24}).reverse(),"#22d3ee");
  spark($("k4sp"),PM.slice(0,26).map(function(m){return Math.abs(m.chg)*100}),"#a78bfa")}
 $("meta").textContent=(CON.length?CON.length+" CONTRATOS":"")+(PM.length?"  ·  "+PM.length+" MERCADOS":"")+"  ·  "+SC.length+" SMALL CAPS";

 /* flujo diario */
 if(CON.length){
  var by={};CON.forEach(function(c){if(c.date)by[c.date]=(by[c.date]||0)+c.amount});
  var ks=Object.keys(by).sort(),pts=ks.map(function(k){return{k:k,v:by[k]}});
  $("h-flow").textContent=pts.length+T(" días con actividad"," days with activity");
  areaChart($("d-flow"),pts,"#e3a44a",f$);
  var cum=0,cp=pts.map(function(p){cum+=p.v;return{k:p.k,v:cum}});
  areaChart($("c-cum"),cp,"#00e08a",f$);
  donut($("d-donut"),[{k:T("Gigantes","Primes"),v:tot-rtot,c:"#232c38"},{k:T("Resto (tu terreno)","Rest (your ground)"),v:rtot,c:"#e3a44a"}]);
 }else{var m0=ERR.con?emp("⚠","USAspending no responde.<br>Pulsa ⟳ REFRESH."):sk(5);
  $("d-flow").innerHTML=m0;$("c-cum").innerHTML=m0;$("d-donut").innerHTML=m0}

 $("h-con").textContent=rad.length?rad.length+T(" no-gigantes"," non-primes"):"";
 $("d-bars").innerHTML=CON.length?hbars(CON.slice(0,12),CON[0].amount):(ERR.con?emp("⚠","Sin datos"):sk(6));

 $("d-match").innerHTML=MATCH.length?MATCH.map(function(m){
  return "<div class='mt-row' data-emp='"+esc(m.s.tk)+"' style='cursor:pointer'><span class='tg t6'>MATCH</span> <b>"+esc(m.c.name)+"</b><div style='margin-top:4px' class='dsc'>"+f$(m.c.amount)+" — coincide con <b style='color:var(--vi)'>"+esc(m.s.name)+"</b> ("+m.s.tk+") · <a target='_blank' rel='noopener' href='https://simplywall.st/search?query="+encodeURIComponent(m.s.name)+"'>ficha →</a></div></div>"}).join("")
  :(CON.length?emp("🎯","Ningún cruce en 30 días.<br>Es lo normal: cuando salte uno, será señal de verdad."):(ERR.con?emp("⚠","Sin datos"):sk(3)));

 scatter($("d-scat"),PM.slice(0,60));
 hist($("d-hist"),PM.map(function(m){return m.price}));

 var mv=PM.slice().sort(function(a,b){return Math.abs(b.chg)-Math.abs(a.chg)}).slice(0,12);
 $("d-mov").innerHTML=mv.length?"<table><tbody>"+mv.map(function(m){
  /* Sorpresa de Aitchison: pasar de 1% a 2% DOBLA la probabilidad y sale casi
     invisible midiendo en puntos. Se anade la lectura correcta al lado. */
  var srp=aitSorpresa(m.price-(m.chg||0), m.price);
  return "<tr data-q='"+esc(m.q)+"' style='cursor:pointer' title='"+esc(m.q)+"'><td class='el'><a target='_blank' rel='noopener' href='"+m.url+"'>"+esc(m.q.slice(0,56))+"</a>"+
   (srp!==null&&srp>0.35?"<div class='dsc'><span class='t1'>"+T("sorpresa","surprise")+" "+srp.toFixed(2)+"</span> "+
     T("· en proporción es un movimiento grande","· proportionally a big move")+"</div>":"")+"</td>"+
  "<td class='n' style='width:50px'>"+(m.price*100).toFixed(1)+"%</td>"+
  "<td class='n "+(m.chg>=0?"up":"dn")+"' style='width:54px'>"+(m.chg>=0?"+":"")+(m.chg*100).toFixed(1)+"</td>"+
  "<td class='n dsc' style='width:58px'>"+f$(m.vol24)+"</td></tr>"}).join("")+"</tbody></table>":sk(5);

 $("d-heat").innerHTML=PM.length?"<div class='heat'>"+PM.filter(function(m){return m.price>0.005&&m.price<0.995}).slice(0,30).map(function(m){var p=m.price,c;
  if(p>=.75)c="rgba(0,224,138,.30)";else if(p>=.55)c="rgba(0,224,138,.16)";
  else if(p>=.45)c="rgba(120,140,160,.13)";else if(p>=.25)c="rgba(255,77,94,.16)";else c="rgba(255,77,94,.30)";
  return "<div class='hc' data-id='"+esc(String(m.id||""))+"' data-q='"+esc(m.q)+"' style='background:"+c+";cursor:pointer' title='"+esc(m.q)+"'><div class='t'>"+esc(m.q.slice(0,24))+"</div><div class='m'>"+(p*100).toFixed(0)+"%<span class='"+(m.chg>=0?"up":"dn")+"' style='font-size:9px;margin-left:4px'>"+(m.chg>=0?"+":"")+(m.chg*100).toFixed(1)+"</span></div></div>"}).join("")+"</div>":sk(6);

 var wl=SC.filter(function(s){return W[s.tk]});
 $("d-wl").innerHTML=wl.length?"<table><tbody>"+wl.map(function(s){
  return "<tr><td>"+esc(s.name)+"<div class='dsc'>"+s.tk+"</div></td><td class='n'><a target='_blank' rel='noopener' href='https://www.tradingview.com/chart/?symbol="+encodeURIComponent(s.tk)+"'>📈</a> <a target='_blank' rel='noopener' href='https://simplywall.st/search?query="+encodeURIComponent(s.name)+"'>🧱</a></td></tr>"}).join("")+"</tbody></table>"
  :emp("⭐","Marca ☆ en SMALL CAPS<br>para seguirlas aquí.");

 var cn={};SC.forEach(function(s){cn[s.r]=(cn[s.r]||0)+1});
 var ks2=Object.keys(cn).sort(function(a,b){return cn[b]-cn[a]}),mxr=cn[ks2[0]]||1;
 $("d-reg").innerHTML=ks2.map(function(r){var w=Math.round(100*cn[r]/mxr);
  return "<div class='hb' data-reg='"+esc(r)+"' style='cursor:pointer' title='"+T("Ver las empresas de ","See companies in ")+esc(r)+"'><div class='nm'>"+r+"</div><div class='tr'><i style='width:"+w+"%'></i></div><div class='vl' style='color:var(--txt)'>"+cn[r]+"</div></div>"}).join("");

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
   return "<tr data-con='"+esc(d.name)+"' style='cursor:pointer'><td class='el' title='"+esc(d.name)+"'>"+esc(d.name)+"</td><td class='amt'>"+f$(d.amount)+"</td><td class='n dsc'>"+d.date+"</td>"+
   "<td><span class='tg "+(d.prime?"t2":"t1")+"'>"+(d.prime?"GIGANTE":"⚡RADAR")+"</span></td><td class='dsc el' title='"+esc(d.desc)+"'>"+esc((d.desc||"").slice(0,130))+"</td></tr>"}).join("")
   :"<tr><td colspan='5'>"+(ERR.con?emp("⚠","Sin conexión con USAspending"):emp("🔍","Nada con esos filtros"))+"</td></tr>"}

 if(VIEW==="sc"){
  $("s-chips").innerHTML=REG.map(function(r){return "<button data-r='"+r+"' class='"+(r===RG?"on":"")+"'>"+r+"</button>"}).join("");
  var r2=SC.filter(function(s){return (RG==="Todas"||s.r===RG)&&(!WO||W[s.tk])&&(!Q||(s.name+" "+s.c+" "+s.n+" "+s.tk).toLowerCase().indexOf(Q)>=0)});
  $("s-cnt").textContent=r2.length+" de "+SC.length;r2=srt(r2,"name");
  $("s-rows").innerHTML=r2.length?r2.map(function(s){
   return "<tr data-tk='"+s.tk+"' style='cursor:pointer'><td><span class='str "+(W[s.tk]?"on":"")+"' data-tk='"+s.tk+"'>"+(W[s.tk]?"★":"☆")+"</span></td>"+
   "<td>"+esc(s.name)+"<div class='dsc'>"+s.tk+"</div></td><td class='dsc' style='color:var(--txt)'>"+esc(s.c)+"</td>"+
   "<td><span class='tg "+SZC[s.z]+"'>"+SZ[s.z]+"</span></td><td class='dsc'>"+esc(s.n)+"</td>"+
   "<td><a target='_blank' rel='noopener' href='https://www.tradingview.com/chart/?symbol="+encodeURIComponent(s.tk)+"'>TradingView</a> · <a target='_blank' rel='noopener' href='https://simplywall.st/search?query="+encodeURIComponent(s.name)+"'>Simply Wall St</a></td></tr>"}).join("")
   :"<tr><td colspan='6'>"+emp("🔍","Ninguna empresa con esos filtros")+"</td></tr>"}

 if(VIEW==="pm"){
  /* Se pinta desde BQ (datos enriquecidos del Worker: semaforo, estimacion, evento)
     en vez de la consulta basica. Antes habia DOS fuentes para lo mismo y la vista
     de Polymarket era la pobre: sin semaforo, sin estimacion y sin poder abrir el
     detalle al hacer clic. */
  var fuente = (BQ && BQ.markets && BQ.markets.length) ? BQ.markets : null;
  if(!fuente){
   $("p-rows").innerHTML = "<tr><td colspan='8'>" + (BLOAD ? sk(6) : emp("\\u23F3","Cargando mercados\\u2026")) + "</td></tr>";
   if(!BLOAD) loadBrain();
  } else {
   pmPintarCategorias(fuente);
   var qb = ($("pm-q").value || "").toLowerCase();
   var r3 = fuente.filter(function(m){
    if(PMCAT !== "todas" && pmCategoria(m) !== PMCAT) return false;
    if(PF === "sig" && !(m.sg && m.sg.length)) return false;
    if(PF === "fiable" && !(m.sem && m.sem.luz === "verde")) return false;
    var t = (m.q + " " + (m.ev || "")).toLowerCase();
    if(qb && t.indexOf(qb) < 0) return false;
    if(Q && t.indexOf(Q) < 0) return false;
    return true });
   $("p-cnt").textContent = "(" + r3.length + ")";
   $("p-st").textContent = r3.length ? ("vol 24h " + f$(r3.reduce(function(a,m){ return a + (m.vol24||0) }, 0))) : "";
   r3 = r3.slice().sort(function(a,b){ return (b.vol24||0) - (a.vol24||0) });
   var LUZ = { verde:T("fiable","reliable"), ambar:T("reservas","caution"), rojo:T("cuidado","risky") };
   $("p-rows").innerHTML = r3.length ? r3.slice(0,200).map(function(m){
    var sm = m.sem || { luz:"ambar", avisos:[], texto:"" };
    var es = m.est || { est:m.p, confianza:"baja" };
    var p = (m.p*100).toFixed(1);
    return "<tr data-mid='" + m.id + "' style='cursor:pointer'>" +
     "<td><span class='sem " + sm.luz + "' title='" +
       esc(sm.texto + (sm.avisos.length ? " \\u2014 " + sm.avisos.join(" \\u00B7 ") : "")) +
       "'><i></i>" + LUZ[sm.luz] + "</span></td>" +
     "<td class='el' title='" + esc(m.q) + "'>" + esc(m.q.slice(0,72)) +
       (m.ev ? "<div class='dsc'>" + esc(m.ev.slice(0,50)) + "</div>" : "") + "</td>" +
     "<td class='n'>" + p + "%<div class='pbar'><i style='width:" + p + "%'></i></div></td>" +
     "<td class='n'>" + (es.est*100).toFixed(1) + "%<div class='conf'>" + esc(es.confianza) + "</div></td>" +
     "<td class='n mates " + ((m.c1d||0) >= 0 ? "up" : "dn") + "'>" +
       ((m.c1d||0) >= 0 ? "+" : "") + ((m.c1d||0)*100).toFixed(1) + "</td>" +
     "<td class='n'>" + f$(m.vol24||0) + "</td>" +
     "<td class='n dsc'>" + f$(m.liq||0) + "</td>" +
     "<td>" + (m.sg||[]).map(function(g){ return "<span class='tg " + g[1] + "'>" + g[0] + "</span>" }).join("") + "</td>" +
    "</tr>" }).join("")
    : "<tr><td colspan='8'>" + emp("\\uD83D\\uDD0D","Ning\\u00FAn mercado con esos filtros") + "</td></tr>";
  }
 }

 if(VIEW==="quant"){renderQuant()}
 if(VIEW==="ver"){renderVer()}
 if(VIEW==="brain"){renderBrain()}
 if(VIEW==="inv"){renderRel()}
 if(VIEW==="sim"){renderSim();renderMC();renderPaper()}
 if(VIEW==="cart"){renderCart()}
 if(VIEW==="lib"){renderLib()}
 if(VIEW==="ini"){renderIni()}
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
 // Lo recien pintado sale en castellano: se vuelve a pasar el diccionario.
 if(typeof traducir==="function"&&(MODO==="simple"||IDIOMA==="en"))traducir();
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
  api("/api/px?s="+encodeURIComponent(SMAP[s.tk]),{cache:"no-store"})
   .then(function(r){return r.json()})
   .then(function(j){if(j&&j.c&&j.c.length>30)PX[s.tk]={c:j.c,d:j.d,spread:j.spread}})
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
  var msg=QLOAD?emp("⏳","Descargando precios de 32 empresas…<br>Tarda unos segundos."):
   (Object.keys(PX).length?emp("📊","Calculando…"):
    emp("📈","Los precios se cargan solos al entrar.<br>Si no aparecen, pulsa ⟳ arriba."));
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
  return "<div class='hb' data-tk='"+esc(q.s.tk)+"' style='cursor:pointer'><div class='nm' title='"+esc(q.s.name)+"'>"+esc(q.s.name)+"</div>"+
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
  return "<tr data-tk='"+q.s.tk+"' style='cursor:pointer'><td>"+esc(q.s.name)+"<div class='dsc'>"+q.s.tk+"</div></td>"+
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
   El motor de Wang (normal CDF, cuantil normal y ajuste de λ por bisección) vivía
   aquí, donde cualquiera lo leía abriendo el inspector. Se movió al Worker: ahora
   /api/pmq devuelve ya calculados \`fair\`, \`edge\` y \`lam\`. El cliente solo pinta.
   La curva de distorsión se dibuja con la λ que manda el servidor.               */

var RL=null,RLLOAD=false;
function loadRel(){
 if(RLLOAD)return;RLLOAD=true;
 $("rl-st").textContent="Buscando… la IA clasifica cada par y la aritmética lo comprueba.";
 api("/api/relaciones?n="+(+$("rl-n").value||14)+"&amplitud="+$("rl-a").value,{cache:"no-store"})
  .then(function(r){return r.json()})
  .then(function(j){
   if(j.error)throw new Error(j.error);
   RL=j;
   $("rl-st").textContent=j.paresCandidatos+" de "+j.totalCandidatos+" pares · "+j.consultasIA+
     " consultas · "+j.deCache+" de memoria · "+j.hallazgos.length+" contradicción(es)"+
     " · el agente del cron sigue barriendo solo"})
  .catch(function(e){RL=null;$("rl-st").textContent="Error: "+(e.message||e)})
  .then(function(){RLLOAD=false;render()})}

function renderRel(){
 if(!RL){$("rl-res").innerHTML=emp("🔗","Pulsa «Buscar contradicciones».<br>Compara apuestas de eventos distintos que hablan de lo mismo.");return}
 $("rl-cnt").textContent="("+RL.hallazgos.length+")";
 if(!RL.hallazgos.length){
  $("rl-res").innerHTML=emp("✓","Ninguna contradicción ahora mismo.<br><span style='font-size:11px'>Revisadas "+RL.paresCandidatos+" parejas. Que no haya es lo normal: significa que el mercado es coherente.</span>");return}
 $("rl-res").innerHTML=RL.hallazgos.map(function(h){
  return "<div style='padding:11px 10px;border-bottom:1px solid var(--line2)'>"+
   "<div style='display:flex;align-items:center;gap:9px;margin-bottom:7px'>"+
     "<b class='up' style='font-size:15px'>+"+(h.neto*100).toFixed(2)+"%</b>"+
     "<span class='t5'>"+esc(h.rel==="EXCLUYE"?"no pueden pasar las dos":"una implica la otra")+"</span>"+
     "<span class='dim' style='font-size:10.5px'>neto tras costes</span></div>"+
   "<div class='fila' style='border:0;padding:2px 0'><b>"+(h.a.p*100).toFixed(1)+"%</b> · "+
     "<a href='"+esc(h.a.url)+"' target='_blank' rel='noopener'>"+esc(h.a.q)+"</a></div>"+
   "<div class='fila' style='border:0;padding:2px 0'><b>"+(h.b.p*100).toFixed(1)+"%</b> · "+
     "<a href='"+esc(h.b.url)+"' target='_blank' rel='noopener'>"+esc(h.b.q)+"</a></div>"+
   "<div class='st' style='padding:6px 0 0'>"+esc(h.dice)+" → <b>"+esc(h.accion)+"</b></div>"+
   "<div class='st' style='padding:2px 0 0;color:var(--am)'>⚠ "+esc(h.comprobar)+"</div>"+
  "</div>"}).join("")}

/* Categorias. Se deducen de la pregunta porque la API no las da de forma fiable.
   Es lo que convierte una lista de 400 mercados en algo navegable. */
var PMCAT = "todas";
var PMCATS = [
 ["politica","Política",/\\b(election|president|senate|congress|parliament|minister|vote|poll|candidate|nomin|party|government|impeach)/i],
 ["geopolitica","Geopolítica",/\\b(war|invade|invasion|strike|ceasefire|nato|troops|military|nuclear|missile|sanction|iran|ukraine|russia|israel|taiwan|china|venezuela|blockade|hostage)/i],
 ["cripto","Cripto",/\\b(bitcoin|btc|ethereum|eth|solana|crypto|coin|token|blockchain|stablecoin)/i],
 ["economia","Economía",/\\b(fed|rate|inflation|gdp|recession|unemploy|cpi|tariff|ipo|earnings|nasdaq)/i],
 ["clima","Clima",/\\b(temperature|weather|rain|snow|hurricane|storm|celsius|fahrenheit|degrees)/i],
 ["tecnologia","Tecnología",/\\b(openai|gpt|gemini|claude|anthropic|spacex|tesla|apple|google|nvidia|chip)/i],
 ["deporte","Deporte",/\\b(vs\\.?|nba|nfl|mlb|nhl|ufc|champion|league|cup|open|tournament|match|winner|premier|liga)/i],
 ["cultura","Cultura",/\\b(movie|film|oscar|grammy|album|box office|netflix|celebrity|nobel|ballon)/i]
];
function pmCategoria(m){
 var t = (m.q||"") + " " + (m.ev||"");
 for(var i=0;i<PMCATS.length;i++) if(PMCATS[i][2].test(t)) return PMCATS[i][0];
 return "otros"}
function pmPintarCategorias(ms){
 var c = {todas: ms.length};
 ms.forEach(function(m){ var k = pmCategoria(m); c[k] = (c[k]||0) + 1 });
 var lista = [["todas","Todas"]].concat(PMCATS.map(function(x){return [x[0],x[1]]}), [["otros","Otros"]]);
 $("pm-cat").innerHTML = lista.filter(function(x){return c[x[0]]}).map(function(x){
  return "<button data-pc='" + x[0] + "' class='" + (PMCAT===x[0]?"on":"") + "'>" + x[1] +
         " <span class='dim'>" + c[x[0]] + "</span></button>" }).join("")}

var BQ=null,BVOL={},BLOAD=false,BSORT={k:"vol24",d:-1},BLAM=0,BNLAM=0;

function loadBrain(force){
 if(BLOAD)return; if(BQ&&!force){render();return}
 BLOAD=true;$("b-st").textContent="Analizando eventos de Polymarket…";
 api("/api/pmq?pages=3",{cache:"no-store"})
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
 // λ, valor justo y sesgo vienen ya calculados del Worker: aquí solo se pinta.
 BLAM=isFinite(BQ.lam)?BQ.lam:0;
 BNLAM=BQ.nLam||0;

 BQ.markets.forEach(function(m){
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
  api("/api/pmh?t="+encodeURIComponent(m.tok)+"&i=1m",{cache:"no-store"})
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
 var cv=(BQ&&BQ.curva)||[];
 if(!cv.length)return emp("📈","Sin curva: recarga el cerebro.");
 var pts=[],pts2=[];
 for(var i=0;i<cv.length;i++){var p=cv[i][0];
  pts.push([pad+(W-pad-10)*p, H-pad-(H-pad-14)*cv[i][1]]);
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
 /* La lambda es un numero que no dice nada a nadie sin contexto. En modo sencillo
    se muestra la conclusion; en completo, la cifra. */
 /* BNLAM es ahora cuantos mercados tienen valor justo, no cuantos ajustes. */
 $("b4").textContent = (MODO==="simple")
   ? (BNLAM<2 ? "sin grupos" : "sí")
   : BLAM.toFixed(3);
 var b4s=$("b4s"); if(b4s&&BNLAM)b4s.textContent=T(BNLAM+" mercados con valor justo (dentro de su grupo)",
   BNLAM+" markets with a fair value (within their group)");
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
  return "<tr data-ev='"+esc(g.ev)+"' style='cursor:pointer'>"+
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
  var sm=m.sem||{luz:"ambar",avisos:[],texto:""};
  var es=m.est||{est:m.p,dif:0,confianza:"baja",como:""};
  var LUZ={verde:T("fiable","reliable"),ambar:T("con reservas","with caution"),rojo:T("cuidado","risky")};
  return "<tr data-mid='"+m.id+"' style='cursor:pointer'>"+
   "<td><span class='sem "+sm.luz+"' title='"+esc(sm.texto+(sm.avisos.length?" — "+sm.avisos.join(" · "):""))+"'>"+
     "<i></i>"+LUZ[sm.luz]+"</span></td>"+
   "<td title='"+esc(m.q)+"'>"+esc(m.q.slice(0,52))+
     (m.leg?" <span class='dim'>· "+esc(m.leg.slice(0,20))+"</span>":"")+"</td>"+
   "<td><b>"+bfmt(m.p,1)+"</b></td>"+
   "<td title='"+esc(es.como)+"'>"+bfmt(es.est,1)+
     "<br><span class='conf'>"+esc(es.confianza)+"</span></td>"+
   "<td class='mates "+(es.dif===null||es.dif===undefined?"":(es.dif>0?"up":"dn"))+"'>"+(es.dif===null||es.dif===undefined?"—":((es.dif>=0?"+":"")+(es.dif*100).toFixed(1)))+"</td>"+
   "<td class='mates "+(m.spreadRel>0.1?"dn":"")+"'>"+bfmt(m.spreadRel,1)+"</td>"+
   "<td class='mates "+(m.turn!==null&&m.turn<0.02?"dn":"")+"'>"+(m.turn===null?"—":m.turn.toFixed(2))+"</td>"+
   "<td class='mates'>"+(m.snorm===null?"<span class='dim'>—</span>":m.snorm.toFixed(2))+"</td>"+
   "<td class='mates'>"+(m.urg===null?"—":m.urg.toFixed(3))+"</td>"+
   "<td class='dim'>"+(m.days===null?"—":Math.round(m.days))+"</td>"+
   "<td class='mates "+(m.z>0?"up":"dn")+"'>"+m.z.toFixed(2)+"</td>"+
   "<td>"+m.sg.map(function(s){return "<span class='"+s[1]+"'>"+s[0]+"</span>"}).join(" ")+"</td>"+
  "</tr>"}).join("")||"<tr><td colspan='11'>"+emp("🔍","Sin resultados para ese filtro.")+"</td></tr>"}

/* Matematica normal estandar (Abramowitz & Stegun / Beasley-Springer-Moro).
   Se queda en el cliente A PROPOSITO: el simulador corre aqui por obligacion (el
   backtest necesita cientos de peticiones y Cloudflare gratis corta en 50), y esto
   es matematica de libro de texto que no protege nada. Lo propietario -el ajuste de
   λ sobre tus grupos, la deteccion de arbitraje, los filtros de EDGAR- vive en el
   Worker y solo responde con clave.                                              */
function nCdf(x){
 var a1=0.254829592,a2=-0.284496736,a3=1.421413741,a4=-1.453152027,a5=1.061405429,pp=0.3275911;
 var sg=x>=0?1:-1;x=Math.abs(x)/Math.SQRT2;
 var t=1/(1+pp*x);
 return 0.5*(1+sg*(1-(((((a5*t+a4)*t)+a3)*t+a2)*t+a1)*t*Math.exp(-x*x)))}
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
function wangInv(p,l){return nCdf(nPpf(p)-l)}

/* ================= SIMULADOR DE ESTRATEGIAS =================
   Corre en el NAVEGADOR a propósito: gamma-api y clob.polymarket.com sirven ambos
   con Access-Control-Allow-Origin *, y un backtest necesita cientos de peticiones,
   muy por encima del límite de 50 subpeticiones por request del plan gratuito de
   Cloudflare. Mismo patrón que ya se usa con USAspending.                        */
var BT=null,BTLOAD=false,UNIV="pm";

/* Pares con 400 sesiones diarias via /api/px. EURPLN y USDKRW no son decorativos:
   mueven los resultados de las small caps polacas y coreanas del universo.       */
var FXP=[["EURUSD=X","EUR/USD"],["GBPUSD=X","GBP/USD"],["USDJPY=X","USD/JPY"],
 ["EURPLN=X","EUR/PLN"],["USDKRW=X","USD/KRW"],["AUDUSD=X","AUD/USD"],
 ["USDINR=X","USD/INR"],["EURSEK=X","EUR/SEK"],["USDTRY=X","USD/TRY"],["DX-Y.NYB","Índice dólar"]];

var UINFO={
 pm:["Mercados de predicción de Polymarket ya resueltos.",
     "Se puede hacer backtest de verdad: cada mercado terminó en sí o en no, y el histórico del CLOB no se borra. "+
     "<b>Sesgo que queda:</b> se piden ordenados por volumen, así que la muestra son los mercados famosos. "+
     "No es sesgo de supervivencia, pero tampoco es una muestra aleatoria."],
 fx:["Divisas al contado, 10 pares, 400 sesiones diarias desde Yahoo.",
     "<b>Es el único universo aquí sin sesgo de supervivencia:</b> el euro y el yen no desaparecen, "+
     "así que la muestra de hoy es la misma que la de hace dos años. Lo que midas aquí es limpio. "+
     "A cambio son los mercados más eficientes y competidos del mundo, así que no esperes encontrar oro."],
 mc:["Memecoins en DEX. <b style='color:var(--rd)'>Aquí el backtest es imposible sin mentir.</b>",
     "Ver el panel de abajo: las que mueren desaparecen de la lista, así que solo se ven supervivientes."]};

function setUniv(u){
 UNIV=u;
 [].forEach.call(document.querySelectorAll(".su"),function(b){b.classList.toggle("on",b.dataset.u===u)});
 $("s-cfgpm").style.display=(u==="pm")?"":"none";
 var mc=$("mc-run"); if(mc){mc.disabled=(u!=="pm");mc.style.opacity=(u==="pm")?"":"0.4"}
 $("s-cfgfx").style.display=(u==="fx")?"":"none";
 $("s-cfgmc").style.display=(u==="mc")?"":"none";
 var i=UINFO[u];
 $("s-uinfo").innerHTML="<b style='color:var(--txt)'>"+i[0]+"</b><br>"+i[1];
 render()}

/* Backtest de divisas. Retorno simple (p_salida - p_entrada)/p_entrada; sin
   apalancamiento ni carry, que necesitaria tipos de interes y no los tenemos.   */
function fxRun(){
 if(BTLOAD)return;BTLOAD=true;
 var N=+$("f-n").value,H=+$("f-h").value;
 $("f-st").textContent="Descargando divisas…";
 pool(FXP,function(par){
  return api("/api/px?s="+encodeURIComponent(par[0]),{cache:"no-store"})
   .then(function(r){return r.json()})
   .then(function(j){return (j&&j.c&&j.c.length>N+H+20)?{n:par[1],c:j.c,d:j.d}:null})
   .catch(function(){return null})},4,
  function(a,b){$("f-st").textContent="Descargando divisas… "+a+"/"+b})
 .then(function(rs){
  var series=rs.filter(Boolean);
  if(series.length<3)throw new Error("no se pudieron descargar suficientes pares");
  /* VENTANAS SIN SOLAPAR. Avanzando de dia en dia con periodos de H dias, cada
     observacion comparte H-1 dias con la siguiente y el t-stat se dispara solo:
     con paso diario salian 8,47 y 7,39, que serian ventajas enormes si fueran
     reales. Avanzando de H en H cada observacion es independiente.
     Ademas se agrupa por par: 10 divisas no son 3.700 datos sueltos.            */
  var mom=[],rev=[],todo=[];
  var porPar={mom:[],rev:[],todo:[]};
  series.forEach(function(s){
   var c=s.c,acc={mom:[],rev:[],todo:[]};
   for(var i=N;i+H<c.length;i+=H){        // <- paso H, no 1
    var sig=(c[i]-c[i-N])/c[i-N];          // señal: retorno de los N dias previos
    var fwd=(c[i+H]-c[i])/c[i];            // resultado: retorno de los H siguientes
    if(!isFinite(sig)||!isFinite(fwd))continue;
    todo.push({r:fwd});acc.todo.push(fwd);
    if(sig>0.01){mom.push({r:fwd});acc.mom.push(fwd)}
    if(sig<-0.01){rev.push({r:fwd});acc.rev.push(fwd)}
   }
   ["mom","rev","todo"].forEach(function(k){
    if(acc[k].length)porPar[k].push(mean(acc[k]))})});

  // t-stat agrupado por par: el honesto. Se sustituye el ingenuo.
  function agrup(ms){
   if(!ms||ms.length<3)return null;
   var mu=mean(ms),sg=sd(ms);
   return sg>0?mu/(sg/Math.sqrt(ms.length)):0}

  var strats=[
   btStats("Momentum: comprar tras subir "+N+"d",mom),
   btStats("Reversión: comprar tras caer "+N+"d",rev),
   btStats("Comprar siempre (referencia)",todo)
  ].filter(function(x){return x.n>=20});
  ["mom","rev","todo"].forEach(function(k,i){
   if(strats[i]){strats[i].tIng=strats[i].t;
    var ta=agrup(porPar[k]); strats[i].t=(ta===null?0:ta); strats[i].nPares=porPar[k].length}});
  strats.sort(function(a,b){return b.t-a.t});
  BT={S:todo,H:H,fx:true,brier:null,brierBase:null,base:null,lam:null,cal:[],strats:strats,
      series:series.length};
  $("f-st").textContent=series.length+" pares · "+todo.length+" ventanas · señal "+N+"d, mantener "+H+"d";})
 .catch(function(e){BT=null;$("f-st").textContent="Error: "+(e.message||e)})
 .then(function(){BTLOAD=false;render()})}

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
 $("sim-st").textContent="Buscando mercados resueltos…";
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
  $("sim-st").textContent="Descargando históricos… 0/"+cand.length;

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
   function(d,t){$("sim-st").textContent="Descargando históricos… "+d+"/"+t})})
 .then(function(rows){
  var S=rows.filter(Boolean);
  if(S.length<20)throw new Error("muestra demasiado pequeña ("+S.length+")");
  S.sort(function(a,b){return new Date(a.end)-new Date(b.end)});
  BT=btMetrics(S,H);
  $("sim-st").textContent=S.length+" mercados resueltos · entrada a "+H+" días del cierre · "+new Date().toLocaleTimeString()})
 .catch(function(e){BT=null;$("sim-st").textContent="Error: "+(e.message||e)})
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
 /* rs = retornos por operacion. El test SPA los necesita para remuestrear por
    bloques; antes solo se guardaba el resumen y no habia con que remuestrear. */
 return {name:name,n:n,win:wins/n,mean:m,med:med,total:c,dd:dd,t:t,eq:eq,rs:r}}

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


/* Codigo que corre dentro del hilo aparte. Va como texto porque el terminal es
   un unico archivo; se convierte en Worker con un Blob. */
var MC_WORKER_SRC = [
"function rng32(s){var x=s>>>0;return function(){x^=x<<13;x>>>=0;x^=x>>>17;x^=x<<5;x>>>=0;return x/4294967296}}",
"self.onmessage=function(ev){",
" var d=ev.data, ss=d.ss, obs=d.obs, iters=d.iters;",
" var K=ss.length, rnd=rng32(d.seed);",
" var acum=[]; for(var k=0;k<K;k++)acum.push({suma:0,suma2:0,ge:0,muestras:new Float64Array(Math.min(iters,20000)),k:0});",
" var aviso=Math.max(1,Math.floor(iters/100));",
" for(var it=0;it<iters;it++){",
"  for(var k=0;k<K;k++){",
"   var s=ss[k], a=acum[k], t=0, p=s.p, nn=s.n, i;",
"   /* Hipotesis nula: el desenlace se sortea con la probabilidad que marca el",
"      precio. Si el precio ya es correcto, no hay ventaja que sacar. */",
"   if(s.lado===1){ for(i=0;i<nn;i++){ t += ((rnd()<p[i]?1:0)-p[i])/p[i] } }",
"   else          { for(i=0;i<nn;i++){ var o=rnd()<p[i]?1:0; t += ((1-o)-(1-p[i]))/(1-p[i]) } }",
"   a.suma+=t; a.suma2+=t*t;",
"   if(t>=obs[k])a.ge++;",
"   if(a.k<a.muestras.length)a.muestras[a.k++]=t;",
"  }",
"  if(it%aviso===0)self.postMessage({tipo:'prog',hecho:it});",
" }",
" self.postMessage({tipo:'fin',acum:acum.map(function(a){",
"  return {suma:a.suma,suma2:a.suma2,ge:a.ge,muestras:Array.prototype.slice.call(a.muestras.subarray(0,a.k))}})});",
"}"].join("\\n");

var MCW=null;
function mcLanzarWorker(ss,obs,iters,cbProg,cbFin,cbError){
 try{
  if(MCW){MCW.terminate();MCW=null}
  var url=URL.createObjectURL(new Blob([MC_WORKER_SRC],{type:"application/javascript"}));
  MCW=new Worker(url);
  URL.revokeObjectURL(url);
  MCW.onmessage=function(ev){
   if(ev.data.tipo==="prog")cbProg(ev.data.hecho);
   else if(ev.data.tipo==="fin"){cbFin(ev.data.acum);MCW.terminate();MCW=null}
  };
  MCW.onerror=function(e){ if(MCW){MCW.terminate();MCW=null} cbError(e.message||"error en el hilo") };
  MCW.postMessage({ss:ss,obs:obs,iters:iters,seed:20260901});
  return true;
 }catch(e){ return false }
}

function mcRun(){
 if(MCRUN)return;
 if(!BT||!BT.S||BT.S.length<20){$("mc-st").textContent="Ejecuta antes la simulación de arriba: hace falta la muestra real.";return}
 /* La hipotesis nula de esta prueba es "el precio ES la probabilidad", y para eso
    hace falta un contrato binario con desenlace 0 o 1. En divisas no existe tal
    cosa: sin este corte, la prueba corria sobre NaN y devolvia una fila basura. */
 if(BT.fx){MC=null;$("mc-st").textContent="Esta prueba solo vale para mercados de predicción: necesita un desenlace de sí o no. En divisas no hay tal cosa.";render();return}
 MCRUN=true;
 var S=BT.S,ss=mcStrats(S);
 if(!ss.length){MCRUN=false;$("mc-st").textContent="Muestra insuficiente por estrategia.";return}

 var obs=ss.map(function(s){return mcTotal(s.p,s.o,s.lado,s.n)});
 var opsIter=ss.reduce(function(a,s){return a+s.n},0);
 /* El selector admite repeticiones o un objetivo en OPERACIONES. Lo segundo es
    lo que se entiende: "4.000 millones de operaciones" dice algo, "7.407.408
    repeticiones" no dice nada. */
 var sel=$("mc-n").value, iters;
 if(String(sel).indexOf("ops:")===0){
  iters=Math.ceil(Number(String(sel).slice(4))/Math.max(1,opsIter));
 } else iters=+sel;

 // Camino rapido: hilo aparte. Si el navegador no lo permite, se sigue abajo.
 var t0w=Date.now();
 var lanzado=mcLanzarWorker(
  ss.map(function(s){return {n:s.n,lado:s.lado,p:Array.prototype.slice.call(s.p)}}),
  obs, iters,
  function(hecho){
   $("mc-st").textContent=T("Simulando en segundo plano… ","Simulating in background… ")+
    (hecho/iters*100).toFixed(0)+"% · "+(hecho*opsIter/1e6).toFixed(0)+
    T(" M operaciones"," M operations");
  },
  function(acum){
   MC={iters:iters,ops:iters*opsIter,seg:(Date.now()-t0w)/1000,
    filas:ss.map(function(s,k){
     var a=acum[k],mu=a.suma/iters,va=a.suma2/iters-mu*mu;
     var m=a.muestras.slice().sort(function(x,y){return x-y});
     var q=function(f){return m.length?m[Math.min(m.length-1,Math.floor(f*m.length))]:0};
     return {nombre:s.nombre,n:s.n,obs:obs[k],mu:mu,sd:Math.sqrt(Math.max(0,va)),
             lo:q(0.025),hi:q(0.975),p:a.ge/iters}})};
   MCRUN=false;
   /* render() reescribe el estado con el texto por defecto, asi que el resumen
      va DESPUES o no se ve. */
   render();
   $("mc-st").textContent=MC.iters.toLocaleString("es-ES")+T(" repeticiones · ","reps · ")+
    (MC.ops/1e6).toFixed(0)+T(" millones de operaciones simuladas · "," M simulated operations · ")+
    MC.seg.toFixed(1)+" s";
  },
  function(msg){ MCRUN=false; $("mc-st").textContent="Error en el hilo: "+msg; }
 );
 if(lanzado)return;
 $("mc-st").textContent=T("Sin hilos disponibles: se ejecuta en primer plano y la página puede ir lenta.",
                          "No worker available: running in foreground, the page may stutter.");
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
 if(!MC){$("mc-rows").innerHTML="<tr><td colspan='7'>"+emp("🎲",
   (BT&&BT.fx)?"No aplica a divisas: esta prueba necesita un desenlace de sí o no.":
   "Pulsa «Ejecutar prueba de choque».")+"</td></tr>";return}
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
 $("pa-st").textContent="Consultando…";
 api(u,{cache:"no-store"}).then(function(r){return r.json()}).then(function(j){
  if(j.error)throw new Error(j.error);
  if(accion){$("pa-st").textContent=JSON.stringify(j);return fetch("/api/paper",{cache:"no-store"}).then(function(r){return r.json()})}
  return j})
 .then(function(j){if(j&&!j.error){PAP=j;if(!accion)$("pa-st").textContent=j.nAbiertas+" abiertas · "+j.nCerradas+" liquidadas";}render()})
 .catch(function(e){$("pa-st").textContent="Error: "+(e.message||e)+" — ¿KV configurado?"})}

function renderPaper(){
 if(!PAP){$("pa-rows").innerHTML="<tr><td colspan='7'>"+emp("✎","Pulsa «Anotar señales de hoy».")+"</td></tr>";return}
 var todas=PAP.cerradas.map(function(x){return {c:1,x:x}}).concat(PAP.abiertas.map(function(x){return {c:0,x:x}}));
 $("pa-cnt").textContent="("+PAP.nAbiertas+" abiertas / "+PAP.nCerradas+" liquidadas)";
 $("pa-rows").innerHTML=todas.slice(0,60).map(function(r){var x=r.x;
  return "<tr"+(x.tipo==="momentum"&&x.id?" data-mid='"+esc(String(x.id))+"' style='cursor:pointer'":(x.q?" data-ev='"+esc(x.q)+"' style='cursor:pointer'":""))+">"+
   "<td><span class='"+(r.c?"t3":"t2")+"'>"+(r.c?"liquidada":"abierta")+"</span></td>"+
   "<td class='dim'>"+esc(x.tipo)+"</td>"+
   "<td>"+esc(x.senal||"—")+"</td>"+
   "<td title='"+esc(x.q||"")+"'>"+esc((x.q||"").slice(0,52))+"</td>"+
   "<td>"+(x.p!==undefined?(x.p*100).toFixed(1)+"%":(x.sum!==undefined?"Σ "+x.sum.toFixed(4):"—"))+"</td>"+
   "<td class='dim'>"+esc((x.ts||"").slice(0,10))+"</td>"+
   "<td class='"+(x.r>0?"up":(x.r<0?"dn":""))+"'>"+(x.r!==undefined?((x.r>=0?"+":"")+(x.r*100).toFixed(0)+"%"):"—")+"</td>"+
  "</tr>"}).join("")||"<tr><td colspan='7'>"+emp("✎","Nada anotado todavía.")+"</td></tr>";
 var e=PAP.est;
 $("pa-est").innerHTML=e?("Direccionales liquidadas: <b>"+e.n+"</b> · acierto <b>"+(e.acierto*100).toFixed(0)+"%</b> · retorno medio <b class='"+
   (e.media>=0?"up":"dn")+"'>"+(e.media>=0?"+":"")+(e.media*100).toFixed(1)+"%</b> · t-stat <b>"+e.t.toFixed(2)+"</b> — "+
   (Math.abs(e.t)>=2?"<b class='up'>significativo</b>":"todavía indistinguible del azar"+(e.n<30?", y con "+e.n+" casos es pronto para nada":""))):
   "Sin liquidaciones todavía. Hacen falta semanas de cron para tener muestra.";}

function renderSim(){
 if(!BT){
  /* Se explica por que hay que pulsar: descargar el historico real de cientos
     de mercados resueltos tarda minutos y gasta cuota, asi que no se lanza sin
     que alguien lo pida. */
  var msg=BTLOAD?emp("⏳","Simulando… descargando históricos reales.<br>Tarda 1–3 minutos."):
   emp("🧪","Pulsa <b>▶ Ejecutar simulación</b> aquí arriba.<br>"+
    "No se lanza sola porque descarga cientos de históricos y tarda 1–3 minutos.");
  $("sim-rows").innerHTML="<tr><td colspan='9'>"+msg+"</td></tr>";
  $("s-cal").innerHTML=msg;$("s-eq").innerHTML=msg;return}
 var b=BT,best=b.strats[0];
 $("s1").textContent=b.S.length;
 $("s1s").textContent=b.fx?(b.series+" pares · mantener "+b.H+" días"):("entrada a "+b.H+" días del cierre");
 $("s2").textContent = b.brier===null ? "—"
   : (MODO==="simple" ? (b.brier<b.brierBase ? "mejor que el azar" : "peor que el azar")
                      : b.brier.toFixed(4));
 $("s2s").textContent=b.brier===null?"no aplica a divisas":((b.brier<b.brierBase?"mejor":"peor")+" que la tasa base ("+b.brierBase.toFixed(4)+")");
 $("s3").textContent = b.lam===null ? "—"
   : (MODO==="simple" ? (b.lam>0.02 ? "sí, los hay" : (b.lam<-0.02 ? "al revés" : "no se aprecia"))
                      : b.lam.toFixed(3));
 $("s3s").textContent=b.lam===null?(b.fx?"no aplica a divisas":"no converge"):(b.lam>0.02?"longshots caros de verdad":(b.lam<-0.02?"sesgo invertido":"sin sesgo medible"));
 $("s4").textContent=best?((best.total>=0?"+":"")+best.total.toFixed(1)+"u"):"—";
 $("s4s").textContent=best?best.name:"—";
 $("s-cal").innerHTML=calChart(b.cal);
 $("s-eq").innerHTML=eqChart(best);
 $("sim-cnt").textContent="("+b.strats.length+")";
 $("sim-rows").innerHTML=b.strats.map(function(s){
  var sig=Math.abs(s.t)>=2.6?["sí, fuerte","t3"]:(Math.abs(s.t)>=2?["sí","t5"]:(Math.abs(s.t)>=1?["débil","t2"]:["no, es ruido","t4"]));
  return "<tr>"+
   "<td>"+esc(s.name)+"</td><td>"+s.n+"</td>"+
   "<td>"+(s.win*100).toFixed(0)+"%</td>"+
   "<td class='"+(s.mean>=0?"up":"dn")+"'>"+(s.mean>=0?"+":"")+(s.mean*100).toFixed(1)+"%</td>"+
   "<td class='"+(s.med>=0?"up":"dn")+"'>"+(s.med>=0?"+":"")+(s.med*100).toFixed(1)+"%</td>"+
   "<td class='"+(s.total>=0?"up":"dn")+"'><b>"+(s.total>=0?"+":"")+s.total.toFixed(1)+"u</b></td>"+
   "<td class='dn'>−"+s.dd.toFixed(1)+"u</td>"+
   "<td class='mates'>"+s.t.toFixed(2)+(s.tIng!==undefined?"<br><span class='dim' style='font-size:9px'>ingenuo "+s.tIng.toFixed(2)+"</span>":"")+"</td>"+
   "<td><span class='"+sig[1]+"'>"+sig[0]+"</span></td></tr>"}).join("")}

/* ================= DETALLE DE MERCADO =================
   Todo se pide directo desde el navegador: gamma-api, clob y data-api sirven con
   Access-Control-Allow-Origin *, así que no hace falta pasar por el Worker.       */
var DT=null;

/* ================= FICHA DE EMPRESA =================
   Reune en un sitio todo lo que el terminal sabe de una compania: precio, avisos a
   la SEC, pleitos, noticias y contratos que podrian ser suyos. Es el nodo que
   conecta el resto de vistas.                                                    */
var FE=null,FELIT=null;

function feAbrir(tk,sinApilar){
 if(!sinApilar)apilar();
 var e=null;
 for(var i=0;i<SC.length;i++)if(SC[i].tk===tk){e=SC[i];break}
 if(!e)return;
FE=e;$("fe").classList.add("on");if(typeof rutaEscribe=="function")setTimeout(rutaEscribe,0);
 /* Al cambiar de empresa se vuelve al grafico propio: si no, se quedaria a la
    vista el de TradingView de la empresa ANTERIOR, que es justo el tipo de dato
    equivocado que hay que evitar. */
 try{ TV_ACTUAL=null; $("fe-tv").innerHTML=""; $("fe-tv").style.display="none";
      $("fe-px").style.display=""; $("fe-tab-p").classList.add("on");
      $("fe-tab-tv").classList.remove("on"); }catch(er){}
 $("fe-n").textContent=e.name;
 var tkc=e.tk.split(":").pop();
 /* Enlaces al exterior. Robinhood solo lista valores de EE.UU., asi que solo se
    ofrece cuando el mercado es estadounidense: un enlace roto es peor que ninguno. */
 var esUS=["NASDAQ","NYSE","AMEX"].indexOf(e.tk.split(":")[0])>=0;
 var enl=[
  ["TradingView","https://www.tradingview.com/symbols/"+e.tk.replace(":","-")+"/"],
  ["Yahoo Finance","https://finance.yahoo.com/quote/"+encodeURIComponent(SMAP[e.tk]||tkc)],
  ["Google Finance","https://www.google.com/finance/quote/"+encodeURIComponent(tkc)],
  ["Simply Wall St","https://simplywall.st/search?query="+encodeURIComponent(e.name)]
 ];
 if(esUS){
  enl.push(["Robinhood","https://robinhood.com/stocks/"+encodeURIComponent(tkc)]);
  enl.push(["SEC EDGAR","https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company="+encodeURIComponent(e.name)+"&type=8-K"]);
 }
 $("fe-s").innerHTML=esc(e.tk)+" \\u00b7 "+esc(e.c)+" \\u00b7 "+esc(e.n)+"<br>"+
  enl.map(function(x){return "<a href='"+esc(x[1])+"' target='_blank' rel='noopener'>"+esc(x[0])+" \\u2197</a>"}).join(" \\u00b7 ");

 var sim=SMAP[e.tk];
 // --- lo esencial ---
 var q=null;for(var j=0;j<QUANT.length;j++)if(QUANT[j].s.tk===e.tk){q=QUANT[j];break}
 var k=function(l,v,c){return "<div><div class='l'>"+l+"</div><div class='v "+(c||"")+"'>"+v+"</div></div>"};
 $("fe-met").innerHTML=
  sugEmpresa(e,q)+
  "<div class='sug' id='fe-8h' style='border-left-color:var(--cy);background:rgba(90,168,199,.05)'></div>"+
  k(MODO==="simple"?"TAMAÑO":"CAPITALIZACIÓN",["micro","pequeña","mediana"][e.z]||"—")+
  k("REGIÓN",esc(e.r))+
  (q?k(MODO==="simple"?"ÚLTIMO MES":"1M",pct(q.r1),pcl(q.r1))+
     k(MODO==="simple"?"ÚLTIMOS 6 MESES":"6M",pct(q.r6),pcl(q.r6))+
     k(MODO==="simple"?"CUÁNTO SE MUEVE":"VOL. ANUAL",pct(q.vol))+
     k(MODO==="simple"?"PEOR CAÍDA":"MAX DD",pct(q.dd),"dn")+
     k(MODO==="simple"?"FUERZA":"Z-SCORE",q.z.toFixed(2),q.z>0?"up":"dn")
   :k("PRECIOS","<span class='dim'>sin cargar</span>"))+
  (q?"":"<div class='pxlive'><div class='l'>PRECIO</div><div class='v dim'>\\u2026</div></div>")+
  k("EN TU LISTA",W[e.tk]?"sí":"no")+
  (sim?k("SÍMBOLO",esc(sim)):"");

 if(sim)bandaHoras($("fe-8h"),sim,8);
 else $("fe-8h").innerHTML="<span class='dim'>"+T("sin símbolo de precios mapeado.","no price symbol mapped.")+"</span>";

 // --- precio ---
 if(q&&q.c){ precioChart($("fe-px"),q.c) }
 else {
  $("fe-px").innerHTML=emp("&#9203;","Descargando el precio\\u2026");
  // Se descarga SOLO el de esta empresa: cargar las 33 aqui seria absurdo.
  if(sim){
   api("/api/px?s="+encodeURIComponent(sim),{cache:"no-store"})
    .then(function(r){return r.json()})
    .then(function(j){
     if(!j||!j.c||j.c.length<5)throw 0;
     PX[e.tk]={c:j.c,d:j.d,spread:j.spread};
     if(!FE||FE.tk!==e.tk)return;
     precioChart($("fe-px"),j.c);
     var u=j.c[j.c.length-1];
     var m1=j.c.length>21?((u/j.c[j.c.length-22]-1)*100):null;
     var celda=$("fe-met").querySelector(".pxlive");
     if(celda)celda.innerHTML="<div class='l'>PRECIO</div><div class='v'>"+u.toFixed(2)+"</div>"+
      (m1!==null?"<div class='l "+(m1>=0?"up":"dn")+"'>"+(m1>=0?"+":"")+m1.toFixed(1)+"% en el mes</div>":"");
    })
    .catch(function(){ if(FE&&FE.tk===e.tk)$("fe-px").innerHTML=emp("&#9888;","Precio no disponible ahora mismo.") });
  } else $("fe-px").innerHTML=emp("&#8212;","Esta empresa no tiene s\\u00edmbolo de precios mapeado.");
 }

 // --- 8-K ---
 if(EDG){
  var f=EDG.todas.filter(function(x){return x.tk===tkc});
  $("fe-8k").innerHTML=f.length?f.map(function(x){
   return "<div class='fila'><b><a href='"+esc(x.url)+"' target='_blank' rel='noopener'>"+esc(x.fecha)+"</a></b> · "+
    esc(x.sector)+"<div class='m'>"+esc(x.etiquetas.join(", "))+"</div></div>"}).join("")
   :emp("—","Sin avisos que citen defensa desde "+esc(EDG.desde||"")+".<br>"+
     "<span style='font-size:11px'>Es lo normal: la mayoría de empresas no presentan 8-K citando al Pentágono.</span>")}
 else $("fe-8k").innerHTML=emp("⏳","Cargando avisos…");

 // --- pleitos ---
 $("fe-lit").innerHTML=emp("⏳","Buscando pleitos…");
 api("/api/litigios?d=730&tk="+encodeURIComponent(e.tk),{cache:"no-store"})
  .then(function(r){return r.json()})
  .then(function(j){
   var c=j.casos||[];
   $("fe-lit").innerHTML=c.length?c.map(function(x){
    return "<div class='fila'><b><a href='"+esc(x.url)+"' target='_blank' rel='noopener'>"+esc(x.caso.slice(0,52))+"</a></b>"+
     "<div class='m'>"+esc(x.fecha)+" · "+esc(x.tribunal)+" · "+esc(x.natTxt)+
     (x.contraEstado?" · <span class='t1'>contra el Estado</span>":"")+"</div></div>"}).join("")
    :emp("—",MODO==="simple"?"Ningún pleito en los últimos dos años. Buena señal.":"Sin litigios en 730 días.")})
  .catch(function(){$("fe-lit").innerHTML=emp("⚠️","No se pudieron cargar los pleitos.")});

 // --- noticias ---
 $("fe-news").innerHTML=emp("⏳","Buscando noticias…");
 api("/api/ynews?s="+encodeURIComponent(sim||tkc),{cache:"no-store"})
  .then(function(r){return r.json()})
  .then(function(j){var nw=j.noticias||[];
   $("fe-news").innerHTML=nw.length?nw.map(function(x){
    return "<div class='fila'><b><a href='"+esc(x.url||"#")+"' target='_blank' rel='noopener'>"+esc(x.t.slice(0,74))+"</a></b>"+
     "<div class='m'>"+esc(x.medio)+"</div></div>"}).join("")
    :emp("—","Sin noticias recientes.")})
  .catch(function(){$("fe-news").innerHTML=emp("⚠️","Noticias no disponibles.")});

 // --- contratos que podrian ser suyos ---
 var tok=e.name.toUpperCase().split(/[^A-Z0-9]+/).filter(function(x){return x.length>=4})[0]||"";
 var cc=tok?CON.filter(function(c){return c.name.toUpperCase().indexOf(tok)>=0}):[];
 $("fe-con").innerHTML=cc.length?cc.slice(0,12).map(function(c){
  return "<div class='fila'><b>"+f$(c.amount)+"</b> · "+esc(c.name.slice(0,44))+
   "<div class='m'>"+esc(c.date)+" · "+esc((c.desc||"").slice(0,90))+"</div></div>"}).join("")+
  "<div class='st' style='margin-top:7px'>Coincidencia por nombre. <b>Verifícalo a mano</b>: que el nombre encaje no significa que sea la misma empresa.</div>"
  :emp("—","Ningún contrato del Pentágono coincide con este nombre en 30 días.<br>"+
    "<span style='font-size:11px'>Lo habitual: solo un puñado de las 33 aparece cada mes.</span>");
}

/* Panel para un adjudicatario de contrato. Si esta en tu universo abre su ficha
   completa; si no, ensena lo que se sabe y donde comprobarlo.                    */
function conAbrir(nombre){
 var NOM=String(nombre).toUpperCase();
 // ¿coincide con alguna del universo? entonces la ficha completa vale mas
 for(var i=0;i<SC.length;i++){
  var tok=SC[i].tok||"";
  if(tok&&tok.length>=4&&NOM.indexOf(tok)>=0){feAbrir(SC[i].tk);return}}
 var cs=CON.filter(function(c){return c.name===nombre});
 var tot=cs.reduce(function(a,c){return a+c.amount},0);
 FE=null;$("fe").classList.add("on");
 $("fe-n").textContent=nombre;
 $("fe-s").innerHTML="Adjudicatario del Departamento de Defensa · "+
  "<a href='https://www.usaspending.gov/search/?hash=&query="+encodeURIComponent(nombre)+"' target='_blank' rel='noopener'>ver en USAspending ↗</a> · "+
  "<a href='https://efts.sec.gov/LATEST/search-index?q=%22"+encodeURIComponent(nombre)+"%22' target='_blank' rel='noopener'>buscar en la SEC ↗</a>";
 var k=function(l,v,c){return "<div><div class='l'>"+l+"</div><div class='v "+(c||"")+"'>"+v+"</div></div>"};
 $("fe-met").innerHTML=k("CONTRATOS 30 DÍAS",cs.length)+k("IMPORTE TOTAL",f$(tot))+
  k("MAYOR",cs.length?f$(Math.max.apply(null,cs.map(function(c){return c.amount}))):"—")+
  k("TIPO",cs.length&&cs[0].prime?"gigante":"fuera de gigantes",cs.length&&cs[0].prime?"":"up")+
  k("EN TU LISTA","no");
 /* Antes esta ficha se quedaba con cuatro paneles vacios. Ahora se busca todo
    por el nombre: simbolo y noticias en Yahoo, pleitos en CourtListener. */
 conRellenar(nombre);
 $("fe-px").innerHTML=emp("—",MODO==="simple"?
  "Esta empresa no está en tu lista de 33, así que no tenemos su precio.":"Fuera del universo SC: sin serie de precios.");
 $("fe-8k").innerHTML=emp("🔎",MODO==="simple"?
  "Busca su nombre en la SEC con el enlace de arriba para ver si cotiza y qué ha comunicado.":"Usar la búsqueda de EDGAR enlazada arriba.");
 $("fe-lit").innerHTML=emp("—","No consultado: solo se buscan pleitos de las empresas de tu lista.");
 $("fe-news").innerHTML=emp("—","Sin ticker no hay noticias asociadas.");
 $("fe-con").innerHTML=cs.map(function(c){
  return "<div class='fila'><b>"+f$(c.amount)+"</b> · "+esc(c.date)+
   "<div class='m'>"+esc((c.desc||"").slice(0,150))+"</div></div>"}).join("")||
  emp("—","Sin detalle.");}

/* Rellena precio, avisos, pleitos y noticias de un adjudicatario cualquiera a
   partir de su nombre. Se lanza sin esperar: cada panel se pinta al llegar. */
function conRellenar(nombre){
 var mio=nombre;
 $("fe-px").innerHTML=emp("&#9203;",T("Buscando la empresa en bolsa…","Looking up the listing…"));
 $("fe-news").innerHTML=emp("&#9203;",T("Buscando noticias…","Searching news…"));
 $("fe-lit").innerHTML=emp("&#9203;",T("Buscando pleitos…","Searching court cases…"));
 $("fe-8k").innerHTML=emp("&#9203;",T("Comprobando si cotiza…","Checking if it is listed…"));
 api("/api/contratista?n="+encodeURIComponent(nombre),{cache:"no-store"})
  .then(function(r){return r.json()})
  .then(function(j){
   if(FE||$("fe-n").textContent!==mio)return;      // se ha abierto otra ficha
   if(j.error)throw new Error(j.error);
   // --- precio ---
   if(j.precio&&j.precio.c&&j.precio.c.length>5){
    precioChart($("fe-px"),j.precio.c);
    $("fe-h2").textContent=T("Precio · ","Price · ")+j.simbolo+(j.bolsa?" · "+j.bolsa:"");
   } else $("fe-px").innerHTML=emp("&#8212;",esc(j.nota||T("Sin serie de precios.","No price series.")));
   // --- cotiza o no ---
   $("fe-8k").innerHTML = j.simbolo
    ? "<div class='mt-row' data-emp='' style='cursor:default'><b>"+esc(j.nombreBolsa||j.nombre)+"</b>"+
      "<div class='dsc'>"+T("cotiza como ","listed as ")+esc(j.simbolo)+(j.bolsa?" en "+esc(j.bolsa):"")+" · "+
      "<a target='_blank' rel='noopener' href='https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company="+
      encodeURIComponent(j.buscado)+"&type=8-K'>"+T("ver sus 8-K en EDGAR","see its 8-K filings")+" \\u2197</a></div></div>"
    : emp("&#8212;",T("No cotiza con este nombre, así que no hay avisos a la SEC que buscar.",
                      "Not listed under this name, so there are no SEC filings to find."));
   // --- pleitos ---
   var L=j.litigios||[];
   $("fe-lit").innerHTML=L.length?L.map(function(x){
    return "<div class='ni'><a target='_blank' rel='noopener' href='"+esc(x.url)+"'>"+esc(x.caso)+"</a>"+
     "<div class='mt'>"+esc(x.fecha)+" · "+esc(x.tribunal)+" · "+esc(x.natTxt)+
     (x.contraEstado?" · <span class='t1'>"+T("contra el Estado","against the government")+"</span>":"")+"</div></div>"}).join("")
    :emp("\\u2014",T("Ningún pleito en los últimos dos años a nombre de esta empresa.",
                     "No court cases in the last two years under this name."));
   // --- noticias ---
   var N=j.noticias||[];
   $("fe-news").innerHTML=N.length?N.map(function(x){
    return "<div class='ni'><a target='_blank' rel='noopener' href='"+esc(x.url)+"'>"+esc(x.t)+"</a>"+
     "<div class='mt'>"+esc(x.medio||"")+(x.ts?" · "+new Date(x.ts*1000).toLocaleDateString():"")+"</div></div>"}).join("")
    :emp("\\uD83D\\uDCF0",T("Sin noticias recientes con este nombre.","No recent news under this name."));
  })
  .catch(function(e){
   if(FE||$("fe-n").textContent!==mio)return;
   var msg=emp("\\u26A0",T("No se pudo completar la búsqueda: ","Lookup failed: ")+esc(e.message||e));
   ["fe-px","fe-news","fe-lit","fe-8k"].forEach(function(k){
    if(/9203/.test($(k).innerHTML)||/Buscando|Comprobando/.test($(k).textContent))$(k).innerHTML=msg});
  });
}
(function(){
 /* Las dos pestanas del grafico. El de TradingView se pide la primera vez que
    se abre, no antes: el guion pesa y la mayoria de las veces no se usa. */
 var mostrar=function(cual){
  var p=cual==="p";
  $("fe-px").style.display=p?"":"none";
  $("fe-tv").style.display=p?"none":"";
  $("fe-tab-p").classList.toggle("on",p);
  $("fe-tab-tv").classList.toggle("on",!p);
  if(!p&&FE)tvPintar($("fe-tv"),FE.tk);
 };
 $("fe-tab-p").onclick=function(){mostrar("p")};
 $("fe-tab-tv").onclick=function(){mostrar("tv")};
})();
function feCerrar(){$("fe").classList.remove("on");FE=null;if(typeof rutaEscribe=="function")rutaEscribe()}

function dtOpen(id,sinApilar){
 if(!sinApilar)apilar();
 var m=null;
 if(BQ)for(var i=0;i<BQ.markets.length;i++)if(String(BQ.markets[i].id)===String(id)){m=BQ.markets[i];break}
 if(!m)return;
 DT=m;$("dt").classList.add("on");if(typeof rutaEscribe=="function")setTimeout(rutaEscribe,0);
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

function dtClose(){$("dt").classList.remove("on");DT=null;if(typeof rutaEscribe=="function")rutaEscribe()}

function dtMetrics(m){
 var k=function(l,v,c){return "<div><div class='l'>"+l+"</div><div class='v "+(c||"")+"'>"+v+"</div></div>"};
 var b=(1-m.p)/m.p;
 $("dt-met").innerHTML=
  sugMercado(m)+
  k("PRECIO",bfmt(m.p,1))+
  k("CUOTA",(1/m.p).toFixed(2)+"×")+
  k("JUSTO (WANG)",m.fair===null?"<span class='dim'>sin grupo</span>":bfmt(m.fair,1))+
  k("SESGO",m.edge===null?"—":((m.edge>=0?"+":"")+(m.edge*100).toFixed(1)),m.edge===null?"":(m.edge>0?"dn":"up"))+
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
  // Si dices que algo a 0,5% vale 60%, estás afirmando que el mercado se equivoca
  // 100 veces. Puede pasar, pero casi siempre es un error de tecleo, y sin avisar
  // la calculadora escupe un valor esperado enorme que parece una promesa.
  var ratio=m.p>0?x.p/m.p:1;
  filas.push({m:m,p:x.p,f:f,fa:Math.max(0,f)*frac,
    delirio:(ratio>=8&&m.p<0.10)||(x.p>0.97&&m.p<0.5)})});

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
  $("ca-rows").innerHTML="<tr><td colspan='10'>"+msg+"</td></tr>";
  $("ca-arb").innerHTML="<tr><td colspan='7'>"+msg+"</td></tr>";return}
 cFill();
 var r=cCompute(),cap=cCap(),ar=cArb();

 $("c1").textContent=eur(r.tot);
 $("c1s").textContent=cap>0?((r.tot/cap*100).toFixed(1)+"% de "+eur(cap)+(r.escalado?" · escalado al tope":"")):"pon capital";
 var raros=r.filas.filter(function(x){return x.delirio}).length;
 $("c2").textContent=(r.ev>=0?"+":"−")+eur(Math.abs(r.ev));
 $("c2s").textContent=raros?("⚠ "+raros+" posición(es) con probabilidad desproporcionada"):"según TUS probabilidades";
 $("c2").className="v "+(raros?"dn":(r.ev>=0?"up":"dn"));
 $("c2").className="v "+(r.ev>=0?"up":"dn");
 $("c3").textContent=r.tot>0?("−"+eur(r.tot)):eur(0);
 $("c3s").textContent=r.filas.length?("probabilidad "+(r.pFallo*100).toFixed(1)+"% si son independientes"):"sin posiciones";
 $("c4").textContent=ar.length?((ar[0].ret*100).toFixed(2)+"%"):"—";
 $("c4s").textContent=ar.length?(ar.length+" operaciones · mejor retorno s/capital"):"nada cubre costes";

 $("ca-rows").innerHTML=r.filas.map(function(x){
  return "<tr data-mid='"+esc(String(x.m.id))+"' style='cursor:pointer'>"+
   "<td title='"+esc(x.m.q)+"'>"+esc(x.m.q.slice(0,52))+
     (x.delirio?"<br><span class='t4' style='font-size:9px'>⚠ dices "+(x.p/x.m.p).toFixed(0)+"× lo que dice el mercado — ¿seguro?</span>":"")+"</td>"+
   "<td>"+(x.m.p*100).toFixed(2)+"%</td>"+
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
 $("ca-arb").innerHTML=ar.slice(0,25).map(function(a){
  var esc3=cap>0?Math.min(1,cap/ (a.coste*100) ):0;   // referencia: 100 uds nominales
  return "<tr data-ev='"+esc(a.ev)+"' style='cursor:pointer'>"+
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
  var LIBV={"Arbitraje estadístico":"brain","Microestructura":"pm","Matemática financiera":"sim",
   "Anomalías ocultas":"quant","Machine learning":"sim","Crypto quant":"inv","Experimental":"inv"};
  var lv=LIBV[x.fam]||"inv";
  return "<tr data-go='"+lv+"' style='cursor:pointer' title='"+T("Ver dónde se aplica","See where it is applied")+"'>"+
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
 api("/api/edgar?d="+(+$("e-d").value||30),{cache:"no-store"})
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
  var tkSC=tkCompleto(x.tk);
  return "<tr"+(tkSC?" data-tk='"+esc(tkSC)+"' style='cursor:pointer'":"")+">"+
   "<td class='dim'>"+esc(x.fecha)+"</td>"+
   "<td><b>"+esc(x.tk||"—")+"</b></td>"+
   "<td title='"+esc(x.nombre)+"'>"+(x.enUniverso?
      "<span data-emp='"+esc(x.tkUniv||"")+"' style='cursor:pointer;color:var(--cy)'>"+esc(x.nombre.slice(0,40))+" ↗</span>":
      "<a href='"+esc(x.url)+"' target='_blank' rel='noopener'>"+esc(x.nombre.slice(0,40))+"</a>")+
     (x.enUniverso?" <span class='dim'>· "+esc(x.universo)+"</span>":"")+"</td>"+
   "<td class='dim' style='font-size:10.5px'>"+esc(x.sector)+"</td>"+
   "<td class='dim' style='font-size:10.5px'>"+esc(x.etiquetas.join(", ").slice(0,44))+"</td>"+
   "<td><span class='"+sg[1]+"'>"+sg[0]+"</span></td></tr>"}).join("")||
  "<tr><td colspan='6'>"+emp("—","Ninguna presentación relevante en la ventana.")+"</td></tr>"}

/* ================= MODO SENCILLO =================
   La portada traduce a lenguaje normal lo que el terminal encontro hoy. El modo
   completo no se elimina: se esconde tras un interruptor.                        */
var MODO=(function(){try{return localStorage.getItem("mor_modo")||"simple"}catch(e){return "simple"}})();

/* Diccionario de traduccion. El modo sencillo NO quita herramientas: cambia como
   se llaman. Izquierda lo que ve un quant, derecha lo que entiende cualquiera.   */
/* ================= IDIOMA =================
   Mismo mecanismo que el modo sencillo: un diccionario y una pasada sobre los
   elementos. No hay dos versiones del terminal, hay una con dos vocabularios.  */
var EN={
 // navegacion
 "Inicio":"Home","Mercado":"Market","Análisis":"Analysis","Herramientas":"Tools",
 "F1 INICIO":"F1 HOME","F2 DASH":"F2 OVERVIEW","F2 RESUMEN":"F2 OVERVIEW",
 "F3 CONTRATOS":"F3 CONTRACTS","F4 EMPRESAS":"F4 COMPANIES","F5 APUESTAS":"F5 MARKETS",
 "F6 NOTICIAS":"F6 NEWS","F7 QUANT":"F7 QUANT","F7 ANÁLISIS DE EMPRESAS":"F7 STOCK ANALYSIS","VEREDICTO":"VERDICT","COMPRAR O VENDER":"BUY OR SELL",
 "F8 CEREBRO":"F8 EDGE","F8 OPORTUNIDADES":"F8 OPPORTUNITIES",
 "F9 SIMULADOR":"F9 BACKTEST","F9 ¿ESTO FUNCIONA?":"F9 DOES IT WORK?",
 "F10 CARTERA":"F10 SIZING","F10 CUÁNTO APOSTAR":"F10 POSITION SIZING",
 "F11 INVESTIGACIÓN":"F11 RESEARCH","F12 BIBLIOTECA":"F12 METHODS","F12 MÉTODOS":"F12 METHODS",
 "Investigación":"Research","CONTRADICCIONES ENTRE MERCADOS":"CROSS-MARKET CONTRADICTIONS",
 // KPIs y titulos
 "DOD 30D · VALOR":"DOD 30D · VALUE","FUERA DE GIGANTES":"OUTSIDE PRIMES",
 "CRUCES":"MATCHES","CRUCES DETECTADOS":"MATCHES DETECTED",
 "FLUJO DIARIO DE ADJUDICACIONES · 30D":"DAILY AWARD FLOW · 30D",
 "REPARTO DEL GASTO":"SPEND BREAKDOWN","ADJUDICATARIOS · TOP 30D":"TOP RECIPIENTS · 30D",
 "MERCADOS ANALIZADOS":"MARKETS SCANNED","APUESTAS MIRADAS":"MARKETS SCANNED",
 "GRUPOS CON VENTAJA":"GROUPS WITH EDGE","DONDE SOBRA DINERO":"WHERE MONEY IS LEFT",
 "MEJOR VENTAJA NETA":"BEST NET EDGE","LA MEJOR DE HOY":"BEST TODAY",
 "SESGO FAVORITO-LONGSHOT":"FAVOURITE-LONGSHOT BIAS",
 "¿ESTÁN CAROS LOS IMPROBABLES?":"ARE LONGSHOTS OVERPRICED?",
 "ARBITRAJE ESTRUCTURAL":"STRUCTURAL ARBITRAGE",
 "DONDE LAS CUENTAS NO CUADRAN":"WHERE THE MATH DOESN'T ADD UP",
 "TODAS LAS APUESTAS":"ALL MARKETS","TABLA DE MERCADOS":"MARKETS TABLE",
 "TODAS LAS EMPRESAS":"ALL COMPANIES","CASOS YA TERMINADOS":"RESOLVED CASES",
 "MERCADOS RESUELTOS":"RESOLVED MARKETS","ACIERTO DEL MERCADO":"MARKET ACCURACY",
 "BRIER SCORE":"BRIER SCORE","SESGO MEDIDO":"MEASURED BIAS","λ EMPÍRICA":"EMPIRICAL λ",
 "LA QUE MEJOR SALIÓ":"BEST PERFORMER","MEJOR ESTRATEGIA":"BEST STRATEGY",
 "ESTRATEGIAS SIMULADAS":"SIMULATED STRATEGIES","QUÉ HABRÍA PASADO SI…":"WHAT WOULD HAVE HAPPENED",
 "REGISTRO EN PAPEL":"PAPER LOG","APUNTES SIN DINERO REAL":"PAPER LOG",
 "DINERO EN JUEGO":"CAPITAL AT RISK","CAPITAL COMPROMETIDO":"CAPITAL COMMITTED",
 "LO QUE ESPERARÍAS GANAR":"EXPECTED VALUE","VALOR ESPERADO":"EXPECTED VALUE",
 "SI SALE TODO MAL":"WORST CASE","PEOR CASO":"WORST CASE",
 "DINERO SIN ADIVINAR":"EDGE WITHOUT FORECASTING","ARBITRAJE DISPONIBLE":"ARBITRAGE AVAILABLE",
 "PLAN DE ARBITRAJE":"ARBITRAGE PLAN","VIGILANTE 8-K · SEC EDGAR":"8-K WATCHER · SEC EDGAR",
 "AVISOS OFICIALES DE EMPRESAS":"OFFICIAL COMPANY FILINGS",
 "EMPRESAS CON PRECIO":"COMPANIES PRICED","COBERTURA DE PRECIOS":"PRICE COVERAGE",
 "LA QUE MÁS SUBIÓ":"BIGGEST GAINER","CUÁNTO SE MUEVEN":"AVERAGE VOLATILITY",
 "AVISOS ACTIVOS":"ACTIVE SIGNALS","SEÑALES ACTIVAS":"ACTIVE SIGNALS",
 "YA FUNCIONA":"LIVE","POR HACER":"QUEUED","NO SIRVE":"DISCARDED","LO QUE FALTA":"BOTTLENECK",
 // columnas
 "Empresa":"Company","Precio":"Price","Mercado":"Market","Evento":"Event","Tipo":"Type",
 "Fecha":"Date","Ticker":"Ticker","Sector (SIC)":"Sector (SIC)","Señal":"Signal",
 "Precio justo":"Fair price","Justo (Wang)":"Fair (Wang)","¿Caro?":"Rich?","Sesgo":"Bias",
 "Coste de entrar":"Entry cost","Spread rel.":"Rel. spread","¿Se mueve dinero?":"Money flowing?",
 "Rotación":"Turnover","Nerviosismo":"Jumpiness","σ norm.":"Norm. σ","Prisa":"Urgency",
 "Urgencia":"Urgency","Tendencia":"Trend","Z mom.":"Z mom.","Días":"Days","Opciones":"Legs",
 "Salidas":"Legs","Suma":"Sum","Σ probs":"Σ probs","Se pasa en":"Overround","Desvío":"Deviation",
 "Coste":"Cost","Limpio":"Net","Neto":"Net","En bruto":"Gross","Bruto":"Gross",
 "Qué harías":"Action","Acción":"Action","Qué mide":"Measure","Medida":"Measure",
 "Estrategia":"Strategy","Veces":"Bets","Apuestas":"Bets","Aciertos":"Hit rate","Acierto":"Hit rate",
 "Media":"Mean","Medio":"Mean","Caso típico":"Median","Mediana":"Median","Total":"Total",
 "Peor caída":"Max DD","Max DD":"Max DD","¿Es suerte?":"Luck?","t-stat":"t-stat",
 "¿Es de fiar?":"Reliable?","¿Significativo?":"Significant?","Fuerza":"Strength","Z-score":"Z-score",
 "Cuánto se mueve":"Volatility","Vol.anual":"Ann. vol","1 mes":"1M","3 meses":"3M","6 meses":"6M",
 "Tu apuesta":"Your prob.","Tu prob.":"Your prob.","Tu ventaja":"Your edge","Ventaja":"Edge",
 "% sugerido":"Suggested %","Kelly":"Kelly","Dinero":"Amount","Importe":"Amount",
 "Participaciones":"Shares","Títulos":"Shares","Si acierta":"If right","Salida":"Exit",
 "Estado":"Status","Familia":"Family","Razón":"Reason","Dónde":"Where",
 "Empresa afectada":"Company","Partidas del 8-K":"8-K items","Pleitos en tribunales":"Court cases",
 // botones y controles
 "MODO SENCILLO":"SIMPLE MODE","MODO COMPLETO":"FULL MODE","← VOLVER":"← BACK",
 "🧠 PREGUNTA AL TERMINAL":"🧠 ASK THE TERMINAL","Enviar":"Send","Guardar":"Save","Canjear":"Redeem",
 "ASISTENTE":"ASSISTANT","Vaciar":"Clear","+ Añadir":"+ Add",
 // --- frases completas ---
 "Vista general de todo a la vez: contratos del Pentágono, tus empresas, apuestas y noticias.":
   "Everything at a glance: Pentagon contracts, your companies, markets and news.",
 "responde solo con tus datos":"answers only from your data",
 "leer en voz alta":"read answers aloud",
 "puede moverse por el terminal y lanzar simulaciones":"can navigate the terminal and run simulations",
 "Pregunta o pulsa el micrófono":"Ask, or tap the microphone",
 "Ningún cruce en 30 días.":"No matches in 30 days.",
 "Es lo normal: cuando salte uno, será señal de verdad.":"That is normal — when one appears, it means something.",
 "— el instante en que la información privada se vuelve pública":
   "— the moment private information becomes public",
 "— clic en una fila para el desglose completo":"— click a row for the full breakdown",
 "— clic en una empresa para su ficha completa":"— click a company for its full profile",
 "— clic en cualquier fila para el desglose completo":"— click any row for the full breakdown",
 "— apuestas de eventos distintos que se contradicen entre sí":
   "— markets from different events that contradict each other",
 "Buscar dentro de estos mercados…":"Search within these markets…",
 "Ningún mercado con esos filtros":"No markets match those filters",
 "Cargando mercados…":"Loading markets…",
 "Descargando el precio…":"Downloading price…",
 "Precio no disponible ahora mismo.":"Price not available right now.",
 "Lo esencial":"Key figures","Precio · último año":"Price · last year",
 "Avisos oficiales a la SEC (8-K)":"Official SEC filings (8-K)",
 "Pleitos en tribunales":"Court cases","Noticias":"News",
 "Contratos del Pentágono que podrían ser suyos":"Pentagon contracts that might be theirs",
 "Todas las probabilidades del grupo":"All probabilities in the group",
 "Histórico y niveles de Fibonacci":"History and Fibonacci levels",
 "Matrix · profundidad del libro":"Matrix · order book depth",
 "Delta · flujo de órdenes (CVD)":"Delta · order flow (CVD)",
 "Métricas":"Metrics","Zona de investigación":"Research area",
 "Qué ha pasado hoy":"What happened today","Qué es esto":"What this is",
 "LO QUE MERECE UN VISTAZO HOY":"WORTH A LOOK TODAY",
 "SI TE PREGUNTAS QUÉ SIGNIFICA CADA COSA":"IF YOU WONDER WHAT EACH TERM MEANS",
 "Clave de acceso":"Access key","Guardar":"Save","Acceso":"Access",
 "Amplitud":"Breadth","Por pasada":"Per pass","Buscar contradicciones":"Find contradictions",
 "Ninguna contradicción ahora mismo.":"No contradictions right now.",
 "Todos":"All","Con señal":"With signal","Solo fiables":"Reliable only",
 "Cargar / actualizar cerebro":"Load / refresh engine",
 "Cargar / actualizar precios":"Load / refresh prices",
 "Ejecutar simulación":"Run simulation","Ejecutar prueba de choque":"Run stress test",
 "Anotar señales de hoy":"Log today's signals","Liquidar resueltas":"Settle resolved",
 "Buscar presentaciones":"Search filings","Ventana":"Window",
 "Capital":"Capital","Tope por posición":"Cap per position","Tope total":"Total cap",
 "Fracción Kelly":"Kelly fraction","Tu probabilidad":"Your probability",
 "Mercados":"Markets","Entrada a":"Entry at","del cierre":"before close",
 "Volumen mínimo":"Minimum volume","Repeticiones":"Repetitions",
 "fiable":"reliable","reservas":"caution","cuidado":"risky",
 "alta":"high","media":"medium","baja":"low",
 "días":"days","día":"day","mes":"month","meses":"months"
};
var ENK=Object.keys(EN).sort(function(a,b){return b.length-a.length});
var IDIOMA=(function(){try{return localStorage.getItem("mor_lang")||"es"}catch(e){return "es"}})();

var TRAD={
 // navegacion
 "F2 DASH":"F2 RESUMEN","F7 QUANT":"F7 ANÁLISIS DE EMPRESAS","VEREDICTO":"COMPRAR O VENDER","F8 CEREBRO":"F8 OPORTUNIDADES",
 "F9 SIMULADOR":"F9 ¿ESTO FUNCIONA?","F10 CARTERA":"F10 CUÁNTO APOSTAR","F11 BIBLIOTECA":"F11 MÉTODOS",
 // columnas de acciones
 "Vol.anual":"Cuánto se mueve","Max DD":"Peor caída","Z-score":"Fuerza","1M":"1 mes","3M":"3 meses","6M":"6 meses",
 // columnas de prediccion
 "Justo (Wang)":"Precio justo","Sesgo":"¿Caro?","Spread rel.":"Coste de entrar","Rotación":"¿Se mueve dinero?",
 "σ norm.":"Nerviosismo","Urgencia":"Prisa","Z mom.":"Tendencia","Σ probs":"Suma","Desvío":"Se pasa en",
 "Medida":"Qué mide","Bruto":"En bruto","Neto":"Limpio","Acción":"Qué harías","Salidas":"Opciones",
 // simulador
 "BRIER SCORE":"ACIERTO DEL MERCADO","λ EMPÍRICA":"SESGO MEDIDO","MEJOR ESTRATEGIA":"LA QUE MEJOR SALIÓ",
 "MERCADOS RESUELTOS":"CASOS YA TERMINADOS","t-stat":"¿Es suerte?","Mediana":"Caso típico","Medio":"Media",
 "Apuestas":"Veces","Acierto":"Aciertos","¿Significativo?":"¿Es de fiar?","Total":"Total",
 // cartera
 "Kelly":"% sugerido","Tu prob.":"Tu apuesta","Ventaja":"Tu ventaja","Importe":"Dinero","Títulos":"Participaciones",
 "CAPITAL COMPROMETIDO":"DINERO EN JUEGO","VALOR ESPERADO":"LO QUE ESPERARÍAS GANAR","PEOR CASO":"SI SALE TODO MAL",
 "ARBITRAJE DISPONIBLE":"DINERO SIN ADIVINAR",
 // titulos de panel
 "ARBITRAJE ESTRUCTURAL":"DONDE LAS CUENTAS NO CUADRAN",
 "SESGO FAVORITO-LONGSHOT":"¿ESTÁN CAROS LOS IMPROBABLES?",
 "DISTORSIÓN DE WANG · PRECIO vs PROBABILIDAD REAL":"LO QUE CUESTA vs LO QUE VALE DE VERDAD",
 "CALCULADORA DE VENTAJA Y KELLY":"CALCULADORA: ¿CUÁNTO APOSTARÍAS?",
 "TABLA DE MERCADOS":"TODAS LAS APUESTAS","TABLA QUANT · SMALL CAPS DEFENSA":"TODAS LAS EMPRESAS",
 "PRUEBA DE CHOQUE · MONTE CARLO CONTRA EL AZAR":"¿ESTO ES SUERTE? PRUEBA CONTRA EL AZAR",
 "ESTRATEGIAS SIMULADAS":"QUÉ HABRÍA PASADO SI…","REGISTRO EN PAPEL":"APUNTES SIN DINERO REAL",
 "CALIBRACIÓN · LO QUE EL MERCADO DICE vs LO QUE PASA":"¿ACIERTA EL MERCADO CUANDO DICE 70%?",
 "CURVA DE CAPITAL · MEJOR ESTRATEGIA":"CÓMO HABRÍA IDO TU DINERO",
 "RANKING POR MOMENTUM COMPUESTO (Z-SCORE)":"LAS QUE MÁS FUERZA LLEVAN",
 "RIESGO vs RETORNO · 6 MESES":"RIESGO FRENTE A GANANCIA · 6 MESES",
 "BIBLIOTECA QUANT · ESTADO EN EL PROYECTO":"MÉTODOS: CUÁLES USAMOS Y POR QUÉ",
 "MERCADOS ANALIZADOS":"APUESTAS MIRADAS","GRUPOS CON VENTAJA":"DONDE SOBRA DINERO",
 "MEJOR VENTAJA NETA":"LA MEJOR DE HOY","COBERTURA DE PRECIOS":"EMPRESAS CON PRECIO",
 "MEJOR MOMENTUM 6M":"LA QUE MÁS SUBIÓ","MEDIA VOL. ANUAL":"CUÁNTO SE MUEVEN","SEÑALES ACTIVAS":"AVISOS ACTIVOS",
 "VIGILANTE 8-K · SEC EDGAR":"AVISOS OFICIALES DE EMPRESAS",
 "IMPLEMENTADO":"YA FUNCIONA","EN COLA":"POR HACER","DESCARTADO":"NO SIRVE","CUELLO DE BOTELLA":"LO QUE FALTA"
};

// Claves ordenadas de mas larga a mas corta: la coincidencia mas especifica gana.
var TRADK=Object.keys(TRAD).sort(function(a,b){return b.length-a.length});

var AYUDA_EN={
 quant:"The 33 companies with price and recent moves. «Strength» compares each one against the rest: above 0 means it is doing better than the group average.",
 brain:"Each line is an open Polymarket bet. What matters is at the top: «where the math does not add up» are places where probabilities do not sum to 100% and money is left on the table without having to be right about anything. Click any row for the full breakdown.",
 sim:"This checks whether an idea would actually have worked, using data that already happened. Look at the «Reliable?» column: if it says noise, the pretty result was luck.",
 cart:"You set how likely you think something is and how much money you have; this works out what you would risk. Below, the trades where no forecasting is needed because the math already fails.",
 lib:"The seven big families of quantitative analysis and whether they apply here. A prediction contract is not a stock, which is why half the classic techniques do not carry over.",
 dash:"Everything at once: Pentagon contracts, your companies, markets and news."
};
/* Ayudas por vista: una frase que dice para que sirve la pantalla. */
var AYUDA={
 quant:"Aquí ves las 33 empresas con su precio y cuánto se han movido. «Fuerza» compara cada una con las demás: por encima de 0 va mejor que la media del grupo.",
 brain:"Cada línea es una apuesta abierta en Polymarket. Lo importante está arriba: «donde las cuentas no cuadran» son sitios donde las probabilidades no suman 100% y sobra dinero sin tener que acertar nada. Haz clic en cualquier fila para verlo todo de esa apuesta.",
 sim:"Aquí se comprueba si una idea habría funcionado de verdad, con datos que ya pasaron. Mira la columna «¿Es de fiar?»: si dice que es ruido, es que el resultado bonito era casualidad.",
 cart:"Tú pones cuánta probabilidad le das a algo y cuánto dinero tienes; esto calcula cuánto arriesgarías. Abajo, las operaciones donde no hace falta adivinar nada porque las cuentas ya no cuadran.",
 lib:"Los siete grandes métodos del análisis cuantitativo y si sirven aquí o no. Un contrato de predicción no es una acción, y por eso la mitad de las técnicas clásicas no valen.",
 dash:"Vista general de todo a la vez: contratos del Pentágono, tus empresas, apuestas y noticias."
};


/* Diccionario de frases COMPLETAS. La clave es el texto tal cual aparece.
   No se sustituyen palabras sueltas dentro de una frase: eso producia
   "Cargando los datos del day". */
var EN2={
 // --- navegacion y cabecera ---
 "F1 INICIO":"F1 HOME","F2 DASH":"F2 OVERVIEW","F2 RESUMEN":"F2 OVERVIEW",
 "F3 CONTRATOS":"F3 CONTRACTS","F4 EMPRESAS":"F4 COMPANIES","F5 APUESTAS":"F5 MARKETS",
 "F6 NOTICIAS":"F6 NEWS","F7 QUANT":"F7 QUANT","F7 ANÁLISIS DE EMPRESAS":"F7 STOCK ANALYSIS",
 "F8 CEREBRO":"F8 EDGE","F8 OPORTUNIDADES":"F8 OPPORTUNITIES","F9 SIMULADOR":"F9 SIMULATOR",
 "F9 ¿ESTO FUNCIONA?":"F9 DOES THIS WORK?","F10 CARTERA":"F10 SIZING",
 "F10 CUÁNTO APOSTAR":"F10 HOW MUCH","F11 INVESTIGACIÓN":"F11 RESEARCH",
 "F12 BIBLIOTECA":"F12 LIBRARY","VEREDICTO":"VERDICT","COMPRAR O VENDER":"BUY OR SELL",
 "Inicio":"Home","Mercado":"Markets","Análisis":"Analysis","Herramientas":"Tools","Investigación":"Research",
 "MODO SENCILLO":"SIMPLE MODE","MODO COMPLETO":"FULL MODE","EN VIVO":"LIVE","apagado":"off",
 "2 s · lo más rápido posible":"2 s · as fast as possible","Buscar…":"Search…",
 // --- cabeceras de panel ---
 "MAPA DE CALOR":"HEAT MAP","UNIVERSO POR REGIÓN":"UNIVERSE BY REGION",
 "ÚLTIMO DEL PENTÁGONO":"LATEST FROM THE PENTAGON","DISTRIBUCIÓN DE PROBABILIDADES":"PROBABILITY DISTRIBUTION",
 "DISTRIBUCIÓN · TOP 12":"BREAKDOWN · TOP 12","FLUJO DIARIO DE ADJUDICACIONES · 30D":"DAILY AWARD FLOW · 30D",
 "ADJUDICATARIOS · TOP 30D":"TOP RECIPIENTS · 30D","⚡ CRUCES DETECTADOS":"⚡ MATCHES FOUND",
 "POLYMARKET · VOLUMEN vs PROBABILIDAD":"POLYMARKET · VOLUME vs PROBABILITY",
 "MAYORES MOVIMIENTOS 24H":"BIGGEST 24H MOVERS","⭐ WATCHLIST":"⭐ WATCHLIST",
 "RANKING POR MOMENTUM COMPUESTO (Z-SCORE)":"COMPOSITE MOMENTUM RANKING (Z-SCORE)",
 "RIESGO vs RETORNO · 6 MESES":"RISK vs RETURN · 6 MONTHS",
 "TABLA QUANT · SMALL CAPS DEFENSA":"QUANT TABLE · DEFENCE SMALL CAPS",
 "CONTRATOS DEPARTMENT OF DEFENSE · 30 DÍAS":"DEPARTMENT OF DEFENSE CONTRACTS · 30 DAYS",
 "CURVA DE CAPITAL · MEJOR ESTRATEGIA":"EQUITY CURVE · BEST STRATEGY",
 "CALIBRACIÓN · LO QUE EL MERCADO DICE vs LO QUE PASA":"CALIBRATION · WHAT THE MARKET SAYS vs WHAT HAPPENS",
 "DISTORSIÓN DE WANG · PRECIO vs PROBABILIDAD REAL":"WANG DISTORTION · PRICE vs REAL PROBABILITY",
 "PRUEBA DE CHOQUE · MONTE CARLO CONTRA EL AZAR":"STRESS TEST · MONTE CARLO AGAINST CHANCE",
 "CALCULADORA DE VENTAJA Y KELLY":"EDGE AND KELLY CALCULATOR",
 "BIBLIOTECA QUANT · ESTADO EN EL PROYECTO":"QUANT LIBRARY · STATUS IN THIS PROJECT",
 "CARTERAS CON PAGO GARANTIZADO":"PORTFOLIOS WITH GUARANTEED PAYOFF",
 "INCOHERENCIAS DE PRECIO":"PRICE INCOHERENCES","RIESGO REAL DE CADA PAR":"REAL RISK OF EACH PAIR",
 "CONFIGURACIÓN DEL BACKTEST":"BACKTEST SETTINGS","CONFIGURACIÓN · DIVISAS":"SETTINGS · CURRENCIES",
 "QUÉ ESTÁS SIMULANDO":"WHAT YOU ARE SIMULATING","PARÁMETROS":"SETTINGS",
 "LO QUE MERECE UN VISTAZO HOY":"WORTH A LOOK TODAY",
 "SI TE PREGUNTAS QUÉ SIGNIFICA CADA COSA":"IF YOU WONDER WHAT EACH TERM MEANS",
 "POR QUÉ LA MITAD NO PORTA":"WHY HALF OF IT DOES NOT TRANSFER",
 "MEMECOINS · POR QUÉ AQUÍ NO HAY BOTÓN DE BACKTEST":"MEMECOINS · WHY THERE IS NO BACKTEST BUTTON HERE",
 "GRÁFICO":"CHART","Métricas":"Metrics","Lo esencial":"Key figures",
 "Precio · último año":"Price · last year","Avisos oficiales a la SEC (8-K)":"Official SEC filings (8-K)",
 "Pleitos en tribunales":"Court cases","Noticias":"News",
 "Contratos del Pentágono que podrían ser suyos":"Pentagon contracts that might be theirs",
 "Todas las probabilidades del grupo":"All probabilities in the group",
 "Histórico y niveles de Fibonacci":"History and Fibonacci levels",
 "Matrix · profundidad del libro":"Matrix · order book depth",
 "Delta · flujo de órdenes (CVD)":"Delta · order flow (CVD)",
 // --- KPI ---
 "FUERA DE GIGANTES":"OUTSIDE THE PRIMES","⚡ CRUCES":"⚡ MATCHES",
 "COBERTURA DE PRECIOS":"PRICE COVERAGE","SEÑALES ACTIVAS":"ACTIVE SIGNALS",
 "MEDIA VOL. ANUAL":"AVG ANNUAL VOL","MEJOR MOMENTUM 6M":"BEST 6M MOMENTUM",
 "PARES CARGADOS":"PAIRS LOADED","MEJOR MOMENTUM":"BEST MOMENTUM","EN TENSIÓN":"UNDER STRESS",
 "PARES ESTIRADOS":"STRETCHED PAIRS","MERCADOS ANALIZADOS":"MARKETS ANALYSED",
 "GRUPOS CON VENTAJA":"GROUPS WITH EDGE","MEJOR VENTAJA NETA":"BEST NET EDGE",
 "SESGO FAVORITO-LONGSHOT":"FAVOURITE-LONGSHOT BIAS","MERCADOS RESUELTOS":"RESOLVED MARKETS",
 "λ EMPÍRICA":"EMPIRICAL λ","MEJOR ESTRATEGIA":"BEST STRATEGY",
 "CAPITAL COMPROMETIDO":"CAPITAL AT RISK","VALOR ESPERADO":"EXPECTED VALUE",
 "PEOR CASO":"WORST CASE","ARBITRAJE DISPONIBLE":"ARBITRAGE AVAILABLE",
 "IMPLEMENTADO":"LIVE","EN COLA":"QUEUED","DESCARTADO":"DISCARDED","CUELLO DE BOTELLA":"BOTTLENECK",
 "ALCISTAS":"LONG","BAJISTAS":"SHORT","APUESTAS CON VENTAJA":"MARKETS WITH EDGE","ARBITRAJES":"ARBITRAGE",
 "FACTOR COMÚN":"COMMON FACTOR","APUESTAS REALES":"REAL BETS","SEGUNDO FACTOR":"SECOND FACTOR",
 "PASEO ALEATORIO":"RANDOM WALK","CASOS LIQUIDADOS":"SETTLED CASES","λ QUE USA HOY":"λ IN USE TODAY",
 "¿ESTÁ CALIBRADO?":"CALIBRATED?","¿ES PREDECIBLE?":"PREDICTABLE?","RELACIONES":"RELATIONS",
 "MUNDOS EXAMINADOS":"WORLDS EXAMINED","INCOHERENCIAS":"INCOHERENCES","COBRABLES":"COLLECTABLE",
 // --- subtitulos de KPI ---
 "de eventos activos":"of active events","neta tras costes":"net of costs",
 "series descargadas":"series downloaded","momentum + tendencia":"momentum + trend",
 "riesgo del universo":"risk of the universe","muestra del backtest":"backtest sample",
 "sesgo medido, no teórico":"measured bias, not theoretical","de tu capital":"of your capital",
 "según TUS probabilidades":"per YOUR probabilities","empresas y divisas para comprar":"companies and currencies to buy",
 "para vender o no entrar":"to sell or stay out","precio lejos de lo justo":"price far from fair",
 "cuentas que no cuadran":"maths that does not add up","métodos en producción":"methods in production",
 "por orden de prioridad":"by priority","no faltan métodos, falta evidencia":"no shortage of methods, shortage of evidence",
 "series de 400 sesiones":"series of 400 sessions","cargando al entrar en esta pantalla":"loading on entering this screen",
 "volatilidad reciente por encima de la normal":"recent volatility above normal",
 "diferencias que suelen volver a su sitio":"gaps that usually revert",
 "señales con resultado conocido":"signals with a known outcome",
 "mezcla de literatura y experiencia propia":"blend of literature and own experience",
 "fiabilidad: 0 es perfecto":"reliability: 0 is perfect","resolución: cuanto más alta, mejor":"resolution: higher is better",
 "restricciones lógicas encontradas":"logical constraints found",
 "combinaciones lógicamente posibles":"logically possible combinations",
 "precios que se contradicen":"prices that contradict each other",
 "tras pagar la horquilla":"after paying the spread","descarga históricos reales del CLOB":"downloads real CLOB history",
 "pulsa ▶ abajo · tarda 1–3 min":"press ▶ below · takes 1–3 min","sin ejecutar":"not run",
 "0 = perfecto · 0,25 = moneda":"0 = perfect · 0.25 = coin flip",
 "contrato ↔ small cap":"contract ↔ small cap","de tu lista":"from your list",
 // --- cabeceras de tabla ---
 "Tamaño":"Size","Último":"Last","Desvío":"Deviation","Cuánto":"How much","Acción":"Action",
 "Señales":"Señales","Régimen":"Regime","Por qué":"Why","Títulos":"Shares","Posición":"Position",
 "Rotación":"Turnover","Implícito":"Implied","Qué hacer":"What to do","Por unidad":"Per unit",
 "Depende de":"Depends on","Descripción":"Description","Tipo de señal":"Signal type",
 "Hasta cuándo":"Until when","Factor común":"Common factor","Esto implica…":"This implies…",
 "…esto":"…this","Exceso":"Excess","Origen":"Source","Lectura":"Reading","Mundos":"Worlds",
 "Peor día de 100":"Worst day in 100","Si pasa, cuánto":"If it happens, how much",
 "Ídem, con colas gruesas":"Same, with fat tails","Su rango histórico":"Its historical range",
 "¿Significativo?":"Significant?","Exceso sobre referencia":"Excess over benchmark",
 "Volatilidad hoy":"Volatility today","Percentil":"Percentile","Vida media":"Half-life",
 "Cuánto pesa lo vivido":"Weight of experience","Acierto crudo":"Raw hit rate",
 "Acierto corregido":"Corrected hit rate","Retorno medio":"Average return","Casos":"Cases",
 "Entrada":"Entry","Objetivo":"Target","Salir si":"Exit if","Neto tras coste":"Net after cost",
 "Estrategia":"Strategy","Par A":"Pair A","Par B":"Pair B","Cruce":"Cross","Cotizado":"Quoted",
 "Empresa":"Company","Mercado":"Market","Grupo":"Group","Par":"Pair","Aleatorio":"Random",
 "Qué se usa / usaría":"What is / would be used","Familia":"Family","Estado":"Status",
 // --- botones ---
 "⟳ Cargar divisas":"⟳ Load currencies","⟳ Recalcular todo":"⟳ Recalculate all",
 "⟳ Cargar / actualizar precios":"⟳ Load / refresh prices","⟳ Cargar / actualizar cerebro":"⟳ Load / refresh engine",
 "▶ Ejecutar simulación":"▶ Run simulation","▶ Ejecutar sobre divisas":"▶ Run on currencies",
 "▶ Ejecutar prueba de choque":"▶ Run stress test","✎ Anotar señales de hoy":"✎ Log today's signals",
 "✎ Anotar el universo de hoy":"✎ Log today's universe","✓ Liquidar resueltas":"✓ Settle resolved",
 "⟳ Ver aprendizaje":"⟳ View learning","▶ Buscar incoherencias":"▶ Find incoherences",
 "▶ Ejecutar":"▶ Run","Buscar contradicciones":"Find contradictions","+ Añadir":"+ Add",
 "Vaciar":"Clear","Guardar":"Save","Clave de acceso":"Access key","⟳ REFRESH":"⟳ REFRESH",
 // --- filtros ---
 "⚡ Con señal":"⚡ With signal","🟢 Solo fiables":"🟢 Reliable only","⭐ SOLO WATCHLIST":"⭐ WATCHLIST ONLY",
 "⚡ SIN GIGANTES":"⚡ EXCLUDE PRIMES","Todos":"All","Todas":"All",
 "Polymarket · predicción":"Polymarket · prediction","Forex · divisas":"Forex · currencies",
 // --- regiones y datos ---
 "Norteamérica":"North America","Sudamérica":"South America","Europa":"Europe",
 "Asia Sur":"South Asia","Asia Este":"East Asia","Oceanía":"Oceania","África":"Africa",
 "España":"Spain","Pentágono":"Pentagon","Geopolítica":"Geopolitics","Política":"Politics",
 "Economía":"Economy","Tecnología":"Technology","Deportes":"Sports","Cripto":"Crypto",
 // --- estados vacios y avisos ---
 "Sin datos todavía.":"No data yet.","Necesita las divisas cargadas arriba.":"Needs the currencies loaded above.",
 "📈Elige un par en la tabla.":"📈Pick a pair in the table.",
 "🎓Pulsa ⟳ Ver aprendizaje.":"🎓Press ⟳ View learning.",
 "🎲Pulsa «Ejecutar prueba de choque».":"🎲Press «Run stress test».",
 "🎯Pulsa ▶ Ejecutar tras una simulación.":"🎯Press ▶ Run after a simulation.",
 "➕Añade un mercado y pon tu probabilidad.":"➕Add a market and set your probability.",
 "⭐Marca ☆ en SMALL CAPS<br>para seguirlas aquí.":"⭐Star ☆ in SMALL CAPS<br>to follow them here.",
 "Se guarda con el motor de papel y se sigue solo.":"Saved with the paper engine and tracked automatically.",
 "Se guarda solo en este navegador y viaja cifrada en la cabecera, nunca en la dirección.":
   "Stored only in this browser and sent encrypted in the header, never in the URL.",
 "¿Ya pagaste? Pega la firma":"Already paid? Paste the signature",
 "responde solo con tus datos":"answers only from your data",
 "leer en voz alta":"read answers aloud","chat de voz continuo":"continuous voice chat",
 "Necesita los endpoints /api/pmq y /api/pmh en tu Worker.":"Needs /api/pmq and /api/pmh on your Worker.",
 "10 pares, 400 sesiones cada uno, desde Yahoo vía tu Worker.":"10 pairs, 400 sessions each, from Yahoo via your Worker.",
 // --- etiquetas con selector detras: se traduce solo el principio ---


 // --- etiquetas del modo sencillo que faltaban ---
 "LA MEJOR DE HOY":"BEST TODAY","¿ESTÁN CAROS LOS IMPROBABLES?":"ARE LONGSHOTS EXPENSIVE?",
 "DONDE LAS CUENTAS NO CUADRAN":"WHERE THE MATHS DOES NOT ADD UP",
 "Qué mide":"What it measures","Qué harías":"What you would do","Qué es":"What it is",
 // --- opciones de desplegable ---
 "7 días":"7 days","30 días":"30 days","60 días":"60 days","5 días":"5 days",
 "10 días":"10 days","20 días":"20 days","1 día":"1 day","2 días":"2 days",
 "100 mil":"100k","10 mil":"10k","1 millón":"1 million","10 millones":"10 million",
 "¼ (prudente)":"¼ (cautious)","completo":"full","mil millones de operaciones":"one billion operations",
 "4.000 millones de operaciones":"4 billion operations","estricto":"strict","amplio":"broad",
 "días con actividad":"days with activity","vía war.gov":"via war.gov","de 33":"of 33",
 // --- parrafos explicativos ---
 "La firma es el identificador largo que te da Phantom al enviar. Cada pago genera una sola clave.":
   "The signature is the long identifier Phantom gives you when you send. Each payment generates one key.",
 "Busca 8-K citando al Departamento de Defensa y los cruza con tu universo.":
   "Searches 8-K filings citing the Department of Defense and crosses them with your universe.",
 "18 pares: mayores, cruces y emergentes. Pasan por tu Worker (Yahoo Finance).":
   "18 pairs: majors, crosses and emerging. They go through your Worker (Yahoo Finance).",
 "Descargando precios de 32 empresas…Tarda unos segundos.":
   "Downloading prices for 32 companies… Takes a few seconds.",
 "Los precios pasan por tu Worker (Yahoo Finance; el navegador no puede por CORS).":
   "Prices go through your Worker (Yahoo Finance; the browser cannot, because of CORS).",

"Europa Este":"Eastern Europe","Europa Oeste":"Western Europe",
 "Cuánto se mueve":"How much it moves","Oriente Medio":"Middle East","Global":"Global",
"Fiabilidad":"Reliability","Estimado":"Estimate","Liquidez":"Liquidity",
 "Prob.":"Prob.","Vol 24h":"Vol 24h","Spread rel.":"Rel. spread","Días":"Days",
 "Sesgo":"Bias","Urgencia":"Urgency","Señal":"Signal","Tendencia":"Trend",
 "Precio":"Price","Cuota":"Odds","Volumen":"Volume","Importe":"Amount",
 "Fecha":"Date","Adjudicatario":"Recipient","Nicho":"Niche","País":"Country",
 "Región":"Region","Nombre":"Name","Total":"Total",
 "Todas":"All","Otros":"Other","Clima":"Climate","Deporte":"Sports","Cripto":"Crypto",
 "FIABILIDAD":"RELIABILITY","PROB.":"PROB.","ESTIMADO":"ESTIMATE","VOL 24H":"VOL 24H",
 "fiable":"reliable","reservas":"caution","cuidado":"risky",
 "alta":"high","media":"medium","baja":"low",
 "Buscar dentro de estos mercados…":"Search within these markets…",
 "Buscar empresa, contrato o mercado…":"Search company, contract or market…",
 "Buscar…":"Search…","Buscar":"Search",
 "MERCADO":"MARKET","EMPRESA":"COMPANY","EVENTO":"EVENT","SEÑAL":"SIGNAL",
 "REPARTO DEL GASTO":"SPEND BREAKDOWN","Gigantes":"Primes","Resto (tu terreno)":"Rest (your ground)",
 "cargando…":"loading…","Cargando…":"Loading…","sin cargar":"not loaded",
 // --- parrafos de la portada ---
 "Este terminal vigila tres cosas a la vez y busca dónde se cruzan: los contratos que reparte el Pentágono, unas 33 empresas de defensa pequeñas y poco seguidas por todo el mundo, y los mercados donde se apuesta sobre acontecimientos reales.La idea es sencilla: a los grandes no les compensa cubrir una empresa coreana o polaca de 200 millones. Ahí no hay competencia porque el premio les parece pequeño. Para ti sí es suficiente.":
  "This terminal watches three things at once and looks for where they <b>cross</b>: the contracts the Pentagon hands out, some 33 small defence companies that almost nobody follows, and the markets where people bet on real events.<br><br>The idea is simple: covering a Korean or Polish company worth 200 million is not worth the big players' time. There is no competition there because the prize looks small to them. <b>For you it is enough.</b>",
 "Lo que este terminal NO hace: no te dice dónde invertir ni predice precios. Probamos las estrategias con 4.010 millones de operaciones simuladas y ninguna superó al azar. Lo que sí hace es enseñarte información pública antes de que la mire nadie más, y marcar cuando las cuentas de un mercado no cuadran. Nada de esto es recomendación de inversión.":
  "<b style=\\"color:var(--rd)\\">What this terminal does NOT do:</b> it does not tell you where to invest and it does not predict prices. We tested the strategies with 4,010 million simulated trades and <b style=\\"color:var(--txt)\\">none beat chance</b>. What it does do is show you public information before anyone else looks at it, and flag when a market's maths does not add up. None of this is investment advice.",
 // --- sufijos que cuelgan de las cabeceras ---
 "— clic en una empresa para su ficha completa":"— click a company for its full profile",
 "— clic en cualquier fila para el desglose completo":"— click any row for the full breakdown",
 "— clic en una fila para el desglose completo":"— click a row for the full breakdown",
 "— clic en un par para su gráfico":"— click a pair for its chart",
 "— clic para la ficha":"— click for the profile","— clic para el mercado":"— click for the market",
 "— el instante en que la información privada se vuelve pública":"— the moment private information becomes public",
 "— apuestas de eventos distintos que se contradicen entre sí":"— markets from different events that contradict each other",
 "— cointegración":"— cointegration","— componente principal":"— principal component",
 "— razón de varianzas (Lo y MacKinlay)":"— variance ratio (Lo and MacKinlay)",
 "— aritmética, no predicción":"— arithmetic, not prediction",
 "— test SPA de Hansen con remuestreo por bloques":"— Hansen SPA test with block resampling",
 "— de su propio historial, no de la teoría":"— from its own record, not from theory",
 "— ninguna de estas herramientas predice dirección, y es a propósito":
   "— none of these tools predicts direction, and that is deliberate",
 "— aquí no hay señal de compra, y está explicado":"— no buy signal here, and it is explained",
 "— no todas se pueden cobrar, y se dice cuáles":"— not all can be collected, and it says which",
 "— matemática de 1937 sobre un grafo que hasta 2023 no se podía construir":
   "— 1937 mathematics on a graph that could not be built until 2023",
 "— EUR/USD × USD/JPY debería dar EUR/JPY":"— EUR/USD × USD/JPY should give EUR/JPY",
 "vía war.gov":"via war.gov","días con actividad":"days with activity",
 "de 33":"of 33","con actividad":"with activity",
 // --- cabeceras que faltaban ---
 "AVISOS OFICIALES DE EMPRESAS":"OFFICIAL COMPANY FILINGS",
 "UNIVERSO SMALL CAP DEFENSA · GLOBAL":"DEFENCE SMALL CAP UNIVERSE · GLOBAL",
 "COHERENCIA TRIANGULAR":"TRIANGULAR COHERENCE",
 "PARES QUE SE MUEVEN JUNTOS":"PAIRS THAT MOVE TOGETHER",
 "DIVISAS · QUANT":"CURRENCIES · QUANT","DIVISAS · RIESGO":"CURRENCIES · RISK",
 "DIVISAS · ESTRUCTURA Y RIESGO":"CURRENCIES · STRUCTURE AND RISK",
 "¿ES UN PASEO ALEATORIO?":"IS IT A RANDOM WALK?",
 "DE QUÉ DEPENDE CADA PAR":"WHAT EACH PAIR DEPENDS ON",
 "LO QUE EL TERMINAL HA APRENDIDO":"WHAT THE TERMINAL HAS LEARNED",
 "PRUEBA CONTRA EL AUTOENGAÑO":"TEST AGAINST SELF-DECEPTION",
 "COHERENCIA DE DE FINETTI":"DE FINETTI COHERENCE",
 "ZONA DE INVESTIGACIÓN":"RESEARCH AREA","EMPRESAS":"COMPANIES","APUESTAS":"MARKETS",
 // --- etiquetas del modo sencillo, que tambien necesitan ingles ---
 "EMPRESAS CON PRECIO":"COMPANIES WITH PRICES","LA QUE MÁS SUBIÓ":"BIGGEST RISER",
 "CUÁNTO SE MUEVEN":"HOW MUCH THEY MOVE","LAS QUE MÁS FUERZA LLEVAN":"STRONGEST MOMENTUM",
 "APUESTAS MIRADAS":"MARKETS CHECKED","DONDE SOBRA DINERO":"WHERE MONEY IS LEFT OVER",
 "LO MEJOR DE HOY":"BEST TODAY","¿LO IMPROBABLE ESTÁ CARO?":"IS THE UNLIKELY EXPENSIVE?",
 "CASOS YA TERMINADOS":"CASES ALREADY FINISHED","ACIERTO DEL MERCADO":"MARKET ACCURACY",
 "DINERO EN JUEGO":"MONEY AT STAKE","LO QUE ESPERARÍAS GANAR":"WHAT YOU WOULD EXPECT TO WIN",
 "SI SALE TODO MAL":"IF EVERYTHING GOES WRONG","DINERO SIN ADIVINAR":"MONEY WITHOUT GUESSING",
 "YA FUNCIONA":"ALREADY WORKING","POR HACER":"TO DO","NO SIRVE":"NOT USEFUL","LO QUE FALTA":"WHAT IS MISSING",
 "TAMAÑO":"SIZE","REGIÓN":"REGION","ÚLTIMO MES":"LAST MONTH","ÚLTIMOS 6 MESES":"LAST 6 MONTHS",
 "CUÁNTO SE MUEVE":"HOW MUCH IT MOVES","PEOR CAÍDA":"WORST DROP","FUERZA":"STRENGTH",
 "EN TU LISTA":"IN YOUR LIST","SÍMBOLO":"SYMBOL","PRECIO":"PRICE","CAPITALIZACIÓN":"MARKET CAP",
 "Peor caída":"Worst drop","peor caída":"worst drop","precio":"price",
 "media 50":"50-day avg","media 200":"200-day avg",
 // --- estados de carga y vacios ---
 "⏳Esperando a que carguen las divisas.":"⏳Waiting for the currencies to load.",
 "💱Pulsa ⟳ Cargar divisas.":"💱Press ⟳ Load currencies.",
 "⭐Marca ☆ en SMALL CAPSpara seguirlas aquí.":"⭐Star ☆ in SMALL CAPS to follow them here.",
 "⚠USAspending no responde.Pulsa ⟳ REFRESH.":"⚠USAspending is not responding. Press ⟳ REFRESH.",
 "fuente caída":"source down","verifícalos a mano":"verify them by hand",
 "Descargando precios de 32 empresas…":"Downloading prices for 32 companies…",
 "Tarda unos segundos.":"Takes a few seconds.",
 // --- glosario ---
 "Contrato de defensa":"Defence contract","Mercado de predicción":"Prediction market",
 "Market de predicción":"Prediction market","Gigante del sector":"Sector giant",
 "Small cap":"Small cap","Arbitraje":"Arbitrage","Cruce":"Match","8-K":"8-K",
 "¿Hay que verificar?":"Should you verify?",
 "Ventana":"Window","Señal a":"Signal over","Mantener":"Hold","Entrada a":"Entry at",
 "Volumen mínimo":"Minimum volume","Repeticiones":"Repetitions","Capital":"Capital",
 "Tope por posición":"Cap per position","Tope total":"Total cap","Fracción Kelly":"Kelly fraction",
 "Tu probabilidad":"Your probability","Mercados":"Markets","Amplitud":"Breadth","Por pasada":"Per pass",
 "del cierre":"before close","días":"days","día":"day"
};
var EN2K=Object.keys(EN2).sort(function(a,b){return b.length-a.length});
/* Parrafos largos. Se guardan aparte porque son los que explican el metodo y
   una traduccion descuidada aqui hace mas dano que dejarlos en castellano. */
var EN3={
 "Fuerza = media de los z de los retornos 1M/3M/6M (momentum compuesto transversal). Cuánto se mueve = desviación típica de retornos diarios × √252. Peor caída = mayor caída desde máximo. Informativo, no es recomendación.":
  "Strength = average of the z-scores of 1M/3M/6M returns (cross-sectional composite momentum). How much it moves = standard deviation of daily returns × √252. Worst drop = largest fall from a peak. Informational, not a recommendation.",
 "Z-score = media de los z de los retornos 1M/3M/6M (momentum compuesto transversal). Vol. anual = desviación típica de retornos diarios × √252. Max DD = mayor caída desde máximo. Informativo, no es recomendación.":
  "Z-score = average of the z-scores of 1M/3M/6M returns (cross-sectional composite momentum). Annual vol = standard deviation of daily returns × √252. Max DD = largest fall from a peak. Informational, not a recommendation.",
 "Con cierres diarios los desvíos de unos pocos puntos básicos son ruido de horario (cada par cierra en un instante distinto), no arbitraje. Es un control de calidad del dato; un desvío grande señala un precio malo.":
  "With daily closes, deviations of a few basis points are timing noise (each pair closes at a different instant), not arbitrage. This is a data quality check; a large deviation flags a bad price.",
 "Volatilidad anualizada de 21 sesiones. Peor día de 100 es el valor en riesgo al 99% (histórico), y la columna siguiente lo corrige por asimetría y colas gruesas (Cornish-Fisher), que en divisas se quedan cortas justo cuando importa. Si pasa, cuánto es la pérdida esperada en la cola. Informativo, no es recomendación.":
  "Annualised volatility over 21 sessions. Worst day in 100 is the 99% value at risk (historical), and the next column corrects it for skew and fat tails (Cornish-Fisher), which fall short in currencies exactly when it matters. If it happens, how much is the expected loss in the tail. Informational, not a recommendation.",
 "Régimen = vol. 20 sesiones / vol. 100 sesiones. Hurst (R/S) >0,55 tendencial, <0,45 reversión. Z mom. = media de los z transversales de 1M/3M/6M. Kelly continuo = μ/σ² diario, teórico y sin costes. Informativo, no es recomendación.":
  "Regime = 20-session vol / 100-session vol. Hurst (R/S) >0.55 trending, <0.45 mean-reverting. Momentum z = average of the cross-sectional z-scores of 1M/3M/6M. Continuous Kelly = daily μ/σ², theoretical and before costs. Informational, not a recommendation.",
 "La partida 1.01 es «acuerdo material definitivo»: es la que suele traer el contrato firmado.":
  "Item 1.01 is a definitive material agreement: that is the one that usually carries the signed contract.",
 "Σ excluyente: las patas de un grupo mutuamente excluyente deben sumar 1. Monotonía: si A implica B, p(A) ≤ p(B) siempre — «BTC cae a 15.000» implica «BTC cae a 20.000».":
  "Exclusive Σ: the legs of a mutually exclusive group must sum to 1. Monotonicity: if A implies B then p(A) ≤ p(B) always — «BTC falls to 15,000» implies «BTC falls to 20,000».",
 "Se guarda solo en este navegador y viaja cifrada en la cabecera, nunca en la dirección.":
  "Stored only in this browser and sent encrypted in the header, never in the URL."
};
for(var _k in EN3)EN2[_k]=EN3[_k];
EN2K=Object.keys(EN2).sort(function(a,b){return b.length-a.length});


function traducir(){
 var simple=MODO==="simple";
 var en=IDIOMA==="en";
 [].forEach.call(document.querySelectorAll("#nav button[data-v], #nav2 button, th, h3, h4, .kpi .k, .kpi .s, .tarj .t, .tarj .x, .tarj .y, .st, .ayuda, .expl, .gloss .k, .gloss .v, .emp, .dp>h4, .chips label, .chips button, .chips option, select option, .p>h3, label"),function(el){
  /* Si el elemento contiene un control -tipico en las etiquetas que llevan un
     desplegable dentro- NO se puede reescribir su innerHTML: se borraria el
     control y a partir de ahi todo lo que lo busque encuentra null. En esos
     casos se traduce SOLO el primer trozo de texto, dejando el control intacto. */
  /* Generalizado: tampoco se puede reescribir el innerHTML de un elemento que
     contenga hijos CON IDENTIFICADOR. Muchos titulos llevan dentro un contador
     -<h3>TABLA QUANT <span id="q-cnt"></span></h3>- y al traducir el titulo
     entero desaparecia el span, de modo que todo lo que despues buscaba ese
     identificador encontraba null y el repintado moria. */
  /* Tercera ampliacion de la misma guarda. Al reescribir el innerHTML de un
     titulo se RECREAN sus hijos, y el hijo original queda huerfano: la lista de
     elementos ya estaba capturada, asi que traducir el hijo despues no tocaba
     nada del documento. Por eso los sufijos "— cointegracion" seguian en
     castellano aunque estuviesen en el diccionario.
     Regla: si el elemento contiene algo que tambien hay que traducir, se toca
     solo su primer trozo de texto y se deja que los hijos se traduzcan solos. */
  if(el.querySelector("select,input,textarea,button,[id],.st,.k,.s,.v,.dsc,h3,h4")){
   var tn=null;
   for(var q=0;q<el.childNodes.length;q++){
    var nd=el.childNodes[q];
    if(nd.nodeType===3&&nd.nodeValue.trim().length>1){tn=nd;break}
   }
   if(tn){
    if(el.dataset.oTxt===undefined)el.dataset.oTxt=tn.nodeValue;
    var etq=el.dataset.oTxt.trim();
    if(!simple&&!en){tn.nodeValue=el.dataset.oTxt}
    else if(en&&EN2[etq]!==undefined){tn.nodeValue=" "+EN2[etq]+" "}
    else if(simple&&TRAD[etq]!==undefined){tn.nodeValue=" "+TRAD[etq]+" "}
   }
   return;
  }
  if(el.dataset.oTxt===undefined)el.dataset.oTxt=el.innerHTML;
  var o=el.dataset.oTxt;
  if(!simple&&!en){el.innerHTML=o;return}
  // Se traduce por trozos porque muchos titulos llevan contadores detras. Las
  // claves van de mas larga a mas corta: si no, "6M" casa antes que
  // "MEJOR MOMENTUM 6M" y sale "MEJOR MOMENTUM 6 meses".
  var out=o;
  if(simple){for(var i=0;i<TRADK.length;i++){
   var k=TRADK[i];
   if(out.indexOf(k)>=0){out=out.split(k).join(TRAD[k]);break}}}
  /* El ingles se aplica DESPUES, y por FRASE COMPLETA. El metodo anterior
     sustituia palabras sueltas dentro de las frases y sin parar, produciendo
     mutantes como "Cargando los datos del day" o "Amount que el Pentagono
     adjudica". Ahora: 1) coincidencia exacta, 2) prefijo para los titulos que
     llevan un contador detras, 3) si no encaja, se deja en castellano, que es
     preferible a inventar. */
  if(en){
   var plano=out.replace(/<[^>]*>/g,"").replace(/\\s+/g," ").trim();
   /* Tambien se prueba con el texto ORIGINAL: en modo sencillo el primer
      diccionario ya ha cambiado la frase, asi que la clave en castellano no
      casaria con lo que hay ahora. */
   var planoOrig=o.replace(/<[^>]*>/g,"").replace(/\\s+/g," ").trim();
   if(EN2[plano]!==undefined) out=EN2[plano];
   else if(EN2[out]!==undefined) out=EN2[out];
   else if(EN2[planoOrig]!==undefined) out=EN2[planoOrig];
   else {
    /* Prefijo, solo para titulos con un contador detras. Se exige una clave
       LARGA y que lo que siga sea un separador: con claves cortas salia
       "Market Will Sarah Huckabee Sanders win...", que es justo el tipo de
       frase mutante que se queria eliminar. */
    for(var j=0;j<EN2K.length;j++){
     var k2=EN2K[j];
     /* Umbral 7: las etiquetas de filtro llevan el contador pegado
        ("Politica 75", "Europa Este 4") y con 12 no entraban. La guarda del
        separador sigue impidiendo los mutantes. */
     if(k2.length<5||out.indexOf(k2)!==0)continue;
     var sig=out.charAt(k2.length);
     /* Con claves de 5 o 6 letras solo se acepta si lo que sigue es un contador
        o una etiqueta, nunca texto: asi "Todas 400" o "Cripto <span>73</span>"
        entran, pero una clave corta no puede morder una frase larga. */
     if(k2.length<7&&!(sig===""||sig==="<"||(sig===" "&&/^[0-9<(]/.test(out.slice(k2.length+1)))))continue;
     if(sig===""||sig===" "||sig==="<"||sig==="·"||sig==="—"||sig==="("){
      out=EN2[k2]+out.slice(k2.length); break }
    }
   }
  }
  el.innerHTML=out});
 /* Los atributos no son texto visible, asi que el bucle de arriba no los toca:
    los marcadores de posicion de los campos y los rotulos emergentes seguian en
    castellano en la version inglesa. Se traducen aparte y por frase completa. */
 [].forEach.call(document.querySelectorAll("[placeholder],[title]"),function(el){
  ["placeholder","title"].forEach(function(at){
   var v0=el.getAttribute(at);
   if(!v0)return;
   var g="_o"+at;
   if(el.dataset[g]===undefined)el.dataset[g]=v0;
   var orig=el.dataset[g];
   if(!simple&&!en){el.setAttribute(at,orig);return}
   var r=orig;
   if(simple&&TRAD[orig]!==undefined)r=TRAD[orig];
   if(en&&EN2[r]!==undefined)r=EN2[r];
   else if(en&&EN2[orig]!==undefined)r=EN2[orig];
   el.setAttribute(at,r);
  });
 });

 // ayuda por vista
 for(var v in AYUDA){
  var cont=$("v-"+v);if(!cont)continue;
  var a=cont.querySelector(".ayuda");
  if(!a){a=document.createElement("div");a.className="ayuda";cont.insertBefore(a,cont.firstChild)}
  a.innerHTML=(IDIOMA==="en"&&AYUDA_EN[v])?AYUDA_EN[v]:AYUDA[v]}}

/* ================= FONDO TOPOGRAFICO =================
   Curvas de nivel sobre un campo de ruido suave, extraidas con marching squares.
   Se genera una sola vez por tamano de ventana; no anima, asi que no gasta CPU.  */
function dibujarTopo(){
 var cv=$("topo");if(!cv)return;
 var W=cv.width=innerWidth,H=cv.height=innerHeight;
 var g=cv.getContext("2d");
 g.fillStyle="#000";g.fillRect(0,0,W,H);

 // --- ruido de valor: rejilla aleatoria + interpolacion suave ---
 var sem=20260901;
 function rnd(){sem=(sem*1664525+1013904223)&0x7fffffff;return sem/0x7fffffff}
 function octava(cols,rows){
  var m=[];for(var j=0;j<=rows;j++){m[j]=[];for(var i=0;i<=cols;i++)m[j][i]=rnd()}
  return {m:m,c:cols,r:rows}}
 function val(o,x,y){
  var fx=x*o.c,fy=y*o.r,i=Math.floor(fx),j=Math.floor(fy);
  var tx=fx-i,ty=fy-j;
  // suavizado hermite: evita las aristas del bilineal puro
  tx=tx*tx*(3-2*tx);ty=ty*ty*(3-2*ty);
  i=Math.min(i,o.c-1);j=Math.min(j,o.r-1);
  var a=o.m[j][i],b=o.m[j][i+1],c=o.m[j+1][i],d=o.m[j+1][i+1];
  return (a*(1-tx)+b*tx)*(1-ty)+(c*(1-tx)+d*tx)*ty}

 // Escala calibrada a ojo contra la referencia: formas amplias que cruzan la
 // pantalla, no una malla fina. La proporcion la marca el lado mayor.
 var ar=W/H, base=4.2;
 var o1=octava(Math.max(3,Math.round(base*ar)),Math.round(base*1.5)),
     o2=octava(Math.max(5,Math.round(base*2.2*ar)),Math.round(base*3.2)),
     o3=octava(Math.max(9,Math.round(base*4.5*ar)),Math.round(base*6.5));

 // muestreo del campo
 var paso=3,nx=Math.ceil(W/paso)+1,ny=Math.ceil(H/paso)+1,campo=new Float32Array(nx*ny);
 for(var j=0;j<ny;j++)for(var i=0;i<nx;i++){
  var x=i*paso/W,y=j*paso/H;
  campo[j*nx+i]=val(o1,x,y)*1 + val(o2,x,y)*0.38 + val(o3,x,y)*0.11}

 // --- marching squares por nivel ---
 var lo=Infinity,hi=-Infinity;
 for(var k=0;k<campo.length;k++){if(campo[k]<lo)lo=campo[k];if(campo[k]>hi)hi=campo[k]}
 var NIV=14;
 g.lineCap="round";g.lineJoin="round";
 for(var n2=0;n2<NIV;n2++){
  var t=(n2+0.5)/NIV, u=lo+(hi-lo)*t;
  // una de cada cuatro curvas resaltada: es lo que da el aspecto del mapa
  var fuerte=(n2%5===2);
  // Textura, no papel pintado: el fondo no puede competir con los datos.
  g.strokeStyle=fuerte?"rgba(227,164,74,.13)":"rgba(140,160,190,.045)";
  g.lineWidth=fuerte?1.3:0.8;
  g.beginPath();
  for(var jj=0;jj<ny-1;jj++)for(var ii=0;ii<nx-1;ii++){
   var a=campo[jj*nx+ii],b=campo[jj*nx+ii+1],c=campo[(jj+1)*nx+ii+1],d=campo[(jj+1)*nx+ii];
   var idx=(a>u?8:0)|(b>u?4:0)|(c>u?2:0)|(d>u?1:0);
   if(idx===0||idx===15)continue;
   var X=ii*paso,Y=jj*paso,P=paso;
   var ip=function(v1,v2){var den=(v2-v1);return den===0?0.5:(u-v1)/den};
   var T=[X+P*ip(a,b),Y], R=[X+P,Y+P*ip(b,c)], B=[X+P*ip(d,c),Y+P], L=[X,Y+P*ip(a,d)];
   var seg=null;
   switch(idx){
    case 1:case 14:seg=[L,B];break;  case 2:case 13:seg=[B,R];break;
    case 3:case 12:seg=[L,R];break;  case 4:case 11:seg=[T,R];break;
    case 6:case 9: seg=[T,B];break;  case 7:case 8: seg=[L,T];break;
    case 5:seg=[L,T];break;          case 10:seg=[T,R];break;
   }
   if(seg){g.moveTo(seg[0][0],seg[0][1]);g.lineTo(seg[1][0],seg[1][1])}
  }
  g.stroke();
 }

 // puntos blancos dispersos, como en el mapa de referencia
 g.fillStyle="rgba(200,215,235,.16)";
 var np=Math.round(W*H/34000);
 for(var q=0;q<np;q++)g.fillRect(Math.floor(rnd()*W),Math.floor(rnd()*H),1.2,1.2);
}

/* ================= ASISTENTE =================
   Consulta /api/chat, que reune los datos EN VIVO y se los pasa al modelo con
   prohibicion expresa de salirse de ellos. Aqui solo se pinta la conversacion.  */
var IABUSY=false;

var IAEJ=["¿Qué merece la pena hoy?","¿Hay algún arbitraje abierto?",
 "¿Qué pasa con Byrna?","¿Ha habido avisos 8-K de mi lista?",
 "¿Qué contratos grandes no se han llevado los gigantes?"];

function iaMsg(txt,clase){
 var d=document.createElement("div");
 d.className="iab "+(clase||"ia");
 d.textContent=txt;
 $("iam").appendChild(d);
 $("iam").scrollTop=$("iam").scrollHeight;
 return d}

/* Ejecuta lo que pide el asistente. Lista CERRADA: si llega algo que no esta aqui
   no pasa nada. El worker ya valida, esto es la segunda barrera.                 */
/* Resumen de lo que hay en pantalla para que la IA lo vea. Corto a proposito:
   va en la URL y el modelo no necesita mas. */

/* ---------- Okapi BM25 en JavaScript, sin dependencias ---------- */
var BM_K1=1.5, BM_B=0.75;   // constantes habituales de la literatura
function bmTok(t){
 return String(t||"").toLowerCase().normalize("NFD").replace(/[\\u0300-\\u036f]/g,"")
  .split(/[^a-z0-9ñ]+/).filter(function(x){return x.length>2});
}
function bmIndexar(docs){
 var N=docs.length, df={}, tf=[], len=[], tot=0;
 for(var i=0;i<N;i++){
  var ts=bmTok(docs[i].texto), c={};
  for(var j=0;j<ts.length;j++)c[ts[j]]=(c[ts[j]]||0)+1;
  tf.push(c); len.push(ts.length); tot+=ts.length;
  for(var k in c)df[k]=(df[k]||0)+1;
 }
 return {docs:docs,N:N,df:df,tf:tf,len:len,avg:N?tot/N:1};
}
function bmBuscar(idx,q,top){
 if(!idx||!idx.N)return [];
 var ts=bmTok(q); if(!ts.length)return [];
 var res=[];
 for(var i=0;i<idx.N;i++){
  var sc=0;
  for(var j=0;j<ts.length;j++){
   var t=ts[j], f=idx.tf[i][t]; if(!f)continue;
   // idf de Robertson, acotado por abajo para que no salga negativo.
   var idf=Math.log(1+(idx.N-idx.df[t]+0.5)/(idx.df[t]+0.5));
   var norm=f*(BM_K1+1)/(f+BM_K1*(1-BM_B+BM_B*idx.len[i]/idx.avg));
   sc+=idf*norm;
  }
  /* Bonus por titulo. Sin esto, la entrada que DEFINE "arbitraje" perdia contra
     las que solo lo mencionan, porque la palabra sale en tantos documentos que
     su idf es minimo. Pesar el titulo aparte es lo habitual. */
  var tit=bmTok(idx.docs[i].t||"");
  if(tit.length){
   var hay=0;
   for(var m=0;m<tit.length;m++)if(ts.indexOf(tit[m])>=0)hay++;
   if(hay)sc+=2.2*hay/tit.length*(1+Math.log(1+hay));
  }
  if(sc>0)res.push({s:sc,d:idx.docs[i]});
 }
 res.sort(function(a,b){return b.s-a.s});
 return res.slice(0,top||3);
}

/* ---------- Conocimiento del propio terminal ----------
   Se construye del HTML ya escrito -glosario, biblioteca, explicaciones- para
   que no haya dos versiones de la misma frase que puedan desincronizarse. */

/* Terminos que el terminal usa y no estaban explicados en ningun sitio. Van al
   indice del asistente para que pueda responder que significa cada cosa con una
   definicion escrita a proposito, en vez de con el parrafo mas parecido. */
var IA_TERMINOS=[
 ["Spread","La diferencia entre lo que te piden por comprar y lo que te dan por vender. Es lo que pagas por entrar y salir, aunque aciertes. Si el spread es del 3% y tu ventaja es del 2%, pierdes dinero teniendo razón. El terminal lo estima del propio precio con el método EDGE.","pm"],
 ["Coste real de operar","El spread efectivo estimado a partir de máximos y mínimos diarios (método EDGE de Ardia, Guidotti y Kroencke). En el veredicto se resta del objetivo: si el neto sale en rojo, la idea no paga ni el peaje. En empresas pequeñas suele ser diez veces mayor que en grandes.","ver"],
 ["Lambda de Wang","El número que mide cuánto se desvía el precio de una apuesta de su probabilidad real. Con lambda positiva, lo improbable cotiza caro y lo probable barato. El terminal usa 0,183, medido sobre 291.000 contratos ya resueltos. Ojo: los 107 mercados propios dan el signo contrario, y por eso hay un aviso.","brain"],
 ["Kelly","La fórmula que dice qué porcentaje de tu dinero apostar para crecer lo más rápido posible a largo plazo. Kelly entero aguanta caídas enormes, así que el terminal usa la mitad y nunca pasa del 10%.","cart"],
 ["Stop","El precio al que sales admitiendo que te equivocaste. En el veredicto está a dos veces el movimiento diario típico: lo bastante lejos para que el ruido normal no lo toque, lo bastante cerca para que la pérdida sea asumible.","ver"],
 ["Objetivo","El precio al que recoges ganancias. Está al doble de distancia que el stop, para que ganes el doble de lo que arriesgas cuando aciertas. Así puedes fallar más veces de las que aciertas y seguir ganando.","ver"],
 ["Movimiento diario típico","Cuánto se mueve un precio en una sesión normal. De ahí salen el stop y el objetivo, porque un stop que no respeta la volatilidad de la acción salta por ruido, no por error.","ver"],
 ["Momentum","Que lo que ha subido tiende a seguir subiendo un tiempo. El terminal lo mide comparando cada empresa con el resto, no contra sí misma, para que no dependa de si todo el sector va bien.","quant"],
 ["Z-score","Cuántas desviaciones típicas se aparta algo de la media. Por encima de 0 va mejor que el resto; por encima de 2, mucho mejor. Sirve para comparar cosas que no se parecen.","quant"],
 ["Brier","La nota del que predice: 0 es perfecto y 0,25 es lo que saca tirar una moneda. Sirve para saber si el mercado acierta, no si tú ganas dinero.","sim"],
 ["t-stat","Cuánto se distingue un resultado de la pura suerte. Por debajo de 2 no se distingue. Cuidado: sale inflado si mides ventanas que se solapan, que es el error más común.","sim"],
 ["Arbitraje","Ganar sin acertar nada. Si las probabilidades de un grupo de resultados suman 1,05, sobra un 5% y eso se cobra pase lo que pase. Es aritmética, no predicción, y por eso es lo más sólido del terminal.","brain"],
 ["Monotonía","Si A implica B, A nunca puede cotizar más caro que B. Que Bitcoin llegue a 200.000 implica que llegue a 150.000, así que la primera no puede valer más. Cuando pasa, hay dinero encima de la mesa.","brain"],
 ["Cointegración","Dos precios que se mueven juntos aunque cada uno vaya a lo suyo. Cuando se separan más de lo normal suelen volver a juntarse. El terminal mide cuánto tardan en volver.","quant"],
 ["Hurst","Un número que dice si una serie tiene memoria. Por encima de 0,55 las tendencias siguen; por debajo de 0,45 los movimientos se dan la vuelta. En 0,5 es aleatoria.","quant"],
 ["Régimen","Si el mercado está más nervioso o más tranquilo de lo normal. Se mide comparando la volatilidad de las últimas 20 sesiones con la de las últimas 100.","quant"],
 ["Longshot","Una apuesta poco probable, que paga mucho si sale. Suelen estar caras porque la gente paga de más por el billete de lotería, aunque en la muestra propia del terminal pasa lo contrario.","pm"],
 ["Valor justo","Lo que debería costar una apuesta si se corrige el sesgo de que lo improbable cotiza caro. Solo se calcula dentro de un grupo de resultados excluyentes, porque fuera no hay con qué comparar.","brain"],
 ["8-K","El aviso que una empresa cotizada en Estados Unidos tiene que mandar a la SEC cuando pasa algo relevante. Es el momento exacto en que una información privada se hace pública.","con"],
 ["Small cap","Empresa cotizada pequeña, aquí entre 50 y 500 millones. Poca gente las sigue, así que su precio reacciona tarde a las noticias.","sc"],
 ["Veredicto","La pantalla que junta todo y dice dónde conviene comprar o vender, con posición, entrada, stop, objetivo, cuánto y hasta cuándo. Es la lectura del terminal, no una recomendación: decides tú.","ver"]
];

var IAIDX=null;
function iaIndice(){
 if(IAIDX)return IAIDX;
 var docs=[];
 // Terminos propios, escritos a proposito para responder "que es X".
 IA_TERMINOS.forEach(function(x){
  docs.push({t:x[0],texto:x[0]+" "+x[0]+" "+x[2]+" "+x[1],cuerpo:x[1],fuente:"glosario",ir:x[2]});
 });
 // Glosario.
 [].forEach.call(document.querySelectorAll(".gloss>div"),function(d){
  var k=d.querySelector(".k"), v=d.querySelector(".v");
  if(k&&v)docs.push({t:k.textContent.trim(),texto:k.textContent+" "+v.textContent,
   cuerpo:v.textContent.trim(),fuente:"glosario",ir:null});
 });
 // Explicaciones y ayudas de cada vista.
 [].forEach.call(document.querySelectorAll(".view"),function(v){
  var id=v.id.replace("v-","");
  [].forEach.call(v.querySelectorAll(".expl,.ayuda,.st"),function(e){
   var tx=(e.textContent||"").trim();
   if(tx.length>60)docs.push({t:(e.closest(".p")&&e.closest(".p").querySelector("h3")?
    e.closest(".p").querySelector("h3").textContent.trim():id),
    texto:tx,cuerpo:tx,fuente:"terminal",ir:id});
  });
 });
 // Biblioteca de metodos.
 if(typeof LIB!=="undefined")LIB.forEach(function(x){
  docs.push({t:x.fam,texto:x.fam+" "+x.tema+" "+(x.qué||x.que||"")+" "+(x.por||""),
   cuerpo:(x.qué||x.que||x.tema||""),fuente:"biblioteca",ir:"lib"});
 });
 // Que hay en cada pantalla.
 if(typeof PAL_VISTAS!=="undefined")PAL_VISTAS.forEach(function(v){
  docs.push({t:v[1],texto:v[1]+" "+v[2],cuerpo:v[2],fuente:"pantalla",ir:v[0]});
 });
 IAIDX=bmIndexar(docs);
 return IAIDX;
}

/* ---------- Respuestas exactas, sin modelo ----------
   Hay preguntas cuya respuesta es un numero que el terminal ya tiene. Pasarlas
   por un modelo de lenguaje solo anade espera y riesgo de que se lo invente. */
function iaLocal(q){
 var t=" "+String(q||"").toLowerCase().normalize("NFD").replace(/[\\u0300-\\u036f]/g,"")+" ";
 var emp=null;
 for(var i=0;i<SC.length;i++){
  var nom=SC[i].name.toLowerCase().split(" ")[0], tk=String(SC[i].tk).split(":").pop().toLowerCase();
  if((nom.length>3&&t.indexOf(nom)>=0)||(tk.length>2&&t.indexOf(" "+tk+" ")>=0)){emp=SC[i];break}
 }
 // "hasta cuando" / niveles de una empresa concreta
 if(emp&&/hasta cuando|cuanto aguanto|cuando salgo|cuando vendo|stop|objetivo|entrada|niveles/.test(t)){
  var q2=null; for(var j=0;j<QUANT.length;j++)if(QUANT[j].s.tk===emp.tk){q2=QUANT[j];break}
  if(q2&&q2.c&&q2.c.length>60){
   var dir=(q2.z>0.5&&q2.s50>q2.s200&&q2.dd>-0.4)?1:((q2.z<-0.5&&q2.s50<q2.s200)?-1:0);
   if(!dir)return {r:emp.name+T(" no da señal clara ahora mismo, así que el terminal no propone ni entrada ni plazo. Momentum z "+q2.z.toFixed(2)+".",
     " gives no clear signal right now, so the terminal proposes no entry or horizon. Momentum z "+q2.z.toFixed(2)+"."),a:"ficha:"+emp.tk};
   var nv=nivelesDe(q2.c,dir), br=Math.abs(nv.obj-nv.ent)/nv.ent, d=sesionesHasta(q2.c,br);
   var sp=(PX[emp.tk]&&typeof PX[emp.tk].spread==="number")?PX[emp.tk].spread:null;
   return {r:emp.name+": "+T("posición ","position ")+(dir>0?T("alcista","long"):T("bajista","short"))+
     ". "+T("Entrada ","Entry ")+nv.ent.toFixed(2)+", stop "+nv.stop.toFixed(2)+", "+T("objetivo ","target ")+nv.obj.toFixed(2)+". "+
     T("Plazo esperado ","Expected horizon ")+plazoTxt(d)+T(", y sales igualmente si ","; exit anyway if ")+
     (dir>0?T("la media de 50 cae por debajo de la de 200","the 50-day average drops below the 200-day")
           :T("la media de 50 sube por encima de la de 200","the 50-day average rises above the 200-day"))+". "+
     (sp===null?T("El coste de operar no es estimable en esta serie.","Trading cost is not estimable in this series.")
              :T("Descontando el coste real de "+(sp*100).toFixed(2)+"%, queda un "+((br-sp)*100).toFixed(1)+"% neto.",
                 "After the real "+(sp*100).toFixed(2)+"% cost, "+((br-sp)*100).toFixed(1)+"% net remains."))+
     " "+T("Decides tú.","You decide."),a:"ficha:"+emp.tk};
  }
  return {r:T("Necesito los precios cargados para darte los niveles. Los estoy pidiendo.","I need prices loaded to give you levels. Requesting them now."),a:"cargar_precios"};
 }
 // arbitrajes de hoy
 if(/arbitraje|cuentas que no cuadran|sobra dinero/.test(t)&&typeof BQ!=="undefined"&&BQ&&BQ.groups){
  var g=BQ.groups.filter(function(x){return x.net>0}).sort(function(a,b){return b.net-a.net}).slice(0,3);
  if(!g.length)return {r:T("Hoy no hay ningún grupo cuyas cuentas no cuadren lo suficiente para cubrir costes.","No group today is off by enough to cover costs."),a:"ver_oportunidades"};
  return {r:T("Hay "+BQ.groups.filter(function(x){return x.net>0}).length+" grupos con ventaja neta. Los mayores: ","There are "+BQ.groups.filter(function(x){return x.net>0}).length+" groups with net edge. The largest: ")+
    g.map(function(x){return x.ev.slice(0,40)+" ("+(x.net*100).toFixed(2)+"%, "+x.side+")"}).join("; ")+
    ". "+T("Esto es aritmética, no predicción: no hace falta acertar nada.","This is arithmetic, not forecasting: nothing needs to be predicted."),a:"ver_oportunidades"};
 }
 // resultado de la simulacion
 if(/simulacion|backtest|funciona|tasa de acierto|supera al azar/.test(t)&&typeof BT!=="undefined"&&BT&&BT.strats){
  var b=BT.strats[0];
  return {r:T("Sobre "+BT.S.length+(BT.fx?" ventanas de divisas":" mercados ya resueltos")+", la mejor es «"+b.name+"»: "+
    (b.win*100).toFixed(0)+"% de acierto, "+(b.total>=0?"+":"")+b.total.toFixed(1)+" unidades, t="+b.t.toFixed(2)+". "+
    (Math.abs(b.t)>=2?"Supera el umbral de 2, pero conviene compararla con la referencia antes de creérselo.":"No llega a t=2, así que no se distingue del azar."),
    "Over "+BT.S.length+" cases, the best is "+b.name+": "+(b.win*100).toFixed(0)+"% hit rate, "+b.total.toFixed(1)+" units, t="+b.t.toFixed(2)+"."),a:"ver_simulador"};
 }
 return null;
}

/* Busca en el conocimiento del terminal y devuelve una respuesta si es clara. */
function iaDoc(q){
 var r=bmBuscar(iaIndice(),q,2);
 // Umbral: por debajo, la coincidencia es casual y es mejor callarse.
 if(!r.length||r[0].s<5)return null;
 // Si el segundo va casi igual de bien, la pregunta es ambigua: mejor el modelo.
 if(r.length>1&&r[1].s>r[0].s*0.9)return null;
 var d=r[0].d, cuerpo=String(d.cuerpo||"").replace(/\\s+/g," ").trim();
 if(cuerpo.length<40)return null;
 return {r:cuerpo.slice(0,420),a:d.ir?("ver_"+({ini:"inicio",con:"contratos",sc:"empresas",pm:"apuestas",
   news:"noticias",quant:"analisis",ver:"veredicto",brain:"oportunidades",sim:"simulador",
   cart:"cartera",lib:"metodos"}[d.ir]||"inicio")):null,fuente:d.fuente};
}


/* Espera a que una condicion se cumpla, con tope. Lo que permite que el
   asistente lance una carga y siga trabajando cuando termine. */
function iaEsperar(cond,ms,paso){
 var t0=Date.now(), paso=paso||1200;
 return new Promise(function(res){
  (function tic(){
   if(cond())return res(true);
   if(Date.now()-t0>(ms||45000))return res(false);
   setTimeout(tic,paso);
  })();
 });
}

/* Barrido completo: carga lo que falte y devuelve lo mejor de cada fuente. */
function iaBarrer(){
 var av=iaMsg(T("Peinando el terreno: empresas, apuestas, divisas y arbitrajes…",
                "Sweeping: companies, markets, currencies and arbitrage…"),"ia");
 av.style.borderLeftColor="var(--am)";
 go("ver");
 if(!QUANT.length&&!QLOAD)loadPx();
 if(!BQ&&!BLOAD)loadBrain();
 if(!FXQ.length&&!FXQLOAD)fxLoad();
 return iaEsperar(function(){return QUANT.length&&BQ&&FXQ.length},60000).then(function(ok){
  renderVer();
  var out=[], nada=[];

  // --- empresas ---
  var emps=[];
  QUANT.forEach(function(q){
   if(!q.c||q.c.length<60)return;
   var dir=(q.z>0.5&&q.s50>q.s200&&q.dd>-0.4)?1:((q.z<-0.5&&q.s50<q.s200)?-1:0);
   if(!dir)return;
   var nv=nivelesDe(q.c,dir), br=Math.abs(nv.obj-nv.ent)/nv.ent;
   var sp=(PX[q.s.tk]&&typeof PX[q.s.tk].spread==="number")?PX[q.s.tk].spread:null;
   emps.push({n:q.s.name,tk:q.s.tk,dir:dir,z:q.z,neto:sp===null?null:br-sp,
    plazo:sesionesHasta(q.c,br)});
  });
  emps.sort(function(a,b){return Math.abs(b.z)-Math.abs(a.z)});
  if(emps.length){
   out.push(T("EMPRESAS: ","COMPANIES: ")+emps.slice(0,3).map(function(x){
    return x.n+" "+(x.dir>0?T("alcista","long"):T("bajista","short"))+
     (x.neto===null?"":" ("+(x.neto*100).toFixed(1)+T("% neto","% net")+")")+
     (x.plazo?", "+plazoTxt(x.plazo):"")}).join("; "));
  } else nada.push(T("empresas","companies"));

  // --- arbitrajes: lo mas solido, porque es aritmetica ---
  var ar=(BQ.groups||[]).filter(function(g){return g.net>0}).sort(function(a,b){return b.net-a.net});
  if(ar.length)out.push(T("ARBITRAJE (no hace falta acertar nada): ","ARBITRAGE (no forecasting needed): ")+
   ar.slice(0,3).map(function(g){return g.ev.slice(0,38)+" +"+(g.net*100).toFixed(2)+"% ("+g.side+")"}).join("; "));
  else nada.push(T("arbitrajes","arbitrage"));

  // --- apuestas ---
  var ap=[];
  (BQ.markets||[]).forEach(function(m){
   if(typeof m.edge!=="number"||m.fair===null)return;
   if(m.spreadRel>0.15||m.p<0.03||m.p>0.97)return;
   if(Math.abs(m.edge)>Math.max(0.03,m.spreadRel))ap.push(m);
  });
  ap.sort(function(a,b){return Math.abs(b.edge)-Math.abs(a.edge)});
  if(ap.length)out.push(T("APUESTAS: ","MARKETS: ")+ap.slice(0,3).map(function(m){
   return m.q.slice(0,34)+" "+(m.edge<0?T("barata","cheap"):T("cara","rich"))+" "+(Math.abs(m.edge)*100).toFixed(1)+T(" pts"," pts")}).join("; "));
  else nada.push(T("apuestas","markets"));

  // --- divisas ---
  /* En divisas no se da direccion: ninguna señal replica en datos oficiales.
     Se informa de riesgo, que es lo que si aguanta. */
  var arr=FXQ.map(function(x){var r=(typeof fxRiesgo==="function")?fxRiesgo(x.c,0.99):null;
    return r?{n:x.n,peor:Math.min(r.varHist,r.varCF)}:null}).filter(Boolean)
   .sort(function(a,b){return a.peor-b.peor});
  if(arr.length)out.push(T("DIVISAS (sin señal direccional: ninguna replica en datos del BCE). Las de mayor riesgo real: ",
    "CURRENCIES (no directional signal replicates). Highest real risk: ")+
   arr.slice(0,3).map(function(x){return x.n+" "+(x.peor*100).toFixed(2)+"%"}).join("; "));

  var txt=out.length?out.join(String.fromCharCode(10)+String.fromCharCode(10)):
   T("No hay nada que destaque ahora mismo en ninguna de las cuatro fuentes.","Nothing stands out right now in any of the four sources.");
  if(nada.length&&out.length)txt+=String.fromCharCode(10)+String.fromCharCode(10)+
   T("Sin señal en: ","No signal in: ")+nada.join(", ")+".";
  if(!ok)txt+=String.fromCharCode(10)+T("(alguna fuente tardó demasiado y va con lo que llegó)","(a source timed out; this uses what arrived)");
  txt+=String.fromCharCode(10)+String.fromCharCode(10)+
   T("Lo tienes todo con entrada, stop, objetivo y plazo en la pantalla que te he abierto. Decides tú.",
     "Full entries, stops, targets and horizons are on the screen I opened. You decide.");
  var d=iaMsg(txt,"ia"); decir(txt);
  IAHIST.push(["ia",txt.slice(0,300)]); if(IAHIST.length>6)IAHIST=IAHIST.slice(-6);
  return true;
 });
}

function iaEstado(){
 var p=[];
 try{
  var VN={ini:"inicio",dash:"resumen",con:"contratos",sc:"empresas",pm:"apuestas",news:"noticias",
   quant:"análisis de empresas",brain:"oportunidades",sim:"simulador",cart:"calculadora",inv:"investigación",lib:"biblioteca"};
  p.push("VISTA ACTUAL: "+(VN[VIEW]||VIEW)+" · modo "+(MODO==="simple"?"sencillo":"completo"));
  if(QUANT.length){
   var q=QUANT.slice().sort(function(a,b){return b.r1-a.r1});
   p.push("EMPRESAS, MEJOR MES: "+q.slice(0,3).map(function(x){return x.s.name+" "+(x.r1*100).toFixed(1)+"%"}).join(", "));
   p.push("EMPRESAS, PEOR MES: "+q.slice(-3).reverse().map(function(x){return x.s.name+" "+(x.r1*100).toFixed(1)+"%"}).join(", "));
   var z=QUANT.slice().sort(function(a,b){return b.z-a.z});
   p.push("MAYOR MOMENTUM: "+z.slice(0,3).map(function(x){return x.s.name+" z="+x.z.toFixed(2)}).join(", "));
  } else p.push("EMPRESAS: precios sin cargar (accion cargar_precios)");
  if(BT&&BT.strats&&BT.strats.length){
   p.push("SIMULACION ("+(BT.fx?"divisas":"Polymarket")+", "+BT.S.length+" operaciones): "+
    BT.strats.map(function(s){return s.name+": "+(s.total>=0?"+":"")+s.total.toFixed(1)+"u, acierto "+(s.win*100).toFixed(0)+"%, t="+s.t.toFixed(2)}).join(" | "));
  } else p.push("SIMULACION: no ejecutada (accion simular)");
  if(FXQ.length){
   var fz=FXQ.slice().sort(function(a,b){return b.z-a.z});
   p.push("DIVISAS, MEJOR MOMENTUM: "+fz.slice(0,3).map(function(x){return x.n+" z="+x.z.toFixed(2)+" 6M "+(x.r6*100).toFixed(1)+"%"}).join(", "));
   p.push("DIVISAS EN TENSION: "+(FXQ.filter(function(x){return x.reg>1.25}).map(function(x){return x.n}).join(", ")||"ninguna"));
  }
  /* El veredicto con sus niveles: es lo que hace falta para poder contestar
     "hasta cuando" o "donde pongo el stop" sin inventarselo. */
  try{
   var vv=[];
   QUANT.forEach(function(q){
    if(!q.c||q.c.length<60)return;
    var dir=0;
    if(q.z>0.5&&q.s50>q.s200&&q.dd>-0.4)dir=1; else if(q.z<-0.5&&q.s50<q.s200)dir=-1;
    if(!dir||vv.length>=6)return;
    var nv=nivelesDe(q.c,dir),br=Math.abs(nv.obj-nv.ent)/nv.ent;
    var sp=(PX[q.s.tk]&&typeof PX[q.s.tk].spread==="number")?PX[q.s.tk].spread:null;
    vv.push(q.s.name+" ("+q.s.tk+"): "+(dir>0?"ALCISTA":"BAJISTA")+
     ", entrada "+nv.ent.toFixed(2)+", stop "+nv.stop.toFixed(2)+", objetivo "+nv.obj.toFixed(2)+
     ", plazo ~"+(sesionesHasta(q.c,br)||"?")+" sesiones"+
     (sp===null?", coste no estimable":", coste "+(sp*100).toFixed(2)+"%")+
     ", salir si "+(dir>0?"la media de 50 cae bajo la de 200":"la media de 50 sube sobre la de 200"));
   });
   if(vv.length)p.push("VEREDICTO (niveles que propone el terminal):"+String.fromCharCode(10)+vv.join(String.fromCharCode(10)));
  }catch(e){}
  try{
   if(BT&&!BT.fx&&BT.lam!==null&&isFinite(BT.lam)&&BT.lam<0)
    p.push("AVISO: la lambda medida en los "+BT.S.length+" mercados resueltos es "+BT.lam.toFixed(3)+
      ", signo contrario al +0.183 de la literatura que usa el valor justo. Las apuestas propuestas son senal debil.");
  }catch(e){}
  if(FE)p.push("FICHA ABIERTA: "+FE.name+" ("+FE.tk+")");
  if(DT)p.push("MERCADO ABIERTO: "+DT.q);
  var wl=SC.filter(function(x){return W[x.tk]});
  if(wl.length)p.push("SEGUIDAS: "+wl.map(function(x){return x.name}).join(", "));
 }catch(e){}
 return p.join("\\n").slice(0,1500);
}
function iaEjecutar(a){
 if(!a)return null;
 var V={ver_inicio:["ini","a la portada"],ver_contratos:["con","a contratos y avisos 8-K"],
  ver_empresas:["sc","al listado de empresas"],ver_apuestas:["pm","a los mercados"],
  ver_noticias:["news","a las noticias"],ver_analisis:["quant","al análisis de empresas"],ver_veredicto:["ver","al veredicto: dónde comprar o vender"],
  ver_oportunidades:["brain","a las oportunidades"],ver_simulador:["sim","al simulador"],
  ver_cartera:["cart","a la calculadora"],ver_metodos:["lib","a los métodos"]};
 if(V[a]){go(V[a][0]);return "Te he llevado "+V[a][1]+"."}
 if(a.indexOf("ficha:")===0){
  var tk=a.slice(6);
  for(var i=0;i<SC.length;i++)if(SC[i].tk===tk){feAbrir(tk);return "Te abro la ficha de "+SC[i].name+"."}
  return null}
 if(a==="cargar_precios"){go("quant");if(!QLOAD)loadPx();return "Descargando precios, tarda unos segundos."}
 if(a==="buscar_oportunidades"){iaBarrer();return null}
 if(a==="cargar_divisas"){go("quant");fxLoad();setTimeout(function(){try{$("fxload").scrollIntoView({block:"start"})}catch(e){}},300);return "Descargando las 18 divisas."}
 if(a==="simular"){go("sim");setUniv("pm");btRun();return "Simulación lanzada. Tarda 1–3 minutos."}
 if(a==="simular_divisas"){go("sim");setUniv("fx");fxRun();return "Simulando divisas."}
 if(a==="prueba_choque"){go("sim");if(BT&&!BT.fx){mcRun();return "Prueba de choque lanzada."}
  return "Antes hay que ejecutar la simulación de Polymarket."}
 if(a==="anotar_papel"){loadPaper("snap");return "Señales de hoy anotadas."}
 return null}

/* ---- voz ---- */
var IAHIST=[];
var VOZ=null,VOZON=false,HABLAR=false,CONVERSA=false;
function vozIniciar(){
 var R=window.SpeechRecognition||window.webkitSpeechRecognition;
 if(!R)return false;
 VOZ=new R();VOZ.lang=(IDIOMA==="en"?"en-US":"es-ES");VOZ.continuous=false;VOZ.interimResults=false;
 VOZ.onresult=function(e){
  var t=e.results[0][0].transcript;
  $("iaq").value=t;iaPreguntar(t)};
 VOZ.onend=function(){
  VOZON=false;$("iamic").textContent="\\uD83C\\uDFA4";$("iamic").style.color="";
  // En modo conversacion se vuelve a escuchar en cuanto acaba de hablar.
  if(CONVERSA&&!IABUSY&&!(window.speechSynthesis&&speechSynthesis.speaking))
   setTimeout(function(){ if(CONVERSA&&!VOZON&&!IABUSY)vozAlternar() },700);
 };
 VOZ.onerror=function(){VOZON=false;$("iamic").textContent="🎤";$("iamic").style.color=""};
 return true}

function vozAlternar(){
 if(!VOZ&&!vozIniciar()){
  iaMsg("Tu navegador no reconoce voz. En Chrome funciona; en otros puede que no.","err");return}
 if(VOZON){VOZ.stop();return}
 try{VOZ.start();VOZON=true;$("iamic").textContent="●";$("iamic").style.color="var(--rd)"}
 catch(e){iaMsg("No pude activar el micrófono: "+(e.message||e),"err")}}

function decir(txt){
 if(!HABLAR||!window.speechSynthesis)return;
 try{
  speechSynthesis.cancel();
  var u=new SpeechSynthesisUtterance(String(txt).slice(0,600));
  u.lang=(IDIOMA==="en"?"en-US":"es-ES");u.rate=1.05;
  // Al terminar de leer, si estamos conversando, vuelve a abrir el microfono.
  u.onend=function(){ if(CONVERSA&&!VOZON&&!IABUSY)setTimeout(vozAlternar,350) };
  speechSynthesis.speak(u)}catch(e){}}

function iaPreguntar(q){
 q=(q||$("iaq").value||"").trim();
 if(!q||IABUSY)return;
 IABUSY=true;$("iaq").value="";
 iaMsg(q,"tu");
 /* Primero se intenta contestar con lo que ya sabe el terminal: es instantaneo
    y no puede inventarse nada. Solo si no hay respuesta clara se llama al
    modelo, que es lo que cuesta segundos. */
 /* Si lo que piden es un barrido, se lanza ya: no tiene sentido esperar al
    modelo para que diga "voy a mirar". */
 if(/busca|buscar|peina|echa un vistazo|que hay|encuentra|oportunidad|revisa todo|mira todo|escanea/i
    .test(q.normalize("NFD").replace(/[\\u0300-\\u036f]/g,""))){
  IAHIST.push(["tu",q]); if(IAHIST.length>6)IAHIST=IAHIST.slice(-6);
  iaBarrer().then(function(){IABUSY=false});
  return;
 }
 var loc=null;
 try{ loc = iaLocal(q) || iaDoc(q) }catch(e){ loc=null }
 if(loc){
  var d0=iaMsg(loc.r,"ia");
  if(loc.fuente)d0.insertAdjacentHTML("beforeend","<div class='dsc' style='margin-top:5px'>"+T("de la documentación del terminal","from the terminal's own documentation")+"</div>");
  decir(loc.r);
  IAHIST.push(["tu",q],["ia",loc.r.slice(0,300)]); if(IAHIST.length>6)IAHIST=IAHIST.slice(-6);
  var h0=iaEjecutar(loc.a);
  if(h0){var e0=iaMsg("▸ "+h0,"ia");e0.style.borderLeftColor="var(--cy)";e0.style.background="rgba(34,211,238,.07)"}
  IABUSY=false; return;
 }
 var esp=iaMsg("Consultando tus datos…","ia");
 api("/api/chat?q="+encodeURIComponent(q)+"&estado="+encodeURIComponent(iaEstado())+
     "&hist="+encodeURIComponent(IAHIST.map(function(x){return x[0]+"|"+x[1]}).join("||")),{cache:"no-store"})
  .then(function(r){return r.json()})
  .then(function(j){
   if(j.error){esp.className="iab err";esp.textContent=j.error;return}
   esp.textContent=j.respuesta;
   decir(j.respuesta);
   IAHIST.push(["tu",q],["ia",String(j.respuesta).slice(0,300)]);
   if(IAHIST.length>6)IAHIST=IAHIST.slice(-6);
   var hecho=iaEjecutar(j.accion);
   if(hecho){var d=iaMsg("▸ "+hecho,"ia");d.style.borderLeftColor="var(--cy)";d.style.background="rgba(34,211,238,.07)"}})
  .catch(function(e){esp.className="iab err";esp.textContent="No se pudo consultar: "+(e.message||e)})
  .then(function(){IABUSY=false;$("iaq").focus()})}

function iaAbrir(v){
 $("iap").classList.toggle("on",v);
 $("iabtn").classList.toggle("abierto",v);
 $("iabtn").textContent=v?"\\u2715 CERRAR" : "\\uD83E\\uDDE0 PREGUNTA AL TERMINAL";
 if(v){
  if(!$("iam").children.length){
   iaMsg("Pregúntame por lo que hay hoy. Solo respondo con los datos que el terminal "+
         "tiene cargados: si algo no lo sé, te lo digo en vez de inventarlo.","ia");
   $("iaeg").innerHTML=IAEJ.map(function(e){return "<button data-ia=\\""+esc(e)+"\\">"+esc(e)+"</button>"}).join("");
  }
  $("iaq").focus()}}

/* ---- navegacion en dos niveles ----
   Once pestanas en fila no se leen. Se agrupan por para que sirve cada una.     */
var GRUPOS=[
 {id:"g1",t:"Inicio",  v:["ini"]},
 {id:"g2",t:"Mercado", v:["dash","con","sc","pm","news"]},
 {id:"g3",t:"Análisis",v:["quant","ver","brain"]},
 {id:"g4",t:"Herramientas",v:["sim","cart"]},
 {id:"g5",t:"Investigación",v:["inv","lib"]}
];
var GACT="g1";

function grupoDe(v){
 for(var i=0;i<GRUPOS.length;i++)if(GRUPOS[i].v.indexOf(v)>=0)return GRUPOS[i].id;
 return "g1"}

function pintarNav(){
 $("nav2").innerHTML=GRUPOS.map(function(g){
  var t=(IDIOMA==="en"&&EN[g.t])?EN[g.t]:g.t;
  return "<button data-g='"+g.id+"' class='"+(g.id===GACT?"on":"")+"'>"+t+"</button>"}).join("");
 var g=GRUPOS.filter(function(x){return x.id===GACT})[0]||GRUPOS[0];
 [].forEach.call($("nav").querySelectorAll("button[data-v]"),function(b){
  b.classList.toggle("vis",g.v.indexOf(b.dataset.v)>=0)});
 // un grupo de una sola vista no necesita segunda fila
 $("nav").style.display=(g.v.length>1)?"":"none"}

function irGrupo(id){
 GACT=id;
 var g=GRUPOS.filter(function(x){return x.id===id})[0];
 pintarNav();
 if(g&&g.v.indexOf(VIEW)<0)go(g.v[0])}

function aplicarModo(){
 document.body.classList.toggle("simple",MODO==="simple");
 var b=$("modo");
 var etiq=MODO==="simple"?"MODO SENCILLO":"MODO COMPLETO";
 b.textContent=(IDIOMA==="en"&&EN[etiq])?EN[etiq]:etiq;
 $("lang").textContent=IDIOMA==="es"?"ES":"EN";
 document.documentElement.lang=IDIOMA;
 b.classList.toggle("pro",MODO!=="simple");
 try{localStorage.setItem("mor_modo",MODO)}catch(e){}
 traducir();
 GACT=grupoDe(VIEW); pintarNav();
 // Las teclas F siguen funcionando, pero el numero se oculta: a alguien no tecnico
 // solo le anade ruido.
 [].forEach.call($("nav").querySelectorAll("button[data-v]"),function(b){
  if(MODO==="simple")b.textContent=b.textContent.replace(/^F\\d+\\s+/,"")});}

function T(es,en){return IDIOMA==="en"?en:es}
function nEmp(n,sing,plur){return n+" "+(n===1?sing:plur)}

function renderIni(){
 var hoy=[],tarj=[],lista=[];

 // --- contratos ---
 var radar=CON.filter(function(c){return !c.prime});
 if(CON.length){
  tarj.push({v:"ver",c:"ok",t:T("Dónde comprar o vender","Where to buy or sell"),g:"→",
   x:T("posición, entrada, stop y objetivo","position, entry, stop and target"),
   y:T("Lectura del terminal · tú decides","The terminal's read · you decide")});
  tarj.push({v:"con",c:"",t:T("Contratos vigilados","Contracts tracked"),g:CON.length,
   x:T(nEmp(radar.length,"no va","no van")+" a los gigantes", radar.length+" not going to the primes"),
   y:T("Últimos 30 días del Pentágono","Pentagon, last 30 days")});
  hoy.push(T("El Pentágono ha repartido <b>"+CON.length+"</b> contratos en 30 días. "+
   "<b>"+radar.length+"</b> no se los llevan los gigantes de siempre, que son los que pueden mover una empresa pequeña.",
   "The Pentagon awarded <b>"+CON.length+"</b> contracts in 30 days. <b>"+radar.length+
   "</b> did not go to the usual primes — those are the ones that can move a small company."));
 }
 if(MATCH&&MATCH.length){
  tarj.push({v:"dash",sc:"d-match",c:"ok",t:T("Cruces detectados","Matches found"),g:MATCH.length,
   x:T("Coinciden con tu lista de empresas","Match your company list"),
   y:T("Verifícalo a mano antes de nada","Verify by hand before anything else")});
  hoy.push(T("Hay <b>"+MATCH.length+"</b> "+(MATCH.length===1?"coincidencia":"coincidencias")+
   " entre quien gana contratos y tus empresas seguidas. Es la señal más fuerte que da el terminal.",
   "There "+(MATCH.length===1?"is":"are")+" <b>"+MATCH.length+"</b> match"+(MATCH.length===1?"":"es")+
   " between contract winners and the companies you follow. It is the strongest signal this terminal produces."));
  MATCH.slice(0,4).forEach(function(m){
   lista.push(["ok","Cruce",m.company+" podría estar detrás de un contrato de "+f$(m.amount),
    "Coincide el nombre con "+m.recipient+". Compruébalo antes de dar nada por hecho."])});
 }

 // --- 8-K ---
 if(EDG){
  var cr=EDG.cruces.length,ca=EDG.candidatas.length;
  tarj.push({v:"con",sc:"e-rows",c:cr?"ok":"inf",t:T("Avisos oficiales (8-K)","Official filings (8-K)"),g:cr+ca,
   x:cr?T(nEmp(cr,"es de tu lista","son de tu lista"), cr+" from your list"):T("ninguno es de tu lista","none from your list"),
   y:T("Empresas que han comunicado algo a la SEC","Companies that filed something with the SEC")});
  if(cr) EDG.cruces.slice(0,3).forEach(function(x){
   lista.push(["ok","Tu lista",x.universo+" ha publicado un aviso oficial el "+x.fecha,
    "Citando al Departamento de Defensa. "+x.etiquetas.join(", ")+"."])});
  EDG.candidatas.slice(0,3).forEach(function(x){
   lista.push(["inf","Nueva",x.nombre+(x.tk?" ("+x.tk+")":"")+" firmó un contrato el "+x.fecha,
    "Sector: "+x.sector+". No está en tu lista todavía; puede merecer añadirla."])});
 }

 // --- arbitraje ---
 if(BQ){
  var op=(BQ.groups||[]).filter(function(g){return g.net>0}).length+(BQ.mono||[]).length;
  tarj.push({v:"brain",sc:"b-arb",c:op?"ok":"inf",t:T("Cuentas que no cuadran","Math that doesn't add up"),g:op,
   x:op?T("apuestas donde sobra dinero","markets with money left over"):T("hoy todo cuadra","everything adds up today"),
   y:T("Sin tener que adivinar nada","No forecasting required")});
  if(op){
   var mej=(BQ.groups||[]).filter(function(g){return g.net>0})[0];
   if(mej)lista.push(["ok","Arbitraje","«"+mej.ev+"» suma "+(mej.sum*100).toFixed(1)+"% en vez de 100%",
    "Sobra un "+(mej.net*100).toFixed(2)+"% después de comisiones. Ojo: hay que poder entrar en todas las opciones a la vez."]);
   hoy.push(T("En los mercados de apuestas hay <b>"+op+"</b> "+(op===1?"sitio":"sitios")+
    " donde las probabilidades no suman lo que deberían. Ahí no hace falta acertar nada, solo que las cuentas cuadren.",
    "There "+(op===1?"is":"are")+" <b>"+op+"</b> spot"+(op===1?"":"s")+
    " where probabilities do not add up as they should. No forecasting needed there — just arithmetic."));
  }
 }else{
  tarj.push({v:"brain",sc:"b-arb",c:"inf",t:"Cuentas que no cuadran",g:"—",x:"pulsa para analizar",y:"Necesita cargar los mercados"});
 }

 if(!hoy.length)hoy.push(T("Cargando los datos del día… si tarda, pulsa <b>⟳ REFRESH</b> arriba a la derecha.",
   "Loading today's data… if it takes a while, press <b>⟳ REFRESH</b> at the top right."));
 $("i-hoy").innerHTML="<div class='t' style='font-size:11px;letter-spacing:.08em;color:var(--dim);text-transform:uppercase;margin-bottom:8px'>"+
  T("Qué ha pasado hoy","What happened today")+"</div>"+hoy.join("<br><br>");

 $("i-tarj").innerHTML=tarj.map(function(t){
  return "<div class='tarj "+t.c+"'"+(t.v?" data-go='"+t.v+"'"+(t.sc?" data-scroll='"+t.sc+"'":"")+" style='cursor:pointer'":"")+"><div class='t'>"+esc(t.t)+"</div><div class='g'>"+t.g+"</div>"+
   "<div class='x'>"+esc(t.x)+"</div><div class='y'>"+esc(t.y)+"</div></div>"}).join("");

 $("i-lista").innerHTML=lista.length?lista.map(function(l){
  return "<div style='padding:9px 0;border-bottom:1px solid var(--line2)'>"+
   "<span class='"+(l[0]==="ok"?"t3":"t2")+"'>"+esc(l[1])+"</span> "+
   "<b style='font-size:12.5px'>"+esc(l[2])+"</b><br>"+
   "<span style='font-size:11.5px;color:var(--dim)'>"+esc(l[3])+"</span></div>"}).join("")
  :emp("👀",T("Nada llamativo por ahora.<br>El terminal avisa cuando algo se cruza.",
    "Nothing notable yet.<br>The terminal alerts you when something crosses."));}

/* ================= NAVEGACIÓN =================
   Historial propio: al saltar entre vistas y fichas es facil perderse, y el boton
   atras del navegador no sabe nada de esto. Se integra con history.pushState para
   que el atras del navegador tambien funcione.                                   */
var HIST=[];

function volver(){
 if(!HIST.length)return;
 var e=HIST.pop();
 $("volver").style.display=HIST.length?"":"none";
 if(e.ficha){feAbrir(e.ficha,true);return}
 if(e.mkt){dtOpen(e.mkt,true);return}
 feCerrar();dtClose();go(e.view,true)}

function apilar(){
 var e={view:VIEW};
 if(FE)e.ficha=FE.tk;
 if(DT)e.mkt=DT.id;
 HIST.push(e);
 if(HIST.length>40)HIST.shift();
 $("volver").style.display="";}

function go(v,sinApilar){
 if(!sinApilar&&v!==VIEW)apilar();
 VIEW=v;
 ["ini","dash","con","sc","pm","news","quant","ver","brain","sim","cart","inv","lib"].forEach(function(x){$("v-"+x).classList.toggle("on",x===v)});
 [].forEach.call($("nav").querySelectorAll("button[data-v]"),function(b){b.classList.toggle("on",b.dataset.v===v)});
 if(typeof rutaEscribe==="function")setTimeout(rutaEscribe,0);
 if(typeof GACT!=="undefined"&&grupoDe(v)!==GACT){GACT=grupoDe(v);pintarNav()}
 if(v==="news")loadNews(NR);
 if(v==="con"&&!EDG&&!EDGL)loadEdgar();
 if(v==="ini"){if(!EDG&&!EDGL)loadEdgar(); if(!BQ&&!BLOAD)loadBrain();}
 if(v==="quant"){
  if(!Object.keys(PX).length&&!QLOAD)loadPx();
  // Las divisas tambien: si no, media pantalla se queda en blanco esperando.
  if(!FXQ.length&&!FXQLOAD)fxLoad();
 }
 if(v==="ver"){ if(!QUANT.length&&!QLOAD)loadPx(); if(!BQ&&!BLOAD)loadBrain(); if(!FXQ.length&&!FXQLOAD)fxLoad(); }
 if((v==="brain"||v==="cart")&&!BQ&&!BLOAD)loadBrain();
 if(v==="sim"&&!PAP)loadPaper();
 render()}
[].forEach.call($("nav").querySelectorAll("button[data-v]"),function(b){b.onclick=function(){go(b.dataset.v)}});




/* ===================== APRENDIZAJE: PANEL ===================== */
var APR=null;
function apCargar(){
 $("ap-st").textContent=T("Recontando el historial…","Recounting the record…");
 api("/api/aprendizaje",{cache:"no-store"})
  .then(function(r){return r.json()})
  .then(function(j){ if(j.error)throw new Error(j.error); APR=j; apPintar() })
  .catch(function(e){ $("ap-st").textContent="Error: "+(e.message||e) });
}
function apPintar(){
 if(!APR)return;
 var j=APR;
 $("ap1").textContent=j.totalLiquidadas;
 $("ap-cnt").textContent="("+j.totalLiquidadas+")";
 var L=j.lambda||{};
 $("ap2").textContent=(typeof L.lam==="number")?L.lam.toFixed(3):"—";
 $("ap2s").textContent=(L.peso>0)
  ? T("un "+(L.peso*100).toFixed(0)+"% viene de tus "+L.n+" casos; el resto, de la literatura",
      (L.peso*100).toFixed(0)+"% from your "+L.n+" cases; the rest from the literature")
  : T("todavía toda de la literatura: hacen falta casos propios","still all from the literature: needs own cases");
 var c=j.calibracion;
 $("ap3").textContent=c?(c.fiabilidad<0.01?T("sí","yes"):(c.fiabilidad<0.04?T("casi","nearly"):T("no","no"))):"—";
 $("ap3s").textContent=c?T("fiabilidad "+c.fiabilidad.toFixed(4)+" · 0 sería perfecto","reliability "+c.fiabilidad.toFixed(4)):T("faltan casos","not enough cases");
 $("ap4").textContent=c?(c.resolucion>0.05?T("bastante","fairly"):(c.resolucion>0.02?T("algo","somewhat"):T("poco","barely"))):"—";
 $("ap4s").textContent=c?T("resolución "+c.resolucion.toFixed(4)+" · si es baja, el suceso es impredecible y no hay nada que arreglar",
   "resolution "+c.resolucion.toFixed(4)):T("faltan casos","not enough cases");

 var NOM={momentum:T("Momentum de precio","Price momentum"),arb_suma:T("Arbitraje por suma","Sum arbitrage"),
  arb_mono:T("Arbitraje por monotonía","Monotonicity arbitrage"),otro:T("Otras","Other")};
 var ks=Object.keys(j.tipos||{});
 $("ap-rows").innerHTML=ks.length?ks.map(function(k){
  var t=j.tipos[k], ancho=(t.hi-t.lo);
  return "<tr><td><b>"+(NOM[k]||k)+"</b></td><td>"+t.n+"</td>"+
   "<td class='dim'>"+(t.crudo===null?"—":(t.crudo*100).toFixed(0)+"%")+"</td>"+
   "<td class='"+(t.media>0.5?"up":"dn")+"'><b>"+(t.media*100).toFixed(1)+"%</b></td>"+
   "<td>"+(t.lo*100).toFixed(0)+"–"+(t.hi*100).toFixed(0)+"%"+
     (ancho>0.3?" <span class='t2'>"+T("muy ancho","very wide")+"</span>":"")+"</td>"+
   "<td class='"+(t.retornoMedio>0?"up":"dn")+"'>"+(t.retornoMedio===null?"—":((t.retornoMedio>=0?"+":"")+(t.retornoMedio*100).toFixed(1)+"%"))+"</td>"+
   "<td><div class='tr' style='height:6px'><i style='width:"+(t.peso*100).toFixed(0)+"%'></i></div>"+
     "<span class='dsc'>"+(t.peso*100).toFixed(0)+"%</span></td></tr>"}).join("")
  :"<tr><td colspan='7'>"+emp("🎓",T("Todavía no hay ninguna señal liquidada. El terminal anota las de cada día y las liquida cuando el mercado resuelve; hasta entonces no ha aprendido nada y no se lo inventa.",
    "No settled signals yet. The terminal logs each day's signals and settles them when markets resolve; until then it has learned nothing and will not pretend otherwise."))+"</td></tr>";
 $("ap-st").textContent=T("Actualizado "+new Date(j.ts).toLocaleString(),"Updated "+new Date(j.ts).toLocaleString());
}

/* ===================== TEST SPA DE HANSEN =====================
   El t-stat agrupado corrige que las ventanas se solapen. Esto corrige un sesgo
   DISTINTO y normalmente mayor: haber probado varias estrategias y quedarse con
   la que mejor salio. Con seis estrategias, la mejor parece buena por azar.

   Remuestreo estacionario de Politis y Romano: en vez de remuestrear
   observaciones sueltas -que destruiria la dependencia temporal- se remuestrean
   bloques de longitud aleatoria geometrica, que la conservan. Sobre esa
   distribucion nula se mide cuantas veces el azar iguala a la mejor estrategia.  */
function bloqueEstacionario(x,rnd,pGeom){
 var N=x.length,out=[],i=Math.floor(rnd()*N);
 while(out.length<N){
  out.push(x[i]);
  if(rnd()<pGeom)i=Math.floor(rnd()*N); else i=(i+1)%N;
 }
 return out;
}
/* La primera version contrastaba contra CERO y daba p=0,004 diciendo que el
   momentum "sobrevivia" -y marcaba como superviviente hasta a la propia
   referencia, que no puede superarse a si misma-. Contra cero, cualquier
   estrategia que este comprada en un mercado que sube sale significativa: eso no
   es una ventaja, es la deriva del mercado.

   Lo que hay que contrastar es superioridad SOBRE LA REFERENCIA, que es el
   planteamiento de Hansen. La nula es "esta estrategia rinde igual que comprar y
   ya esta". Como las series tienen distinta longitud -cada estrategia opera en
   sus propias ventanas- no se pueden emparejar operacion a operacion, asi que se
   compara la media contra la de la referencia y se remuestrea cada serie por
   bloques para construir la nula.                                              */
function spaTest(series,B,pGeom,iRef){
 var k=series.length; if(k<2||iRef==null)return null;
 var medias=series.map(function(x){return mean(x)});
 var sds=series.map(function(x){return sd(x)||1e-9});
 var ns=series.map(function(x){return x.length});
 var mRef=medias[iRef];
 // Estadistico por estrategia: exceso sobre la referencia, estandarizado.
 var t=medias.map(function(m,i){return i===iRef?null:(m-mRef)/(sds[i]/Math.sqrt(ns[i]))});
 var cand=[]; for(var i=0;i<k;i++)if(i!==iRef)cand.push(i);
 var tMax=Math.max.apply(null,cand.map(function(i){return t[i]}));
 var seed=987654321;
 var rnd=function(){seed^=seed<<13;seed^=seed>>>17;seed^=seed<<5;return (seed>>>0)/4294967296};
 var gana=0, ganaIndiv={};
 cand.forEach(function(i){ganaIndiv[i]=0});
 for(var b=0;b<B;b++){
  var peor=-Infinity;
  // La referencia tambien se remuestrea: su media tiene su propio error.
  var rRef=bloqueEstacionario(series[iRef],rnd,pGeom);
  var dRef=mean(rRef)-mRef;
  for(var j=0;j<cand.length;j++){
   var i=cand[j];
   var r=bloqueEstacionario(series[i],rnd,pGeom);
   // Bajo la nula el exceso es cero: se centra restando lo observado.
   var tb=((mean(r)-medias[i])-dRef)/(sds[i]/Math.sqrt(ns[i]));
   if(tb>=t[i])ganaIndiv[i]++;
   if(tb>peor)peor=tb;
  }
  if(peor>=tMax)gana++;
 }
 var pI={}; cand.forEach(function(i){pI[i]=ganaIndiv[i]/B});
 return {pSPA:gana/B, pIndiv:pI, t:t, iRef:iRef, mRef:mRef};
}
function spaEjecutar(){
 if(!BT||!BT.strats||!BT.strats.length){
  $("spa-st").textContent=T("Ejecuta antes una simulación en esta misma pantalla.","Run a simulation on this screen first.");return}
 // Se necesitan los retornos, no solo el resumen.
 var series=[],noms=[];
 BT.strats.forEach(function(s){ if(s.rs&&s.rs.length>=15){series.push(s.rs);noms.push(s.name)} });
 if(series.length<2){
  $("spa-st").textContent=T("Esta simulación no guarda los retornos por operación, que es lo que necesita la prueba.",
                            "This simulation does not keep per-trade returns, which the test needs.");
  $("spa-rows").innerHTML="<tr><td colspan='5'>"+emp("—",T("Vuelve a ejecutar la simulación para que guarde los retornos.","Re-run the simulation so it stores returns."))+"</td></tr>";
  return}
 /* Referencia: la estrategia pasiva. Sin ella no hay contra que comparar. */
 var iRef=-1;
 for(var i=0;i<noms.length;i++)if(/referencia|siempre|comprar todo|benchmark/i.test(noms[i])){iRef=i;break}
 if(iRef<0){
  $("spa-st").textContent=T("Esta simulación no incluye una estrategia de referencia pasiva, así que no hay contra qué comparar.",
                            "This simulation has no passive benchmark to compare against.");
  return}
 $("spa-st").textContent=T("Remuestreando por bloques…","Block-resampling…");
 setTimeout(function(){
  // Bloque medio de 5 observaciones: p = 1/5.
  var r=spaTest(series,2000,0.2,iRef);
  var primera=true;
  $("spa-rows").innerHTML=series.map(function(x,i){
   if(i===iRef)return "<tr><td>"+esc(noms[i])+" <span class='t2'>"+T("referencia","benchmark")+"</span></td>"+
    "<td class='"+(mean(x)>=0?"up":"dn")+"'>"+(mean(x)>=0?"+":"")+(mean(x)*100).toFixed(2)+"%</td>"+
    "<td class='dim'>—</td><td class='dim'>—</td><td class='dim'>"+T("es el listón, no compite","this is the bar")+"</td></tr>";
   var exceso=mean(x)-r.mRef;
   var pi=r.pIndiv[i];
   var sig=(r.pSPA<0.05&&pi<0.05)?["bate a la referencia","t3"]
          :(pi<0.05?["parece mejor, pero no sobrevive a haber probado varias","t2"]
                   :["no bate a la referencia","t4"]);
   var fila="<tr><td>"+esc(noms[i])+"</td>"+
    "<td class='"+(exceso>=0?"up":"dn")+"'>"+(exceso>=0?"+":"")+(exceso*100).toFixed(2)+"%"+
     "<div class='dsc'>"+T("sobre la referencia","over benchmark")+"</div></td>"+
    "<td>"+pi.toFixed(3)+"</td>"+
    "<td><b>"+(primera?r.pSPA.toFixed(3):"—")+"</b></td>"+
    "<td><span class='"+sig[1]+"'>"+sig[0]+"</span></td></tr>";
   primera=false; return fila}).join("");
  $("spa-st").textContent=T("2.000 remuestreos por bloques, contra «"+noms[iRef]+"» · p corregido = "+r.pSPA.toFixed(3)+
    (r.pSPA<0.05?": alguna estrategia bate de verdad a la referencia."
                : ": ninguna bate a la referencia una vez descontado que probaste varias."),
    "2000 block resamples vs benchmark · corrected p = "+r.pSPA.toFixed(3));
 },30);
}
(function(){ $("ap-load").onclick=apCargar; $("spa-run").onclick=spaEjecutar; })();


/* ---------- Radio de robustez de Wasserstein ----------
   epsilon* = cuanto tiene que desplazarse la distribucion de resultados, en
   media y en las unidades del propio resultado, para que la ventaja llegue a
   cero. Compararlo con una escala conocida -el coste de operar- dice si el
   hielo es grueso o fino, y no depende del tamano de muestra como un valor p. */
function wassRadio(datos, escala){
 if(!datos||datos.length<8)return null;
 var mu=mean(datos), s=sd(datos), n=datos.length;
 /* Objetivo lineal (la media): la constante de Lipschitz vale 1, asi que el
    radio critico es directamente la media. Se acompana del error tipico para
    poder decir tambien cuanto de ese radio es simple incertidumbre muestral. */
 var eps=mu;
 var err=n>1?s/Math.sqrt(n):0;
 return {
  eps:eps, media:mu, err:err, n:n,
  /* Radio en unidades de la escala de referencia: cuantas veces el coste de
     operar tendria que equivocarse el mundo para tumbar esto. */
  veces: (escala&&escala>0)?eps/escala:null,
  /* Radio descontando la incertidumbre muestral: el suelo honesto. */
  epsSeguro: eps-1.645*err
 };
}
function wassTxt(r, escala, nombreEscala){
 if(!r)return T("sin datos suficientes","not enough data");
 if(r.eps<=0)return T("no hay ventaja que proteger: la media ya es negativa","no edge to protect: the mean is already negative");
 var v=r.veces;
 if(v===null)return T("aguanta un desplazamiento de "+(r.eps*100).toFixed(2)+" puntos",
                      "withstands a shift of "+(r.eps*100).toFixed(2)+" points");
 var lect = v<1 ? T("hielo finísimo: menos de un "+(nombreEscala||"coste")+" de margen","razor thin")
          : v<3 ? T("hielo fino: "+v.toFixed(1)+" veces el "+(nombreEscala||"coste"),"thin")
          : v<10 ? T("aguanta: "+v.toFixed(1)+" veces el "+(nombreEscala||"coste"),"holds")
          : T("muy sólido: "+v.toFixed(0)+" veces el "+(nombreEscala||"coste"),"very solid");
 return lect;
}

/* Distancia de Wasserstein-1 entre dos muestras en una dimension: la media de
   la diferencia absoluta entre los valores ordenados. Ocho lineas, y sirve para
   comparar la distribucion de probabilidades anunciadas con la realizada, que
   es un complemento distribucional al Brier. */
function wass1(a,b){
 if(!a.length||!b.length)return null;
 var x=a.slice().sort(function(p,q){return p-q});
 var y=b.slice().sort(function(p,q){return p-q});
 var N=Math.max(x.length,y.length), t=0;
 for(var i=0;i<N;i++){
  var u=(i+0.5)/N;
  t+=Math.abs(x[Math.min(x.length-1,Math.floor(u*x.length))] -
              y[Math.min(y.length-1,Math.floor(u*y.length))]);
 }
 return t/N;
}


/* ===================== MODO EN VIVO ===================== */
var VIVO=false, VIVO_INT=null, VIVO_TS=null, VIVO_REL=null, PM_ANT={};

/* Guarda el precio anterior de cada mercado para poder encender lo que cambie. */
function vivoRecordar(){
 PM_ANT={};
 for(var i=0;i<PM.length;i++)PM_ANT[PM[i].q]=PM[i].price;
}
/* Enciende un instante las celdas cuyo mercado se ha movido. Se busca por el
   titulo porque la lista ligera de Polymarket no trae identificador. */
function vivoDestacar(){
 var movidos={};
 for(var i=0;i<PM.length;i++){
  var a=PM_ANT[PM[i].q];
  if(a!==undefined&&Math.abs(PM[i].price-a)>1e-9)movidos[PM[i].q]=PM[i].price>a?"sube":"baja";
 }
 var nMov=0;
 [].forEach.call(document.querySelectorAll("#p-rows tr, #d-mov tr, #d-heat .hc"),function(el){
  var t=(el.getAttribute("data-q")||el.getAttribute("title")||el.textContent||"");
  for(var q in movidos){
   if(t.indexOf(q.slice(0,28))>=0){
    var c=movidos[q];
    el.classList.remove("sube","baja");
    void el.offsetWidth;            // reinicia la animacion
    el.classList.add(c); nMov++;
    break;
   }
  }
 });
 return nMov;
}

function vivoTic(){
 if(!VIVO)return;
 vivoRecordar();
 var pt=document.querySelector("#vivo .pt");
 if(pt)pt.style.background="var(--am)";
 loadPM();
 // loadPM es asincrono; se destaca cuando ya ha repintado.
 setTimeout(function(){
  VIVO_TS=Date.now();
  var nm=vivoDestacar();
  if(pt)pt.style.background="";
  $("vivo-e").textContent=nm?T(nm+" SE MUEVEN",nm+" MOVING"):T("EN VIVO","LIVE");
 },1400);
}

function vivoActualizarReloj(){
 if(!VIVO_TS){$("vivo-t").textContent="";return}
 var s=Math.round((Date.now()-VIVO_TS)/1000);
 $("vivo-t").textContent=s<60?("· "+s+"s"):("· "+Math.round(s/60)+"m");
}

function vivoAplicar(){
 var seg=+$("vivo-n").value;
 if(VIVO_INT){clearInterval(VIVO_INT);VIVO_INT=null}
 VIVO=seg>0;
 $("vivo").classList.toggle("on",VIVO);
 $("vivo-e").textContent=VIVO?T("EN VIVO","LIVE"):T("EN VIVO","LIVE");
 try{localStorage.setItem("mor_vivo",String(seg))}catch(e){}
 if(VIVO){
  VIVO_INT=setInterval(vivoTic,seg*1000);
  vivoTic();
 } else { VIVO_TS=null; vivoActualizarReloj() }
}

(function(){
 var g=null; try{g=localStorage.getItem("mor_vivo")}catch(e){}
 if(g!==null)$("vivo-n").value=g;
 $("vivo-n").onchange=vivoAplicar;
 $("vivo").onclick=function(){
  // Pulsar la caja alterna entre apagado y el ultimo intervalo elegido.
  if(VIVO){$("vivo-n").value="0"}
  else if($("vivo-n").value==="0"){$("vivo-n").value="30"}
  vivoAplicar();
 };
 if(!VIVO_REL)VIVO_REL=setInterval(vivoActualizarReloj,1000);
 /* Cuando la pestana no se ve, no tiene sentido gastar peticiones. */
 document.addEventListener("visibilitychange",function(){
  if(document.hidden){ if(VIVO_INT){clearInterval(VIVO_INT);VIVO_INT=null} }
  else if(VIVO&&!VIVO_INT){ VIVO_INT=setInterval(vivoTic,(+$("vivo-n").value||30)*1000); vivoTic() }
 });
 if(g&&+g>0)setTimeout(vivoAplicar,3000);
})();


/* ===================== COHERENCIA DE DE FINETTI ===================== */
var CO=null, COLOAD=false;
function coBuscar(){
 if(COLOAD)return; COLOAD=true;
 $("co-st").textContent=T("Enumerando mundos posibles…","Enumerating possible worlds…");
 api("/api/coherencia?ia="+($("co-ia").checked?"1":"0"),{cache:"no-store"})
  .then(function(r){return r.json()})
  .then(function(j){ if(j.error)throw new Error(j.error); CO=j; coPintar() })
  .catch(function(e){ $("co-st").textContent="Error: "+(e.message||e) })
  .then(function(){ COLOAD=false });
}
function coPintar(){
 if(!CO)return;
 var j=CO, inc=j.incoherencias||[], arb=j.hallazgos||[];
 var cobrables=inc.filter(function(x){return x.cobrable!==null&&x.cobrable>0}).length;
 $("co1").textContent=(j.implicaciones||0)+(j.exclusiones?"+"+j.exclusiones:"");
 $("co1s").textContent=T(j.implicacionesFecha+" por fecha (seguras) · "+(j.implicaciones-j.implicacionesFecha)+" del modelo",
                         j.implicacionesFecha+" from dates (safe)");
 $("co2").textContent=(j.mundosExaminados||0).toLocaleString("es-ES");
 $("co2s").textContent=T(j.componentesAnalizadas+" grupos de mercados ligados entre sí","linked market groups");
 $("co3").textContent=inc.length;
 $("co4").textContent=arb.length+(cobrables?"+"+cobrables:"");

 $("co-arb").innerHTML=arb.length?arb.map(function(h){
  return "<tr><td class='up'><b>+"+(h.porUnidad*100).toFixed(2)+"%</b></td>"+
   "<td>"+h.nMundos+"<div class='dsc'>"+h.nMercados+" mercados</div></td>"+
   "<td>"+(h.soloFechas?"<span class='t3'>"+T("solo fechas","dates only")+"</span>"
                       :"<span class='t2'>"+T("el modelo","the model")+"</span>")+"</td>"+
   "<td>"+h.patas.map(function(p){
    return "<div><span class='"+(p.lado==="COMPRAR"?"t3":"t4")+"'>"+p.lado+"</span> "+
     (Math.abs(p.peso)*100).toFixed(0)+"% "+T("a ","at ")+(p.precio*100).toFixed(1)+"% · "+esc(p.q.slice(0,58))+"</div>"}).join("")+
   "</td></tr>"}).join("")
  :"<tr><td colspan='4'>"+emp("\\u2705",T("Ninguna cartera con pago garantizado ahora mismo. Es lo normal en mercados líquidos: cuando aparece una, dura minutos.",
    "No guaranteed-payoff portfolio right now. Normal in liquid markets: when one appears it lasts minutes."))+"</td></tr>";

 $("co-inc").innerHTML=inc.length?inc.map(function(x){
  var cob=x.cobrable!==null&&x.cobrable>0;
  return "<tr><td title='"+esc(x.implica)+"'>"+esc(x.implica.slice(0,52))+
    "<div class='dsc'>"+(x.pA*100).toFixed(1)+"%</div></td>"+
   "<td title='"+esc(x.implicado)+"'>"+esc(x.implicado.slice(0,52))+
    "<div class='dsc'>"+(x.pB*100).toFixed(1)+"%</div></td>"+
   "<td class='dn'>"+(x.exceso*100).toFixed(2)+"</td>"+
   "<td>"+(x.origen==="fecha"?"<span class='t3'>"+T("fecha","date")+"</span>":"<span class='t2'>"+T("modelo","model")+"</span>")+"</td>"+
   "<td class='"+(cob?"up":"dim")+"'>"+esc(x.lectura)+"</td></tr>"}).join("")
  :"<tr><td colspan='5'>"+emp("\\u2705",T("Ningún precio se contradice con otro ahora mismo.","No price contradicts another right now."))+"</td></tr>";

 $("co-cnt").textContent="("+inc.length+" / "+arb.length+")";
 $("co-st").textContent=T(j.mercados+" mercados · "+j.componentes+" grupos ligados · "+new Date(j.ts).toLocaleTimeString(),
                          j.mercados+" markets · "+new Date(j.ts).toLocaleTimeString());
}
(function(){ $("co-run").onclick=coBuscar; })();

/* ===================== VEREDICTO ===================== */
/* Movimiento tipico de una sesion: media del cambio absoluto de cierre a cierre
   en 14 sesiones. Es el ATR sin maximos ni minimos, que la API no da. */
function atrProxy(c,nn){nn=nn||14;var t=0,k=0;for(var i=Math.max(1,c.length-nn);i<c.length;i++){t+=Math.abs(c[i]-c[i-1]);k++}return k?t/k:0}
function nivelesDe(c,dir){var u=c[c.length-1],a=atrProxy(c,14);return {ent:u,stop:u-dir*2*a,obj:u+dir*4*a,atr:a}}
/* Sesiones esperadas hasta recorrer una distancia relativa d con volatilidad
   diaria sigma. Difusion pura: sin deriva, el tiempo de primer paso escala con
   el cuadrado de la distancia en unidades de sigma. */
function sesionesHasta(c,d){
 /* La desviacion tipica normal se contamina con un solo dato malo: Next Vision
    trae un salto de +5385% -reparto o ajuste mal aplicado por la fuente- y con
    el la sigma se disparaba tanto que el objetivo parecia alcanzable en UNA
    sesion. Se usa la desviacion absoluta mediana escalada, que ignora los
    valores extremos, y sobre 60 sesiones, que es el plazo del que salen tambien
    los niveles. */
 var r=fxRets(c.slice(-61)); if(r.length<20||!(d>0))return null;
 var ab=r.map(Math.abs).sort(function(a,b){return a-b});
 var sg=1.4826*ab[Math.floor(ab.length/2)];
 if(!(sg>0))return null;
 var k=d/sg;
 return Math.max(2,Math.min(250,Math.round(k*k)));
}
function plazoTxt(dias){
 if(dias===null)return "—";
 var u=function(v,sing,plur,en){return v+" "+T(v===1?sing:plur,en)};
 if(dias<=9)return u(dias,"sesión","sesiones","sessions");
 if(dias<=42){var w=Math.round(dias/5);return u(w,"semana","semanas","weeks")}
 var m=Math.round(dias/21);return u(m,"mes","meses","months");
}
function kellyDe(c){var r=fxRets(c.slice(-121)),mu=mean(r),va=Math.pow(sd(r),2);return va>0?mu/va:0}
function cuanto(k){return Math.min(0.10,Math.max(0.01,Math.max(0,k)*0.5))}
function fP(v,ref){return v.toFixed(ref<10?4:(ref<1000?2:0))}
function posTag(dir){return dir>0?"<span class='t3'>"+T("ALCISTA","LONG")+"</span>":"<span class='t4'>"+T("BAJISTA","SHORT")+"</span>"}

/* Aviso cuando la muestra propia contradice la lambda de la literatura. */
function avisoLambda(){
 var el=$("ver-aviso"); if(!el)return;
 if(!BT||BT.fx||BT.lam===null||!isFinite(BT.lam)){el.style.display="none";return}
 var lit=0.183, choca=(BT.lam*lit)<0;
 el.style.display="";
 el.innerHTML= choca
  ? "<b>"+T("Aviso: tu propia muestra contradice el valor justo.","Warning: your own sample contradicts the fair value.")+"</b> "+
    T("El valor justo de las apuestas corrige el sesgo favorito-longshot con λ = +0,183, medido sobre 291.000 contratos ya resueltos. Pero los "+BT.S.length+" mercados resueltos que ha medido este terminal dan λ = "+BT.lam.toFixed(3)+", con el signo contrario: aquí los favoritos salen caros y los improbables baratos, al revés. No se le da la vuelta al signo porque con "+BT.S.length+" casos y ninguna estrategia significativa esa cifra es demasiado ruidosa para fiarse. Trátalo como una señal débil, no como un precio de referencia.",
      "The fair value corrects favourite-longshot bias with λ = +0.183, measured on 291,000 resolved contracts. But the "+BT.S.length+" resolved markets this terminal measured give λ = "+BT.lam.toFixed(3)+", the opposite sign. The sign is not flipped because with "+BT.S.length+" cases and no significant strategy that figure is too noisy to trust. Treat this as a weak signal, not a reference price.")
  : "<b>"+T("Tu muestra concuerda con el valor justo.","Your sample agrees with the fair value.")+"</b> "+
    T("λ de la literatura +0,183; λ medida aquí sobre "+BT.S.length+" mercados resueltos: "+BT.lam.toFixed(3)+".",
      "Literature λ +0.183; λ measured here on "+BT.S.length+" resolved markets: "+BT.lam.toFixed(3)+".");
}
function renderVer(){
 var al=[],ba=[];
 QUANT.forEach(function(q){
  if(!q.c||q.c.length<60)return;
  var dir=0;
  if(q.z>0.5&&q.s50>q.s200&&q.dd>-0.4)dir=1; else if(q.z<-0.5&&q.s50<q.s200)dir=-1;
  if(!dir)return;
  var nv=nivelesDe(q.c,dir),k=dir*kellyDe(q.c);
  /* Coste de ida y vuelta: dos veces el medio spread efectivo. Lo que sobra tras
     pagarlo es lo unico que se puede llamar ganancia. */
  var spr=(PX[q.s.tk]&&typeof PX[q.s.tk].spread==="number")?PX[q.s.tk].spread:null;
  var bruto=Math.abs(nv.obj-nv.ent)/nv.ent;
  var neto=spr===null?null:bruto-spr;
  /* Plazo hasta el objetivo, y la mitad de camino hasta el stop -que esta a la
     mitad de distancia, asi que suele saltar cuatro veces antes-. */
  var dObj=sesionesHasta(q.c,bruto), dStop=sesionesHasta(q.c,Math.abs(nv.stop-nv.ent)/nv.ent);
  var inval=dir>0?T("si la media de 50 cae por debajo de la de 200","if the 50-day average drops below the 200-day")
                 :T("si la media de 50 sube por encima de la de 200","if the 50-day average rises above the 200-day");
  var por=dir>0?T("momentum z "+q.z.toFixed(2)+", tendencia alcista, mes "+(q.r1>=0?"+":"")+(q.r1*100).toFixed(1)+"%","momentum z "+q.z.toFixed(2)+", uptrend, month "+(q.r1>=0?"+":"")+(q.r1*100).toFixed(1)+"%")
                 :T("momentum z "+q.z.toFixed(2)+", tendencia bajista, mes "+(q.r1*100).toFixed(1)+"%","momentum z "+q.z.toFixed(2)+", downtrend, month "+(q.r1*100).toFixed(1)+"%");
  (dir>0?al:ba).push({tk:q.s.tk,n:q.s.name,dir:dir,nv:nv,k:k,z:q.z,por:por,spr:spr,bruto:bruto,neto:neto,dObj:dObj,dStop:dStop,inval:inval});
 });
 al.sort(function(a,b){return b.z-a.z});ba.sort(function(a,b){return a.z-b.z});
 var filaE=function(x){return "<tr data-tk='"+esc(x.tk)+"' style='cursor:pointer'><td><b>"+esc(x.n)+"</b><div class='dsc'>"+esc(x.tk)+"</div></td>"+
  "<td>"+posTag(x.dir)+"</td><td>"+fP(x.nv.ent,x.nv.ent)+"</td><td class='dn'>"+fP(x.nv.stop,x.nv.ent)+"</td><td class='up'>"+fP(x.nv.obj,x.nv.ent)+"</td>"+
  "<td>"+(cuanto(x.k)*100).toFixed(0)+"%</td>"+
  "<td>"+(x.spr===null?"<span class='dim'>—</span>":
    "<span class='"+(x.neto>0?"up":"dn")+"'>"+(x.neto>0?"+":"")+(x.neto*100).toFixed(1)+"%</span>"+
    "<div class='dsc'>"+T("bruto ","gross ")+(x.bruto*100).toFixed(1)+"% − "+T("coste ","cost ")+(x.spr*100).toFixed(2)+"%</div>")+"</td>"+
  "<td>"+plazoTxt(x.dObj)+
   "<div class='dsc'>"+T("revisa cada mes · cierra ","review monthly · close ")+inv(x)+"</div></td>"+
  "<td class='dim'>"+x.por+"</td></tr>"};
 var inv=function(x){return x.inval};
 var tE=al.concat(ba);
 $("ver-emp").innerHTML=tE.length?tE.map(filaE).join("")
  :"<tr><td colspan='9'>"+(QUANT.length?emp("🤷",T("Ninguna empresa da señal clara ahora mismo.","No company gives a clear signal right now."))
   :emp("⏳",T("Cargando precios de las empresas…","Loading company prices…")))+"</td></tr>";
 $("ver-emp-cnt").textContent=tE.length?"("+al.length+" ↑ / "+ba.length+" ↓)":"";

 // --- apuestas ---
 var ap=[];
 if(BQ&&BQ.markets)BQ.markets.forEach(function(m){
  if(typeof m.edge!=="number"||typeof m.spreadRel!=="number"||typeof m.fair!=="number")return;
  if(m.spreadRel>0.15||m.p<0.03||m.p>0.97)return;
  var um=Math.max(0.03,m.spreadRel);
  if(m.edge<-um){
   var ent=(typeof m.ask==="number"&&m.ask>0&&m.ask<1)?m.ask:m.p;
   ap.push({id:m.id,q:m.q,ev:m.ev,lado:"SÍ",ent:ent,obj:m.fair,stop:Math.max(0.01,ent-0.08),k:(m.fair-ent)/(1-ent),e:Math.abs(m.edge),dias:m.days});
  } else if(m.edge>um){
   var pNo=(typeof m.bid==="number"&&m.bid>0&&m.bid<1)?1-m.bid:1-m.p,fNo=1-m.fair;
   ap.push({id:m.id,q:m.q,ev:m.ev,lado:"NO",ent:pNo,obj:fNo,stop:Math.max(0.01,pNo-0.08),k:(fNo-pNo)/(1-pNo),e:Math.abs(m.edge),dias:m.days});
  }
 });
 ap.sort(function(a,b){return b.e-a.e});ap=ap.slice(0,14);
 $("ver-pm").innerHTML=ap.length?ap.map(function(x){
  return "<tr data-mid='"+esc(String(x.id))+"' style='cursor:pointer'><td title='"+esc(x.q)+"'>"+esc(x.q.slice(0,60))+(x.ev&&x.ev!==x.q?"<div class='dsc'>"+esc(x.ev.slice(0,50))+"</div>":"")+"</td>"+
   "<td><span class='"+(x.lado==="SÍ"?"t3":"t4")+"'>"+T("COMPRAR ","BUY ")+x.lado+"</span></td>"+
   "<td>"+(x.ent*100).toFixed(1)+"%</td><td class='dn'>"+(x.stop*100).toFixed(1)+"%</td><td class='up'>"+(x.obj*100).toFixed(1)+"%</td>"+
   "<td>"+(Math.min(0.05,Math.max(0.005,x.k*0.25))*100).toFixed(1)+"%</td>"+
   "<td>"+(typeof x.dias==="number"?Math.round(x.dias)+T(" días","d"):"—")+
    "<div class='dsc'>"+T("hasta que resuelva · o antes si llega al justo","until it resolves · or sooner if it reaches fair")+"</div></td>"+
   "<td class='dim'>"+T("precio a "+(x.e*100).toFixed(1)+" puntos de lo justo","price "+(x.e*100).toFixed(1)+" points from fair")+"</td></tr>"}).join("")
  :"<tr><td colspan='8'>"+(BQ?emp("🤷",T("Ningún mercado con precio lejos de lo justo y spread razonable.","No market far from fair with a reasonable spread.")):emp("⏳",T("Cargando el cerebro…","Loading the engine…")))+"</td></tr>";
 $("ver-pm-cnt").textContent=ap.length?"("+ap.length+")":"";
 avisoLambda();

 /* --- divisas: riesgo, no direccion ---
    No se proponen posiciones porque las tres señales direccionales de divisas
    -momentum, reversion y cointegracion- se auditaron y ninguna replica en
    datos oficiales del BCE. Lo que se muestra es lo que si aguanta: si el par
    es un paseo aleatorio, cuanto riesgo tiene de verdad, y cuanto de ese riesgo
    es el factor comun. */
 var fx=[];
 FXQ.forEach(function(x){
  var vr=(typeof fxVarianceRatio==="function")?fxVarianceRatio(x.c,10):null;
  var rg=(typeof fxRiesgo==="function")?fxRiesgo(x.c,0.99):null;
  var co=(typeof fxCono==="function")?fxCono(x.c,[21]):[];
  fx.push({n:x.n,vr:vr,rg:rg,co:co.length?co[0]:null,carga:x.cargaFactor});
 });
 fx.sort(function(a,b){return (b.rg?Math.abs(b.rg.varCF):0)-(a.rg?Math.abs(a.rg.varCF):0)});
 $("ver-fx").innerHTML=fx.length?fx.map(function(x){
  var al=x.vr?(Math.abs(x.vr.z)<1.96?[T("sí","yes"),"dim"]:(x.vr.VR>1?[T("no, sigue","no, trends"),"t3"]:[T("no, vuelve","no, reverts"),"t5"])):["—","dim"];
  var peor=x.rg?Math.min(x.rg.varHist,x.rg.varCF):null;
  return "<tr data-fx='"+esc(x.n)+"' style='cursor:pointer'><td><b>"+esc(x.n)+"</b></td>"+
   "<td><span class='"+al[1]+"'>"+al[0]+"</span></td>"+
   "<td>"+(x.co?(x.co.hoy*100).toFixed(1)+"% <span class='dsc'>pct "+(x.co.pct*100).toFixed(0)+"</span>":"—")+"</td>"+
   "<td class='dn'>"+(peor===null?"—":(peor*100).toFixed(2)+"%")+"</td>"+
   "<td>"+(typeof x.carga==="number"?(x.carga*x.carga*100).toFixed(0)+"%":"—")+"</td></tr>"}).join("")
  :"<tr><td colspan='5'>"+emp("⏳",T("Cargando divisas…","Loading currencies…"))+"</td></tr>";
 $("ver-fx-cnt").textContent=fx.length?"("+fx.length+")":"";

 // --- arbitrajes ---
 var ar=(BQ&&BQ.groups?BQ.groups:[]).filter(function(g){return g.net>0}).sort(function(a,b){return b.net-a.net}).slice(0,10);
 $("ver-arb").innerHTML=ar.length?ar.map(function(g){
  var vender=/vend|sell/i.test(g.side||"");
  return "<tr data-ev='"+esc(g.ev)+"' style='cursor:pointer'><td title='"+esc(g.ev)+"'>"+esc(String(g.ev).slice(0,54))+"</td>"+
   "<td><span class='"+(vender?"t4":"t3")+"'>"+(vender?T("VENDER TODAS","SELL ALL"):T("COMPRAR TODAS","BUY ALL"))+"</span></td>"+
   "<td class='up'>+"+(g.net*100).toFixed(2)+"%</td></tr>"}).join("")
  :"<tr><td colspan='3'>"+(BQ?emp("✅",T("Hoy las cuentas cuadran.","Everything adds up today.")):emp("⏳",T("Cargando…","Loading…")))+"</td></tr>";
 $("ver-arb-cnt").textContent=ar.length?"("+ar.length+")":"";

 $("ve1").textContent=al.length+fx.filter(function(x){return x.dir>0}).length;
 $("ve2").textContent=ba.length+fx.filter(function(x){return x.dir<0}).length;
 $("ve3").textContent=ap.length;$("ve4").textContent=ar.length;
 var falta=[];if(!QUANT.length)falta.push(T("precios","prices"));if(!BQ)falta.push(T("cerebro","engine"));if(!FXQ.length)falta.push(T("divisas","currencies"));
 $("ver-st").textContent=falta.length?T("Cargando: ","Loading: ")+falta.join(", ")+"…":T("Todo cargado. Lectura de hace un instante.","All loaded. Read from a moment ago.");
}
(function(){ $("ver-calc").onclick=function(){loadPx();loadBrain(true);fxLoad();renderVer()}; })();


/* ---------- Algebra minima: correlacion y componentes principales ---------- */
function fxMatrizCorr(series){
 var k=series.length, L=Math.min.apply(null,series.map(function(x){return x.length}));
 var R=series.map(function(c){var r=[];for(var i=c.length-L+1;i<c.length;i++)r.push(Math.log(c[i]/c[i-1]));return r});
 var mu=R.map(mean), sg=R.map(sd);
 var C=[];
 for(var i=0;i<k;i++){C.push([]);
  for(var j=0;j<k;j++){
   var t=0,nn=Math.min(R[i].length,R[j].length);
   for(var q=0;q<nn;q++)t+=(R[i][q]-mu[i])*(R[j][q]-mu[j]);
   C[i].push((sg[i]>0&&sg[j]>0)?t/((nn-1)*sg[i]*sg[j]):0);
  }}
 return {C:C,R:R};
}
/* Componente principal por iteracion de potencia: no hace falta invertir nada.
   Se deflacta para sacar el segundo. */
function fxPCA(C,cuantos){
 var k=C.length, comps=[], M=C.map(function(f){return f.slice()});
 for(var c=0;c<(cuantos||2);c++){
  var v=[]; for(var i=0;i<k;i++)v.push(1/Math.sqrt(k));
  var lam=0;
  for(var it=0;it<300;it++){
   var w=[];
   for(var i=0;i<k;i++){var t=0;for(var j=0;j<k;j++)t+=M[i][j]*v[j];w.push(t)}
   var nrm=Math.sqrt(w.reduce(function(a,b){return a+b*b},0));
   if(!(nrm>0))break;
   for(var i=0;i<k;i++)w[i]/=nrm;
   var dif=0;for(var i=0;i<k;i++)dif+=Math.abs(w[i]-v[i]);
   v=w; lam=nrm;
   if(dif<1e-10)break;
  }
  comps.push({lam:lam,v:v.slice()});
  // Deflacion: se resta lo que explica este componente.
  for(var i=0;i<k;i++)for(var j=0;j<k;j++)M[i][j]-=lam*v[i]*v[j];
 }
 return comps;
}

/* ---------- Razon de varianzas de Lo y MacKinlay ----------
   VR(q) = Var(retorno a q dias) / (q * Var(retorno a 1 dia)). Bajo paseo
   aleatorio vale 1. El estadistico z usa la varianza robusta a
   heterocedasticidad, que es la version que hay que usar en mercados. */
function fxVarianceRatio(c,q){
 var r=[]; for(var i=1;i<c.length;i++)r.push(Math.log(c[i]/c[i-1]));
 var T=r.length; if(T<q*4)return null;
 var mu=mean(r);
 var v1=0; for(var i=0;i<T;i++)v1+=(r[i]-mu)*(r[i]-mu); v1/=(T-1);
 if(!(v1>0))return null;
 // Varianza de los retornos solapados a q dias, con la correccion de sesgo.
 var vq=0,m=0;
 for(var i=q-1;i<T;i++){
  var sum=0; for(var j=0;j<q;j++)sum+=r[i-j];
  var d=sum-q*mu; vq+=d*d; m++;
 }
 vq/=(m*q)*(1-q/T);
 var VR=vq/v1;
 // Error tipico robusto: suma ponderada de las autocovarianzas al cuadrado.
 var theta=0;
 for(var j=1;j<q;j++){
  var num=0,den=0;
  for(var i=j;i<T;i++)num+=Math.pow(r[i]-mu,2)*Math.pow(r[i-j]-mu,2);
  for(var i=0;i<T;i++)den+=Math.pow(r[i]-mu,2);
  den=den*den/T;
  var dj=den>0?num/den:0;
  theta+=Math.pow(2*(q-j)/q,2)*dj;
 }
 var z=theta>0?(VR-1)/Math.sqrt(theta/T):0;
 return {VR:VR,z:z,q:q};
}

/* ---------- Valor en riesgo y pérdida esperada ----------
   Historico: el percentil de las perdidas observadas. Cornish-Fisher: ajusta el
   cuantil normal por asimetria y curtosis, que en divisas son grandes y hacen
   que el VaR normal se quede corto justo cuando importa. */
function fxRiesgo(c,conf){
 var r=[]; for(var i=1;i<c.length;i++)r.push(Math.log(c[i]/c[i-1]));
 if(r.length<40)return null;
 var mu=mean(r), sg=sd(r);
 var ord=r.slice().sort(function(a,b){return a-b});
 var k=Math.max(0,Math.floor((1-conf)*ord.length));
 var varHist=ord[k];
 var cola=ord.slice(0,Math.max(1,k+1));
 var es=mean(cola);
 // Asimetria y curtosis muestrales.
 var m3=0,m4=0;
 for(var i=0;i<r.length;i++){var d=(r[i]-mu)/sg;m3+=d*d*d;m4+=d*d*d*d}
 m3/=r.length; m4=m4/r.length-3;
 var z=nPpfCliente(1-conf);
 var zcf=z+(z*z-1)*m3/6+(z*z*z-3*z)*m4/24-(2*z*z*z-5*z)*m3*m3/36;
 return {varHist:varHist,es:es,varCF:mu+zcf*sg,asim:m3,curt:m4,sigma:sg};
}
/* Inversa de la normal, aproximacion de Acklam. */
function nPpfCliente(p){
 if(p<=0)return -8; if(p>=1)return 8;
 var a=[-39.69683028665376,220.9460984245205,-275.9285104469687,138.3577518672690,-30.66479806614716,2.506628277459239];
 var b=[-54.47609879822406,161.5858368580409,-155.6989798598866,66.80131188771972,-13.28068155288572];
 var c=[-0.007784894002430293,-0.3223964580411365,-2.400758277161838,-2.549732539343734,4.374664141464968,2.938163982698783];
 var d=[0.007784695709041462,0.3224671290700398,2.445134137142996,3.754408661907416];
 var pl=0.02425,q,r2;
 if(p<pl){q=Math.sqrt(-2*Math.log(p));
  return (((((c[0]*q+c[1])*q+c[2])*q+c[3])*q+c[4])*q+c[5])/((((d[0]*q+d[1])*q+d[2])*q+d[3])*q+1)}
 if(p>1-pl){q=Math.sqrt(-2*Math.log(1-p));
  return -(((((c[0]*q+c[1])*q+c[2])*q+c[3])*q+c[4])*q+c[5])/((((d[0]*q+d[1])*q+d[2])*q+d[3])*q+1)}
 q=p-0.5;r2=q*q;
 return (((((a[0]*r2+a[1])*r2+a[2])*r2+a[3])*r2+a[4])*r2+a[5])*q/(((((b[0]*r2+b[1])*r2+b[2])*r2+b[3])*r2+b[4])*r2+1);
}

/* ---------- Cono de volatilidad ---------- */
function fxCono(c,plazos){
 var r=[]; for(var i=1;i<c.length;i++)r.push(Math.log(c[i]/c[i-1]));
 return (plazos||[5,10,21,63]).map(function(w){
  if(r.length<w*3)return null;
  var vs=[];
  for(var i=w;i<=r.length;i++)vs.push(sd(r.slice(i-w,i))*Math.sqrt(252));
  var ord=vs.slice().sort(function(a,b){return a-b});
  var hoy=vs[vs.length-1];
  var pct=0; for(var i=0;i<ord.length;i++)if(ord[i]<=hoy)pct++;
  var q=function(f){return ord[Math.min(ord.length-1,Math.floor(f*ord.length))]};
  return {w:w,hoy:hoy,pct:pct/ord.length,min:ord[0],p25:q(0.25),med:q(0.5),p75:q(0.75),max:ord[ord.length-1]};
 }).filter(Boolean);
}

/* ---------- Render ---------- */
function fxQuantRender(){
 if(!FXQ.length){$("fq-st").textContent=T("Carga antes las divisas.","Load currencies first.");return}
 var noms=FXQ.map(function(x){return x.n}), series=FXQ.map(function(x){return x.c});

 // --- 1. factor dólar ---
 var M=fxMatrizCorr(series), comps=fxPCA(M.C,2);
 var totalVar=M.C.length;              // traza de la correlación = nº de series
 var pc1=comps[0], pc2=comps[1];
 var exp1=pc1.lam/totalVar, exp2=pc2?pc2.lam/totalVar:0;
 // El signo del componente es arbitrario: se fija para que el dólar quede positivo.
 var iUSD=-1; for(var i=0;i<noms.length;i++)if(/dólar|dolar|USD\\/|\\/USD/i.test(noms[i])){iUSD=i;break}
 var signo=(iUSD>=0&&pc1.v[iUSD]<0)?-1:1;
 var cargas=noms.map(function(nm,i){return {n:nm,c:signo*pc1.v[i]}})
   .sort(function(a,b){return Math.abs(b.c)-Math.abs(a.c)});
 $("fq1").textContent=(exp1*100).toFixed(0)+"%";
 $("fq1s").textContent=T("del movimiento de todas las divisas lo explica un solo factor",
                         "of all currency moves explained by one factor");
 /* Si todas las series pesaran igual, cada carga valdria 1/raiz(k). Ese es el
    liston natural, y no un 0,35 inventado que ademas cambiaria de sentido al
    anadir o quitar pares. */
 var uniforme=1/Math.sqrt(noms.length);
 $("fq-pca").innerHTML=cargas.map(function(x){
  var a=Math.abs(x.c), w=Math.min(100,a/uniforme*50);
  /* La carga al cuadrado es la parte de la varianza del factor que se lleva
     este par. El SIGNO no dice independencia: dice si el par cotiza al derecho
     o al reves. USD/CHF baja cuando EUR/USD sube porque el dolar esta en el
     otro lado de la fraccion, no porque sea otro mercado. */
  var lect = a>uniforme*1.25 ? T("muy pegado al factor","strongly on the factor")
           : a>uniforme*0.75 ? T("normal","average")
           : T("va bastante por su cuenta","fairly independent");
  var dir = x.c>=0 ? T("en el mismo sentido","same direction")
                   : T("al revés: el dólar está en el otro lado del par","inverted: the dollar is on the other side");
  return "<tr data-fx='"+esc(x.n)+"' style='cursor:pointer'><td>"+esc(x.n)+"</td>"+
   "<td class='"+(x.c>=0?"up":"dn")+"'>"+(x.c>=0?"+":"")+x.c.toFixed(3)+
    "<div class='dsc'>"+(x.c*x.c*100).toFixed(0)+"% "+T("de su riesgo","of its risk")+"</div></td>"+
   "<td><div class='tr' style='height:6px'><i style='width:"+w.toFixed(0)+"%;background:"+(x.c>=0?"var(--gr)":"var(--rd)")+"'></i></div></td>"+
   "<td class='dim'>"+lect+" · "+dir+"</td></tr>"}).join("");

 // --- 2. razón de varianzas ---
 $("fq-vr").innerHTML=FXQ.map(function(x){
  var v2=fxVarianceRatio(x.c,2), v5=fxVarianceRatio(x.c,5), v10=fxVarianceRatio(x.c,10);
  if(!v10)return "";
  var cel=function(v){ if(!v)return "<td>—</td>";
   var sig=Math.abs(v.z)>1.96;
   return "<td class='"+(sig?(v.VR>1?"up":"dn"):"")+"'>"+v.VR.toFixed(2)+
    "<div class='dsc'>z "+v.z.toFixed(2)+"</div></td>"};
  var lect;
  if(Math.abs(v10.z)<1.96)lect=[T("paseo aleatorio","random walk"),""];
  else if(v10.VR>1)lect=[T("tiende a seguir","trending"),"t3"];
  else lect=[T("tiende a volver","mean-reverting"),"t5"];
  return "<tr data-fx='"+esc(x.n)+"' style='cursor:pointer'><td><b>"+esc(x.n)+"</b></td>"+
   cel(v2)+cel(v5)+cel(v10)+"<td><span class='"+lect[1]+"'>"+lect[0]+"</span></td></tr>"}).join("");

 // --- 3. cono de volatilidad + 4. riesgo ---
 $("fq-riesgo").innerHTML=FXQ.map(function(x){
  var co=fxCono(x.c,[21]), rg=fxRiesgo(x.c,0.99);
  if(!co.length||!rg)return "";
  var c1=co[0];
  var pos=c1.pct<0.2?[T("muy barata","very cheap"),"up"]:(c1.pct>0.8?[T("muy cara","very rich"),"dn"]:[T("normal","normal"),""]);
  return "<tr data-fx='"+esc(x.n)+"' style='cursor:pointer'><td><b>"+esc(x.n)+"</b></td>"+
   "<td>"+(c1.hoy*100).toFixed(1)+"%</td>"+
   "<td class='dim'>"+(c1.min*100).toFixed(1)+"–"+(c1.max*100).toFixed(1)+"%</td>"+
   "<td><span class='"+pos[1]+"'>"+(c1.pct*100).toFixed(0)+"%</span> <span class='dsc'>"+pos[0]+"</span></td>"+
   "<td class='dn'>"+(rg.varHist*100).toFixed(2)+"%</td>"+
   "<td class='dn'>"+(rg.varCF*100).toFixed(2)+"%</td>"+
   "<td class='dn'>"+(rg.es*100).toFixed(2)+"%</td>"+
   "<td class='mates'>"+rg.asim.toFixed(2)+" / "+rg.curt.toFixed(1)+"</td></tr>"}).join("");

 // --- 5. concentración ---
 var val=fxPCA(M.C,Math.min(6,M.C.length)).map(function(c){return c.lam});
 var suma=val.reduce(function(a,b){return a+b},0);
 var props=val.map(function(v){return v/suma});
 // Número efectivo de apuestas independientes: inverso de Herfindahl.
 var hh=props.reduce(function(a,p){return a+p*p},0);
 var efectivas=hh>0?1/hh:0;
 $("fq2").textContent=efectivas.toFixed(1);
 $("fq2s").textContent=T("apuestas independientes de verdad entre "+FXQ.length+" pares",
                         "truly independent bets among "+FXQ.length+" pairs");
 $("fq3").textContent=(exp2*100).toFixed(0)+"%";
 $("fq3s").textContent=T("lo explica el segundo factor (normalmente el riesgo/refugio)",
                         "explained by the second factor (usually risk-on/risk-off)");
 var aleat=FXQ.filter(function(x){var v=fxVarianceRatio(x.c,10);return v&&Math.abs(v.z)<1.96}).length;
 $("fq4").textContent=aleat+"/"+FXQ.length;
 $("fq4s").textContent=T("pares que son paseo aleatorio: ahí no hay patrón que buscar",
                         "pairs that are a random walk: no pattern to find there");
 $("fq-st").textContent=T("Calculado sobre "+series[0].length+" sesiones. Nada de esto predice dirección, y es a propósito.",
                          "Computed over "+series[0].length+" sessions. None of this predicts direction, by design.");
}


/* ===================== GEOMETRÍA DEL SÍMPLEX (AITCHISON) =====================
   El símplex de probabilidades no es euclídeo. Pasar de 1% a 2% es DOBLAR la
   probabilidad; pasar de 50% a 51% no es casi nada. Medido: la distancia
   euclídea da 0,0141 para los DOS casos, y la de Aitchison da 0,497 frente a
   0,028, o sea 17,6 veces más para el que de verdad importa.

   Consecuencia práctica: el ranking de "lo que más se ha movido hoy" estaba
   ciego justo a los movimientos que anteceden a una resolución, que son los de
   las patas baratas.
   Aitchison (1982), JRSS-B 44:139-177.                                        */
function aitCeros(p){
 // Un cero rompe el logaritmo. Se sustituye por el tamano del tick y se
 // renormaliza, que es el reemplazo multiplicativo habitual.
 var t=0.001, q=p.map(function(x){return x>0?x:t});
 var s=q.reduce(function(a,b){return a+b},0);
 return q.map(function(x){return x/s});
}
function aitClr(p){
 var q=aitCeros(p), l=q.map(Math.log), m=mean(l);
 return l.map(function(x){return x-m});
}
/* Sorpresa de un movimiento binario: se trata como la composicion (p, 1-p) y se
   mide la distancia de Aitchison entre el antes y el despues. */
function aitSorpresa(pAntes, pDespues){
 if(!(pAntes>0&&pAntes<1&&pDespues>0&&pDespues<1))return null;
 var a=aitClr([pAntes,1-pAntes]), b=aitClr([pDespues,1-pDespues]);
 var t=0; for(var i=0;i<a.length;i++)t+=(a[i]-b[i])*(a[i]-b[i]);
 return Math.sqrt(t);
}

/* ===================== MATRICES ALEATORIAS =====================
   Con N activos y T dias, los autovalores de la correlacion de datos SIN
   estructura caen dentro de [(1-raiz(q))^2, (1+raiz(q))^2] con q=N/T. Lo que
   sale por encima es estructura real; lo de dentro es ruido de muestreo. Da un
   UMBRAL en vez de un codo mirado a ojo.
   Marchenko y Pastur (1967); Laloux, Cizeau, Bouchaud y Potters (1999).       */
function mpBanda(N,T){
 var q=N/T;
 return {q:q, lo:Math.pow(1-Math.sqrt(q),2), hi:Math.pow(1+Math.sqrt(q),2)};
}
/* Autovalores de una matriz simetrica por rotaciones de Jacobi: estable, sin
   invertir nada y sin dependencias. */
function jacobiVals(A0,iter){
 var N=A0.length, A=A0.map(function(f){return f.slice()});
 for(var it=0;it<(iter||400);it++){
  var p=0,q=1,mx=0;
  for(var i=0;i<N;i++)for(var j=i+1;j<N;j++)if(Math.abs(A[i][j])>mx){mx=Math.abs(A[i][j]);p=i;q=j}
  if(mx<1e-10)break;
  var th=0.5*Math.atan2(2*A[p][q],A[p][p]-A[q][q]), c=Math.cos(th), sn=Math.sin(th);
  for(var k=0;k<N;k++){var akp=A[k][p],akq=A[k][q];A[k][p]=c*akp+sn*akq;A[k][q]=-sn*akp+c*akq}
  for(var k=0;k<N;k++){var apk=A[p][k],aqk=A[q][k];A[p][k]=c*apk+sn*aqk;A[q][k]=-sn*apk+c*aqk}
 }
 var ev=[]; for(var i=0;i<N;i++)ev.push(A[i][i]);
 return ev.sort(function(a,b){return b-a});
}
/* Retornos SEMANALES a proposito. Tel Aviv, Seul, Sao Paulo, Nueva York y
   Estocolmo no cierran a la vez: con retornos diarios las correlaciones entre
   husos horarios salen sesgadas a la baja y aparecen falsos plomo-retraso. Con
   viernes a viernes, todos han cerrado. */
function corrSemanal(series){
 var N=series.length, L=Math.min.apply(null,series.map(function(x){return x.length}));
 var R=series.map(function(c){
  var r=[];
  for(var i=c.length-L+5;i<c.length;i+=5)r.push(Math.log(c[i]/c[i-5]));
  return r});
 var mu=R.map(mean), sg=R.map(sd), C=[];
 for(var i=0;i<N;i++){C.push([]);
  for(var j=0;j<N;j++){
   var t=0, nn=Math.min(R[i].length,R[j].length);
   for(var k=0;k<nn;k++)t+=(R[i][k]-mu[i])*(R[j][k]-mu[j]);
   C[i].push((sg[i]>0&&sg[j]>0)?t/((nn-1)*sg[i]*sg[j]):0);
  }}
 return {C:C, T:R[0].length, R:R};
}

/* ===================== DEPENDENCIA DE COLA =====================
   La correlacion es una medida del CENTRO y no dice nada sobre el dia malo.
   chi(u) = probabilidad de que el otro tambien reviente dado que este reventó.
   Comprobado: con un shock comun al 5% de los dias, chi vale 0,49 mientras la
   correlacion se queda en 0,45 y no lo ve.
   Coles, Heffernan y Tawn (1999), Extremes 2:339-365.

   Aviso metodologico: con pocos datos chi de UN par es puro ruido, asi que se
   reporta la DISTRIBUCION sobre todos los pares y se compara con un nulo por
   permutacion de fechas, no con el cero asintotico.                           */
function rangosU(x){
 var idx=x.map(function(v,i){return [v,i]}).sort(function(a,b){return a[0]-b[0]});
 var r=new Array(x.length);
 idx.forEach(function(p,k){ r[p[1]]=(k+1)/(x.length+1) });
 return r;
}
function chiCola(U,V,u,inferior){
 var nu=0, nb=0;
 for(var i=0;i<U.length;i++){
  var a=inferior?U[i]<1-u:U[i]>u, b=inferior?V[i]<1-u:V[i]>u;
  if(a){nu++; if(b)nb++}
 }
 return nu>=5?nb/nu:null;
}

function estructuraRender(){
 if(!QUANT.length){$("es-st").textContent=T("Necesita los precios cargados.","Needs prices loaded.");return}
 var con=QUANT.filter(function(q){return q.c&&q.c.length>150});
 if(con.length<8){$("es-st").textContent=T("Muy pocas series con histórico.","Too few series with history.");return}
 var noms=con.map(function(q){return q.s.name}), series=con.map(function(q){return q.c});
 var cs=corrSemanal(series), N=con.length, T2=cs.T;
 var ev=jacobiVals(cs.C), b=mpBanda(N,T2);
 var reales=ev.filter(function(v){return v>b.hi}).length;

 $("es1").textContent=reales;
 $("es1s").textContent=T("factores reales de "+N+" empresas · el resto es ruido de muestreo",
                          reales+" real factors out of "+N);
 $("es2").textContent=(ev[0]/N*100).toFixed(0)+"%";
 $("es2s").textContent=T("lo explica el mayor factor · techo del ruido "+b.hi.toFixed(2),
                          "explained by the largest factor");
 /* Numero efectivo de apuestas: entropia de los autovalores normalizados. */
 var suma=ev.reduce(function(a,x){return a+x},0);
 var props=ev.map(function(v){return v/suma});
 var H=0; props.forEach(function(p){ if(p>0)H-=p*Math.log(p) });
 $("es3").textContent=Math.exp(H).toFixed(1);
 $("es3s").textContent=T("apuestas independientes de verdad entre "+N,"truly independent bets among "+N);

 /* Dependencia de cola sobre TODOS los pares, con nulo por permutacion. */
 var U=cs.R.map(rangosU);
 var chis=[];
 for(var i=0;i<N;i++)for(var j=i+1;j<N;j++){
  var c=chiCola(U[i],U[j],0.90,true);     // cola INFERIOR: los dias malos
  if(c!==null)chis.push({c:c,a:noms[i],b:noms[j]});
 }
 // Nulo: se baraja el orden de una de las series y se repite.
 var sem=777, rnd=function(){sem^=sem<<13;sem>>>=0;sem^=sem>>>17;sem^=sem<<5;sem>>>=0;return sem/4294967296};
 var nulo=[];
 for(var rep=0;rep<60;rep++){
  var i2=Math.floor(rnd()*N), j2=Math.floor(rnd()*N);
  if(i2===j2)continue;
  var mez=U[j2].slice();
  for(var k=mez.length-1;k>0;k--){var m2=Math.floor(rnd()*(k+1));var tt=mez[k];mez[k]=mez[m2];mez[m2]=tt}
  var c2=chiCola(U[i2],mez,0.90,true);
  if(c2!==null)nulo.push(c2);
 }
 nulo.sort(function(a,b2){return a-b2});
 var corte=nulo.length?nulo[Math.floor(0.95*(nulo.length-1))]:1;
 chis.sort(function(a,b2){return b2.c-a.c});
 var porEncima=chis.filter(function(x){return x.c>corte}).length;
 $("es4").textContent=porEncima;
 $("es4s").textContent=T("pares que caen juntos más de lo que explicaría el azar (umbral "+corte.toFixed(2)+")",
                          "pairs falling together beyond chance");

 $("es-ev").innerHTML=ev.map(function(v,i){
  var real=v>b.hi;
  return "<tr><td>"+(i+1)+"</td><td class='"+(real?"up":"dim")+"'>"+v.toFixed(3)+"</td>"+
   "<td><div class='tr' style='height:6px'><i style='width:"+Math.min(100,v/ev[0]*100).toFixed(0)+
    "%;background:"+(real?"var(--gr)":"var(--dim2)")+"'></i></div></td>"+
   "<td>"+(real?"<span class='t3'>"+T("estructura real","real structure")+"</span>"
               :"<span class='dim'>"+T("ruido de muestreo","sampling noise")+"</span>")+"</td></tr>"}).join("");

 $("es-cola").innerHTML=chis.slice(0,12).map(function(x){
  var alto=x.c>corte;
  return "<tr><td>"+esc(x.a.slice(0,30))+"</td><td>"+esc(x.b.slice(0,30))+"</td>"+
   "<td class='"+(alto?"dn":"")+"'>"+(x.c*100).toFixed(0)+"%</td>"+
   "<td class='dim'>"+(alto?T("caen juntas de verdad","really fall together"):T("dentro de lo normal","within normal"))+"</td></tr>"}).join("")
  ||"<tr><td colspan='4'>"+emp("—",T("Sin pares con suficientes días malos.","No pairs with enough bad days."))+"</td></tr>";

 $("es-st").textContent=T(N+" empresas · "+T2+" semanas · banda de ruido ["+b.lo.toFixed(2)+" · "+b.hi.toFixed(2)+"]",
                          N+" companies · "+T2+" weeks");
}

/* ===================== DIVISAS · QUANT ===================== */
var FXQ=[],FXQLOAD=false,FXSEL=null;
var FXQP=[["EURUSD=X","EUR/USD"],["GBPUSD=X","GBP/USD"],["USDJPY=X","USD/JPY"],["AUDUSD=X","AUD/USD"],
 ["NZDUSD=X","NZD/USD"],["USDCHF=X","USD/CHF"],["USDCAD=X","USD/CAD"],["EURJPY=X","EUR/JPY"],
 ["GBPJPY=X","GBP/JPY"],["EURGBP=X","EUR/GBP"],["EURCHF=X","EUR/CHF"],["AUDJPY=X","AUD/JPY"],
 ["EURPLN=X","EUR/PLN"],["EURSEK=X","EUR/SEK"],["USDINR=X","USD/INR"],["USDKRW=X","USD/KRW"],
 ["USDTRY=X","USD/TRY"],["DX-Y.NYB","Índice dólar"]];
/* Triangulos: el cruce debe ser el producto (o cociente) de sus dos patas. */
var FXTRI=[["EUR/JPY","EUR/USD","USD/JPY","*"],["GBP/JPY","GBP/USD","USD/JPY","*"],
 ["AUD/JPY","AUD/USD","USD/JPY","*"],["EUR/CHF","EUR/USD","USD/CHF","*"],["EUR/GBP","EUR/USD","GBP/USD","/"]];
/* Pares candidatos a moverse juntos. */
var FXPAR=[["EUR/USD","GBP/USD"],["AUD/USD","NZD/USD"],["EUR/JPY","GBP/JPY"],["EUR/CHF","USD/CHF"],["EUR/USD","EUR/CHF"]];

function fxRets(c){var r=[];for(var i=1;i<c.length;i++)r.push(Math.log(c[i]/c[i-1]));return r}
function fxVol(r,nn){var x=r.slice(-nn);return sd(x)*Math.sqrt(252)}
function fxDD(c){var pk=c[0],w=0;for(var i=0;i<c.length;i++){if(c[i]>pk)pk=c[i];var d=c[i]/pk-1;if(d<w)w=d}return w}
/* Exponente de Hurst por rango reescalado sobre los retornos: pendiente de
   log(R/S) frente a log(n) con n = 16, 32, 64, 128. */
function fxHurst(r){
 var ns=[16,32,64,128],xs=[],ys=[];
 ns.forEach(function(nn){
  if(r.length<nn*2)return;
  var rs=[];
  for(var i=0;i+nn<=r.length;i+=nn){
   var seg=r.slice(i,i+nn),m=mean(seg),acc=0,mx=-1e9,mn=1e9;
   for(var j=0;j<seg.length;j++){acc+=seg[j]-m;if(acc>mx)mx=acc;if(acc<mn)mn=acc}
   var sg=sd(seg); if(sg>0)rs.push((mx-mn)/sg);
  }
  if(rs.length){xs.push(Math.log(nn));ys.push(Math.log(mean(rs)))}
 });
 if(xs.length<3)return null;
 var mx=mean(xs),my=mean(ys),num=0,den=0;
 for(var i=0;i<xs.length;i++){num+=(xs[i]-mx)*(ys[i]-my);den+=(xs[i]-mx)*(xs[i]-mx)}
 return den>0?num/den:null;
}
/* Cointegracion sencilla: beta por minimos cuadrados sobre logaritmos, spread,
   z del spread hoy y vida media Ornstein-Uhlenbeck por AR(1). */
function fxCoint(a,b){
 var L=Math.min(a.length,b.length),la=[],lb=[];
 for(var i=0;i<L;i++){la.push(Math.log(a[a.length-L+i]));lb.push(Math.log(b[b.length-L+i]))}
 var ma=mean(la),mb=mean(lb),num=0,den=0;
 for(var i=0;i<L;i++){num+=(la[i]-ma)*(lb[i]-mb);den+=(lb[i]-mb)*(lb[i]-mb)}
 var beta=den>0?num/den:0,sp=[];
 for(var i=0;i<L;i++)sp.push(la[i]-beta*lb[i]);
 var ms=mean(sp),ss=sd(sp),z=ss>0?(sp[L-1]-ms)/ss:0;
 var dn=0,dd=0,ml=mean(sp.slice(0,-1));
 for(var i=1;i<L;i++){var x=sp[i-1]-ml;dn+=(sp[i]-sp[i-1])*x;dd+=x*x}
 var lam=dd>0?dn/dd:0, hl=lam<0?-Math.log(2)/lam:null;
 return {beta:beta,z:z,hl:hl};
}

function fxLoad(){
 if(FXQLOAD)return;FXQLOAD=true;
 $("fx-st").textContent=T("Descargando divisas…","Downloading currencies…");
 pool(FXQP,function(par){
  return api("/api/px?s="+encodeURIComponent(par[0]),{cache:"no-store"})
   .then(function(r){return r.json()})
   .then(function(j){return (j&&j.c&&j.c.length>150)?{s:par[0],n:par[1],c:j.c}:null})
   .catch(function(){return null})},4,
  function(a,b){$("fx-st").textContent=T("Descargando divisas… ","Downloading… ")+a+"/"+b})
 .then(function(rs){
  var out=rs.filter(Boolean).map(function(x){
   var c=x.c,r=fxRets(c),u=c[c.length-1];
   var r1=c.length>21?u/c[c.length-22]-1:0,r3=c.length>63?u/c[c.length-64]-1:0,r6=c.length>126?u/c[c.length-127]-1:0;
   var v20=fxVol(r,20),v100=fxVol(r,100),reg=v100>0?v20/v100:1;
   var s50=mean(c.slice(-50)),s200=mean(c.slice(-200));
   var mu=mean(r.slice(-120)),va=Math.pow(sd(r.slice(-120)),2);
   return {s:x.s,n:x.n,c:c,u:u,r1:r1,r3:r3,r6:r6,vol:fxVol(r,252),dd:fxDD(c),reg:reg,
    hurst:fxHurst(r),s50:s50,s200:s200,kelly:va>0?mu/va:0};
  });
  // Momentum transversal: z de cada horizonte contra el resto de pares, y media.
  ["r1","r3","r6"].forEach(function(k){
   var v=out.map(function(x){return x[k]}),m=mean(v),g=sd(v)||1;
   out.forEach(function(x){x["z"+k]=(x[k]-m)/g})});
  out.forEach(function(x){x.z=(x.zr1+x.zr3+x.zr6)/3;
   x.trend=x.s50>x.s200?"alcista":"bajista";
   x.sig=(x.z>0.5&&x.trend==="alcista")?"COMPRA":((x.z<-0.5&&x.trend==="bajista")?"VENTA":"—")});
  FXQ=out;
  $("fx-st").textContent=out.length+T(" pares · ",": pairs · ")+T("calculado en tu navegador","computed in your browser");
 })
 .catch(function(e){$("fx-st").textContent="Error: "+(e.message||e)})
 .then(function(){FXQLOAD=false;fxRender();try{if(FXQ.length)fxQuantRender()}catch(e){};if(VIEW==="ver")renderVer()});
}

function fxRender(){
 if(!FXQ.length)return;
 var idx={};FXQ.forEach(function(x){idx[x.n]=x});
 var best=FXQ.slice().sort(function(a,b){return b.z-a.z})[0];
 var tens=FXQ.filter(function(x){return x.reg>1.25}).length;
 $("fx1").textContent=FXQ.length;$("fx-cnt").textContent="("+FXQ.length+")";
 $("fx2").textContent=best.n;$("fx2s").textContent="z "+best.z.toFixed(2)+" · 6M "+(best.r6>=0?"+":"")+(best.r6*100).toFixed(1)+"%";
 $("fx3").textContent=tens;
 var fila=function(x){
  var rg=x.reg>1.25?["tensión","dn"]:(x.reg<0.8?["calma","up"]:["normal",""]);
  var hu=x.hurst===null?"—":x.hurst.toFixed(2);
  var pc=function(v){return "<td class='"+(v>=0?"up":"dn")+"'>"+(v>=0?"+":"")+(v*100).toFixed(1)+"%</td>"};
  return "<tr data-fx='"+esc(x.n)+"' style='cursor:pointer"+(FXSEL===x.n?";background:var(--pane2)":"")+"'>"+
   "<td><b>"+esc(x.n)+"</b></td><td>"+x.u.toFixed(x.u<10?4:2)+"</td>"+pc(x.r1)+pc(x.r3)+pc(x.r6)+
   "<td class='mates'>"+(x.vol*100).toFixed(1)+"%</td>"+
   "<td><span class='"+rg[1]+"'>"+rg[0]+"</span> <span class='dim' style='font-size:9px'>"+x.reg.toFixed(2)+"×</span></td>"+
   "<td class='mates'>"+hu+(x.hurst===null?"":" <span class='dim' style='font-size:9px'>"+(x.hurst>0.55?"tend.":(x.hurst<0.45?"rev.":"aleat."))+"</span>")+"</td>"+
   "<td class='mates "+(x.z>0?"up":"dn")+"'>"+x.z.toFixed(2)+"</td>"+
   "<td class='"+(x.trend==="alcista"?"up":"dn")+"'>"+x.trend+" <span class='dim' style='font-size:9px'>50/200</span></td>"+
   "<td class='mates'>"+(x.kelly*100>=0?"+":"")+Math.max(-300,Math.min(300,x.kelly*100)).toFixed(0)+"%</td>"+
   "<td><span class='"+(x.sig==="COMPRA"?"t3":(x.sig==="VENTA"?"t4":""))+"'>"+x.sig+"</span></td></tr>";
 };
 $("fx-rows").innerHTML=FXQ.slice().sort(function(a,b){return b.z-a.z}).map(fila).join("");

 // Coherencia triangular
 $("fx-tri").innerHTML=FXTRI.map(function(t){
  var c=idx[t[0]],a=idx[t[1]],b=idx[t[2]]; if(!c||!a||!b)return "";
  var imp=t[3]==="*"?a.u*b.u:a.u/b.u, bp=(c.u/imp-1)*1e4;
  var lec=Math.abs(bp)<8?["coherente","up"]:(Math.abs(bp)<30?["ruido de horario",""]:["dato sospechoso","dn"]);
  return "<tr><td><b>"+t[0]+"</b> <span class='dim' style='font-size:9px'>= "+t[1]+" "+(t[3]==="*"?"×":"÷")+" "+t[2]+"</span></td>"+
   "<td>"+c.u.toFixed(4)+"</td><td>"+imp.toFixed(4)+"</td><td class='"+(Math.abs(bp)<8?"":"dn")+"'>"+(bp>=0?"+":"")+bp.toFixed(1)+" pb</td>"+
   "<td class='"+lec[1]+"'>"+lec[0]+"</td></tr>"}).join("")||"<tr><td colspan='5'>—</td></tr>";

 // Pares cointegrados
 var est=0;
 $("fx-coint").innerHTML=FXPAR.map(function(p){
  var a=idx[p[0]],b=idx[p[1]]; if(!a||!b)return "";
  var k=fxCoint(a.c,b.c), rev=k.hl!==null&&k.hl<90;
  var lec;
  if(Math.abs(k.z)>2&&rev){lec=[(k.z>0?p[0]:p[1])+T(" va caro frente a "," is rich vs ")+(k.z>0?p[1]:p[0])+T(", suele volver en ~"+Math.round(k.hl)+" sesiones",", tends to revert in ~"+Math.round(k.hl)+" sessions"),"t5"];est++}
  else if(!rev)lec=[T("no revierte: no sirve como par","does not revert: not a pair"),"dim"];
  else lec=[T("en su sitio","in line"),""];
  return "<tr><td><b>"+p[0]+"</b></td><td><b>"+p[1]+"</b></td><td class='mates'>"+k.beta.toFixed(2)+"</td>"+
   "<td class='"+(Math.abs(k.z)>2?"dn":"")+"'>"+(k.z>=0?"+":"")+k.z.toFixed(2)+"</td>"+
   "<td class='mates'>"+(k.hl===null?"∞":Math.round(k.hl)+" d")+"</td><td><span class='"+lec[1]+"'>"+lec[0]+"</span></td></tr>"}).join("");
 $("fx4").textContent=est;

 if(FXSEL&&idx[FXSEL])fxChart(idx[FXSEL]);
}
function fxChart(x){
 FXSEL=x.n;
 $("fx-ch-t").textContent=x.n+" · "+T("400 sesiones","400 sessions");
 precioChart($("fx-chart"),x.c);
 [].forEach.call($("fx-rows").querySelectorAll("tr[data-fx]"),function(tr){tr.style.background=tr.dataset.fx===x.n?"var(--pane2)":""});
}
(function(){
 $("fxload").onclick=fxLoad;
 $("fq-run").onclick=fxQuantRender; $("es-run").onclick=estructuraRender;
 $("fx-rows").onclick=function(ev){
  var tr=ev.target.closest?ev.target.closest("tr[data-fx]"):null; if(!tr)return;
  for(var i=0;i<FXQ.length;i++)if(FXQ[i].n===tr.dataset.fx){fxChart(FXQ[i]);break}
 };
})();

/* ============ BUSCADOR GLOBAL, DIRECCIONES Y BOTON ATRAS ============ */

var PAL_VISTAS=[
 ["ini","Inicio","resumen del dia"],["dash","Resumen","todo de un vistazo"],
 ["con","Contratos","adjudicaciones del Pentágono"],["sc","Empresas","tu lista de valores"],
 ["pm","Apuestas","mercados de Polymarket"],["news","Noticias","titulares del sector"],
 ["quant","Análisis de empresas","momentum y riesgo"],["ver","Veredicto","dónde comprar o vender, con entrada y salida"],["brain","Oportunidades","arbitraje y señales"],
 ["sim","¿Esto funciona?","simulaciones y pruebas"],["cart","Cuánto apostar","tamaño de posición"],
 ["inv","Investigación","ideas sin validar"],["lib","Biblioteca","métodos y fuentes"]];

/* Coincidencia por subsecuencia: "avav" encuentra "AeroVironment (AVAV)" y
   "lokh" encuentra "Lockheed". Puntua mejor lo que empieza igual. */
function palPunt(txt,q){
 var t=txt.toLowerCase(), i=t.indexOf(q);
 if(i===0)return 1000; if(i>0)return 700-i;
 var pi=0,pt=0,ini=-1;
 while(pi<q.length&&pt<t.length){ if(t[pt]===q[pi]){ if(ini<0)ini=pt; pi++ } pt++ }
 return pi===q.length?300-Math.min(ini,60):-1;
}

function palBuscar(q){
 q=(q||"").trim().toLowerCase();
 var r=[];
 var mete=function(tipo,tg,nom,det,acc){
  var p=q?palPunt(nom+" "+det,q):500;
  if(p<0)return; r.push({p:p,tg:tg,cl:tipo,n:nom,d:det,acc:acc});
 };
 PAL_VISTAS.forEach(function(v){ mete("v",T("VISTA","VIEW"),v[1],v[2],function(){go(v[0])}) });
 // Empresas: siempre disponibles, la lista es fija.
 if(q)SC.forEach(function(e){
  mete("e",T("EMPRESA","COMPANY"),e.name+" ("+e.tk+")",e.n||"",function(){go("sc");feAbrir(e.tk)});
 });
 // Mercados: solo si el cerebro esta cargado; si no, no hay nada que indexar.
 if(q&&typeof BQ!=="undefined"&&BQ&&BQ.markets)BQ.markets.slice(0,900).forEach(function(m){
  mete("m",T("APUESTA","MARKET"),m.q,(m.ev||"")+" · "+(m.p*100).toFixed(0)+"%",function(){go("pm");dtOpen(m.id)});
 });
 // Contratos del mes.
 if(q&&typeof CON!=="undefined")CON.slice(0,400).forEach(function(c){
  mete("c",T("CONTRATO","CONTRACT"),c.name,f$(c.amount),function(){go("con");conAbrir(c.name)});
 });
 r.sort(function(a,b){return b.p-a.p});
 return r.slice(0,40);
}

var PALI=0,PALR=[];
function palPinta(){
 var h=PALR.map(function(x,i){
  return "<div class='it"+(i===PALI?" sel":"")+"' data-i='"+i+"'>"+
   "<span class='tg "+x.cl+"'>"+x.tg+"</span>"+
   "<span class='n'>"+esc(x.n)+"</span>"+
   "<span class='d'>"+esc(x.d||"")+"</span></div>";
 }).join("");
 $("palr").innerHTML=h||"<div class='it' style='color:var(--dim2)'>"+T("Nada coincide.","No matches.")+"</div>";
 var sel=$("palr").querySelector(".sel"); if(sel&&sel.scrollIntoView)sel.scrollIntoView({block:"nearest"});
}
/* Llevar al usuario a un mercado concreto desde cualquier sitio. Con el cerebro
   cargado se abre la ficha directamente; si no, se va a APUESTAS con el buscador
   ya relleno, que es lo mas cerca que se puede llegar sin descargar 900 mercados. */
function pmIrA(id,q){
 if(id&&typeof BQ!=="undefined"&&BQ&&BQ.markets){
  for(var i=0;i<BQ.markets.length;i++)if(String(BQ.markets[i].id)===String(id)){go("pm");dtOpen(id);return}
 }
 go("pm");
 buscarGlobal(q||"");
}
function palAbrir(){
 $("pal").classList.add("on"); $("palq").value=""; PALI=0;
 PALR=palBuscar(""); palPinta(); setTimeout(function(){$("palq").focus()},30);
}
function palCerrar(){ $("pal").classList.remove("on") }
function palIr(i){
 var x=PALR[i]; if(!x)return; palCerrar();
 try{ x.acc() }catch(e){}
}

/* ---- direcciones: #sc, #emp/NASDAQ:AVAV, #pm/0x1234 ---- */
var RUTA_INT=false;   // evita que escribir la ruta dispare el popstate
function rutaEscribe(){
 var h="#"+VIEW;
 if($("fe").classList.contains("on")&&FE)h="#emp/"+FE.tk;
 else if($("dt").classList.contains("on")&&DT)h="#mer/"+DT.id;
 if(location.hash===h)return;
 RUTA_INT=true; try{ history.pushState({},"",h) }catch(e){} RUTA_INT=false;
}
function rutaLee(){
 var h=(location.hash||"").replace(/^#/,"");
 if(!h){go("ini");return}
 var pa=h.split("/");
 if(pa[0]==="emp"&&pa[1]){ go("sc"); feAbrir(decodeURIComponent(pa[1]),true); return }
 if(pa[0]==="mer"&&pa[1]){ go("pm"); dtOpen(decodeURIComponent(pa[1]),true); return }
 for(var i=0;i<PAL_VISTAS.length;i++)if(PAL_VISTAS[i][0]===pa[0]){ go(pa[0],true); return }
}

(function(){
 $("buscar").onclick=palAbrir;
 // Celdas del mapa de calor y filas de "mayores movimientos": abren el mercado.
 $("d-heat").onclick=function(ev){
  var c=ev.target.closest?ev.target.closest(".hc"):null; if(!c)return;
  pmIrA(c.dataset.id,c.dataset.q);
 };
 $("pal").onclick=function(ev){ if(ev.target===$("pal"))palCerrar() };
 $("palq").oninput=function(){ PALR=palBuscar(this.value); PALI=0; palPinta() };
 $("palq").onkeydown=function(ev){
  if(ev.key==="ArrowDown"){ PALI=Math.min(PALI+1,PALR.length-1); palPinta(); ev.preventDefault() }
  else if(ev.key==="ArrowUp"){ PALI=Math.max(PALI-1,0); palPinta(); ev.preventDefault() }
  else if(ev.key==="Enter"){ palIr(PALI); ev.preventDefault() }
  else if(ev.key==="Escape"){ palCerrar() }
 };
 $("palr").onclick=function(ev){
  var it=ev.target.closest?ev.target.closest(".it"):null;
  if(it&&it.dataset.i!==undefined)palIr(+it.dataset.i);
 };
 document.addEventListener("keydown",function(ev){
  // Ctrl+K / Cmd+K abre el buscador desde cualquier sitio.
  if((ev.ctrlKey||ev.metaKey)&&(ev.key==="k"||ev.key==="K")){ ev.preventDefault(); palAbrir(); return }
  if(ev.key==="Escape"){
   if($("pal").classList.contains("on")){ palCerrar(); return }
   // Esc cierra lo que este abierto, de dentro hacia fuera.
   if($("fe").classList.contains("on")){ feCerrar(); rutaEscribe(); return }
   if($("dt").classList.contains("on")){ dtClose(); rutaEscribe(); return }
  }
  // "/" para buscar, salvo si se esta escribiendo en un campo.
  if(ev.key==="/"&&!/^(input|textarea|select)$/i.test((ev.target.tagName||""))){
   ev.preventDefault(); palAbrir();
  }
 });
 window.addEventListener("popstate",function(){ if(!RUTA_INT)rutaLee() });
 // Al arrancar, respeta la direccion con la que se ha entrado.
 if(location.hash)setTimeout(rutaLee,400);
})();

$("nav2").addEventListener("click",function(e){if(e.target.dataset&&e.target.dataset.g)irGrupo(e.target.dataset.g)});
$("cmd").addEventListener("input",function(e){e.target.dataset.q=e.target.value;render()});
$("cmd").addEventListener("keydown",function(e){
 if(e.key!=="Enter")return;
 var c=e.target.value.trim().toUpperCase();
 var m={CON:"con",CONTRATOS:"con",SC:"sc",SMALLCAPS:"sc",PM:"pm",POLYMARKET:"pm",NEWS:"news",NOTICIAS:"news",DASH:"dash",INICIO:"ini",INI:"ini",PORTADA:"ini",QUANT:"quant",Q:"quant",BRAIN:"brain",CEREBRO:"brain",PQ:"brain",SIM:"sim",SIMULADOR:"sim",BT:"sim",CART:"cart",CARTERA:"cart",LIB:"lib",BIBLIOTECA:"lib",INV:"inv",INVESTIGACION:"inv",LAB:"inv"};
 if(m[c]){e.target.value="";e.target.dataset.q="";go(m[c])}
 else if(c==="REFRESH"||c==="RELOAD"){e.target.value="";e.target.dataset.q="";refresh()}});
document.addEventListener("keydown",function(e){
 if(e.key==="Escape"&&$("iap").classList.contains("on")){iaAbrir(false);return}
 if(e.key==="Escape"&&FE){feCerrar();return}
 if(e.key==="Escape"&&DT){dtClose();return}
 if(e.key==="/"&&document.activeElement!==$("cmd")){e.preventDefault();$("cmd").focus();return}
 var m={F1:"ini",F2:"dash",F3:"con",F4:"sc",F5:"pm",F6:"news",F7:"quant",F8:"brain",F9:"sim",F10:"cart",F11:"inv",F12:"lib"};
 if(m[e.key]){e.preventDefault();go(m[e.key])}});
document.addEventListener("click",function(e){var t=e.target;
 if(t.classList.contains("str")){W[t.dataset.tk]=!W[t.dataset.tk];sw();render()}
 if(t.dataset&&t.dataset.r){RG=t.dataset.r;render()}
 if(t.dataset&&t.dataset.n){NR=t.dataset.n;loadNews(NR);render()}
 if(t.dataset&&t.dataset.nf){loadNews(NR,true)}
 if(t.dataset&&t.dataset.del){POS=POS.filter(function(x){return String(x.id)!==String(t.dataset.del)});render();return}
 if(t.closest){
  var fr=t.closest("[data-tk]");
  if(fr&&t.tagName!=="A"&&!t.classList.contains("str")){feAbrir(fr.dataset.tk);return}
  var ec=t.closest("[data-emp]");
  if(ec&&ec.dataset.emp){feAbrir(ec.dataset.emp);return}
  var cr=t.closest("[data-con]");
  if(cr&&t.tagName!=="A"){conAbrir(cr.dataset.con);return}
  var tr=t.closest("tr[data-mid]");
  if(tr&&t.tagName!=="A"){dtOpen(tr.dataset.mid);return}
  // Mercado por titulo (la lista de portada no trae id).
  var tq=t.closest("[data-q]");
  if(tq&&t.tagName!=="A"){pmIrA(null,tq.dataset.q);return}
  // Grupo/evento: al cerebro con el buscador global relleno.
  var te=t.closest("[data-ev]");
  if(te&&t.tagName!=="A"){go("brain");buscarGlobal(te.dataset.ev);return}
  // Par de divisas desde fuera de su tabla: a ANALISIS con su grafico.
  var tfx=t.closest("[data-fx]");
  if(tfx&&!t.closest("#fx-rows")){go("quant");var nm=tfx.dataset.fx;
   setTimeout(function(){for(var i=0;i<FXQ.length;i++)if(FXQ[i].n===nm){fxChart(FXQ[i]);break}
    var e=$("fx-chart");if(e&&e.scrollIntoView)e.scrollIntoView({block:"center"})},120);return}
  // Region: a EMPRESAS filtrado.
  var trg=t.closest("[data-reg]");
  if(trg){RG=trg.dataset.reg;go("sc");render();return}
  // Destino generico: vista y, opcionalmente, elemento al que bajar.
  var tg=t.closest("[data-go]");
  if(tg&&t.tagName!=="A"&&!t.closest("button,input,select")){
   go(tg.dataset.go);
   var sc=tg.dataset.scroll;
   if(sc)setTimeout(function(){var e=$(sc);if(e&&e.scrollIntoView)e.scrollIntoView({block:"start",behavior:"smooth"})},80);
   return}
  // Glosario: abre el buscador con el termino, que ensena donde aparece.
  var tgl=t.closest(".gloss>div");
  if(tgl){var kk=tgl.querySelector(".k");palAbrir();if(kk){$("palq").value=kk.textContent.trim();$("palq").oninput.call($("palq"))}return}}});

/* KPI: cada tarjeta de cifras lleva a la tabla que la explica. Se asigna por el
   id del valor para no tocar 27 lineas de HTML. */
(function(){
 var K={k1:["con","c-rows"],k2:["con","c-rows"],k3:["pm","p-rows"],k4:["dash","d-match"],
  q1:["quant","q-rows"],q2:["quant","q-rank"],q3:["quant","q-rr"],q4:["quant","q-rows"],
  fx1:["quant","fx-rows"],fx2:["quant","fx-rows"],fx3:["quant","fx-rows"],fx4:["quant","fx-coint"],
  b1:["brain","b-rows"],b2:["brain","b-arb"],b3:["brain","b-arb"],b4:["brain","b-wang"],
  s1:["sim","sim-rows"],s2:["sim","s-cal"],s3:["sim","s-cal"],s4:["sim","sim-rows"],
  c1:["cart","ca-rows"],c2:["cart","ca-rows"],c3:["cart","ca-rows"],c4:["cart","ca-arb"],
  l1:["lib","l-rows"],l2:["lib","l-rows"],l3:["lib","l-rows"],l4:["lib","l-rows"],
  ve1:["ver","ver-emp"],ve2:["ver","ver-emp"],ve3:["ver","ver-pm"],ve4:["ver","ver-arb"]};
 Object.keys(K).forEach(function(id){
  var v=$(id),k=v&&v.closest?v.closest(".kpi"):null; if(!k)return;
  k.dataset.go=K[id][0];k.dataset.scroll=K[id][1];k.style.cursor="pointer";
  k.title=T("Ver el detalle","See details");
 });
 [].forEach.call(document.querySelectorAll(".gloss>div"),function(d){d.style.cursor="pointer";d.title=T("Buscar este término en el terminal","Search this term in the terminal")});
})();

/* Ticker corto de EDGAR ("AVAV") -> ticker completo de la lista ("NASDAQ:AVAV"). */

/* ---- Inclinacion del terminal. Calculada de lo que hay en pantalla; el que
   decide es el usuario y asi se dice en la propia linea. ---- */
function bandaHoras(el,sim,horas){
 if(!el)return;
 horas=horas||8;
 el.innerHTML="<span class='dim'>"+T("midiendo el movimiento típico…","measuring typical move…")+"</span>";
 api("/api/intra?s="+encodeURIComponent(sim),{cache:"no-store"})
  .then(function(r){return r.json()})
  .then(function(j){
   if(!j||!isFinite(j.sigmaBarra))throw 0;
   var s1=j.sigmaBarra*Math.sqrt(horas), s2=1.96*s1;
   el.innerHTML=
    "<div class='l'>"+T("CUÁNTO SE MUEVE EN "+horas+" HORAS","TYPICAL MOVE IN "+horas+" HOURS")+"</div>"+
    "<div class='v'>±"+(s1*100).toFixed(2)+"%</div>"+
    "<div class='l' style='text-transform:none;letter-spacing:0'>"+
     T("2 de cada 3 veces. Casi siempre (19 de 20) dentro de ±"+(s2*100).toFixed(2)+"%. El mayor salto real de "+horas+
       " horas este mes fue "+(j.peor8*100).toFixed(2)+"%. Medido sobre "+j.barras+" barras horarias. "+
       "<b>Esto es cuánto, no hacia dónde: la dirección a estas horas no se predice.</b>",
       "2 times out of 3. Almost always (19 of 20) within ±"+(s2*100).toFixed(2)+"%. Largest real "+horas+
       "-hour jump this month was "+(j.peor8*100).toFixed(2)+"%. Measured on "+j.barras+" hourly bars. "+
       "<b>This is how much, not which way: direction at these horizons is not predictable.</b>")+"</div>";
  })
  .catch(function(){el.innerHTML="<span class='dim'>"+T("sin datos por horas para este símbolo.","no hourly data for this symbol.")+"</span>"});
}

/* Mercados que TradingView identifica con el mismo prefijo que usamos. Los que
   no estan aqui no se intentan: un widget que no carga es peor que un aviso. */
var TV_OK={NASDAQ:1,NYSE:1,AMEX:1,LSE:1,EURONEXT:1,OMXSTO:1,GPW:1,BIST:1,TASE:1,
           NSE:1,KRX:1,TSE:1,ASX:1,BMFBOVESPA:1};
var TV_CARGADO=false, TV_ACTUAL=null;

function tvSimbolo(tk){
 var p=String(tk||"").split(":");
 if(p.length!==2||!TV_OK[p[0]])return null;
 return p[0]+":"+p[1];
}
function tvPintar(cont,tk){
 var sim=tvSimbolo(tk);
 if(!sim){
  cont.innerHTML=emp("\\u2014",T("TradingView no reconoce este mercado, así que no se puede incrustar el gráfico. El enlace de arriba sí funciona.",
                                 "TradingView does not recognise this exchange, so the chart cannot be embedded. The link above still works."));
  return;
 }
 if(TV_ACTUAL===sim&&cont.querySelector("iframe"))return;
 TV_ACTUAL=sim;
 cont.innerHTML="<div class='emp'><b>\\u23F3</b>"+T("Cargando el gráfico de TradingView…","Loading the TradingView chart…")+"</div>";
 var pintar=function(){
  cont.innerHTML="<div id='tvbox' style='height:100%'></div>";
  try{
   new TradingView.widget({
    container_id:"tvbox", symbol:sim, interval:"D", timezone:"Europe/Madrid",
    theme:"dark", style:"1", locale:(IDIOMA==="en"?"en":"es"),
    toolbar_bg:"#0d1117", enable_publishing:false, hide_side_toolbar:false,
    allow_symbol_change:false, save_image:false, autosize:true,
    studies:["MASimple@tv-basicstudies"]
   });
  }catch(e){
   cont.innerHTML=emp("\\u26A0",T("TradingView no ha podido cargar. Puede ser un bloqueador de anuncios.",
                                  "TradingView failed to load. It may be an ad blocker."));
  }
 };
 if(TV_CARGADO&&window.TradingView){pintar();return}
 var sc=document.createElement("script");
 sc.src="https://s3.tradingview.com/tv.js"; sc.async=true;
 sc.onload=function(){TV_CARGADO=true;pintar()};
 sc.onerror=function(){
  cont.innerHTML=emp("\\u26A0",T("No se ha podido descargar TradingView. Comprueba el bloqueador de anuncios; el resto del terminal no lo necesita.",
                                 "Could not download TradingView. Check your ad blocker; the rest of the terminal does not need it."));
 };
 document.head.appendChild(sc);
}

function sugEmpresa(e,q){
 var txt,cl,por;
 if(!q){txt=T("sin precios cargados","no prices loaded");cl="dim";por=T("carga los precios para tener una lectura","load prices to get a read")}
 else if(q.z>0.5&&q.s50>q.s200){txt=T("VIGILAR / ENTRAR CON POCO","WATCH / SMALL ENTRY");cl="up";por=T("momentum alto (z "+q.z.toFixed(2)+") y tendencia alcista","strong momentum (z "+q.z.toFixed(2)+") and uptrend")}
 else if(q.z<-0.5&&q.s50<q.s200){txt=T("EVITAR POR AHORA","AVOID FOR NOW");cl="dn";por=T("momentum negativo (z "+q.z.toFixed(2)+") y tendencia bajista","negative momentum (z "+q.z.toFixed(2)+") and downtrend")}
 else if(q.dd<-0.4){txt=T("ESPERAR","WAIT");cl="";por=T("ha caído un "+Math.abs(q.dd*100).toFixed(0)+"% desde máximos: alto riesgo","down "+Math.abs(q.dd*100).toFixed(0)+"% from the high: high risk")}
 else {txt=T("ESPERAR","WAIT");cl="";por=T("sin señal clara (z "+q.z.toFixed(2)+")","no clear signal (z "+q.z.toFixed(2)+")")}
 var kk=function(l,v,c){return "<div class='sug'><div class='l'>"+l+"</div><div class='v "+(c||"")+"'>"+v+"</div><div class='l' style='text-transform:none;letter-spacing:0'>"+por+" · <b>"+T("tú decides","you decide")+"</b></div></div>"};
 return kk(T("EL TERMINAL SE INCLINA POR","THE TERMINAL LEANS"),txt,cl);
}
function sugMercado(m){
 var txt,cl,por;
 var edge=(typeof m.edge==="number")?m.edge:null, sr=(typeof m.spreadRel==="number")?m.spreadRel:0;
 if(edge===null){txt=T("SIN LECTURA","NO READ");cl="dim";por=T("no hay estimación para este mercado","no estimate for this market")}
 else if(sr>0.15){txt=T("NO TOCAR","STAY OUT");cl="dn";por=T("el spread se come cualquier ventaja ("+(sr*100).toFixed(0)+"%)","the spread eats any edge ("+(sr*100).toFixed(0)+"%)")}
 else if(edge<-Math.max(0.03,sr)){txt=T("SÍ PARECE BARATO","YES LOOKS CHEAP");cl="up";por=T("el precio está "+(Math.abs(edge)*100).toFixed(1)+" puntos por debajo del justo","price is "+(Math.abs(edge)*100).toFixed(1)+" points below fair")}
 else if(edge>Math.max(0.03,sr)){txt=T("SÍ PARECE CARO","YES LOOKS RICH");cl="dn";por=T("el precio está "+(edge*100).toFixed(1)+" puntos por encima del justo: si acaso, el NO","price is "+(edge*100).toFixed(1)+" points above fair: if anything, NO")}
 else {txt=T("NADA QUE HACER","NOTHING TO DO");cl="";por=T("el precio ya refleja lo que se sabe (sesgo "+(edge*100).toFixed(1)+")","price already reflects what is known (bias "+(edge*100).toFixed(1)+")")}
 return "<div class='sug'><div class='l'>"+T("EL TERMINAL SE INCLINA POR","THE TERMINAL LEANS")+"</div><div class='v "+cl+"'>"+txt+"</div><div class='l' style='text-transform:none;letter-spacing:0'>"+por+" · <b>"+T("tú decides","you decide")+"</b></div></div>";
}

function tkCompleto(tk){
 if(!tk)return "";
 tk=String(tk).toUpperCase();
 for(var i=0;i<SC.length;i++){var c=SC[i].tk;if(c===tk||c.split(":").pop()===tk)return c}
 return "";
}
/* Rellena el buscador global y repinta: es el filtro comun de todas las tablas. */
function buscarGlobal(q){
 var c=$("cmd"); if(!c)return;
 c.value=q||""; c.dataset.q=q||""; render();
 try{c.scrollIntoView({block:"nearest"})}catch(e){}
}
[].forEach.call(document.querySelectorAll("th[data-k]"),function(th){
 var enBrain=!!(th.closest&&th.closest("#v-brain"));
 th.onclick=function(){var k=th.dataset.k;
  if(enBrain){BSORT=BSORT.k===k?{k:k,d:-BSORT.d}:{k:k,d:1}}
  else{SORT=SORT.k===k?{k:k,d:-SORT.d}:{k:k,d:1}}
  render()}});
$("bload").onclick=function(){loadBrain(true)};
$("rl-run").onclick=loadRel;
$("srun").onclick=btRun;
[].forEach.call(document.querySelectorAll(".lf"),function(b){b.onclick=function(){
 LF=b.dataset.f;[].forEach.call(document.querySelectorAll(".lf"),function(o){o.classList.toggle("on",o===b)});render()}});
$("i-sigok").onclick=function(){
 var sig=$("i-sig").value.trim();
 if(!sig){$("i-sigst").textContent="Pega la firma primero.";return}
 $("i-sigst").textContent="Verificando en la cadena…";
 api("/api/pago?sig="+encodeURIComponent(sig),{cache:"no-store"})
  .then(function(r){return r.json()})
  .then(function(j){
   if(j.error){$("i-sigst").innerHTML="<span class='dn'>"+esc(j.error)+"</span>";return}
   setKey(j.clave);
   $("i-sig").value="";
   $("i-sigst").innerHTML="<span class='up'>Pago verificado: "+j.pagado.toFixed(2)+
    " USDC, "+j.meses+" mes(es). Clave guardada. Recargando…</span>";
   // se enseña una vez, por si quiere apuntarla
   var SL=String.fromCharCode(10);
   alert("Tu clave de acceso (guardala, no se puede recuperar):"+SL+SL+j.clave+SL+SL+
         "Caduca: "+j.caduca.slice(0,10));
   setTimeout(function(){location.reload()},1200)})
  .catch(function(e){$("i-sigst").innerHTML="<span class='dn'>"+esc(e.message||e)+"</span>"})};

$("i-keyok").onclick=function(){
 var v=$("i-key").value.trim();setKey(v);$("i-key").value="";
 $("i-keyst").textContent=v?"Clave guardada. Recargando…":"Clave borrada. Recargando…";
 setTimeout(function(){location.reload()},700)};
$("iabtn").onclick=function(){iaAbrir(!$("iap").classList.contains("on"))};
$("iax").onclick=function(){iaAbrir(false)};
$("iag").onclick=function(){iaPreguntar()};
$("iamic").onclick=vozAlternar;
$("iaconv").onchange=function(){
 CONVERSA=this.checked;
 if(CONVERSA){
  // Sin lectura en voz alta, un chat de voz es media conversacion: se activa sola.
  if(!HABLAR){HABLAR=true;$("iavoz").checked=true}
  iaMsg(IDIOMA==="en"?"Voice chat on. Speak after the tone; I will keep listening.":
        "Chat de voz activado. Habla cuando quieras: seguiré escuchando sola tras cada respuesta.","ia");
  if(!VOZON)vozAlternar();
 } else if(VOZ&&VOZON){ VOZ.stop() }
};
$("iavoz").onchange=function(){HABLAR=this.checked;
 if(HABLAR)decir("Voz activada. Te leeré las respuestas.")};
$("iaq").addEventListener("keydown",function(e){if(e.key==="Enter")iaPreguntar()});
$("iaeg").addEventListener("click",function(e){
 if(e.target.dataset&&e.target.dataset.ia)iaPreguntar(e.target.dataset.ia)});
$("lang").onclick=function(){
 IDIOMA=(IDIOMA==="es"?"en":"es");
 try{localStorage.setItem("mor_lang",IDIOMA)}catch(e){}
 document.documentElement.lang=IDIOMA;
 aplicarModo();pintarNav();render()};
$("modo").onclick=function(){MODO=(MODO==="simple"?"pro":"simple");aplicarModo();render()};
$("e-load").onclick=loadEdgar;
$("e-d").onchange=loadEdgar;
[].forEach.call(document.querySelectorAll(".su"),function(b){b.onclick=function(){setUniv(b.dataset.u)}});
$("frun").onclick=fxRun;
$("mcsnap").onclick=function(){
 $("mc-st2").textContent="Anotando…";
 api("/api/paper/snap",{cache:"no-store"}).then(function(r){return r.json()}).then(function(j){
  $("mc-st2").textContent="Anotado: "+JSON.stringify(j)}).catch(function(e){
  $("mc-st2").textContent="Error: "+(e.message||e)})};
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
$("fex").onclick=feCerrar;
$("volver").onclick=volver;
$("fe").addEventListener("click",function(e){if(e.target.id==="fe")feCerrar()});
$("dt").addEventListener("click",function(e){if(e.target.id==="dt")dtClose()});
$("bvol").onclick=loadBVol;
$("b-kmkt").onchange=function(){syncKellyP();kellyCalc()};
$("b-kp").oninput=kellyCalc;
$("b-kf").onchange=kellyCalc;
$("fa").onclick=function(){FP="all";$("fa").classList.add("on");$("fr").classList.remove("on");render()};
$("fr").onclick=function(){FP="r";$("fr").classList.add("on");$("fa").classList.remove("on");render()};
$("fm").onchange=render;
$("pf").onclick = function(){ PF="fiable"; ["pa","ps","pf"].forEach(function(i){ $(i).classList.toggle("on", i==="pf") }); render() };
$("pm-q").oninput = render;
$("pm-cat").addEventListener("click", function(e){
 var b = e.target.closest ? e.target.closest("[data-pc]") : null;
 if(b && b.dataset.pc){ PMCAT = b.dataset.pc; render() }});
$("pa").onclick = function(){PF="all";["pa","ps","pf"].forEach(function(i){$(i).classList.toggle("on",i==="pa")});render()};
$("ps").onclick=function(){PF="sig";["pa","ps","pf"].forEach(function(i){$(i).classList.toggle("on",i==="ps")});render()};
$("swl").onclick=function(){WO=!WO;$("swl").classList.toggle("on",WO);render()};
$("scsv").onclick=function(){
 var NL=String.fromCharCode(10),rows=[["Empresa","Ticker","Pais","Region","Tamano","Nicho","Watchlist"]];
 SC.forEach(function(s){rows.push([s.name,s.tk,s.c,s.r,SZ[s.z],s.n,W[s.tk]?"SI":""])});
 var csv=rows.map(function(r){return r.map(function(c){return '"'+String(c).replace(/"/g,'""')+'"'}).join(",")}).join(NL);
 var a=document.createElement("a");a.href=URL.createObjectURL(new Blob([csv],{type:"text/csv"}));a.download="smallcaps_defensa.csv";a.click()};
function refresh(){NEWS={};NSRC={};loadCon();loadPM();loadNews("Pentágono",true);if(NR!=="Pentágono")loadNews(NR,true)}
$("rel").onclick=refresh;
$("qload").onclick=loadPx;
setUniv("pm");
aplicarModo();
api("/api/estado").then(function(r){return r.json()}).then(function(j){
 var abierto=j.control==="abierto";
 $("i-keyst").textContent=abierto?"Acceso abierto: no hace falta clave.":("Acceso controlado · plan "+(j.plan||"?"));
 $("i-pinfo").innerHTML=abierto
  ? "Ahora mismo el terminal es <b>de acceso libre</b>: no hace falta pagar ni tener clave."
  : "El acceso está controlado. Si tienes clave, pégala abajo. Si has pagado en USDC, "+
    "pega aquí la firma de tu transacción y se verifica sola contra la cadena.";
 $("i-pago").style.display=abierto?"none":"";
}).catch(function(e){
 $("i-keyst").textContent="Necesitas clave: "+(e.message||e);
 $("i-pinfo").textContent="El acceso está controlado y no tienes clave válida."});
if(!EDG&&!EDGL)loadEdgar();
if(!BQ&&!BLOAD)loadBrain();
dibujarTopo();
window.addEventListener("resize",function(){clearTimeout(window.__t);window.__t=setTimeout(dibujarTopo,250)});
refresh();render();
setInterval(function(){loadPM()},120000);
</script>
</body>
</html>
`;
// >>> FIN HTML GENERADO

/* ================= CLAVES DE ACCESO Y CUPOS =================
   Hay que ser claro con lo que esto protege y lo que no. La interfaz es HTML que
   el navegador descarga: es copiable, siempre, y ofuscarla solo encarece copiarla.
   Lo que SI protege es que el calculo valioso viva aqui y solo responda a quien
   tiene clave. Si alguien clona la interfaz, se queda sin datos.

   La clave nunca se guarda en claro: se guarda su SHA-256. Si alguien accediera al
   KV no podria usarlas. Y las claves NO estan en el codigo: se crean en caliente
   con ADMIN_TOKEN, que se pone como variable secreta en Cloudflare.              */

const PLANES = {
  libre: { cuota: 50,   endpoints: ["pmq", "px", "intra", "bce", "contratista", "coherencia", "pm", "contracts", "news", "history"] },
  pro:   { cuota: 5000, endpoints: "*" }
};

// Publicos siempre: la portada tiene que cargar aunque no tengas clave.
const ABIERTOS = ["", "estado", "pago"];

async function sha256(txt) {
  const b = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(txt));
  return [...new Uint8Array(b)].map(x => x.toString(16).padStart(2, "0")).join("");
}

function nuevaClave() {
  const b = new Uint8Array(24);
  crypto.getRandomValues(b);
  return "mor_" + [...b].map(x => x.toString(16).padStart(2, "0")).join("");
}

function leerClave(request, url) {
  const h = request.headers.get("authorization") || "";
  const m = h.match(/^Bearer\s+(\S+)$/i);
  return (m ? m[1] : null) || url.searchParams.get("k") || null;
}

/* Devuelve {ok, plan, resto, motivo}. El cupo es diario y se reinicia solo:
   la clave del contador lleva la fecha, con caducidad automatica a 48 h.        */
async function autorizar(env, request, url, recurso) {
  if (ABIERTOS.indexOf(recurso) >= 0) return { ok: true, plan: "abierto", resto: null };
  // Sin KV o sin exigirlo configurado, todo abierto: asi el desarrollo no se rompe.
  if (!env.RADAR || String(env.EXIGIR_CLAVE || "") !== "1")
    return { ok: true, plan: "sin_control", resto: null };

  const clave = leerClave(request, url);
  if (!clave) return { ok: false, cod: 401, motivo: "Falta clave de acceso" };

  const reg = await env.RADAR.get("key:" + (await sha256(clave)), "json");
  if (!reg || reg.revocada) return { ok: false, cod: 403, motivo: "Clave no valida" };
  if (reg.caduca && new Date(reg.caduca) < new Date())
    return { ok: false, cod: 403, motivo: "Tu clave caduco el " + reg.caduca.slice(0, 10) };

  const plan = PLANES[reg.plan] || PLANES.libre;
  if (plan.endpoints !== "*" && plan.endpoints.indexOf(recurso) < 0)
    return { ok: false, cod: 403, motivo: "Tu plan (" + reg.plan + ") no incluye /" + recurso };

  const dia = new Date().toISOString().slice(0, 10);
  const kc = "uso:" + reg.id + ":" + dia;
  const usado = Number(await env.RADAR.get(kc)) || 0;
  if (usado >= plan.cuota)
    return { ok: false, cod: 429, motivo: "Cupo diario agotado (" + plan.cuota + ")" };
  await env.RADAR.put(kc, String(usado + 1), { expirationTtl: 172800 });

  return { ok: true, plan: reg.plan, resto: plan.cuota - usado - 1 };
}

/* Alta de claves. Exige ADMIN_TOKEN, que se define como secreto en Cloudflare y
   NUNCA vive en el repositorio. La clave se devuelve una sola vez: no se puede
   recuperar despues porque solo se guarda su hash.                              */
async function crearClave(env, request, url) {
  const tok = leerClave(request, url);
  if (!env.ADMIN_TOKEN || tok !== env.ADMIN_TOKEN)
    return { error: "no autorizado" };
  if (!env.RADAR) return { error: "KV no configurado" };

  const plan = PLANES[url.searchParams.get("plan")] ? url.searchParams.get("plan") : "libre";
  const clave = nuevaClave();
  const id = (await sha256(clave)).slice(0, 12);
  await env.RADAR.put("key:" + (await sha256(clave)), JSON.stringify({
    id: id, plan: plan, creada: new Date().toISOString(),
    nota: (url.searchParams.get("nota") || "").slice(0, 80)
  }));
  return { clave: clave, id: id, plan: plan, cuota: PLANES[plan].cuota,
           aviso: "Guardala ahora: solo se almacena su hash y no se puede recuperar." };
}

function json(d, extra) {
  const h = { "content-type": "application/json;charset=utf-8",
              "access-control-allow-origin": "*", "cache-control": "no-store" };
  if (extra) for (const k in extra) h[k] = extra[k];
  return new Response(JSON.stringify(d), { headers: h });
}

export default {
  async fetch(request, env, ctx) {
    ENV_KV = env.RADAR || null;   // para las funciones que no reciben env
    const url = new URL(request.url);
    const p = url.pathname;
    try {
      // Alta de claves antes del control: es la puerta y se protege sola.
      if (p === "/api/admin/clave") return json(await crearClave(env, request, url));

      // "/api/paper/snap" -> "paper". La familia decide el permiso, no cada ruta.
      const recurso = p.indexOf("/api/") === 0 ? p.slice(5).split("/")[0] : "";
      const aut = await autorizar(env, request, url, recurso);
      if (!aut.ok) {
        return new Response(JSON.stringify({ error: aut.motivo, recurso: recurso }), {
          status: aut.cod,
          headers: { "content-type": "application/json;charset=utf-8",
                     "access-control-allow-origin": "*", "cache-control": "no-store" }
        });
      }
      const cab = aut.resto === null ? null : { "x-cuota-restante": String(aut.resto) };

      if (p === "/api/estado") return json({ ok: true, plan: aut.plan,
        control: String(env.EXIGIR_CLAVE || "") === "1" ? "activo" : "abierto",
        ts: new Date().toISOString() });

      if (p === "/api/contracts") return json(await fetchContracts(), cab);
      if (p === "/api/pm") return json(await fetchPM(), cab);
      if (p === "/api/px") return json(await fetchPx(url.searchParams.get("s") || "ONDS"), cab);
      if (p === "/api/intra") return json(await fetchIntra(url.searchParams.get("s") || "ONDS"), cab);
      if (p === "/api/bce") return json(await fetchBCE(url.searchParams.get("m"),
        url.searchParams.get("desde"), url.searchParams.get("hasta")), cab);
      if (p === "/api/news") return json(await fetchNews(url.searchParams.get("region") || "Pentágono"), cab);
      if (p === "/api/pmq") return json(await fetchPMQ(Number(url.searchParams.get("pages")) || 3), cab);
      if (p === "/api/pmh") return json(await fetchPMHist(url.searchParams.get("t"), url.searchParams.get("i")), cab);
      if (p === "/api/relaciones") return json(await fetchRelaciones(env, Number(url.searchParams.get("n")) || 12, Number(url.searchParams.get("desde")) || 0, url.searchParams.get("amplitud")), cab);
      if (p === "/api/relaciones/todo") return json(await relAcumulado(env), cab);
      if (p === "/api/relaciones/agente") return json(await relAgente(env), cab);
      if (p === "/api/pago") return json(await verificarPago(env, url.searchParams.get("sig")), cab);
      if (p === "/api/chat") return json(await chatResponder(env, url.searchParams.get("q"), url.searchParams.get("estado"), url.searchParams.get("hist")), cab);
      if (p === "/api/ynews") return json(await fetchYNews(url.searchParams.get("s")), cab);
      if (p === "/api/contratista") return json(await fetchContratista(url.searchParams.get("n")), cab);
      if (p === "/api/litigios") return json(await fetchLitigios(Number(url.searchParams.get("d")) || 365, url.searchParams.get("tk")), cab);
      if (p === "/api/edgar") return json(await fetchEdgar(Number(url.searchParams.get("d")) || 30), cab);
      if (p === "/api/paper") return json(await paperState(env), cab);
      if (p === "/api/aprendizaje") return json(await aprendizaje(env), cab);
      if (p === "/api/coherencia") return json(await coherencia(env, {
        usarIA: url.searchParams.get("ia") !== "0",
        maxNodos: Number(url.searchParams.get("nodos")) || 14
      }), cab);
      if (p === "/api/paper/snap") return json(await paperSnap(env));
      if (p === "/api/paper/settle") return json(await paperSettle(env, Number(url.searchParams.get("n")) || 60));
      if (p === "/api/history") return json(await getHistory(env), cab);
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
      // Agente de barrido logico: avanza un trozo del grafo cada dia.
      try { await relAgente(env); } catch (e) {}
      ENV_KV = env.RADAR || null;
      try { await paperSnap(env); } catch (e) {}
      try { await paperSettle(env, 40); } catch (e) {}
      /* Reaprender despues de liquidar: es el unico momento en que hay datos
         nuevos. Se guarda para que /api/pmq no tenga que recontar en cada
         peticion, que con 1000 claves de KV seria carisimo. */
      try {
        const ap = await aprendizaje(env);
        if (ap && ap.lambda && isFinite(ap.lambda.lam)) {
          await env.RADAR.put("aprendido:lambda", JSON.stringify(ap.lambda));
          await env.RADAR.put("aprendido:resumen", JSON.stringify({
            ts: ap.ts, totalLiquidadas: ap.totalLiquidadas, tipos: ap.tipos,
            nCalibracion: ap.nCalibracion,
            calibracion: ap.calibracion ? {
              fiabilidad: ap.calibracion.fiabilidad,
              resolucion: ap.calibracion.resolucion,
              incertidumbre: ap.calibracion.incertidumbre
            } : null
          }));
        }
      } catch (e) {}
    })());
  }
};
