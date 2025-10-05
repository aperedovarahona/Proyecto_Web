import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductDetail } from "@/components/product-detail"
import { RelatedProducts } from "@/components/related-products"

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <ProductDetail productId={params.id} />
        </div>

        <div className="container mx-auto px-4 py-12 border-t border-border">
          <RelatedProducts />
        </div>
      </main>

      <Footer />
    </div>
  )
}
