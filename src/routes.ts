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
    label: 'Hub d\'outils',
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
    main: {
      path: '/dashboard',
      label: 'Dashboard',
    },
    ressources: {
      add: {
        path: '/dashboard/ressources/add',
        label: 'Ajouter une ressource',
      },
      update: {
        path: '/dashboard/ressources/:ressource_slug',
        label: 'Modifier une ressource',
      },
      list: {
        path: '/dashboard/ressources',
        label: 'Liste des ressources',
      },
    },
    images: {
      add: {
        path: '/dashboard/images/add',
        label: 'Ajouter une image',
      },
    },
    categories: {
      add: {
        path: '/dashboard/categories/add',
        label: 'Créer une catégorie',
      },
    },
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
  },
  mobile_app: {
    about: {
      path: '/application-mobile',
      label: 'Application mobile',
    },
    privacy: {
      path: '/application-mobile/politique-de-confidentialite',
      label: 'Politique de confidentialité',
    },
    download: {
      path: '/application-mobile/telecharger',
      label: 'Télécharger',
    }
  }
}