import { Link } from 'react-router-dom'

function Card({ id, title, cover }) {
  return (
    <Link className="lodging-card" to={`/lodging/${id}`}>
      <img className="lodging-card__image" src={cover} alt={title} loading="lazy" />
      <span className="lodging-card__title">{title}</span>
    </Link>
  )
}

export default Card