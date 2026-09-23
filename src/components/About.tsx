export default function About() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="row align-items-center g-5">

          <div className="col-lg-5">
            <div className="about-visual">
              <i className="bi bi-person-badge"></i>
            </div>
          </div>

          <div className="col-lg-7">

            <p className="section-subtitle">
              SOBRE NOSOTROS
            </p>

            <h2 className="section-title">
              Acompañamiento profesional para su empresa
            </h2>

            <p className="about-text">
              Brindamos acompañamiento a organizaciones que buscan fortalecer
              sus procesos relacionados con seguridad química y Seguridad y
              Salud en el Trabajo.
            </p>

            <p className="about-text">
              Nuestro enfoque busca ofrecer soluciones prácticas y adaptadas
              a las necesidades de cada organización.
            </p>

            <a href="/nosotros" className="btn about-button">
              Conocer más
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}