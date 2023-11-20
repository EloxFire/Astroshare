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
  ressource_details: {
    path: '/ressource_details/:category/:ressource_name',
    label: 'Détails de la ressource',
  },
  ressource: {
    path: '/ressource/:category/:ressource_name',
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
  dashboard: {
    path: '/dashboard',
    label: 'Dashboard',
  },
  dashboard_add_ressource: {
    path: '/dashboard/add-ressource',
    label: 'Ajouter une ressource',
  },
  dashboard_add_image: {
    path: '/dashboard/add-image',
    label: 'Ajouter une image',
  },
  notFound: {
    path: '*',
    label: '404',
  }
}