let timeElement = document.getElementById("time");
let dateElement = document.getElementById("date");
let button = document.getElementById("updateBtn");

button.addEventListener("click", () => {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  timeElement.innerText = `${hours}시 ${minutes}분 ${seconds}초`;
  dateElement.innerText = `${year}년 ${month}월 ${day}일`;
});
