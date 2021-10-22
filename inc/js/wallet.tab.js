const getTabUl = document.querySelector('#wallet-tab-header');
const allTabBtn = document.querySelectorAll('#wallet-tab-header > li');

const tabBody = document.querySelector('#wallet-tab-body');
const tabItem = tabBody.getElementsByClassName('tab-item');


for (let i = 0; i < allTabBtn.length; i++) {
    allTabBtn[i].addEventListener('click', ()=> {
        getTabUl.getElementsByClassName('active')[0].classList.remove('active');
        allTabBtn[i].classList.add('active');

        tabBody.getElementsByClassName('active')[0].classList.remove('active');
        tabItem[i].classList.add('active')
    });
}