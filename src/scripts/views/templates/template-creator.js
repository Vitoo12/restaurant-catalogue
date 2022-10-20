import CONFIG from '../../globals/config';
import '../../components/review-container';

const createRestaurantsItemTemplate = (restaurant) => `
<div class="resto-item">
    <div class="resto-item__header">
        <img tabindex="0" class="resto-item__header__img lazyload" width="200px" height="250px" data-src="${CONFIG.BASE_IMAGE + restaurant.pictureId}" alt="${restaurant.name}">
        <div class="resto-item__header__location">
            <p tabindex="0" class="resto-item__header__location__place">${restaurant.city || '-'}</p>
        </div>
        <div class="resto-item__header__rating">
            <p aria-label="Rating Restaurant" tabindex="0" >⭐️<span tabindex="0" class="resto-item__header__rating__score">${restaurant.rating || '-'}</span></p>
        </div>
    </div>
    <div class="resto-item__content">
        <h3 class="resto__title"><a href="/#/detail/${restaurant.id}">${restaurant.name || '-'}</a></h3>
        <p tabindex="0">${restaurant.description || '-'}</p>
    </div>
</div>
    `;

const createRestaurantsDetailTemplate = (restaurant) => `
        <div class="container__image">
            <img tabindex="0" class="lazyload" width="800px" height="550px" data-src="${CONFIG.BASE_IMAGE + restaurant.pictureId}" alt="${restaurant.name}">
        </div>
        <div class="resto__header">
            <h2 tabindex="0" class="resto__title">${restaurant.name}</h2>
            <h3 tabindex="0">Rating: ⭐️${restaurant.rating}</h3>
            <p tabindex="0">${restaurant.address}, ${restaurant.city}</p>
        </div>
        <div class="resto-container">
            <div class="resto__description">
                <h3 tabindex="0">Description</h3>
                <p tabindex="0" class="restaurant__description">${restaurant.description}</p>
            </div>
            <div class="restaurant__menus">
                <div class="foods">
                    <h3 tabindex="0" >Foods of Menus</h3>
                    <p tabindex="0" >${restaurant.menus.foods.map((food) => food.name).join(', ')}</p>
                </div>
                <div class="drinks">
                    <h3 tabindex="0" >Drinks of Menus</h3>
                    <p tabindex="0" >${restaurant.menus.drinks.map((drink) => drink.name).join(', ')}</p>
                </div>
            </div>
        </div>
        <review-container></review-container>
        <h3 tabindex="0" class="titleCustomer">Customer Reviews:</h3>
        <div class="restaurant__customerReviews">
        ${restaurant.customerReviews.reduce((show, value) => show.concat(`
        <div class="restaurant__customerReviews-item">
            <h4 tabindex="0" class="customerReviews-item__name">${value.name}</h4>
            <p tabindex="0" class="customerReviews-item__date">${value.date}</p>
            <p tabindex="0" class="customerReviews-item__review">${value.review}</p>
        </div>
        `), '')}
        </div>
        
`;

const createLikeRestaurantButtonTemplate = () => `
  <button tabindex="0" aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa-regular fa-thumbs-up" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button tabindex="0" aria-label="unlike this restaurant" id="likeButton" class="like">
  <i class="fa-solid fa-thumbs-up" aria-hidden="true"></i>
  </button>
`;

export {
 createRestaurantsItemTemplate,
 createRestaurantsDetailTemplate,
 createLikeRestaurantButtonTemplate,
 createUnlikeRestaurantButtonTemplate,
};