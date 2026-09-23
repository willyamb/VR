const services = [
  {
    icon: "bi bi-flask",
    title: "Seguridad Química",
    description:
      "Asesoría y acompañamiento para la gestión segura de sustancias y productos químicos en las organizaciones.",
  },
  {
    icon: "bi bi-shield-check",
    title: "Seguridad y Salud en el Trabajo",
    description:
      "Servicios orientados a fortalecer la gestión preventiva y las condiciones de seguridad en las empresas.",
  },
  {
    icon: "bi bi-mortarboard",
    title: "Capacitaciones",
    description:
      "Espacios de formación dirigidos a empresas y trabajadores sobre temas relacionados con seguridad química y SST.",
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

                <div className="service-icon">
                  <i className={service.icon}></i>
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <a href="/contacto" className="service-link">
                  Conocer más
                  <i className="bi bi-arrow-right ms-2"></i>
                </a>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}