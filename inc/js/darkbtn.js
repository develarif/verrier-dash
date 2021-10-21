const getBtn = document.querySelector('#dark-mode-input');
const getHtml = document.querySelector('html');

getBtn.addEventListener('click', () => {
    getBtn.checked ? getHtml.classList.add('dark') : getHtml.classList.remove('dark');
})