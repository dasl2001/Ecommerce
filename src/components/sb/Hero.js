/*
Hero-komponenten visar en stor sektion med titel, text, knapp och bild
*/
export default function Hero({ blok }) {
  return (

/*
Yttre box för hero. 
Har olika bakgrund beroende på vad är valt i Storyblok
*/
    <section className={`mx-auto max-w-6xl px-4 py-14 rounded-2xl ${blok.dark ? "bg-black text-white" : "bg-white"}`}>
      
{/* 
Grid med två kolumner: text till vänster och bild till höger 
*/}
      <div className="grid md:grid-cols-2 gap-8 items-center">

{/* 
Vänstra kolumnen: titel, text och knapp 
*/}
        <div>
{/* 
Titel från Storyblok 
*/}
          <h1 className="text-4xl font-semibold">{blok.title}</h1>
          
{/* 
Text visas bara om den finns 
*/}
          {blok.text && <p className="mt-3 text-neutral-500 md:max-w-lg">{blok.text}</p>}

{/* 
Knapp visas bara om CTA-länk finns 
*/}
          {blok.cta?.cached_url && (
            <a href={`/${blok.cta.cached_url}`} className="inline-block mt-6 border rounded-xl px-4 py-2">
              Shop All
            </a>
          )}
        </div>

{/* 
Högra kolumnen: bild visas bara om den finns */}
        {blok.image?.filename && <img src={blok.image.filename} alt="" className="w-full rounded-xl" />}
      </div>
    </section>
  );
}
