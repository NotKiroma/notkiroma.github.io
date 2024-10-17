const white = document.getElementById('white');
const yellow = document.getElementById('yellow');

if (window.innerWidth < 777){
    white.textContent = "Made for people."
    yellow.textContent = "Build for productivity."
}else{
    white.textContent = "Where"
    yellow.textContent = "happens"
}

    const getbutton = document.getElementById('get-button');

    if (window.innerWidth < 777){
        getbutton.textContent = "SLACK FOR ANDROID"
    }else{
        getbutton.textContent = "GET STARTED"
    }
    const logo = document.getElementById('logo');
    if (window.innerWidth < 777){
        logo.src = 'logowhite.png'
    }

    getbutton.addEventListener('click',function(){
        getbutton.classList.add('animate__animated', 'animate__bounce');
        setTimeout(function () {
            getbutton.classList.remove('animate__animated', 'animate__bounce');
        }, 1000);
    })
