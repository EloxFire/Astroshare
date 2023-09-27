export const routes = {
  home: {
    path: '/',
    label: 'Accueil',
  },
  about: {
    path: '/a-propos',
    label: 'À propos',
  },
  gallery: {
    path: '/gallerie',
    label: 'Gallerie',
  },
  hub: {
    path: '/ressources',
    label: 'Ressources',
  },
  ressources_category: {
    path: '/ressources/:category',
    label: 'Categorie',
  },
  ressource: {
    path: '/ressources/:category/:ressource_name',
    label: 'Ressource',
  },
  contact: {
    path: '/contact',
    label: 'Contact',
  },
  privacy: {
    path: '/politique-de-confidentialite',
    label: 'Politique de confidentialité',
  },
  notFound: {
    path: '*',
    label: '404',
  }
}