let number_arrays = prompt("숫자를 넣어주세요").split(",");

// 배열에 저장된 문자열을 숫자로 변환한다.
for (let i = 0; i < number_arrays.length; i++) {
  number_arrays[i] = Number(number_arrays[i]);
}

// 위 코드는 건들지 마세요👆

// 아래 코드를 입력해 주세요👇

let result = "";
for (let i = 0; i < number_arrays.length; i++) {
  // index에 해당하는 값을 number에 할당

  let number = number_arrays[i]; // 2부터 number의 수까지 반복

  if (number === 1) {
    result += `${number},`;
    continue;
  }

  for (let j = 2; j < number; j++) {
    // number를 j로 나눴을때 나머지가 0이면 소수가 아님

    if (number % j === 0) {
      result += `${number},`; // 소수 아닌 수를 찾았으므로 반복문을 빠져나감

      break;
    }
  }
}

document.write(`소수가 아닌 수: ${result}`);
