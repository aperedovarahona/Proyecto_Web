import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  const categories = [
    {
      title: "Camillas de 3 Cuerpos",
      image: "/camilla-3-cuerpos.jpg",
      href: "/tienda?categoria=camillas-3-cuerpos",
    },
    {
      title: "Camillas de Examen",
      image: "/camilla-examen.jpg",
      href: "/tienda?categoria=camillas-examen",
    },
    {
      title: "Camillas Pediátricas",
      image: "/camilla-pediatrica.jpg",
      href: "/tienda?categoria=camillas-pediatricas",
    },
    {
      title: "Accesorios",
      image: "/accesorios-camillas.jpg",
      href: "/tienda?categoria=accesorios",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-secondary py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 text-balance">
              Lujo y Confort en Equipamiento Médico
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Fabricantes comprometidos con nuestro trabajo, buscando siempre la excelencia en cada camilla
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/tienda">Ver Catálogo</Link>
            </Button>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category.title}
                href={category.href}
                className="group relative overflow-hidden bg-card border border-border"
              >
                <div className="aspect-square relative overflow-hidden bg-secondary">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="bg-[#1E1E1E] text-white p-6 text-center">
                  <h3 className="font-serif text-xl mb-2">{category.title}</h3>
                  <span className="text-sm underline">Ver todo</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-secondary py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="font-serif text-xl mb-3 text-foreground">Envío Gratis</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">En compras mayores a $10,000</p>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-3 text-foreground">Garantía de Calidad</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Materiales de primera calidad certificados
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-3 text-foreground">Fabricación Nacional</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">Diseño y manufactura 100% mexicana</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
