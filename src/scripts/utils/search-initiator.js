const SearchInitiator = {
    init({
        button,
        searchContainer,
        content,
        drawer,
    }) {
        button.addEventListener('click', (event) => {
            this._toggleDrawer(event, searchContainer);
            drawer.classList.remove('open');
        });

        content.addEventListener('click', (event) => {
            this._closeDrawer(event, searchContainer);
        });
    },

    _toggleDrawer(event, searchContainer) {
        event.stopPropagation();
        searchContainer.classList.toggle('none');
    },

    _closeDrawer(event, searchContainer) {
        event.stopPropagation();
        searchContainer.classList.remove('none');
    },
};

export default SearchInitiator;