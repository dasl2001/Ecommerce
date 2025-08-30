/*
Footer-komponenten visar sidfoten med kolumner och text
*/
export default function Footer({ blok }) {
  return (

/*
Yttre footer med ljus bakgrund och lite marginal uppåt
*/
    <footer className="bg-neutral-100 mt-20">
      
{/* 
Grid med upp till 4 kolumner 
*/}
      <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-4 gap-8">


{/* 
Loopa igenom varje kolumn från Storyblok 
*/}
        {blok.columns?.map((col) => (
          <div key={col._uid}>

{/* 
Titel på kolumnen 
*/}
            <div className="font-medium mb-2">{col.title}</div>

{/* 
Lista med länkar i kolumnen 
*/}
            <ul className="space-y-1 text-sm">
              {col.links?.map((l) => (
                <li key={l._uid}>
                  <a
                    className="hover:underline"
                    href={`/${l.link?.cached_url || ""}`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

{/* 
Copyright-text visas bara om den finns 
*/}
      {blok.copyright && (
        <div className="text-center text-xs text-neutral-500 pb-6">
          {blok.copyright}
        </div>
      )}
    </footer>
  );
}