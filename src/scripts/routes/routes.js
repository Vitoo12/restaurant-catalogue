import ListRestaurants from '../views/pages/list';
import DetailRestaurant from '../views/pages/detail';
import favoriteRestaurants from '../views/pages/favorite';

const routes = {
    '/': ListRestaurants, // main page
    '/list': ListRestaurants,
    '/detail/:id': DetailRestaurant,
    '/favorite': favoriteRestaurants,

};

export default routes;