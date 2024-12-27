let menu_button = document.querySelector('.menu');

menu_button.addEventListener('click', function (){
    document.querySelector("header").classList.add("open");
});

function close_menu() {
    document.querySelector("header").classList.remove("open");
}

document.querySelector(".grid").addEventListener('click', close_menu, false);

document.querySelector("header #menu").addEventListener('click', close_menu, false);