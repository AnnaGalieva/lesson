import logo from './logo.svg';
import './App.css';
// import Counter from './components/counter';
import Show from './components/visible';
import Timer from './components/timer';
import RefExample from './components/focus';
import MessagesList from './components/list';
import ParentCounter from './components/parent';
import InputForm from './components/form';
import Nav from './components/menu';
import HoverRating from './components/rating';
import BasicList from './components/listSuper';
import Student from './components/propType';
import React, { useState } from 'react';
import ArticleList from './components/ArticleList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ArticleDetail from './components/ArticleDetail';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';

const articles = [
  { id: 1, title: 'Статья 1', content: 'содержимое статьи 1' },
  { id: 2, title: 'Статья 2', content: 'содержимое статьи 2' },
  { id: 3, title: 'Статья 3', content: 'содержимое статьи 3' },
];
const products = [
  { id: 1, name: "Товар 1", description: "описание товара 1", price: "100 руб." },
  { id: 2, name: "Товар 2", description: "описание товара 2", price: "200 руб." },
  { id: 3, name: "Товар 3", description: "описание товара 3", price: "300 руб." },
  { id: 4, name: "Товар 4", description: "описание товара 4", price: "400 руб." },
];

function App() {
  <Router>
    <div>
      <h1>приложение для просмотра статей</h1>
      <Routes>
        {/*<Route path="/" element={<ArticleList articles={articles}/>}/> */}
        <Route path="articles/:id" element={<ArticleDetail articles={articles} />} />
        <Route path="*" element={<ArticleList articles={articles} />} />
        <Route path='/page/:pageNumber'element={<ProductList products={products}/>}/>
        <Route path='/product/:product'element={<ProductDetail products={products}/>}/>
        <Route path='/'element={<ProductList products={products}/>}/>

      </Routes>
    </div>
  </Router>

  const userName = 'Anna';
  return (
    <>
      <div className="App">
        {
          console.log(
            <DivWithChild>
              <p>новый текст</p>
              <div>новый элемент div</div>
            </DivWithChild>
          )
        }
        <div>
          <h2>пример 2 использования"children"</h2>
          <BorderComp>
            <p>Этот абзац находится внутри рамки</p>
            <button>Кнопка внутри рамки</button>
          </BorderComp>
          <p>Этот абзац находится снаружи рамки</p>
        </div>
        <div>
          <h2>Пример 3 использования "props.children"</h2>
          <Card title="карточка 1">
            <p>Это содержимое первое карточки</p>
            <button>действие</button>
          </Card>
          <Card title="карточка 2">
            <p>это содержимое второй карточки</p>
            <a href="#">ссылка</a>
          </Card>
        </div>
        <div>
          <h1>пример render props с функциональными компонентами</h1>
          <MouseTracker render={({ x, y }) => <MouseInfo x={x} y={y} />} />
        </div>
        <h1>Hello {userName}</h1>

        <Student name='Anna' age={30} isStudent={true} />
        <HoverRating />
        <Nav />
        <ParentCounter />
        <InputForm />
        <BasicList />
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

      </div >  </>
  );
}
function DivWithChild({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}
const BorderComp = ({ children }) => {
  return (
    <div style={{ border: '2px solid #000', padding: '16px' }}>
      {children}
    </div>
  );
}
//компонент card принимает заголовок и содержимое в качестве children
const Card = ({ title, children }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', marginBottom: '16px' }}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};
////////render props
//компонент для отслеживания положения курсора мыши
const MouseTracker = ({ render }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };
  return (
    <div style={{ height: '100vh' }} onMouseMove={handleMouseMove}>
      {/*внутри render prop используем переданную функцию */}
      {render(position)}
    </div>
  )
};

//компонент, который использует Render prop для рендеринга информации о положении курсора
const MouseInfo = ({ x, y }) => {
  return (
    <div>
      <h2>положение курсора мыши</h2>
      <p>X:{x},Y:{y}</p>
    </div>
  )
};

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
