import './style.css';

const headerComponent = ({ onSearch }) => {
    const header = document.createElement('header');
    header.innerHTML = `
        <div class="logo">
            <h1>Weather App</h1>
            <iconify-icon icon="solar:cloud-broken"></iconify-icon>
        </div>

        <form class="search-container">
            <input type="search" id="input-place" placeholder="Search a location..." minlength="2" maxlength="100" required>
            <button type="submit">
                <iconify-icon icon="streamline-sharp:magnifying-glass"></iconify-icon>
            </button>
        </form>
    `;

    const searchForm = header.querySelector('.search-container');
    searchForm.onsubmit = (e) => {
        e.preventDefault();

        const searchValue = searchForm.querySelector('#input-place').value;
        if (!searchValue.trim().length) return;

        onSearch(searchValue);
    }
    
    return header;
};

export default headerComponent;