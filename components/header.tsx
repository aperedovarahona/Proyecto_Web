"use client"

import Link from "next/link"
import { Search, ShoppingCart, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"

export function Header() {
  const { totalItems } = useCart()

  return (
    <header className="w-full">
      {/* Top Banner */}
      <div className="bg-[#1E1E1E] text-white py-3 text-center text-sm">
        <p>Envío gratis a todo el país en compras de más de $10,000</p>
      </div>

      {/* Main Header */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-6">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Link href="/" className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 relative">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <rect x="35" y="10" width="30" height="80" fill="currentColor" />
                  <rect x="10" y="35" width="80" height="30" fill="currentColor" />
                </svg>
              </div>
              <span className="font-serif text-2xl text-foreground">Innova Camillas</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex items-center justify-center gap-8 mb-6">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Inicio
            </Link>
            <Link href="/tienda" className="text-foreground hover:text-primary transition-colors">
              Tienda
            </Link>
            <Link href="/acerca-de" className="text-foreground hover:text-primary transition-colors">
              Acerca de
            </Link>
            <Link href="/blog" className="text-foreground hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href="/contacto" className="text-foreground hover:text-primary transition-colors">
              Contacto
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center justify-center gap-4">
            <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
              <User className="h-5 w-5" />
            </Button>
            <Link href="/carrito">
              <Button variant="ghost" size="icon" className="text-foreground hover:text-primary relative">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
