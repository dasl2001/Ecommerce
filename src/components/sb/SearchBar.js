export default function SearchBar({ blok }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-4">

{/*
Sökfältet 
*/}
      <input
        className="w-full h-10 rounded border px-3 text-sm"
       
/*
Storyblok fyllt i ett "placeholder"-fält används det
annars används standardtexten "Search
*/
        placeholder={blok.placeholder || "Search"}
      />
    </section>
  );
}
