# Ecommerce med Next.js och Storyblok

Webbplatsen är uppbyggd med:
- **Next.js (App Router)**
- **React 19**
- **Tailwind CSS 4**
- **Storyblok CMS** (Headless)
- **Vercel** (Deployment)

---

## Storyblok-struktur 

**Content Types:**
- `Page`
- `ProductPage`
- `Config`

**Layout Components:**
- `Header`
- `Footer`
- `TopStrip`

**Nestade komponenter:**
- `ProductList`
- `LatestProductsList`
- `SearchBar`
- `ImageBanner`
- `Hero`
- `ImageWithText`
- `ShopMenu`

Alla komponenter mappas i `lib/storyblok.js`:
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


## Tekniker

| Ramverk / Tjänst | Användning |
|------------------|-------------|
| **Next.js 15** | Frontend & routing (App Router) |
| **React 19** | Komponentbaserad logik |
| **Tailwind CSS 4** | CSS utilities |
| **Storyblok** | CMS för innehåll & komponenter |
| **Vercel** | Hosting & CI/CD |
| **Boilerplate v25** | Startmall |

---

## Filstruktur

Här är hela projektets struktur, baserat på den färdiga implementationen:

```text
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

