class SkeletonDetail extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="skeleton-detail__img skeleton"></div>
        <div class="skeleton-detail__title skeleton"></div>
        <div class="skeleton-detail__title skeleton"></div>
        <div class="skeleton-detail__title skeleton"></div>
        <br>
        <div class="skeleton-detail__title skeleton"></div>
        <div class="skeleton-detail__description skeleton"></div>
        <div class="skeleton-detail__description skeleton"></div>
        <div class="skeleton-detail__description skeleton"></div>
        <div class="skeleton-detail__menus">
            <div class="skeleton-detail__menus__item">
                <div class="skeleton-detail__menus__title skeleton"></div>
                <div class="skeleton-detail__menus__description skeleton"></div>
            </div>
            <div class="skeleton-detail__menus__item">
                <div class="skeleton-detail__menus__title skeleton"></div>
                <div class="skeleton-detail__menus__description skeleton"></div>
            </div>
        </div>
        <div class="skeleton-detail__title skeleton"></div>
        <div class="skeleton-detail__review">
            <div class="skeleton-detail__review__item">
                <div class="skeleton-detail__review__title skeleton"></div>
                <div class="skeleton-detail__review__description skeleton"></div>
                <div class="skeleton-detail__review__description skeleton"></div>
            </div>
            <div class="skeleton-detail__review__item">
                <div class="skeleton-detail__review__title skeleton"></div>
                <div class="skeleton-detail__review__description skeleton"></div>
                <div class="skeleton-detail__review__description skeleton"></div>
            </div>
        </div>
        `;
    }
}

customElements.define('skeleton-detail', SkeletonDetail);