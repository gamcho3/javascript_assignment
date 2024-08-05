const minuteElement = document.getElementById("minute");
const secondElement = document.getElementById("second");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const timer = document.getElementById("timer");

// 타이머id 변수 생성
let timeId = null;
// 분 값을 넣을 변수 생성
let minute = 0;
// 초 값을 넣을 변수 생성
let second = 0;

// 버튼 이벤트 등록
startBtn.addEventListener("click", function () {
  console.log(second)
  // 시작할때 기존에 있던 타이머 제거
  clearInterval(timeId);

  // 분,초 둘다 값이 공백일때 경고창 띄우기
  if (minuteElement.value === "" && secondElement.value === "") {
    alert("시간을 입력해주세요");
    return;
  }

    // 분 값이 공백일경우 0을 대입
    // if(minuteElement.value === ""){
    //   minute = 0;
    // }else
    minute = parseInt(minuteElement.value === "" ? 0 : minuteElement.value);
    // 입력하는 시간에 1초가 소비되므로 화면에 보여주기 위해 1을 추가
    second = parseInt(second === 0 ? secondElement.value : second);
  
  // setInterval함수 생성
  timeId = setInterval(() => {
    // 분,초 값이 0일경우 타이머 종료
  
    if (minute === 0 && second === 0) {
      clearInterval(timeId);
      timer.textContent = `${showMinute}:${showSecond}`;
      alert("타이머 종료");
      return;
    }

     // 초,분 값이 10보다 작을경우 앞에 문자열0 붙이기
     let showMinute = minute < 10 ? `0${minute}` : minute;
     let showSecond = second < 10 ? `0${second}` : second;
    // 초가 0일때
    // 분 값을 1줄이고 초를 59로 변경
    //아닐때는 초에 1 감소
    if (second === 0) {
      minute--;
      second = 59;
    } else {
      second--;
    }
   

    // timer 태그 요소에 내용 넣기
    timer.textContent = `${showMinute}:${showSecond}`;
  }, 1000);
});

// 일시정지
pauseBtn.addEventListener("click", function () {
  clearInterval(timeId);
  // second--;
  alert("일시정지");
});
