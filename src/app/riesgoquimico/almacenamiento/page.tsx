import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const servicios = [
  {
    titulo:
      "Inspección de condiciones de almacenamiento y manipulación de sustancias químicas",
    descripcion:
      "Evaluación de las condiciones existentes para el almacenamiento y manipulación segura de sustancias químicas.",
    ruta: "/riesgoquimico/almacenamiento/inspeccion",
  },
  {
    titulo: "Elaboración y actualización de matrices de compatibilidad química",
    descripcion:
      "Elaboración y actualización de matrices para identificar la compatibilidad entre sustancias químicas y fortalecer su almacenamiento seguro.",
    ruta: "/riesgoquimico/almacenamiento/matriz-compatibilidad",
  },
  {
    titulo: "Organización y clasificación de sustancias según peligrosidad",
    descripcion:
      "Organización y clasificación de sustancias químicas considerando sus características y niveles de peligrosidad.",
    ruta: "/riesgoquimico/almacenamiento/clasificacion",
  },
  {
    titulo: "Definición de condiciones seguras para almacenamiento",
    descripcion:
      "Definición de condiciones orientadas a fortalecer la seguridad durante el almacenamiento de sustancias químicas.",
    ruta: "/riesgoquimico/almacenamiento/condiciones-seguras",
  },
  {
    titulo:
      "Procedimientos para recepción y almacenamiento de sustancias químicas",
    descripcion:
      "Diseño y actualización de procedimientos para fortalecer la seguridad durante la recepción y almacenamiento de sustancias químicas.",
    ruta: "/riesgoquimico/almacenamiento/procedimientos",
  },
  {
    titulo: "Recomendaciones para control de derrames y fugas",
    descripcion:
      "Recomendaciones orientadas a fortalecer la prevención y el control ante posibles derrames y fugas de sustancias químicas.",
    ruta: "/riesgoquimico/almacenamiento/derrames-fugas",
  },
];

export default function AlmacenamientoManipulacion() {
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
              Almacenamiento y Manipulación
            </h1>

            <p className="internal-description">
              Servicios orientados a fortalecer las condiciones de seguridad
              para el almacenamiento y manipulación de sustancias químicas.
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
                  Almacenamiento y Manipulación de Sustancias Químicas
                </h2>

                <p>
                  El almacenamiento y la manipulación adecuada de sustancias
                  químicas permiten reducir los riesgos asociados a su manejo
                  y fortalecer las condiciones de seguridad dentro de las
                  organizaciones.
                </p>

                <p>
                  Los servicios pueden adaptarse a las características,
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