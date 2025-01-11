// Получаем элементы
const toggleMenuButton = document.getElementById('toggle-menu');
const closeMenuButton = document.getElementById('close-menu');
const sideMenu = document.getElementById('side-menu');

// Открытие меню
toggleMenuButton.addEventListener('click', () => {
    sideMenu.classList.add('open');
});

// Закрытие меню
closeMenuButton.addEventListener('click', () => {
    sideMenu.classList.remove('open');
});
