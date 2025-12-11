import { NextResponse } from "next/server"
import { getAllProducts } from "@/lib/products-store"
import type { Product } from "@/lib/data"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get("category")
  const search = searchParams.get("search")
  const sortBy = searchParams.get("sortBy")

  let filteredProducts: Product[] = getAllProducts()

  // Filter by category
  if (category) {
    filteredProducts = filteredProducts.filter((p) => p.category === category)
  }

  // Filter by search term
  if (search) {
    const searchLower = search.toLowerCase()
    filteredProducts = filteredProducts.filter(
      (p) => p.name.toLowerCase().includes(searchLower) || p.color.toLowerCase().includes(searchLower),
    )
  }

  // Sort
  if (sortBy === "menor-preco") {
    filteredProducts.sort((a, b) => a.price - b.price)
  } else if (sortBy === "maior-preco") {
    filteredProducts.sort((a, b) => b.price - a.price)
  } else if (sortBy === "novidades") {
    filteredProducts.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
  }

  return NextResponse.json({
    products: filteredProducts,
    total: filteredProducts.length,
  })
}
