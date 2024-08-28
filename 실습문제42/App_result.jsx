const quotes = [{
  quotes: "우리가 두려워해야 할 유일한 것은 두려움 그 자체이다.",
  authors: "프랭클린 D. 루즈벨트",
},
{
  quotes: "사느냐, 죽느냐 그것이 문제로다.",
  authors: "윌리엄 셰익스피어",
},
{ quotes: "천 리 길도 한 걸음부터.", authors: "노자" },];

function LiList({authors}){
  return <li>{authors}</li>
}

function Header(){
  return <header>
  <ul className="quotes">
    <LiList authors={quotes[0].authors}/>
    <LiList authors={quotes[1].authors}/>
    <LiList authors={quotes[2].authors}/>
  </ul>
 </header>
}

function Main({quotes,authors}){
  // quotes -> Object
  return <main>
  <h1>오늘의 명언</h1>
  <div>{quotes}</div>
  <div>{authors}</div>
</main>
}

function App() {
  let randomInt = Math.floor(Math.random() * quotes.length)
  // 0~2
  return (
    <div>
      <Header/>
      <Main {...quotes[randomInt]}/>
    </div>
  );
}

export default App;