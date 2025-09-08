"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function SearchBar({ placeholder = "Search" }) {
  const [q, setQ] = useState("");
  const [debounced, setDebounced] = useState("");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  // Debounce: vänta 300ms efter att användaren slutat skriva
  useEffect(() => {
    const t = setTimeout(() => setDebounced(q), 300);
    return () => clearTimeout(t);
  }, [q]);

  // Hämta resultat när debounced värde ändras
  useEffect(() => {
    if (!debounced) { setItems([]); return; }
    setLoading(true);
    fetch(`/api/search?q=${encodeURIComponent(debounced)}`)
      .then(r => r.json())
      .then(d => setItems(d.items || []))
      .finally(() => setLoading(false));
  }, [debounced]);

  return (
    <div className="relative w-64">
      {/* Sökfältet */}
      <input
        className="w-full h-10 rounded border px-3 text-sm"
        placeholder={placeholder}
        value={q}
        onChange={(e) => setQ(e.target.value)}
        aria-label="Search products"
      />

      {/* Resultat-lista */}
      {(q && (loading || items.length > 0)) && (
        <div className="absolute z-50 mt-1 w-full rounded-md border bg-white shadow-lg">
          {loading && (
            <div className="p-2 text-xs text-neutral-500">Searching…</div>
          )}
          {!loading && items.length === 0 && (
            <div className="p-2 text-xs text-neutral-500">No results</div>
          )}
          {!loading && items.length > 0 && (
            <ul className="max-h-64 overflow-auto">
              {items.map((p) => (
                <li key={p.id}>
                  <Link
                    className="block px-3 py-2 text-sm hover:bg-neutral-50"
                    href={p.slug}
                  >
                    {p.name} {p.price ? `– ${p.price} kr` : ""}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
