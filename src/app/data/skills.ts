export interface Technology {
  name: string; 
  level: string; // ex: 90 = 90%
  logo: string;
}

export interface Stack {
  name: string;
  level: string;
  technologies: Technology[];
}

export const STACKS: Stack[] = [
{
    name: 'Backend',
    level: '★★★★☆',
    technologies: [
      {
        name: 'Python',
        level: '★★★★☆',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
      },
      {
        name: 'PHP',
        level: '★★★★☆',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'
      },

      {
        name: 'Node.js',
        level: '★★★☆☆',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
      },
      {
        name: 'CodeIgniter',
        level: '★★★☆☆',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg'
      },
    ]
  },
  {
    name: 'Frontend',
    level: '★★★☆☆',
    technologies: [
      {
        name: 'Angular',
        level: '★★★☆☆',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg'
      },
      {
        name: 'HTML',
        level: '★★★☆☆',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
      },
      {
        name: 'Bootstrap',
        level: '★★★★☆',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'
      },
      {
        name: 'JavaScript',
        level: '★★★★☆',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
      }
    ]
  },
  {
    name: 'DevOps / Tools',
    level: '★★★★☆',
    technologies: [
      {
        name: 'Docker',
        level: '★★★☆☆',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
      },
      {
        name: 'GitHub',
        level: '★★★☆☆',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
      },
      {
        name: 'RabbitMQ',
        level: '★★☆☆☆',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg'
      },
    ]
  },
  {
    name: 'DataBase',
    level: '★★★★☆',
    technologies: [
      {
        name: 'PostgreSQL',
        level: '★★★★☆',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
      },
      {
        name: 'MySQL',
        level: '★★★☆☆',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
      },
    ]
  },
    {
    name: 'Data Science',
    level: '★★★★☆',
    technologies: [
      {
        name: 'Pandas',
        level: '★★★☆☆',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg'
      },
      {
        name: 'Numpy',
        level: '★★★☆☆',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg'
      },
    ]
  }
];