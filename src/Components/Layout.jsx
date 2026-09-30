import { Link, Outlet } from 'react-router-dom'

function Layout() {
	return (
		<>
			<header className="site-header">
				<Link className="site-header__brand" to="/" aria-label="Kasa, accueil">Kasa</Link>
				<nav className="site-header__nav" aria-label="Navigation principale">
					<Link to="/">Accueil</Link>
					<Link to="/about">À propos</Link>
				</nav>
			</header>

			<Outlet />

			<footer className="site-footer">
				<strong className="site-footer__brand">Kasa</strong>
				<p>© Kasa. Tous droits réservés.</p>
			</footer>
		</>
	)
}

export default Layout
