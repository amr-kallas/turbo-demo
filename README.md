# Next.js Monorepo

A pnpm + Turborepo monorepo with two Next.js apps that share UI components and data.

## Requirements

- Node.js `>= 20.9.0`
- pnpm `11` (`corepack enable` picks the version from `package.json`)

## Getting started

```bash
pnpm install
pnpm dev
```

| App     | URL                   |
| ------- | --------------------- |
| `web`   | http://localhost:3000 |
| `admin` | http://localhost:3001 |

## Project structure

```
apps/
  web/                  Next.js app (port 3000)
  admin/                Next.js app (port 3001)
packages/
  ui/                   @workspace/ui: shared components, styles, theme
  shared/               @workspace/shared: shared types, data, helpers
  eslint-config/        @workspace/eslint-config: shared ESLint configs
  typescript-config/    @workspace/typescript-config: shared tsconfig bases
turbo.json              Task pipeline (build, dev, lint, typecheck)
pnpm-workspace.yaml     Workspace package locations
```

- **`apps/`** contains the deployable apps. Code used by only one app stays inside that app (`components/`, `hooks/`, `lib/`).
- **`packages/`** contains code shared by more than one app.

## How sharing works

Apps depend on the shared packages through the workspace protocol:

```json
"@workspace/ui": "workspace:*",
"@workspace/shared": "workspace:*"
```

pnpm links these packages locally rather than installing them from npm. They ship raw TypeScript with no build step. Each app compiles them through `transpilePackages` in `next.config.ts`, so a change in `packages/` shows up in both apps right away during `pnpm dev`.

Each package exposes its files through `exports` in its `package.json`:

```ts
// packages/ui
import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"
import "@workspace/ui/globals.css"

// packages/shared
import { products } from "@workspace/shared/data/products"
import { siteConfig } from "@workspace/shared/data/site"
import { formatPrice } from "@workspace/shared/lib/format"
import type { Product } from "@workspace/shared/types/product"
```

A new file under `packages/shared/src/{types,data,lib}` or `packages/ui/src/{components,hooks,lib}` can be imported straight away, with no config changes.

### `@workspace/shared`

| Folder   | Contents                              |
| -------- | ------------------------------------- |
| `types/` | TypeScript types (e.g. `Product`)     |
| `data/`  | Static data and site settings         |
| `lib/`   | Helper functions (e.g. `formatPrice`) |

Site name, taglines and description live in `packages/shared/src/data/site.ts`. Each app has its own tagline (`siteConfig.tagline.web` / `siteConfig.tagline.admin`).

### `@workspace/ui`

Shared components (`site-header`, `site-footer`, `product-card`, `button`, `theme-provider`), Tailwind v4 styles in `src/styles/globals.css`, and the PostCSS config used by both apps.

## Scripts

Run from the repo root. Turborepo runs each one in every package, in dependency order, and caches the results.

| Command          | Description                  |
| ---------------- | ---------------------------- |
| `pnpm dev`       | Start all apps in dev mode   |
| `pnpm build`     | Production build of all apps |
| `pnpm lint`      | ESLint                       |
| `pnpm typecheck` | TypeScript type check        |
| `pnpm format`    | Prettier                     |

Target a single app or package with `--filter`:

```bash
pnpm --filter admin dev
pnpm --filter web add <package>
```

Add `--force` to skip the Turborepo cache (e.g. `pnpm build --force`).

## Checking a build before deploying

```bash
pnpm install --frozen-lockfile
pnpm lint
pnpm typecheck
pnpm build
pnpm --filter web start     # http://localhost:3000
pnpm --filter admin start   # http://localhost:3001
```

`start` serves the production build, the same output a server runs.

## Adding shadcn/ui components

```bash
pnpm dlx shadcn@latest add <component> -c apps/web
```

Components are placed in `packages/ui/src/components` and are available to both apps:

```tsx
import { Card } from "@workspace/ui/components/card"
```
