import React, { useState } from 'react';

import '../../style/LoginComponent.css';
import logo from '../../assets/logo.png';




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
                <p style={{color: "white"}}>This is not a good login. Please try again.</p>
            )
        }
    }
    const handleKeypress = e => {
        if (e.keyCode === 13) {
          this.btn.click();
        }
      };
    
    return (
        <div className="login-component">
            <form className="loginForm">
                <img className="mb-5" src={logo} />
                <h3 className="h3 mb-3 font-weight-normal">Please Login</h3>
                <label className="username form-label form-control-lg p-0 m-0">
                    
                    <input className="username_input form-control-lg" 
                    onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" />
                </label>
                <label className="password form-label form-control-lg p-0 m-0">
                    
                    <input className="password_input form-control-lg" 
                    onChange={(e) => setPassword(e.target.value)} 
                    onKeyPress={handleKeypress}
                    type="password" placeholder="Password" />
                </label>
                {errorHandler()}
                <button className="btn btn-lg btn-primary btn-block mt-3 login_button"
                type="submit" 
                onClick={() => onclickHandler()}
                >Login</button>
            </form>
        </div>
    );
}

export default LoginComponent
