import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Nosotros() {
  return (
    <>
      <Navbar />

      <main>
        <section className="internal-hero">
          <div className="container">
            <p className="section-subtitle">
              CONOZCA NUESTRO ENFOQUE
            </p>

            <h1 className="internal-title">
              Nosotros
            </h1>

            <p className="internal-description">
              Acompañamiento profesional para organizaciones que buscan
              fortalecer la gestión de seguridad química y Seguridad y Salud
              en el Trabajo.
            </p>
          </div>
        </section>

        <section className="internal-content">
          <div className="container">
            <div className="row align-items-center g-5">

              <div className="col-lg-5">
                <div className="about-visual">
                  <i className="bi bi-person-badge"></i>
                </div>
              </div>

              <div className="col-lg-7">

                <p className="section-subtitle">
                  VIVIANA REMOLINA
                </p>

                <h2>
                  Ingeniería Química | Seguridad Química | SST
                </h2>

                <p>
                  Este espacio estará destinado a presentar la trayectoria
                  profesional, experiencia y enfoque de trabajo de Viviana
                  Remolina.
                </p>

                <p>
                  La información será desarrollada a partir de sus
                  antecedentes profesionales y de los servicios que ofrece
                  actualmente a las organizaciones.
                </p>

              </div>

            </div>

            <div className="row justify-content-center mt-5">
              <div className="col-lg-9">

                <h2>
                  Nuestro enfoque
                </h2>

                <p>
                  Buscamos ofrecer un acompañamiento orientado a las
                  necesidades particulares de cada organización, con énfasis
                  en la prevención, la gestión de riesgos y el fortalecimiento
                  de la seguridad.
                </p>

                <p>
                  Esta sección será complementada posteriormente con
                  información específica sobre la experiencia, metodología y
                  propuesta profesional.
                </p>

              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}