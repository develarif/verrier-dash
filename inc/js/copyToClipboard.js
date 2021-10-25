function reciveMoneyCopyBtn() {
    const getText = document.querySelector('input#ver-token');
    const copyTextBtn = document.getElementById('ver-token-btn1');
    const tickBtn = document.getElementById('ver-token-btn2');
    copyTextBtn.addEventListener('click', function(){
        getText.select();
        document.execCommand('copy');
        copyTextBtn.style.display = 'none';
        tickBtn.style.display = 'block';
    });
}
reciveMoneyCopyBtn();

function sendMoneyCopyBtn(){
    const getText = document.querySelector('input#fisrt-input');
    const copyTextBtn = document.getElementById('send-money-copy');
    copyTextBtn.addEventListener('click', function(){
        getText.select();
        document.execCommand('copy');
    });
}
sendMoneyCopyBtn();

function sendMoneyPasteBtn(){
    const getText = document.querySelector('input#fisrt-input');
    const pasteTextBtn = document.getElementById('send-money-paste');
    pasteTextBtn.addEventListener('click', function(){
        navigator.clipboard.readText().then(
            clipboardData => getText.value = clipboardData
        )
    });
}
sendMoneyPasteBtn();