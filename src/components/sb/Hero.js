import Image from "next/image";
import Link from "next/link";
import { renderRichText } from "@storyblok/react/rsc";
const norm = (u) => (u ? (u.startsWith("//") ? `https:${u}` : u) : null);
export default function Hero({ blok, story }) {
  const TextBlock = () => {
    const t = blok?.text;
    if (!t) return null;
    if (typeof t === "object" && Array.isArray(t.content)) {
      // Rich Text
      return (
        <div className="mt-2 text-sm text-neutral-600 max-w-3xl mx-auto relative z-20">
          {renderRichText(t)}
        </div>
      );
    }
    if (typeof t === "string") {
      return (
        <p className="mt-2 text-sm text-neutral-600 max-w-3xl mx-auto relative z-20">
          {t}
        </p>
      );
    }
    return null;
  };
  const isAbout = story?.full_slug === "about";
  const mainImg = blok?.image?.filename ? norm(blok.image.filename) : null;
  const extraImg = blok?.image1?.filename ? norm(blok.image1.filename) : null;
  const bg =
    typeof blok?.bg_color === "string" && blok.bg_color.trim()
      ? blok.bg_color
      : "#ffffff";
  return (
    <section
      className="relative border-b"
      style={{ minHeight: 1300, backgroundColor: bg }}
    >
      <div className="mx-auto max-w-6xl px-4 pt-12 text-center relative z-30">
        <h1 className="text-3xl font-semibold">
          {blok?.title || "Better football jerseys for the planet"}
        </h1>
        <TextBlock />
        {!isAbout && (
          <div className="mt-6">
            <Link
              href="/products"
              className="inline-flex rounded-md border px-6 py-3 text-sm bg-white hover:bg-neutral-50 shadow-sm"
            >
              Shop all
            </Link>
          </div>
        )}
      </div>
      {mainImg && (
        <div
          className="absolute overflow-hidden rounded-xl bg-gray-100 z-10 opacity-100"
          style={{
            top: 381, 
            left: "50%", 
            transform: "translateX(-50%)", 
            width: 1114,
            height: 521,
          }}
        >
          <Image
            src={mainImg}
            alt={blok.image?.alt || ""}
            fill
            className="object-cover object-center"
            sizes="1114px"
            priority
          />
        </div>
      )}
      {extraImg && (
        <div
          className="absolute left-1/2 -translate-x-1/2 overflow-hidden rounded-xl bg-gray-100 z-0 opacity-100"
          style={{
            top: 972,
            width: 1400,
            height: 316,
          }}
        >
          <Image
            src={extraImg}
            alt={blok.image1?.alt || ""}
            fill
            className="object-cover object-center"
            sizes="1400px"
          />
        </div>
      )}
    </section>
  );
}
