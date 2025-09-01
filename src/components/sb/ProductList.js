import ProductCard from "./ProductCard";

export default function ProductList({ blok }) {
  return (
    <section className="product-list">
      <h2>{blok.title}</h2>
      <div className="grid">
        {blok.items?.map((item) => (
          <ProductCard key={item._uid} blok={item} />
        ))}
      </div>
    </section>
  );
}
