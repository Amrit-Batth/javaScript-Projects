let [secs, mins, hrs] = [0,0,0];

const displayTime = document.getElementById("displaytime");

const play = document.getElementById("play");
const playAgain = document.getElementById("playAgain");
const sto = document.getElementById("stop");
let timer = null;

function stopwatch() {
    secs++;
    if(secs == 60) {
        secs=0;
        mins++;
        if(mins == 60) {
            mins=0;
            hrs++;
        }
    }
    let seconds = (secs < 10)?"0"+secs:secs;
    let minutes = (mins < 10)?"0"+mins:mins;
    let hours = (hrs < 10)?"0"+hrs:hrs;
    displayTime.innerHTML = hours+":"+minutes+":"+seconds;
}

function timeStart() {
    if(timer !== null) {
        clearInterval(timer);
    }
    setInterval(stopwatch,1000);
}

play.addEventListener("click",timeStart);

sto.addEventListener("click",()=>{
    clearInterval(timer);
    timer=null;
})

playAgain.addEventListener("click",()=> {
    clearInterval(timer);
    mins=0;
    secs=0;
    hrs=0;
    displayTime.innerHTML="00:00:00";
});