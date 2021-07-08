import React, { useState } from 'react';





const LoginComponent = ({setGoodLogin, loginUsername, loginPassword, goodLogin}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onclickHandler = () => {
        if (username === loginUsername && password === loginPassword) {
            setGoodLogin(true)
        } else {
            setGoodLogin(false);
        }
    }

    const errorHandler = () => {
        if (goodLogin === false) {
            return (
                <p>This is not a good login. Please try again</p>
            )
        }
    }
    
    return (
        <div className="login-component">
            <label>
                Username
                <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Enter your username..." />
            </label>
            <label>
                Password
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter your password..." />
            </label>
            {errorHandler()}
            <button onClick={() => onclickHandler()}>Login</button>
        </div>
    );
}

export default LoginComponent
