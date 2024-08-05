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

let nr_letters = Number(prompt("비밀번호에 몇개의 글자를 넣으시겠습니까?"));
let nr_numbers = Number(prompt("비밀번호에 몇개의 숫자를 넣으시겠습니까?"));
let nr_symbols = Number(prompt("비밀번호에 몇개의 특수문자를 넣으시겠습니까?"));

let reuslt = "";
for (let i = 0; i < nr_letters; i++) {
  let random = Math.random() * letters.length;
  let randomInt = Math.floor(random);
  reuslt += letters[randomInt];
}

for (let i = 0; i < nr_numbers; i++) {
  let random = Math.random() * numbers.length;
  let randomInt = Math.floor(random);

  reuslt += numbers[randomInt];
}

for (let i = 0; i < nr_symbols; i++) {
  let random = Math.random() * symbols.length;
  let randomInt = Math.floor(random);
  reuslt += symbols[randomInt];
}

// 쉬운단계
document.write(reuslt);

// 어려운 단계
