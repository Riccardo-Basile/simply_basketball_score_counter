const displayHome = document.getElementById('display-home')
const displayGuest = document.getElementById('display-guest')

const plus1HomeBtn = document.getElementById('home-p1')
const plus2HomeBtn = document.getElementById('home-p2')
const plus3HomeBtn = document.getElementById('home-p3')
const plus1GuestBtn = document.getElementById('guest-p1')
const plus2GuestBtn = document.getElementById('guest-p2')
const plus3GuestBtn = document.getElementById('guest-p3')
const resetBtn = document.getElementById('reset-btn')

let homeScore = 0;
let guestScore = 0;


function startGame(){
displayHome.innerText = homeScore;
displayGuest.innerText = guestScore;

plus1HomeBtn.addEventListener('click', function(){
    homeScore = plusOne(homeScore);
    displayHome.innerText = homeScore;
})
plus2HomeBtn.addEventListener('click', function(){
    homeScore = plusTwo(homeScore);
    displayHome.innerText = homeScore;
})
plus3HomeBtn.addEventListener('click', function(){
    homeScore = plusThree(homeScore);
    displayHome.innerText = homeScore;
})
plus1GuestBtn.addEventListener('click', function(){
    guestScore = plusOne(guestScore);
    displayGuest.innerText = guestScore;
})
plus2GuestBtn.addEventListener('click', function(){
    guestScore = plusTwo(guestScore);
    displayGuest.innerText = guestScore;
})
plus3GuestBtn.addEventListener('click', function(){
    guestScore = plusThree(guestScore);
    displayGuest.innerText = guestScore;
})

resetBtn.addEventListener('click', resetScore)    
}

function plusOne(score){
    return score + 1
}
function plusTwo(score){
    return score+2
}
function plusThree(score){
    return score + 3
}


function resetScore(){
    homeScore = 0;
    guestScore = 0;
    startGame();
}

startGame();