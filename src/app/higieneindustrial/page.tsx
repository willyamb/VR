import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const servicios = [
  {
    titulo: "Identificación de peligros higiénicos ocupacionales",
    descripcion:
      "Identificación de peligros relacionados con agentes ocupacionales presentes en los ambientes y procesos de trabajo.",
    ruta: "/higieneindustrial/identificacion-peligros",
  },
  {
    titulo: "Evaluación cualitativa de exposición a agentes químicos",
    descripcion:
      "Evaluación cualitativa de las condiciones de exposición a agentes químicos presentes en los procesos y áreas de trabajo.",
    ruta: "/higieneindustrial/evaluacion-cualitativa",
  },
  {
    titulo: "Diseño de estrategias de muestreo",
    descripcion:
      "Diseño de estrategias de muestreo orientadas a la evaluación de las condiciones de exposición ocupacional.",
    ruta: "/higieneindustrial/estrategias-muestreo",
  },
  {
    titulo:
      "Identificación y conformación de Grupos de Exposición Similar (GES)",
    descripcion:
      "Identificación y conformación de grupos de trabajadores con condiciones de exposición similares.",
    ruta: "/higieneindustrial/grupos-exposicion-similar",
  },
  {
    titulo:
      "Evaluación cuantitativa de exposición a material particulado, gases, vapores y aerosoles",
    descripcion:
      "Evaluación cuantitativa de la exposición ocupacional a material particulado, gases, vapores y aerosoles.",
    ruta: "/higieneindustrial/evaluacion-cuantitativa",
  },
  {
    titulo: "Interpretación de resultados de monitoreos higiénicos",
    descripcion:
      "Análisis e interpretación de resultados obtenidos mediante monitoreos higiénicos ocupacionales.",
    ruta: "/higieneindustrial/interpretacion-monitoreos",
  },
  {
    titulo:
      "Comparación de resultados con valores límite de exposición ocupacional",
    descripcion:
      "Comparación de los resultados de evaluación con valores límite de exposición ocupacional.",
    ruta: "/higieneindustrial/valores-limite",
  },
  {
    titulo: "Elaboración de informes técnicos de higiene industrial",
    descripcion:
      "Elaboración de informes técnicos con resultados, análisis y conclusiones de las evaluaciones realizadas.",
    ruta: "/higieneindustrial/informes-tecnicos",
  },
  {
    titulo: "Diseño y evaluación de medidas de control de exposición",
    descripcion:
      "Diseño y evaluación de medidas orientadas a controlar y reducir la exposición a agentes ocupacionales.",
    ruta: "/higieneindustrial/medidas-control",
  },
  {
    titulo: "Verificación de la eficacia de los controles implementados",
    descripcion:
      "Verificación de la eficacia de las medidas de control implementadas para gestionar la exposición ocupacional.",
    ruta: "/higieneindustrial/verificacion-controles",
  },
  {
    titulo:
      "Diseño de programas de vigilancia y seguimiento de la exposición",
    descripcion:
      "Diseño de programas para la vigilancia y seguimiento de las condiciones de exposición ocupacional.",
    ruta: "/higieneindustrial/programas-vigilancia",
  },
  {
    titulo:
      "Asesoría en selección de métodos de medición y equipos de muestreo",
    descripcion:
      "Asesoría para la selección de métodos de medición y equipos adecuados para el muestreo higiénico.",
    ruta: "/higieneindustrial/metodos-equipos",
  },
  {
    titulo:
      "Capacitación en prevención de la exposición a agentes ocupacionales",
    descripcion:
      "Capacitación orientada a la prevención y control de la exposición a agentes presentes en el entorno ocupacional.",
    ruta: "/higieneindustrial/capacitacion-exposicion",
  },
];

export default function HigieneIndustrial() {
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
              Higiene Industrial
            </h1>

            <p className="internal-description">
              Servicios especializados para la identificación, evaluación y
              control de la exposición a agentes ocupacionales.
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