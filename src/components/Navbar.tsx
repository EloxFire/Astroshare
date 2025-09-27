import '../styles/components/navbar.scss';
import { useState } from 'react';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div id={"navbar"}>
			<p className={"title"}>Astroshare</p>
			<button
				className={"menu-toggle"}
				aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
				aria-expanded={isOpen}
				aria-controls={"navbar-links"}
				onClick={() => setIsOpen(v => !v)}
			>
				Menu
			</button>
			<nav id={"navbar-links"} className={`links ${isOpen ? 'open' : ''}`}>
				<ul>
					<li>
						<a href="" onClick={() => setIsOpen(false)}>Accueil</a>
					</li>
					<li>
						<a href="" onClick={() => setIsOpen(false)}>À propos</a>
					</li>
					<li>
						<a href="" onClick={() => setIsOpen(false)}>Contact</a>
					</li>
				</ul>
				<button className={"cta-download dropdown"} onClick={() => setIsOpen(false)}>
					Télécharger Astroshare
				</button>
			</nav>
			<button className={"cta-download"}>Téléchargez Astroshare</button>
		</div>
	);
};

export default Navbar;
