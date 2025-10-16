# Ecommerce med Next.js och Storyblok

## Tekniker

- **Next.js**
- **React 19**
- **Tailwind CSS 4**
- **Storyblok CMS** 
- **Vercel** 

---

## Filstruktur

```text
Ecommerce/
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
├── .gitignore
├── package.json
├── README.md
└── tailwind.config.js







