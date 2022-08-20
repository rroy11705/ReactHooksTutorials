import React, { useContext } from 'react'
import UserContext from '../context/userContext';

const ContextExample = () => {
    const user = useContext(UserContext);
    return (
        <div>
            <h1>Context Example</h1>
            <p>Name: {user.firstName} {user.lastName}</p>
            <p>Email: {user.email}</p>
        </div>
    )
}

export default ContextExample
