function initClock() {
    let now = new Date();
    let hours = addZero(now.getHours());
    let minutes = addZero(now.getMinutes());
    let seconds = addZero(now.getSeconds());
    let sess = "AM"

    // Session switch.
    if (hours == 0) {
        hours = 12;
    }

    if (hours > 12) {
        hours = hours - 12;
        sess = "PM";
    }


    document.getElementById("displayTime").textContent = `${hours}:${minutes}:${seconds} ${sess}`;
    var t = setTimeout(function () { initClock(), 1000 });

};

function addZero(num) {
    return num < 10 ? "0" + num : num;
};

initClock();








