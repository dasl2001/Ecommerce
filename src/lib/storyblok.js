import { apiPlugin, storyblokInit, getStoryblokApi } from "@storyblok/react/rsc";

// Dina existerande komponenter
import Page from "@/components/sb/Page";
import Teaser from "@/components/sb/Teaser";
import Feature from "@/components/sb/Feature";
import Grid from "@/components/sb/Grid";
import Hero from "@/components/sb/Hero";
import Header from "@/components/sb/Header";
import Footer from "@/components/sb/Footer";
import ImageBanner from "@/components/sb/ImageBanner";
import ImageWithText from "@/components/sb/ImageWithText";
import SearchBar from "@/components/sb/SearchBar";
import ProductList from "@/components/sb/ProductList";
import LatestProductsList from "@/components/sb/LatestProductsList";


export const components = {
  page: Page,
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  hero: Hero,
  header: Header,
  footer: Footer,
  imageBanner: ImageBanner,
  imageWithText: ImageWithText,
  searchBar: SearchBar,
  productList: ProductList,
  latestProductsList: LatestProductsList,
};

storyblokInit({
  accessToken:
    process.env.STORYBLOK_DELIVERY_API_ACCESS_TOKEN ||
    process.env.NEXT_PUBLIC_STORYBLOK_DELIVERY_API_ACCESS_TOKEN,
  use: [apiPlugin],
  apiOptions: { region: "eu" },
  components,
});

export { getStoryblokApi };
