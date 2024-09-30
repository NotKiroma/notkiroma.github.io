const button = document.getElementById('buttoncolor');

button.addEventListener('click', function() {
    if (button.className === 'coralbutton')
    {button.className = 'lightcoralbutton';}
    else
    {button.className = 'coralbutton';}
})