import Link from "next/link"

const products = [
  {
    id: 1,
    name: "Camilla de 3 Cuerpos Premium",
    category: "Camillas de 3 Cuerpos",
    price: 12999,
    image: "/camilla-3-cuerpos-premium.jpg",
    colors: ["#B2A186", "#E6E4E1", "#1E1E1E"],
    dimensions: "180 x 60 x 75 cm",
  },
  {
    id: 2,
    name: "Camilla de Examen Estándar",
    category: "Camillas de Examen",
    price: 9999,
    image: "/camilla-examen-estandar.jpg",
    colors: ["#FFFFFF", "#E6E4E1"],
    dimensions: "180 x 60 x 80 cm",
  },
  {
    id: 3,
    name: "Camilla de 3 Cuerpos Deluxe",
    category: "Camillas de 3 Cuerpos",
    price: 15999,
    image: "/camilla-3-cuerpos-deluxe.jpg",
    colors: ["#1E1E1E", "#B2A186"],
    dimensions: "180 x 60 x 75 cm",
  },
  {
    id: 4,
    name: "Camilla de Examen con Respaldo",
    category: "Camillas de Examen",
    price: 11499,
    image: "/camilla-examen-respaldo.jpg",
    colors: ["#E6E4E1", "#FFFFFF"],
    dimensions: "180 x 60 x 80 cm",
  },
  {
    id: 5,
    name: "Camilla Pediátrica",
    category: "Camillas Pediátricas",
    price: 8999,
    image: "/camilla-pediatrica.jpg",
    colors: ["#B2A186", "#FFFFFF"],
    dimensions: "140 x 50 x 70 cm",
  },
  {
    id: 6,
    name: "Camilla de 3 Cuerpos Económica",
    category: "Camillas de 3 Cuerpos",
    price: 10499,
    image: "/camilla-3-cuerpos-economica.jpg",
    colors: ["#E6E4E1", "#1E1E1E"],
    dimensions: "180 x 60 x 75 cm",
  },
  {
    id: 7,
    name: "Camilla de Examen Hidráulica",
    category: "Camillas de Examen",
    price: 13999,
    image: "/camilla-examen-hidraulica.jpg",
    colors: ["#FFFFFF", "#B2A186"],
    dimensions: "180 x 60 x 80 cm",
  },
  {
    id: 8,
    name: "Set de Accesorios Premium",
    category: "Accesorios",
    price: 2499,
    image: "/accesorios-premium.jpg",
    colors: ["#B2A186", "#E6E4E1", "#FFFFFF"],
    dimensions: "Varios",
  },
]

export function ProductGrid() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-sm text-muted-foreground">{products.length} productos</p>
        <select className="text-sm border border-border rounded-md px-3 py-2 bg-background text-foreground">
          <option>Ordenar por: Destacados</option>
          <option>Precio: Menor a Mayor</option>
          <option>Precio: Mayor a Menor</option>
          <option>Más Recientes</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/producto/${product.id}`}
            className="group bg-card border border-border overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="aspect-square relative overflow-hidden bg-secondary">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
              <h3 className="font-serif text-lg mb-2 text-foreground">{product.name}</h3>
              <p className="text-xs text-muted-foreground mb-2">Medidas: {product.dimensions}</p>
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold text-foreground">${product.price.toLocaleString()}</p>
                <div className="flex gap-1">
                  {product.colors.map((color, index) => (
                    <div
                      key={index}
                      className="w-4 h-4 rounded-full border border-border"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
