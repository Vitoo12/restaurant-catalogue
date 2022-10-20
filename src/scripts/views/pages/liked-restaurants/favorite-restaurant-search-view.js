/* eslint-disable class-methods-use-this */
import '../../../components/restaurant-list';
import { createRestaurantsItemTemplate } from '../../templates/template-creator';

class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
    <div class="content">
        <h2 class="content__heading" tabindex="0">Restaurant Favorite</h2>
        <input id="query" class="content__search" type="text" placeholder="Search favorite restarant with name..">
        <restaurant-list></restaurant-list>
    </div>
    `;
  }

  runWhenUserIsSearching(callback) {
    document.querySelector('#query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showFavoriteRestaurants(restaurants = []) {
    let html;
    if (restaurants.length) {
      html = restaurants.reduce((carry, restaurant) => carry.concat(createRestaurantsItemTemplate(restaurant)), '');
    } else {
      html = this._getEmptyRestaurantTemplate();
    }
    document.querySelector('restaurant-list').innerHTML = html;

    document.querySelector('restaurant-list').dispatchEvent(new Event('restaurant-list:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return '<div class="resto-item__not__found " tabindex="0">Tidak ada restaurant untuk ditampilkan</div>';
  }
}

export default FavoriteRestaurantSearchView;
