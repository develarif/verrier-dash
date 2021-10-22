const getText = document.querySelector('input#ver-token');
const copyTextBtn = document.getElementById('ver-token-btn1');
const tickBtn = document.getElementById('ver-token-btn2');

copyTextBtn.addEventListener('click', function(){

    getText.select();
    document.execCommand('copy');

    copyTextBtn.style.display = 'none';
    tickBtn.style.display = 'block';
})
