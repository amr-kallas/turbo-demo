import { cn } from "cn"

function SiteHeader({
  title,
  label,
  className,
  ...props
}: React.ComponentProps<"header"> & { title: string; label?: string }) {
  return (
    <header
      className={cn("border-b border-border bg-background/80", className)}
      {...props}
    >
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <span className="font-heading text-base font-semibold">{title}</span>
          {label && (
            <span className="rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
              {label}
            </span>
          )}
        </div>
        <nav className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#products" className="hover:text-foreground">
            Products
          </a>
          <a href="#contact" className="hover:text-foreground">
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}

export { SiteHeader }
