import './style.css';

const emptyState = () => {
    const div = document.createElement('div');
    div.classList.add('empty-state');

    div.innerHTML = `
        <h2>Search to display some information</h2>
    `;

    return div;
};

export default emptyState;