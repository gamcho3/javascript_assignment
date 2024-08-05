let result = document.getElementById("result");

document
  .getElementById("calculateButton")
  .addEventListener("click", function () {
    // 폼에서 키와 몸무게 값을 가져오기
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
      alert("키와 몸무게는 양수이어야 합니다.");
      return;
    }

    // BMI 계산
    const bmi = (weight / (height / 100) ** 2).toFixed(2);

    // 결과 변수 선언
    let resultMessage = "";

    // BMI에 따라 체중 상태를 결정하는 조건문
    if (bmi < 18.5) {
      resultMessage = "저체중";
    } else if (bmi >= 18.5 && bmi < 23) {
      resultMessage = "정상";
    } else if (bmi >= 23 && bmi < 25) {
      resultMessage = "과체중";
    } else {
      resultMessage = "비만";
    }

    // switch문으로 추가 설명을 제공
    let advice = "";
    switch (resultMessage) {
      case "과체중":
        advice =
          "표준 체중을 유지하기 위해 하루에 필요한 적정열량을 섭취하는 것은 비만과 성인병을 예방하는 기본 노력입니다.";
        break;
      case "비만":
        advice =
          "소금의 과잉 섭취는 고혈압을 비롯한 순환기계질환의 중요 요인이 됩니다. 건강을 위해 소금 섭취를 하루에 5g이하로 줄입시다.";
        break;
      default:
        advice = "";
    }

    // 결과 출력
    result.innerHTML = `당신의 BMI지수는 ${bmi}입니다. 비만도 결과는 <span>${resultMessage}</span> 입니다. ${advice}`;
  });
