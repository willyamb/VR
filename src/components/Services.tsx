import Link from "next/link";

const services = [
  {
    image: "/images/RiesgoQuimico.jpg",
    title: "Riesgo Químico",
    description:
      "Asesoría y acompañamiento para la gestión segura de sustancias y productos químicos en las organizaciones.",
    link: "/riesgoquimico",
  },
  {
    image: "/images/HigieneIndustrial.jpg",
    title: "Higiene Industrial",
    description:
      "Servicios orientados a fortalecer la gestión preventiva y las condiciones de seguridad en las empresas.",
    link: "/higieneindustrial",
  },
  {
    image: "/images/SeguridadProcesos.jpg",
    title: "Seguridad de Procesos",
    description:
      "Espacios de formación dirigidos a empresas y trabajadores sobre temas relacionados con seguridad química y SST.",
    link: "/seguridadprocesos",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="services-section">
      <div className="container">

        <div className="text-center services-header">
          <p className="section-subtitle">NUESTROS SERVICIOS</p>

          <h2 className="section-title">
            Soluciones para la gestión de la seguridad empresarial
          </h2>

          <p className="section-description">
            Conozca las áreas en las que podemos acompañar a su organización.
          </p>
        </div>

        <div className="row g-4">

          {services.map((service) => (
            <div className="col-md-4" key={service.title}>

              <div className="service-card h-100">

                <div className="service-image">
                  <img
                    src={service.image}
                    alt={service.title}
                  />
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <Link
                  href={service.link}
                  className="service-link"
                >
                  Conocer más
                  <i className="bi bi-arrow-right ms-2"></i>
                </Link>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}