import './style.css';

const loaderComponent = () => {
    const div = document.createElement('div');
    div.classList.add('loader-container');

    div.innerHTML = `
        <iconify-icon icon="pixelarticons:loading-3"></iconify-icon>
    `;

    return div;
};

export default loaderComponent;