import logo from './logo.svg';
import './App.css';

function App() {
  const userName = 'Anna';
  return (
    <div className="App">
      <h1>Hello {userName}</h1>
      {/* <Heading />
      <Heading />
      <NewComp /> */}
      <Article number="3" name="Info" />
      <Article number="5" name="Blog" />
    </div>
  );
}

function Article({ name, number }) {
  let themeSiteWhiite = true;
  return (
    <div>
      <h2 style={{ color: themeSiteWhiite ? 'green' : 'red' }} className='heading'>Статья про {name} номер{number}</h2>
      <a href="#">Читать статью.</a>
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
