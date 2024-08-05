// 문제 객체 생성
const quizData = [
  {
    question: "자바스크립트에서 변수를 선언하는 키워드가 아닌 것은 무엇인가요?",
    a: "var",
    b: "let",
    c: "const",
    d: "define",
    correct: "d",
  },
  {
    question: "자바스크립트에서 함수 선언식의 예시는 무엇인가요?",

    a: "let myFunction = function() {}",
    b: "function myFunction() {}",
    c: "const myFunction = () => {}",
    d: "myFunction() => {}",
    correct: "b",
  },
  {
    question: "자바스크립트의 자료형이 아닌 것은 무엇인가요?",
    a: "String",
    b: "Number",
    c: "Character",
    d: "Boolean",
    correct: "c",
  },
  {
    question: "자바스크립트에서 배열의 길이를 구하는 방법은 무엇인가요?",
    a: "array.size",
    b: "array.length",
    c: "array.count",
    d: "array.getLength()",
    correct: "b",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  dselectAnswers();

  // 첫번째 퀴즈 데이터를 가져온다.
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

// 선택된 input태그의 라디오버튼을 초기화 한다.
function dselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

function getSelected() {
  let answer;

  // 체크된 input태그의 라디오버튼을 가져온다
  // 체크된라디오버튼의 id값을 answer에 저장한다.
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  // 선택된 라디오버튼의 id값을 가져온다.
  const answer = getSelected();

  // id값이 존재한다면 실행
  if (answer) {
    //선택된 id값이 정답과 같다면 score를 증가시킨다.
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    //퀴즈배열 인덱스를 1 추가한다.
    currentQuiz++;

    //퀴즈배열의 길이보다 작다면 다음 퀴즈를 로드한다.
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      // 퀴즈가 끝났다면 현재맞춘 점수와 재실행 버튼을 보여준다.
      quiz.innerHTML = `
            <h2>you answered correctly at ${score}/${quizData.length} questions</h2>
            <button onclick="location.reload()">Reload</button>
            `;
    }
  }
});
