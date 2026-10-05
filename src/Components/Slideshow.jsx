import { useState } from 'react'

function Slideshow({ pictures, title }) {
	const [currentIndex, setCurrentIndex] = useState(0)
	const hasMultiplePictures = pictures.length > 1

	const showPreviousPicture = () => {
		setCurrentIndex((index) => (index === 0 ? pictures.length - 1 : index - 1))
	}

	const showNextPicture = () => {
		setCurrentIndex((index) => (index === pictures.length - 1 ? 0 : index + 1))
	}

	return (
		<section className="slideshow" aria-label={`Photos de ${title}`}>
			<img
				className="slideshow__image"
				src={pictures[currentIndex]}
				alt={`${title} - photo ${currentIndex + 1}`}
			/>
			{hasMultiplePictures && (
				<>
					<button
						className="slideshow__arrow slideshow__arrow--previous"
						type="button"
						onClick={showPreviousPicture}
						aria-label="Afficher la photo précédente"
					>
						<span className="slideshow__chevron" aria-hidden="true" />
					</button>
					<button
						className="slideshow__arrow slideshow__arrow--next"
						type="button"
						onClick={showNextPicture}
						aria-label="Afficher la photo suivante"
					>
						<span className="slideshow__chevron" aria-hidden="true" />
					</button>
					<p className="slideshow__counter" aria-live="polite">
						{currentIndex + 1}/{pictures.length}
					</p>
				</>
			)}
		</section>
	)
}

export default Slideshow
