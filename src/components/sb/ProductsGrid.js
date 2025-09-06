import { getStoryblokApi } from "@/lib/storyblok";
import Link from "next/link";
import Image from "next/image";

const norm = (u) => (u ? (u.startsWith("//") ? `https:${u}` : u) : null);

/**
 * props:
 *  - perPage (number)
 *  - category: 'all' | 'home' | 'away' | 'retro' | 'limited'
 */
export default async function ProductsGrid({ perPage = 8, category = "all" }) {
  const sb = getStoryblokApi();

  const query = {
    starts_with: "products/",
    content_type: "productDetailPage", // byt om ditt tekniska namn skiljer
    version: "draft",
    per_page: perPage,
    sort_by: "first_published_at:desc",
  };

  // Filtrera på single-option fältet 'category' i produkten
  if (category && category !== "all") {
    query.filter_query = { category: { in: category } };
  }

  const { data } = await sb.get("cdn/stories", query);
  const products = data?.stories ?? [];

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((p) => {
          const c = p.content || {};
          const filename =
            c.image?.filename ||
            (Array.isArray(c.images) && c.images[0]?.filename) ||
            null;
          const src = filename ? `${norm(filename)}/m/600x800` : null;

          return (
            <Link key={p.id} href={`/${p.full_slug}`} className="group block">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-gray-200">
                {src && (
                  <Image
                    src={src}
                    alt={c.image?.alt || c.name || p.name || "Product"}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(min-width:1280px) 260px, (min-width:1024px) 25vw, 50vw"
                  />
                )}
              </div>
              <div className="mt-2 flex items-baseline justify-between">
                <span className="text-sm font-medium">{c.name || p.name}</span>
                {c.price && <span className="text-sm opacity-70">{c.price} kr</span>}
              </div>
            </Link>
          );
        })}
      </div>

      {products.length === 0 && (
        <p className="mt-10 text-center text-sm text-neutral-600">
          No products found for this category.
        </p>
      )}
    </>
  );
}