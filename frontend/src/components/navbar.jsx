import '../styles/navbar.css';

export default function Navbar({ setPagina, isLogged, setIsLogged }) {
    return (
        <nav className="main-navbar">
            <div className='logocontainer'>
                <img className='nav-logo' src="/logo.png" alt="" />
            </div>
            <div>
                <button onClick={() => setPagina('Home')}>Inicio</button>

                {!isLogged ? (
                    <button onClick={() => setPagina('login')}>Ingresar</button>
                ) : (
                    <button onClick={() => setIsLogged(false)}>Cerrar Sesión</button>
                )}
            </div>
        </nav >
    );
}
