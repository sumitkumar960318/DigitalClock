let hoursElement = document.getElementById("hours");
let minutesElement = document.getElementById("minutes");
let secondsElement = document.getElementById("seconds");
let ampmElement = document.getElementById("ampm");

function digitalClock() {
    let dat = new Date();
    let h = dat.getHours();
    let min = dat.getMinutes();
    let sec = dat.getSeconds();
    let amPm = "AM"

    if (h > 12) {
        h = h - 12;
        amPm = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    hoursElement.innerHTML = h;
    minutesElement.innerHTML = min;
    secondsElement.innerHTML = sec;
    ampmElement.innerHTML = amPm;

    setInterval(digitalClock, 1000)
}
digitalClock();
