// 문제1. 빈배열 fruits를 생성한 후 apple,banana,cherry를 차례대로 추가하고 배열을 출력하세요.
const fruits = [];

// push 메서드를 사용하여 배열에 요소를 추가하세요.
fruits.push("apple");
fruits.push("banana");
fruits.push("cherry");
//문제2. 배열 fruits에서 마지막 요소를 제거하고 배열을 출력하시오.
fruits.pop();
console.log(fruits);
//문제3. 배열 fruits에 'onrage'를 맨 앞에 추가하고 배열을 출력하시오.
fruits.unshift("orange");
console.log(fruits);
//문제4. 배열 fruits에서 첫번째 요소를 제거하고 배열을 출력하시오.
fruits.shift();
console.log(fruits);
//문제5. 배열 fruits에 banana가 포함되어 있는지 확인하세요.
//포함되어 있으면 'banana가 포함되어 있습니다.'를 출력하고,
//포함되어 있지 않으면 'banana가 포함되어 있지 않습니다.'를 출력하시오.
if (fruits.includes("banana")) {
  console.log("banana가 포함되어 있습니다.");
} else {
  console.log("banana가 포함되어 있지 않습니다.");
}
//문제6. 인덱스 2에 pupple를 추가하시오.
//문제7. 인덱스 1에서 1개의 요소를 제거하시오.
//문제8. 인덱스 0에서 2개의 요소를 제거하고 orange와 pink를 추가하시오.
const colors = ["red", "green", "blue", "yellow"];

// 인덱스 2에 'purple'을 추가하세요.
colors.splice(2, 0, "purple");
console.log(colors); // ['red', 'green', 'purple', 'blue', 'yellow']

// 인덱스 1에서 1개의 요소를 제거하세요.
colors.splice(1, 1);
console.log(colors); // ['red', 'purple', 'blue', 'yellow']

// 인덱스 0에서 2개의 요소를 제거하고, 'orange'와 'pink'를 추가하세요.
colors.splice(0, 2, "orange", "pink");
console.log(colors); // ['orange', 'pink', 'blue', 'yellow']
