Feature('Reviewing Restaurants');

Before(({ I }) => {
I.amOnPage('/');
I.waitForElement('.resto__title a');
I.seeElement('.resto__title a');
const firstResaurant = locate('.resto__title a').first();
I.click(firstResaurant);
});

Scenario('Add a review restaurants fill empty', ({ I }) => {
    I.seeElement('review-container');

    I.seeElement('#nameInput');
    I.fillField('#nameInput', '');

    I.seeElement('#reviewInput');
    I.fillField('#reviewInput', '');

    I.seeElement('#buttonSaveReview');
    I.click('#buttonSaveReview');

    I.waitForElement('.swal2-title', 10);
    I.see('Warning', '.swal2-title');
});

Scenario('Add a review restaurants fill not empty', ({ I }) => {
    I.seeElement('review-container');

    I.seeElement('#nameInput');
    I.fillField('#nameInput', 'E2E');

    I.seeElement('#reviewInput');
    I.fillField('#reviewInput', 'E2E Review');

    I.seeElement('#buttonSaveReview');
    I.click('#buttonSaveReview');

    I.waitForElement('.swal2-title', 10);
    I.see('Succes!', '.swal2-title');
});