# 🛍️ CMS Grupparbete – E-commerce med Next.js & Storyblok

Detta repo innehåller en **e-commerce-webbplats** som byggts som en del av kursen  
**Webb24 CMS (Nackademin)** med handledare **David Slivo**.  

Webbplatsen är uppbyggd med:
- **Next.js (App Router)**
- **React 19**
- **Tailwind CSS 4**
- **Storyblok CMS** (Headless)
- **Vercel** (Deployment)

🌍 **Live:** https://cms-grupparbete.vercel.app  
📄 **Kursmaterial:** *Gruppuppgift och Individuelluppgift.pdf*  
🖼️ Bilder från PDF:n finns under `public/images/pdf/`

---

## 🧩 Kursöversikt

### Komponentstruktur (ur PDF)
![Komponentstruktur](public/images/pdf/komponentstruktur.png)

### Krav för G (Godkänt)
![Krav G](public/images/pdf/krav-g.png)

### Krav för VG (Väl Godkänt)
![Krav VG](public/images/pdf/krav-vg.png)

### Storyblok-struktur
![Storyblok Content](public/images/pdf/storyblok-content.png)
![Blocks](public/images/pdf/blocks.png)

---

## 🚀 Teknikstack

| Ramverk / Tjänst | Användning |
|------------------|-------------|
| **Next.js 15** | Frontend & routing (App Router) |
| **React 19** | Komponentbaserad logik |
| **Tailwind CSS 4** | CSS utilities |
| **Storyblok** | CMS för innehåll & komponenter |
| **Vercel** | Hosting & CI/CD |
| **Boilerplate v25** | Startmall |

---

## ⚙️ Krav från kursen

### Godkänt (G)
- Allt innehåll styrs via **Storyblok**.
- **Header** & **Footer** hämtas från `Config`-story.
- **robots.txt** (`app/robots.js`).
- **Sitemap** (`app/sitemap.js`) genereras via Storyblok Links API.
- **Deploy på Vercel**.
- **Webhook** från Storyblok → Vercel.

### Väl godkänt (VG)
- **Meny med flera nivåer**.
- **Sökfunktion** (client calls till Storyblok API).
- **Dynamisk bakgrundsfärg i Hero-komponent** (redigerbar i Storyblok).

---

## 📂 Filstruktur

Här är hela projektets struktur, baserat på den färdiga implementationen:

cms-grupparbete/
├─ app/
│ ├─ about/
│ │ └─ page.js # About-sida
│ ├─ api/
│ │ └─ search/
│ │ └─ route.js # API för produktsök (VG)
│ ├─ home/
│ │ └─ page.js # Startsida
│ ├─ products/
│ │ ├─ [...slug]/page.js # Produktdetaljer
│ │ └─ page.js # Produktlista
│ ├─ layout.js # Global layout (hämtar Config-story)
│ ├─ sitemap.js # Sitemap genererad från Storyblok Links API
│ └─ robots.js # Robots.txt
│
├─ components/
│ └─ sb/ # Storyblok-komponenter (alla React-komponenter)
│ ├─ AddToCartButton.js
│ ├─ DoesNotExist.js
│ ├─ Feature.js
│ ├─ Footer.js
│ ├─ Grid.js
│ ├─ Header.js
│ ├─ Hero.js
│ ├─ ImageBanner.js
│ ├─ ImageWithText.js
│ ├─ LatestProductsList.js
│ ├─ Page.js
│ ├─ ProductCard.js
│ ├─ ProductGrid.js
│ ├─ ProductList.js
│ ├─ ProductMenu.js
│ ├─ ProductsGrid.js
│ ├─ SearchBar.js
│ ├─ ServerComponent.js
│ ├─ ShopMenu.js
│ ├─ StoryBlokProvider.js
│ ├─ Teaser.js
│ ├─ TopStrip.js
│ └─ index.js (om det finns)
│
├─ lib/
│ ├─ fetchers.js # Hämtar stories & produkter från Storyblok
│ ├─ richtextToPlain.js # Konverterar richtext till plain text
│ └─ storyblok.js # Storyblok-init & komponentmappning
│
├─ utils/
│ └─ safeRichText.js # Säker render av richtext
│
├─ public/
│ ├─ docs/
│ │ └─ Gruppuppgift och Individuelluppgift.pdf
│ └─ images/
│ └─ pdf/
│ ├─ komponentstruktur.png
│ ├─ krav-g.png
│ ├─ krav-vg.png
│ ├─ storyblok-content.png
│ └─ blocks.png
│
├─ .env.local.example
├─ .gitignore
├─ package.json
├─ README.md
└─ tailwind.config.js

markdown
Kopiera kod

---

## 🧠 Storyblok-struktur

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
