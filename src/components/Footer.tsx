export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        <div className="row g-4 align-items-start">

          {/* QUIMPREV */}
          <div className="col-lg-5 col-md-5">

            <h3 className="footer-title">
              Quimprev
            </h3>

            <ul className="footer-links">

              <li>
                <a href="/riesgoquimico">
                  <span className="footer-link-arrow">→</span>
                  Riesgo Químico
                </a>
              </li>

              <li>
                <a href="/higieneindustrial">
                  <span className="footer-link-arrow">→</span>
                  Higiene Industrial
                </a>
              </li>

              <li>
                <a href="/seguridadprocesos">
                  <span className="footer-link-arrow">→</span>
                  Seguridad de Procesos
                </a>
              </li>

            </ul>

          </div>


          {/* CONTACTENOS */}
          <div className="col-lg-3 col-md-3">

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


          {/* REDES SOCIALES */}
          <div className="col-lg-4 col-md-4">

            <h4 className="footer-title footer-social-title">
              Nuestras Redes 
            </h4>

            <div className="footer-social">

              {/* Facebook */}
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="social-icon facebook"
              >
                <i className="bi bi-facebook"></i>
              </a>


              {/* Instagram */}
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="social-icon instagram"
              >
                <i className="bi bi-instagram"></i>
              </a>


              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="social-icon linkedin"
              >
                <i className="bi bi-linkedin"></i>
              </a>


              {/* YouTube */}
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="social-icon youtube"
              >
                <i className="bi bi-youtube"></i>
              </a>


              {/* WhatsApp */}
              <a
                href="https://www.whatsapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="social-icon whatsapp"
              >
                <i className="bi bi-whatsapp"></i>
              </a>

            </div>

          </div>

        </div>


        {/* COPYRIGHT */}
        <div className="footer-bottom">

          <p>
            © 2026 Quimprev. Todos los derechos reservados.
          </p>

        </div>

      </div>
    </footer>
  );
}