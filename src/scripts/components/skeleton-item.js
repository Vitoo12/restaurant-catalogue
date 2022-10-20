class SkeletonItem extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="skeleton-item__header__img skeleton"></div>
        <div class="skeleton-item__content__name skeleton"></div>
        <div class="skeleton-item__content__description skeleton"></div>
        <div class="skeleton-item__content__description skeleton"></div>
        <div class="skeleton-item__content__description skeleton"></div>
        `;
    }
}

customElements.define('skeleton-item', SkeletonItem);