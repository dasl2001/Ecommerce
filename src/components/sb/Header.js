"use client";

import Link from "next/link";
import SearchBar from "@/components/SearchBar";

/*
// Header tar emot ett Storyblok-blok med konfiguration (logo, länkar, sökfält etc.)
*/
export default function Header({ blok }) {
  // Säkerställ att links är en array (annars tom array)
  const links = Array.isArray(blok.links) ? blok.links : [];

  return (
    <header className="border-b bg-white flex justify-center">
      <div className="w-[1400px] h-[60px] px-4 flex items-center gap-6">
        {/* Logotyp / företagsnamn */}
        <Link href="/" className="font-semibold">
          {blok.logo || "Ecommerce"}
        </Link>

        {/* Navigation */}
        <nav className="flex gap-4 text-sm">
          {links.map((n) => (
            <Link
              key={n._uid}
              href={`/${n.link?.cached_url || ""}`}
              className="text-neutral-700 hover:underline"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        {/* Sök till höger */}
        <div className="ml-auto flex items-center gap-2">
          <SearchBar placeholder={blok.search_placeholder || "Search"} />
        </div>

        {/* Kundvagn (valfritt) */}
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

