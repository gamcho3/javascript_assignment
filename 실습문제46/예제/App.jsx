import { useState } from "react";

function Summary({ text }) {
    <h1>요약</h1>
    <p>{text}</p>
    <button></button>
        ;
}

function App() {

    function random() {
        return Math.floor(Math.random() * 100);
    }

    const [count, setCount] = useState(0);   
    return <div>
        <p>랜덤난수 : {random()}</p>
        <h2>카운트 : {count}</h2>
        <button onClick={()=>setCount(count+1)}>클릭</button>
        <Summary></Summary>
        
  </div>;
}

export default App;
