let index = 0,
  photos = document.querySelectorAll(".photo");

document.querySelector('#prev').addEventListener("click", function() {
  photos.forEach(photos => {
    photos.classList.remove("show");
  });
  index--;
  if(index < 0)
    { index = photos.length - 1; }
  photos[index].classList.add("show");
});
document.querySelector('#next').addEventListener("click", function() {
  photos.forEach(photos => {
    photos.classList.remove("show");
  });
  index++;
  if(index >= photos.length)
  { index = 0; }
  photos[index].classList.add("show");
});