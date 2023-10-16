import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const handleLogin = async () => {
        dispatch(loginUser({ email, password }))
    };

    // const data = window.localStorage.getItem('user')
    // const output = JSON.parse(data);
    // console.log(output?.role)


    return (
        <div>
            <h2>Login</h2>
            <div>
                <label>Email:</label>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div>
                <label>Password:</label>
                <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? 'Hide' : 'Show'} Password
                </button>
            </div>
            <button onClick={handleLogin}>Login</button>
        </div>

    );
}

export default Login;
