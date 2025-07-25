export const environment = {
  production: false,

  hardSkills: [
    {
      stack: 'Langages',
      skillIds: [
          'python',
          'typescript',
          'php',
          'javascript',
          'sql'
        ]
    },
    {
      stack: 'Frameworks & Librairies',
      skillIds: [
          'angular',
          'codigniter',
          'flask',
          'nest',
          'bootstrap',
        ]
    },
    {
      stack: 'Base de données / Databases',
      skillIds: [
          'mysql',
          'postgres',
        ]
    },
    {
      stack: 'DevOps / Tools',
      skillIds: [
          'docker',
          'git',
          'odoo',
          'zabbix',
          'glpi',
        ]
    },
    {
      stack: 'Systèmes',
      skillIds: [
          'ubuntu',
          'windows',
        ]
    },
    {
      stack: 'Data Science / Analyse',
      skillIds: [
          'pandas',
          'numpy',
          'python'
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
      title: "Licence Professionnelle - Administration Systèmes et Réseaux",
      etablissement: "Université d’Antananarivo - ESPA",
      years: "2018 - 2021"
    },
    {
      title: "Autoformation en Développement Web et Odoo",
      etablissement: "OpenClassrooms, YouTube, Udemy",
      years: "2021 - Aujourd’hui"
    }
  ],

  projects: [
  {
    title: {
      en: "Internal ERP & Odoo",
      fr: "ERP interne & Odoo"
    },
    description: {
      en: "Collaboration in the fullstack development of an internal ERP, with additional work on Odoo for managing miniature car production.",
      fr: "Participation au développement fullstack d’un ERP interne, avec un travail complémentaire sur Odoo pour la gestion de la production de voitures miniatures."
    },
    more: {
      en: "Development of internal ERP features using Angular frontend and Python Flask backend, along with backend module development for Odoo.",
      fr: "Développement des fonctionnalités de l’ERP interne utilisant Angular en frontend et Python Flask en backend, ainsi que création de modules backend spécifiques pour Odoo."
    },
    skillIds: ['angular', 'python', 'flask', 'rabbitmq', 'pandas', 'numpy', 'postgres', 'odoo', 'git'],
    company: "sparkmodel",
    years: "2023 - 2024",
    link: null
  },
  {
    title: {
      en: "Milezimweb",
      fr: "Milezimweb"
    },
    description: {
      en: "Maintenance and development of a showcase website for miniature cars with dynamic filters (Angular).",
      fr: "Maintenance et développement d’un site vitrine dédié aux voitures miniatures avec filtres dynamiques basés sur Angular."
    },
    more: {
      en: "Creation of the showcase website using Angular (not yet in production).",
      fr: "Conception et développement du site vitrine en Angular (projet non encore en production)."
    },
    skillIds: ['angular', 'postgres', 'git', 'api'],
    company: "sparkmodel",
    years: "2024",
    link: null
  },
  {
    title: {
      en: "schuco.de",
      fr: "schuco.de"
    },
    description: {
      en: "Maintenance and development of a showcase website for miniature cars with dynamic filters (Angular).",
      fr: "Maintenance et optimisation d’un site vitrine de voitures miniatures intégrant des filtres dynamiques via Angular."
    },
    more: {
      en: "Maintenance and optimization of the website.",
      fr: "Supervision de la maintenance et optimisation continue du site web."
    },
    skillIds: ['angular', 'postgres', 'git', 'api'],
    company: "sparkmodel",
    years: "2024",
    link: "https://www.schuco.de/fr/"
  },
  {
    title: {
      en: "sparkmodel.com",
      fr: "sparkmodel.com"
    },
    description: {
      en: "Collaboration in the development of a showcase website for miniature cars with dynamic filters (Angular).",
      fr: "Collaboration au développement et à la maintenance d’un site vitrine pour voitures miniatures avec filtres dynamiques Angular."
    },
    more: {
      en: "Maintenance and optimization of the website.",
      fr: "Optimisation et maintenance régulière du site."
    },
    skillIds: ['angular', 'postgres', 'git'],
    company: "sparkmodel",
    years: "2024",
    link: "https://www.sparkmodel.com/fr/"
  },
  {
    title: {
      en: "Environmental NGO Project",
      fr: "Projet ONG environnementale"
    },
    description: {
      en: "Platform for project tracking, budget management and monitoring-evaluation.",
      fr: "Développement d’une plateforme de suivi de projets, incluant gestion budgétaire et suivi-évaluation."
    },
    more: null,
    skillIds: ['angular', 'django', 'postgres', 'odoo', 'git'],
    company: "ONG locale",
    years: "2025",
    link: null
  },
  {
    title: {
      en: "Monopoly Madagascar Game",
      fr: "Jeu Monopoly Madagascar"
    },
    description: {
      en: "Geographical adaptation of the Monopoly game with Malagasy cities.",
      fr: "Création d’une version géographique du jeu Monopoly adaptée aux villes de Madagascar."
    },
    more: null,
    skillIds: ['angular', 'django', 'postgres', 'odoo', 'git'],
    company: "Personnel",
    years: "2025",
    link: null
  },
  {
    title: {
      en: "Administrative Documents Management",
      fr: "Gestion documents administratives"
    },
    description: {
      en: "Management of administrative documents and internal processes.",
      fr: "Développement d’une application web pour la gestion des processus et signatures des documents administratifs internes."
    },
    more: {
      en: "Development of a web application to manage the document signature workflows within the company.",
      fr: "Conception et réalisation d’une solution pour gérer les flux de signature des documents au sein de l’entreprise."
    },
    skillIds: ['php', 'codigniter', 'mysql'],
    company: "madauto",
    years: "2023",
    link: null
  },
  {
    title: {
      en: "Monitoring System Implementation",
      fr: "Mise en place d'un système de monitoring"
    },
    description: {
      en: "Implementation of a monitoring system for servers and applications.",
      fr: "Implémentation d’un système de supervision des serveurs et applications de l’entreprise."
    },
    more: {
      en: "Deployment of ZABBIX and GLPI for IT infrastructure management and monitoring.",
      fr: "Déploiement de ZABBIX et GLPI pour la gestion et la surveillance du parc informatique."
    },
    skillIds: ['glpi', 'zabbix', 'mysql'],
    company: "madauto",
    years: "2022",
    link: null
  }
],

  parcours: [
    {
      id: 'sparkmodel',
      poste: 'Dev Fullstack',
      company: 'Sparkmodel',
      years: '2023 - present',
      duration: '2 ans',
      description: {
        en: "Company specialized in the design and manufacturing of collectible miniature cars.",
        fr: "Entreprise spécialisée dans la conception et la fabrication de voitures miniatures de collection."
      },
      skillIds: [
        'angular',
        'python',
        'rabbitmq',
        'postgres',
        'pandas',
        'numpy',
        'odoo',
        'git'
      ]
    },
    {
      id: 'madauto',
      poste: 'Dev Fullstack & assistance IT',
      company: 'Madagascar Automobile',
      years: '2022',
      duration: '1 an',
      description: {
        en: "Car dealership representing the brands Renault, Nissan, and Honda in Madagascar.",
        fr: "Concessionnaire automobile représentant les marques Renault, Nissan et Honda à Madagascar."
      },
      skillIds: [
        'php',
        'codigniter',
        'postgres',
        'git',
        'network',
        'zabbix',
        'glpi'
      ]
    }
  ],

  allSkills: [
    { 
      id: 'angular', 
      label: 'Angular', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', 
      level: '★★★☆☆'  
    },
    { 
      id: 'python', 
      label: 'Python', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', 
      level: '★★★★☆'  
    },
    { 
      id: 'flask', 
      label: 'Flask', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg', 
      level: '★★★☆☆'  
    },
    { 
      id: 'postgres', 
      label: 'PostgreSQL', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', 
      level: '★★★★☆'  
    },
    { 
      id: 'odoo', 
      label: 'Odoo', 
      logo: 'icons/odoo.png', 
      level: '★★★☆☆'  
    },
    { 
      id: 'git', 
      label: 'Git', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', 
      level: '★★★★☆'  
    },
    { 
      id: 'php', 
      label: 'Php', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', 
      level: '★★★☆☆'  
    },
        { 
      id: 'codigniter', 
      label: 'CodeIgniter', 
      logo: 'icons/CodeIgniter.png', 
      level: '★★★☆☆'  
    },
    { 
      id: 'mysql', 
      label: 'Mysql', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', 
      level: '★★★☆☆'  
    },
    {
      id: 'docker', 
      label: 'Docker', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', 
      level: '★★★★☆'  
    },
    {
      id: 'zabbix', 
      label: 'Zabbix', 
      logo: 'icons/zabbix.svg', 
      level: '★★★☆☆'  
    },
    {
      id: 'glpi', 
      label: 'GLPI', 
      logo: 'icons/glpi.png', 
      level: '★★★☆☆'  
    }
    ,
    {
      id: 'windows', 
      label: 'Windows', 
      logo: 'icons/Windows.png', 
      level: '★★★★☆'  
    },
    {
      id: 'ubuntu', 
      label: 'Ubuntu', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-original.svg', 
      level: '★★★★☆'  
    },
    {
      id: 'pandas', 
      label: 'Pandas', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg', 
      level: '★★★☆☆'  
    },
    {
      id: 'numpy', 
      label: 'Numpy', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg', 
      level: '★★★☆☆'  
    },
    {
      id: 'typescript', 
      label: 'Typescript', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', 
      level: '★★★★☆'  
    },
    {
      id: 'javascript', 
      label: 'JavaScript', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', 
      level: '★★★★☆'  
    },
    {
      id: 'sql', 
      label: 'Sql', 
      logo: 'icons/SQL.png', 
      level: '★★★★☆'  
    },
    {
      id: 'nest', 
      label: 'NestJs', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg', 
      level: '★★★☆☆'  
    },
    {
      id: 'bootstrap', 
      label: 'Bootstrap', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', 
      level: '★★★☆☆'  
    },
    {
      id: 'rabbitmq', 
      label: 'RabbitMq', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg', 
      level: '★★★☆☆'  
    }
  ],
};
