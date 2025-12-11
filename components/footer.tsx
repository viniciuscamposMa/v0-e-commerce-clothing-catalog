import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight">STYLO</h3>
            <p className="text-background/70 text-sm leading-relaxed">
              Moda essencial para o seu dia a dia. Qualidade e estilo que combinam com você.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="hover:bg-background/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-background/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-background/10">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Categorias</h4>
            <nav className="flex flex-col gap-2">
              <Link
                href="/categoria/camisas"
                className="text-sm text-background/70 hover:text-background transition-colors"
              >
                Camisas
              </Link>
              <Link
                href="/categoria/shorts"
                className="text-sm text-background/70 hover:text-background transition-colors"
              >
                Shorts
              </Link>
              <Link
                href="/categoria/chinelos"
                className="text-sm text-background/70 hover:text-background transition-colors"
              >
                Chinelos
              </Link>
              <Link
                href="/categoria/tenis"
                className="text-sm text-background/70 hover:text-background transition-colors"
              >
                Tênis
              </Link>
            </nav>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold">Suporte</h4>
            <nav className="flex flex-col gap-2">
              <Link href="#" className="text-sm text-background/70 hover:text-background transition-colors">
                Central de Ajuda
              </Link>
              <Link href="#" className="text-sm text-background/70 hover:text-background transition-colors">
                Trocas e Devoluções
              </Link>
              <Link href="#" className="text-sm text-background/70 hover:text-background transition-colors">
                Rastrear Pedido
              </Link>
              <Link href="#" className="text-sm text-background/70 hover:text-background transition-colors">
                Contato
              </Link>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold">Newsletter</h4>
            <p className="text-sm text-background/70">Receba novidades e ofertas exclusivas.</p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Seu e-mail"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
              />
              <Button variant="secondary" className="shrink-0">
                Inscrever
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center text-sm text-background/60">
          <p>&copy; 2025 STYLO. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
