import './style.css';

const headerComponent = ({ onSearch }) => {
    const header = document.createElement('header');
    header.innerHTML = `
        <div class="logo">
            <h1>Weather App</h1>
            <iconify-icon icon="pixelarticons:cloud"></iconify-icon>
        </div>

        <form class="search-container">
            <input type="search" id="input-place" placeholder="Search a location..." minlength="2" maxlength="100" autocomplete="off" required>
            <button type="submit">
                <iconify-icon icon="pixelarticons:search"></iconify-icon>
            </button>
        </form>
    `;

    const searchForm = header.querySelector('.search-container');
    searchForm.onsubmit = (e) => {
        e.preventDefault();

        const searchValue = searchForm.querySelector('#input-place').value;
        if (!searchValue.trim().length) return;

        onSearch(searchValue);
        searchForm.reset();
    };
    
    return header;
};

export default headerComponent;