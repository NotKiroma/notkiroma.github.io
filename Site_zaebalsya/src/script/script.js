const menu_left = document.querySelector('#menu_left');
const  menu_button = document.querySelector('#menu button');
const div_img_close = document.querySelector('#div_img button');

const shadow = document.querySelector('#shadow');
const shadow_low = document.querySelector('#shadow_low');

const basket_button = document.querySelector('#basket button');
const menu_right = document.querySelector('#menu_right');
const right_img_div_close = document.querySelector('#right_img_div button');

function show_shadow_low() {
  shadow_low.classList.add("show");
}
function remove_shadow_low() {
  shadow_low.classList.remove("show");
}
function show_menu_right() {
  menu_right.classList.add("show");
}
function close_menu_right() {
  menu_right.classList.remove("show");
}
function show_shadow() {
  shadow.classList.add("show");
}
function remove_shadow() {
  shadow.classList.remove("show");
}
function close_menu() {
  menu_left.classList.remove("show");
}
function show_menu() {
  menu_left.classList.add("show");
}

right_img_div_close.addEventListener("click", function() {
  close_menu_right();
  remove_shadow_low();
});
basket_button.addEventListener('click', function () {
  show_menu_right();
  show_shadow_low();
});
menu_button.addEventListener("click", function() {
  show_menu();
  show_shadow();
});
div_img_close.addEventListener("click", function() {
  close_menu();
  remove_shadow();
});

document.addEventListener('click', (e) => {
  if (!menu_left.contains(e.target) && !document.querySelector('#menu button').contains(e.target)) {
    close_menu();
    remove_shadow();
  }
});