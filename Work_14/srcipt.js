let index = 0,
    photos = document.querySelectorAll(".photo");
const array = ["#one", "#two", "#three", "#four", "#five"];

function cikl() {
  photos.forEach(photos => {
    photos.classList.remove("show");
  });
};

document.querySelector('#prev').addEventListener("click", function() {
  cikl();
  img();
  document.querySelector(`${array[index]} img`).src = "free-icon-circle-565666.png";
  index--;
  if(index < 0)
    { index = photos.length - 1; }
  document.querySelector(`${array[index]} img`).src = "free-icon-button-565665.png";
  photos[index].classList.add("show");
  console.log(index);
});

document.querySelector('#next').addEventListener("click", function() {
  cikl();
  img();
  document.querySelector(`${array[index]} img`).src = "free-icon-circle-565666.png";
  index++;
  if(index >= photos.length)
  { index = 0; }
  document.querySelector(`${array[index]} img`).src = "free-icon-button-565665.png";
  photos[index].classList.add("show");
  console.log(index);
});

function img(){
  document.querySelector('#one img').src = "free-icon-circle-565666.png";
  document.querySelector('#two img').src = "free-icon-circle-565666.png";
  document.querySelector('#three img').src = "free-icon-circle-565666.png";
  document.querySelector('#four img').src = "free-icon-circle-565666.png";
  document.querySelector('#five img').src = "free-icon-circle-565666.png";
}
document.querySelector('#one').addEventListener("click", function() {
  cikl();
  photos[0].classList.add("show");
  img();
  document.querySelector('#one img').src = "free-icon-button-565665.png"
  index = 0;
});
document.querySelector('#two').addEventListener("click", function() {
  cikl();
  photos[1].classList.add("show");
  img();
  document.querySelector('#two img').src = "free-icon-button-565665.png"
  index = 1;
});
document.querySelector('#three').addEventListener("click", function() {
  cikl();
  photos[2].classList.add("show");
  img();
  document.querySelector('#three img').src = "free-icon-button-565665.png"
  index = 2;
});
document.querySelector('#four').addEventListener("click", function() {
  cikl();
  photos[3].classList.add("show");
  img();
  document.querySelector('#four img').src = "free-icon-button-565665.png"
  index = 3;
});
document.querySelector('#five').addEventListener("click", function() {
  cikl();
  photos[4].classList.add("show");
  img();
  document.querySelector('#five img').src = "free-icon-button-565665.png"
  index = 4;
});



