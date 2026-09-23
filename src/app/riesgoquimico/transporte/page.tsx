import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const servicios = [
  {
    titulo: "Clasificación de mercancías peligrosas para transporte",
    descripcion:
      "Clasificación de mercancías peligrosas de acuerdo con sus características y peligros asociados al transporte.",
    ruta: "/riesgoquimico/transporte/clasificacion",
  },
  {
    titulo:
      "Identificación de número ONU, clase de peligro y grupo de embalaje",
    descripcion:
      "Identificación de la información necesaria para la correcta gestión y transporte de mercancías peligrosas.",
    ruta: "/riesgoquimico/transporte/identificacion",
  },
  {
    titulo: "Revisión de requisitos para transporte de sustancias químicas",
    descripcion:
      "Revisión de los requisitos aplicables al transporte seguro de sustancias y mercancías peligrosas.",
    ruta: "/riesgoquimico/transporte/requisitos",
  },
  {
    titulo: "Revisión de documentación para transporte",
    descripcion:
      "Revisión de la documentación requerida para fortalecer la gestión y seguridad durante el transporte.",
    ruta: "/riesgoquimico/transporte/documentacion",
  },
  {
    titulo: "Revisión de rotulado, marcado y señalización",
    descripcion:
      "Revisión de las condiciones de rotulado, marcado y señalización asociadas al transporte de mercancías peligrosas.",
    ruta: "/riesgoquimico/transporte/rotulado",
  },
  {
    titulo:
      "Elaboración y actualización de procedimientos para transporte",
    descripcion:
      "Diseño y actualización de procedimientos orientados a fortalecer las condiciones de seguridad durante el transporte.",
    ruta: "/riesgoquimico/transporte/procedimientos",
  },
  {
    titulo:
      "Evaluación de condiciones de seguridad durante la movilización",
    descripcion:
      "Evaluación de las condiciones de seguridad relacionadas con la movilización de mercancías peligrosas.",
    ruta: "/riesgoquimico/transporte/condiciones-seguridad",
  },
  {
    titulo:
      "Identificación de peligros y controles asociados al transporte",
    descripcion:
      "Identificación de peligros y definición de controles relacionados con el transporte de mercancías peligrosas.",
    ruta: "/riesgoquimico/transporte/peligros-controles",
  },
  {
    titulo:
      "Capacitación en manejo y transporte seguro de mercancías peligrosas",
    descripcion:
      "Capacitación orientada al manejo y transporte seguro de mercancías peligrosas.",
    ruta: "/riesgoquimico/transporte/capacitacion",
  },
];

export default function TransporteMercanciasPeligrosas() {
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
              Transporte de Mercancías Peligrosas
            </h1>

            <p className="internal-description">
              Servicios especializados para fortalecer la gestión y seguridad
              durante el transporte de sustancias y mercancías peligrosas.
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
                  Transporte de Mercancías Peligrosas
                </h2>

                <p>
                  La gestión adecuada del transporte de mercancías peligrosas
                  permite identificar los peligros asociados a la movilización
                  de sustancias químicas y establecer controles orientados a
                  fortalecer las condiciones de seguridad.
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