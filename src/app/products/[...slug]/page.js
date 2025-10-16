import { getStoryblokApi, getStoryblokVersion } from "@/lib/storyblok";
import Image from "next/image";
import { notFound } from "next/navigation";
import AddToCartButton from "@/components/sb/AddToCartButton";
const norm = (u) => (u ? (u.startsWith("//") ? `https:${u}` : u) : null);
function richTextToPlain(richtext) {
  if (!richtext || typeof richtext !== "object" || !Array.isArray(richtext.content)) return "";
  return richtext.content
    .map((block) =>
      Array.isArray(block.content) ? block.content.map((inner) => inner.text || "").join("") : ""
    )
    .join("\n")
    .trim();
}
export default async function ProductPage({ params }) {
  const { slug } = await params;
  const slugPath = Array.isArray(slug) ? slug.join("/") : slug;
  const sb = getStoryblokApi();
  let data;
  try {
    ({ data } = await sb.get(`cdn/stories/products/${slugPath}`, {
      version: getStoryblokVersion(),
    }));
  } catch {
    return notFound();
  }
  const story = data?.story;
  if (!story) return notFound();
  const c = story.content || {};
  const filename =
    c.image?.filename ||
    (Array.isArray(c.images) && c.images[0]?.filename) ||
    null;
  const img = filename ? norm(filename) : null;
  const descPlain = c.description ? richTextToPlain(c.description) : "";
  const rawColors = Array.isArray(c.colors) ? c.colors : c.color ? [c.color] : [];
  const colors = rawColors.map((item) =>
    typeof item === "string"
      ? { label: item, value: item }
      : { label: item.name || item.value || "Color", value: item.value || item.name }
  );
  const isColorValue = (v) =>
    typeof v === "string" &&
    (v.startsWith("#") ||
      ["black","white","red","blue","green","yellow","orange","purple","navy","brown","gray","grey"]
        .includes(v.toLowerCase()));   
  const sizes = Array.isArray(c.sizes) && c.sizes.length > 0 ? c.sizes : ["XS","S","M","L","XL"];
  return (
    <main className="relative mx-auto max-w-6xl px-4 pb-24" style={{ minHeight: 900 }}>
      <div
        className="absolute overflow-hidden rounded-xl bg-gray-100"
        style={{ top: 148, left: 110, width: 554, height: 554, opacity: 1, transform: "rotate(0deg)" }}
      >
        {img && (
          <Image
            src={img}
            alt={c.image?.alt || c.name || story.name}
            fill 
            className="object-cover object-center"
            sizes="554px" 
            priority  
          />
        )}
      </div>
      <div className="relative" style={{ marginLeft: 760, paddingTop: 148 }}>
        <h1 className="text-2xl font-semibold">{c.name || story.name}</h1>
        {c.price && <p className="mt-2 text-lg">{c.price} kr</p>}
        {colors.length > 0 && (
          <div className="mt-6">
            <div className="text-sm font-medium">Colors</div>
            <div className="mt-2 flex flex-wrap gap-3">
              {colors.map((col, i) => (
                <div key={`${col.label}-${i}`} className="flex items-center gap-2">
                  <span
                    className="inline-block h-6 w-6 rounded-full border"
                    style={isColorValue(col.value) ? { background: col.value } : {}}
                    aria-label={col.label}
                    title={col.label}
                  />
                  <span className="text-sm">{col.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        {descPlain && <div className="mt-6 text-sm text-neutral-700 whitespace-pre-line">{descPlain}</div>}
        <div className="mt-6">
          <div className="text-sm font-medium">Size</div>
          <div className="mt-2 flex flex-wrap gap-2">
            {sizes.map((s, idx) => {
              const label = typeof s === "string" ? s : s.name || s.value || `Size ${idx + 1}`;
              return (
                <button key={`${label}-${idx}`} type="button" className="rounded-md border px-3 py-1 text-sm hover:bg-neutral-50">
                  {label}
                </button>
              );
            })}
          </div>
        </div>
        <div className="mt-8">
          <AddToCartButton
            product={{ id: story.id, slug: story.full_slug, name: c.name || story.name, price: c.price }}
          />
        </div>
      </div>
    </main>
  );
}
