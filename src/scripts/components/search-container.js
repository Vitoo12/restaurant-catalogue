import './search-item';
import RestaurantDbSource from '../data/restaurantdb-source';

class SearchContainer extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    async render() {
        this.innerHTML = `
        <h3 tabindex="0">Search your restaurant..</h3>
        <input type="text" id="searchInput" placeholder="Input name restaurant..">
        <button id="searchButton" aria-label="Search restaurant">
        <i class="fa-sharp fa-solid fa-magnifying-glass-arrow-right"></i>
        </button>
        `;

        const searchButton = this.querySelector('#searchButton');
        searchButton.addEventListener('click', async() => {
            const valueInput = this.querySelector('#searchInput').value;
            const restaurants = await RestaurantDbSource.searchResto(valueInput);
            if (restaurants.length === 0) {
                Swal.fire({
                    title: 'Empty!',
                    text: 'There is no data in search value',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
            } else {
                restaurants.forEach((restaurant) => {
                    const searchItem = document.createElement('search-item');
                    searchItem.restaurant = restaurant;
                    this.appendChild(searchItem);
                });
            }
        });
    }
}

customElements.define('search-container', SearchContainer);