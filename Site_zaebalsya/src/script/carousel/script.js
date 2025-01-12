let container_1 = document.querySelector("#one"),
    photos_1 = container_1.querySelectorAll(".photo"),
    carousel_obj_1 = new carousel(photos_1);
console.log(photos_1);

container_1.querySelector(".controls .prev").addEventListener("click", function() {
    carousel_obj_1.prev_photo();
});
container_1.querySelector(".next").addEventListener("click", function() {
    carousel_obj_1.next_photo();
});