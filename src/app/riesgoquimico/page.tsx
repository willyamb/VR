import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SeguridadQuimica() {
  return (
    <>
      <Navbar />

      <main>

        {/* =========================
            ENCABEZADO
        ========================= */}

        <section className="internal-hero">
          <div className="container">

            <p className="section-subtitle">
              SERVICIOS PROFESIONALES
            </p>

            <h1 className="internal-title">
              Riesgo Químico
            </h1>

            <p className="internal-description">
              Gestión segura y control del riesgo químico en las organizaciones.
            </p>

          </div>
        </section>


        {/* =========================
            CONTENIDO
        ========================= */}

        <section className="internal-content">
          <div className="container">

            <div className="row justify-content-center">

              <div className="col-lg-11">

                
                {/* =========================
                    SERVICIOS
                ========================= */}

                <div className="row g-4 mt-2">


                  {/* =========================
                      1. GESTIÓN
                  ========================= */}

                  <div className="col-lg-4 col-md-6">

                    <div className="service-card">

                      <div className="service-image">
                        <img
                          src="/images/imgprueba.png"
                          alt="Gestión del riesgo químico"
                        />
                      </div>

                      <h3>
                        Gestión
                      </h3>

                      <p>
                        Acompañamiento para fortalecer la gestión,
                        evaluación y control del riesgo asociado a
                        sustancias y productos químicos.
                      </p>

                      <a
                        href="/riesgoquimico/gestion"
                        className="service-link"
                      >
                        Ver esta subcategoría
                        <span> →</span>
                      </a>

                    </div>

                  </div>


                  {/* =========================
                      2. SGA
                  ========================= */}

                  <div className="col-lg-4 col-md-6">

                    <div className="service-card">

                      <div className="service-image">
                        <img
                          src="/images/imgprueba.png"
                          alt="Sistema Globalmente Armonizado SGA"
                        />
                      </div>

                      <h3>
                        Sistema Globalmente Armonizado – SGA
                      </h3>

                      <p>
                        Orientación para la implementación del Sistema
                        Globalmente Armonizado para la clasificación y
                        comunicación de los peligros químicos.
                      </p>

                      <a
                        href="/riesgoquimico/sga"
                        className="service-link"
                      >
                        Ver esta subcategoría
                        <span> →</span>
                      </a>

                    </div>

                  </div>


                  {/* =========================
                      3. TRANSPORTE
                  ========================= */}

                  <div className="col-lg-4 col-md-6">

                    <div className="service-card">

                      <div className="service-image">
                        <img
                          src="/images/imgprueba.png"
                          alt="Transporte de mercancías peligrosas"
                        />
                      </div>

                      <h3>
                        Transporte de Mercancías Peligrosas
                      </h3>

                      <p>
                        Acompañamiento para fortalecer la gestión segura
                        del transporte y manejo de mercancías peligrosas.
                      </p>

                      <a
                        href="/riesgoquimico/transporte"
                        className="service-link"
                      >
                        Ver esta subcategoría
                        <span> →</span>
                      </a>

                    </div>

                  </div>


                  {/* =========================
                      4. ALMACENAMIENTO
                  ========================= */}

                  <div className="col-lg-4 col-md-6">

                    <div className="service-card">

                      <div className="service-image">
                        <img
                          src="/images/imgprueba.png"
                          alt="Almacenamiento y manipulación"
                        />
                      </div>

                      <h3>
                        Almacenamiento y Manipulación
                      </h3>

                      <p>
                        Orientación para fortalecer las condiciones
                        seguras de almacenamiento y manipulación de
                        sustancias químicas.
                      </p>

                      <a
                        href="/riesgoquimico/almacenamiento"
                        className="service-link"
                      >
                        Ver esta subcategoría
                        <span> →</span>
                      </a>

                    </div>

                  </div>


                  {/* =========================
                      5. RESIDUOS QUÍMICOS
                  ========================= */}

                  <div className="col-lg-4 col-md-6">

                    <div className="service-card">

                      <div className="service-image">
                        <img
                          src="/images/imgprueba.png"
                          alt="Residuos químicos"
                        />
                      </div>

                      <h3>
                        Residuos químicos
                      </h3>

                      <p>
                        Acompañamiento para la gestión, manejo y control
                        de residuos generados por actividades que
                        involucran sustancias químicas.
                      </p>

                      <a
                        href="/riesgoquimico/residuos"
                        className="service-link"
                      >
                        Ver esta subcategoría
                        <span> →</span>
                      </a>

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