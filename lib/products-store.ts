import type { Product } from "./data"

// Store em memória para produtos (será substituído pelo banco de dados)
// Inicializa com os produtos do data.ts
import { products as initialProducts } from "./data"

const productsStore: Product[] = [...initialProducts]

export function getAllProducts(): Product[] {
  return productsStore
}

export function getProductById(id: string): Product | undefined {
  return productsStore.find((p) => p.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  return productsStore.filter((p) => p.category === category)
}

export function addProduct(product: Omit<Product, "id">): Product {
  const newId = String(Math.max(...productsStore.map((p) => Number.parseInt(p.id))) + 1)
  const newProduct: Product = { ...product, id: newId }
  productsStore.push(newProduct)
  return newProduct
}

export function updateProduct(id: string, updates: Partial<Omit<Product, "id">>): Product | null {
  const index = productsStore.findIndex((p) => p.id === id)
  if (index === -1) return null

  productsStore[index] = { ...productsStore[index], ...updates }
  return productsStore[index]
}

export function deleteProduct(id: string): boolean {
  const index = productsStore.findIndex((p) => p.id === id)
  if (index === -1) return false

  productsStore.splice(index, 1)
  return true
}
