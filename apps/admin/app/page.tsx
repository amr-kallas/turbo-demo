import { Button } from "@workspace/ui/components/button"
import { products } from "@workspace/shared/data/products"
import { formatPrice } from "@workspace/shared/lib/format"

export default function Page() {
  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <h1 className="font-medium">Admin</h1>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} — {formatPrice(product.price)} (
              {product.inStock ? "in stock" : "out of stock"})
            </li>
          ))}
        </ul>
        <Button className="mt-2">Add product</Button>
        <div className="text-muted-foreground font-mono text-xs">
          (Press <kbd>d</kbd> to toggle dark mode)
        </div>
      </div>
    </div>
  )
}
