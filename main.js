const day = document.getElementById('day');
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 1 ${currentYear + 1} 00:00:00`);

function updateCountdownTime() {
    const currentTime = new Date();
    const diff = newYearTime - currentTime;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    day.innerHTML = d;
    hour.innerHTML = h < 10 ? '0' + h : h;
    minute.innerHTML = m < 10 ? '0' + m : m;
    second.innerHTML = s < 10 ? '0' + s : s;
}

setInterval(updateCountdownTime, 1000);

const countdown = document.getElementById('countdown');
const btnHide = document.getElementById('btn-hide');
const btnShow = document.getElementById('btn-show');

btnHide.addEventListener('click', () => {
    countdown.style.display = 'none';
})

btnShow.addEventListener('click', () => {
    countdown.style.display = 'flex'
})

