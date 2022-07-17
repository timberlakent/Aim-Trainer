const button1 = document.getElementById("#circle1");

// timer logic
const startingMinutes = 0;
let time = startingMinutes * 60;

const countDown = document.getElementById("countdown");

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    countDown.innerHTML = `${minutes}:${seconds}`; 
    time++;
}
//end timer logic