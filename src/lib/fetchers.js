import { getStoryblokApi } from "@storyblok/react";
export async function fetchStory(slug, version = "draft") {
  const { data } = await getStoryblokApi().get(`cdn/stories/${slug}`, { version });
  return data?.story;
}
export async function fetchFolderProducts(folder = "products", opts = {}) {
  const { data } = await getStoryblokApi().get("cdn/stories", {
    starts_with: `${folder}/`,
    content_type: "productDetailPage", 
    version: "published",
    per_page: opts.limit || 24,
    sort_by: opts.sort_by || "first_published_at:desc",
  });
  return data?.stories || [];
}

