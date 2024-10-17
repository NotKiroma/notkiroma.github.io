const white = document.getElementById('white');
const yellow = document.getElementById('yellow');

if (window.innerWidth < 540){
    white.textContent = "Made for people."
    yellow.textContent = "Build for productivity."
}else{
    white.textContent = "Where"
    yellow.textContent = "happens"
}

    const getbutton = document.getElementById('get-button');

    if (window.innerWidth < 540){
        getbutton.textContent = "SLACK FOR ANDROID"
    }else{
        getbutton.textContent = "GET STARTED"
    }
    const logo = document.getElementById('logo');
    if (window.innerWidth < 540){
        logo.src = 'logowhite.png'
    }