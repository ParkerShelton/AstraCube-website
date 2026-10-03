/* =========================================================================
   ASTRACUBE WIKI — renders the hub, category and entry pages from the data
   files in wiki/data/. Each data file calls WIKI.add({...}) with one category
   and its entries; every page loads all of them, then this file draws the page
   named by <body data-page="home|category|entry">.

   Entry text supports two bits of markup:
     [[entry-id]]          a link to that entry, using its name
     [[entry-id|words]]    a link to that entry with your own words
     **bold**              bold
   ========================================================================= */
(function () {
  "use strict";

  const WIKI = (window.WIKI = window.WIKI || { cats: [], byId: {} });

  // The game version shown at the bottom of the sidebar. Hard-coded for now;
  // once the API is live, fetch it and call WIKI.setGameVersion("v0.x.y").
  const GAME_VERSION = "v0.1.0 – Closed Alpha";
  WIKI.setGameVersion = function (v) {
    document.querySelectorAll("[data-game-version]").forEach((el) => (el.textContent = v));
  };

  WIKI.add = function (cat) {
    cat.entries = cat.entries || [];
    cat.entries.forEach((e) => {
      e.cat = cat;
      if (WIKI.byId[e.id]) console.warn("[wiki] duplicate entry id:", e.id);
      WIKI.byId[e.id] = e;
    });
    WIKI.cats.push(cat);
  };

  // ---- small pixel icons for each category (16x16 grid, drawn in currentColor) ----
  const ICONS = {
    survival: "M7 1h2v2H7zM5 3h6v2H5zM4 5h8v2H4zM3 7h10v4H3zM4 11h8v2H4zM6 13h4v2H6z",
    worlds: "M5 1h6v2H5zM3 3h10v2H3zM2 5h12v6H2zM3 11h10v2H3zM5 13h6v2H5z",
    resources: "M6 1h4v2H6zM4 3h8v2H4zM2 5h12v4H2zM4 9h8v2H4zM6 11h4v2H6zM7 13h2v2H7z",
    stations: "M1 5h14v3H1zM2 8h2v7H2zM12 8h2v7h-2zM5 2h6v3H5z",
    items: "M10 1h4v4h-2v2h-2V5H8V3h2zM7 6h2v2H7zM5 8h2v2H5zM3 10h2v2H3zM1 12h2v3H1z",
    power: "M8 1h4L9 7h4l-7 8 2-6H4z",
    food: "M3 6h10v2H3zM2 8h12v3H2zM4 11h8v2H4zM5 2h2v3H5zM9 2h2v3H9z",
    creatures: "M3 4h10v6H3zM1 6h2v2H1zM13 6h2v2h-2zM4 10h2v4H4zM10 10h2v4h-2zM5 6h2v2H5zM9 6h2v2H9z",
    ships: "M7 1h2v2H7zM6 3h4v6H6zM3 8h3v3H3zM10 8h3v3h-3zM6 9h4v3H6zM6 12h1v3H6zM9 12h1v3H9z",
  };
  const icon = (id) =>
    `<svg class="ico" viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="${ICONS[id] || ICONS.resources}"/></svg>`;
  const CUBE =
    '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3 28 10v12L16 29 4 22V10z" fill="#f2a641"/><path d="M16 16 28 10v12L16 29z" fill="#b8742a"/><path d="M16 16 4 10v12l12 7z" fill="#d68c35"/></svg>';

  // ---- urls ----
  const catUrl = (c) => `category.html?c=${encodeURIComponent(c.id)}`;
  const entryUrl = (e) => `page.html?id=${encodeURIComponent(e.id)}`;
  const param = (k) => new URLSearchParams(location.search).get(k);

  // ---- text ----
  const esc = (s) =>
    String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  function fmt(s) {
    let out = esc(s);
    out = out.replace(/\[\[([a-z0-9-]+)(?:\|([^\]]+))?\]\]/g, (m, id, words) => {
      const e = WIKI.byId[id];
      if (!e) {
        console.warn("[wiki] broken link:", id);
        return words || id;
      }
      return `<a href="${entryUrl(e)}">${words || esc(e.name)}</a>`;
    });
    out = out.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    return out;
  }

  // ---- sidebar ----
  function sidebar(activeCat) {
    const links = WIKI.cats
      .map(
        (c) =>
          `<li><a href="${catUrl(c)}" class="${c === activeCat ? "active" : ""}" style="--accent:${c.color}">` +
          `<span style="color:${c.color}">${icon(c.id)}</span>${esc(c.name)}</a></li>`
      )
      .join("");
    return `
      <aside class="side" id="side">
        <div class="side-top">
          <a class="brand" href="index.html">${CUBE}<span>ASTRACUBE <small>WIKI</small></span></a>
          <button class="menu-btn" type="button" aria-expanded="false" aria-controls="side-body">Browse</button>
        </div>
        <div class="side-body" id="side-body">
          <span class="side-label" style="margin-top:0">Categories</span>
          <ul class="side-links">
            <li><a href="index.html" class="${activeCat === "home" ? "active" : ""}">${icon("worlds")}All categories</a></li>
            ${links}
          </ul>
          <div class="side-bottom">
            <ul class="side-links">
              <li><a class="home-link" href="../">« Back to the homepage</a></li>
            </ul>
            <p class="version">Game version<span data-game-version>${esc(GAME_VERSION)}</span></p>
          </div>
        </div>
      </aside>`;
  }

  function wireSidebar() {
    const side = document.getElementById("side");
    const btn = side.querySelector(".menu-btn");
    btn.addEventListener("click", () => {
      const open = side.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(open));
    });

    // Search: names first, then anything whose summary mentions the words.
    const input = document.getElementById("search");
    const list = document.getElementById("search-results");
    const all = Object.values(WIKI.byId);
    let hits = [];
    let hl = 0;

    function draw() {
      const q = input.value.trim().toLowerCase();
      if (!q) {
        list.hidden = true;
        return;
      }
      const words = q.split(/\s+/);
      const score = (e) => {
        const name = e.name.toLowerCase();
        const hay = (name + " " + (e.summary || "") + " " + (e.tags || []).join(" ")).toLowerCase();
        if (!words.every((w) => hay.includes(w))) return -1;
        if (name === q) return 3;
        if (name.startsWith(q)) return 2;
        return words.every((w) => name.includes(w)) ? 1 : 0;
      };
      hits = all
        .map((e) => [score(e), e])
        .filter(([s]) => s >= 0)
        .sort((a, b) => b[0] - a[0] || a[1].name.localeCompare(b[1].name))
        .slice(0, 12)
        .map(([, e]) => e);
      hl = 0;
      list.innerHTML = hits.length
        ? hits
            .map(
              (e, i) =>
                `<li><a href="${entryUrl(e)}" class="${i === hl ? "hl" : ""}">${esc(e.name)}<small>${esc(e.cat.name)}${
                  e.group ? " · " + esc(e.group) : ""
                }</small></a></li>`
            )
            .join("")
        : '<li class="none">Nothing matches that.</li>';
      list.hidden = false;
    }
    input.addEventListener("input", draw);
    input.addEventListener("focus", draw);
    input.addEventListener("keydown", (ev) => {
      if (list.hidden || !hits.length) return;
      if (ev.key === "ArrowDown" || ev.key === "ArrowUp") {
        ev.preventDefault();
        hl = (hl + (ev.key === "ArrowDown" ? 1 : hits.length - 1)) % hits.length;
        list.querySelectorAll("a").forEach((a, i) => a.classList.toggle("hl", i === hl));
      } else if (ev.key === "Enter") {
        location.href = entryUrl(hits[hl]);
      } else if (ev.key === "Escape") {
        list.hidden = true;
      }
    });
    document.addEventListener("click", (ev) => {
      if (!ev.target.closest(".search")) list.hidden = true;
    });
  }

  // Breadcrumbs, led by a back arrow that goes up one level: entry -> its
  // category -> all categories -> the site homepage. That's always the crumb
  // just before the current page.
  function crumbs(parts) {
    const up = parts[parts.length - 2];
    const back = up && up.href
      ? `<a class="back" href="${up.href}" aria-label="Back to ${esc(up.text === "Home" ? "the homepage" : up.text)}" title="Back to ${esc(
          up.text === "Home" ? "the homepage" : up.text
        )}"><svg viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M9 1h4v2H9zM7 3h4v2H7zM5 5h4v2H5zM3 7h4v2H3zM5 9h4v2H5zM7 11h4v2H7zM9 13h4v2H9z"/></svg></a>`
      : "";
    return (
      `<div class="crumbs-wrap">${back}<nav class="crumbs" aria-label="Breadcrumbs">` +
      parts
        .map((p) => (p.href ? `<a href="${p.href}">${esc(p.text)}</a>` : `<span>${esc(p.text)}</span>`))
        .join('<span aria-hidden="true">›</span>') +
      "</nav></div>"
    );
  }

  // The content column: a slim top bar (breadcrumbs left, search right) over
  // the page itself, both centred in the space beside the sidebar.
  function frame(activeCat, crumbsHtml, inner) {
    document.getElementById("wiki").innerHTML =
      sidebar(activeCat) +
      `<div class="content">
        <header class="topbar"><div class="topbar-inner">${crumbsHtml}
          <div class="search">
            <input type="search" id="search" placeholder="Search the wiki…" autocomplete="off" aria-label="Search the wiki">
            <ul class="search-results" id="search-results" hidden></ul>
          </div>
        </div></header>
        <main class="main" id="main">${inner}</main>
      </div>`;
    wireSidebar();
  }

  // ---- pages ----
  function renderHome() {
    const total = Object.keys(WIKI.byId).length;
    const cards = WIKI.cats
      .map(
        (c) =>
          `<a class="card" href="${catUrl(c)}" style="--accent:${c.color}">${icon(c.id)}` +
          `<h2>${esc(c.name)}</h2><p>${fmt(c.blurb)}</p><span class="count">${c.entries.length}</span></a>`
      )
      .join("");
    frame(
      "home",
      crumbs([{ text: "Home", href: "../" }, { text: "Wiki" }]),
        `<header class="page-head"><span class="label">AstraCube Field Guide</span><h1>AstraCube Wiki</h1>
         <p class="lede">Everything you'll run into after the crash: the worlds, what you can dig up, what you can build,
         what lives out there and how to get off the ground again. Pick a category to start, or search at the top.</p></header>
         <div class="cards">${cards}</div>
         <div class="note hub-note"><strong>${total} entries</strong>, written from the game's own source code.
         Much of AstraCube is generated per world (ores, creatures, plant names), so the wiki explains how those systems
         work rather than listing every one. Numbers can change between alpha builds.</div>`
    );
    document.title = "AstraCube Wiki";
  }

  function renderCategory() {
    const c = WIKI.cats.find((x) => x.id === param("c"));
    if (!c) return renderMissing("That category doesn't exist.");
    const groups = c.groups || [{ name: "" }];
    const body = groups
      .map((g) => {
        const items = c.entries.filter((e) => (e.group || "") === (g.name || ""));
        if (!items.length) return "";
        const cards = items
          .map(
            (e) =>
              `<a class="card entry" href="${entryUrl(e)}" style="--accent:${c.color}"><h3>${esc(e.name)}</h3><p>${fmt(
                e.summary || ""
              )}</p></a>`
          )
          .join("");
        return `<section class="group">${g.name ? `<h2>${esc(g.name)}</h2>` : ""}${
          g.blurb ? `<p>${fmt(g.blurb)}</p>` : ""
        }<div class="cards entries">${cards}</div></section>`;
      })
      .join("");
    frame(
      c,
      crumbs([{ text: "Wiki", href: "index.html" }, { text: c.name }]),
        `<header class="page-head" style="--accent:${c.color}"><span class="label" style="color:${c.color}">Category</span>
         <h1>${esc(c.name)}</h1><p class="lede">${fmt(c.intro || c.blurb)}</p></header>${body}`
    );
    document.title = `${c.name} · AstraCube Wiki`;
  }

  function block(b) {
    let out = b.h ? `<h2>${esc(b.h)}</h2>` : "";
    if (b.p) out += [].concat(b.p).map((t) => `<p>${fmt(t)}</p>`).join("");
    if (b.list) out += `<ul>${b.list.map((t) => `<li>${fmt(t)}</li>`).join("")}</ul>`;
    if (b.steps) out += `<ol>${b.steps.map((t) => `<li>${fmt(t)}</li>`).join("")}</ol>`;
    if (b.table) {
      const head = b.table.cols.map((t) => `<th>${esc(t)}</th>`).join("");
      const rows = b.table.rows.map((r) => `<tr>${r.map((t) => `<td>${fmt(t)}</td>`).join("")}</tr>`).join("");
      out += `<div class="table-wrap"><table><thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table></div>`;
    }
    if (b.note) out += `<div class="note">${fmt(b.note)}</div>`;
    return `<section>${out}</section>`;
  }

  function renderEntry() {
    const e = WIKI.byId[param("id")];
    if (!e) return renderMissing("That page doesn't exist (yet).");
    const c = e.cat;
    const info = (e.info || [])
      .map(([k, v]) => `<dt>${esc(k)}</dt><dd>${fmt(v)}</dd>`)
      .join("");
    const swatch = e.color ? `<span class="swatch" style="background:${e.color}"></span>` : "";
    const infobox = info
      ? `<aside class="infobox" style="--accent:${c.color}"><h2>${swatch}${esc(e.name)}</h2><dl>${info}</dl></aside>`
      : "";
    const related = (e.related || [])
      .map((id) => WIKI.byId[id])
      .filter(Boolean)
      .map((r) => `<a class="chip" href="${entryUrl(r)}">${esc(r.name)}</a>`)
      .join("");
    const sections =
      (e.body || []).map(block).join("") +
      (related ? `<section><h2>See also</h2><div class="related">${related}</div></section>` : "");

    const i = c.entries.indexOf(e);
    const prev = c.entries[i - 1];
    const next = c.entries[i + 1];
    const pager =
      prev || next
        ? `<nav class="pager" aria-label="More in ${esc(c.name)}">${
            prev ? `<a href="${entryUrl(prev)}"><small>‹ Previous</small>${esc(prev.name)}</a>` : ""
          }${next ? `<a class="next" href="${entryUrl(next)}"><small>Next ›</small>${esc(next.name)}</a>` : ""}</nav>`
        : "";

    frame(
      c,
      crumbs([
        { text: "Wiki", href: "index.html" },
        { text: c.name, href: catUrl(c) },
        { text: e.name },
      ]),
        `<header class="page-head"><span class="label" style="color:${c.color}">${esc(c.name)}${
          e.group ? " · " + esc(e.group) : ""
        }</span><h1>${esc(e.name)}</h1>${e.summary ? `<p class="lede">${fmt(e.summary)}</p>` : ""}</header>
         <div class="entry-layout">${infobox}<div class="prose">${sections}</div></div>${pager}`
    );
    document.title = `${e.name} · AstraCube Wiki`;
  }

  function renderMissing(msg) {
    frame(
      null,
      crumbs([{ text: "Wiki", href: "index.html" }, { text: "Not found" }]),
        `<div class="missing"><h1 style="font-size:1.5rem;margin-bottom:8px">Nothing here</h1><p>${esc(
          msg
        )} <a href="index.html">Back to the wiki</a>.</p></div>`
    );
    document.title = "Not found · AstraCube Wiki";
  }

  document.addEventListener("DOMContentLoaded", () => {
    const page = document.body.dataset.page;
    if (page === "category") renderCategory();
    else if (page === "entry") renderEntry();
    else renderHome();
  });
})();
