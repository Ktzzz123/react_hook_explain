import React, { forwardRef, useImperativeHandle, useState} from 'react';

function SmallButton (props,ref) {
    const [toggle, setToggle] = useState(true);


    useImperativeHandle(ref, ()=>({
        alterToggle(){
            setToggle(!toggle)
        }
    }));


    return (
        <>
            {toggle&&<h1>Toggle</h1>}
        </>
    );
}

export default forwardRef(SmallButton) ;