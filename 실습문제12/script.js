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

let position = prompt("탐험할 위치를 골라주세요.").split(""); // ["B","3"]

const line1 = ["o", "o", "o"];
const line2 = ["o", "o", "o"];
const line3 = ["o", "o", "o"];
const map = [line1, line2, line3];

// 위 코드는 건들지 마세요👆

// 아래 코드를 입력해 주세요👇

// 아래 코드는 건들지 마세요👇
document.write(`${line1}<br>${line2}<br>${line3}`);
