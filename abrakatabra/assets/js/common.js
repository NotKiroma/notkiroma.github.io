document.getElementById("toggle_menu").addEventListener("click", () => {
    document.querySelector("header nav").classList.add("active");
})

document.querySelector("header nav").addEventListener("click", () => {
    document.querySelector("header nav").classList.remove("active");
})

document.querySelector("header nav ul").addEventListener("click", (event) => {
    event.stopPropagation();
})