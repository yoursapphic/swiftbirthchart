class Header extends HTMLElement {
  constructor() {
    super();
    const template = document.createElement("template");
    template.innerHTML = `${styles} 
  <header>
  <a href="/swiftbirthchart/">✨Swift Birth Chart✨</a>
  </header>
  <div class="subtitle">
    If they don't pull this out on the first date, they're not the one ;)
  </div>`;

    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(template.content.cloneNode(true));
  }
}

customElements.define("custom-header", Header);
