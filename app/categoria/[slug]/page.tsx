import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { getProductsByCategory, categories } from "@/lib/data"
import { notFound } from "next/navigation"
import { CategoryFilters } from "@/components/category-filters"

interface CategoryPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.id,
  }))
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { slug } = await params
  const category = categories.find((c) => c.id === slug)

  if (!category) {
    return { title: "Categoria não encontrada" }
  }

  return {
    title: `${category.name} | STYLO`,
    description: `Confira nossa coleção de ${category.name.toLowerCase()}. Encontre as melhores peças para o seu estilo.`,
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params
  const category = categories.find((c) => c.id === slug)

  if (!category) {
    notFound()
  }

  const products = getProductsByCategory(slug)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Category Header */}
        <section className="bg-secondary py-12 md:py-16">
          <div className="container mx-auto px-4">
            <nav className="text-sm text-muted-foreground mb-4">
              <span>Home</span>
              <span className="mx-2">/</span>
              <span className="text-foreground">{category.name}</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold">{category.name}</h1>
            <p className="text-muted-foreground mt-2">{products.length} produtos</p>
          </div>
        </section>

        {/* Filters and Products */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <CategoryFilters />

            {/* Products Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {products.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground">Nenhum produto encontrado nesta categoria.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
