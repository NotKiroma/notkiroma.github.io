let links = document.querySelectorAll("#menu_left a"),
    aaaa = new Map();

links.forEach(link => {
    link.addEventListener("click", async function (e) {
        e.preventDefault();
        let href = this.href;
        if(aaaa.has(href)) {
            document.querySelector("#container").innerHTML = aaaa.get(href);
        }else{
            let data = await fetch(href);
            let text = await data.text();
            aaaa.set(href, text);
            document.querySelector("#container").innerHTML = text;
        }
    });
});

async function start() {
    let data = await fetch("main.html");
    let text = await data.text();
    aaaa.set("main.html", text);
    document.querySelector("#container").innerHTML = text;
};
start();