import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import './Container.css';

const Container = () => {
    const {handleGoogleSignIn} = useFirebase();
    return (
        <div className="social-container">
            <h1>Foodie</h1>
            <p>Login using social media to get quick access</p>
            <div className="social">
                <button className="common-btn signin-google-btn" onClick={handleGoogleSignIn}><i className="fab fa-google"></i> Signin with google</button>
                <button className="common-btn signin-fb-btn"><i className="fab fa-facebook-f"></i> Signin with facebook</button>
                <button className="common-btn signin-github-btn"><i className="fab fa-github"></i> Signin with github</button>
            </div>
        </div>
    );
};

export default Container;