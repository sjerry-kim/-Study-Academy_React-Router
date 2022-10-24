import './App.css';
// 3. Routes와 Route를 가져와서 사용
import {Routes, Route, Link} from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import Test from './page/Test';
import KoreanPage from './page/KoreanPage';
import NonFound from './page/NonFound';
import Number from './page/Number';
import NumberId from './page/NumberId';
import Board from './page/Board';
import BoardId from './page/BoardId';
import { useState } from 'react';

function App() {
  const [list, setList] = useState([1,2,3,4,5]);

  return (
    <div className="App">
      <h1>리액트라우터를 사용하게 된 것을 환영합니다</h1>
      <div>
        {/* Link를 통해서 컴퍼넌트간의 이동을 할 수 있음 */}
        <Link to="/about">about</Link> | 
        {/* a태그도 가능하지만 새로고침이 일어나 데이터가 리셋됨 */}
        <a href='/about'>about-a tag</a> |
        <Link to="/test">Test</Link> 
        <br />
        <Link to='/number/1'>1</Link> | {" "}
        <Link to='/number/2'>2</Link>
        <br />
        {
          list.map((item)=>(
            // ⬇ to 안의 내용을 {}를 사용해서 자바스클비트 형태로 넣어줌
            <Link to ={"/number/"+item}>{item}</Link>
          ))
        }
      </div>
      
      {/* 
        * 주소마다 하나의 화면을 가지게 됨.
        * Route에 보여질 화면을 Routes로 묶어줌.
      */}
        <Routes>
          {/* path를 통해 주소를 연결, element를 통해 컴포넌트 연결 */}
          <Route path='/' element={<Home />}></Route>
          <Route path='about' element={<About />} />
          {/* 
            * 실습1. 
            * Route를 통해서 test입니다를 출력하는 Test페이지를 만들고
            * Link를 통해서 들어갈 수 있도록 작성하세요
           */}
          <Route path='test' element={<Test />}>
            {/*<Route path='ko' element={<KoreanPage />}>ko</Route>*/}
          </Route>
          {/* 여러 주소로 하나의 컴포넌트에 연결 가능, 원하는 주소 작성 가능 */}
          <Route path='test/ko' element={<KoreanPage />} />
          <Route path='test/en' element={<KoreanPage />} />
          <Route path='test/fr' element={<KoreanPage />} />
          {/*
            * 지정한 주소 이외에 들어갔을 때 *를 사용해 모든 주소 접근을 확인할 수 있음
            * 존재하는 페이지가 없다고 알려주는 데 사용
          */}
          <Route path= '*' element={<NonFound />}/>

          {/* :id는 변수이름 id를 갖는 값을 주소를 통해 전달할 수 있다 */}
          {/* id 위치에 값을 적어주면 그 값이 id:값 과 같은 형태로 param에 전달 */}
          <Route path="number" element={<Number />}>
            {/* 
              * Outlet을 통해서 NumberId를 출력함
              * 중첩 : 페이지 안에서 바뀌즌 페이지가 또 있는 것
            */}
            <Route path=":id" element={<NumberId />}/>
          </Route>
          {/* 
            * 뒤에 연달아서 붙일 수 있지만, 아래와 깉이 한 단계 거쳐서 사용하는 게 더 안전한 사용법임
            <Route path="number/:id/page/:name" element={<Number />} />
           */}

          {/* 
            * 실습2. Board페이지를 만들어서 BoardId페이지에 params값을 출력하세요 
            * Board페이지에는 /board/1과 같이 1~10까지로 접근할 수 있는 Link가 있음
            * BaordId 페이지에는 
          */}
          <Route path='board' element={<Board />}>
            <Route path=':id' element={<BoardId />} />
          </Route>

        </Routes>
    </div>
  );
}

export default App;
