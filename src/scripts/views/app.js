import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import SearchInitiator from '../utils/search-initiator';

class App {
    constructor({
        button,
        drawer,
        content,
        searchContainer,
        buttonSearch,
    }) {
        this._button = button;
        this._drawer = drawer;
        this._content = content;

        this._buttonSearch = buttonSearch;
        this._searchContainer = searchContainer;

        this._initialAppShell();
    }

    _initialAppShell() {
        DrawerInitiator.init({
            button: this._button,
            drawer: this._drawer,
            content: this._content,
        });

        SearchInitiator.init({
            button: this._buttonSearch,
            searchContainer: this._searchContainer,
            content: this._content,
            drawer: this._drawer,
        });
        // kita bisa menginisiasikan komponen lain bila ada
    }

    async renderPage() {
        const url = UrlParser.parseActiveUrlWithCombiner();
        const page = routes[url];
        this._content.innerHTML = await page.render();
        await page.afterRender();
        const skipLinkElem = document.querySelector('#skip-link');
        skipLinkElem.addEventListener('click', (event) => {
            event.preventDefault();
            document.querySelector('#mainContent').focus();
        });
    }
}

export default App;