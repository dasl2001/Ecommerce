/*
Hero-sektionen på startsidan (och eventuellt andra sidor)
*/
import Image from "next/image";
import Link from "next/link";
import { renderRichText } from "@storyblok/react/rsc";

/*
Hjälpfunktion som fixar länkar från Storyblok (lägger till https: om de börjar med 
*/
const norm = (u) => (u ? (u.startsWith("//") ? `https:${u}` : u) : null);

export default function Hero({ blok, story }) {

/*
Intern komponent för att rendera textfältet (kan vara Rich Text eller vanlig sträng)
*/
  const TextBlock = () => {
    const t = blok?.text;
    if (!t) return null;

/*
Om det är ett Rich Text-objekt (Storyblok-format) → rendera med renderRichText
Om det är en vanlig sträng → rendera i ett <p>
*/
    if (typeof t === "object" && Array.isArray(t.content)) {
      return (
        <div className="mt-2 text-sm text-neutral-600 max-w-3xl mx-auto relative z-20">
          {renderRichText(t)}
        </div>
      );
    }

/*
Om det bara är en sträng
*/
    if (typeof t === "string") {
      return (
        <p className="mt-2 text-sm text-neutral-600 max-w-3xl mx-auto relative z-20">
          {t}
        </p>
      );
    }
    return null;
  };

/* 
Hjälp: avgör om vi är på "about"-sidan (för att dölja "Shop all"-knappen där)
*/
  const isAbout = story?.full_slug === "about";

/* 
Huvudbild (1114x521) och extra bild (1400x316) 
*/  
  const mainImg = blok?.image?.filename ? norm(blok.image.filename) : null; // 1114x521

/*
Extra bild (1400x316) – hämtas från fältet "image1" i Storyblok
*/
  const extraImg = blok?.image1?.filename ? norm(blok.image1.filename) : null; // 1400x316

  return (
    <section className="relative bg-white border-b" style={{ minHeight: 1300 }}>

{/* 
Text och ev. knapp 
*/}
      <div className="mx-auto max-w-6xl px-4 pt-12 text-center relative z-30">
        <h1 className="text-3xl font-semibold">
          {blok?.title || "Better football jerseys for the planet"}
        </h1>
        <TextBlock />

 {/* 
 "Shop all"-knappen visas bara om man INTE är på /about 
 */}
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

{/* 
Huvudbilden (1114x521), centrerad med absolute + translateX 
*/}
      {mainImg && (
        <div
          className="absolute overflow-hidden rounded-xl bg-gray-100 z-10 opacity-100"
          style={{
            top: 381, //381px ner från toppen
            left: "50%", //mitten av sidan
            transform: "translateX(-50%)", //justera så den hamnar centrerad
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

{/* 
Extra bild (1400x316), centrerad längre ner på sidan 
*/}
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
