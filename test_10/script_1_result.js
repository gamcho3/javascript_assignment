/**
 * 1. 학생들 평균 키 구하기
 * ex) student_heights = [180, 124, 165, 173, 189, 169, 146]
 * 평균키는 총 학생 키의 합을 학생 수로 나누면 구할 수 있다.
 * ex) 180 + 124 + 165 + 173 + 189 + 169 + 146 = 1146
 * ex) 위 합은 student_heights 배열의 7개를 더한 값이다.
 * ex) 1146 ÷ 7 = 163.71428571428572
 * 평균 키를 첫째자리에서 반올림한다. = 164
 * 예시 입력1 -> 156 178 165 171 187
 * 예시 출력1 -> 키합 = 857 학생의 수 = 5 평균 키 = 171
 * 예시 입력2 -> 151 145 179
 * 예시 출력2 -> 키합 = 475 학생의 수 = 3 평균 키 = 158
 *
 * <심화> : 학생들의 최대 키와 최소 키도 출력해보세요.
 *
 * 힌트 : 첫째자리에서 반올림 하는방법은 Math.round()을 사용한다.
 * 출력방법은 document.write()를 사용한다.
 */

//* 학생들의 키를 입력받아 배열에 저장한다.
//  ["187","180","165"]
let student_heights = prompt("학생의 키를 입력해주세요", "167 180").split(" ");

//* 배열에 저장된 문자열을 숫자로 변환한다.
// ["187","   180","165"] -> [187,180,165]
for (let i = 0; i < student_heights.length; i++) {
  student_heights[i] = Number(student_heights[i]);
}
// 위 코드는 건들지 마세요👆

// 아래 코드를 입력해 주세요👇

let total_height = 0;

for (let i = 0; i < student_heights.length; i++) {
  total_height += student_heights[i];
}
document.write(`키합 = ${total_height} `);

let num_students = student_heights.length;

document.write(`학생의 수 = ${num_students} `);

let avg_height = Math.round(total_height / num_students);

document.write(`평균 키 = ${avg_height} `);

// 최대값 구하기
let max_height = student_heights[0];
for (let i = 1; i < student_heights.length; i++) {
  if (student_heights[i] > max_height) {
    max_height = student_heights[i];
  }
}
document.write(`최대값 = ${max_height} `);

// 최소값 구하기
let min_height = student_heights[0];
for (let i = 1; i < student_heights.length; i++) {
  if (student_heights[i] < min_height) {
    min_height = student_heights[i];
  }
}
document.write(`최소값 = ${min_height} `);
