//constants/lets/var
let buttonOne = document.querySelector("#circle-one");
let buttonTwo = document.querySelector("#circle-two");
// let buttonThree = document.querySelector("#circle-three");
// let buttonFour = document.querySelector("#circle-four");
// let buttonFive= document.querySelector("#circle-five");

let lastButton = document.querySelector("#circle-last");

const countDown = document.getElementById("countdown");

//hide buttons until press
buttonTwo.style.display="none"
// buttonThree.style.display="none"
// buttonFour.style.display="none"
// buttonFive.style.display="none"
lastButton.style.display="none"
//add an on click event listener that starts the game and timer.
buttonOne.addEventListener('click', event =>{
        console.log("hello")
       clear = setInterval(updateCountdown, 1000);
        event.target.remove();
        buttonTwo.style.display="inline";
});

buttonTwo.addEventListener('click', event => {
    event.target.remove()
    lastButton.style.display="inline";
})

lastButton.addEventListener('click', event =>{
    event.target.remove();
    clearInterval(clear)
    
    

})


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