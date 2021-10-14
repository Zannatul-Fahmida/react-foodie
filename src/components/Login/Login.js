import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Login.css';

const Login = () => {
  const { handleRegistration, handleEmailChange, handlePasswordChange, toggleLogin, handleResetPassword} = useFirebase();
    return (
        <form className="join-container" onSubmit={handleRegistration}>
        <h2>Login to your account</h2>
        <p>Don’t have an account? <Link to="/register" className="link-style">Sign Up Free!</Link></p>
        <input onBlur={handleEmailChange} className="text-field input-field" type="email" name="email" id="email" placeholder="Email Address" />
        <input onBlur={handlePasswordChange} className="input-field" type="password" name="password" id="password" placeholder="Password" />
        <div className="check">
        <p><input type="checkbox" name="checkbox" id="" />Remember me</p>
        <p className="link-style" onClick={handleResetPassword}>Forgot password?</p>
        </div>
        <button onChange={toggleLogin} className="common-btn login-btn">Login</button>
      </form>
    );
};

export default Login;