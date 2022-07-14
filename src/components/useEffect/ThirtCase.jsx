import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function ThirtCase(){
    const [data3, setData3] = useState('');
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(function (response) {
            setData3(response.data[0].body)
        })
        console.log('API3 was called')
    },[count3])

    return(
           <>
                <div>
                    <h1>Thirt case</h1>
                    {data3}<br/>
                    {count3}<br/>
                    {count4}<br/>
                    <button onClick={()=>{setCount3(count3+1)}}>increase</button>
                    <button onClick={()=>{setCount4(count4+1)}}>increase</button>

                </div>
                <div>
                    <text>
                        call API when specific variable change
                    </text>
                </div>
           </>
  
    )
}

