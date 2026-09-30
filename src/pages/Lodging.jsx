import { Link, useParams } from 'react-router-dom'
import accommodations from '../Data/logement.json'
import Error404 from './Error404.jsx'

function Lodging() {
	const { id } = useParams()
	const accommodation = accommodations.find((item) => item.id === id)

	if (!accommodation) {
		return <Error404 />
	}

	return (
		<main>
			<h1>Logement</h1>
			<p>Identifiant du logement : {accommodation.id}</p>
			<Link to="/">Retour à l’accueil</Link>
		</main>
	)
}

export default Lodging
