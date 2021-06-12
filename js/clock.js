const clock = document.querySelector(".clock");

function getTime() {
  const date = new Date();
  // "1".padStart(2, "0") -> "01": if it is not 2 digit, start with 0 / string.padStart
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();