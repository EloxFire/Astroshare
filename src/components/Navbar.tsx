import { routes } from '../helpers/routes';
import { urls } from '../helpers/constants/urls';
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
				<a className={"cta-download dropdown"} target='_blank' rel="noopener noreferrer" href={urls.playstore}>
					Télécharger Astroshare
				</a>
			</nav>
			<a className={"cta-download"} target='_blank' rel="noopener noreferrer" href={urls.playstore}>Téléchargez Astroshare</a>
		</div>
	);
};

export default Navbar;
