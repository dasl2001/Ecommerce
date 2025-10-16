# Ecommerce med Next.js och Storyblok

## Tekniker

- **Next.js (App Router)**
- **React 19**
- **Tailwind CSS 4**
- **Storyblok CMS** (headless)
- **Vercel** (deployment)

---

## Storyblok-struktur

### Content Types
- `Page`
- `ProductPage`
- `Config`

### Layout Components
- `Header`
- `Footer`
- `TopStrip`

### Nestade komponenter (Blocks)
- `ProductList`
- `LatestProductsList`
- `SearchBar`
- `ImageBanner`
- `Hero`
- `ImageWithText`
- `ShopMenu`

### Komponentmappning (`lib/storyblok.js`)
```js
export const components = {
  page: Page,
  header: Header,
  footer: Footer,
  hero: Hero,
  productList: ProductList,
  latestProductsList: LatestProductsList,
  imageBanner: ImageBanner,
  imageWithText: ImageWithText,
  topStrip: TopStrip,
  searchBar: SearchBar,
  productGrid: ProductGrid,
  productsGrid: ProductsGrid,
};






