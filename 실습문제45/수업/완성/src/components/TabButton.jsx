export default function TabButton({ children, onSelect, isSelected }) {
  console.log("tapbutton 실행");

  function handleClick() {
    console.log("hello world");
  }
  // 함수 넣을때 : 괄호를 빼고 이름만 넣는다
  return (
    <li>
      <button onClick={onSelect} className={isSelected ? "active" : undefined}>
        {children}
      </button>
    </li>
  );
}
