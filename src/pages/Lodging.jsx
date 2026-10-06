import { Navigate, useParams } from 'react-router-dom'
import accommodations from '../Data/logement.json'
import Collapse from '../Components/Collapse.jsx'
import Slideshow from '../Components/Slideshow.jsx'

function Lodging() {
	const { id } = useParams()
	const accommodation = accommodations.find((item) => item.id === id)

	if (!accommodation) {
		return <Navigate to="/404" replace />
	}

	const rating = Number(accommodation.rating)

	return (
		<main className="lodging-page">
			<Slideshow
				key={accommodation.id}
				pictures={accommodation.pictures}
				title={accommodation.title}
			/>
			<section className="lodging-details" aria-label="Détails du logement">
				<div className="lodging-details__main">
					<h1 className="lodging-details__title">{accommodation.title}</h1>
					<p className="lodging-details__location">{accommodation.location}</p>
					<ul className="lodging-details__tags" aria-label="Caractéristiques">
						{accommodation.tags.map((tag) => (
							<li className="lodging-details__tag" key={tag}>
								{tag}
							</li>
						))}
					</ul>
				</div>
				<div className="lodging-details__host-rating">
					<div className="lodging-details__host">
						<span className="lodging-details__host-name">
							{accommodation.host.name}
						</span>
						<img
							className="lodging-details__host-picture"
							src={accommodation.host.picture}
							alt=""
						/>
					</div>
					<div
						className="lodging-details__rating"
						role="img"
						aria-label={`Note de ${rating} sur 5`}
					>
						{Array.from({ length: 5 }, (_, index) => (
							<span
								className={`lodging-details__star${index < rating ? ' lodging-details__star--filled' : ''}`}
								key={index}
								aria-hidden="true"
							>
								★
							</span>
						))}
					</div>
				</div>
			</section>
			<section className="lodging-info" aria-label="Description et équipements">
				<Collapse title="Description">
					<p>{accommodation.description}</p>
				</Collapse>
				<Collapse title="Équipements">
					<ul className="lodging-info__equipment-list">
						{accommodation.equipments.map((equipment) => (
							<li key={equipment}>{equipment}</li>
						))}
					</ul>
				</Collapse>
			</section>
		</main>
	)
}

export default Lodging
