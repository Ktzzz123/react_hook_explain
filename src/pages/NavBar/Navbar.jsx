import React from 'react';
import useStyles from './Styles';

function NavBar(props) {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.btnHome}>
            <button className={classes.btn} onClick={()=>window.location.href='/'} >HOME</button>
            </div>
            <div className={classes.navbarItem}>
                <button className={classes.btn} onClick={()=>window.location.href ='/useState'}>useState</button>
                <button className={classes.btn} onClick={()=>window.location.href = '/useReducer'}>useReducer</button>
                <button className={classes.btn} onClick={()=>window.location.href = '/useEffect'}>useEffect</button>
                <button className={classes.btn} onClick={()=>window.location.href = '/useLayoutEffect'}>useLayoutEffect</button>
                <button className={classes.btn} onClick={()=>window.location.href = '/useRef'}>useRef</button>
                <button className={classes.btn} onClick={()=>window.location.href='/useContext'}>useContext</button>
                <button className={classes.btn} onClick={()=>window.location.href='/useMemo'} >useMemo</button>
                <button className={classes.btn} onClick={()=>window.location.href='/useCallback'}>useCallback</button>
                <button className={classes.btn} onClick={()=>window.location.href='/useImperativeHangdle'}>useImperativeHangdle</button>
            </div>
            
        </div>
    );
}

export default NavBar;