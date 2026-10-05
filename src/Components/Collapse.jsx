import { useId, useState } from 'react'

function Collapse({ title, children }) {
	const [isOpen, setIsOpen] = useState(false)
	const panelId = useId()

	return (
		<section className={`collapse${isOpen ? ' collapse--open' : ''}`}>
			<h2 className="collapse__heading">
				<button
					className="collapse__trigger"
					type="button"
					aria-expanded={isOpen}
					aria-controls={panelId}
					onClick={() => setIsOpen((open) => !open)}
				>
					<span>{title}</span>
					<span className="collapse__chevron" aria-hidden="true" />
				</button>
			</h2>
			<div
				className="collapse__panel"
				id={panelId}
				aria-hidden={!isOpen}
				inert={!isOpen}
			>
				<div className="collapse__content">
					<div className="collapse__body">{children}</div>
				</div>
			</div>
		</section>
	)
}

export default Collapse