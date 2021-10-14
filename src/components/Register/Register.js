import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Register = () => {
    const { handleRegistration, handleEmailChange, handleNameChange, handlePasswordChange, toggleLogin} = useFirebase();
    return (
        <div className="join-container" onSubmit={handleRegistration}>
            <h2>Sign up for free!</h2>
            <input onBlur={handleEmailChange} className="text-field input-field" type="email" name="email" id="email" placeholder="Email Address" />
            <input onBlur={handleNameChange} className="text-field input-field" type="text" name="name" id="name" placeholder="Full Name" />
            <input onBlur={handlePasswordChange} className="input-field" type="password" name="password" id="password" placeholder="Password" />
            <small>I agree to the <Link to="/privacy">privacy policy</Link> and <Link to="service">terms of service</Link>.</small>
            <button onChange={toggleLogin} className="common-btn login-btn">Sign up with email</button>
            <Link to="/login" className="link-style">Already have an account?</Link>
        </div>
    );
};

export default Register;