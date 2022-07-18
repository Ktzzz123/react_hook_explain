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
            <button> child button</button>
            {toggle&&<h2>Toggle</h2>}
        </>
    );
}

export default forwardRef(SmallButton) ;