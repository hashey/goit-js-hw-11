//=================================================================================

const refs = {
  timer: document.querySelector('#timer-1'),
  days: document.querySelector('[data-value=days]'),
  hours: document.querySelector('[data-value=hours]'),
  mins: document.querySelector('[data-value=mins]'),
  secs: document.querySelector('[data-value=secs]'),
};

const countdownTimer = targetDate => {
  const intervalId = setInterval(() => {
    const time = Date.parse(targetDate) - Date.now();
    //========================================================
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    //========================================================
    refs.days.innerHTML = days;
    refs.hours.innerHTML = hours;
    refs.mins.innerHTML = mins;
    refs.secs.innerHTML = secs;

    if (time < 0) {
      refs.timer.innerHTML = 'Time Is Out';
      clearInterval(intervalId);
    }
  }, 1000);
};

countdownTimer(new Date(2022, 11, 23, 19, 26));
