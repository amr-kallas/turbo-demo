import { Button } from "@workspace/ui/components/button"
import { ProductCard } from "@workspace/ui/components/product-card"
import { SiteFooter } from "@workspace/ui/components/site-footer"
import { SiteHeader } from "@workspace/ui/components/site-header"
import { products } from "@workspace/shared/data/products"
import { formatPrice } from "@workspace/shared/lib/format"
import { siteConfig } from "@workspace/shared/data/site"

export default function Page() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader title={"WEB"}  />

      <main className="flex-1">
        <section className="mx-auto flex max-w-5xl flex-col items-start gap-4 px-4 py-16 sm:py-24">
          <h1 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            {siteConfig.tagline.web}
          </h1>
          <p className="max-w-xl text-muted-foreground">
            {siteConfig.description}
          </p>
          <Button size="lg" nativeButton={false} render={<a href="#products" />}>
            Browse products
          </Button>
        </section>

        <section id="products" className="mx-auto max-w-5xl px-4 pb-24">
          <h2 className="mb-6 text-lg font-semibold">Products</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                description={product.description}
                price={formatPrice(product.price)}
                inStock={product.inStock}
              />
            ))}
          </div>
        </section>
      </main>

      <SiteFooter title={siteConfig.name} />
    </div>
  )
}
