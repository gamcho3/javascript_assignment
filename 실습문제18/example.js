let student = {
  name: "홍길동",
  age: 20,
  major: "컴퓨터 공학",
  grades: {
    math: 90,
    english: 85,
    science: 95,
  },

  // 객체의 메서드: 학생 정보를 출력하는 함수
  getInfo: function () {
    console.log(`이름: ${this.name}`);
    console.log(`나이: ${this.age}`);
    console.log(`전공: ${this.major}`);
  },

  // 객체의 메서드: 평균 성적을 계산하는 함수
  getAverageGrade: function () {
    let total = 0;
    for (let key in this.grades) {
      total += this.grades[key];
    }
    console.log(`평균 성적: ${total / 3}`);
  },
};

// 객체의 메서드 사용 예제
student.getInfo();
student.getAverageGrade();
