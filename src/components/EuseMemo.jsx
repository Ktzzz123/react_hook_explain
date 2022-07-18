import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios'
import '../App.css';

function EuseMemo() {
    const [data, setData]= useState('');
    const [toggle, setToggle] = useState(true);
    const [count, setCount] = useState(0);
    
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then((response)=>{setData(response.data);

        })
    },[])

    let findLongestName = (comments)=>{
        
        if(!comments) return null;
        let longestName = '';
        for(let i =0; i<comments.length;i++){
            let currentName = comments[i].name;
            if(currentName.length>longestName.length){
                longestName = currentName;
            }
        }
        console.log(longestName);

        return longestName;
    }

const findLongestNameMemo = useMemo(()=>findLongestName(data),[count]);
    return (
        <div className='Item-Container'>
            <div>{findLongestNameMemo}</div>
            {/* {console.log(data)} */}
            <button onClick={()=>{setCount(count+1)}}>Count</button>
            <button onClick={()=>{setToggle(!toggle)}}>Toggle</button>
            <div>
            {toggle&&'Toggle'}

            </div>
            <h3>number of count: </h3>
            {count}
           <div>
            -useMemo is use for set funcition or menthod not re-combuting when state variable change(because when state variable change, page will reload and menthod or function will recomputing.)<br/>
            -there are 2 type of useMemo, like useEffect, useMemo will recomputing function or menthod when indicated variable changed.<br/>
            -in this case, longest name only show when user click on count button because function findLongestName is define to compute whenever there are a change in count variable.<br/>
           </div>
        </div>
    );
}

export default EuseMemo;