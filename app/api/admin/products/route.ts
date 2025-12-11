import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { getAllProducts, addProduct } from "@/lib/products-store"

async function isAuthenticated() {
  const cookieStore = await cookies()
  const token = cookieStore.get("admin_token")
  return !!token?.value
}

export async function GET() {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 })
  }

  const products = getAllProducts()
  return NextResponse.json({ products })
}

export async function POST(request: Request) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 })
  }

  try {
    const body = await request.json()

    const newProduct = addProduct({
      name: body.name,
      price: Number.parseFloat(body.price),
      originalPrice: body.originalPrice ? Number.parseFloat(body.originalPrice) : undefined,
      image: body.image || "/placeholder.svg?height=400&width=300",
      category: body.category,
      color: body.color,
      sizes: body.sizes || [],
      isNew: body.isNew || false,
      isFavorite: body.isFavorite || false,
    })

    return NextResponse.json({ product: newProduct }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Erro ao criar produto" }, { status: 500 })
  }
}
