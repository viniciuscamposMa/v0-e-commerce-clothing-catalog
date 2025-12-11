"use client"

import Image from "next/image"
import { useState } from "react"
import { Heart, Minus, Plus, ShoppingBag, Truck, RefreshCw, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { type Product, formatPrice, categories } from "@/lib/data"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useCart } from "@/lib/cart-context"

interface ProductDetailProps {
  product: Product
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [quantity, setQuantity] = useState(1)
  const [isFavorite, setIsFavorite] = useState(false)
  const [isAdded, setIsAdded] = useState(false)
  const { addItem } = useCart()

  const categoryName = categories.find((c) => c.id === product.category)?.name || product.category

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  const handleAddToCart = () => {
    addItem(product, quantity, selectedSize || undefined)
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-6">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href={`/categoria/${product.category}`} className="hover:text-foreground">
            {categoryName}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-secondary">
              <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              {product.isNew && <Badge className="absolute top-4 left-4 bg-foreground text-background">Novo</Badge>}
              {discount > 0 && <Badge className="absolute top-4 right-4 bg-red-500 text-white">-{discount}%</Badge>}
            </div>
            {/* Thumbnail Gallery Placeholder */}
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="relative aspect-square rounded-lg overflow-hidden bg-secondary cursor-pointer">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={`${product.name} ${i}`}
                    fill
                    className="object-cover opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{product.name}</h1>
              <p className="text-muted-foreground mb-4">{product.color}</p>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-3xl font-bold">{formatPrice(product.price)}</span>
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>

              {/* Size Selector */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-semibold">Tamanho</span>
                  <button className="text-sm text-muted-foreground underline">Guia de tamanhos</button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={cn(
                        "min-w-[48px] h-12 px-4 rounded-lg border font-medium transition-colors",
                        selectedSize === size
                          ? "bg-foreground text-background border-foreground"
                          : "bg-background border-border hover:border-foreground",
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <span className="font-semibold block mb-3">Quantidade</span>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-border rounded-lg">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="rounded-r-none"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-12 text-center font-medium">{quantity}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setQuantity(quantity + 1)}
                      className="rounded-l-none"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Actions - Added cart functionality */}
              <div className="flex gap-3 mb-8">
                <Button
                  size="lg"
                  className={cn("flex-1 gap-2 transition-all", isAdded && "bg-green-600 hover:bg-green-600")}
                  onClick={handleAddToCart}
                >
                  {isAdded ? (
                    <>
                      <Check className="h-5 w-5" />
                      Adicionado!
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="h-5 w-5" />
                      Adicionar ao carrinho
                    </>
                  )}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-4 bg-transparent"
                  onClick={() => setIsFavorite(!isFavorite)}
                >
                  <Heart className={cn("h-5 w-5", isFavorite && "fill-current text-red-500")} />
                </Button>
              </div>

              {/* Features */}
              <div className="space-y-3 pt-6 border-t border-border">
                <div className="flex items-center gap-3 text-sm">
                  <Truck className="h-5 w-5 text-muted-foreground" />
                  <span>Frete grátis em compras acima de R$ 299</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <RefreshCw className="h-5 w-5 text-muted-foreground" />
                  <span>30 dias para troca ou devolução</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="font-semibold mb-3">Descrição</h3>
              <p className="text-muted-foreground leading-relaxed">
                Peça essencial para o seu guarda-roupa. Confeccionada com materiais de alta qualidade, oferece conforto
                e durabilidade. Design versátil que combina com diversos looks do dia a dia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
