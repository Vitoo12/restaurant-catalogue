import './skeleton-item';

class SkeletonList extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <skeleton-item></skeleton-item>
            <skeleton-item></skeleton-item>
            <skeleton-item></skeleton-item>
            <skeleton-item></skeleton-item>
        `;
    }
}

customElements.define('skeleton-list', SkeletonList);