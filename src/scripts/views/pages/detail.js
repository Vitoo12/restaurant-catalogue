import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import RestaurantDbFavorite from '../../data/restaurantdb-favorite';
import { createRestaurantsDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import '../../components/detail-container';
import '../../components/loading';
import '../../components/skeleton-detail';

const DetailRestaurant = {
    async render() {
        return `
        <detail-container></detail-container>
        <skeleton-detail></skeleton-detail>
        <div id="likeButtonContainer"></div>
        <loading-page></loading-page>
        `;
    },
    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const detailContainer = document.querySelector('detail-container');
        const loading = document.querySelector('loading-page');

        const show = () => {
            loading.style.display = 'block';
        };
        const hide = () => {
            loading.style.display = 'none';
        };

        const skeletonElement = document.querySelector('skeleton-detail');

        const hideSkeleton = () => {
            skeletonElement.style.display = 'none';
        };

        show();
        const resto = await RestaurantDbSource.detailResto(url.id);
        if (resto) {
            detailContainer.innerHTML = createRestaurantsDetailTemplate(resto);
        } else {
            detailContainer.innerHTML = '<h2 tabindex="0"> FAILED LOAD DATA !!!</h2>';
        }
        hideSkeleton();
        hide();

        const nameInput = document.querySelector('#nameInput');
        const textAreaInput = document.querySelector('#reviewInput');
        const buttonSave = document.querySelector('#buttonSaveReview');

        buttonSave.addEventListener('click', async() => {
            if (window.navigator.onLine) {
                if (nameInput.value !== '' && textAreaInput.value !== '') {
                    const review = {
                        id: resto.id,
                        name: nameInput.value,
                        review: textAreaInput.value,
                    };
                    await RestaurantDbSource.reviewResto(review);
                    nameInput.value = '';
                    textAreaInput.value = '';
                    Swal.fire({
                        title: 'Succes!',
                        text: 'Your review has send to server',
                        icon: 'success',
                        confirmButtonText: 'OK',
                    });
                } else {
                    Swal.fire({
                        title: 'Warning',
                        text: 'You have to fill in your name or review ',
                        icon: 'warning',
                        confirmButtonText: 'OK',
                    });
                }
            } else {
                Swal.fire({
                    title: 'ERROR',
                    text: 'You cant add review because you havent connect your internet ',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
            }
        });

        LikeButtonPresenter.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            favoriteRestaurants: RestaurantDbFavorite,
            restaurant: {
                id: resto.id,
                name: resto.name,
                pictureId: resto.pictureId,
                description: resto.description,
                city: resto.city,
                rating: resto.rating,
            },
        });
    },
};

export default DetailRestaurant;