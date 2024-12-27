document.querySelector("h1").innerText = "Hello World";

document.querySelector("img").src = "хомяк.jpg";

let parag = document.querySelector("p");
let old_text = parag.innerText;
parag.innerText = old_text + "!";

let body = document.querySelector("body");
body.innerHTML = body.innerHTML + "<div></div>";

let div = document.querySelector("div");
div.style.width = "100px";
div.style.height = "100px";

div.setAttribute("style", "background: red;" +
    "border: 2px solid black; width: 100px; height: 100px;");

div.innerHTML = "<p>Hello World</p>";