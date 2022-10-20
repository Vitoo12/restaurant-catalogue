class SearchItem extends HTMLElement {
    set restaurant(restaurants) {
        this.restaurants = restaurants;
        this.render();
    }

    async render() {
        this.innerHTML = `
        <a href="#/detail/${this.restaurants.id}">${this.restaurants.name}</a>
        `;
    }
}

customElements.define('search-item', SearchItem);