import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const categoryImages = [
  {
    id: "camisas",
    name: "Camisas",
    image: "/placeholder.svg?height=600&width=500",
    description: "Essenciais do dia a dia",
  },
  {
    id: "shorts",
    name: "Shorts",
    image: "/placeholder.svg?height=600&width=500",
    description: "Conforto e estilo",
  },
  {
    id: "chinelos",
    name: "Chinelos",
    image: "/placeholder.svg?height=600&width=500",
    description: "Relaxe com elegância",
  },
  {
    id: "tenis",
    name: "Tênis",
    image: "/placeholder.svg?height=600&width=500",
    description: "Passos que marcam",
  },
]

export function CategoriesGrid() {
  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore por Categoria</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Encontre as peças perfeitas para cada ocasião e estilo.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categoryImages.map((category) => (
            <Link
              key={category.id}
              href={`/categoria/${category.id}`}
              className="group relative aspect-[4/5] rounded-xl overflow-hidden"
            >
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <h3 className="text-white font-bold text-lg md:text-xl mb-1">{category.name}</h3>
                <p className="text-white/70 text-sm hidden md:block">{category.description}</p>
                <div className="flex items-center gap-1 text-white text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Ver coleção</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
