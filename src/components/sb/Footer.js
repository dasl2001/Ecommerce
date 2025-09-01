export default function Footer({ blok }) {
  return (
    <footer className="bg-neutral-100 border-t">
      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Newsletter */}
        <div className="mb-10 max-w-sm">
          <h3 className="text-lg font-semibold">Sign up for our newsletter</h3>
          <p className="mt-2 text-sm text-neutral-600">
            Be the first to know about special offers and new releases.
          </p>
          <form className="mt-3 flex gap-2">
            <input type="email" placeholder="Email Address" className="flex-1 h-9 rounded border px-3 text-sm" />
            <button type="submit" className="h-9 px-3 rounded border bg-white hover:bg-neutral-50 text-sm">Sign Up</button>
          </form>
        </div>

        {/* Länkkolumner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {(blok.columns || []).map(col => (
            <div key={col._uid}>
              <div className="font-medium mb-2">{col.title}</div>
              <ul className="space-y-1 text-sm">
                {(col.links || []).map(l => (
                  <li key={l._uid}>
                    <a href={`/${l.link?.cached_url || ""}`} className="hover:underline">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {blok.copyright && (
          <div className="mt-10 text-center text-xs text-neutral-500">{blok.copyright}</div>
        )}
      </div>
    </footer>
  );
}

