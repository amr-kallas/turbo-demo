import { Button } from "@workspace/ui/components/button"
import { products } from "@workspace/shared/data/products"
import { formatPrice } from "@workspace/shared/lib/format"

export default function Page() {
  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <h1 className="font-medium">Web</h1>
        <ul>
          {products
            .filter((product) => product.inStock)
            .map((product) => (
              <li key={product.id}>
                {product.name} — {formatPrice(product.price)}
              </li>
            ))}
        </ul>
        <Button className="mt-2">Shop now</Button>
        <div className="text-muted-foreground font-mono text-xs">
          (Press <kbd>d</kbd> to toggle dark mode)
        </div>
      </div>
    </div>
  )
}
