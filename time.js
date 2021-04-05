function initClock() {
    let now = new Date();
    let hours = addZero(now.getHours());
    let minutes = addZero(now.getMinutes());
    let seconds = addZero(now.getSeconds());

    let amPm = "AM";
    amPm = (hours >= 12) ? "PM" : "AM";
    hours = (hours == 0) ? 12 : ((hours > 12) ? (hours - 12) : hours);


    document.getElementById("displayTime").textContent = `${hours}:${minutes}:${seconds} ${amPm}`;

    setTimeout(function () { initClock(), 1000 });

    // Date...

    const today = new Date();

    // Days...

    const day = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
    ];
    const dayName = day[today.getDay()];


    //  Months...

    const month = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    const monthName = month[today.getMonth()];
    const fullYear = [today.getFullYear()];
    const weekDay = [today.getDate()]

    document.getElementById("displayDate").textContent = `${dayName}, ${monthName} ${weekDay}, ${fullYear}`;

};

function addZero(num) {
    return num < 10 ? "0" + num : num;
};

initClock();















