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
            {toggle&&<span>Toggle</span>}
        </>
    );
}

export default forwardRef(SmallButton) ;