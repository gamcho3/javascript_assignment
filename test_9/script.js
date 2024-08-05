/**
 * 점심 내기 게임
 * 1. 점심내기에 참여할 사람들의 이름을 입력받아 오늘 점심을 살 사람을 출력한다.
 * ex) 홍길동, 김철수, 박영희
 * 2. 입력받은 이름들은 nameArray라는 배열에 저장된다.
 * 3. 랜덤으로 뽑힌 사람을 name에 저장하여 출력한다.
 * 예상 입력1 -> 홍길동,김철수,박영희
 * 예상 출력1 -> 오늘의 점심은 ?? 김철수
 * 예상 입력2 -> 민수,영희,철수,영수
 * 예상 출력2 -> 오늘의 점심은 ?? 영희
 * 
 * 힌트 : 랜덤숫자를 생성하려면 Math.random()을 사용해야 한다.
 * Math.random()은 0부터 1사이의 숫자를 랜덤으로 생성한다.
 * Math.random() * 3을 하면 0부터 3사이의 숫자를 랜덤으로 생성한다.
 * Math.floor()를 사용하여 소수점을 버릴 수 있다.
 */

let nameArray = prompt("내기에 참여할 이름들을 입력하세요").split(",");
let name;
// 위 코드는 건들지 마세요👆

// 아래 코드를 입력해 주세요👇
let random = Math.random() * nameArray.length;
let randomInt = Math.floor(random);
name = nameArray[randomInt];

document.write(`<h2>오늘의 점심은 ?? ${name}</h2>`);
