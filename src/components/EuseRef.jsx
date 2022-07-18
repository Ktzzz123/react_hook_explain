import React,{useRef} from 'react';

function EuseRef() {
    const inputRef = useRef(null);
    const Clear = () =>{
        inputRef.current.value = '';
    }
    const focusText = () =>{
        inputRef.current.focus();
    }

    return (
        <>
            <div>
            <input type='text' placeholder='Ex...' ref={inputRef}></input><br/>
            <button onClick={Clear}>Clear text in input</button><br/>
            <button onClick = {focusText}>Focus on input</button>
            </div>
            <div>
                -use to manupulate or access DOM element
            </div>
        </>
  
    );
}

export default EuseRef;