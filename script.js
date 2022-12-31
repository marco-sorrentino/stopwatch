window.onload = function () {
  let seconds = 00;
  let tens = 00;
  let appendTens = document.getElementById("tens");
  let appendSeconds = document.getElementById("seconds");
  let buttonStart = document.getElementById("start");
  let buttonStop = document.getElementById("stop");
  let buttonReset = document.getElementById("reset");
  let interval;

  buttonStart.addEventListener("click", () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
  });

  buttonStop.addEventListener("click", () => {
    clearInterval(interval);
  });

  buttonReset.addEventListener("click", () => {
    clearInterval(interval);
    tens = 00;
    seconds = 00;
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
  });
};
