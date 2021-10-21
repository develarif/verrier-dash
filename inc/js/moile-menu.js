const openMenu = document.querySelector('#open-menu-btn');
const showMenu = document.querySelector('.menu-bar');
const getBody = document.querySelector('body');

openMenu.addEventListener('click', function(x){
    x.preventDefault();
    showMenu.classList.contains('show-mobile-menu') ? showMenu.classList.remove('show-mobile-menu') : showMenu.classList.add('show-mobile-menu');
});

function getWindowSize() {
    if (window.innerWidth > 1024) {
        showMenu.classList.contains('show-mobile-menu') ? showMenu.classList.remove('show-mobile-menu') : '';
    }
}
window.onresize = getWindowSize;