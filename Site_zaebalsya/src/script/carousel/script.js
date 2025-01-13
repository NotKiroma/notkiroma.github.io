document.addEventListener("mainLoaded", () => {
    let container_1 = document.querySelector("#one");
    if (container_1) {
        let photos_1 = container_1.querySelectorAll(".photo");
        let carousel_obj_1 = new carousel(photos_1);

        console.log("Карусель инициализирована.");

        container_1.querySelector(".prev").addEventListener("click", function () {
            carousel_obj_1.prev_photo();
        });
        container_1.querySelector(".next").addEventListener("click", function () {
            carousel_obj_1.next_photo();
        });
    } else {
        console.error("Элемент #one не найден.");
    }
});