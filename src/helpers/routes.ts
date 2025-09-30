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
    navbarVisible: false,
    sections: {}
  },
  contact: {
    path: '/contact',
    label: 'Contact',
    navbarVisible: true,
    sections: {}
  },
  playstore: {
    path: 'https://play.google.com/store/apps/details?id=com.astroshare.app',
    label: 'Play Store',
    navbarVisible: false,
    sections: {}
  }
}
