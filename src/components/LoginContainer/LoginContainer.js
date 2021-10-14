import React from 'react';
import Login from '../Login/Login';
import Container from '../Container/Container';
import './LoginContainer.css';

const LoginContainer = () => {
    return (
        <div className="App">
            <Container></Container>
            <Login></Login>
        </div>
    );
};

export default LoginContainer;