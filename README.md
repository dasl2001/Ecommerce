# Ecommerce med Next.js och Storyblok

## Webbplatsens teknik

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

---

##  Filstruktur

```text
cms-grupparbete/
├── app/
│   ├── about/
│   │   └── page.js
│   ├── api/
│   │   └── search/
│   │       └── route.js
│   ├── home/
│   │   └── page.js
│   ├── products/
│   │   ├── [...slug]/page.js
│   │   └── page.js
│   ├── layout.js
│   ├── sitemap.js
│   └── robots.js
│
├── components/
│   └── sb/
│       ├── AddToCartButton.js
│       ├── DoesNotExist.js
│       ├── Feature.js
│       ├── Footer.js
│       ├── Grid.js
│       ├── Header.js
│       ├── Hero.js
│       ├── ImageBanner.js
│       ├── ImageWithText.js
│       ├── LatestProductsList.js
│       ├── Page.js
│       ├── ProductCard.js
│       ├── ProductGrid.js
│       ├── ProductList.js
│       ├── ProductMenu.js
│       ├── ProductsGrid.js
│       ├── SearchBar.js
│       ├── ServerComponent.js
│       ├── ShopMenu.js
│       ├── StoryBlokProvider.js
│       ├── Teaser.js
│       ├── TopStrip.js
│       └── index.js
│
├── lib/
│   ├── fetchers.js
│   ├── richtextToPlain.js
│   └── storyblok.js
│
├── utils/
│   └── safeRichText.js
│
├── public/
│   ├── docs/
│   │   └── Gruppuppgift och Individuelluppgift.pdf
│   └── images/
│       └── pdf/
│           ├── komponentstruktur.png
│           ├── krav-g.png
│           ├── krav-vg.png
│           ├── storyblok-content.png
│           └── blocks.png
│
├── .gitignore
├── package.json
├── README.md
└── tailwind.config.js

