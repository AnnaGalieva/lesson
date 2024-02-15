import logo from './logo.svg';
import './App.css';
// import Counter from './components/counter';
import Show from './components/visible';
import Timer from './components/timer';
import RefExample from './components/focus';
import MessagesList from './components/list';



function App() {
  const userName = 'Anna';
  return (
    <div className="App">
      <h1>Hello {userName}</h1>
      {/* <Heading />
      <Heading />
      <NewComp /> */}
      {/* <Article number="3" name="Info" />
      <Article number="5" name="Blog" /> */}
      {/* <Counter /> */}
      <Timer />
      <Show data="Текст из компонента" />
      <Show data="Другой текст" />
      <RefExample />
      <MessagesList />

    </div>
  );
}

function Article({ name, number }) {
  let themeSiteWhiite = true;
  return (
    <div>
      {/* <h2 style={{ color: themeSiteWhiite ? 'green' : 'red' }} className='heading'>Статья про {name} номер{number}</h2>
      <a href="#">Читать статью.</a> */}
    </div>
  );
}

// function NewComp() {
//   return (
//     <div>New text</div>
//   );
// }

// function Heading() {
//   return (
//     <div>  <h2>новый текст внутри заголовка</h2>
//       <p>новый текст</p>
//       <a href="#">читать далее...</a>
//     </div>
//   );
// }

export default App;
