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
    path: '/galerie',
    label: 'Galerie',
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
    path: '/ressources/:category/:ressource_slug',
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
  dahsboard_add_category: {
    path: '/dashboard/add-category',
    label: 'Ajouter une catégorie',
  },
  login: {
    path: '/login',
    label: 'Connexion',
  },
  logout: {
    path: '/',
    label: 'Déconnexion',
  },
  register: {
    path: '/register',
    label: 'Inscription',
  },
  profile: {
    path: '/profile',
    label: 'Profil',
  },
  notFound: {
    path: '*',
    label: '404',
  }
}