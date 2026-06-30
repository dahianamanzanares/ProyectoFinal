function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-text">
          <span className="subtitle">► BIENVENIDO A</span>

          <h1>TECH STORE</h1>

          <h3>La mejor tecnología, al mejor precio.</h3>

          <p>
            Descubre nuestra selección de productos electrónicos con garantía y
            envío a todo el país.
          </p>

          <button className="hero-btn">🛒 Ver productos</button>
        </div>

        <div className="hero-image-container">
          <img src="/banner.png" alt="Banner" className="hero-image" />
        </div>
      </section>

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

      <section className="categories">
        <h2>Categorías destacadas</h2>

        <div className="category-grid">
          <div className="category-card">
            <img src="/computadora.png" alt="" />
            <h3>Notebooks</h3>
          </div>

          <div className="category-card">
            <img src="/celular.png" alt="" />
            <h3>Celulares</h3>
          </div>

          <div className="category-card">
            <img src="/auriculares.png" alt="" />
            <h3>Auriculares</h3>
          </div>

          <div className="category-card">
            <img src="/accesorios.png" alt="" />
            <h3>Accesorios</h3>
          </div>

          <div className="category-card">
            <img src="/monitor.png" alt="" />
            <h3>Monitores</h3>
          </div>

          <div className="category-card">
            <img src="/equipogamer.png" alt="" />
            <h3>Gaming</h3>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
