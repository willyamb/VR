import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="container">

        {/* Logo y nombre */}
        <Link
          className="navbar-brand d-flex align-items-center"
          href="/"
        >
          <img
            className="navbar-logo"
            src="/images/logo2.png"
            alt="Logo Quimprev"
          />

          <div className="navbar-brand-text">
            <div className="navbar-name">
              Quimprev
            </div>

            <div className="navbar-description">
              Gestión, prevención y control del riesgo químico.
            </div>
          </div>
        </Link>

        {/* Botón menú móvil */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Abrir navegación"
        >
          <i className="bi bi-list"></i>
        </button>

        {/* Menú */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link" href="/">
                Inicio
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="/nosotros">
                Nosotros
              </Link>
            </li>

            {/* =========================
                RIESGO QUÍMICO
            ========================= */}

            <li className="nav-item dropdown">

              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Riesgo Químico
              </a>

              <ul className="dropdown-menu">

                <li>
                  <Link
                    className="dropdown-item"
                    href="/riesgoquimico"
                  >
                    Riesgo Químico
                  </Link>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <Link
                    className="dropdown-item"
                    href="/riesgoquimico/gestion"
                  >
                    Gestión
                  </Link>
                </li>

                <li>
                  <Link
                    className="dropdown-item"
                    href="/riesgoquimico/sga"
                  >
                    Sistema Globalmente Armonizado – SGA
                  </Link>
                </li>

                <li>
                  <Link
                    className="dropdown-item"
                    href="/riesgoquimico/transporte"
                  >
                    Transporte de Mercancías Peligrosas
                  </Link>
                </li>

                <li>
                  <Link
                    className="dropdown-item"
                    href="/riesgoquimico/almacenamiento"
                  >
                    Almacenamiento y Manipulación
                  </Link>
                </li>

                <li>
                  <Link
                    className="dropdown-item"
                    href="/riesgoquimico/residuos"
                  >
                    Residuos químicos
                  </Link>
                </li>

              </ul>

            </li>


            <li className="nav-item">
              <Link className="nav-link" href="/higieneindustrial">
                Higiene Industrial
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="/seguridadprocesos">
                Seguridad de Procesos
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="/contacto">
                Contacto
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}