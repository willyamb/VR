import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contacto() {
  return (
    <>
      <Navbar />

      <main>
        <section className="internal-hero">
          <div className="container">
            <p className="section-subtitle">
              CONTACTENOS
            </p>

            <h1 className="internal-title">
              Hablemos de su empresa
            </h1>

            <p className="internal-description">
              Póngase en contacto para conocer los servicios disponibles y
              conversar sobre las necesidades de su organización.
            </p>
          </div>
        </section>

        <section className="contact-section">
          <div className="container">
            <div className="row g-5">

              <div className="col-lg-5">
                <p className="section-subtitle">
                  INFORMACIÓN DE CONTACTO
                </p>

                <h2 className="contact-title">
                  Estamos para atender sus consultas
                </h2>

                <p className="contact-description">
                  Utilice los canales de contacto disponibles para solicitar
                  información sobre los servicios.
                </p>

                <div className="contact-item">
                  <i className="bi bi-envelope"></i>

                  <div>
                    <h3>Correo</h3>
                    <p>VivianaRemolina@Quimprev.com</p>
                  </div>
                </div>

                <div className="contact-item">
                  <i className="bi bi-whatsapp"></i>

                  <div>
                    <h3>WhatsApp</h3>
                    <p>3125225027</p>
                  </div>
                </div>

                <div className="contact-item">
                  <i className="bi bi-geo-alt"></i>

                  <div>
                    <h3>Ubicación</h3>
                    <p>Bogota/Colombia</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-7">
                <div className="contact-form-card">

                  <h2>
                    Solicitar información
                  </h2>

                  <form>

                    <div className="mb-3">
                      <label htmlFor="nombre" className="form-label">
                        Nombre
                      </label>

                      <input
                        type="text"
                        id="nombre"
                        className="form-control"
                        placeholder="Nombre completo"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="empresa" className="form-label">
                        Empresa
                      </label>

                      <input
                        type="text"
                        id="empresa"
                        className="form-control"
                        placeholder="Nombre de la empresa"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="correo" className="form-label">
                        Correo electrónico
                      </label>

                      <input
                        type="email"
                        id="correo"
                        className="form-control"
                        placeholder="correo@empresa.com"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="mensaje" className="form-label">
                        Mensaje
                      </label>

                      <textarea
                        id="mensaje"
                        className="form-control"
                        rows={5}
                        placeholder="Cuéntenos brevemente qué servicio necesita"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="btn contact-button"
                    >
                      Enviar solicitud
                    </button>

                  </form>

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