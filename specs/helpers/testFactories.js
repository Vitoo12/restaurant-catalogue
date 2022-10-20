/* eslint-disable import/prefer-default-export */
import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
import RestaurantDbFavorite from '../../src/scripts/data/restaurantdb-favorite';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurants: RestaurantDbFavorite,
    restaurant,
  });
};

export { createLikeButtonPresenterWithRestaurant };
