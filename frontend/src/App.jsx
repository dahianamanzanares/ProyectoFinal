import { useState } from "react";
import './app.css';
import Dashboard from "./pages/dashboard";
import LoginRegister from "./pages/loginRegister";
import Home from "./pages/Home";

export default function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [pagina, setPagina] = useState('home');

  return (
    <div className="">
      {isLogged ? (
        <Dashboard setIsLogged={setIsLogged} setPagina={setPagina} />
      ) : (
        // Esta condición es la que controla qué se ve
        pagina === 'home' ? (
          <Home setPagina={setPagina} isLogged={isLogged} setIsLogged={setIsLogged} />
        ) : (
          <LoginRegister setIsLogged={setIsLogged} setPagina={setPagina} />
        )
      )}
    </div>
  );
}