"use client"; // Talar om för Next.js att komponenten körs på klienten (inte servern)

export default function Header({ blok }) {
  // Säkerställ att links alltid är en array, även om blok.links är undefined
  const links = Array.isArray(blok.links) ? blok.links : [];

  return (
    // Huvudtaggen <header>, sticky betyder att den stannar överst på sidan när man scrollar
    <header className="sticky top-0 z-[200] isolate border-b bg-white/90 backdrop-blur flex justify-center">
      {/* Wrapper med maxbredd, höjd och centrering */}
      <div className="w-[1400px] h-[60px] px-4 flex items-center gap-6">
        
        {/* Logo / varumärke */}
        <a href="/" className="font-semibold text-[15px] tracking-tight">
          {blok.logo || "Ecommerce"} {/* Visa logo-text, fallback är “Ecommerce” */}
        </a>

        {/* Navigation (huvudmeny) */}
        <nav className="flex gap-2 text-sm relative">
          {links.map((n) => {
            // Kolla om länken har barn (dropdown)
            const hasChildren = Array.isArray(n.children) && n.children.length > 0;
            // Bestäm vilken URL länken ska gå till
            const href = n.custom_url || `/${n.link?.cached_url || ""}`;

            return (
              // Varje huvudlänk omges av en <div> med group för att styra hover-effekter
              <div key={n._uid} className="relative group">
                {/* Föräldralänk (huvudmeny) */}
                <a
                  href={href}
                  className="inline-flex items-center gap-1 px-2 py-1 rounded-md
                             text-neutral-800 hover:text-black hover:bg-neutral-100
                             transition-colors"
                >
                  {n.label} {/* Länktext */}
                  {/* Om länken har dropdown: visa en pil som roterar på hover */}
                  {hasChildren && (
                    <span
                      className="transition-transform duration-200 group-hover:rotate-180"
                      aria-hidden
                    >
                      ▾
                    </span>
                  )}
                </a>

                {/* Dropdown-meny för barnlänkar */}
                {hasChildren && (
                  <div
                    className="absolute left-0 top-full z-[300] mt-2 w-56
                               rounded-xl border bg-white/95 backdrop-blur
                               shadow-xl ring-1 ring-black/5
                               opacity-0 scale-95 translate-y-1 pointer-events-none
                               group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:pointer-events-auto
                               group-focus-within:opacity-100 group-focus-within:scale-100 group-focus-within:translate-y-0 group-focus-within:pointer-events-auto
                               transition duration-200 origin-top"
                  >
                    {/* Liten caret (triangel) som pekar upp mot huvudlänken */}
                    <div className="absolute -top-2 left-6 h-4 w-4 rotate-45 bg-white border-l border-t" />

                    {/* Lista med barnlänkar */}
                    <ul className="py-2">
                      {n.children.map((child) => {
                        const childHref =
                          child.custom_url || `/${child.link?.cached_url || ""}`;
                        return (
                          <li key={child._uid}>
                            <a
                              href={childHref}
                              className="block px-3 py-2 rounded-md mx-2
                                         text-[13px] text-neutral-800
                                         hover:bg-neutral-100 hover:text-black
                                         focus:bg-neutral-100 focus:text-black
                                         transition-colors"
                            >
                              {child.label}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Sektion längst till höger i headern */}
        <div className="ml-auto flex items-center gap-3 text-sm">
          {/* Här kan man t.ex. lägga in en <Search /> och varukorg */}
          {blok.show_cart && (
            <a
              href="/cart"
              className="inline-flex items-center gap-1 px-2 py-1 rounded-md hover:bg-neutral-100"
            >
              <span aria-hidden>👜</span>
              {/* Visa antalet produkter i kundvagnen */}
              <span className="text-neutral-700">
                {Number(blok.cart_count || 0)}
              </span>
            </a>
          )}
        </div>
      </div>
    </header>
  );
}



