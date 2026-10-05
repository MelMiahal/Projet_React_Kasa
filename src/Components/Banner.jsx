function Banner({ image, imageAlt, title, className = '' }) {
  return (
    <section className={`banner${className ? ` ${className}` : ''}`}>
      <img className="banner__image" src={image} alt={imageAlt} />
      {title && (
        <div className="banner__overlay">
          <h1>{title}</h1>
        </div>
      )}
    </section>
  )
}

export default Banner