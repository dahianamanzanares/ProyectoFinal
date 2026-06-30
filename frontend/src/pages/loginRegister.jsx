import React, { useState } from 'react';
import { api } from '../api/api';
import '../styles/loginRegister.css';
import Navbar from '../components/navbar';

export default function LoginRegister({ setIsLogged, setPagina }) {
    const [loginData, setLoginData] = useState({ username: '', password: '' });
    const [regData, setRegData] = useState({ username: '', email: '', password: '' });

    const handleLogin = async () => {
        try {

            const res = await api.post("/auth/login", loginData);


            if (res.data.token) {
                localStorage.setItem("token", res.data.token);
                setIsLogged(true); // Esto activará el Dashboard en App.jsx
            } else {

                alert(res.data);
            }
        } catch (err) {
            console.error(err);
            alert("Error de conexión con el servidor");
        }
    };

    const handleRegister = async () => {
        try {

            await api.post("/auth/registro", regData);
            alert("Registro exitoso, ya puedes ingresar");
            setRegData({ username: '', email: '', password: '' });
        } catch (err) {
            console.error(err);
            alert("Error al registrar: verifica los datos");
        }
    };

    return (
        <>
            <Navbar setPagina={setPagina} isLogged={false} />
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
        </>
    );
}