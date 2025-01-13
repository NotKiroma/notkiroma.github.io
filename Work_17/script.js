let links = document.querySelectorAll("header a"),
    aaaa = new Map();
const hashs = ["main", "about", "photos", "contact", "whisky", "catalog"];



links.forEach(link => {
    link.addEventListener("click", async function (e) {
        e.preventDefault();
        let href = this.href;
        if(aaaa.has(href)) {
            document.querySelector("#container").innerHTML = aaaa.get(href);
            window.location.hash = this.getAttribute("data-hash");
        }else{
            let data = await fetch(href);
            let text = await data.text();
            console.log(text);
            aaaa.set(href, text);
            document.querySelector("#container").innerHTML = text;
            window.location.hash = this.getAttribute("data-hash");
        }
    });
});

async function start() {
    let hash = window.location.hash;
    hash = hash.substring(1);
    if (!hash || !hashs.includes(hash)){
        hash = "main";
    }
    let data = await fetch(`${hash}.html`);
    let text = await data.text();
    aaaa.set("main.html", text);
    document.querySelector("#container").innerHTML = text;
    console.log(text);
};
start();

window.addEventListener("hashchange", function () {
    start();
});



