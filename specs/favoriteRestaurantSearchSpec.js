import FavoriteRestaurantSearchPresenter from '../src/scripts/views/pages/liked-restaurants/favorite-restaurant-search-presenter';
import RestaurantDbFavorite from '../src/scripts/data/restaurantdb-favorite';
import FavoriteRestaurantSearchView from '../src/scripts/views/pages/liked-restaurants/favorite-restaurant-search-view';

describe('Searching restaurants', () => {
  let presenter;
  let favoriteRestaurants;
  let view;

  const searchResto = (query) => {
    const queryElement = document.querySelector('#query');
    queryElement.value = query;
    queryElement.dispatchEvent(new Event('change'));
  };

  const setRestaurantSearchContainer = () => {
    view = new FavoriteRestaurantSearchView();
    document.body.innerHTML = view.getTemplate();
  };

  const constructPresenter = () => {
    favoriteRestaurants = spyOnAllFunctions(RestaurantDbFavorite);
    presenter = new FavoriteRestaurantSearchPresenter({
      favoriteRestaurants,
      view,
    });
  };

  beforeEach(() => {
    setRestaurantSearchContainer();
    constructPresenter();
  });

  describe('When query is not empty', () => {
    it('should be able to capture the query typed by the user', () => {
      searchResto('restaurant a');

      expect(presenter.latestQuery)
        .toEqual('restaurant a');
    });

    it('should ask the model to search for restaurants', () => {
      searchResto('restaurant a');

      expect(favoriteRestaurants.searchResto)
        .toHaveBeenCalledWith('restaurant a');
    });

    it('should show - when the restaurant returned does not contain a title', (done) => {
      document.querySelector('restaurant-list').addEventListener('restaurant-list:updated', () => {
        const restoTitles = document.querySelectorAll('.resto__title');
        expect(restoTitles.item(0).textContent).toEqual('-');

        done();
      });

      favoriteRestaurants.searchResto.withArgs('restaurant a').and.returnValues([
        { id: 444 },
      ]);

      searchResto('restaurant a');
    });

    it('should show the restaurants found by Favorite restaurants', (done) => {
      document.querySelector('restaurant-list').addEventListener('restaurant-list:updated', () => {
        expect(document.querySelectorAll('.resto-item').length)
          .toEqual(3);
        done();
      });

      favoriteRestaurants.searchResto.withArgs('restaurant a')
        .and
        .returnValues([
          { id: 111, name: 'restaurant abc' },
          { id: 222, name: 'ada juga restaurant abcde' },
          { id: 333, name: 'ini juga boleh restaurant a' },
        ]);

      searchResto('restaurant a');
    });

    it('should show the name of the restaurants found by Favorite restaurants', (done) => {
      document.querySelector('restaurant-list').addEventListener('restaurant-list:updated', () => {
        const restoTitle = document.querySelectorAll('.resto__title');

        expect(restoTitle.item(0).textContent)
          .toEqual('restaurant abc');
        expect(restoTitle.item(1).textContent)
          .toEqual('ada juga restaurant abcde');
        expect(restoTitle.item(2).textContent)
          .toEqual('ini juga boleh restaurant a');

        done();
      });

      favoriteRestaurants.searchResto.withArgs('restaurant a')
        .and
        .returnValues([
          { id: 111, name: 'restaurant abc' },
          { id: 222, name: 'ada juga restaurant abcde' },
          { id: 333, name: 'ini juga boleh restaurant a' },
        ]);

      searchResto('restaurant a');
    });
  });

  describe('When query is empty', () => {
    it('should capture the query as empty', () => {
      searchResto(' ');
      expect(presenter.latestQuery.length).toEqual(0);

      searchResto('    ');
      expect(presenter.latestQuery.length).toEqual(0);

      searchResto('');
      expect(presenter.latestQuery.length).toEqual(0);

      searchResto('\t');
      expect(presenter.latestQuery.length).toEqual(0);
    });

    it('should show all favorite restaurants', () => {
      searchResto('    ');
      expect(favoriteRestaurants.getAllResto).toHaveBeenCalledTimes(1);
    });
  });

  describe('When no favorite restaurants could be found', () => {
    it('should show the empty message', (done) => {
      document.querySelector('restaurant-list').addEventListener('restaurant-list:updated', () => {
        expect(document.querySelectorAll('.resto-item__not__found').length).toEqual(1);

        done();
      });

      favoriteRestaurants.searchResto.withArgs('restaurant a').and.returnValues([]);

      searchResto('restaurant a');
    });

    it('should not show any restaurant', (done) => {
      document.querySelector('restaurant-list').addEventListener('restaurant-list:updated', () => {
        expect(document.querySelectorAll('.resto-item').length).toEqual(0);
        done();
      });
      favoriteRestaurants.searchResto.withArgs('restaurant a').and.returnValues([]);
      searchResto('restaurant a');
    });
  });
});
