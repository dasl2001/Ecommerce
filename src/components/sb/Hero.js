
export default function Hero({ blok }) {
  const dark = blok.dark;
  return (
    <section className={`${dark ? "bg-black text-white" : "bg-white"} py-12`}>
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h1 className="text-3xl font-semibold">{blok.title}</h1>
        {blok.text && <p className="mt-2 text-sm text-neutral-500 max-w-2xl mx-auto">{blok.text}</p>}
        {blok.cta?.cached_url && (
          <a href={`/${blok.cta.cached_url}`} className="mt-4 inline-block border rounded px-4 py-2 text-sm">
            Shop All
          </a>
        )}
        {blok.image?.filename && (
          <img src={blok.image.filename} alt="" className="mt-6 mx-auto rounded-xl w-full max-w-3xl" />
        )}
      </div>
    </section>
  );
}
