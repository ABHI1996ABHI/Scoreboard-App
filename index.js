

function addone(){
    const homeScore = document.getElementById('home-score');
    homeScore.textContent = parseInt(homeScore.textContent) + 1;
}

function addtwo(){
    const homeScore = document.getElementById('home-score');
    homeScore.textContent = parseInt(homeScore.textContent) + 2;
}

function addthree(){
    const homeScore = document.getElementById('home-score');
    homeScore.textContent = parseInt(homeScore.textContent) + 3;
}


function guestone(){
       const  guestScore = document.getElementById('guest-score');
       guestScore.textContent = parseInt(guestScore.textContent) + 1;

}

function guesttwo(){

    const  guestScore = document.getElementById('guest-score');
    guestScore.textContent = parseInt(guestScore.textContent) + 2;

}

function guestthree(){

    const  guestScore = document.getElementById('guest-score');
    guestScore.textContent = parseInt(guestScore.textContent) + 2;

}

function reset(){

    const homeScore = document.getElementById('home-score');
    homeScore.textContent = 0;
    const guestScore = document.getElementById('guest-score');
    guestScore.textContent = 0;

    
}