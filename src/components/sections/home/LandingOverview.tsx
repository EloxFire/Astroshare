import { routes } from '../../../helpers/routes';
import '../../../styles/components/sections/landingOverview.scss';
import { SimpleButton } from '../../buttons/SimpleButton';

export const LandingOverview = () => {

  return (
    <div className="landing-overview-container">
      <div className="loc-left">
        <h2>L'astronomie <span>sans contraintes</span></h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <p className='loc-description'>Fini les installations multiples : Astroshare réunit en une seule application tout ce dont vous avez besoin pour explorer le ciel.</p>
          <p className='loc-description'>Suivez les satellites et les phénomènes célestes, consultez la météo en direct, accédez aux actualités du ciel et préparez vos nuits d’observation.</p>
          <p className='loc-description'>Un outil complet, pensé pour simplifier la vie des passionnés comme des curieux.</p>
        </div>

        <div className="loc-cta-container">
          <SimpleButton
            text="Téléchargez l'application"
            href={routes.playstore.path}
            variant="primary"
            icon="/images/icons/play-store-black.png"
            target='_blank'
          />
          <p className="loc-cta-description">Disponible gratuitement, sans publicité ni inscription obligatoire.</p>
        </div>

      </div>
      <div className="loc-right">
        <div className="loc-images-grid">
          <img src="/images/features/cards/1.png" alt="Fonctionnalité : Météo et éphémérides" className='loc-image' />
          <img src="/images/features/cards/2.png" alt="Fonctionnalité : Catalogue d'objets" className='loc-image' />
          <img src="/images/features/cards/3.png" alt="Fonctionnalité : Calendrier lunaire" className='loc-image' />
          <img src="/images/features/cards/4.png" alt="Fonctionnalité : Suivi de satellites ISS et Starlink" className='loc-image' />
          <img src="/images/features/cards/5.png" alt="Fonctionnalité : Calendrier des lancements de fusées" className='loc-image' />
          <img src="/images/features/cards/6.png" alt="Fonctionnalité : Carte du ciel en direct" className='loc-image' />
          <img src="/images/features/cards/7.png" alt="Fonctionnalité : Image du jour de la NASA" className='loc-image' />
          <img src="/images/features/cards/8.png" alt="Fonctionnalité : Calculateur astronomique" className='loc-image' />
          <img src="/images/features/cards/9.png" alt="Fonctionnalité : Calculateur d'éclipses solaires et lunaires" className='loc-image' />
          <img src="/images/features/cards/10.png" alt="Fonctionnalité : Météo solaire avancée" className='loc-image' />
          <img src="/images/features/cards/11.png" alt="Fonctionnalité : Actualités spatiales" className='loc-image' />
          <img src="/images/features/cards/12.png" alt="Fonctionnalité : Et bien plus encore à découvrir !" className='loc-image' />
        </div>
      </div>
    </div>
  )
}
