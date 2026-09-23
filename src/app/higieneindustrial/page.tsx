import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SST() {
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
              Higiene Industrial
            </h1>

            <p className="internal-description">
              Acompañamiento para fortalecer la gestión preventiva y las
              condiciones de seguridad y salud en las organizaciones.
            </p>
          </div>
        </section>

        <section className="internal-content">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">

                <h2>
                  Seguridad y Salud en el Trabajo
                </h2>

                <p>
                  La gestión de Seguridad y Salud en el Trabajo busca
                  contribuir a la prevención de riesgos y al fortalecimiento
                  de condiciones laborales seguras para las organizaciones.
                </p>

                <p>
                  Los servicios pueden adaptarse a las características y
                  necesidades de cada empresa.
                </p>

                <h2>
                  Servicios relacionados
                </h2>

                <div className="row g-4 mt-2">

                  <div className="col-md-6">
                    <div className="internal-card">
                      <i className="bi bi-shield-check"></i>

                      <h3>
                        Gestión preventiva
                      </h3>

                      <p>
                        Acompañamiento en procesos orientados a fortalecer la
                        prevención y gestión de riesgos laborales.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="internal-card">
                      <i className="bi bi-clipboard-check"></i>

                      <h3>
                        Gestión de riesgos
                      </h3>

                      <p>
                        Orientación para identificar y gestionar aspectos
                        relacionados con la seguridad y salud en el trabajo.
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