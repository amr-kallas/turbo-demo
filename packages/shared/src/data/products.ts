import type { Product } from "@workspace/shared/types/product"

export const products: Product[] = [
  {
    id: "1",
    name: "Keyboard",
    description: "Compact mechanical keyboard with quiet switches.",
    price: 49.99,
    inStock: true,
  },
  {
    id: "2",
    name: "Mouse",
    description: "Lightweight wireless mouse with long battery life.",
    price: 19.99,
    inStock: true,
  },
  {
    id: "3",
    name: "Monitor",
    description: "27-inch display with sharp colors and a slim stand.",
    price: 199.99,
    inStock: false,
  },
  {
    id: "4",
    name: "Headphones",
    description: "Over-ear headphones with clear, balanced sound.",
    price: 79.99,
    inStock: true,
  },
  {
    id: "5",
    name: "Webcam",
    description: "Full HD camera with a built-in microphone.",
    price: 39.99,
    inStock: true,
  },
  {
    id: "6",
    name: "Desk Lamp",
    description: "Adjustable LED lamp with warm and cool light.",
    price: 29.99,
    inStock: false,
  },
]
