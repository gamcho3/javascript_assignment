const drinksDiv = document.getElementById("drinkList");
const buyBtn = document.getElementById("buyBtn");
const checkBtn = document.getElementById("checkBtn");
const checkUl = document.getElementById("checkUl");
const addBtn = document.getElementById("addStock");
let colaStock = 10,
  spriteStock = 10,
  maccolStock = 10;

//로컬 스토리지에 데이터가 존재하지 않는다면 초기값을 설정해준다.
if (localStorage.getItem("cola") === null) {
  localStorage.setItem("cola", 10);
}
if (localStorage.getItem("sprite") === null) {
  localStorage.setItem("sprite", 10);
}
if (localStorage.getItem("maccol") === null) {
  localStorage.setItem("maccol", 10);
}

// 음료수 객체 생성
const cola = {
  name: "cola",
  price: 1500,
  stock: colaStock,
};

const sprite = {
  name: "sprite",
  price: 2500,
  stock: spriteStock,
};

const maccol = {
  name: "maccol",
  price: 3300,
  stock: maccolStock,
};

// 음료수객체 배열에 담기
const drinks = [cola, sprite, maccol];

// 배열의 요소 순회
drinks.forEach((drink) => {
  addDrink(drink);
});


function addDrink(drink) {
  // input태그 생성
  const input = document.createElement("input");
  // type속성에 radio 지정
  input.type = "radio";
  //라디오버튼이 하나만 선택되게 하기 위해서
  // name 속성에 drink 지정
  input.name = "drink";
  input.setAttribute('class',"drink")
  // id속성에 drink.name의 값 지정
  input.id = drink.name;

  //label태그 생성
  const label = document.createElement("label");
  // label태그에 drink.name의 값 넣기
  label.textContent = drink.name;
  // label의 for로 drink 지정
  label.htmlFor = "drink";

  // div태그에 input,label 차례로 넣기
  drinksDiv.appendChild(input);
  drinksDiv.appendChild(label);
}

// 재고버튼 클릭 이벤트 생성
checkBtn.addEventListener("click", () => {
  // 중복으로 생성되는것을 방지하기 위해 실행전 태그안의 내용을 공백으로 처리
  checkUl.innerHTML = "";
  
  drinks.forEach((drink) => {
    //li 태그 생성
    const li = document.createElement("li");
    //li 태그에 재고 데이터 넣기
    li.textContent = `${drink.name} : ${drink.stock}개`;
    checkUl.appendChild(li);
  });
});

// 구매버튼 이벤트 생성
buyBtn.addEventListener("click", () => {
  let selecteddrink = {};
  // 체크된 라디오버튼 태그 가져오기
  const radioElements = document.querySelectorAll('.drink');
  radioElements.forEach((e)=>{
    if(e.checked){
      selecteddrink = e;
    }
  })
 
  // const selectedDrink = document.querySelector('input[name="drink"]:checked');
  // 선택된 라디오버튼의 id속성값과 drinks배열안 요소의 이름이 같은 객체 찾기
  const buyDrink = drinks.find((drink) => drink.name === selecteddrink.id);
  // 구매 개수 물어보기
  let number = parseInt(prompt("몇개 구매하시겠습니까?"));
  // 재고가 없을경우 alert창 띄우기
  if (buyDrink.stock < number) {
    alert("재고가 부족합니다.");
    return;
  }
  // 총합 구하기
  let total = buyDrink.price * number;
  // 총합을 보여주고 확인버튼 누르면 구매완료, 취소하면 구매취소 알림창 띄우기
  let isTrue = confirm(`총 ${total}원 입니다. 구매하시겠습니까?`);
  if (isTrue) {
    // 재고에 입력받은 숫자값만큼 감소
    buyDrink.stock -= number;
    // localstorage에 수정된 데이터값 update
    localStorage.setItem(buyDrink.name, buyDrink.stock);
  } else {
    alert("구매를 취소하셨습니다.");
  }
});

// 재고 추가
// addBtn.addEventListener('click',()=>{
//   // 체크된 라디오버튼 태그 가져오기
//   const selectedDrink = document.querySelector('input[name="drink"]:checked');
//   // 선택된 라디오버튼의 id속성값과 drinks배열안 요소의 이름이 같은 객체 찾기
//   const buyDrink = drinks.find((drink) => drink.name === selectedDrink.id);
//   buyDrink.stock += 1;
//   localStorage.setItem(buyDrink.name, buyDrink.stock);
// })