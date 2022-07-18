import React from 'react'
import FirstCase from './useEffect/FirstCase';
import SecondCase from './useEffect/SecondCase';
import ThirtCase from './useEffect/ThirtCase';
import '../App.css';


function EuseEffect() {
    // const classes = useStyles;
    // console.log('EuseEffect')

  
    return (
        <div className='Item-Container'>
            <FirstCase/>
            <SecondCase/>
            <ThirtCase/>
        </div>
    )
}

export default EuseEffect