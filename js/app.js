//constants/lets/var
let buttonOne = document.querySelector("#circle-one");
let buttonTwo = document.querySelector("#circle-two");
let buttonThree = document.querySelector("#circle-three");
let buttonFour = document.querySelector("#circle-four");
let button5 = document.querySelector("#circle-five");
let button6 = document.querySelector("#circle-6");
let button7 = document.querySelector("#circle-7");
let button8 = document.querySelector("#circle-8");
let button9 = document.querySelector("#circle-9");
let button10 = document.querySelector("#circle-10");
let button11 = document.querySelector("#circle-11");
let button12 = document.querySelector("#circle-12");
let practiceButton = document.querySelector('#practice-button');
let gameScreen = document.querySelector('#game-screen');
let startButton = document.querySelector("#start-button");
let startScreen = document.querySelector("#start-screen")
const color = ['#cc99ff'];
let score = 0;
let lastButton = document.querySelector("#circle-last");
const countDown = document.getElementById("countdown");

//hide buttons until press
buttonOne.style.display="none"
buttonTwo.style.display="none"
buttonThree.style.display="none"
buttonFour.style.display="none"
button5.style.display="none"
button6.style.display="none"
button7.style.display="none"
button8.style.display="none"
button9.style.display="none"
button10.style.display="none"
button11.style.display="none"
button12.style.display="none"
lastButton.style.display="none"

//create start button listener that on click: starts the timer and calls the circle gen.
startButton.addEventListener('click', event => {
    clear = setInterval(updateCountdown, 1000);
    event.target.remove();
    practiceButton.remove();
    startScreen.remove();
    randomCircle();

})

practiceButton.addEventListener('click', event => {
    console.log("hi")
    event.target.remove();
    startButton.remove();
    startScreen.remove();
    clear = setInterval(updateCountdown, 1000);
    buttonOne.style.display="inline";

})


//add an on click event listener that starts the practice game and timer.
buttonOne.addEventListener('click', event =>{
        // console.log("hello")
        
        event.target.remove();
        buttonTwo.style.display="inline";
});

buttonTwo.addEventListener('click', event => {
    event.target.remove()
    buttonThree.style.display="inline";
})

buttonThree.addEventListener('click', event => {
    event.target.remove();
    buttonFour.style.display="inline";
})

buttonFour.addEventListener('click', event => {
    console.log("hello");
    event.target.remove();
    button5.style.display="inline";
})

button5.addEventListener('click', event => {
    console.log("hi");
    event.target.remove();
    button6.style.display="inline";
})

button6.addEventListener('click', event => {
    event.target.remove();
    button7.style.display="inline";
})

button7.addEventListener('click', event => {
    event.target.remove();
    button8.style.display="inline";
})

button8.addEventListener('click', event => {
    event.target.remove();
    button9.style.display="inline";
})

button9.addEventListener('click', event => {
    event.target.remove();
    button10.style.display="inline";
})

button10.addEventListener('click', event => {
    event.target.remove();
    button11.style.display="inline";
})

button11.addEventListener('click', event => {
    event.target.remove();
    button12.style.display="inline";
})

button12.addEventListener('click', event => {
    event.target.remove();
    lastButton.style.display="inline";
})


lastButton.addEventListener('click', event =>{
    event.target.remove();
    clearInterval(clear)
    message();
})

gameScreen.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
      event.target.remove();
      score++;
      randomCircle();
    } else { 
        if(score <= 0) {
            return alert("oof...0 circles clicked...lets not talk about it.")
        } else {
        

        miss();
    }
}
  });

  
// timer logic
//create starting timer
const startingMinutes = 0;
//create starting  minutes 
let time = startingMinutes * 60;
clear;


//write a function that creats a timer 
function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    countDown.innerHTML = `${minutes}:${seconds}`; 
    time++;
}
//end timer logic

function message() {
    alert("Play again?");
    window.location.reload();
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

function randomCircle() {
    const circle = document.createElement('div');
    const size = 30;
    const {width, height} = gameScreen.getBoundingClientRect();
    const x = getRandomNumber(0, width - size);
    const y = getRandomNumber(0, height - size);
    circle.classList.add('circle');
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;
    circle.style.background = color;
  
    gameScreen.append(circle);
  }

//alert for a miss click giving score and time
function miss() {
    alert("Oh no you missed :(. You hit "+score+" circles in "+time+" seconds! Hit ok to play again!")
    window.location.reload();

}
