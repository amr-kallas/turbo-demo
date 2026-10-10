import { cn } from "cn"

function SiteFooter({
  title,
  className,
  ...props
}: React.ComponentProps<"footer"> & { title: string }) {
  return (
    <footer
      id="contact"
      className={cn("border-t border-border", className)}
      {...props}
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-1 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:justify-between">
        <span>
          © {new Date().getFullYear()} {title}
        </span>
        <a href="#" className="hover:text-foreground">
          info@example.com
        </a>
      </div>
    </footer>
  )
}

export { SiteFooter }
