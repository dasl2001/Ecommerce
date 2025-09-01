
export default function ImageBanner({ blok }) {
  const href = blok.link?.cached_url ? `/${blok.link.cached_url}` : undefined;
  return (
    <section className="py-6">
      <div className="mx-auto max-w-6xl px-4">
        <a href={href} className="block aspect-[16/5] rounded-xl bg-neutral-200 overflow-hidden">
          {blok.image?.filename && (
            <img src={blok.image.filename} alt="" className="w-full h-full object-cover" />
          )}
        </a>
      </div>
    </section>
  );
}
