const rub = document.getElementById('rub');
const usd = document.getElementById('usd');
const kzt = document.getElementById('kzt');
const price = document.getElementById('price');
document.getElementById('buttonbuy').addEventListener('click', function(){
    window.location.href = 'Oplata.html';
})

rub.addEventListener('click', function () {
    rub.classList.remove('active');
    usd.classList.remove('active');
    kzt.classList.remove('active');
    rub.classList.add('active');
    price.textContent = "200 ₽";
});
usd.addEventListener('click', function () {
    rub.classList.remove('active');
    usd.classList.remove('active');
    kzt.classList.remove('active');
    usd.classList.add('active');
    price.textContent = "2 $";
});
kzt.addEventListener('click', function () {
    rub.classList.remove('active');
    usd.classList.remove('active');
    kzt.classList.remove('active');
    kzt.classList.add('active');
    price.textContent = "1000 ₸";
});



