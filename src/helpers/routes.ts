export const routes = {
  home: {
    path: '/',
    label: 'Accueil',
    navbarVisible: true,
    sections: {
      features: '/#fonctionnalités',
    }
  },
  about: {
    path: '/a-propos',
    label: 'À propos',
    navbarVisible: true,
    sections: {}
  },
  pricing: {
    path: '/tarifs',
    label: 'Tarifs',
    navbarVisible: true,
    sections: {}
  },
  contact: {
    path: '/contact',
    label: 'Contact',
    navbarVisible: false,
    sections: {}
  },
  cgv: {
    path: '/cgv',
    label: 'CGV',
    navbarVisible: false,
    sections: {}
  },
  privacy: {
    path: '/politique-de-confidentialite',
    label: 'Politique de confidentialité',
    navbarVisible: false,
    sections: {}
  },
  playstore: {
    path: 'https://play.google.com/store/apps/details?id=fr.eavagliano.astroshare',
    label: 'Play Store',
    navbarVisible: false,
    sections: {}
  }
}
