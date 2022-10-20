import itActsAsFavoriteRestaurantModel from './contract/favoriteRestaurantContract';
import RestaurantDbFavorite from '../src/scripts/data/restaurantdb-favorite';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await RestaurantDbFavorite.getAllResto()).forEach(async (restaurant) => {
      await RestaurantDbFavorite.deleteResto(restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantModel(RestaurantDbFavorite);
});
