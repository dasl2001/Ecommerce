export default function Header({ blok }) {
  return (
/*
Header med vit bakgrund och ram
*/
    <header className="bg-white border-b">

{/* 
Innehållet centreras och får maxbredd 
*/}
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center gap-6">
        
{/*
Logotyp eller text "Ecommerce" 
*/}
        <a href="/" className="font-semibold">
          {blok.logo || "Ecommerce"}
        </a>

{/* 
Navigation med länkar från Storyblok 
*/}
        <nav className="flex gap-4 text-sm">
          {blok.links?.map((n) => (
            <a
              key={n._uid}
              href={`/${n.link?.cached_url || ""}`}
              className="hover:underline"
            >
              {n.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
