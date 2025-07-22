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
      stack: 'Base de données',
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
      title: "ERP interne & Odoo",
      company: "sparkmodel",
      description: "Développement fullstack d’un ERP interne et travail sur Odoo pour la gestion commerciale et logistique.",
      skillIds: ['angular', 'django', 'postgres', 'odoo', 'git'],
      years: "2023 - 2024"
    },
    {
      title: "Milezimweb",
      company: "sparkmodel",
      description: "Création d’un site web de vente de vin avec filtres dynamiques (Angular)...",
      skillIds: ['angular', 'django', 'postgres', 'odoo', 'git'],
      years: "2024"
    },
    {
      title: "Projet ONG environnementale",
      company: "ONG locale",
      description: "Plateforme de suivi de projet, gestion budgétaire et suivi-évaluation...",
      skillIds: ['angular', 'django', 'postgres', 'odoo', 'git'],
      years: "2025"
    },
    {
      title: "Jeu Monopoly Madagascar",
      company: "Personnel",
      description: "Adaptation géographique du jeu Monopoly avec des villes malgaches...",
      skillIds: ['angular', 'django', 'postgres', 'odoo', 'git'],
      years: "2025"
    },
    {
      title: "Gestion documents administratives",
      company: "madauto",
      description: "Gestion des documents administratifs et des processus internes.",
      skillIds: ['php', 'codeigniter', 'mysql'],
      years: "2025"
    }
  ],

  parcours: [
    {
      id: 'sparkmodel',
      poste: 'Dev Fullstack',
      company: 'Sparkmodel',
      years: '2023 - present',
      duration: '2 ans',
      description: 'Une company specialise en conception et production des voitures miniature de collection',
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
      poste: 'Dev Fullstack + assistance IT',
      company: 'Madagascar Automobile',
      years: '2022',
      duration: '1 an',
      description: 'Une concessionaire automobile',
      skillIds: [
        'php',
        'codigniter',
        'postgres',
        'git',
        'network'
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
