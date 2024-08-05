// 위 코드는 건들지 마세요👆

// 아래 코드를 입력해 주세요👇

let correctNumber = Math.floor(Math.random() * 10) + 1;

// 사용자 입력을 받을 변수 초기화
let userGuess = 0;

while (userGuess !== correctNumber) {
  // 사용자로부터 숫자를 입력받음
  userGuess = Number(prompt("1부터 10 사이의 숫자를 맞춰보세요: "));
  // 입력한 숫자가 정답인지 확인
  if (userGuess < correctNumber) {
    alert("더 큰 숫자입니다. 다시 시도하세요.");
  } else if (userGuess > correctNumber) {
    alert("더 작은 숫자입니다. 다시 시도하세요.");
  } else if (userGuess === correctNumber) {
    alert("축하합니다! 정답입니다.");
  } else {
    alert("잘못된 입력입니다. 숫자를 입력해주세요.");
  }
}
