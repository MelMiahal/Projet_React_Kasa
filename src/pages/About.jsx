import Banner from '../Components/Banner.jsx'
import Collapse from '../Components/Collapse.jsx'
import bannerImage from '../assets/about-mountain.jpg'

const values = [
	{
		title: 'Fiabilité',
		content:
			'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
	},
	{
		title: 'Respect',
		content:
			'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
	},
	{
		title: 'Service',
		content:
			'La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.',
	},
	{
		title: 'Sécurité',
		content:
			"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
	},
]

function About() {
	return (
		<main className="about-page">
			<Banner
				className="banner--about"
				image={bannerImage}
				imageAlt="Vallée de montagne bordée de forêts et de sommets enneigés"
			/>
			<section className="about-page__values" aria-label="Nos valeurs">
				{values.map(({ title, content }) => (
					<Collapse key={title} title={title}>
						<p>{content}</p>
					</Collapse>
				))}
			</section>
		</main>
	)
}

export default About
