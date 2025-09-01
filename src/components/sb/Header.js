
export default function Header({ blok }) {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto max-w-6xl h-14 px-4 flex items-center gap-6">
        <a href="/" className="font-semibold"> {blok.logo || "Ecommerce"} </a>

        <nav className="flex gap-4 text-sm">
          {blok.links?.map(n => (
            <a key={n._uid} href={`/${n.link?.cached_url || ""}`} className="hover:underline">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto">
          <input
            className="h-9 rounded-md border px-3 text-sm"
            placeholder="Start typing to search"
          />
        </div>
      </div>
    </header>
  );
}

