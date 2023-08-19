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
  ressources: {
    path: '/ressources/:ressource_name',
    label: 'Ressources',
  },
  contact: {
    path: '/contact',
    label: 'Contact',
  },
  notFound: {
    path: '*',
    label: '404',
  }
}