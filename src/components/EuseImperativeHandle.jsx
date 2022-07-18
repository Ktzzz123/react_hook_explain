import '../App.css';
import React,{useEffect, useRef} from 'react';
import SmallButton from './nestedComponent/SmallButton';
const ref = React.createRef();




function EuseImperativeHandle() {
    const buttonRef = useRef(null);
    

    useEffect(()=>{
        console.log(buttonRef);
    })
    const OnClick = ()=>{
        console.log(buttonRef.current)
        buttonRef.current.alterToggle()
    }

    

    
    return (
     < div className='Item-Container'>
        <div>
            
            <button onClick={()=>{console.log(buttonRef.current)}}>parent button</button>
            <button onClick={OnClick}>hide/show</button>
            
            <SmallButton ref={buttonRef}/>
             
         </div>
         <div>
            <text>
                -useImperativeHandle is use for parent component access funct, state variable from child component.
            </text>
         </div>
     
     </div>
    );
}

export default EuseImperativeHandle;