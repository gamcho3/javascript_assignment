import { galleryItems } from "./data";

function App() {
  return (
    <div>
      <p>사진설명이 나오는 칸</p>
      <div className="photo-grid">
        <div className="photo-card">
          <img src="이미지url" alt="산에서의 일몰" />
          <div className="photo-card-content">
            <h2>제목</h2>
            <div>날짜</div>
            <div>위치</div>
            <p>태그1</p>
            <p>태그2</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
