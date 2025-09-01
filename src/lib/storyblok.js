"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Header from "@/components/sb/Header";
import Footer from "@/components/sb/Footer";
import Hero from "@/components/sb/Hero";
import ImageBanner from "@/components/sb/ImageBanner";
import ImageWithText from "@/components/sb/ImageWithText";
import SearchBar from "@/components/sb/SearchBar";
import ProductList from "@/components/sb/ProductList";
import LatestProductsList from "@/components/sb/LatestProductsList";

export const components = {
  header: Header, 
  footer: Footer, 
  hero: Hero,
  imageBanner: ImageBanner, 
  imageWithText: ImageWithText,
  searchBar: SearchBar, 
  productList: ProductList, 
  latestProductsList: LatestProductsList,
};

export function initStoryblok() {
  storyblokInit({ accessToken: process.env.STORYBLOK_TOKEN, use:[apiPlugin], components, apiOptions:{region:"eu"} });
}

