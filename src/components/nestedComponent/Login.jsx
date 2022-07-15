import React, { useContext } from 'react';
import { usernameConText } from '../EuseContext';


function Login() {
    const {setUsername} = useContext(usernameConText);
    return (
        <div>
            <input onChange={(e)=>{setUsername(e.target.value)}}></input>
        </div>
    );
}

export default Login;