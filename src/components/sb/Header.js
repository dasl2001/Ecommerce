export default function Header({ blok }) {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto max-w-6xl h-14 px-4 flex items-center gap-6">
        {/* Logo (vänster) */}
        <a href="/" className="font-semibold">
          {blok.logo || "Ecommerce"}
        </a>

        {/* Länkar (mitten-vänster) */}
        <nav className="flex gap-4 text-sm">
          {(blok.links || []).map((n) => (
            <a
              key={n._uid}
              href={`/${n.link?.cached_url || ""}`}
              className="text-neutral-700 hover:underline"
            >
              {n.label}
            </a>
          ))}
        </nav>

        {/* Sök (mitten-höger) */}
        <div className="ml-auto flex items-center gap-2 text-sm text-neutral-500">
          <span aria-hidden>🔍</span>
          <input
            className="h-8 w-48 max-w-[180px] rounded-md border px-3 text-sm"
            placeholder={blok.search_placeholder || "Search"}
          />
        </div>

        {/* Cart (höger) */}
        {blok.show_cart && (
          <div className="ml-4 flex items-center text-sm text-neutral-700">
            <span aria-hidden>👜</span>
            <span className="ml-1">{Number(blok.cart_count || 0)}</span>
          </div>
        )}
      </div>
    </header>
  );
}


