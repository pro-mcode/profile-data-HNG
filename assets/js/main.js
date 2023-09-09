let dayWeek = document.getElementById("week-day");
let time = document.getElementById('current-time');
let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
let dateNow = new Date();
let dayNow = dateNow.getDay();
dayWeek.innerHTML = `${weekDays[dayNow]},`;
setInterval(() => {
    let d = new Date();
    time.innerHTML = d.toLocaleTimeString();
},1000)
