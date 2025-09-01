import { getStoryblokApi } from "@/lib/storyblok";

export default async function ProductDetail({ params }) {
  const sb = getStoryblokApi();
  const { data } = await sb.get(`cdn/stories/products/${params.slug}`, { version: "published" });
  const c = data?.story?.content;
  if (!c) return null;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-2 gap-8">
      <div className="rounded-xl overflow-hidden bg-neutral-200">
        {c.images?.[0]?.filename && (
          <img src={c.images[0].filename} alt={c.title} className="w-full h-full object-cover" />
        )}
      </div>
      <div>
        <h1 className="text-2xl font-semibold">{c.title}</h1>
        <div className="mt-2 text-lg">{c.price} kr</div>
        <p className="mt-4 text-sm text-neutral-700">
          {c.description?.content?.[0]?.content?.[0]?.text || ""}
        </p>
        <div className="mt-6 flex gap-2 flex-wrap">
          {(c.sizes || []).map((s) => (
            <span key={s} className="px-3 py-1 rounded border text-sm">{s}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
