import './App.css';
import Layout from './page/Layout';
import { Routes, Route, Link, NavLinkProps } from 'react-router-dom';
import Home from './page/Home';
import BoardList from './page/BoardList';
import Writeform from './page/Writeform';
import BoardContext from './page/BoardContext';
import { StateContext, SetContext } from './context/ContextComp';
import { useState, useEffect } from 'react';

function App() {
  const [boardlist, setBoard] = useState([]);
  useEffect(()=>{
    // fetch를 사용한 ajax
    async function getData(){
      // response로 값을 받아오는 시간이 걸림
      const response = await fetch('boardlistdata.json');
      const data = await response.json();
      console.log(data);
      setBoard(data.boardlist)
    }
    getData();
  },[]);

  return (
    <div className="App">
      <StateContext.Provider value={boardlist}>
        <SetContext.Provider value={setBoard}>
          <Routes>
            <Route path='/' element={<Layout />}>
              {/* path 대신 사용하는 index는 가장 먼저 나오는 페이지를 의미함 */}
              <Route index element={<Home />}/>
              <Route path='/boardlist' element={<BoardList />}>
                <Route path=':id' element={<BoardContext />}/>
              </Route>
              <Route path='/writeform' element={<Writeform />}/>
            </Route>
          </Routes>
          </SetContext.Provider>
        </StateContext.Provider>
    </div>
  );
}

export default App;
