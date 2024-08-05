/**
 * 실습문제 15 | 랜덤한 비밀번호 만들기
 * 복잡한 비밀번호를 만들기 위해 글자, 숫자, 특수문자를 섞어서 비밀번호를 만든다
 * prompt를 통해 각각의 글자, 숫자, 특수문자의 개수를 입력받아서 랜덤하게 글자를 섞어서 출력한다.
 *
 * 힌트 : Math.random() 함수를 사용하여 각각의 글자, 숫자, 특수문자를 랜덤하게 선택한다.
 * Math.floor() 함수를 사용하여 소수점 이하를 버린다.
 */

const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

// 위 코드는 건들지 마세요👆

// 아래 코드를 입력해 주세요👇

// 입력받은 글자를 숫자로 변환
let nr_letters = Number(prompt("비밀번호에 몇개의 글자를 넣으시겠습니까?"));
let nr_numbers = Number(prompt("비밀번호에 몇개의 숫자를 넣으시겠습니까?"));
let nr_symbols = Number(prompt("비밀번호에 몇개의 특수문자를 넣으시겠습니까?"));

// 글자임을 표시
let result = "";

// 입력받은 글자의 개수만큼 반복문 실행
for (let i = 0; i < nr_letters; i++) {
  // 랜덤난수 출력 => 0~배열의 길이
  let random = Math.random() * letters.length;
  // 소수점을 버린후 정수 출력
  let ramdomInt = Math.floor(random);
  result += letters[ramdomInt];
}

// 입력받은 숫자의 개수만큼 반복문 실행
for (let i = 0; i < nr_numbers; i++) {
  // 랜덤난수 출력 => 0~배열의 길이
  let random = Math.random() * numbers.length;
  // 소수점을 버린후 정수 출력
  let ramdomInt = Math.floor(random);
  result += numbers[ramdomInt];
}

// 입력받은 특수문자의 개수만큼 반복문 실행
for (let i = 0; i < nr_symbols; i++) {
  // 랜덤난수 출력 => 0~배열의 길이
  let random = Math.random() * symbols.length;
  // 소수점을 버린후 정수 출력
  let ramdomInt = Math.floor(random);
  result += symbols[ramdomInt];
}

document.write(result);

function calculate(num1, num2) {
  // 곱셈 결과 출력
  let product = num1 * num2;
  console.log("Product: " + product);

  // 나눗셈 결과 조건 확인 및 출력
  if (num2 > 0 && num1 >= 0) {
    let division = num1 / num2;
    console.log("Division: " + division);
  } else {
    console.log("Cannot divide by zero or negative number");
  }
}
