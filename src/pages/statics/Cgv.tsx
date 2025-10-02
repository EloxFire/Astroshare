import '../../styles/pages/statics/cgv.scss';

const tocItems = [
  { id: 'preambule', label: 'Préambule' },
  { id: 'services', label: 'Services & Tarifs' },
  { id: 'localisation', label: 'Localisation & Fonctionnement' },
  { id: 'commande-paiement', label: 'Commande & Paiement' },
  { id: 'retractation', label: 'Droit de rétractation' },
  { id: 'resiliation', label: 'Résiliation' },
  { id: 'propriete', label: 'Propriété intellectuelle' },
  { id: 'donnees', label: 'Données personnelles' },
  { id: 'droit', label: 'Droit applicable' },
  { id: 'contact', label: 'Contact' },
];

const lastUpdated = '02/10/2025';

export const Cgv = () => {
  return (
    <div id="cgv" className="static-page">
      <header className="cgv-hero">
        <p className="cgv-kicker">Informations légales</p>
        <h1>Conditions Générales de Vente (CGV)</h1>
        <p className="cgv-meta">Dernière mise à jour : {lastUpdated}</p>
        <nav className="cgv-toc" aria-label="Sommaire">
          <p className="cgv-toc-title">Sommaire</p>
          <ul className="cgv-toc-list">
            {tocItems.map((item) => (
              <li key={item.id} className="cgv-toc-item">
                <a className="cgv-toc-link" href={`#${item.id}`}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="cgv-content">
        <section id="preambule" className="cgv-section">
          <h2>1. Préambule</h2>
          <p>
            L’application mobile <strong>Astroshare</strong> (ci-après « l’Application ») est éditée par
            <strong>Enzo Avagliano</strong>, entreprise individuelle, immatriculée au RCS d’Aix-en-Provence
            sous le n° 891 226 573, dont le siège social est situé 36 rue Mignet, 13100 Aix-en-Provence.
          </p>
          <p>
            Les présentes CGV ont pour objet de définir les modalités d’achat et d’utilisation des
            services payants proposés au sein de l’Application. Le téléchargement de l’Application est
            gratuit et sans obligation d’achat ni d’inscription.
          </p>
        </section>

        <section id="services" className="cgv-section">
          <h2>2. Services &amp; Tarifs</h2>
          <p>Astroshare propose un accès gratuit et des fonctionnalités supplémentaires payantes :</p>
          <ul>
            <li>
              <strong>Abonnement mensuel</strong> : 2,49 € / mois, sans engagement, renouvelé
              automatiquement chaque mois.
            </li>
            <li>
              <strong>Abonnement annuel</strong> : 23,90 € / an, réglé en une seule fois, renouvelé
              automatiquement chaque année.
            </li>
            <li>
              <strong>Achat unique (licence à vie)</strong> : 119 €, paiement en une fois, donnant accès
              définitif aux fonctionnalités premium ainsi qu’à toutes les mises à jour futures de
              l’application.
            </li>
          </ul>
          <p>
            Les prix sont indiqués en euros, toutes taxes comprises le cas échéant. Les éventuelles
            promotions ou périodes d’essai seront précisées au moment de la commande.
          </p>
        </section>

        <section id="localisation" className="cgv-section">
          <h2>3. Localisation &amp; Fonctionnement</h2>
          <p>
            Les calculs astronomiques de l’Application nécessitent l’accès à votre
            <strong>localisation géographique précise</strong>. Lors du premier lancement, vous êtes invité
            à autoriser cet accès. <strong>Sans cette autorisation, certaines fonctionnalités essentielles
            ne peuvent pas fonctionner</strong>.
          </p>
        </section>

        <section id="commande-paiement" className="cgv-section">
          <h2>4. Commande &amp; Paiement</h2>
          <p>
            Les achats sont réalisés directement au sein de l’Application via la solution de paiement
            sécurisée <strong>Stripe</strong>. En souscrivant à un abonnement, vous autorisez le prélèvement
            automatique à chaque échéance (mensuelle ou annuelle) jusqu’à résiliation.
          </p>
          <p>
            Vous pouvez résilier à tout moment selon l’article <a href="#resiliation">6</a>. La résiliation
            prend effet à la fin de la période de facturation en cours ; aucun remboursement partiel au
            prorata n’est effectué. En cas d’impayé, les droits associés aux fonctionnalités premium sont
            <strong>révoqués à l’issue de la période en cours</strong>.
          </p>
        </section>

        <section id="retractation" className="cgv-section">
          <h2>5. Droit de rétractation</h2>
          <p>
            Conformément à l’article L221-28 du Code de la consommation, le droit de rétractation ne
            s’applique pas aux contenus numériques fournis sur un support immatériel lorsque l’exécution a
            commencé après votre accord préalable exprès et renoncement à ce droit. En validant l’achat,
            vous demandez l’exécution immédiate et renoncez à votre droit de rétractation.
          </p>
        </section>

        <section id="resiliation" className="cgv-section">
          <h2>6. Résiliation</h2>
          <p>
            Vous pouvez demander la résiliation de votre abonnement à tout moment en écrivant à :{' '}
            <a href="mailto:contact@astroshare.fr">contact@astroshare.fr</a> (ou via les paramètres du
            compte si disponibles). La résiliation prend effet à la fin de la période de facturation en
            cours. En cas d’annulation ou de fin de paiement, l’accès premium est révoqué à l’issue de la
            période en cours.
          </p>
          <p>
            Demande de suppression et/ou de réinitialisation de compte :{' '}
            <a href="mailto:contact@astroshare.fr">contact@astroshare.fr</a>.
          </p>
        </section>

        <section id="propriete" className="cgv-section">
          <h2>7. Propriété intellectuelle</h2>
          <p>
            L’ensemble des éléments de l’Application (textes, marques, logos, illustrations, contenus
            pédagogiques, interfaces, etc.) est protégé par le droit de la propriété intellectuelle et
            demeure la propriété d’Astroshare ou de ses ayants droit. Toute reproduction ou représentation,
            totale ou partielle, sans autorisation est interdite.
          </p>
        </section>

        <section id="donnees" className="cgv-section">
          <h2>8. Données personnelles &amp; Analytics</h2>
          <p>
            Astroshare utilise des outils de suivi <strong>anonymisés</strong> (parcours agrégés, fréquence
            d’usage, tendances) afin d’améliorer l’expérience et prioriser les fonctionnalités.
            <strong>Aucune donnée n’est revendue ni utilisée à des fins publicitaires</strong>. Pour plus
            d’informations, consultez notre <a href="/politique-confidentialite.html">Politique de
            confidentialité</a>.
          </p>
        </section>

        <section id="droit" className="cgv-section">
          <h2>9. Droit applicable &amp; Juridiction</h2>
          <p>
            Les présentes CGV sont régies par le droit français. Tout litige sera soumis aux tribunaux
            compétents du ressort du <strong>Tribunal de Commerce d’Aix-en-Provence</strong>, sous réserve
            des dispositions légales impératives.
          </p>
        </section>

        <section id="contact" className="cgv-section">
          <h2>10. Contact</h2>
          <p>
            Pour toute question, demande de résiliation ou assistance :{' '}
            <a href="mailto:contact@astroshare.fr">contact@astroshare.fr</a>
          </p>
        </section>
      </main>

      <footer className="cgv-footer">
        <hr className="cgv-divider" />
        <p className="cgv-meta">
          Éditeur : Enzo Avagliano – 36 rue Mignet, 13100 Aix-en-Provence – RCS Aix-en-Provence : 891 226
          573
        </p>
      </footer>
    </div>
  );
};

export default Cgv;
