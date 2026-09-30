import { Link } from 'react-router-dom'

function Error404() {
	return (
		<main>
			<h1>404</h1>
			<p>La page que vous recherchez n’existe pas.</p>
			<Link to="/">Retourner à l’accueil</Link>
		</main>
	)
}

export default Error404
