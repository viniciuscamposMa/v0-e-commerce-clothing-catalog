"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { type Product, formatPrice } from "@/lib/data"
import { useState } from "react"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(product.isFavorite || false)

  return (
    <div className="group relative">
      <Link href={`/produto/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-secondary">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {product.isNew && <Badge className="absolute top-3 left-3 bg-foreground text-background">Novo</Badge>}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-3 right-3 bg-background/80 hover:bg-background opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={(e) => {
              e.preventDefault()
              setIsFavorite(!isFavorite)
            }}
          >
            <Heart className={`h-4 w-4 ${isFavorite ? "fill-current text-red-500" : ""}`} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute bottom-3 right-3 bg-background hover:bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={(e) => {
              e.preventDefault()
              // Add to cart logic
            }}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </Link>
      <div className="mt-3 space-y-1">
        <Link href={`/produto/${product.id}`}>
          <h3 className="font-medium text-sm hover:underline">{product.name}</h3>
        </Link>
        <p className="text-xs text-muted-foreground">{product.color}</p>
        <div className="flex items-center gap-2">
          <span className="font-semibold text-sm">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="text-xs text-muted-foreground line-through">{formatPrice(product.originalPrice)}</span>
          )}
        </div>
      </div>
    </div>
  )
}
