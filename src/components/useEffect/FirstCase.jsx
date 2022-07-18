import '../../App.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'


function FirstCase() {
    const [data, setData] = useState('');
    const [count1, setCount1]= useState(0);
    let firstData = 'render 1 time'

    
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments').then(function (response) {
            setData(response.data[0].email)
        })
        console.log('API1 was called')
    }, []);

    return(
        <>
         <div >
            <h1>First case</h1>

            {/* {console.log('render in UI')} */}
            <h1>{firstData}</h1>
            {data}
            <br/>
            {count1}
            <br/>
            <button id="btn" onClick={()=>{
                setCount1(count1+1)
            }}>increase</button>
        </div>
        <div>
        <text>call API whenever there are change in DOM</text>

        </div>
        </>
       
    )
        }
export default FirstCase;