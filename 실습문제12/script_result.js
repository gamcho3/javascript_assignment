/**
 * 지도 x마크 찍기
 * 지도에 위치 좌표를 받아 X마크를 찍는 프로그램을 만드려고 합니다.
 * map이라는 2차원 배열이 있습니다. map은 3x3 배열입니다.
 * 지도는 숫자와 글자로 좌표를 확인할 수 있습니다.
 *
 * 예상입력-> :B3
 * 예상출력 -> o,X,o
              o,o,o
              o,o,o

 *예상입력-> :B3
  *예상출력 ->   o,o,o
                o,o,o
                o,X,o
 * 힌트 :
 * 글자와 숫자 각각의 index를 구해야 합니다.
 * ppt에 맵에 대한 그림이 있습니다.
 */

let position = prompt("탐험할 위치를 골라주세요.").split("");
            // A     B     C
const line1 = ["o", "o", "o"]; // 0
const line2 = ["o", "o", "o"]; // 1
const line3 = ["o", "o", "o"]; // 2
const map = [line1, line2, line3];

// 위 코드는 건들지 마세요👆

// 아래 코드를 입력해 주세요👇

//A1 = [0][0] B1 = [0][1] C1 = [0][2]
//A2 = [1][0] B2 = [1][1] C2 = [1][2]
//A3 = [2][0] B3 = [2][1] C3 = [2][2]

// 글자를 letter 변수에 저장
let letter = position[0];
// 숫자를 number 변수에 저장
let number = position[1];

// index를 구하기 위한 글자 배열 생성
const abc = ["A", "B", "C"];

// letter_index 변수 선언
let letter_index;
// number_index 변수 선언
let number_index;


// letter가 A일경우 index 0을 할당
// B일경우 index 1을 할당
// C일경우 index 2를 할당
switch (letter) {
  case "A":
    letter_index = 0;
    break;
  case "B":
    letter_index = 1;
    break;
  case "C":
    letter_index = 2;
    break;
}

// index는 0부터 시작하기 때문에 숫자 -1 을하여 index를 구함
number_index = number - 1;

console.log(number_index);
console.log(letter_index);
// 좌표에 맞게 x 입력
map[number_index][letter_index] = "X";

// 아래 코드는 건들지 마세요👇
document.write(`${line1}<br>${line2}<br>${line3}`);
