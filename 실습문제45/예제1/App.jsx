function App() {
  return (
    <div className="app">
      <div className="component">
        <p>
          이 문장은 사용자가 아래 버튼을 클릭했을 때 나타나는 예시 텍스트입니다.
          클릭 전에는 보이지 않다가, 버튼을 누르면 이와 같은 안내 문구가
          표시됩니다.
        </p>
        <button>닫기</button>
      </div>

      <button>컴포넌트 보여주기</button>
    </div>
  );
}

export default App;
