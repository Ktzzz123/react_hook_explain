import React,{useEffect, useState} from 'react';
import axios from 'axios';



function EuseEffect() {
  const [data,setData] = useState("");

   
    let firstData = "render 1 time";

    useEffect(()=>{
        axios
        .get("https://jsonplaceholder.typicode.com/comments")
        .then(function (response) {
            setData(response.data[0].email)
        });
        console.log('API was called')
    },[])
    {console.log(firstData)}
    return (
        <div>
            <h1>{firstData}</h1>

            {data}
        </div>
    );
}

export default EuseEffect;