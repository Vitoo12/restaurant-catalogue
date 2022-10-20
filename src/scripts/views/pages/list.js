import RestaurantDbSource from '../../data/restaurantdb-source';
import '../../components/restaurant-list';
import { createRestaurantsItemTemplate } from '../templates/template-creator';
import '../../components/loading';
import '../../components/skeleton-list';

const ListRestaurants = {
    async render() {
        return `
        <div class="content">
            <div class="content__hero">
                <picture>
                    <source type="image/webp" height="400px" width="400px" srcset="./images/hero.webp">
                    <source type="image/jpeg" media="(max-width: 600px)" srcset="./images/hero-small.jpg">
                    <img src='./images/hero-large.jpg' alt="Hero Restaurant Image">
                </picture>
            </div>
		    <h2 class="content__heading" tabindex="0">Restaurant List</h2>
            <restaurant-list></restaurant-list>
            <skeleton-list></skeleton-list>
		</div>
        <loading-page></loading-page>
        `;
    },
    async afterRender() {
        const restaurantList = document.querySelector('restaurant-list');
        const loading = document.querySelector('loading-page');
        const skeletonElement = document.querySelector('skeleton-list');

        const show = () => {
            loading.style.display = 'block';
        };
        const hide = () => {
            loading.style.display = 'none';
        };

        const hideSkeleton = () => {
            skeletonElement.style.display = 'none';
        };

        show();
        const restaurants = await RestaurantDbSource.listResto();
        if (restaurants) {
            restaurants.forEach((restaurant) => {
                restaurantList.innerHTML += createRestaurantsItemTemplate(restaurant);
            });
        } else {
            restaurantList.innerHTML = '<h2 style="color:red"> FAILED LOAD DATA !!!</h2>';
        }
        hideSkeleton();
        hide();
    },
};

export default ListRestaurants;