import React from 'react'
import useStyles from './css/styles';
import FirstCase from './useEffect/FirstCase';
import SecondCase from './useEffect/SecondCase';
import ThirtCase from './useEffect/ThirtCase';
// import useStyles from './css/styles'


function EuseEffect() {
    
    const classes = useStyles();
    // console.log('EuseEffect')

  
    return (
        <div className={classes.container}>
            <FirstCase/>
            <SecondCase/>
            <ThirtCase/>
        </div>
    )
}

export default EuseEffect