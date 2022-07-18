import React from 'react';
import '../../../App.css';

function Navbar(props) {
    return (
        <div>
            <div className='NavBar'>
                <div>
                <button className='btnNavBar' id='btnHome' onClick={()=>window.location.href='/'} >Home</button>
                <button  className='btnNavBar' onClick={()=>window.location.href ='/useState'}>useState</button>
                <button  className='btnNavBar' onClick={()=>window.location.href = '/useReducer'}>useReducer</button>
                <button  className='btnNavBar' onClick={()=>window.location.href = '/useEffect'}>useEffect</button>
                <button className='btnNavBar'  onClick={()=>window.location.href = '/useLayoutEffect'}>useLayoutEffect</button>
                <button className='btnNavBar'  onClick={()=>window.location.href = '/useRef'}>useRef</button>
                <button className='btnNavBar'  onClick={()=>window.location.href='/useContext'}>useContext</button>
                <button className='btnNavBar'  onClick={()=>window.location.href='/useMemo'} >useMemo</button>
                <button className='btnNavBar'  onClick={()=>window.location.href='/useCallback'}>useCallback</button>
                <button  className='btnNavBar' onClick={()=>window.location.href='/useImperativeHangdle'}>useImperativeHangdle</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;