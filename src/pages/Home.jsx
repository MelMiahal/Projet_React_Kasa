import accommodations from '../data/logement.json'
import Banner from '../components/banner.jsx'
import Card from '../components/card.jsx'
import bannerImage from '../assets/img.jpg'

function Home() {
	return (
		<main className="home-page">
			<Banner
				image={bannerImage}
				imageAlt="Côte rocheuse bordée par la mer et une forêt"
				title="Chez vous, partout et ailleurs"
			/>

			<section className="lodging-list" aria-label="Logements disponibles">
				{accommodations.map((accommodation) => (
					<Card
						key={accommodation.id}
						id={accommodation.id}
						title={accommodation.title}
						cover={accommodation.cover}
					/>
				))}
			</section>
		</main>
	)
}

export default Home
