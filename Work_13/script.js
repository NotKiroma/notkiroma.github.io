function elem(selector) {
    return document.querySelector(selector);
}
function elems(selector) {
    return document.querySelectorAll(selector);
}

let input = elem("input"),
    last_number,
    operation;

elems(".number").forEach(button => {
    button.addEventListener("click", function () {
        let number = this.innerText;
        input.value = input.value + number;
    });
})

elem("#add").addEventListener("click", function() {
    last_number = input.value;
    input.value = "";
});

elem("#eql").addEventListener("click", function () {

});