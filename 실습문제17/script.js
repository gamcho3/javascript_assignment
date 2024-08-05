const quotes = [
  "우리가 두려워해야 할 유일한 것은 두려움 그 자체이다. - 루즈벨트",
  "사느냐, 죽느냐 그것이 문제로다. - 윌리엄 셰익스피어 (영국)",
  "천 리 길도 한 걸음부터. - 노자 (중국)",
];

const authors = ["루즈벨트", "셰익스피어", "노자"];

/**
 * 1. 명언과 위인을 출력하는 함수 만들기
 * 2. 명언배열과 위인배열을 매개변수로 받는다.
 * 3. 명언과 위인이 각각 맞도록 html에 출력한다.
 * 4. 각각의 명언들은 색상을 달리한다.
 * 5. html에 출력하는방법 : document.write()를사용한다. 
 */

const colors = ["aquamarine","red","blue"];

const showQuote1 = (quotes,authors) =>{
  return `<p style="color: aquamarine;">${authors[0]} : ${quotes[0]}</p>`
}
const showQuote2 = (quotes,authors) =>{
  return `<p style="color: red;">${authors[1]} : ${quotes[1]}</p>`
}
const showQuote3 = (quotes,authors) =>{
  return `<p style="color: blue;">${authors[2]} : ${quotes[2]}</p>`
}

document.write(showQuote1(quotes,authors));
document.write(showQuote2(quotes,authors));
document.write(showQuote3(quotes,authors));