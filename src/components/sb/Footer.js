
export default function Footer({ blok }) {
  return (
    <footer className="bg-neutral-100 mt-16">
      <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-3 gap-8">
        {blok.columns?.map(col => (
          <div key={col._uid}>
            <div className="font-medium mb-2">{col.title}</div>
            <ul className="space-y-1 text-sm">
              {col.links?.map(l => (
                <li key={l._uid}>
                  <a href={`/${l.link?.cached_url || ""}`} className="hover:underline">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {blok.copyright && (
        <div className="text-center text-xs text-neutral-500 pb-6">{blok.copyright}</div>
      )}
    </footer>
  );
}
