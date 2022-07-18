import '../../App.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'


function SecondCase() {
    const [data2, setData2] = useState('');
    const [count2, setCount2]= useState(0);
    const [title, setTitle]= useState('');



    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(function (response) {
            setData2(response.data[0].title)
        })
        console.log('API2 was called')
    })

        return (
            <div>
                <h1>Second case</h1>
                    
                <div>   
                    {data2}<br/>
                    <br/>
                    {count2}
                    <br/>
                    <input values = {data2} onChange = {e => setTitle(e.target.title)} ></input>
                    {document.title = title}
                    <br/>
                    <button id="btn" onClick={()=>{setCount2(count2+1)}}>increase</button>

                </div>
                <div>
                <text> -Call API whenever  page re-render</text>

                </div>
            </div>
        )
    
}

export default SecondCase;