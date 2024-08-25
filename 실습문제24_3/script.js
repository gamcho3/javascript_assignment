let date = document.getElementById("date");
let curDateElement = document.getElementById("curDate");
let resultElement = document.getElementById("result");
let button = document.getElementById("calBtn");
let curDate = new Date();
let curYear = curDate.getFullYear();
let curMonth = curDate.getMonth() + 1;
let curDay = curDate.getDate();
let dayOfWeek = curDate.getDay();
let dd = "";
switch (dayOfWeek) {
  case 0:
    dd = "일";
    break;
  case 1:
    dd = "월";
    break;
  case 2:
    dd = "화";
    break;
  case 3:
    dd = "수";
    break;
  case 4:
    dd = "목";
    break;
  case 5:
    dd = "금";
    break;
  case 6:
    dd = "토";
    break;
  default:
    dd = "";
    break;
}

curDateElement.innerHTML = `${curYear}년 ${curMonth}월 ${curDay}일 ${dd}요일`;

function getDiffDay(selectDate) {
  let diff = selectDate - curDate;
  let diffDay = Math.ceil(diff / (1000 * 60 * 60 * 24));
  return diffDay;
}


button.addEventListener("click", () => {
  let selectDate = new Date(date.value);
  let diff = selectDate - curDate;
  let diffDay = Math.ceil(diff / (1000 * 60 * 60 * 24));
  resultElement.innerHTML = `D-day 까지 ${diffDay}일 남았습니다.`;
  resultElement.style = "color: green; font-size: 20px";
});

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", () => {
  let title = document.getElementById("title").value;
  let date = document.getElementById("date").value;
  let diffDay = getDiffDay(new Date(date));
  let ul = document.getElementById("ddayList");
  let li = document.createElement("li");
  li.innerHTML = `<span style='color:red;'>${title}</span> 까지 ${diffDay}일 남았습니다.`;
  ul.appendChild(li);
});
