/**
 * 1. 짝수 숫자의 합 구하기
 * 1부터 x까지의 숫자 중 짝수의 합을 구하려고 한다.
 * 만약 x의 숫자가 100이라면 첫번째 짝수는 2이고 마지막 짝수는 100이 된다.
 * ex) 2 + 4 + 6 + 8 + ... + 100 = 2550
 * 예시 입력1 -> 10
 * 예시 출력1 -> 30
 * 예시 입력2 -> 52
 * 예시 출력2 -> 702
 * 힌트 : for문을 사용하여 1부터 x까지의 숫자를 배열에 담고 for of문을 사용하여 짝수의 합을 구한다.
 * 
 */
let target = Number(prompt("숫자를 입력해주세요", "100"));
let number = [];
// 위 코드는 건들지 마세요👆

// 아래 코드를 입력해 주세요👇
for(let i=1;i<=target;i++){
    number.push(i);
}

let even_sum = 0;

for(let num of number){
    if(num % 2 === 0){
        even_sum += num;
    }
}

document.write(even_sum);

