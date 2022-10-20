/* eslint-disable no-new */
import FavoriteRestaurantSearchView from '../src/scripts/views/pages/liked-restaurants/favorite-restaurant-search-view';
import FavoriteRestaurantShowPresenter from '../src/scripts/views/pages/liked-restaurants/favorite-restaurant-show-presenter';
import RestaurantDbFavorite from '../src/scripts/data/restaurantdb-favorite';

describe('Showing all favorite restaurants', () => {
  let view;

  const renderTemplate = () => {
    view = new FavoriteRestaurantSearchView();
    document.body.innerHTML = view.getTemplate();
  };

  beforeEach(() => {
    renderTemplate();
  });

  describe('When no restaurants have been liked', () => {
    it('should ask for the favorite restaurants', () => {
      const favoriteRestaurants = spyOnAllFunctions(RestaurantDbFavorite);
      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });
      expect(favoriteRestaurants.getAllResto).toHaveBeenCalledTimes(1);
    });

    it('should show the information that no restaurants have been liked', (done) => {
      document.querySelector('restaurant-list').addEventListener('restaurant-list:updated', () => {
        expect(document.querySelectorAll('.resto-item__not__found').length).toEqual(1);
        done();
      });

      const favoriteRestaurants = spyOnAllFunctions(RestaurantDbFavorite);
      favoriteRestaurants.getAllResto.and.returnValues([]);

      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });
    });
  });

  describe('When favorite restaurants exist', () => {
    it('should show the restaurants', (done) => {
      document.querySelector('restaurant-list').addEventListener('restaurant-list:updated', () => {
        expect(document.querySelectorAll('.resto-item').length).toEqual(2);
        done();
      });
      const favoriteRestaurants = spyOnAllFunctions(RestaurantDbFavorite, false);
      favoriteRestaurants.getAllResto.and.returnValues([
        {
          id: 11,
          name: 'A',
          rating: 3,
          description: 'Sebuah restaurant A',
        },
        {
          id: 22,
          name: 'B',
          rating: 4,
          description: 'Sebuah restaurant B',
        },
      ]);
      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });
    });
  });
});
