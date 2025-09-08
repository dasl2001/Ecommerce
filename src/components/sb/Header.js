/*
// Header tar emot ett Storyblok-blok med konfiguration (logo, länkar, sökfält etc.)
*/
export default function Header({ blok }) {

/*
Säkerställ att links är en array (annars tom array)
*/
  const links = Array.isArray(blok.links) ? blok.links : [];
  return (

/* 
Inre container med fast bredd (1400px) och höjd (60px) 
*/    
    <header className="border-b bg-white flex justify-center">
      <div className="w-[1400px] h-[60px] px-4 flex items-center gap-6">

{/* 
Logotyp / företagsnamn (klickbar länk till startsidan) 
*/}        
        <a href="/" className="font-semibold">
          {blok.logo || "Ecommerce"}
        </a>

 {/* 
 Navigation: loopar över alla länkar från Storyblok 
 */}        
        <nav className="flex gap-4 text-sm">
          {links.map((n) => (
            <a
              key={n._uid} //unikt ID från Storyblok
              href={`/${n.link?.cached_url || ""}`} //Storyblok hanterar URL:er via "cached_url"
              className="text-neutral-700 hover:underline"
            >
              {n.label}
            </a>
          ))}
        </nav>

{/* 
Sökfält – hamnar till höger (ml-auto skjuter det längst bort) 
*/}        
        <div className="ml-auto flex items-center gap-2 text-sm text-neutral-500">
          <span aria-hidden>🔍</span>
          <input
            className="h-8 w-48 rounded border px-3 text-sm"
            placeholder={blok.search_placeholder || "Search"}
          />
        </div>

{/* 
Kundvagns-ikon + antal (visas bara om show_cart = true i Storyblok)  
*/}       
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



