import React,{useReducer} from 'react';


const reducer = (state,action)=>{
    switch (action.type){
        case "increase":
          return (
            {count: state.count + 1, showtext : !state.showtext}
          )
          default: 
          return state;
            
    
      }
}


export default function EuseReducer() {
    const [state, dispatch] = useReducer(reducer,{count: 0, showtext: true});


    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={() => dispatch({type: 'increase'})}>incease</button>
            <br/>
            <h1>
            {state.showtext?'this is an even number':'this is an odd number'}

            </h1>
            <text>
                -have the same purpose like useState, page will re-render when the variable was declare by useReducer change value.
                <br/>
                -use when dev take change 2 or more state variable in the same action, descrease number render of web.
            </text>
        </div>
    );
}
