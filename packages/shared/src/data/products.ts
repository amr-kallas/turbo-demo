import type { Product } from "@workspace/shared/types/product"

export const products: Product[] = [
  { id: "1", name: "Keyboard", price: 49.99, inStock: true },
  { id: "2", name: "Mouse", price: 19.99, inStock: true },
  { id: "3", name: "Monitor", price: 199.99, inStock: false },
]
