document.addEventListener("catalogLoaded", () => {
    let links = document.querySelectorAll("#catalog_catalog ul li a"),
        cache = new Map();



    links.forEach(link => {
        link.addEventListener("click", async function (e) {
            e.preventDefault();
            let href = this.href;
            if(cache.has(href)) {
                document.querySelector("#container_catalog").innerHTML = cache.get(href);
            }else{
                let data = await fetch(href);
                let text = await data.text();
                cache.set(href, text);
                document.querySelector("#container_catalog").innerHTML = text;
            }
        });
    });



});