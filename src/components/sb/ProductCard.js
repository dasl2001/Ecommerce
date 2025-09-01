export default function ProductCard({ story }) {
  const c = story.content;
  const slug = story.full_slug.split("/").pop();
  const img = c.images?.[0]?.filename;
  return (
    <a href={`/products/${slug}`} className="block">
      <div className="rounded bg-neutral-200 overflow-hidden aspect-[4/3]">
        {img && <img src={img} alt="" className="w-full h-full object-cover" />}
      </div>
      <div className="mt-2 text-xs text-neutral-500">{(c.tags && c.tags[0]) || "Product"}</div>
      <div className="text-sm font-medium">{c.title}</div>
      <div className="text-sm">{c.price} kr</div>
    </a>
  );
}



