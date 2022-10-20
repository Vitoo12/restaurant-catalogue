/* eslint-disable no-new */
import RestaurantDbFavorite from '../../data/restaurantdb-favorite';
import FavoriteRestaurantSearchView from './liked-restaurants/favorite-restaurant-search-view';
import FavoriteRestaurantSearchPresenter from './liked-restaurants/favorite-restaurant-search-presenter';
import FavoriteRestaurantShowPresenter from './liked-restaurants/favorite-restaurant-show-presenter';

const view = new FavoriteRestaurantSearchView();
const favoriteRestaurants = {
    async render() {
        return view.getTemplate();
    },
    async afterRender() {
        new FavoriteRestaurantShowPresenter({ view, favoriteRestaurants: RestaurantDbFavorite });
        new FavoriteRestaurantSearchPresenter({ view, favoriteRestaurants: RestaurantDbFavorite });
    },
};

export default favoriteRestaurants;