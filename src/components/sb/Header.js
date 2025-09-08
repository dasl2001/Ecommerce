import Link from "next/link";
import dynamic from "next/dynamic";

// Search laddas bara på klienten (pga use client inuti Search.js)
const Search = dynamic(() => import("@/components/Search"), { ssr: false });

/*
Header tar emot ett Storyblok-blok med konfiguration (logo, länkar, sökfält etc.)
*/
export default function Header({ blok }) {
  // Säkerställ att links är en array (annars tom array)
  const links = Array.isArray(blok.links) ? blok.links : [];

  return (
    <header className="border-b bg-white flex justify-center">
      {/* Inre container med fast bredd (1400px) och höjd (60px) */}
      <div className="w-[1400px] h-[60px] px-4 flex items-center gap-6">

        {/* Logotyp / företagsnamn (klickbar länk till startsidan) */}
        <Link href="/" className="font-semibold">
          {blok.logo || "Ecommerce"}
        </Link>

        {/* Navigation: loopar över alla länkar från Storyblok */}
        <nav className="flex gap-4 text-sm">
          {links.map((n) => (
            <Link
              key={n._uid} // unikt ID från Storyblok
              href={`/${n.link?.cached_url || ""}`} // Storyblok hanterar URL:er via "cached_url"
              className="text-neutral-700 hover:underline"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        {/* Sökfält – ersatt med vår Search-komponent */}
        <div className="ml-auto flex items-center gap-2">
          <Search />
        </div>

        {/* Kundvagns-ikon + antal (visas bara om show_cart = true i Storyblok) */}
        {blok.show_cart && (
          <div className="ml-4 flex items-center text-sm">
            <span aria-hidden>👜</span>
            <span className="ml-1">{Number(blok.cart_count || 0)}</span>
          </div>
        )}
      </div>
    </header>
  );
}


