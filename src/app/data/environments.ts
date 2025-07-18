export const environment = {
  production: false,

  hardSkills: [
    {
      domaine: 'Langages',
      skills: [
        { name: 'Python', niveau: 'avancé', logo: 'assets/logos/python.svg' },
        { name: 'TypeScript', niveau: 'avancé', logo: 'assets/logos/typescript.svg' },
        { name: 'HTML', niveau: 'avancé', logo: 'assets/logos/html5.svg' },
        { name: 'CSS', niveau: 'avancé', logo: 'assets/logos/css3.svg' }
      ]
    },
    {
      domaine: 'Frameworks & Librairies',
      skills: [
        { name: 'Angular', niveau: 'avancé', logo: 'assets/logos/angular.svg' },
        { name: 'Bootstrap', niveau: 'avancé', logo: 'assets/logos/bootstrap.svg' },
        { name: 'Angular Material', niveau: 'avancé', logo: 'assets/logos/angularmaterial.svg' },
        { name: 'Odoo (Framework)', niveau: 'intermédiaire', logo: 'assets/logos/odoo.svg' }
      ]
    },
    {
      domaine: 'Base de données',
      skills: [
        { name: 'PostgreSQL', niveau: 'avancé', logo: 'assets/logos/postgresql.svg' },
        { name: 'Redis', niveau: 'intermédiaire', logo: 'assets/logos/redis.svg' }
      ]
    },
    {
      domaine: 'DevOps / Conteneurisation',
      skills: [
        { name: 'Docker', niveau: 'intermédiaire', logo: 'assets/logos/docker.svg' },
        { name: 'Git', niveau: 'avancé', logo: 'assets/logos/git.svg' }
      ]
    },
    {
      domaine: 'Systèmes',
      skills: [
        { name: 'Linux / WSL', niveau: 'avancé', logo: 'assets/logos/linux.svg' },
        { name: 'Windows Server (de base)', niveau: 'débutant', logo: 'assets/logos/windows.svg' }
      ]
    },
    {
      domaine: 'Data Science / Analyse',
      skills: [
        { name: 'Pandas', niveau: 'débutant', logo: 'assets/logos/pandas.svg' },
        { name: 'Jupyter Notebook', niveau: 'débutant', logo: 'assets/logos/jupyter.svg' }
      ]
    }
  ],

  softSkills: [
    'Polyvalence',
    'Discrétion',
    'Honnêteté',
    'Curiosité',
    'Capacité d’adaptation',
    'Esprit logique',
    'Autonomie',
    'Travail en équipe'
  ],

  formations: [
    {
      titre: "Licence Professionnelle - Administration Systèmes et Réseaux",
      etablissement: "Université d’Antananarivo - ESPA",
      annee: "2018 - 2021"
    },
    {
      titre: "Autoformation en Développement Web et Odoo",
      etablissement: "OpenClassrooms, YouTube, Udemy",
      annee: "2021 - Aujourd’hui"
    }
  ],

  projets: [
    {
      titre: "ERP interne & Odoo (MINIMAD)",
      description: "Développement fullstack d’un ERP interne et travail sur Odoo pour la gestion commerciale et logistique.",
      techno: ['Angular', 'Python', 'PostgreSQL', 'Redis', 'Odoo'],
      annee: "2023 - 2024"
    },
    {
      titre: "Milezimweb",
      description: "Création d’un site web de vente de vin avec filtres dynamiques (Angular), système de filtrage par navigation latérale, grille de produits dynamique.",
      techno: ['Angular', 'Bootstrap', 'TypeScript'],
      annee: "2024"
    },
    {
      titre: "Projet ONG environnementale",
      description: "Plateforme de suivi de projet, gestion budgétaire et suivi-évaluation pour une ONG malgache.",
      techno: ['Angular', 'PostgreSQL', 'Python'],
      annee: "2025"
    },
    {
      titre: "Jeu Monopoly Madagascar",
      description: "Adaptation géographique du jeu Monopoly avec des villes malgaches, cartes 'Sanjila' et 'Fikambanana', billets en Ariary.",
      techno: ['Design UX/UI', 'JS (prototype)'],
      annee: "2025"
    }
  ]
};
