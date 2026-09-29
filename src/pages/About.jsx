import { Link } from 'react-router-dom'

function About() {
	return (
		<main>
			<h1>À propos de Kasa</h1>
			<p>Découvrez notre service de location de logements.</p>
			<Link to="/">Retour à l’accueil</Link>
		</main>
	)
}

export default About
