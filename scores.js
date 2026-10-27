/* CLASS LEADERBOARD CONNECTOR
   Every game includes this file. It sends a student's final score to your Google Sheet
   and the leaderboard page reads it back.

   SETUP: paste your Google Apps Script web app URL between the quotes below (see leaderboard-apps-script.gs).
   Leave it empty and the games still work, they just don't send scores. */
const SCORE_URL = "";

(function () {
  const NAME_KEY = "sd-player", ID_KEY = "sd-player-id", QUEUE_KEY = "sd-outbox";
  const store = {
    get(k) { try { return localStorage.getItem(k) || ""; } catch (e) { return ""; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };
  function playerId() {
    let id = store.get(ID_KEY);
    if (!id) { id = Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4); store.set(ID_KEY, id); }
    return id;
  }

  /* small name prompt shown only if the student never typed a name */
  function askName() {
    return new Promise(resolve => {
      const wrap = document.createElement("div");
      wrap.setAttribute("role", "dialog");
      wrap.setAttribute("aria-label", "Enter your name");
      wrap.style.cssText = "position:fixed;inset:0;background:rgba(23,32,51,.6);display:grid;place-items:center;z-index:99;padding:16px;font-family:Arial,Helvetica,sans-serif";
      wrap.innerHTML = `<form style="background:#fff;color:#172033;border-radius:18px;padding:24px;max-width:360px;width:100%;text-align:center;box-shadow:0 10px 40px rgba(0,0,0,.3)">
        <div style="font-size:40px">🏆</div><h2 style="margin:6px 0 8px;font-size:22px">Add your name to the leaderboard</h2>
        <input name="n" maxlength="24" required placeholder="Your name" style="width:100%;border:2px solid #dfe4ed;border-radius:10px;padding:12px;font:16px Arial;text-align:center">
        <button style="margin-top:14px;width:100%;border:0;border-radius:10px;padding:13px;background:#6577b8;color:#fff;font:bold 16px Arial;cursor:pointer">Send my score</button></form>`;
      document.body.appendChild(wrap);
      const form = wrap.querySelector("form");
      form.n.focus();
      form.onsubmit = e => { e.preventDefault(); const n = form.n.value.trim().slice(0, 24); if (!n) return; store.set(NAME_KEY, n); wrap.remove(); resolve(n); };
    });
  }

  async function post(entry) {
    try {
      const r = await fetch(SCORE_URL, { method: "POST", body: JSON.stringify(entry) });
      return r.ok;
    } catch (e) {
      try { await fetch(SCORE_URL, { method: "POST", mode: "no-cors", body: JSON.stringify(entry) }); return true; }
      catch (e2) { return false; }
    }
  }
  function queue(entry) {
    let q = []; try { q = JSON.parse(store.get(QUEUE_KEY) || "[]"); } catch (e) {}
    q.push(entry); store.set(QUEUE_KEY, JSON.stringify(q.slice(-20)));
  }
  async function flush() {
    if (!SCORE_URL) return;
    let q = []; try { q = JSON.parse(store.get(QUEUE_KEY) || "[]"); } catch (e) {}
    if (!q.length) return;
    store.set(QUEUE_KEY, "[]");
    for (const entry of q) if (!(await post(entry))) queue(entry);
  }

  window.Scores = {
    url: SCORE_URL,
    enabled: !!SCORE_URL,
    name: () => store.get(NAME_KEY),
    setName: n => store.set(NAME_KEY, String(n).trim().slice(0, 24)),
    playerId,
    /* game: "detective" | "wordsearch" | "unscramble" */
    async submit(game, score, detail, name) {
      if (!SCORE_URL) return false;
      let n = (name || store.get(NAME_KEY)).trim();
      if (!n) n = await askName(); else store.set(NAME_KEY, n.slice(0, 24));
      const entry = { game, name: n.slice(0, 24), score: Math.round(Number(score) || 0), detail: String(detail || "").slice(0, 80), player: playerId() };
      const ok = await post(entry);
      if (!ok) queue(entry);
      return ok;
    },
    async list() {
      const r = await fetch(SCORE_URL + (SCORE_URL.includes("?") ? "&" : "?") + "action=list&t=" + Date.now());
      return (await r.json()).rows || [];
    }
  };
  flush();
})();
