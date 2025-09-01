export default function ImageWithText({ blok }) {
  return (
    <section className="image-with-text">
      <img src={blok.image.filename} alt={blok.image.alt} />
      <div>
        <h2>{blok.headline}</h2>
        <p>{blok.body}</p>
      </div>
    </section>
  );
}
