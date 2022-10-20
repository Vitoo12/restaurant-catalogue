class ReviewContainer extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <h3 tabindex="0" class="review-container__title">Give Your Review</h3>
            <div class="review-container__name">
                <label>Input Your Name</label>
                <input type="text" id="nameInput" placeholder="Input Your Name..">
            </div>
            <div class="review-container__textarea">
                <label>Input Your Review</label>
                <textarea id="reviewInput" aria-label="Input Your Review.." placeholder="Input Your Review.."></textarea>
            </div>
            <div class="review-container__button">
                <button id="buttonSaveReview" aria-label="Send">
                    <i class="fa-solid fa-check"></i>
                </button>
            </div>
        `;
    }
}

customElements.define('review-container', ReviewContainer);