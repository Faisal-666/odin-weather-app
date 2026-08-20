import './style.css';

const emptyState = () => {
    const div = document.createElement('div');
    div.classList.add('empty-state');
    
    div.innerHTML = `<h2>Search to display some information</h2>`;

    const changeMsg = (msg) => {
        div.innerHTML = `
            <iconify-icon icon="pixelarticons:warning-diamond"></iconify-icon>
            <span>${msg}</span>
            <h2>Search to display some information</h2>
        `;
    }

    return {
        element: div,
        changeMsg
    };
};

export default emptyState;