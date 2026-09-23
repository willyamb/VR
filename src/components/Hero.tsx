export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="row align-items-center min-vh-75">

          <div className="col-lg-7">

            <p className="hero-subtitle">
              SEGURIDAD QUÍMICA | SST
            </p>

            <h1 className="hero-title">
              Soluciones profesionales para la seguridad de su empresa
            </h1>

            <p className="hero-description">
              Consultoría y acompañamiento empresarial en seguridad química,
              seguridad y salud en el trabajo y gestión preventiva.
            </p>

            <div className="hero-buttons">
              <a href="/contacto" className="btn btn-primary me-2">
                Solicitar asesoría
              </a>

              <a href="#servicios" className="btn btn-outline-secondary">
                Conocer servicios
              </a>
            </div>

          </div>

          <div className="col-lg-5">
            <div className="hero-visual">
              <i className="bi bi-shield-check"></i>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}