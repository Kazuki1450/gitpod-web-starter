// おみくじ
let omikujiButton = document.getElementById("omikuji-button");
let omikujiResult = document.getElementById("omikuji-result");

function omikuji() {
  r = Math.random();
  if (r < 0.2) {
    omikujiResult.textContent = "大吉";
    omikujiResult.style.color = "red";
  } else if (0.2 <= r && r < 0.7) {
    omikujiResult.textContent = "吉";
    omikujiResult.style.color = "black";
  } else {
    omikujiResult.textContent = "凶";
    omikujiResult.style.color = "blue";
  }
}

omikujiButton.onclick = omikuji;

// ストップウォッチ
let startButton = document.getElementById("start-button");
let stopButton = document.getElementById("stop-button");
let resetButton = document.getElementById("reset-button");
let startResult = document.getElementById("start-result");
let time = 0;
let timerId;

function tick() {
  time += 1;
  startResult.textContent = time;
  if (time % 10 === 0) {
    startResult.style.color = "red";
  }
}
function start() {
  timerId = setInterval(tick, 1000);
}
function stop() {
  clearInterval(timerId);
}
function reset() {
  time = 0;
  startResult.textContent = time;
}

startButton.onclick = start;
stopButton.onclick = stop;
resetButton.onclick = reset;
