import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const servicios = [
  {
    titulo: "Identificación y análisis de peligros de procesos",
    descripcion:
      "Identificación y análisis de peligros asociados a los procesos y operaciones de la organización.",
    ruta: "/seguridadprocesos/identificacion-peligros",
  },
  {
    titulo: "Estudios HAZOP (Hazard and Operability Study)",
    descripcion:
      "Estudios HAZOP orientados a la identificación de peligros y desviaciones en procesos y operaciones.",
    ruta: "/seguridadprocesos/hazop",
  },
  {
    titulo: "Análisis LOPA (Layer of Protection Analysis)",
    descripcion:
      "Análisis LOPA para la evaluación de capas de protección frente a escenarios de riesgo de procesos.",
    ruta: "/seguridadprocesos/lopa",
  },
  {
    titulo: "Identificación y evaluación de escenarios de accidentes mayores",
    descripcion:
      "Identificación y evaluación de escenarios asociados a accidentes mayores y sus posibles consecuencias.",
    ruta: "/seguridadprocesos/accidentes-mayores",
  },
  {
    titulo: "Análisis de causas y consecuencias",
    descripcion:
      "Análisis de las causas y consecuencias asociadas a eventos y escenarios de riesgo de procesos.",
    ruta: "/seguridadprocesos/causas-consecuencias",
  },
  {
    titulo: "Identificación y evaluación de barreras de seguridad",
    descripcion:
      "Identificación y evaluación de barreras destinadas a prevenir o mitigar eventos de riesgo.",
    ruta: "/seguridadprocesos/barreras-seguridad",
  },
  {
    titulo: "Gestión del cambio (MOC)",
    descripcion:
      "Acompañamiento en la gestión del cambio (Management of Change) para controlar los riesgos asociados a modificaciones en procesos y operaciones.",
    ruta: "/seguridadprocesos/gestion-cambio",
  },
  {
    titulo: "Identificación y evaluación de tareas y equipos críticos",
    descripcion:
      "Identificación y evaluación de tareas y equipos críticos relacionados con la seguridad de los procesos.",
    ruta: "/seguridadprocesos/tareas-equipos-criticos",
  },
  {
    titulo: "Análisis de riesgos de procesos y operaciones",
    descripcion:
      "Análisis de riesgos asociados a los procesos y operaciones para fortalecer la prevención de eventos no deseados.",
    ruta: "/seguridadprocesos/analisis-riesgos",
  },
  {
    titulo: "Evaluación de medidas de prevención y mitigación",
    descripcion:
      "Evaluación de medidas orientadas a prevenir eventos de riesgo y mitigar sus posibles consecuencias.",
    ruta: "/seguridadprocesos/prevencion-mitigacion",
  },
  {
    titulo: "Elaboración y revisión de procedimientos para operaciones críticas",
    descripcion:
      "Elaboración y revisión de procedimientos orientados a fortalecer la seguridad durante operaciones críticas.",
    ruta: "/seguridadprocesos/procedimientos-operaciones",
  },
  {
    titulo: "Recomendaciones para fortalecimiento de la seguridad de procesos",
    descripcion:
      "Recomendaciones orientadas al fortalecimiento de la gestión y seguridad de los procesos.",
    ruta: "/seguridadprocesos/recomendaciones",
  },
];

export default function SeguridadProcesos() {
  return (
    <>
      <Navbar />

      <main>

        {/* =========================
            HERO
        ========================= */}

        <section className="internal-hero">
          <div className="container">

            <p className="section-subtitle">
              SERVICIOS PROFESIONALES
            </p>

            <h1 className="internal-title">
              Seguridad de Procesos
            </h1>

            <p className="internal-description">
              Servicios especializados para la identificación, análisis y
              gestión de riesgos asociados a procesos y operaciones.
            </p>

          </div>
        </section>


        {/* =========================
            CONTENIDO
        ========================= */}

        <section className="internal-content">

          <div className="container">

            {/* INTRODUCCIÓN */}

            <div className="row justify-content-center">

              <div className="col-lg-10">

              
              </div>

            </div>


            {/* =========================
                SERVICIOS
            ========================= */}

            <div className="row justify-content-center mt-5">

              <div className="col-12">

                <h2 className="text-center mb-5">
                  Servicios relacionados
                </h2>


                <div className="row g-4">

                  {servicios.map((servicio) => (

                    <div
                      className="col-lg-4 col-md-6"
                      key={servicio.titulo}
                    >

                      <div className="service-card h-100">

                        {/* IMAGEN */}

                        <div className="service-image">

                          <img
                            src="/images/imgprueba.png"
                            alt={servicio.titulo}
                          />

                        </div>


                        {/* TITULO */}

                        <h3>
                          {servicio.titulo}
                        </h3>


                        {/* DESCRIPCIÓN */}

                        <p>
                          {servicio.descripcion}
                        </p>


                        {/* ENLACE */}

                        <Link
                          href={servicio.ruta}
                          className="service-link"
                        >
                          Ver esta subcategoría
                          <span className="ms-2">
                            →
                          </span>
                        </Link>

                      </div>

                    </div>

                  ))}

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