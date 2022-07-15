import React, { useEffect } from 'react';

function ChildComponent({returnData}) {

    useEffect(()=>{
        console.log("FUNCTION WAS CALLED");
    },[returnData])
    return (
        <div>
            {returnData()}
        </div>
    );
}

export default ChildComponent;