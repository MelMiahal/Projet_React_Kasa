import { Link, Outlet } from 'react-router-dom'
import headerLogo from '../assets/LOGO.header.jpg'
import footerLogo from '../assets/LOGO.footer.png'

function Layout() {
	return (
		<div className="app-shell">
			<header className="site-header">
				<Link className="site-header__brand" to="/" aria-label="Kasa, accueil">
					<img src={headerLogo} alt="" />
				</Link>
				<nav className="site-header__nav" aria-label="Navigation principale">
					<Link to="/">Accueil</Link>
					<Link to="/about">À propos</Link>
				</nav>
			</header>

			<Outlet />

			<footer className="site-footer">
				<strong className="site-footer__brand">
					<img src={footerLogo} alt="Kasa" />
				</strong>
				<p>© Kasa. Tous droits réservés.</p>
			</footer>
		</div>
	)
}

export default Layout
