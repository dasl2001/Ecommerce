"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Search() {
  const [q, setQ] = useState("");
  const [debounced, setDebounced] = useState("");
  const [items, setItems] = useState([]);

  // debounce (vänta 300ms innan vi söker)
  useEffect(() => {
    const t = setTimeout(() => setDebounced(q), 300);
    return () => clearTimeout(t);
  }, [q]);

  // hämta från API när användaren skriver
  useEffect(() => {
    if (!debounced) return setItems([]);
    fetch(`/api/search?q=${debounced}`)
      .then((res) => res.json())
      .then((data) => setItems(data.items || []));
  }, [debounced]);

  return (
    <div className="max-w-md mx-auto">
      <input
        className="w-full border rounded px-3 py-2"
        placeholder="Search products…"
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />
      <ul className="mt-3 border rounded divide-y">
        {items.map((p) => (
          <li key={p.id} className="p-2 hover:bg-neutral-50">
            <Link href={p.slug}>
              {p.name} {p.price ? `– ${p.price} kr` : ""}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
