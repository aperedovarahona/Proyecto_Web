import Link from "next/link"

const relatedProducts = [
  {
    id: 2,
    name: "Set Papel de Envoltura Botánico",
    price: 199,
    image: "/papel-envoltura-botanico.jpg",
  },
  {
    id: 3,
    name: "Tarjetas de Felicitación Elegantes",
    price: 149,
    image: "/tarjetas-elegantes.jpg",
  },
  {
    id: 5,
    name: "Cuaderno de Viaje",
    price: 349,
    image: "/cuaderno-viaje.jpg",
  },
  {
    id: 7,
    name: "Set de Tarjetas Florales",
    price: 169,
    image: "/tarjetas-florales.jpg",
  },
]

export function RelatedProducts() {
  return (
    <div>
      <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8">Productos Relacionados</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
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
              <h3 className="font-serif text-base mb-2 text-foreground line-clamp-2">{product.name}</h3>
              <p className="text-lg font-semibold text-foreground">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
