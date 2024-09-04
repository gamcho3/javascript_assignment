/**
 * Props 구성
 * props: 컴포넌트에 데이터를 전달하는 역할
 * props : html attribute(속성)
 * react는 props를 하나의 Object로 묶어서 전달
 * props는 컴포넌트 함수에 첫번째 인수로 전달된다.
 * attribute를통해 값을 전달하고 속성의 이름은 자유롭게 정할수있다
 * 글자,숫자,객체,배열등을 전달할수 있다
 *
 */

import React from "react";
import { useState } from "react";
import componentImg from "./assets/components.png";
import confgImg from "./assets/config.png";
import jsxImg from "./assets/jsx-ui.png";
import Card from "./components/card/Card.jsx";
import TabButton from "./components/TabButton.jsx";
import { CARD_DATA } from "./card_data.js";
import { data } from "./data.js";
// import Card from './components/Card'

/**
 * 데이터를 넘겨주는 방법
 * 1.props(attribute)
 * 2.children
 * attribute방식 :보통 작은 여러가지데이터를
 * 컴포넌트에 전달할때 사용한다.
 * children방식 : JSX코드를 다른컴포넌트에 넘겨줄때
 * 편리하게 사용이 가능하다.
 */

function App() {
  // selectedLabel(첫번째)
  // : 컴포넌트 함수가 재실행될때 변경되는값
  // setSelectedLabel(두번째)
  // : 저장된값을 수정하고 컴포넌트함수가 재실행하도록 명령
  // useState("") : 초기화값
  //** 함수안에서 가장 최상단에 선언해야한다.**
  const [selectedLabel, setSelectedLabel] = useState();

  console.log("App컴포넌트 실행", selectedLabel);
  // let showContent = "버튼을 클릭해주세요"

  function HandleSelect(label) {
    setSelectedLabel(label);
    console.log("!!!!!!!!!", selectedLabel);
  }

  return (
    <div className="app">
      <h1>React Props 연습</h1>
      <div className="card-container">
        {CARD_DATA.map((card, index) => {
          console.log(index);
          return (
            <Card
              title={card.title}
              content={card.content}
              backgroundColor={card.backgroundColor}
              textColor={card.textColor}
              img={card.img}
              key={index}
            />
          );
        })}
      </div>

      <section className="example">
        <h2>예시</h2>
        <menu>
          <TabButton
            onSelect={() => HandleSelect("props")}
            isSelected={selectedLabel === "props"}
          >
            데이터 전달
          </TabButton>
          <TabButton
            onSelect={() => HandleSelect("component")}
            isSelected={selectedLabel === "component"}
          >
            재사용 컴포넌트
          </TabButton>
          <TabButton
            onSelect={() => HandleSelect("styling")}
            isSelected={selectedLabel === "styling"}
          >
            동적 스타일링
          </TabButton>
        </menu>
      </section>
      {/* 리액트 컴포넌트는 오직 한번 실행한다 */}

      {selectedLabel === undefined ? (
        <p>주제를 선택해주세요</p>
      ) : (
        <div style={{ backgroundColor: data[selectedLabel].backgroundColor }}>
          <h3>{data[selectedLabel].title}</h3>
          <p>{data[selectedLabel].content}</p>
          <pre>
            <code>{data[selectedLabel].code}</code>
          </pre>
        </div>
      )}
    </div>
  );
}

export default App;
