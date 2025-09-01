export default function ProductCard({ blok }) {
  return (
    <article className="product-card">
      <img src={blok.image.filename} alt={blok.image.alt} />
      <h3>{blok.name}</h3>
      <h4>Hej David</h4>
      <p>{blok.description}</p>
      <span>{blok.price} kr</span>
    </article>
  );
}


