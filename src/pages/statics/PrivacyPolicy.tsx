import '../../styles/pages/statics/privacy-policy.scss';

const tocItems = [
  { id: 'responsable', label: 'Responsable du traitement' },
  { id: 'donnees', label: 'Données collectées' },
  { id: 'finalites', label: 'Finalités & bases légales' },
  { id: 'destinataires', label: 'Destinataires' },
  { id: 'transferts', label: 'Transferts hors UE' },
  { id: 'conservation', label: 'Durées de conservation' },
  { id: 'securite', label: 'Sécurité' },
  { id: 'mineurs', label: 'Mineurs' },
  { id: 'droits', label: 'Vos droits & CNIL' },
  { id: 'cookies', label: 'Cookies / SDK analytics' },
  { id: 'modifs', label: 'Modifications' },
  { id: 'contact', label: 'Contact' },
];

const lastUpdated = '02/10/2025';

export const PrivacyPolicy = () => {
  return (
    <div id="privacy-policy" className="static-page">
      <header className="policy-hero">
        <p className="policy-kicker">Informations légales</p>
        <h1>Politique de confidentialité</h1>
        <p className="policy-meta">Dernière mise à jour : {lastUpdated}</p>
        <nav className="policy-toc" aria-label="Sommaire">
          <p className="policy-toc-title">Sommaire</p>
          <ul className="policy-toc-list">
            {tocItems.map((item) => (
              <li key={item.id} className="policy-toc-item">
                <a className="policy-toc-link" href={`#${item.id}`}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="policy-content">
        <section id="responsable" className="policy-section">
          <h2>1. Responsable du traitement</h2>
          <dl className="policy-definition-list">
            <div className="policy-definition">
              <dt>Éditeur</dt>
              <dd>
                <strong>Enzo Avagliano</strong>
              </dd>
            </div>
            <div className="policy-definition">
              <dt>Contact</dt>
              <dd>
                <a href="mailto:contact@astroshare.fr">contact@astroshare.fr</a>
              </dd>
            </div>
            <div className="policy-definition">
              <dt>Application</dt>
              <dd>Astroshare (application mobile)</dd>
            </div>
          </dl>
        </section>

        <section id="donnees" className="policy-section">
          <h2>2. Données collectées</h2>
          <h3>Données collectées automatiquement</h3>
          <ul>
            <li>
              <strong>Localisation géographique précise</strong> indispensable au fonctionnement des
              calculs astronomiques.
            </li>
            <li>Localisation approximative.</li>
            <li>
              <strong>Données d'usage anonymisées</strong> : parcours agrégés, fréquence d'utilisation,
              écrans consultés, fonctionnalités utilisées.
            </li>
          </ul>

          <h3>Données fournies manuellement</h3>
          <ul>
            <li>Nom, prénom (si fournis).</li>
            <li>Adresse e-mail (support, newsletter).</li>
            <li>Adresses de lieux d'observation enregistrés dans l'application.</li>
          </ul>

          <p>
            Collecte via formulaires (contact, support), enregistrement de lieux et paramètres de
            l'appareil (autorisation de localisation).
          </p>
        </section>

        <section id="finalites" className="policy-section">
          <h2>3. Finalités &amp; bases légales</h2>
          <ul>
            <li>
              <strong>Fourniture des fonctionnalités</strong> de l'application (calculs astronomiques,
              services associés) - <em>Base légale : exécution du contrat</em>.
            </li>
            <li>
              <strong>Localisation précise</strong> indispensable au fonctionnement - <em>Base légale :
              consentement explicite</em> donné au premier lancement.
            </li>
            <li>
              <strong>Support &amp; assistance</strong> (réponse à vos demandes) - <em>Base légale : intérêt
              légitime</em>.
            </li>
            <li>
              <strong>Newsletters / informations</strong> si vous y avez consenti - <em>Base légale :
              consentement</em> (retirable à tout moment).
            </li>
            <li>
              <strong>Mesure d'audience et amélioration du produit</strong> via trackers anonymisés -
              <em>Base légale : intérêt légitime</em>. Ces données ne sont ni revendues ni utilisées à des
              fins publicitaires.
            </li>
            <li>
              <strong>Obligations légales</strong> (facturation, comptabilité) - <em>Base légale :
              obligation légale</em>.
            </li>
          </ul>
        </section>

        <section id="destinataires" className="policy-section">
          <h2>4. Destinataires &amp; sous-traitants</h2>
          <p>
            Accès limité aux personnes habilitées au sein d'Astroshare. Des prestataires agissant pour
            notre compte peuvent traiter certaines données (hébergement, e-mailing, mesure d'audience).
            Ils sont soumis à des obligations contractuelles strictes et n'agissent que sur instruction.
          </p>
          <p>
            <strong>Paiements :</strong> les transactions sont gérées par <strong>Stripe</strong>. Aucune
            coordonnée bancaire n'est stockée dans l'application.
          </p>
        </section>

        <section id="transferts" className="policy-section">
          <h2>5. Transferts hors Union européenne</h2>
          <p>
            En cas de transferts hors UE/EEE, des garanties appropriées sont mises en place (clauses
            contractuelles types de la Commission européenne, certifications ou pays reconnus adéquats).
          </p>
        </section>

        <section id="conservation" className="policy-section">
          <h2>6. Durées de conservation</h2>
          <ul>
            <li>Données de compte / support : durée nécessaire au traitement puis archivage légal.</li>
            <li>Localisation : conservée uniquement le temps nécessaire au calcul et au service rendu.</li>
            <li>Analyses d'usage anonymisées : durées techniques nécessaires à l'analyse statistique.</li>
            <li>Facturation (si applicable) : durée légale de conservation comptable.</li>
          </ul>
        </section>

        <section id="securite" className="policy-section">
          <h2>7. Sécurité</h2>
          <p>
            Mesures techniques et organisationnelles appliquées : chiffrement TLS en transit, contrôle
            d'accès restreint, principe de minimisation, journalisation. Aucun système n'est toutefois
            entièrement invulnérable.
          </p>
        </section>

        <section id="mineurs" className="policy-section">
          <h2>8. Mineurs</h2>
          <p>
            L'application n'est pas destinée aux personnes de moins de <strong>15 ans</strong> sans
            consentement d'un représentant légal. En cas de doute ou de signalement, nous pouvons
            supprimer les données concernées.
          </p>
        </section>

        <section id="droits" className="policy-section">
          <h2>9. Vos droits (RGPD) &amp; réclamations CNIL</h2>
          <p>
            Vous disposez des droits d'<strong>accès</strong>, de <strong>rectification</strong>,
            d'<strong>effacement</strong>, de <strong>limitation</strong>, de <strong>portabilité</strong> et
            d'<strong>opposition</strong> pour les traitements fondés sur l'intérêt légitime ou le
            consentement (retirable à tout moment).
          </p>
          <p>
            Pour exercer vos droits :{' '}
            <a href="mailto:contact@astroshare.fr">contact@astroshare.fr</a>.
          </p>
          <p>
            Vous pouvez également déposer une réclamation auprès de la{' '}
            <a href="https://www.cnil.fr">CNIL</a>.
          </p>
          <p>
            Suppression et/ou réinitialisation de compte :{' '}
            <a href="mailto:contact@astroshare.fr">contact@astroshare.fr</a>.
          </p>
        </section>

        <section id="cookies" className="policy-section">
          <h2>10. Cookies / SDK analytics</h2>
          <p>
            L'application peut intégrer des SDK de mesure d'audience <strong>anonymisés</strong> (parcours
            agrégés, écrans consultés, fréquence d'usage) dédiés à l'amélioration continue. Aucune revente
            ni exploitation publicitaire. Certains consentements peuvent être ajustés dans les réglages de
            votre appareil.
          </p>
        </section>

        <section id="modifs" className="policy-section">
          <h2>11. Modifications de la politique</h2>
          <p>
            La politique peut être mise à jour pour refléter des évolutions légales ou techniques. En cas
            de changement significatif, une information pourra être affichée dans l'application ou envoyée
            par e-mail.
          </p>
        </section>

        <section id="contact" className="policy-section">
          <h2>12. Contact</h2>
          <p>
            Questions, droits, réclamations :{' '}
            <a href="mailto:contact@astroshare.fr">contact@astroshare.fr</a>.
          </p>
        </section>
      </main>

      <footer className="policy-footer">
        <hr className="policy-divider" />
        <p className="policy-meta">
          Éditeur : Enzo Avagliano - Contact :{' '}
          <a href="mailto:contact@astroshare.fr">contact@astroshare.fr</a>
        </p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
