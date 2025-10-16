import { getStoryblokApi, getStoryblokVersion } from "@/lib/storyblok";
import { renderSbText } from "@/utils/safeRichText";
import ShopMenu from "@/components/sb/ShopMenu";
import ProductsGrid from "@/components/sb/ProductsGrid";
export default async function ProductsPage({ searchParams }) {
  const { category = "all" } = (await searchParams) ?? {};
  const sb = getStoryblokApi();
  const { data } = await sb.get("cdn/stories/products", { version: getStoryblokVersion() });
  const content = data?.story?.content || {};
  const body = Array.isArray(content.body) ? content.body : [];
  const hero = body.find((b) => b.component === "hero");
  const title = hero?.title || content.title || "See our products";
  const rawHeroText = hero?.text ?? hero?.textfield ?? content.text ?? content.subtitle;
  return (
    <main>       
      <section className="mx-auto max-w-6xl px-4 pt-10 pb-4 text-center">
        <h1 className="text-2xl sm:text-3xl font-semibold">{title}</h1>
        <div className="mt-2 text-sm text-neutral-600 max-w-2xl mx-auto">
          {renderSbText(rawHeroText) || (
            <p>Discover our latest football jerseys. Click a product to view details.</p>
          )}
        </div>
        <div className="mt-5 flex justify-center">
          <ShopMenu active={category} />
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <ProductsGrid perPage={10} category={category} />
      </section>
    </main>
  );
}

