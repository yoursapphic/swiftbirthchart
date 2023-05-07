class SignSelector extends HTMLElement {
  constructor() {
    super();
    const template = document.createElement("template");
    const selectOptions = signDataKeys
      .map((key) => {
        return `<option value="${key}">${key}</option>`;
      })
      .join("\n");

    template.innerHTML = `${styles} 
      <label for="sign-select"><slot name="label"></slot></label>
      <br/>

<select name="signs" id="sign-select">
    <option value="">Select Your Sign</option>
    ${selectOptions}
</select>
    `;

    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(template.content.cloneNode(true));
  }
}

customElements.define("sign-selector", SignSelector);
