import React,{useContext} from 'react';

import {usernameConText} from '../EuseContext'
function User() {

    const {username} = useContext(usernameConText);
    return (
        <div>
            <h1>User: {username}</h1>
        </div>
    );
}

export default User;