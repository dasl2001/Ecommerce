import Image from "next/image";
import Link from "next/link";

export default function Hero({ blok }) {
  return (
    <section className="bg-white border-b">
      <div className="mx-auto max-w-6xl px-4 py-12 text-center">
        {/* Rubrik + text */}
        <header>
          <h1 className="text-3xl font-semibold">
            {blok?.title || "Shop Football Jerseys"}
          </h1>
          {blok?.text && (
            <p className="mt-2 text-sm text-neutral-600 max-w-2xl mx-auto">
              {blok.text}
            </p>
          )}
        </header>

        {/* CTA-länk till Products */}
        <div className="mt-6">
          <Link
            href="/products"
            className="inline-flex rounded-md border px-6 py-3 text-sm hover:bg-neutral-50"
          >
            Browse Products
          </Link>
        </div>
      </div>

      {/* Hero-bilden */}
      {blok?.image?.filename && (
        <div className="relative mx-auto max-w-6xl px-4 pb-12">
          <div className="relative aspect-[16/6] w-full overflow-hidden rounded-xl bg-gray-100 md:aspect-[16/5] lg:aspect-[16/4]">
            <Image
              src={`${blok.image.filename}/m/1600x900`}
              alt={blok.image.alt || ""}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
}


