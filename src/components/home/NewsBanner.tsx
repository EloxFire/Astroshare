import React from 'react';
import '../../styles/components/home/newsBanner.scss'

function NewsBanner() {
  return (
    <div className={"news-banner"}>
      <p className="short-text">Astroshare est disponible sur Android 🚀 <a href="https://play.google.com/store/apps/details?id=fr.eavagliano.astroshare&hl=fr" target={'_blank'} rel={"noreferrer"}>Téléchargez dès maintenant !</a></p>
      <p className="long-text">News : L'application Astroshare est disonible sur Android 🚀 <a href="https://play.google.com/store/apps/details?id=fr.eavagliano.astroshare&hl=fr" target={'_blank'} rel={"noreferrer"}>Téléchargez dès maintenant !</a></p>
      <a href="/application-mobile">Plus d'infos</a>
    </div>
  );
}

export default NewsBanner;