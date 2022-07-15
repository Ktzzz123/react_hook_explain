import React, { useState } from 'react';
import Login from './nestedComponent/Login'
import User from './nestedComponent/User'
function EuseContext() {
    const [username, setUsername] = useState("");
    return (
        <div>
            <Login setUsername={setUsername}></Login>
            <User username={username}></User>
            
        </div>
    );
}

export default EuseContext;