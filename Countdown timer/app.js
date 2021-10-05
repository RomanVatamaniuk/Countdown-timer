const text = document.querySelector('.input');
const btn = document.querySelector('.setter');
const h1 = document.querySelector('h1');


let newYears = `1 Jan ${text.value}`
const day = document.getElementById('days');
const hour = document.getElementById('hours');
const minute = document.getElementById('minutes');
const second = document.getElementById('seconds');

function countDown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const totalSeconds = (newYearsDate - currentDate)/ 1000;

    const days = Math.floor(totalSeconds/ 3600 / 24);
    const hours = Math.floor(totalSeconds/ 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    day.textContent = days;
    hour.textContent = hours;
    minute.textContent = minutes;
    second.textContent = seconds;
}

setInterval(countDown, 1000);


btn.addEventListener('click', function(){
    h1.textContent = `Time untill new ${text.value} year`;
    newYears = `1 Jan ${text.value}`;
    countDown();
})


