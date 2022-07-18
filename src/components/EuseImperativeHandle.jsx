import React,{useEffect, useRef} from 'react';
import useStyles from './css/styles';
import SmallButton from './nestedComponent/SmallButton';
const ref = React.createRef();


function EuseImperativeHandle() {
    const classes = useStyles();
    const buttonRef = useRef(null);
    

    useEffect(()=>{
        console.log(buttonRef);
    })
    const OnClick = ()=>{
        console.log(buttonRef.current)
        buttonRef.current.alterToggle()
    }

    

    
    return (
     <div className={classes.container}>
        <div>
            
            <button onClick={()=>{console.log(buttonRef.current)}}>parent button</button>
            <button onClick={OnClick}>hide/show in parent button</button>
            
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