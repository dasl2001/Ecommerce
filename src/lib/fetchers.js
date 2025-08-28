import { getStoryblokApi } from "@storyblok/react";

export async function fetchStory(slug, version = "draft") {
  const sb = getStoryblokApi();
  const { data } = await sb.get(`cdn/stories/${slug}`, { version });
  return data?.story;
}

export async function fetchLinks() {
  const sb = getStoryblokApi();
  const { data } = await sb.get("cdn/links");
  return data?.links || {};
}

export async function fetchFolderProducts(folder = "products", opts = {}) {
  const sb = getStoryblokApi();
  const { data } = await sb.get("cdn/stories", {
    starts_with: `${folder}/`,
    content_type: "productPage",   // Content Type i Storyblok
    version: "published",
    per_page: opts.limit || 24,
    sort_by: opts.sort_by || "first_published_at:desc",
  });
  return data?.stories || [];
}
