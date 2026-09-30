function Banner({ image, imageAlt, title }) {
  return (
    <section className="banner">
      <img className="banner__image" src={image} alt={imageAlt} />
      <div className="banner__overlay">
        <h1>{title}</h1>
      </div>
    </section>
  )
}

export default Banner