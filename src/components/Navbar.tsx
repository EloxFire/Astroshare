import '../styles/components/navbar.scss';

const Navbar = () => {
	return (
		<div id={"navbar"}>
			<p className={"title"}>Astroshare</p>
			<nav className={"links"}>
				<ul>
					<li>
						<a href="">Accueil</a>
					</li>
					<li>
						<a href="">À propos</a>
					</li>
					<li>
						<a href="">Contact</a>
					</li>
				</ul>
			</nav>
			<button className={"cta-download"}>Télécharger Astroshare</button>
		</div>
	);
};

export default Navbar;
