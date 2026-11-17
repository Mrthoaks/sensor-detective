/* CLASS CODE GATE for every Data Structures page.
   Students type the code once; this browser then remembers it for all Data Structures pages.
   To change the codes, edit CODES below. (This is a light classroom lock, not real security:
   anyone who opens the page source can read the codes.) */
(function () {
  var KEY = "ds-unlocked", CODES = ["2222", "3333"];
  try { if (localStorage.getItem(KEY) === "yes" || sessionStorage.getItem(KEY) === "yes") return; } catch (e) {}

  var hide = document.createElement("style");
  hide.textContent = "body > *:not(#ds-gate) { display: none !important; } body { background: #0f1c26 !important; }";
  (document.head || document.documentElement).appendChild(hide);

  function unlock() {
    try { localStorage.setItem(KEY, "yes"); } catch (e) { try { sessionStorage.setItem(KEY, "yes"); } catch (e2) {} }
    hide.remove();
    var g = document.getElementById("ds-gate"); if (g) g.remove();
    window.dispatchEvent(new Event("resize"));
  }
  function build() {
    var root = location.pathname.indexOf("/data-structures/") >= 0 ? "../index.html" : "index.html";
    var g = document.createElement("div");
    g.id = "ds-gate";
    g.setAttribute("role", "dialog"); g.setAttribute("aria-modal", "true"); g.setAttribute("aria-labelledby", "ds-gate-t");
    g.style.cssText = "position:fixed;inset:0;z-index:9999;display:grid;place-items:center;padding:16px;background:#0f1c26;font-family:Arial,Helvetica,sans-serif";
    g.innerHTML =
      '<form style="background:#fff;color:#172033;border-radius:22px;padding:30px 26px;width:100%;max-width:380px;text-align:center;box-shadow:0 20px 60px rgba(0,0,0,.4)">' +
        '<div style="font-size:52px">🔒</div>' +
        '<h1 id="ds-gate-t" style="margin:6px 0 6px;font-size:24px">Data Structures</h1>' +
        '<p style="margin:0 0 16px;color:#5d6678;line-height:1.5">Enter the class code from your teacher to open these games.</p>' +
        '<input name="c" type="password" inputmode="numeric" autocomplete="off" maxlength="12" aria-label="Class code" placeholder="Class code" ' +
          'style="width:100%;border:2px solid #d6e2df;border-radius:12px;padding:14px;font:bold 22px Arial;text-align:center;letter-spacing:6px">' +
        '<p id="ds-gate-msg" role="alert" style="min-height:20px;margin:10px 0 0;color:#b0563f;font-weight:bold;font-size:14px"></p>' +
        '<button style="margin-top:8px;width:100%;border:0;border-radius:12px;padding:14px;background:#1f6f6a;color:#fff;font:bold 17px Arial;cursor:pointer">Unlock 🔓</button>' +
        '<p style="margin:16px 0 0;font-size:13px"><a href="' + root + '" style="color:#1f6f6a">← Back to Sensor Detective games</a></p>' +
      '</form>';
    document.body.appendChild(g);
    var f = g.querySelector("form"), msg = g.querySelector("#ds-gate-msg");
    f.c.focus();
    f.onsubmit = function (e) {
      e.preventDefault();
      if (CODES.indexOf(f.c.value.trim()) >= 0) { unlock(); return; }
      msg.textContent = "That code isn't right. Try again.";
      f.c.value = ""; f.c.focus();
      if (f.animate) f.animate([{ transform: "translateX(-8px)" }, { transform: "translateX(8px)" }, { transform: "none" }], { duration: 300 });
    };
  }
  if (document.body) build(); else document.addEventListener("DOMContentLoaded", build);
})();
