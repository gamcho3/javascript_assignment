import "./Card.css";
/**
 * 자바스크립트 구조분해(destructuring)
 *
 */
export default function Card({
  title,
  content,
  backgroundColor,
  textColor,
  img,
}) {
  return (
    <div
      className="card"
      style={{ backgroundColor: backgroundColor, color: textColor }}
    >
      <img src={img} alt="" />
      <h2 className="card-title">{title}</h2>
      <p className="card-content">{content}</p>
    </div>
  );
}

// 하나의(단일의) 함수만 내부로 보낼때 default
//   export { Card,Card2 }
