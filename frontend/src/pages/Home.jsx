import '../styles/home.css';
import Navbar from '../components/navbar'
import GridProductos from '../components/GridProductos';;
import Footer from '../components/Footer';

function Home({ setPagina, isLogged, setIsLogged }) {
  const scrollToProductos = () => {
    const seccion = document.getElementById('nuestros-productos');
    if (seccion) {
      seccion.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="home home-container">
      <Navbar setPagina={setPagina} isLogged={false} />
      <section className="hero">

        <div className="hero-text">
          <span className="subtitle">► BIENVENIDO A</span>

          <h1>TECH STORE</h1>

          <h3>La mejor tecnología, al mejor precio.</h3>

          <p>
            Descubre nuestra selección de productos electrónicos con garantía y
            envío a todo el país.
          </p>

          <button onClick={scrollToProductos} className="hero-btn">🛒 Ver productos</button>
        </div>

        <div className="hero-image-container">
          <img src="/banner.png" alt="Banner" className="hero-image" />
        </div>
      </section >

      <section className="benefits">
        <div className="benefit">
          <span>✔</span>
          <div>
            <h3>Productos originales</h3>
            <p>Todos nuestros productos son 100% originales.</p>
          </div>
        </div>

        <div className="benefit">
          <span>🏅</span>
          <div>
            <h3>Garantía</h3>
            <p>Garantía oficial en todos los productos.</p>
          </div>
        </div>

        <div className="benefit">
          <span>🚚</span>
          <div>
            <h3>Envíos rápidos</h3>
            <p>Recibe tus productos en todo el país.</p>
          </div>
        </div>

        <div className="benefit">
          <span>🎧</span>
          <div>
            <h3>Soporte 24/7</h3>
            <p>Siempre disponibles para ayudarte.</p>
          </div>
        </div>
      </section>
      <section >
        <h2 id="nuestros-productos" className='section-title'>Nuestros Productos</h2>
        <GridProductos />
      </section>
      <Footer />
    </div >
  );
}

export default Home;