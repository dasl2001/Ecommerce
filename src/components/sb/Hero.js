import Image from "next/image";
import Link from "next/link";
import { renderRichText } from "@storyblok/react/rsc";

export default function Hero({ blok }) {
  const hasCta = blok?.cta?.cached_url && blok?.cta_label;

  const TextBlock = () => {
    const t = blok?.text;
    if (!t) return null;

    // Richtext-objekt
    if (typeof t === "object" && Array.isArray(t.content)) {
      return (
        <div className="mt-2 text-sm text-neutral-600 max-w-2xl mx-auto">
          {renderRichText(t)}
        </div>
      );
    }

    // Vanlig sträng
    if (typeof t === "string") {
      return (
        <p className="mt-2 text-sm text-neutral-600 max-w-2xl mx-auto">
          {t}
        </p>
      );
    }

    return null;
  };

  return (
    <section className="bg-white border-b">
      <div className="mx-auto max-w-6xl px-4 py-12 text-center">
        <header>
          <h1 className="text-3xl font-semibold">
            {blok?.title || "Shop Football Jerseys"}
          </h1>
          <TextBlock />
        </header>

        {/* Visa knapp bara om CTA-fält finns i Storyblok */}
        {hasCta && (
          <div className="mt-6">
            <Link
              href={`/${blok.cta.cached_url}`}
              className="inline-flex rounded-md border px-6 py-3 text-sm hover:bg-neutral-50"
            >
              {blok.cta_label}
            </Link>
          </div>
        )}
      </div>

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



