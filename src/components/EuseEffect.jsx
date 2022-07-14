import React, { useEffect, useState } from 'react'
import axios from 'axios'
import FirstCase from './useEffect/FirstCase';
import SecondCase from './useEffect/SecondCase';
import ThirtCase from './useEffect/ThirtCase';
// import useStyles from './css/styles'


function EuseEffect() {
    // const classes = useStyles;
    // console.log('EuseEffect')


    let firstData = 'render 1 time'

  
    return (
        <div>
            <FirstCase/>
            <SecondCase/>
            <ThirtCase/>
        </div>
    )
}

export default EuseEffect