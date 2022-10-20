const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
  });

Scenario('showing empty liked restaurants', ({ I }) => {
    I.seeElement('#query');
    I.see('Tidak ada restaurant untuk ditampilkan', '.resto-item__not__found');
});

Scenario('liking a restaurant', async ({ I }) => {
    I.see('Tidak ada restaurant untuk ditampilkan', '.resto-item__not__found');

    I.amOnPage('/');

    I.waitForElement('.resto__title a', 10);

    I.seeElement('.resto__title a');

    const firstResaurant = locate('.resto__title a').first();
    const firstResaurantTitle = await I.grabTextFrom(firstResaurant);
    I.click(firstResaurant);

    I.waitForElement('#likeButton', 10);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.resto-item');
    const likedRestaurantTitle = await I.grabTextFrom('.resto__title');

    assert.strictEqual(firstResaurantTitle, likedRestaurantTitle);
  });

  Scenario('unliking a restaurant', async ({ I }) => {
    I.see('Tidak ada restaurant untuk ditampilkan', '.resto-item__not__found');

    I.amOnPage('/');

    I.waitForElement('.resto__title a', 10);

    I.seeElement('.resto__title a');

    const firstResaurant = locate('.resto__title a').first();
    const firstResaurantTitle = await I.grabTextFrom(firstResaurant);
    I.click(firstResaurant);

    I.waitForElement('#likeButton', 10);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.resto-item');
    const likedRestaurantTitle = await I.grabTextFrom('.resto__title');

    assert.strictEqual(firstResaurantTitle, likedRestaurantTitle);

    I.click(firstResaurant);

    I.waitForElement('#likeButton', 10);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');

    I.see('Tidak ada restaurant untuk ditampilkan', '.resto-item__not__found');
  });

  Scenario('searching restaurants', async ({ I }) => {
    I.see('Tidak ada restaurant untuk ditampilkan', '.resto-item__not__found');

    I.amOnPage('/');

    I.waitForElement('.resto__title a', 10);
    I.seeElement('.resto__title a');

    const names = [];

    for (let i = 1; i <= 3; i++) {
      I.click(locate('.resto__title a').at(i));
      I.waitForElement('#likeButton', 10);
      I.seeElement('#likeButton');
      I.click('#likeButton');
      names.push(await I.grabTextFrom('.resto__title'));
      I.amOnPage('/');
    }

    I.amOnPage('/#/favorite');
    I.seeElement('#query');

    const searchQuery = names[1].substring(1, 3);
    const matchingRestaurants = names.filter((name) => name.indexOf(searchQuery) !== -1);

    I.fillField('#query', searchQuery);
    I.pressKey('Enter');

    const visibleLikedRestaurants = await I.grabNumberOfVisibleElements('.resto-item');
    assert.strictEqual(matchingRestaurants.length, visibleLikedRestaurants);

    matchingRestaurants.forEach(async (name, index) => {
      const visibleName = await I.grabTextFrom(locate('.resto__title').at(index + 1));
      assert.strictEqual(name, visibleName);
    });
  });
