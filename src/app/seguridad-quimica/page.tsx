import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SeguridadQuimica() {
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
              Seguridad Química
            </h1>

            <p className="internal-description">
              Soluciones y acompañamiento para fortalecer la gestión segura
              de sustancias y productos químicos en las organizaciones.
            </p>
          </div>
        </section>

        <section className="internal-content">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">

                <h2>
                  Gestión de la seguridad química
                </h2>

                <p>
                  La gestión adecuada de sustancias químicas permite a las
                  organizaciones identificar, controlar y prevenir riesgos
                  asociados a su manejo.
                </p>

                <p>
                  En esta área se pueden desarrollar servicios orientados a
                  las necesidades específicas de cada empresa.
                </p>

                <h2>
                  Servicios relacionados
                </h2>

                <div className="row g-4 mt-2">

                  <div className="col-md-6">
                    <div className="internal-card">
                      <i className="bi bi-flask"></i>

                      <h3>
                        Gestión de sustancias químicas
                      </h3>

                      <p>
                        Acompañamiento en procesos relacionados con la gestión
                        y manejo seguro de sustancias químicas.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="internal-card">
                      <i className="bi bi-shield-check"></i>

                      <h3>
                        Identificación de riesgos
                      </h3>

                      <p>
                        Orientación para identificar aspectos relacionados con
                        los riesgos asociados al manejo de productos químicos.
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