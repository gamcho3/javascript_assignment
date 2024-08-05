//문제1. 두개의 배열을 하나로 합치고 최종배열을 출력하시오
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = arr1.concat(arr2);
//문제2. 인덱스 1부터 3까지의 요소를 추출하여 새로운 배열을 만드시오.
const animals = ["dog", "cat", "rabbit", "hamster", "bird"];
const someAnimals = animals.slice(1, 4);
console.log(someAnimals);
//문제3. 배열을 하나의 문자열로 반환하시오
const words = ["Hello", "world", "this", "is", "JavaScript"];
const sentence = words.join(" ");
console.log(sentence);
//문제4. 배열의 순서를 반대로 하시오
const numbers = [1, 2, 3, 4, 5];
numbers.reverse();
//문제5. numbers2 배열의 요소를 오름차순과 내림차순으로 정렬하시오
const numbers2 = [5, 3, 8, 1, 2];

// 오름차순 정렬
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 2, 3, 5, 8]

// 내림차순 정렬
numbers.sort((a, b) => b - a);
console.log(numbers); // [8, 5, 3, 2, 1]

//문제6. 객체배열을 price속성 기준으로 오름차순 과 내림차순으로 정렬하시오
const products = [
  { name: "apple", price: 100 },
  { name: "banana", price: 50 },
  { name: "cherry", price: 75 },
  { name: "date", price: 120 },
];
// 가격을 기준으로 오름차순 정렬
products.sort((a, b) => a.price - b.price);

// 가격을 기준으로 내림차순 정렬
products.sort((a, b) => b.price - a.price);

//문제7. map

// 각 요소를 두 배로 만드는 새로운 배열을 만드세요.
const doubledNumbers = numbers.map((number) => number * 2);

console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// filter
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 짝수만 필터링하는 배열을 만드세요.
const evenNumbers = numbers.filter((number) => number % 2 === 0);

console.log(evenNumbers); // [2, 4, 6, 8, 10]
// find
const numbers = [4, 9, 16, 25, 29];

// 10보다 큰 첫 번째 요소를 찾으세요.
const firstNumberGreaterThanTen = numbers.find((number) => number > 10);

console.log(firstNumberGreaterThanTen); // 16
// findindex
const numbers = [4, 9, 16, 25, 29];

// 10보다 큰 첫 번째 요소의 인덱스를 찾으세요.
const index = numbers.findIndex((number) => number > 10);

console.log(index); // 2 (요소 16의 인덱스)
//reduce
const numbers = [1, 2, 3, 4, 5];

// 모든 요소의 합을 구하세요.
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(sum); // 15
//map 심화
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Jim" },
];

// 모든 사용자의 이름만 추출한 배열을 만드세요.
const names = users.map((user) => user.name);

console.log(names); // ['John', 'Jane', 'Jim']
