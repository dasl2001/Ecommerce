"use client";

export default function ProductMenu({ blok }) {
  const cats = Array.isArray(blok.categories) ? blok.categories : [];

  return (
    <section className="mx-auto max-w-6xl px-4 py-4">
      <div className="flex flex-wrap gap-2">
        {/* Alla kategorier från Storyblok */}
        {cats.map((c) => (
          <a
            key={c}
            href={`/products?cat=${c}`}
            className="px-3 py-1 rounded border text-sm hover:bg-neutral-100"
          >
            {c}
          </a>
        ))}

        {/* Extra länk för alla produkter */}
        <a
          href="/products"
          className="px-3 py-1 rounded border text-sm hover:bg-neutral-100"
        >
          All
        </a>
      </div>
    </section>
  );
}
