import { NextResponse } from "next/server";
import { getStoryblokApi, getStoryblokVersion } from "@/lib/storyblok";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const q = (searchParams.get("q") || "").trim();

  if (!q) return NextResponse.json({ items: [] });

  const sb = getStoryblokApi();
  const { data } = await sb.get("cdn/stories", {
    starts_with: "products/",
    content_type: "productDetailPage",
    version: getStoryblokVersion(),
    search_term: q,
    per_page: 20,
  });

  const items = (data?.stories || []).map((s) => ({
    id: s.id,
    name: s.content?.name || s.name,
    price: s.content?.price || null,
    slug: `/${s.full_slug}`,
  }));

  return NextResponse.json({ items });
}
