function initClock() {
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();
    var meridian = "PM";

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        meridian = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : h;

    var timeStamp = h + ":" + m + ":" + s + " " + meridian;
    document.getElementById(displayTime)


}




