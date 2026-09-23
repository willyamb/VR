import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const servicios = [
  {
    titulo: "Diagnóstico del riesgo químico",
    descripcion:
      "Evaluación inicial de las condiciones relacionadas con la gestión y control del riesgo químico en la organización.",
    ruta: "/riesgoquimico/gestion/diagnostico",
  },
  {
    titulo:
      "Identificación de peligros y evaluación de riesgos químicos",
    descripcion:
      "Identificación de peligros asociados a sustancias químicas y evaluación de los riesgos derivados de su uso y manejo.",
    ruta: "/riesgoquimico/gestion/identificacion-peligros",
  },
  {
    titulo:
      "Elaboración e implementación del Programa de Gestión del Riesgo Químico",
    descripcion:
      "Diseño e implementación de estrategias orientadas a fortalecer la gestión y control del riesgo químico.",
    ruta: "/riesgoquimico/gestion/programa-riesgo-quimico",
  },
  {
    titulo: "Inventario y caracterización de sustancias químicas",
    descripcion:
      "Identificación, organización y caracterización de las sustancias químicas utilizadas en los procesos de la organización.",
    ruta: "/riesgoquimico/gestion/inventario-sustancias",
  },
  {
    titulo:
      "Identificación de tareas críticas con exposición a sustancias químicas",
    descripcion:
      "Identificación de tareas críticas en las que pueden presentarse condiciones de exposición a sustancias químicas.",
    ruta: "/riesgoquimico/gestion/tareas-criticas",
  },
  {
    titulo: "Evaluación del ciclo de vida de las sustancias químicas",
    descripcion:
      "Evaluación de las diferentes etapas relacionadas con el ciclo de vida de las sustancias químicas dentro de la organización.",
    ruta: "/riesgoquimico/gestion/ciclo-vida",
  },
  {
    titulo:
      "Evaluación de controles existentes y definición de medidas de intervención",
    descripcion:
      "Evaluación de los controles existentes y definición de medidas orientadas a fortalecer la gestión del riesgo químico.",
    ruta: "/riesgoquimico/gestion/medidas-intervencion",
  },
  {
    titulo:
      "Diseño de procedimientos para manejo seguro de sustancias químicas",
    descripcion:
      "Diseño de procedimientos orientados a fortalecer las prácticas seguras para el manejo de sustancias químicas.",
    ruta: "/riesgoquimico/gestion/procedimientos-manejo",
  },
];

export default function GestionRiesgoQuimico() {
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
              Gestión
            </h1>

            <p className="internal-description">
              Servicios para fortalecer la identificación, evaluación y
              gestión integral del riesgo asociado a sustancias químicas.
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
                  Gestión del Riesgo Químico
                </h2>

                <p>
                  La gestión del riesgo químico permite identificar peligros,
                  evaluar riesgos y establecer medidas orientadas a fortalecer
                  el manejo seguro de sustancias químicas en las organizaciones.
                </p>

                <p>
                  Estos servicios pueden adaptarse a las características,
                  procesos y necesidades específicas de cada organización.
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