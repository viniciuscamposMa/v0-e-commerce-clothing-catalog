export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  category: "camisas" | "shorts" | "chinelos" | "tenis"
  color: string
  sizes: string[]
  isNew?: boolean
  isFavorite?: boolean
}

export const products: Product[] = [
  // Camisas
  {
    id: "1",
    name: "Camiseta Essential",
    price: 89.0,
    image: "/white-basic-t-shirt-minimal.jpg",
    category: "camisas",
    color: "Branco",
    sizes: ["P", "M", "G", "GG"],
    isNew: true,
  },
  {
    id: "2",
    name: "Camiseta Contrast",
    price: 99.0,
    originalPrice: 129.0,
    image: "/black-white-contrast-t-shirt.jpg",
    category: "camisas",
    color: "Preto/Branco",
    sizes: ["P", "M", "G"],
  },
  {
    id: "3",
    name: "Polo Premium",
    price: 149.0,
    image: "/navy-blue-polo-shirt-minimal.jpg",
    category: "camisas",
    color: "Azul Marinho",
    sizes: ["M", "G", "GG"],
    isNew: true,
  },
  {
    id: "4",
    name: "Camiseta Oversized",
    price: 119.0,
    image: "/beige-oversized-t-shirt.jpg",
    category: "camisas",
    color: "Bege",
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: "5",
    name: "Regata Core",
    price: 69.0,
    image: "/white-tank-top-minimal.jpg",
    category: "camisas",
    color: "Branco",
    sizes: ["P", "M", "G"],
  },
  {
    id: "6",
    name: "Camiseta Graphic",
    price: 109.0,
    image: "/black-graphic-t-shirt-minimal.jpg",
    category: "camisas",
    color: "Preto",
    sizes: ["P", "M", "G", "GG"],
  },
  // Shorts
  {
    id: "7",
    name: "Short Cargo",
    price: 159.0,
    image: "/khaki-cargo-shorts-minimal.jpg",
    category: "shorts",
    color: "Cáqui",
    sizes: ["38", "40", "42", "44"],
    isNew: true,
  },
  {
    id: "8",
    name: "Short Jeans",
    price: 139.0,
    image: "/blue-denim-shorts-minimal.jpg",
    category: "shorts",
    color: "Azul Jeans",
    sizes: ["38", "40", "42"],
  },
  {
    id: "9",
    name: "Short Sport",
    price: 99.0,
    originalPrice: 129.0,
    image: "/black-sport-shorts-minimal.jpg",
    category: "shorts",
    color: "Preto",
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: "10",
    name: "Short Linho",
    price: 179.0,
    image: "/white-linen-shorts-minimal.jpg",
    category: "shorts",
    color: "Branco",
    sizes: ["38", "40", "42", "44"],
  },
  // Chinelos
  {
    id: "11",
    name: "Chinelo Slide",
    price: 89.0,
    image: "/black-slide-sandal-minimal.jpg",
    category: "chinelos",
    color: "Preto",
    sizes: ["39", "40", "41", "42", "43"],
    isNew: true,
  },
  {
    id: "12",
    name: "Chinelo Classic",
    price: 59.0,
    image: "/navy-flip-flop-sandal-minimal.jpg",
    category: "chinelos",
    color: "Azul Marinho",
    sizes: ["39", "40", "41", "42", "43", "44"],
  },
  {
    id: "13",
    name: "Chinelo Comfort",
    price: 109.0,
    originalPrice: 139.0,
    image: "/white-comfort-slide-sandal.jpg",
    category: "chinelos",
    color: "Branco",
    sizes: ["40", "41", "42", "43"],
  },
  {
    id: "14",
    name: "Chinelo Pool",
    price: 79.0,
    image: "/gray-pool-slide-sandal-minimal.jpg",
    category: "chinelos",
    color: "Cinza",
    sizes: ["39", "40", "41", "42", "43"],
  },
  // Tênis
  {
    id: "15",
    name: "Tênis Runner",
    price: 299.0,
    image: "/white-running-sneaker-minimal.jpg",
    category: "tenis",
    color: "Branco",
    sizes: ["39", "40", "41", "42", "43", "44"],
    isNew: true,
  },
  {
    id: "16",
    name: "Tênis Street",
    price: 349.0,
    originalPrice: 399.0,
    image: "/placeholder.svg?height=400&width=300",
    category: "tenis",
    color: "Preto",
    sizes: ["39", "40", "41", "42", "43"],
  },
  {
    id: "17",
    name: "Tênis Casual",
    price: 249.0,
    image: "/placeholder.svg?height=400&width=300",
    category: "tenis",
    color: "Bege",
    sizes: ["40", "41", "42", "43", "44"],
  },
  {
    id: "18",
    name: "Tênis Retro",
    price: 279.0,
    image: "/placeholder.svg?height=400&width=300",
    category: "tenis",
    color: "Branco/Cinza",
    sizes: ["39", "40", "41", "42", "43"],
    isNew: true,
  },
  {
    id: "19",
    name: "Tênis Leather",
    price: 399.0,
    image: "/placeholder.svg?height=400&width=300",
    category: "tenis",
    color: "Marrom",
    sizes: ["40", "41", "42", "43", "44"],
  },
  {
    id: "20",
    name: "Tênis Sport Pro",
    price: 449.0,
    image: "/placeholder.svg?height=400&width=300",
    category: "tenis",
    color: "Branco/Cinza",
    sizes: ["39", "40", "41", "42", "43", "44"],
  },
]

export const categories = [
  { id: "camisas", name: "Camisas", icon: "shirt" },
  { id: "shorts", name: "Shorts", icon: "shorts" },
  { id: "chinelos", name: "Chinelos", icon: "sandal" },
  { id: "tenis", name: "Tênis", icon: "sneaker" },
] as const

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category)
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price)
}
