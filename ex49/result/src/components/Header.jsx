import headerImg from "../assets/image.png";

export default function Header() {
  return (
    <header>
      <img src={headerImg} alt="logo" />
      <h2>할부 상환 계산기</h2>
    </header>
  );
}
