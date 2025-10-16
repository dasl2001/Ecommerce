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
    sort_by: "first_published_at:desc" 
  });
  const items = (data?.stories || []).map((s) => {
    const c = s.content || {}; // innehållet i storyn
    return {
      id: s.id,                        
      name: c.name || s.name,           
      price: c.price || null,           
      slug: `/${s.full_slug}`,          
    };
  });
  return NextResponse.json({ items });
}


