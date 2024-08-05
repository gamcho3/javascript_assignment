const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");

const text = "자바스크립트가 재밌어요!!";
let idx = 1;
let speed = 300;

// 함수 호출
writeText();

function writeText() {
  //인덱스 0에서 시작해서 idx-1 까지의 문자열을 가져온다.
  textEl.innerText = text.slice(0, idx);
  //idx에 1추가
  idx++;

  //idx가 text의 길이를 넘어갈경우 처음으로 초기화
  if (idx > text.length) {
    idx = 1;
  }

  //   speedEl의 값이 변경될때마다 speed값을 변경한다.
  speedEl.addEventListener("change", () => {
    speed = 300 / speedEl.value;
  });

  //speed값에 따라 writeText함수를 타이머로 호출한다.
  setTimeout(writeText, speed);
}
