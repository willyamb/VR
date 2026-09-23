export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row g-4">

          <div className="col-lg-5">
            <h3 className="footer-brand">
              Viviana Remolina
            </h3>

            <p className="footer-description">
              Ingeniería Química
              <br />
              Seguridad Química | SST
            </p>
          </div>

          <div className="col-lg-3">
            <h4 className="footer-title">
              Navegación
            </h4>

            <ul className="footer-links">
              <li>
                <a href="/">Inicio</a>
              </li>
              <li>
                <a href="/seguridad-quimica">Seguridad Química</a>
              </li>
              <li>
                <a href="/sst">SST</a>
              </li>
              <li>
                <a href="/capacitaciones">Capacitaciones</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-4">
            <h4 className="footer-title">
              Contacto
            </h4>

            <ul className="footer-contact">
              <li>
                <i className="bi bi-envelope"></i>
                <span>Correo electrónico</span>
              </li>

              <li>
                <i className="bi bi-whatsapp"></i>
                <span>WhatsApp</span>
              </li>

              <li>
                <i className="bi bi-geo-alt"></i>
                <span>Ubicación</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p>
            © 2026 Viviana Remolina. Todos los derechos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
}