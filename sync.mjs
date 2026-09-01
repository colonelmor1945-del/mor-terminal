// Inserta index.html dentro de worker.js como plantilla `HTML`.
// Sin dependencias ni build real: node sync.mjs
// Existe para no mantener dos copias del terminal a mano (causa del desfase de agosto 2026).
import { readFileSync, writeFileSync } from "node:fs";

const BS = String.fromCharCode(92);   // barra invertida
const BT = String.fromCharCode(96);   // acento grave
const DOLLAR_BRACE = "$" + "{";

// Los literales de plantilla convierten CRLF a LF al parsear, así que normalizamos
// antes de embeber para que lo servido sea idéntico byte a byte a index.html.
const html = readFileSync("index.html", "utf8").split("\r\n").join("\n");
const worker = readFileSync("worker.js", "utf8");

// Escapado mínimo para meterlo en un literal de plantilla.
const esc = html
  .split(BS).join(BS + BS)
  .split(BT).join(BS + BT)
  .split(DOLLAR_BRACE).join(BS + DOLLAR_BRACE);

const START = "// <<< HTML GENERADO DESDE index.html — no editar a mano; regenerar con: node sync.mjs";
const END = "// >>> FIN HTML GENERADO";
const bloque = START + "\nconst HTML = " + BT + esc + BT + ";\n" + END;

let out;
const a = worker.indexOf(START);
const b = worker.indexOf(END);

if (a >= 0 && b > a) {
  out = worker.slice(0, a) + bloque + worker.slice(b + END.length);
} else {
  // Primera ejecución: sustituye el bloque `const HTML = ...` original.
  const i = worker.indexOf("const HTML = " + BT);
  const cierre = "</html>" + BT + ";";
  const j = worker.indexOf(cierre, i);
  if (i < 0 || j < 0) {
    console.error("No encuentro el bloque HTML en worker.js");
    process.exit(1);
  }
  out = worker.slice(0, i) + bloque + worker.slice(j + cierre.length);
}

writeFileSync("worker.js", out);
console.log("OK — index.html (" + html.length + " B) embebido en worker.js (" + out.length + " B)");
