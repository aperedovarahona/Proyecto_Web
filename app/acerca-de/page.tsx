import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function AcercaDePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-secondary py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Acerca de Innova Camillas</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Lujo y confort en equipamiento médico desde 2015
            </p>
          </div>
        </div>

        {/* Our Story */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl text-foreground mb-6">Nuestra Historia</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Innova Camillas nació en 2015 con la visión de revolucionar el equipamiento médico en México.
                  Comenzamos como un pequeño taller especializado en la fabricación de camillas médicas de alta calidad,
                  comprometidos con ofrecer productos que combinan funcionalidad, durabilidad y confort.
                </p>
                <p>
                  Cada camilla es diseñada y fabricada con los más altos estándares de calidad, utilizando materiales
                  certificados y procesos de manufactura que garantizan la seguridad y comodidad tanto para
                  profesionales de la salud como para sus pacientes.
                </p>
                <p>
                  Hoy, Innova Camillas es reconocida como uno de los principales fabricantes nacionales de equipamiento
                  médico, siempre buscando la excelencia en cada producto que sale de nuestras instalaciones.
                </p>
              </div>
            </div>
            <div className="aspect-square relative overflow-hidden bg-secondary">
              <img src="/taller-innova.jpg" alt="Taller de Innova Camillas" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="bg-secondary py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl text-foreground text-center mb-12">Nuestros Valores</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-primary-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl mb-3 text-foreground">Calidad Garantizada</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Innova Camillas garantiza una buena calidad. Materiales certificados y procesos rigurosos de control.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-primary-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-xl mb-3 text-foreground">Compromiso</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Somos fabricantes comprometidos con nuestro trabajo, buscando siempre la excelencia.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-primary-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-xl mb-3 text-foreground">Innovación</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Diseños ergonómicos y funcionales que mejoran la experiencia médica.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Location & Contact Info */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="font-serif text-3xl text-foreground text-center mb-12">Encuéntranos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card border border-border p-6 space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Ubicación</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Av. Insurgentes Sur 1234
                    <br />
                    Col. Del Valle, 03100
                    <br />
                    Ciudad de México, México
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border p-6 space-y-4">
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Teléfono</h3>
                  <p className="text-muted-foreground text-sm">+52 55 1234 5678</p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border p-6 space-y-4">
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Email</h3>
                  <p className="text-muted-foreground text-sm">info@innovacamillas.com</p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border p-6 space-y-4">
              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Horario</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Lunes a Viernes: 9:00 - 18:00
                    <br />
                    Sábados: 10:00 - 14:00
                    <br />
                    Domingos: Cerrado
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
