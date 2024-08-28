// src/App.js

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>학생 관리 프로그램</h1>
        <nav>
          <ul>
            <li>
              <a href="#home">홈</a>
            </li>
            <li>
              <a href="#students">학생</a>
            </li>
            <li>
              <a href="#contact">연락</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        <section id="home" className="section home">
          <h2>학생성적을 관리하세요</h2>
          <p>아래 학생들의 성적을 확인할 수 있습니다.</p>
        </section>

        <section id="students" className="section students">
          <h2>학생 성적 리스트</h2>
          <div className="student-list">
            <div className="student">
              <img src="" alt="" />
              <h3>학생</h3>
              <p>점수</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2024 Student Grades Management. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
