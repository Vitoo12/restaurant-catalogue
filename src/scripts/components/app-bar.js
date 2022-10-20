class AppBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="app-bar__menu">
            <button id="hamburgerButton" aria-label="Hamburger">☰</button>
        </div>
        <div class="app-bar__brand">
            <h1 tabindex="0">Restaurant-IND</h1>
        </div>
        <nav class="app-bar__navigation" id="navigationDrawer">
            <ul>
                <li>
                    <a href="#/list">List</a>
                </li>
                <li>
                    <a href="#/favorite">Favorite</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/alfianvitoanggoro/">About Us</a>
                </li>
                <li>
                    <button id="buttonSearch" aria-label="search">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                </li>
            </ul>
        </nav>
        `;
    }
}

customElements.define('app-bar', AppBar);