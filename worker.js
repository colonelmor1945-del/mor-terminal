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


/* ---------- PRECIOS (server-side; Stooq bloquea CORS al navegador) ---------- */
async function fetchPx(sym) {
  const clean = String(sym).toLowerCase().replace(/[^a-z0-9.\-]/g, "");
  const urls = [
    "https://stooq.com/q/d/l/?s=" + clean + "&i=d",
    "https://stooq.pl/q/d/l/?s=" + clean + "&i=d"
  ];
  let last = "";
  for (const u of urls) {
    try {
      const r = await fetch(u, { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" } });
      if (!r.ok) { last = "HTTP " + r.status; continue; }
      const txt = await r.text();
      const lines = txt.trim().split("\n");
      if (lines.length < 30) { last = "pocos datos"; continue; }
      const head = lines[0].toLowerCase().split(",");
      const iD = head.indexOf("date"), iC = head.indexOf("close");
      if (iD < 0 || iC < 0) { last = "formato"; continue; }
      const d = [], c = [];
      for (let i = 1; i < lines.length; i++) {
        const p = lines[i].split(",");
        const v = parseFloat(p[iC]);
        if (p[iD] && isFinite(v) && v > 0) { d.push(p[iD]); c.push(v); }
      }
      if (c.length < 30) { last = "serie corta"; continue; }
      const keep = 400;
      return { s: clean, d: d.slice(-keep), c: c.slice(-keep) };
    } catch (e) { last = String(e.message || e); }
  }
  throw new Error("Precios no disponibles (" + last + ")");
}

const HTML = `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>MOR TERMINAL</title>
<style>
  :root{--bg:#05080e;--panel:#0c121c;--panel2:#111a27;--border:#1b2534;--text:#cfdae8;--dim:#65798f;
        --amber:#ffb020;--green:#31e08a;--red:#ff5f6d;--cyan:#2ed3ff;--violet:#b18cff;}
  *{margin:0;padding:0;box-sizing:border-box;}
  body{background:var(--bg);color:var(--text);font-family:"SF Mono","Cascadia Code",Consolas,monospace;font-size:13px;min-height:100vh;}
  body:before{content:"";position:fixed;inset:0;background:radial-gradient(900px 500px at 15% -10%,rgba(255,176,32,.07),transparent 60%),radial-gradient(900px 500px at 85% -10%,rgba(46,211,255,.07),transparent 60%);pointer-events:none;z-index:0;}
  .topbar{display:flex;align-items:center;gap:16px;padding:9px 16px;border-bottom:1px solid var(--border);
          background:rgba(8,13,21,.92);backdrop-filter:blur(8px);position:sticky;top:0;z-index:20;flex-wrap:wrap;}
  .logo{color:var(--amber);font-size:14px;letter-spacing:3px;font-weight:bold;}
  .logo i{display:inline-block;width:8px;height:8px;background:var(--amber);margin-right:7px;box-shadow:0 0 10px var(--amber);animation:pulse 2s infinite;}
  @keyframes pulse{0%,100%{opacity:1}50%{opacity:.35}}
  .tabs{display:flex;gap:2px;flex-wrap:wrap;}
  .tabs button{background:none;border:none;border-bottom:2px solid transparent;color:var(--dim);padding:7px 13px;
               font-family:inherit;font-size:11.5px;letter-spacing:1px;cursor:pointer;}
  .tabs button:hover{color:var(--text);}
  .tabs button.active{color:var(--amber);border-bottom-color:var(--amber);}
  .clock{margin-left:auto;color:var(--dim);font-size:11px;}
  .tape{overflow:hidden;border-bottom:1px solid var(--border);background:#070c14;white-space:nowrap;position:relative;z-index:1;min-height:24px;}
  .tape-inner{display:inline-block;padding:5px 0;animation:scroll 70s linear infinite;}
  @keyframes scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}
  .tk{margin:0 20px;font-size:11px;color:var(--dim);}
  .tk b{color:var(--text);font-weight:normal;}
  .up{color:var(--green)} .down{color:var(--red)}
  main{padding:14px 16px;position:relative;z-index:1;}
  .srcbar{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px;align-items:center;}
  .src{display:flex;align-items:center;gap:6px;background:var(--panel);border:1px solid var(--border);padding:4px 10px;border-radius:99px;font-size:10.5px;color:var(--dim);}
  .src .d{width:7px;height:7px;border-radius:50%;background:var(--dim);}
  .src.ok .d{background:var(--green);box-shadow:0 0 8px var(--green);}
  .src.load .d{background:var(--amber);animation:pulse 1s infinite;}
  .src.bad .d{background:var(--red);}
  .src.ok{color:var(--text);} .src.bad{color:var(--red);border-color:rgba(255,95,109,.35);}
  #q{background:var(--panel);border:1px solid var(--border);color:var(--text);padding:9px 13px;font-family:inherit;
     font-size:13px;width:100%;margin-bottom:13px;border-radius:3px;}
  #q:focus{outline:none;border-color:var(--amber);box-shadow:0 0 0 2px rgba(255,176,32,.12);}
  .stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:9px;margin-bottom:14px;}
  .stat{background:linear-gradient(160deg,var(--panel2),var(--panel));border:1px solid var(--border);
        border-left:3px solid var(--amber);padding:11px 13px;}
  .stat.c-cyan{border-left-color:var(--cyan)} .stat.c-green{border-left-color:var(--green)} .stat.c-violet{border-left-color:var(--violet)}
  .stat .label{color:var(--dim);font-size:9.5px;text-transform:uppercase;letter-spacing:1.2px;}
  .stat .value{font-size:23px;margin-top:3px;color:var(--text);font-variant-numeric:tabular-nums;}
  .stat .sub{color:var(--dim);font-size:10px;margin-top:2px;}
  .grid2{display:grid;grid-template-columns:1fr 1fr;gap:12px;}
  @media(max-width:980px){.grid2{grid-template-columns:1fr}}
  .panel{background:var(--panel);border:1px solid var(--border);margin-bottom:12px;border-radius:3px;overflow:hidden;}
  .panel h2{font-size:10.5px;letter-spacing:1.8px;color:var(--dim);text-transform:uppercase;padding:9px 13px;
            border-bottom:1px solid var(--border);display:flex;justify-content:space-between;align-items:center;background:rgba(255,255,255,.012);}
  .panel h2 b{color:var(--text);font-weight:normal;}
  table{width:100%;border-collapse:collapse}
  th{text-align:left;color:var(--dim);font-size:9.5px;text-transform:uppercase;letter-spacing:1px;padding:8px 12px;
     border-bottom:1px solid var(--border);cursor:pointer;user-select:none;white-space:nowrap;}
  th:hover{color:var(--amber)}
  td{padding:8px 12px;border-bottom:1px solid #101823;vertical-align:top;}
  tr:last-child td{border-bottom:none}
  tr:hover td{background:#111a26}
  .amt{color:var(--green);white-space:nowrap;font-variant-numeric:tabular-nums}
  .num{white-space:nowrap;font-variant-numeric:tabular-nums}
  .tag{display:inline-block;font-size:9.5px;padding:2px 6px;border:1px solid;margin-right:4px;border-radius:3px;white-space:nowrap;}
  .t-dim{color:var(--dim);border-color:#2a3546} .t-amber{color:var(--amber);border-color:rgba(255,176,32,.5);background:rgba(255,176,32,.07)}
  .t-green{color:var(--green);border-color:rgba(49,224,138,.5)} .t-red{color:var(--red);border-color:rgba(255,95,109,.5)}
  .t-cyan{color:var(--cyan);border-color:rgba(46,211,255,.5)} .t-violet{color:var(--violet);border-color:rgba(177,140,255,.5);background:rgba(177,140,255,.08)}
  .desc{color:var(--dim);font-size:11px;max-width:430px;line-height:1.45}
  a{color:var(--cyan);text-decoration:none} a:hover{text-decoration:underline}
  .links a{font-size:11px;margin-right:8px;white-space:nowrap}
  .chips{display:flex;gap:6px;margin:0 0 11px;flex-wrap:wrap;align-items:center}
  .chips button,.btn,select.btn{background:var(--panel2);border:1px solid var(--border);color:var(--text);padding:6px 11px;
                     font-family:inherit;font-size:11px;cursor:pointer;border-radius:3px;}
  .chips button.active{border-color:var(--cyan);color:var(--cyan);background:rgba(46,211,255,.08)}
  .btn:hover{border-color:var(--amber);color:var(--amber)}
  .star{cursor:pointer;font-size:15px;color:#33415a} .star.on{color:var(--amber);text-shadow:0 0 8px rgba(255,176,32,.6)}
  .bar{height:5px;background:#182233;margin-top:4px;position:relative;border-radius:3px;overflow:hidden}
  .bar i{position:absolute;left:0;top:0;bottom:0;background:linear-gradient(90deg,var(--cyan),var(--green))}
  .hbar{display:flex;align-items:center;gap:8px;padding:5px 13px}
  .hbar .nm{width:220px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:11px}
  .hbar .tr{flex:1;height:14px;background:#131d2b;border-radius:2px;overflow:hidden;position:relative}
  .hbar .tr i{position:absolute;left:0;top:0;bottom:0;background:linear-gradient(90deg,rgba(255,176,32,.85),rgba(255,176,32,.3))}
  .hbar.p .tr i{background:linear-gradient(90deg,#2c3a4d,#22303f)}
  .hbar .vl{width:78px;text-align:right;font-size:11px;color:var(--green);font-variant-numeric:tabular-nums}
  .news-item{border-bottom:1px solid #101823;padding:11px 13px}
  .news-item:last-child{border-bottom:none}
  .news-item .src2{color:var(--dim);font-size:10px;margin-top:4px}
  .status{color:var(--dim);font-size:11px;padding:9px 13px;line-height:1.5}
  .err{color:var(--red)}
  .match{border-left:3px solid var(--violet);padding:10px 13px;border-bottom:1px solid #101823;background:rgba(177,140,255,.04)}
  .sk{height:11px;background:linear-gradient(90deg,#131c28,#1c2736,#131c28);background-size:200% 100%;animation:sh 1.3s infinite;border-radius:3px;margin:9px 13px}
  @keyframes sh{0%{background-position:200% 0}100%{background-position:-200% 0}}
  .empty{padding:26px 13px;text-align:center;color:var(--dim);font-size:11.5px;line-height:1.7}
  .empty .big{font-size:24px;opacity:.4;display:block;margin-bottom:7px}
  footer{color:var(--dim);font-size:10px;line-height:1.7;padding:13px 16px;border-top:1px solid var(--border);position:relative;z-index:1}
  .kbd{border:1px solid var(--border);padding:0 5px;border-radius:3px;font-size:10px;color:var(--dim)}
</style>
</head>
<body>

<div class="topbar">
  <div class="logo"><i></i>MOR TERMINAL</div>
  <div class="tabs">
    <button id="tab-ov" class="active">1·OVERVIEW</button>
    <button id="tab-con">2·CONTRATOS</button>
    <button id="tab-sc">3·SMALL CAPS</button>
    <button id="tab-pm">4·POLYMARKET</button>
    <button id="tab-news">5·NOTICIAS</button>
    <button id="tab-hist">6·HISTÓRICO</button>
  </div>
  <div class="clock" id="clock"></div>
</div>
<div class="tape"><div class="tape-inner" id="tape"></div></div>

<main>
<div class="srcbar">
  <div class="src load" id="s-con"><span class="d"></span><span>Contratos DoD</span></div>
  <div class="src load" id="s-pm"><span class="d"></span><span>Polymarket</span></div>
  <div class="src load" id="s-news"><span class="d"></span><span>Noticias</span></div>
  <div class="src load" id="s-hist"><span class="d"></span><span>Histórico</span></div>
  <button class="btn" id="b-reload">⟳ Recargar datos</button>
</div>

<input id="q" placeholder="🔍 Buscar…   (/ para saltar aquí · teclas 1-6 cambian de pestaña)">

<div id="v-ov">
  <div class="stats">
    <div class="stat"><div class="label">Contratos DoD 30d</div><div class="value" id="ov-con">—</div><div class="sub" id="ov-con-s">cargando…</div></div>
    <div class="stat c-green"><div class="label">Fuera de gigantes</div><div class="value" id="ov-radar">—</div><div class="sub" id="ov-radar-s">—</div></div>
    <div class="stat c-cyan"><div class="label">Vol. Polymarket 24h</div><div class="value" id="ov-pm">—</div><div class="sub" id="ov-pm-s">—</div></div>
    <div class="stat c-violet"><div class="label">⚡ Cruces detectados</div><div class="value" id="ov-match">—</div><div class="sub">contrato ↔ small cap</div></div>
  </div>
  <div class="panel"><h2>⚡ CRUCES: ADJUDICATARIOS DoD ↔ UNIVERSO SMALL CAP</h2><div id="ov-matches"></div></div>
  <div class="grid2">
    <div class="panel"><h2>TOP CONTRATOS SIN GIGANTES <b id="ov-topcon-n"></b></h2><div id="ov-topcon"></div></div>
    <div class="panel"><h2>MAYORES MOVIMIENTOS POLYMARKET 24H</h2><div id="ov-toppm"></div></div>
  </div>
  <div class="grid2">
    <div class="panel"><h2>⭐ TU WATCHLIST</h2><div id="ov-watch"></div></div>
    <div class="panel"><h2>UNIVERSO SMALL CAP POR REGIÓN</h2><div id="ov-regions"></div></div>
  </div>
</div>

<div id="v-con" style="display:none">
  <div class="chips">
    <button id="f-all" class="active">TODOS</button>
    <button id="f-radar">⚡ SIN GIGANTES</button>
    <select id="f-min" class="btn">
      <option value="0">Importe mín: cualquiera</option>
      <option value="10000000">≥ $10M</option>
      <option value="50000000">≥ $50M</option>
      <option value="100000000">≥ $100M</option>
    </select>
    <span class="status" id="status-con"></span>
  </div>
  <div class="panel"><h2>DISTRIBUCIÓN — TOP 12 ADJUDICATARIOS</h2><div id="con-chart"></div></div>
  <div class="panel">
    <table><thead><tr>
      <th data-k="name">Adjudicatario ⇅</th><th data-k="amount">Importe ⇅</th>
      <th data-k="date">Fecha ⇅</th><th>Señal</th><th>Descripción</th>
    </tr></thead><tbody id="rows-con"></tbody></table>
  </div>
</div>

<div id="v-sc" style="display:none">
  <div class="chips" id="region-chips"></div>
  <div class="chips">
    <button class="btn" id="b-csv">⬇ Exportar CSV</button>
    <button id="f-watch" class="btn">⭐ Solo watchlist</button>
    <span class="status" id="status-sc"></span>
  </div>
  <div class="panel"><table><thead><tr>
    <th style="width:34px"></th><th data-k="name">Empresa ⇅</th><th data-k="country">País ⇅</th>
    <th data-k="size">Tamaño ⇅</th><th>Nicho</th><th>Abrir en</th>
  </tr></thead><tbody id="rows-sc"></tbody></table></div>
  <div class="status">Capitalizaciones aproximadas (micro &lt; $300M &lt; small &lt; $2B &lt; mid). Verifícalas en Simply Wall St. Lista curada, no es recomendación de inversión.</div>
</div>

<div id="v-pm" style="display:none">
  <div class="chips">
    <button id="pf-all" class="active">TODOS</button>
    <button id="pf-sig">⚡ SOLO CON SEÑAL</button>
    <span class="status" id="status-pm"></span>
  </div>
  <div class="panel">
    <table><thead><tr>
      <th data-k="q">Mercado ⇅</th><th data-k="price">Prob. ⇅</th><th data-k="chg">Δ 24h ⇅</th>
      <th data-k="vol24">Vol 24h ⇅</th><th data-k="liq">Liquidez ⇅</th><th data-k="spread">Spread ⇅</th><th>Señales</th>
    </tr></thead><tbody id="rows-pm"></tbody></table>
  </div>
</div>

<div id="v-news" style="display:none">
  <div class="chips" id="news-chips"></div>
  <div class="panel">
    <div class="status" id="news-status"></div>
    <div id="rows-news"></div>
  </div>
</div>

<div id="v-hist" style="display:none">
  <div class="chips"><button class="btn" id="b-run">▶ Ejecutar snapshot + alerta ahora</button><span class="status" id="status-hist"></span></div>
  <div class="panel"><h2>EVOLUCIÓN DIARIA</h2><div id="hist-chart"></div></div>
  <div class="panel">
    <table><thead><tr><th>Fecha</th><th>Contratos</th><th>Total</th><th>Sin gigantes</th><th>⚡ Cruces</th><th>Alerta</th></tr></thead>
    <tbody id="rows-hist"></tbody></table>
  </div>
</div>
</main>

<footer>
  <span class="kbd">/</span> buscar · <span class="kbd">1-6</span> pestañas · Fuentes: USAspending (contratos oficiales EE.UU.) · Polymarket · Google News · Enlaces abren en tu sesión de TradingView y Simply Wall St.<br>
  SEÑALES PM: MOVER |Δ24h|≥5pts · SPREAD ANCHO ≥2¢ · HOT vol&gt;$1M · CRUCES por coincidencia de nombre — verifícalos siempre a mano. Nada aquí es recomendación de inversión.
</footer>
<script>
var TAB="ov", SORT={key:"amount",dir:-1}, PRIMEF="all", PMF="all", REGION="Todas", NEWSREG="Pentágono", WATCHONLY=false;
var CON=[], PM=[], HIST=[], MATCHES=[], newsCache={}, ERR={};
function $(id){return document.getElementById(id);}
function fmt(n){return n>=1e9?"$"+(n/1e9).toFixed(2)+"B":n>=1e6?"$"+(n/1e6).toFixed(1)+"M":"$"+Math.round(n/1e3)+"K";}
function esc(s){return (s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;");}
function tick(){$("clock").textContent=new Date().toLocaleString("es-ES");}
setInterval(tick,1000);tick();

var WATCH={};
try{WATCH=JSON.parse(localStorage.getItem("mor_watch")||"{}");}catch(e){WATCH={};}
function saveWatch(){try{localStorage.setItem("mor_watch",JSON.stringify(WATCH));}catch(e){}}

var SC=SC_DATA;
var SIZES=["MICRO","SMALL","MID"];
var REGIONS=["Todas","Norteamérica","Europa","Europa Este","Oriente Medio","Asia Sur","Asia Este","Oceanía","Sudamérica"];
var NEWSQ=NEWS_QUERIES;
var NEWSREGIONS=Object.keys(NEWSQ);
var PRIMES=PRIMES_DATA;

function setSrc(id,state,txt){
  var el=$(id); if(!el) return;
  el.className="src "+state;
  if(txt) el.lastElementChild.textContent=txt;
}
function sk(n){var s="";for(var i=0;i<(n||3);i++){s+="<div class='sk' style='width:"+(94-i*13)+"%'></div>";}return s;}
function emptyBox(icon,msg){return "<div class='empty'><span class='big'>"+icon+"</span>"+msg+"</div>";}

function pmSignals(m){var s=[];
  if(Math.abs(m.chg)>=0.05)s.push(["MOVER","t-amber"]);
  if(m.spread>=0.02)s.push(["SPREAD ANCHO","t-red"]);
  if(m.vol24>=1e6)s.push(["HOT","t-cyan"]);
  return s;}

function api(path){return fetch(path,{cache:"no-store"}).then(function(r){return r.json();});}

function contractsDirect(){
  var end=new Date(), start=new Date(end-30*864e5);
  return fetch("https://api.usaspending.gov/api/v2/search/spending_by_award/",{
    method:"POST",headers:{"Content-Type":"application/json"},
    body:JSON.stringify({filters:{award_type_codes:["A","B","C","D"],
      agencies:[{type:"awarding",tier:"toptier",name:"Department of Defense"}],
      time_period:[{start_date:start.toISOString().slice(0,10),end_date:end.toISOString().slice(0,10)}]},
      fields:["Award ID","Recipient Name","Award Amount","Description","Start Date"],
      sort:"Award Amount",order:"desc",limit:100,page:1})
  }).then(function(r){if(!r.ok)throw new Error("HTTP "+r.status);return r.json();})
   .then(function(j){return (j.results||[]).map(function(r){
      var nm=r["Recipient Name"]||"—";
      return {name:nm,amount:r["Award Amount"]||0,date:r["Start Date"]||"",desc:r["Description"]||"",
              prime:PRIMES.some(function(p){return nm.toUpperCase().indexOf(p)>=0;})};});});
}

function loadContracts(){
  setSrc("s-con","load","Contratos DoD");
  $("con-chart").innerHTML=sk(6);$("ov-topcon").innerHTML=sk(4);
  api("/api/contracts").then(function(d){
    if(Array.isArray(d)&&d.length) return d;
    throw new Error((d&&d.error)||"vacio");
  }).catch(function(){ return contractsDirect(); })
    .then(function(d){
      CON=d; ERR.con=null;
      setSrc("s-con","ok","Contratos DoD · "+d.length);
      $("status-con").textContent="● "+d.length+" contratos · últimos 30 días";
      findMatches(); render();
    }).catch(function(e){
      CON=[]; ERR.con=String(e.message||e);
      setSrc("s-con","bad","Contratos DoD · error");
      $("status-con").innerHTML="<span class='err'>No disponible: "+esc(ERR.con)+"</span>";
      render();
    });
}

function loadPM(){
  setSrc("s-pm","load","Polymarket");
  api("/api/pm").then(function(d){
    if(!Array.isArray(d)) throw new Error((d&&d.error)||"error");
    PM=d;PM.forEach(function(m){m.sigs=pmSignals(m);});
    ERR.pm=null; setSrc("s-pm","ok","Polymarket · "+d.length);
    $("status-pm").textContent="● "+PM.length+" mercados por volumen 24h";
    buildTape(); render();
  }).catch(function(e){
    PM=[];ERR.pm=String(e.message||e); setSrc("s-pm","bad","Polymarket · error");
    $("status-pm").innerHTML="<span class='err'>No disponible</span>"; render();
  });
}

function loadHist(){
  setSrc("s-hist","load","Histórico");
  api("/api/history").then(function(d){
    HIST=(d&&d.snapshots)||[];
    setSrc("s-hist","ok","Histórico · "+HIST.length);
    $("status-hist").textContent=HIST.length?("● "+HIST.length+" snapshots"):"Sin snapshots todavía";
    render();
  }).catch(function(){setSrc("s-hist","bad","Histórico · error");});
}

function newsDirect(reg){
  var f=NEWSQ[reg]||NEWSQ["Pentágono"];
  var rss="https://news.google.com/rss/search?q="+encodeURIComponent(f.q)+"&hl="+f.hl+"&gl="+f.gl+"&ceid="+f.ceid;
  return fetch("https://api.rss2json.com/v1/api.json?count=25&rss_url="+encodeURIComponent(rss))
    .then(function(r){if(!r.ok)throw new Error("HTTP "+r.status);return r.json();})
    .then(function(j){
      if(!j.items||!j.items.length) throw new Error("sin items");
      return j.items.map(function(i){return {title:i.title,link:i.link,date:(i.pubDate||"").slice(0,16),src:i.author||""};});
    });
}

function loadNews(reg){
  if(newsCache[reg]){renderNews();return;}
  setSrc("s-news","load","Noticias");
  $("news-status").textContent="Cargando noticias de "+reg+"…";
  $("rows-news").innerHTML=sk(5);
  api("/api/news?region="+encodeURIComponent(reg)).then(function(d){
    if(Array.isArray(d)&&d.length) return d;
    throw new Error("worker sin datos");
  }).catch(function(){ return newsDirect(reg); })
    .then(function(d){
      newsCache[reg]=d; setSrc("s-news","ok","Noticias · "+d.length);
      $("news-status").textContent="● "+d.length+" titulares — "+reg;
      renderNews();
    }).catch(function(e){
      newsCache[reg]=[]; setSrc("s-news","bad","Noticias · error");
      $("news-status").innerHTML="<span class='err'>Fuente no disponible ahora mismo. Prueba otra región o pulsa Recargar.</span>";
      renderNews();
    });
}

function buildTape(){
  if(!PM.length){$("tape").innerHTML="<span class='tk'>Sin datos de mercado</span>";return;}
  var items=PM.slice(0,22).map(function(m){
    return '<span class="tk"><b>'+esc(m.q.slice(0,52))+"</b> "+(m.price*100).toFixed(1)+'% <span class="'+(m.chg>=0?"up":"down")+'">'+(m.chg>=0?"▲":"▼")+Math.abs(m.chg*100).toFixed(1)+"</span></span>";}).join("");
  $("tape").innerHTML=items+items;
}
function findMatches(){
  MATCHES=[];
  CON.forEach(function(c){var u=c.name.toUpperCase();
    SC.forEach(function(s){if(u.indexOf(s.token)>=0)MATCHES.push({con:c,sc:s});});});
}

function setTab(t){TAB=t;
  ["ov","con","sc","pm","news","hist"].forEach(function(x){
    $("v-"+x).style.display=x===t?"":"none";
    $("tab-"+x).classList.toggle("active",x===t);});
  if(t==="news")loadNews(NEWSREG);
  render();}

function chips(elId,list,current,fn){
  var el=$(elId);el.innerHTML="";
  list.forEach(function(r){var b=document.createElement("button");b.textContent=r;
    if(r===current)b.className="active";
    b.onclick=function(){fn(r);};el.appendChild(b);});}

function sortRows(rows,def){
  if(!rows.length)return rows;
  var k=SORT.key in rows[0]?SORT.key:def;
  rows.sort(function(a,b){var va=a[k],vb=b[k];return (va>vb?1:va<vb?-1:0)*SORT.dir;});
  return rows;}

function hbars(list,max){
  if(!list.length) return "";
  return list.map(function(x){
    var w=Math.max(2,Math.round(100*x.amount/max));
    return "<div class='hbar"+(x.prime?" p":"")+"'><div class='nm' title='"+esc(x.name)+"'>"+esc(x.name)+"</div>"+
    "<div class='tr'><i style='width:"+w+"%'></i></div><div class='vl'>"+fmt(x.amount)+"</div></div>";}).join("");
}

function renderNews(){
  var q=$("q").value.toLowerCase();
  var arr=newsCache[NEWSREG]||[];
  var items=arr.filter(function(n){return !q||n.title.toLowerCase().indexOf(q)>=0;});
  $("rows-news").innerHTML=items.length?items.map(function(n){
    return '<div class="news-item"><a href="'+n.link+'" target="_blank" rel="noopener">'+esc(n.title)+'</a><div class="src2">'+esc(n.src)+(n.src?" · ":"")+n.date+"</div></div>";}).join("")
    :emptyBox("📰",arr.length?"Ningún titular coincide con tu búsqueda.":"Sin titulares para esta región ahora mismo.<br>Prueba otra región o pulsa Recargar datos.");}

function scRow(s){
  return "<tr><td><span class='star "+(WATCH[s.tk]?"on":"")+"' data-tk='"+s.tk+"'>"+(WATCH[s.tk]?"★":"☆")+"</span></td>"+
  "<td>"+esc(s.name)+"<div class='status' style='padding:0;font-size:10px'>"+s.tk+"</div></td><td>"+esc(s.country)+"</td>"+
  "<td><span class='tag "+(s.size===0?"t-red":s.size===1?"t-amber":"t-green")+"'>"+SIZES[s.size]+"</span></td>"+
  "<td class='desc'>"+esc(s.niche)+"</td>"+
  "<td class='links'><a target='_blank' rel='noopener' href='https://www.tradingview.com/chart/?symbol="+encodeURIComponent(s.tk)+"'>📈 TradingView</a>"+
  "<a target='_blank' rel='noopener' href='https://simplywall.st/search?query="+encodeURIComponent(s.name)+"'>🧱 Simply Wall St</a></td></tr>";}

function render(){
  var q=$("q").value.toLowerCase();
  var radar=CON.filter(function(c){return !c.prime;});

  $("ov-con").textContent=CON.length?fmt(CON.reduce(function(a,c){return a+c.amount;},0)):(ERR.con?"—":"…");
  $("ov-con-s").textContent=CON.length?(CON.length+" contratos · 30 días"):(ERR.con?"fuente no disponible":"cargando…");
  $("ov-radar").textContent=CON.length?radar.length:"—";
  $("ov-radar-s").textContent=CON.length?(Math.round(100*radar.length/CON.length)+"% del total · "+fmt(radar.reduce(function(a,c){return a+c.amount;},0))):"—";
  $("ov-pm").textContent=PM.length?fmt(PM.reduce(function(a,m){return a+m.vol24;},0)):"—";
  $("ov-pm-s").textContent=PM.length?(PM.length+" mercados activos"):"—";
  $("ov-match").textContent=MATCHES.length;

  $("ov-matches").innerHTML=MATCHES.length?MATCHES.map(function(m){
    return '<div class="match"><span class="tag t-violet">MATCH</span> <b>'+esc(m.con.name)+"</b> ganó <span class='amt'>"+fmt(m.con.amount)+"</span> — coincide con <b>"+esc(m.sc.name)+"</b> ("+m.sc.tk+') <a target="_blank" rel="noopener" href="https://simplywall.st/search?query='+encodeURIComponent(m.sc.name)+'">ver ficha →</a></div>';}).join("")
    :(CON.length?emptyBox("🎯","Ningún cruce en los últimos 30 días.<br>Es lo normal: cuando salte uno, será una señal de verdad.")
      :(ERR.con?emptyBox("⚠️","No se pueden leer los contratos ahora mismo.<br>Pulsa Recargar datos.") : sk(2)));

  var mx=radar.length?radar[0].amount:1;
  $("ov-topcon-n").textContent=radar.length?("· "+radar.length):"";
  $("ov-topcon").innerHTML=radar.length?hbars(radar.slice(0,8),mx)
    :(ERR.con?emptyBox("⚠️","Fuente no disponible"):(CON.length?emptyBox("—","Sin contratos fuera de los gigantes"):sk(4)));

  var movers=PM.slice().sort(function(a,b){return Math.abs(b.chg)-Math.abs(a.chg);}).slice(0,8);
  $("ov-toppm").innerHTML=movers.length?("<table><tbody>"+movers.map(function(m){
    return "<tr><td class='desc' style='max-width:330px'><a target='_blank' rel='noopener' href='"+m.url+"'>"+esc(m.q.slice(0,64))+"</a></td>"+
    "<td class='num' style='text-align:right'>"+(m.price*100).toFixed(1)+"%</td>"+
    "<td class='num "+(m.chg>=0?"up":"down")+"' style='text-align:right'>"+(m.chg>=0?"+":"")+(m.chg*100).toFixed(1)+"</td></tr>";}).join("")+"</tbody></table>")
    :sk(4);

  var wl=SC.filter(function(s){return WATCH[s.tk];});
  $("ov-watch").innerHTML=wl.length?("<table><tbody>"+wl.map(function(s){
    return "<tr><td>"+esc(s.name)+"</td><td class='desc'>"+s.tk+"</td><td class='links' style='text-align:right'><a target='_blank' rel='noopener' href='https://www.tradingview.com/chart/?symbol="+encodeURIComponent(s.tk)+"'>📈</a> <a target='_blank' rel='noopener' href='https://simplywall.st/search?query="+encodeURIComponent(s.name)+"'>🧱</a></td></tr>";}).join("")+"</tbody></table>")
    :emptyBox("⭐","Marca estrellas ☆ en la pestaña Small Caps.<br>Se guardan en este navegador.");

  var counts={};SC.forEach(function(s){counts[s.region]=(counts[s.region]||0)+1;});
  var rk=Object.keys(counts).sort(function(a,b){return counts[b]-counts[a];});
  var rmax=counts[rk[0]]||1;
  $("ov-regions").innerHTML=rk.map(function(r){
    var w=Math.round(100*counts[r]/rmax);
    return "<div class='hbar'><div class='nm'>"+r+"</div><div class='tr'><i style='width:"+w+"%'></i></div><div class='vl' style='color:var(--text)'>"+counts[r]+"</div></div>";}).join("");

  if(TAB==="con"){
    var min=+$("f-min").value;
    var rows=CON.filter(function(d){return (PRIMEF==="all"||!d.prime)&&d.amount>=min&&(!q||(d.name+" "+d.desc).toLowerCase().indexOf(q)>=0);});
    var top=rows.slice().sort(function(a,b){return b.amount-a.amount;}).slice(0,12);
    $("con-chart").innerHTML=top.length?hbars(top,top[0].amount):(ERR.con?emptyBox("⚠️","Fuente no disponible ahora mismo.<br>Pulsa Recargar datos arriba."):(CON.length?emptyBox("🔍","Ningún contrato con esos filtros"):sk(6)));
    rows=sortRows(rows,"amount");
    $("rows-con").innerHTML=rows.length?rows.map(function(d){return "<tr><td>"+esc(d.name)+"</td><td class='amt'>"+fmt(d.amount)+"</td><td class='num'>"+d.date+"</td><td><span class='tag "+(d.prime?"t-dim":"t-amber")+"'>"+(d.prime?"GIGANTE":"⚡ RADAR")+"</span></td><td class='desc'>"+esc((d.desc||"").slice(0,150))+"</td></tr>";}).join("")
      :"<tr><td colspan='5'>"+(ERR.con?emptyBox("⚠️","Sin conexión con USAspending. Pulsa Recargar datos."):(CON.length?emptyBox("🔍","Nada coincide con los filtros"):sk(5)))+"</td></tr>";
  }
  if(TAB==="sc"){
    chips("region-chips",REGIONS,REGION,function(r){REGION=r;render();});
    var rows2=SC.filter(function(s){return (REGION==="Todas"||s.region===REGION)&&(!WATCHONLY||WATCH[s.tk])&&(!q||(s.name+" "+s.country+" "+s.niche+" "+s.tk).toLowerCase().indexOf(q)>=0);});
    $("status-sc").textContent=rows2.length+" de "+SC.length+" empresas";
    rows2=sortRows(rows2,"name");
    $("rows-sc").innerHTML=rows2.length?rows2.map(scRow).join(""):"<tr><td colspan='6'>"+emptyBox("🔍","Ninguna empresa con esos filtros")+"</td></tr>";
  }
  if(TAB==="pm"){
    var rows3=PM.filter(function(m){return (PMF==="all"||m.sigs.length>0)&&(!q||m.q.toLowerCase().indexOf(q)>=0);});
    rows3=sortRows(rows3,"vol24");
    $("rows-pm").innerHTML=rows3.length?rows3.map(function(m){var pct=(m.price*100).toFixed(1);
      return "<tr><td class='desc'><a target='_blank' rel='noopener' href='"+m.url+"'>"+esc(m.q)+"</a></td>"+
      "<td class='num' style='min-width:92px'>"+pct+"%<div class='bar'><i style='width:"+pct+"%'></i></div></td>"+
      "<td class='num "+(m.chg>=0?"up":"down")+"'>"+(m.chg>=0?"+":"")+(m.chg*100).toFixed(1)+" pts</td>"+
      "<td class='num'>"+fmt(m.vol24)+"</td><td class='num'>"+fmt(m.liq)+"</td><td class='num'>"+(m.spread*100).toFixed(1)+"¢</td>"+
      "<td>"+m.sigs.map(function(s){return "<span class='tag "+s[1]+"'>"+s[0]+"</span>";}).join("")+"</td></tr>";}).join("")
      :"<tr><td colspan='7'>"+(PM.length?emptyBox("🔍","Ningún mercado con esos filtros"):sk(5))+"</td></tr>";
  }
  if(TAB==="news"){chips("news-chips",NEWSREGIONS,NEWSREG,function(r){NEWSREG=r;loadNews(r);render();});renderNews();}
  if(TAB==="hist"){
    if(HIST.length){
      var hmax=Math.max.apply(null,HIST.map(function(h){return h.total||0;}))||1;
      $("hist-chart").innerHTML=HIST.slice(0,14).map(function(h){
        var w=Math.max(2,Math.round(100*(h.total||0)/hmax));
        return "<div class='hbar'><div class='nm'>"+h.date+"</div><div class='tr'><i style='width:"+w+"%'></i></div><div class='vl'>"+fmt(h.total||0)+"</div></div>";}).join("");
      $("rows-hist").innerHTML=HIST.map(function(h){
        return "<tr><td class='num'>"+h.date+"</td><td class='num'>"+h.n+"</td><td class='amt'>"+fmt(h.total)+"</td><td class='num'>"+h.radarN+"</td><td>"+((h.matches||[]).length?"<span class='tag t-violet'>"+h.matches.length+"</span>":"0")+"</td><td>"+(h.alerted?"📨":"—")+"</td></tr>";}).join("");
    } else {
      $("hist-chart").innerHTML=emptyBox("📊","Aún no hay snapshots.<br>Pulsa Ejecutar snapshot para crear el primero,<br>o espera al automático de mañana a las 07:00 UTC.");
      $("rows-hist").innerHTML="";
    }
  }
}

["ov","con","sc","pm","news","hist"].forEach(function(t){$("tab-"+t).onclick=function(){setTab(t);};});
$("q").oninput=render;
$("f-all").onclick=function(){PRIMEF="all";$("f-all").classList.add("active");$("f-radar").classList.remove("active");render();};
$("f-radar").onclick=function(){PRIMEF="radar";$("f-radar").classList.add("active");$("f-all").classList.remove("active");render();};
$("f-min").onchange=render;
$("pf-all").onclick=function(){PMF="all";$("pf-all").classList.add("active");$("pf-sig").classList.remove("active");render();};
$("pf-sig").onclick=function(){PMF="sig";$("pf-sig").classList.add("active");$("pf-all").classList.remove("active");render();};
$("f-watch").onclick=function(){WATCHONLY=!WATCHONLY;
  $("f-watch").style.borderColor=WATCHONLY?"var(--amber)":"";
  $("f-watch").style.color=WATCHONLY?"var(--amber)":"";render();};
$("rows-sc").onclick=function(e){var t=e.target;
  if(t.classList.contains("star")){var tk=t.getAttribute("data-tk");WATCH[tk]=!WATCH[tk];saveWatch();render();}};
document.querySelectorAll("th[data-k]").forEach(function(th){
  th.onclick=function(){var k=th.getAttribute("data-k");
    SORT=SORT.key===k?{key:k,dir:-SORT.dir}:{key:k,dir:1};render();};});
$("b-csv").onclick=function(){
  var NL=String.fromCharCode(10);
  var rows=[["Empresa","Ticker","Pais","Region","Tamano","Nicho","Watchlist"]];
  SC.forEach(function(s){rows.push([s.name,s.tk,s.country,s.region,SIZES[s.size],s.niche,WATCH[s.tk]?"SI":""]);});
  var csv=rows.map(function(r){return r.map(function(c){return '"'+String(c).replace(/"/g,'""')+'"';}).join(",");}).join(NL);
  var a=document.createElement("a");
  a.href=URL.createObjectURL(new Blob([csv],{type:"text/csv"}));
  a.download="smallcaps_defensa.csv";a.click();};
$("b-run").onclick=function(){
  $("status-hist").textContent="Ejecutando snapshot…";
  api("/api/run").then(function(d){
    $("status-hist").textContent=d.error?("Error: "+d.error):("Snapshot "+d.date+" guardado · cruces: "+((d.matches||[]).length)+(d.alerted?" · Telegram enviado":" · sin Telegram (configuralo en la guia)"));
    loadHist();}).catch(function(e){$("status-hist").innerHTML="<span class='err'>"+esc(String(e))+"</span>";});};
$("b-reload").onclick=function(){newsCache={};loadContracts();loadPM();loadHist();if(TAB==="news")loadNews(NEWSREG);};
document.addEventListener("keydown",function(e){
  if(e.key==="/"&&document.activeElement!==$("q")){e.preventDefault();$("q").focus();return;}
  if(document.activeElement===$("q"))return;
  var map={"1":"ov","2":"con","3":"sc","4":"pm","5":"news","6":"hist"};
  if(map[e.key])setTab(map[e.key]);});

loadContracts();loadPM();loadHist();render();
</script>
</body>
</html>`;

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
      if (p === "/api/px") return json(await fetchPx(url.searchParams.get("s") || "onds.us"));
      if (p === "/api/news") return json(await fetchNews(url.searchParams.get("region") || "Pentágono"));
      if (p === "/api/history") return json(await getHistory(env));
      if (p === "/api/run") return json(await dailyJob(env));
    } catch (e) {
      return json({ error: String(e && e.message || e) });
    }
    const page = HTML
      .replace("SC_DATA;", JSON.stringify(SC) + ";")
      .replace("NEWS_QUERIES;", JSON.stringify(NEWS_FEEDS) + ";")
      .replace("PRIMES_DATA;", JSON.stringify(PRIMES) + ";");
    return new Response(page, { headers: { "content-type": "text/html;charset=utf-8" } });
  },
  async scheduled(event, env, ctx) {
    ctx.waitUntil(dailyJob(env));
  }
};
