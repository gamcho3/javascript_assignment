const inputField = document.querySelector("#inputField");
const quiz = document.querySelector("#quiz");
const lifeElement = document.querySelector("#life");
const startBtn = document.querySelector("#start");
const timeElement = document.querySelector("#time");
const test = [
  "푸른 숲 속에는 다양한 동물들이 살아가고 있습니다.",
  "최신 스마트폰은 다양한 기능을 제공하여",
  "컴퓨터는 수많은 데이터를 빠르게 처리할 수 있는 기계입니다.",
];

quiz.textContent = test[0];
let timeId = null;
let life = 2;
let step = 0;
let initTime = 20;
let time = initTime;
timeElement.textContent = initTime;
inputField.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    let answer = inputField.value;
    if (answer === test[step]) {
      console.log("correct");
    } else {
      life--;
      lifeElement.textContent = life;
    }

    inputField.value = "";
    step++;

    if (step === test.length) {
      alert("통과!!!");
      inputField.value = "";
      timeElement.textContent = 0;
      clearInterval(timeId);
      return;
    }

    clearInterval(timeId);
    setGame();

    quiz.textContent = test[step];
  }
});

function setGame() {
  time = initTime;
  timeElement.textContent = time;
  timeId = setInterval(() => {
    time--;
    timeElement.textContent = time;
    if (time < 0 || life === 0) {
      clearInterval(timeId);
      alert("게임 종료");
      inputField.value = "";
      timeElement.textContent = 0;
    }
  }, 1000);
}

startBtn.addEventListener("click", function () {
  clearInterval(timeId);
  setGame();
});
