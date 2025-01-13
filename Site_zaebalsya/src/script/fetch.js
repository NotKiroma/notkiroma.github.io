let links = document.querySelectorAll(".fetch"),
    cache = new Map();

links.forEach(link => {
    link.addEventListener("click", async function (e) {
        e.preventDefault();
        let href = this.href;
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
    document.dispatchEvent(new Event("mainLoaded"));
    document.dispatchEvent(new Event("contactLoaded"));
};

async function start() {
    let data = await fetch("contact.html");
    let text = await data.text();
    cache.set("main.html", text);
    document.querySelector("#container").innerHTML = text;
    loadscript()
    console.log("main.html успешно загружен.");
};

start();

