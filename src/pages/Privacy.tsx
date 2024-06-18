import React, { useEffect } from 'react';
import '../styles/pages/privacy.scss';

export default function Privacy() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="privacy">
      <h1>Politique de confidentialité</h1>
      <p className="text">www.astroshare.fr</p>
      <p className="text">Enzo Avagliano</p>
      <p className="text">Type du site : e-commerce</p>
      <div style={{ marginTop: '5vh' }}>
        <h3>Le but de cette politique de confidentialité</h3>
        <p className="text">Le but de cette politique de confidentialité est d'informer les utilisateurs de notre site des données personnelles que nous recueillerons ainsi que les informations suivantes, le cas échéant :</p>
        <ul>
          <li>Les données personnelles que nous recueillerons</li>
          <li>L’utilisation des données recueillies</li>
          <li>Qui a accès aux données recueillies</li>
          <li>Les droits des utilisateurs du site</li>
          <li>La politique de cookies du site</li>
        </ul>
      </div>
      <div style={{ marginTop: '5vh' }}>
        <h3>Lois applicables</h3>
        <p className="text">Conformément au <i>Règlement général sur la protection des données</i> (RGPD), cette politique de confidentialité est conforme aux règlements suivants.</p>
        <p className="text">Les données à caractère personnel doivent être :</p>
        <ul>
          <li>traitées de manière licite, loyale et transparente au regard de la personne concernée (licéité, loyauté, transparence) ;</li>
          <li>collectées pour des finalités déterminées, explicites et légitimes, et ne pas être traitées ultérieurement d'une manière incompatible avec ces finalités; le traitement ultérieur à des fins archivistiques dans l'intérêt public, à des fins de recherche scientifique ou historique ou à des fins statistiques n'est pas considéré, conformément à l'article 89, paragraphe 1, comme incompatible avec les finalités initiales (limitation des finalités) ;</li>
          <li>adéquates, pertinentes et limitées à ce qui est nécessaire au regard des finalités pour lesquelles elles sont traitées (minimisation des données) ;</li>
          <li>exactes et, si nécessaire, tenues à jour; toutes les mesures raisonnables doivent être prises pour que les données à caractère personnel qui sont inexactes, eu égard aux finalités pour lesquelles elles sont traitées, soient effacées ou rectifiées sans tarder (exactitude) ;</li>
          <li>conservées sous une forme permettant l'identification des personnes concernées pendant une durée n'excédant pas celle nécessaire au regard des finalités pour lesquelles elles sont traitées; les données à caractère personnel peuvent être conservées pour des durées plus longues dans la mesure où elles seront traitées exclusivement à des fins archivistiques dans l'intérêt public, à des fins de recherche scientifique ou historique ou à des fins statistiques conformément à l'article 89, paragraphe 1, pour autant que soient mises en œuvre les mesures techniques et organisationnelles appropriées requises par le règlement afin de garantir les droits et libertés de la personne concernée (limitation de la conservation) ;</li>
          <li>traitées de façon à garantir une sécurité appropriée des données à caractère personnel, y compris la protection contre le traitement non autorisé ou illicite et contre la perte, la destruction ou les dégâts d'origine accidentelle, à l'aide de mesures techniques ou organisationnelles appropriées (intégrité et confidentialité).</li>
        </ul>
        <p className="text" style={{ marginTop: '5vh' }}>Le traitement n'est licite que si, et dans la mesure où, au moins une des conditions suivantes est remplie :</p>
        <ul>
          <li>la personne concernée a consenti au traitement de ses données à caractère personnel pour une ou plusieurs finalités spécifiques ;</li>
          <li>le traitement est nécessaire à l'exécution d'un contrat auquel la personne concernée est partie ou à l'exécution de mesures précontractuelles prises à la demande de celle-ci ;</li>
          <li>le traitement est nécessaire au respect d'une obligation légale à laquelle le responsable du traitement est soumis ;</li>
          <li>le traitement est nécessaire à la sauvegarde des intérêts vitaux de la personne concernée ou d'une autre personne physique ;</li>
          <li>le traitement est nécessaire à l'exécution d'une mission d'intérêt public ou relevant de l'exercice de l'autorité publique dont est investi le responsable du traitement ;</li>
          <li>le traitement est nécessaire aux fins des intérêts légitimes poursuivis par le responsable du traitement ou par un tiers, à moins que ne prévalent les intérêts ou les libertés et droits fondamentaux de la personne concernée qui exigent une protection des données à caractère personnel, notamment lorsque la personne concernée est un enfant.</li>
        </ul>
        <p className="text">Pour les résidents de l’État de Californie, cette politique de confidentialité vise à se conformer à la <i>California Consumer Privacy Act (CCPA)</i>. S’il y a des incohérences entre ce document et la CCPA, la législation de l’État s’appliquera. Si nous constatons des incohérences, nous modifierons notre politique pour nous conformer à la loi pertinente.</p>
      </div>
      <div style={{ marginTop: '5vh' }}>
        <h3>Consentement</h3>
        <p className="text">Les utilisateurs conviennent qu’en utilisant notre site, ils consentent à :</p>
        <ul>
          <li>les conditions énoncées dans la présente politique de confidentialité et</li>
          <li>la collecte, l’utilisation et la conservation des données énumérées dans la présente politique.</li>
        </ul>
      </div>
      <div style={{ marginTop: '5vh' }}>
        <h3>Données personnelles que nous collectons</h3>
        <p className="text">Données collectées automatiquement :</p>
        <p className="text">Nous ne collectons aucune donnée automatiquement sur notre site.</p>
        <p className="text" style={{ marginTop: '2vh' }}>Données recueillies de façon non automatique</p>
        <p className="text">Nous pouvons également collecter les données suivantes lorsque vous effectuez certaines fonctions sur notre site :</p>
        <ul>
          <li>Prénom et nom</li>
          <li>Adresse e-mail</li>
        </ul>
        <p className="text">Ces données peuvent être recueillies au moyen des méthodes suivantes :</p>
        <ul>
          <li>Formulaire de contact</li>
          <li>Téléchargement d'un document</li>
        </ul>
      </div>
      <div style={{ marginTop: '5vh' }}>
        <h3>Comment nous utilisons les données personnelles</h3>
        <p className="text">Les données personnelles recueillies sur notre site seront utilisées uniquement aux fins précisées dans la présente politique ou indiquées sur les pages pertinentes de notre site. Nous n’utiliserons pas vos données au-delà de ce que nous divulguerons.</p>
        <p className="text">Les données que nous recueillons lorsque l’utilisateur exécute certaines fonctions peuvent être utilisées aux fins suivantes :</p>
        <ul>
          <li>Vous envoyer des informations que vous avez demandées</li>
          <li>Vous envoyer des courriels de marketing</li>
          <li>Vous envoyer une newsletter</li>
        </ul>
      </div>
      <div style={{ marginTop: '5vh' }}>
        <h3>Avec qui nous partageons les données personnelles</h3>
        <strong>Employés</strong>
        <p className="text">Nous pouvons divulguer à tout membre de notre organisation les données utilisateur dont il a raisonnablement besoin pour réaliser les objectifs énoncés dans la présente politique.</p>
        <strong>Tièrces parties</strong>
        <p className="text">Nous pouvons divulguer les données personnelles à des tiers dans les circonstances suivantes :</p>
        <p className="text">Les tiers ne seront pas en mesure d’accéder aux données des utilisateurs au-delà de ce qui est raisonnablement nécessaire pour atteindre l’objectif donné.</p>
        <strong>Autres divulgations</strong>
        <p className="text">Nous nous engageons à ne pas vendre ou partager vos données avec des tiers, sauf dans les cas suivants :</p>
        <ul>
          <li>si la loi l'exige</li>
          <li>si elle est requise pour toute procédure judiciaire</li>
          <li>pour prouver ou protéger nos droits légaux</li>
          <li>à des acheteurs ou des acheteurs potentiels de cette société dans le cas où nous cherchons à la vendre</li>
        </ul>
        <p className="text">Si vous suivez des hyperliens de notre site vers un autre site, veuillez noter que nous ne sommes pas responsables et n’avons pas de contrôle sur leurs politiques et pratiques de confidentialité.</p>
        <strong>Combien de temps nous stockons les données personnelles</strong>
        <p className="text">Nous ne conservons pas les données des utilisateurs au-delà de ce qui est nécessaire pour atteindre les fins pour lesquelles elles sont recueillies.</p>
        <strong>Comment nous protégeons vos données personnelles</strong>
        <p className="text">Afin d’assurer la protection de votre sécurité, Astroshare utilise le protocole de sécurité de la couche transport pour transmettre des renseignements personnels dans notre système.</p>
        <p className="text">Toutes les données stockées dans notre système sont bien sécurisées et ne sont accessibles qu’à nos employés. Nos employés sont liés par des accords de confidentialité stricts et une violation de cet accord entraînerait le licenciement de l'employé.</p>
        <p className="text">Alors que nous prenons toutes les précautions raisonnables pour nous assurer que nos données d’utilisateur sont sécurisées et que les utilisateurs sont protégés, il reste toujours du risque de préjudice. L’Internet en sa totalité peut être, parfois, peu sûr et donc nous sommes incapables de garantir la sécurité des données des utilisateurs au-delà de ce qui est raisonnablement pratique.</p>
        <strong>Mineurs</strong>
        <p className="text">Le RGPD précise que les personnes de moins de 15 ans sont considérées comme des mineurs aux fins de la collecte de données. Les mineurs doivent avoir le consentement d’un représentant légal pour que leurs données soient recueillies, traitées et utilisées.</p>
        <strong>Vos droits en tant qu’utilisateur</strong>
        <p className="text">En vertu du RGPD, les utilisateurs ont les droits suivants en tant que personnes concernées :</p>
        <ul>
          <li>droit d’accès</li>
          <li>droit de rectification</li>
          <li>droit à l’effacement</li>
          <li>droit de restreindre le traitement</li>
          <li>droit à la portabilité des données</li>
          <li>droit d’objection</li>
        </ul>
        <p className="text">Vous trouverez de plus amples informations sur ces droits au chapitre 3 (art. 12-23) du RGPD.</p>
        <strong>Comment modifier, supprimer ou contester les données recueillies</strong>
        <p className="text">Si vous souhaitez que vos renseignements soient supprimés ou modifiés d’une façon ou d’une autre, veuillez communiquer avec notre agent de protection de la vie privée ici :</p>
        <p className="text">Enzo Avagliano</p>
        <a href="mailto:contact@astroshare.fr">contact@astroshare.fr</a>
        <div style={{ marginTop: '2vh' }}>
          <strong>Modifications</strong>
          <p className="text">Cette politique de confidentialité peut être modifiée à l’occasion afin de maintenir la conformité avec la loi et de tenir compte de tout changement à notre processus de collecte de données. Nous recommandons à nos utilisateurs de vérifier notre politique de temps à autre pour s’assurer qu’ils soient informés de toute mise à jour. Au besoin, nous pouvons informer les utilisateurs par courriel des changements apportés à cette politique.</p>
          <strong>Contact</strong>
          <p className="text">Si vous avez des questions à nous poser, n’hésitez pas à nous contacter en utilisant ce qui suit :</p>
          <a href="mailto:contact@astroshare.fr">contact@astroshare.fr</a>
        </div>
      </div>
      <div style={{ marginTop: '5vh' }}>
        <p className="text"><i>Date d'entrée en vigeur :</i> le 1 septembre 2023</p>
      </div>
    </div>
  )
}
