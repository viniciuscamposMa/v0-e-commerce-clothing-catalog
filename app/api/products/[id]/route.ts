import { NextResponse } from "next/server"
import { getProductById, getProductsByCategory } from "@/lib/products-store"

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = getProductById(id)

  if (!product) {
    return NextResponse.json({ error: "Produto não encontrado" }, { status: 404 })
  }

  // Get related products from same category
  const relatedProducts = getProductsByCategory(product.category)
    .filter((p) => p.id !== id)
    .slice(0, 4)

  return NextResponse.json({
    product,
    relatedProducts,
  })
}
