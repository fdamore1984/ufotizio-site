// I file dei giochi stanno nel bucket R2 "ufotizio-games" (binding GAMES),
// perché index.wasm supera i 25 MB che Cloudflare Pages accetta per file.
// Qui si servono sotto /games/<gioco>/..., sullo stesso indirizzo del sito,
// così il gioco dentro l'iframe vede window.ufotizioCloud della pagina.

const TYPES = {
  html: "text/html; charset=utf-8",
  js: "text/javascript; charset=utf-8",
  wasm: "application/wasm",
  pck: "application/octet-stream",
  png: "image/png",
  json: "application/json",
};

export async function onRequest({ request, params, env }) {
  if (request.method !== "GET" && request.method !== "HEAD") {
    return new Response("Method not allowed", { status: 405 });
  }
  let key = (params.path || []).join("/");
  if (key === "" || key.endsWith("/")) key += "index.html";
  if (key.split("/").includes("..")) return new Response("Not found", { status: 404 });

  const object = await env.GAMES.get(key);
  if (object === null) return new Response("Not found", { status: 404 });

  const headers = new Headers();
  object.writeHttpMetadata(headers);
  const ext = key.split(".").pop();
  headers.set("content-type", TYPES[ext] || headers.get("content-type") || "application/octet-stream");
  headers.set("content-length", String(object.size));
  headers.set("etag", object.httpEtag);
  // Dopo un aggiornamento dei giochi si vede subito la versione nuova.
  headers.set("cache-control", "no-cache");
  return new Response(request.method === "HEAD" ? null : object.body, { headers });
}
