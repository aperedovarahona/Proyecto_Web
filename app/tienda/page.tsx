import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductGrid } from "@/components/product-grid"
import { ProductFilters } from "@/components/product-filters"

export default function TiendaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="bg-secondary py-12">
          <div className="container mx-auto px-4">
            <h1 className="font-serif text-4xl md:text-5xl text-foreground text-center">Nuestra Tienda</h1>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <aside className="lg:col-span-1">
              <ProductFilters />
            </aside>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              <ProductGrid />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
