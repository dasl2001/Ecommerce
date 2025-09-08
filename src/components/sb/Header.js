export default function Header({ blok }) {
  const links = Array.isArray(blok.links) ? blok.links : [];

  return (
    <header className="border-b bg-white flex justify-center">
      <div className="w-[1400px] h-[60px] px-4 flex items-center gap-6">
        {/* Logo */}
        <a href="/" className="font-semibold">
          {blok.logo || "Ecommerce"}
        </a>

        {/* Navigation */}
        <nav className="flex gap-4 text-sm relative">
          {links.map((n) => {
            const hasChildren = Array.isArray(n.children) && n.children.length > 0;
            const href = n.custom_url || `/${n.link?.cached_url || ""}`;

            return (
              <div key={n._uid} className="relative group">
                {/* Parent link */}
                <a
                  href={href}
                  className="text-neutral-700 hover:underline"
                >
                  {n.label}
                </a>

                {/* Children (dropdown) */}
                {hasChildren && (
                  <div className="absolute left-0 mt-2 hidden group-hover:block bg-white border rounded shadow-md">
                    {n.children.map((child) => (
                      <a
                        key={child._uid}
                        href={child.custom_url || `/${child.link?.cached_url || ""}`}
                        className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </header>
  );
}


