"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import { Minus, Plus, Trash2 } from "lucide-react"
import Link from "next/link"

export default function CarritoPage() {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart()

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 flex items-center justify-center">
          <div className="text-center py-16">
            <h1 className="font-serif text-3xl text-foreground mb-4">Tu carrito está vacío</h1>
            <p className="text-muted-foreground mb-8">Agrega algunos productos para comenzar</p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/tienda">Ir a la Tienda</Link>
            </Button>
          </div>
        </main>

        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="bg-secondary py-12">
          <div className="container mx-auto px-4">
            <h1 className="font-serif text-4xl md:text-5xl text-foreground text-center">Carrito de Compras</h1>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="bg-card border border-border p-4 flex gap-4">
                  <div className="w-24 h-24 flex-shrink-0 bg-secondary">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-serif text-lg text-foreground mb-1">{item.name}</h3>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>Color: {item.color}</p>
                      <p>Tamaño: {item.size}</p>
                      {item.customDimensions && (
                        <p>
                          Dimensiones: {item.customDimensions.width} x {item.customDimensions.height} cm
                        </p>
                      )}
                    </div>
                    <p className="text-lg font-semibold text-foreground mt-2">${item.price}</p>
                  </div>

                  <div className="flex flex-col items-end justify-between">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeItem(item.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>

                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="h-8 w-8"
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="text-sm font-semibold w-8 text-center text-foreground">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="h-8 w-8"
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}

              <Button variant="outline" onClick={clearCart} className="w-full bg-transparent">
                Vaciar Carrito
              </Button>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border p-6 sticky top-4">
                <h2 className="font-serif text-2xl text-foreground mb-6">Resumen del Pedido</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span>${totalPrice}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Envío</span>
                    <span>{totalPrice >= 499 ? "Gratis" : "$99"}</span>
                  </div>
                  <div className="border-t border-border pt-4 flex justify-between text-lg font-semibold text-foreground">
                    <span>Total</span>
                    <span>${totalPrice >= 499 ? totalPrice : totalPrice + 99}</span>
                  </div>
                </div>

                {totalPrice < 499 && (
                  <div className="bg-secondary p-3 mb-6 text-sm text-muted-foreground">
                    Agrega ${499 - totalPrice} más para obtener envío gratis
                  </div>
                )}

                <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mb-3">
                  Proceder al Pago
                </Button>

                <Button asChild variant="outline" size="lg" className="w-full bg-transparent">
                  <Link href="/tienda">Continuar Comprando</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
