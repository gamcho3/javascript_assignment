/**
 * 실습문제 16 | 계산기 함수 만들기
 * 두 수를 입력받아 더하기, 빼기, 곱하기, 나누기를 하는 함수를 만들고, 이를 이용하여 계산기를 만들어 본다.
 *
 *
 */

const numbers = prompt("숫자를 입력하세요.").split(",");
for (let i = 0; i < numbers.length; i++) {
  numbers[i] = Number(numbers[i], 10);
}

document.getElementById("num1").innerText = numbers[0];
document.getElementById("num2").innerText = numbers[1];

// 위 코드는 건들지 마세요👆

// 아래 코드를 입력해 주세요👇

// 결과를 Html에 표시하는 함수입니다.
// result에는 계산 결과가 들어가 화면에 출력됩니다.
function displayResult(result) {
  document.getElementById("result").innerText = "결과: " + result;
}

// 두 숫자를 더하는 버튼 클릭 이벤트
document.getElementById("addBtn").addEventListener("click", function () {});

// 두 숫자를 빼는 버튼 클릭 이벤트
document
  .getElementById("subtractBtn")
  .addEventListener("click", function () {});

// 두 숫자를 곱하는 버튼 클릭 이벤트
document
  .getElementById("multiplyBtn")
  .addEventListener("click", function () {});

// 두 숫자를 나누는 버튼 클릭 이벤트
document.getElementById("divideBtn").addEventListener("click", function () {});
