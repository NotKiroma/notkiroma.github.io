let links = document.querySelectorAll(".fetch"),
    cache = new Map(),
    navigation = document.getElementById("navigation"),
    text = document.getElementById("aoeaw");
const hashs = ["main.html", "about.html", "contact.html", "whisky.html", "catalog.html"];

links.forEach(link => {
    link.addEventListener("click", async function (e) {
        e.preventDefault();
        let href = this.href;
        let hash = href.toString().substring(58);
        if (hashs[0] === hash) { navigation.classList.add("show"); }
        if (hashs[1] === hash) {
            navigation.classList.remove("show");
            text.textContent = "О нас" }
        if (hashs[2] === hash) {
            navigation.classList.remove("show");
            text.textContent = "Контакты"}
        if (hashs[3] === hash) {
            navigation.classList.remove("show");
            text.textContent = "Алкоголь" }
        if (hashs[4] === hash) {
            navigation.classList.remove("show");
            text.textContent = "Каталог" }
        if(cache.has(href)) {
            document.querySelector("#container").innerHTML = cache.get(href);
            loadscript()
        }else{
            let data = await fetch(href);
            let text = await data.text();
            cache.set(href, text);
            document.querySelector("#container").innerHTML = text;
            loadscript()
        }
    });
});

function loadscript() {
    document.dispatchEvent(new Event("catalogLoaded"));
    document.dispatchEvent(new Event("mainLoaded"));
    document.dispatchEvent(new Event("contactLoaded"));
};

async function start() {
    let data = await fetch("catalog.html");
    let text = await data.text();
    cache.set("main.html", text);
    document.querySelector("#container").innerHTML = text;
    loadscript()
};

start();

