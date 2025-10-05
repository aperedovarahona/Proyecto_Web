"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"
import { Minus, Plus, ShoppingCart } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useCart } from "@/lib/cart-context"

interface ProductDetailProps {
  productId: string
}

export function ProductDetail({ productId }: ProductDetailProps) {
  const { toast } = useToast()
  const { addItem } = useCart()
  const [selectedColor, setSelectedColor] = useState("")
  const [selectedSize, setSelectedSize] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [customWidth, setCustomWidth] = useState("")
  const [customHeight, setCustomHeight] = useState("")

  // Mock product data - in a real app, this would come from an API
  const product = {
    id: productId,
    name: "Cuaderno Minimalista",
    category: "Cuadernos",
    price: 299,
    description:
      "Cuaderno de alta calidad con diseño minimalista. Perfecto para tus notas diarias, sketches o journaling. Fabricado con papel premium de 120gsm y cubierta de lino natural.",
    images: [
      "/cuaderno-minimalista-beige.jpg",
      "/cuaderno-detalle-1.jpg",
      "/cuaderno-detalle-2.jpg",
      "/cuaderno-detalle-3.jpg",
    ],
    colors: [
      { id: "beige", name: "Beige", hex: "#B2A186" },
      { id: "gris", name: "Gris Claro", hex: "#E6E4E1" },
      { id: "negro", name: "Negro", hex: "#1E1E1E" },
    ],
    sizes: [
      { id: "a5", name: "A5 (14.8 x 21 cm)" },
      { id: "a4", name: "A4 (21 x 29.7 cm)" },
      { id: "custom", name: "Personalizado" },
    ],
    features: [
      "Papel premium 120gsm",
      "Cubierta de lino natural",
      "160 páginas",
      "Encuadernación cosida",
      "Marcador de cinta incluido",
    ],
  }

  const [selectedImage, setSelectedImage] = useState(product.images[0])

  const handleAddToCart = () => {
    if (!selectedColor) {
      toast({
        title: "Selecciona un color",
        description: "Por favor selecciona un color antes de agregar al carrito",
        variant: "destructive",
      })
      return
    }

    if (!selectedSize) {
      toast({
        title: "Selecciona un tamaño",
        description: "Por favor selecciona un tamaño antes de agregar al carrito",
        variant: "destructive",
      })
      return
    }

    if (selectedSize === "custom" && (!customWidth || !customHeight)) {
      toast({
        title: "Especifica las dimensiones",
        description: "Por favor ingresa el ancho y alto personalizados",
        variant: "destructive",
      })
      return
    }

    const selectedColorData = product.colors.find((c) => c.id === selectedColor)
    const selectedSizeData = product.sizes.find((s) => s.id === selectedSize)

    addItem({
      id: `${product.id}-${selectedColor}-${selectedSize}`,
      name: product.name,
      price: product.price,
      image: product.images[0],
      color: selectedColorData?.name || "",
      size: selectedSizeData?.name || "",
      quantity,
      customDimensions:
        selectedSize === "custom"
          ? {
              width: customWidth,
              height: customHeight,
            }
          : undefined,
    })

    toast({
      title: "Producto agregado al carrito",
      description: `${quantity} x ${product.name} agregado correctamente`,
    })
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Images */}
      <div className="space-y-4">
        <div className="aspect-square relative overflow-hidden bg-secondary border border-border">
          <img src={selectedImage || "/placeholder.svg"} alt={product.name} className="w-full h-full object-cover" />
        </div>
        <div className="grid grid-cols-4 gap-4">
          {product.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image)}
              className={`aspect-square relative overflow-hidden bg-secondary border-2 transition-colors ${
                selectedImage === image ? "border-primary" : "border-border"
              }`}
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`${product.name} ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-6">
        <div>
          <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
          <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-4">{product.name}</h1>
          <p className="text-3xl font-semibold text-foreground">${product.price}</p>
        </div>

        <p className="text-muted-foreground leading-relaxed">{product.description}</p>

        {/* Color Selection */}
        <div className="space-y-3">
          <Label className="text-base font-semibold text-foreground">Color</Label>
          <RadioGroup value={selectedColor} onValueChange={setSelectedColor} className="flex gap-3">
            {product.colors.map((color) => (
              <div key={color.id} className="flex items-center">
                <RadioGroupItem value={color.id} id={color.id} className="sr-only" />
                <Label
                  htmlFor={color.id}
                  className={`flex items-center gap-2 cursor-pointer px-4 py-2 border-2 rounded-md transition-colors ${
                    selectedColor === color.id ? "border-primary bg-secondary" : "border-border"
                  }`}
                >
                  <div className="w-6 h-6 rounded-full border border-border" style={{ backgroundColor: color.hex }} />
                  <span className="text-sm text-foreground">{color.name}</span>
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        {/* Size Selection */}
        <div className="space-y-3">
          <Label className="text-base font-semibold text-foreground">Tamaño</Label>
          <RadioGroup value={selectedSize} onValueChange={setSelectedSize} className="space-y-2">
            {product.sizes.map((size) => (
              <div key={size.id} className="flex items-center">
                <RadioGroupItem value={size.id} id={size.id} />
                <Label htmlFor={size.id} className="ml-2 cursor-pointer text-foreground">
                  {size.name}
                </Label>
              </div>
            ))}
          </RadioGroup>

          {selectedSize === "custom" && (
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <Label htmlFor="width" className="text-sm text-foreground">
                  Ancho (cm)
                </Label>
                <Input
                  id="width"
                  type="number"
                  placeholder="15"
                  value={customWidth}
                  onChange={(e) => setCustomWidth(e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="height" className="text-sm text-foreground">
                  Alto (cm)
                </Label>
                <Input
                  id="height"
                  type="number"
                  placeholder="21"
                  value={customHeight}
                  onChange={(e) => setCustomHeight(e.target.value)}
                  className="mt-1"
                />
              </div>
            </div>
          )}
        </div>

        {/* Quantity */}
        <div className="space-y-3">
          <Label className="text-base font-semibold text-foreground">Cantidad</Label>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="h-10 w-10"
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="text-lg font-semibold w-12 text-center text-foreground">{quantity}</span>
            <Button variant="outline" size="icon" onClick={() => setQuantity(quantity + 1)} className="h-10 w-10">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Add to Cart */}
        <Button
          onClick={handleAddToCart}
          size="lg"
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          <ShoppingCart className="mr-2 h-5 w-5" />
          Agregar al Carrito
        </Button>

        {/* Features */}
        <div className="border-t border-border pt-6">
          <h3 className="font-semibold text-lg mb-3 text-foreground">Características</h3>
          <ul className="space-y-2">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="text-primary mt-1">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
