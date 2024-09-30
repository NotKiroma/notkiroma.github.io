let a = 50;
let b = 2;

let c = (a+b) * (b+a);

console.log("Вот вам ваш пример!")
console.log(c)

const button = document.getElementById('button');
button.addEventListener('click', function() {
    if(button.className === 'coralbutton') {
        button.className = 'corilbutton';
    }
    else {button.className = 'coralbutton';}
});