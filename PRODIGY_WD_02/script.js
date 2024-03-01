const btnStart = document.querySelector(".start");
const btnPause = document.querySelector(".pause");
const btnReset = document.querySelector(".reset");

let hrs = (min = sec = ms = 0),
  startTimer;

btnStart.addEventListener("click", () => {
  btnStart.classList.add("start-active");
  btnPause.classList.remove("pause-active");

  startTimer = setInterval(() => {
    ms++;
    // ms = ms + 1;
    if (ms == 100) {
      sec++;
      ms = 0;
    }
    if (sec == 60) {
      min++;
      sec = 0;
    }
    if (min == 60) {
      hrs++;
      min = 0;
    }
    updateDisplay();
  }, 10);
});

btnPause.addEventListener("click", () => {
  clearInterval(startTimer);
  btnStart.classList.remove("start-active");
  btnPause.classList.add("pause-active");
});

btnReset.addEventListener("click", () => {
  hrs = min = sec = ms = 0;
  clearInterval(startTimer);
  updateDisplay();
  btnStart.classList.remove("start-active");
  btnPause.classList.remove("pause-active");
});
function updateDisplay() {
  //Formated Display
  phrs = hrs < 10 ? "0" + hrs : hrs;
  pmin = min < 10 ? "0" + min : min;
  psec = sec < 10 ? "0" + sec : sec;
  pms = ms < 10 ? "0" + ms : ms;
  //Output
  document.querySelector(".hrs").innerText = phrs;
  document.querySelector(".min").innerText = pmin;
  document.querySelector(".sec").innerText = psec;
  document.querySelector(".ms").innerText = pms;
}
