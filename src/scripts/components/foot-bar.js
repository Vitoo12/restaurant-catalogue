class FootBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <p tabindex="0">Created with L0V3 by AlfianVitoAnggoro</p>
        `;
    }
}

customElements.define('foot-bar', FootBar);