// src/lib/storyblok.js
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

// --- importera dina komponenter ---
import Page from "@/components/sb/Page";
import Teaser from "@/components/sb/Teaser";
import Feature from "@/components/sb/Feature";
import Grid from "@/components/sb/Grid";

// e-commerce-blocken
import Header from "@/components/sb/Header";
import Footer from "@/components/sb/Footer";
import Hero from "@/components/sb/Hero";
import ImageBanner from "@/components/sb/ImageBanner";
import ImageWithText from "@/components/sb/ImageWithText";
import SearchBar from "@/components/sb/SearchBar";
import ProductList from "@/components/sb/ProductList";
import LatestProductsList from "@/components/sb/LatestProductsList";

// keys MÅSTE matcha technical names i Storyblok (små bokstäver)
export const components = {
  page: Page,
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  header: Header,
  footer: Footer,
  hero: Hero,
  imageBanner: ImageBanner,
  imageWithText: ImageWithText,
  searchBar: SearchBar,
  productList: ProductList,
  latestProductsList: LatestProductsList,
};

// Initiera Storyblok en gång
storyblokInit({
  accessToken:
    process.env.STORYBLOK_DELIVERY_API_ACCESS_TOKEN ||
    process.env.NEXT_PUBLIC_STORYBLOK_DELIVERY_API_ACCESS_TOKEN,
  use: [apiPlugin],
  apiOptions: { region: "eu" },
  components,
});

export { getStoryblokApi, StoryblokComponent } from "@storyblok/react/rsc";

