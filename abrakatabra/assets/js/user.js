document.getElementById("switch_to_register").addEventListener("click", () => {
    document.querySelector(".login").classList.remove("active")
    document.querySelector(".register").classList.add("active")
})

document.getElementById("switch_to_login").addEventListener("click", () => {
    document.querySelector(".login").classList.add("active")
    document.querySelector(".register").classList.remove("active")
})