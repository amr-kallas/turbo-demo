import { cn } from "cn"

function ProductCard({
  name,
  description,
  price,
  inStock,
  className,
  ...props
}: React.ComponentProps<"article"> & {
  name: string
  description: string
  price: string
  inStock: boolean
}) {
  return (
    <article
      className={cn(
        "flex flex-col gap-3 rounded-xl border border-border bg-card p-5 text-card-foreground",
        className
      )}
      {...props}
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-medium">{name}</h3>
        <span className="font-semibold">{price}</span>
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
      <span
        className={cn(
          "mt-auto w-fit rounded-full px-2.5 py-0.5 text-xs font-medium",
          inStock
            ? "bg-primary text-primary-foreground"
            : "bg-muted text-muted-foreground"
        )}
      >
        {inStock ? "In stock" : "Sold out"}
      </span>
    </article>
  )
}

export { ProductCard }
