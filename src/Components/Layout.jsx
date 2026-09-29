import { Link, Outlet } from 'react-router-dom'

function Layout() {
	return (
		<>
			<header>
				<Link to="/" aria-label="Kasa, accueil">Kasa</Link>
				<nav aria-label="Navigation principale">
					<Link to="/">Accueil</Link>
					<Link to="/about">À propos</Link>
				</nav>
			</header>

			<main>
				<Outlet />
			</main>

			<footer>
				<p>© Kasa. Tous droits réservés.</p>
			</footer>
		</>
	)
}

export default Layout
