import React, { useCallback, useState } from 'react';
import ChildComponent from './nestedComponent/ChildComponent';
import './css/styles.css'

function EuseCallback() {
const [toggle, setToggle] = useState(true);
const [data, setData]= useState('i am data');

  const returnData = useCallback(()=>
 {
    return data;
}
    ,[data])



    return (
        <div className='container'>
            <ChildComponent returnData = {returnData}></ChildComponent>
            <button onClick={()=>{
                setToggle(!toggle)
            }}>Toggle</button>
            {toggle&&<h1>toggle</h1>}
            <div>the same with useMemo, but in useMemo, we store variable, but in useCallback, we access function instead</div>
        </div>
    );
}

export default EuseCallback;