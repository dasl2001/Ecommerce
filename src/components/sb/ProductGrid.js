// components/sb/ProductGrid.js
import { getStoryblokApi } from "@/lib/storyblok";
import Link from "next/link";
import Image from "next/image";

// Helper: Storyblok Richtext -> plain text (utan <p>)
function richTextToPlain(richtext) {
  if (!richtext) return "";
  // Richtext-objekt
  if (typeof richtext === "object" && Array.isArray(richtext.content)) {
    return richtext.content
      .map((block) =>
        Array.isArray(block.content)
          ? block.content.map((inner) => inner.text || "").join("")
          : ""
      )
      .join("\n")
      .trim();
  }
  // Vanlig sträng
  if (typeof richtext === "string") return richtext.trim();
  return "";
}

export default async function ProductGrid({ blok }) {
  const sb = getStoryblokApi();
  const perPage = blok?.per_page ?? blok?.number ?? 3;

  const { data } = await sb.get("cdn/stories", {
    starts_with: "products/",
    content_type: "productDetailPage",
    version: "draft",
    per_page: perPage,
    sort_by: "first_published_at:desc",
  });

  const products = data?.stories ?? [];
  const norm = (u) => (u ? (u.startsWith("//") ? `https:${u}` : u) : null);

  const title = blok?.title || "Our latest arrivals";

  // Läs fältet "text" (litet t) och gör det till plain text
  const textPlain = blok?.text ? richTextToPlain(blok.text) : "";

  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 pt-2 pb-16">
        {/* Rubrik */}
        <h2 className="text-center text-2xl font-semibold">{title}</h2>

        {/* TEXT – ren text (ingen <p>) */}
        {textPlain && (
          <div className="mt-3 text-center text-sm text-neutral-700 max-w-2xl mx-auto whitespace-pre-line">
            {textPlain}
          </div>
        )}

        {/* LÄNK – lägg överst i stacking order så bilder inte kan täcka den */}
        <div className="mt-5 text-center relative z-10">
          <Link
            href="/products"
            className="inline-flex rounded-md border px-6 py-2 text-sm hover:bg-neutral-50"
          >
            {blok?.link_label || "Go to products"}
          </Link>
        </div>

        {/* GRID – extra top-marginal så lyftet inte krockar med knappen */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 relative z-0">
          {products.map((p, i) => {
            const c = p.content || {};
            const filename =
              c.image?.filename ||
              (Array.isArray(c.images) && c.images[0]?.filename) ||
              null;
            const src = filename ? `${norm(filename)}/m/600x800` : null;

            // Lyft MITTEN-kortet, men lite mindre för att undvika överlapp
            const lift = i % 3 === 1 ? "lg:-mt-8" : "";

            return (
              <Link key={p.id} href={`/${p.full_slug}`} className={`group block ${lift}`}>
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-gray-200">
                  {src && (
                    <Image
                      src={src}
                      alt={c.image?.alt || c.name || p.name || "Product"}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(min-width:1024px) 320px, 33vw"
                      priority={i < 3} // lite snärt på första raden
                    />
                  )}
                </div>
                <div className="mt-3 flex items-baseline justify-between">
                  <span className="text-sm font-medium">{c.name || p.name}</span>
                  {c.price && <span className="text-sm opacity-70">{c.price} kr</span>}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

