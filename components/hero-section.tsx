import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[80vh]">
          {/* Content */}
          <div className="relative z-10 py-16 lg:py-0">
            <span className="inline-block text-sm font-medium text-muted-foreground mb-4">Nova Coleção 2024</span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none mb-6">
              Define
              <br />
              Your Style
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mb-8 leading-relaxed">
              Peças essenciais e atemporais projetadas para adaptar, combinar e durar. Descubra a nova coleção.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2" asChild>
                <Link href="/categoria/camisas">
                  Explorar
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/categoria/tenis">Ver Tênis</Link>
              </Button>
            </div>
          </div>

          {/* Image Grid */}
          <div className="relative grid grid-cols-2 gap-4 py-8">
            <div className="space-y-4">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=400"
                  alt="Modelo com moletom"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=400"
                  alt="Modelo com roupa casual"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
