import React, { useState } from 'react';
import axios from 'axios';

export default function LoginRegister({ setIsLogged }) {
    const [loginData, setLoginData] = useState({ username: '', password: '' });
    const [regData, setRegData] = useState({ username: '', email: '', password: '' });

    const handleLogin = async () => {
        try {
            await axios.post("http://localhost:8000/api/auth/login", loginData);
            setIsLogged(true); // Cambia el estado en App.js para mostrar el Dashboard
        } catch (err) {
            alert("Error: Usuario o contraseña incorrectos");
        }
    };

    const handleRegister = async () => {
        try {
            await axios.post("http://localhost:8000/api/auth/registro", regData);
            alert("Registro exitoso, ya puedes ingresar");
        } catch (err) {
            alert("Error al registrar");
        }
    };

    return (
        <div className="auth-container">
            <div className="login-box">
                <h2>Login</h2>
                <input type="text" placeholder="Usuario" onChange={(e) => setLoginData({ ...loginData, username: e.target.value })} />
                <input type="password" placeholder="Contraseña" onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} />
                <button onClick={handleLogin}>Ingresar</button>
            </div>

            <hr />
            <div className="register-box">
                <h2>Registro</h2>
                <input type="text" placeholder="UserName" onChange={(e) => setRegData({ ...regData, username: e.target.value })} />
                <input type="email" placeholder="Mail" onChange={(e) => setRegData({ ...regData, email: e.target.value })} />
                <input type="password" placeholder="Password" onChange={(e) => setRegData({ ...regData, password: e.target.value })} />
                <button onClick={handleRegister}>Registrarme</button>
            </div>
        </div>
    );
}