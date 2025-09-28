import { routes } from '../helpers/routes';
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
					{
						Object.keys(routes).map((key) => {
							return (
								<li key={key}>
									<a href={routes[key as keyof typeof routes].path} onClick={() => setIsOpen(false)}>
										{routes[key as keyof typeof routes].label}
									</a>
								</li>
							)
						})
					}
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
