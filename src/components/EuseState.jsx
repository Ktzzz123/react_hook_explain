import React,{useState} from "react";


function EuseState (){
    const [counter, setCounter] = useState(0);

    const increasement = ()=>{
      setCounter(counter+1);
    }
  



    return (
        <div>
            {counter}
            <button onClick={increasement}>increase</button>
            <text>
                <br/>
                - let system know that value is state variable. so each time value of that variable change, system must re-render web.
                <br/>
                - save and tranfer value between hierarchy component. because when a function or class exit, 
                <br/>
                all value of variable was disapear. but if it was save to State variable, value will be preserved by react system.
            </text>

        </div>
     
    )
}


export default EuseState;