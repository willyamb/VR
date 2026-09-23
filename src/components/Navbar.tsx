import Link from "next/link";

export default function Navbar() {
  return (
    <nav
  className="navbar navbar-expand-lg border-bottom"
  style={{ backgroundColor: "var(--color-background)" }}
>
      <div className="container">

       <Link
  className="navbar-brand d-flex align-items-center"
  href="/"
>
  <img
    className="navbar-logo"
    src="/images/Logovivi.jpg"
    alt="Logo Viviana Remolina"
  />

  <div className="navbar-brand-text">
    <div className="navbar-name">
      ING. VIVIANA REMOLINA
    </div>

    <div className="navbar-description">
      Consultorías Especializadas en Ingeniería Química y SST
    </div>
  </div>
</Link>
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

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link" href="/">
                Inicio
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="/seguridad-quimica">
                Seguridad Química
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="/sst">
                SST
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="/capacitaciones">
                Capacitaciones
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="/nosotros">
                Nosotros
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