import { Link } from 'react-router-dom'

function Home() {
	return (
		<main>
			<h1>Accueil Kasa</h1>
			<p>Bienvenue sur le site de location de logements Kasa.</p>
			<nav aria-label="Navigation principale">
				<Link to="/about">À propos</Link>
			</nav>
		</main>
	)
}

export default Home
