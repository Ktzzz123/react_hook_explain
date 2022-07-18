import React, { createContext, useState } from 'react';
import Login from './nestedComponent/Login'
import User from './nestedComponent/User'


export const usernameConText = createContext(null);

function EuseContext() {
    const [username, setUsername] = useState("");
    return (

        <usernameConText.Provider value={{username, setUsername}}>
            <Login ></Login>
            <User></User>
            <text>
                -useContext allow dev let child component access state variable without passing it through alot of component.
                -useContext allow dev let child component assess variable without passing it like a props, it very redundant 
            </text>
        </usernameConText.Provider>
    );
}

export default EuseContext;