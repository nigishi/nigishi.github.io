(function () {
  const projects = (window.PROJECTS || []).slice().sort((a, b) => (b.year || 0) - (a.year || 0));
  const CAT_LABEL = { app: "アプリ", web: "Web", tool: "ツール" };

  const el = (tag, cls, text) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  };

  function card(p) {
    const c = el("article", "card");
    const top = el("div", "card-top");
    top.append(el("span", "cat cat-" + p.category, CAT_LABEL[p.category] || p.category));
    if (p.year) top.append(el("span", "year", String(p.year)));
    c.append(top);

    c.append(el("h3", "card-title", p.name));
    c.append(el("p", "card-desc", p.description));

    const tags = el("ul", "tags");
    (p.tags || []).forEach(t => tags.append(el("li", null, t)));
    c.append(tags);

    const foot = el("div", "card-links");
    if (p.demo) {
      const a = el("a", "btn primary", "Demo ↗");
      a.href = p.demo; a.target = "_blank"; a.rel = "noopener";
      foot.append(a);
    }
    if (p.repo && p.public) {
      const a = el("a", "btn", "GitHub ↗");
      a.href = p.repo; a.target = "_blank"; a.rel = "noopener";
      foot.append(a);
    } else if (!p.public) {
      foot.append(el("span", "private", "Private"));
    }
    c.append(foot);
    return c;
  }

  const featured = document.getElementById("featured");
  projects.forEach(p => featured.append(card(p)));

  document.getElementById("year").textContent = new Date().getFullYear();
})();
