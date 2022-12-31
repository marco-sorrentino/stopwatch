window.onload = function () {
  let seconds = 00;
  let tens = 00;
  let appendTens = document.getElementById("tens");
  let appendSeconds = document.getElementById("seconds");
  let buttonStart = document.getElementById("start");
  let buttonStop = document.getElementById("stop");
  let buttonReset = document.getElementById("reset");
  let Interval;

  buttonStart.addEventListener("click", () => {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  });

  buttonStop.addEventListener("click", () => {
    clearInterval(Interval);
  });

  buttonReset.addEventListener("click", () => {
    clearInterval(Interval);
    tens = 00;
    seconds = 00;
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
  });

  const startTimer = () => {
    tens++;
    if (tens <= 9) {
      appendTens.innerHTML = "0" + tens;
    }
    if (tens > 9) {
      appendTens.innerHTML = tens;
    }
    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }
  };
};
