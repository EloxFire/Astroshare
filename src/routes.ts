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
    path: '/hub',
    label: 'Outils',
  },
  ressources: {
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
  weather: {
    path: '/weather',
    label: 'Météo en direct',
  },
  planner: {
    path: 'https://app.astroshare.fr',
    label: 'Planificateur',
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
  dashboard_update_ressource: {
    path: '/dashboard/update-ressource/:ressource_slug',
    label: 'Modifier une ressource',
  },
  dashboard_ressources_list: {
    path: '/dashboard/ressources-list',
    label: 'Liste des ressources',
  },
  dashboard_add_image: {
    path: '/dashboard/add-image',
    label: 'Ajouter une image',
  },
  dahsboard_add_category: {
    path: '/dashboard/add-category',
    label: 'Créer une catégorie',
  },
  mobile_app: {
    path: '/application-mobile',
    label: 'Application mobile',
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