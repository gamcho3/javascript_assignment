const numbers = prompt("숫자를 입력하세요.").split(",");
for (let i = 0; i < numbers.length; i++) {
  numbers[i] = Number(numbers[i], 10);
}

document.getElementById("num1").innerText = numbers[0];
document.getElementById("num2").innerText = numbers[1];

// 두 숫자를 더하는 함수
function add(num1, num2) {
  return num1 + num2;
}

// 두 숫자를 빼는 함수
function subtract(num1, num2) {
  return num1 - num2;
}

// 두 숫자를 곱하는 함수
function multiply(num1, num2) {
  return num1 * num2;
}

// 두 숫자를 나누는 함수
function divide(num1, num2) {
  if (num2 === 0) {
    return "0으로 나눌 수 없습니다.";
  } else {
    return num1 / num2;
  }
}

// 결과를 표시하는 함수
function displayResult(result) {
  document.getElementById("result").innerText = "결과: " + result;
}

// 이벤트 리스너 추가
document.getElementById("addBtn").addEventListener("click", ()=> {
  displayResult(add(numbers[0], numbers[1]));

});

document.getElementById("subtractBtn").addEventListener("click", function () {
  displayResult(subtract(numbers[0], numbers[1]));
});

document.getElementById("multiplyBtn").addEventListener("click", function () {
  displayResult(multiply(numbers[0], numbers[1]));
});

document.getElementById("divideBtn").addEventListener("click", function () {
  displayResult(divide(numbers[0], numbers[1]));
});
