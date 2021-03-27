initClock();

function initClock() {
    var now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let sess = "AM";


    if (now.getSeconds() < 10) {
        seconds = "0" + now.getSeconds();
    } else {
        seconds = now.getSeconds();
    }

    if (hours == 0) {
        hours = 12;
    }

    if (hours > 12) {
        hours = hours - 12;
        sess = "PM";
    }

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    let timeStamp = [`${hours}:${minutes}:${seconds} ${sess}`];

    document.getElementById("displayTime").textContent = timeStamp;
};


setInterval(initClock(), 1000);








