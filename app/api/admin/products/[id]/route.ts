import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { getProductById, updateProduct, deleteProduct } from "@/lib/products-store"

async function isAuthenticated() {
  const cookieStore = await cookies()
  const token = cookieStore.get("admin_token")
  return !!token?.value
}

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 })
  }

  const { id } = await params
  const product = getProductById(id)

  if (!product) {
    return NextResponse.json({ error: "Produto não encontrado" }, { status: 404 })
  }

  return NextResponse.json({ product })
}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 })
  }

  try {
    const { id } = await params
    const body = await request.json()

    const updatedProduct = updateProduct(id, {
      name: body.name,
      price: Number.parseFloat(body.price),
      originalPrice: body.originalPrice ? Number.parseFloat(body.originalPrice) : undefined,
      image: body.image,
      category: body.category,
      color: body.color,
      sizes: body.sizes,
      isNew: body.isNew,
      isFavorite: body.isFavorite,
    })

    if (!updatedProduct) {
      return NextResponse.json({ error: "Produto não encontrado" }, { status: 404 })
    }

    return NextResponse.json({ product: updatedProduct })
  } catch (error) {
    return NextResponse.json({ error: "Erro ao atualizar produto" }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 })
  }

  const { id } = await params
  const deleted = deleteProduct(id)

  if (!deleted) {
    return NextResponse.json({ error: "Produto não encontrado" }, { status: 404 })
  }

  return NextResponse.json({ success: true })
}
