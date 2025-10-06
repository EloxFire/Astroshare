import { routes } from '../helpers/routes';
import '../styles/components/footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img
            className="footer-logo"
            src="/images/logos/logo_white.png"
            alt="Logo d'Astroshare"
          />
          <p className="footer-description">
            Astroshare rend l'astronomie plus proche de chacun grâce à des outils modernes,
            pensés pour simplifier l'observation du ciel et réunir la communauté.
          </p>
          <div className="footer-socials">
            <a
              href="https://bsky.app/profile/astroshare.fr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Astroshare sur Bluesky"
            >
              <img
                src="/images/icons/socials/bluesky.svg"
                alt="Logo de Bluesky"
                className="social-icon"
              />
            </a>
            <a
              href="https://www.instagram.com/astroshare_app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Astroshare sur Instagram"
            >
              <img
                src="/images/icons/socials/instagram.svg"
                alt="Logo d'Instagram"
                className="social-icon"
              />
            </a>
          </div>
        </div>

        <div className="footer-columns">
          <div className="footer-column">
            <p className="footer-title">Produit</p>
            <ul className="footer-links">
              <li><a className="footer-link" href={routes.home.sections.features}>Fonctionnalités</a></li>
              <li><a className="footer-link" href={routes.pricing.path}>{routes.pricing.label}</a></li>
              <li><a className="footer-link" target='_blank' href={routes.systemstatus.path}>{routes.systemstatus.label}</a></li>
              {/* <li><a className="footer-link" href="/roadmap">Feuille de route</a></li>
              <li><a className="footer-link" href="/roadmap">Résiliation</a></li> */}
            </ul>
          </div>

          {/* <div className="footer-column">
            <p className="footer-title">Ressources</p>
            <ul className="footer-links">
              <li><a className="footer-link" href="/blog">Blog</a></li>
              <li><a className="footer-link" href="/guides">Nos guides</a></li>
              <li><a className="footer-link" href="/faq">FAQ</a></li>
            </ul>
          </div> */}

          <div className="footer-column">
            <p className="footer-title">Contact</p>
            <p className="footer-description">
              Des questions ? Écrivez-nous, l'équipe vous répond sous 24&nbsp;h.
            </p>
            <a className="footer-link accent" href="mailto:contact@astroshare.com">
              contact@astroshare.com
            </a>
          </div>

          <div className="footer-column">
            <p className="footer-title">Application mobile</p>
            <p className="footer-description">
              Emportez Astroshare partout avec vous et planifiez vos sessions facilement.
            </p>
            <a href={routes.playstore.path} className="store-link" aria-label="Télécharger sur l'App Store" target="_blank" rel="noopener noreferrer">
              <img
                className="store-badge"
                src="/images/google-play-badge.png"
                alt="Télécharger sur Google Play"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-description small">
          © {currentYear} Astroshare. Tous droits réservés.
        </p>
        <div className="legal-links">
          <a className="footer-link" href={routes.cgv.path}>{routes.cgv.label}</a>
          <a className="footer-link" href={routes.privacy.path}>{routes.privacy.label}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
