import { useState } from "react";

function CustomContainer({ title, children, ...props }) {
  return (
    <div {...props}>
      <h3>{title}</h3>
      {children}
    </div>
  );
}

function BackgroundContainer() {
  const [backColor, setBackColor] = useState();
  return (
    <CustomContainer
      title="배경화면 변경"
      className={
        backColor === undefined ? "container" : `container ${backColor}`
      }
    >
      <button onClick={() => setBackColor("red")}>빨강</button>
      <button onClick={() => setBackColor("blue")}>파랑</button>
      <button onClick={() => setBackColor("green")}>초록</button>
    </CustomContainer>
  );
}

function OnOff() {
  const [isOn, setIsOn] = useState(false);

  const changeColor = isOn ? "yellow" : "black";

  return (
    <CustomContainer style={{ color: changeColor }} title="On/Off">
      <button
        onClick={() => {
          setIsOn(!isOn);
        }}
      >
        {isOn ? "OFF" : "ON"}
      </button>
    </CustomContainer>
  );
}

function TextContainer() {
  const [textColor, setTextColor] = useState("green");
  return (
    <CustomContainer title="글자색 변경" style={{ color: textColor }}>
      <button onClick={() => setTextColor("green")}>초록색</button>
      <button onClick={() => setTextColor("black")}>검은색</button>
      <button onClick={() => setTextColor("skyblue")}>하늘색</button>
    </CustomContainer>
  );
}

function App() {
  return (
    <div>
      <BackgroundContainer />
      <TextContainer />
      <OnOff />
    </div>
  );
}

export default App;
