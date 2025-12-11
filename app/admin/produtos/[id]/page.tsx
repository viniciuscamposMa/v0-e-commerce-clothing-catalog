"use client"

import { useEffect, useState } from "react"
import { useRouter, useParams } from "next/navigation"
import { ProductForm } from "@/components/admin/product-form"
import type { Product } from "@/lib/data"

export default function EditProductPage() {
  const router = useRouter()
  const params = useParams()
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/admin/products/${params.id}`)
        if (res.status === 401) {
          router.push("/admin/login")
          return
        }
        if (res.status === 404) {
          router.push("/admin")
          return
        }
        const data = await res.json()
        setProduct(data.product)
      } catch (error) {
        console.error("Erro ao buscar produto:", error)
        router.push("/admin")
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [params.id, router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!product) {
    return null
  }

  return <ProductForm product={product} isEditing />
}
