import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const servicios = [
  {
    titulo: "Diagnóstico de cumplimiento del SGA",
    descripcion:
      "Evaluación del nivel de cumplimiento de los requisitos relacionados con el Sistema Globalmente Armonizado en la organización.",
    ruta: "/riesgoquimico/sga/diagnostico-cumplimiento",
  },
  {
    titulo: "Implementación del Sistema Globalmente Armonizado",
    descripcion:
      "Acompañamiento en la implementación del Sistema Globalmente Armonizado para fortalecer la gestión y comunicación de los peligros químicos.",
    ruta: "/riesgoquimico/sga/implementacion",
  },
  {
    titulo:
      "Evaluación y clasificación de peligros físicos, para la salud y para el medio ambiente",
    descripcion:
      "Evaluación y clasificación de los peligros asociados a sustancias químicas de acuerdo con sus características físicas, para la salud y para el medio ambiente.",
    ruta: "/riesgoquimico/sga/clasificacion-peligros",
  },
  {
    titulo:
      "Elaboración y actualización de Fichas de Datos de Seguridad (FDS)",
    descripcion:
      "Elaboración y actualización de Fichas de Datos de Seguridad para facilitar la información y comunicación sobre los peligros de las sustancias químicas.",
    ruta: "/riesgoquimico/sga/fichas-datos-seguridad",
  },
  {
    titulo:
      "Revisión técnica de Fichas de Datos de Seguridad de proveedores",
    descripcion:
      "Revisión técnica de las Fichas de Datos de Seguridad suministradas por proveedores para verificar la información relacionada con las sustancias químicas.",
    ruta: "/riesgoquimico/sga/revision-fds-proveedores",
  },
  {
    titulo: "Elaboración y revisión de etiquetas bajo SGA",
    descripcion:
      "Elaboración y revisión de etiquetas bajo los criterios del Sistema Globalmente Armonizado para la comunicación de peligros.",
    ruta: "/riesgoquimico/sga/etiquetas",
  },
  {
    titulo:
      "Capacitación en interpretación de FDS y comunicación de peligros",
    descripcion:
      "Capacitación orientada a la interpretación de Fichas de Datos de Seguridad y a la comunicación adecuada de los peligros químicos.",
    ruta: "/riesgoquimico/sga/capacitacion",
  },
];

export default function SistemaGlobalmenteArmonizado() {
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
              RIESGO QUÍMICO
            </p>

            <h1 className="internal-title">
              Sistema Globalmente Armonizado – SGA
            </h1>

            <p className="internal-description">
              Servicios especializados para la implementación y gestión del
              Sistema Globalmente Armonizado y la comunicación de peligros
              químicos.
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

                <h2>
                  Sistema Globalmente Armonizado – SGA
                </h2>

                <p>
                  El Sistema Globalmente Armonizado permite establecer criterios
                  para la clasificación de los peligros de las sustancias
                  químicas y facilitar su comunicación mediante información
                  estandarizada.
                </p>

                <p>
                  Los servicios pueden adaptarse a las características y
                  necesidades específicas de cada organización.
                </p>

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