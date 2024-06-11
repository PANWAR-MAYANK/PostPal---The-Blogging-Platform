import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/auth/register', { username, email, password });
            history.push('/login');
        } catch (error) {
            alert('Error registering user');
        }
    };

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleRegister}>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
