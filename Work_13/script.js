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
        if(isNaN(input.value)){
            input.value = "";
        }
        let number = this.innerText;
        input.value = input.value + number;
    });
})

elem("#add").addEventListener("click", function() {
    last_number = input.value;
    input.value = "";
    operation = "add"
});
elem("#sub").addEventListener("click", function() {
    last_number = input.value;
    input.value = "";
    operation = "sub"
});
elem("#mul").addEventListener("click", function() {
    last_number = input.value;
    input.value = "";
    operation = "mul"
});
elem("#div").addEventListener("click", function() {
    last_number = input.value;
    input.value = "";
    operation = "div"
});
elem("#pow").addEventListener("click", function() {
    last_number = input.value;
    input.value = "";
    operation = "pow"
});
elem("#eql").addEventListener("click", function () {
    if(last_number && operation){
        let result;
    switch(operation){
        case "add": {
            if (isNaN(last_number) || isNaN(input.value))
            { result = "Ошибка" }
            else
            { result = parseInt(last_number) + parseInt(input.value); }
        }break;
        case "sub": {
            if (isNaN(last_number) || isNaN(input.value))
            { result = "Ошибка" }
            else
            { result = parseInt(last_number) - parseInt(input.value); }
        }break;
        case "mul": {
            if (isNaN(last_number) || isNaN(input.value))
            { result = "Ошибка" }
            else
            { result = parseInt(last_number) * parseInt(input.value); }
        }break;
        case "div": {
            if(input.value == 0){
                result = "Деление на ноль"
            }
            else if (isNaN(last_number) || isNaN(input.value))
            { result = "Ошибка" }
            else
            { result = parseInt(last_number) / parseInt(input.value); }
        }break;
        case "pow": {
            if (isNaN(last_number) || isNaN(input.value))
            { result = "Ошибка" }
            else
            { result = Math.pow(last_number, input.value); }
        }break;
    }
    input.value = result;
    last_number = null;
    operation = null;
    }
});

elem("#sqr").addEventListener("click", function() {
    let number = parseInt(input.value);
    if (isNaN(number)){
        input.value = "Не число";
    }else{
        input.value = Math.pow(number, 2);
    }
});
elem("#sqrt").addEventListener("click", function() {
    let number = parseInt(input.value);
    if (isNaN(number)){
        input.value = "Не число";
    }else if(number < 0){
        input.value = "Ошибка"
    }else{
        input.value = Math.sqrt(number);
    }
});
elem("#clr").addEventListener("click", function() {
    input.value = "";
    last_number = null;
    operation = null;
});