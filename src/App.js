import './App.css';
import EuseEffect from './components/EuseEffect';
import EuseReducer from './components/EuseReducer';
import EuseState from './components/EuseState';
import EuseRef from './components/EuseRef';
import EuseLayoutEffect from './components/EuseLayoutEffect'

import EuseImperativeHangdle from './components/EuseImperativeHandle'
import React from 'react'

import {Routes,Route} from "react-router-dom";
import EuseContext from './components/EuseContext';
import EuseMemo from './components/EuseMemo';
import EuseCallback from './components/EuseCallback';
import Home from './components/pages/Home/Home'
import Navbar from './components/pages/NavBar/Navbar';

function App() {
  
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/useEffect" element = {<EuseEffect/>}/>
        <Route path = "/useReducer" element = {<EuseReducer/>}/>
        <Route path = "/useState" element = {<EuseState/>}/>
        <Route path = "/useRef" element = {<EuseRef/>}/>
        <Route path = "/useLayoutEffect" element = {<EuseLayoutEffect/>}/>
        <Route path = "/useContext" element = {<EuseContext/>}/>
        <Route path = "/useMemo" element = {<EuseMemo/>}/>
        <Route path = "/useCallback" element = {<EuseCallback/>}/>
        <Route path='/useImperativeHangdle' element ={<EuseImperativeHangdle/>}/>
      </Routes>
      

    </div>
  );
}

export default App;