import ProductCard from "./ProductCard";

export default function LatestProductsList({ blok }) {
  return (
    <section className="latest-products">
      <h2>{blok.title}</h2>
      <div className="grid">
        {blok.products?.map((product) => (
          <ProductCard key={product._uid} blok={product} />
        ))}
      </div>
    </section>
  );
}
