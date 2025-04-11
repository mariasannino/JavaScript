class ConfirmLink extends HTMLAnchorElement {
  connectedCallback() {
    this.addEventListener("click", (event) => {
      if (!confirm("do you really want to leave")) {
        event.preventDefault();
      }
    });
  }
}
customElements.define("mymari-confirm-link", ConfirmLink, { extends: "a" });
