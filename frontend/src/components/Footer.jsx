import '../styles/home.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h3>TechStore</h3>
                <p>&copy; 2026 TechStore. Todos los derechos reservados.</p>
                <div className="social-links">
                    <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
                    <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
                </div>
            </div>
        </footer>
    );
}