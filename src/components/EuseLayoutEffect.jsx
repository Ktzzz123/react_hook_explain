import React, {  useRef, useLayoutEffect, useEffect } from 'react';
import '../App.css';

function EuseLayoutEffect() {
    const inputRef = useRef(null);
    useLayoutEffect(()=>{
        console.log(inputRef.current.value);
    },[])
    console.log("i am function")
    useEffect(()=>{
        inputRef.current.value = "i am the second value"
    },[])

        return (
            <div className='Item-Container'>
                <div>
                    <input ref={inputRef} value="i am the firt value" style={{width: 400, height: 50}}></input>

                </div>
                <text>

                    -useLayoutEffect was rendered ealiest in page. it mean that it was render before useEffect<br/>
                    -useLayoutEffect was rendered after function was render and before useEffect render<br/>    
                    -use when dev want to change value of layout of app before it acctualy print out on the screen.
                </text>
            </div>
        )
    
}

export default EuseLayoutEffect;