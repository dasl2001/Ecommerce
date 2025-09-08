// app/sitemap.js
import { getStoryblokApi, getStoryblokVersion } from "@/lib/storyblok";

export default async function sitemap() {
  const sb = getStoryblokApi();
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://cms-grupparbete.vercel.app";

  // Statiska sidor
  const staticPages = [
    { url: `${baseUrl}/`, lastModified: new Date(), changeFrequency: "daily", priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/products`, lastModified: new Date(), changeFrequency: "daily", priority: 0.8 },
  ];

  // Dynamiska produktsidor
  let products = [];
  try {
    const { data } = await sb.get("cdn/stories", {
      starts_with: "products/",
      content_type: "productDetailPage",
      version: getStoryblokVersion(),
      per_page: 100,
      sort_by: "first_published_at:desc",
    });

    products = (data?.stories || []).map((s) => ({
      url: `${baseUrl}/${s.full_slug}`,
      lastModified: s.published_at || s.first_published_at || new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    }));
  } catch (e) {
    products = [];
  }

  return [...staticPages, ...products];
}
