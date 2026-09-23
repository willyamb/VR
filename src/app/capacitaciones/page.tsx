import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Capacitaciones() {
  return (
    <>
      <Navbar />

      <main>
        <section className="internal-hero">
          <div className="container">
            <p className="section-subtitle">
              SERVICIOS PROFESIONALES
            </p>

            <h1 className="internal-title">
              Capacitaciones
            </h1>

            <p className="internal-description">
              Espacios de formación dirigidos a empresas y trabajadores sobre
              temas relacionados con seguridad química y Seguridad y Salud en
              el Trabajo.
            </p>
          </div>
        </section>

        <section className="internal-content">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">

                <h2>
                  Formación para las organizaciones
                </h2>

                <p>
                  La capacitación contribuye al fortalecimiento de los
                  conocimientos y buenas prácticas relacionadas con la
                  seguridad dentro de las organizaciones.
                </p>

                <p>
                  Los contenidos pueden adaptarse a las necesidades y
                  características de cada empresa.
                </p>

                <h2>
                  Áreas de formación
                </h2>

                <div className="row g-4 mt-2">

                  <div className="col-md-6">
                    <div className="internal-card">
                      <i className="bi bi-flask"></i>

                      <h3>
                        Seguridad Química
                      </h3>

                      <p>
                        Formación relacionada con el manejo seguro y la
                        gestión de sustancias y productos químicos.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="internal-card">
                      <i className="bi bi-shield-check"></i>

                      <h3>
                        Seguridad y Salud en el Trabajo
                      </h3>

                      <p>
                        Espacios de formación relacionados con la prevención
                        de riesgos y la seguridad en el entorno laboral.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="internal-card">
                      <i className="bi bi-people"></i>

                      <h3>
                        Formación para equipos
                      </h3>

                      <p>
                        Actividades de formación orientadas a trabajadores y
                        equipos de las organizaciones.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="internal-card">
                      <i className="bi bi-book"></i>

                      <h3>
                        Contenidos adaptados
                      </h3>

                      <p>
                        Contenidos que pueden ajustarse a las necesidades
                        particulares de cada organización.
                      </p>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}