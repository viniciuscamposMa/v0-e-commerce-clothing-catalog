import { Truck, RefreshCw, Shield, Headphones } from "lucide-react"

const features = [
  {
    icon: Truck,
    title: "Frete Grátis",
    description: "Em compras acima de R$ 299",
  },
  {
    icon: RefreshCw,
    title: "Troca Fácil",
    description: "30 dias para trocar ou devolver",
  },
  {
    icon: Shield,
    title: "Pagamento Seguro",
    description: "Seus dados protegidos",
  },
  {
    icon: Headphones,
    title: "Suporte 24/7",
    description: "Estamos aqui para ajudar",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-12 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                <feature.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">{feature.title}</h3>
                <p className="text-xs text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
