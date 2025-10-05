"use client"

import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"

export function ProductFilters() {
  const [priceRange, setPriceRange] = useState([0, 1000])

  const categories = [
    { id: "cuadernos", label: "Cuadernos" },
    { id: "papel-envoltura", label: "Papel de envoltura" },
    { id: "tarjetas", label: "Tarjetas de notas" },
    { id: "impresiones", label: "Impresiones" },
  ]

  const colors = [
    { id: "beige", label: "Beige", color: "#B2A186" },
    { id: "gris", label: "Gris", color: "#E6E4E1" },
    { id: "blanco", label: "Blanco", color: "#FFFFFF" },
    { id: "negro", label: "Negro", color: "#1E1E1E" },
    { id: "azul", label: "Azul", color: "#4A90E2" },
    { id: "verde", label: "Verde", color: "#7CB342" },
  ]

  return (
    <div className="space-y-8">
      {/* Categories */}
      <div>
        <h3 className="font-semibold text-lg mb-4 text-foreground">Categorías</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox id={category.id} />
              <Label htmlFor={category.id} className="text-sm cursor-pointer text-foreground">
                {category.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-semibold text-lg mb-4 text-foreground">Precio</h3>
        <div className="space-y-4">
          <Slider value={priceRange} onValueChange={setPriceRange} max={1000} step={10} className="w-full" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>

      {/* Colors */}
      <div>
        <h3 className="font-semibold text-lg mb-4 text-foreground">Colores</h3>
        <div className="space-y-3">
          {colors.map((color) => (
            <div key={color.id} className="flex items-center space-x-2">
              <Checkbox id={color.id} />
              <div className="w-5 h-5 rounded-full border border-border" style={{ backgroundColor: color.color }} />
              <Label htmlFor={color.id} className="text-sm cursor-pointer text-foreground">
                {color.label}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
