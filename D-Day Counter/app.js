setInterval(() => {
    const targetDate = new Date("January 1, 2023 00:00:00");
    const currentDate = new Date();

    let differMillSec = targetDate - currentDate;
    let differDays = differMillSec / (1000 * 60 * 60 * 24);
    let differRest = differMillSec - Math.floor(differDays) * (1000 * 60 * 60 * 24);

    let differHour = differRest / (1000 * 60 * 60);
    differRest -= Math.floor(differHour) * 1000 * 60 * 60;
    let differMin = differRest / (1000 * 60);
    differRest -= Math.floor(differMin) * 1000 * 60;
    let differSec = differRest / 1000;

    document.getElementById("days").innerHTML = Math.floor(differDays);
    document.getElementById("hours").innerHTML = Math.floor(differHour);
    document.getElementById("mins").innerHTML = Math.floor(differMin);
    document.getElementById("secs").innerHTML = Math.floor(differSec);
})