import React from 'react';

function Home () {
  
        return (
            <div>
                <div>
                <button onClick={()=>window.location.href='/'} >Home</button>
                <button onClick={()=>window.location.href ='/useState'}>useState</button>
                <button onClick={()=>window.location.href = '/useReducer'}>useReducer</button>
                <button onClick={()=>window.location.href = '/useEffect'}>useEffect</button>
                <button onClick={()=>window.location.href = '/useLayoutEffect'}>useLayoutEffect</button>
                <button onClick={()=>window.location.href = '/useRef'}>useRef</button>
                <button onClick={()=>window.location.href='/useContext'}>useContext</button>
                <button onClick={()=>window.location.href='/useMemo'} >useMemo</button>
                <button onClick={()=>window.location.href='/useCallback'}>useCallback</button>
                <button onClick={()=>window.location.href='/useImperativeHangdle'}>useImperativeHangdle</button>
                </div>
            </div>
        )
}

export default Home;