import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const servicios = [
  {
    titulo: "Identificación de residuos químicos",
    descripcion:
      "Identificación de los residuos generados en las actividades que involucran sustancias químicas.",
    ruta: "/riesgoquimico/residuos/identificacion",
  },
  {
    titulo: "Clasificación de residuos químicos",
    descripcion:
      "Clasificación de los residuos químicos de acuerdo con sus características y condiciones de peligrosidad.",
    ruta: "/riesgoquimico/residuos/clasificacion",
  },
  {
    titulo: "Segregación de residuos químicos",
    descripcion:
      "Orientación para la segregación adecuada de residuos químicos desde su generación y manejo inicial.",
    ruta: "/riesgoquimico/residuos/segregacion",
  },
  {
    titulo: "Manejo seguro de residuos peligrosos",
    descripcion:
      "Acompañamiento para fortalecer las condiciones de seguridad durante el manejo de residuos químicos peligrosos.",
    ruta: "/riesgoquimico/residuos/manejo-seguro",
  },
];

export default function ResiduosQuimicos() {
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
              Residuos químicos
            </h1>

            <p className="internal-description">
              Servicios orientados a fortalecer la gestión y el manejo seguro
              de los residuos generados por actividades con sustancias químicas.
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