import { Link, useParams } from 'react-router-dom'

function Lodging() {
	const { id } = useParams()

	return (
		<main>
			<h1>Logement</h1>
			<p>Identifiant du logement : {id}</p>
			<Link to="/">Retour à l’accueil</Link>
		</main>
	)
}

export default Lodging
