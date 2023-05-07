class Footer extends HTMLElement {
  constructor() {
    super();
    const template = document.createElement("template");
    template.innerHTML = `${styles} 
    <footer class="box">
    <span>
    <slot></slot>
    </span>
    </footer>`;

    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(template.content.cloneNode(true));
  }
}

customElements.define("custom-footer", Footer);
