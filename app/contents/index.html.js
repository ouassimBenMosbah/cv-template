var dateformat = require('dateformat');

var date = dateformat(new Date(), 'dd/mm/yyyy');

module.exports = {
  document: {
    title: 'Ouassim BEN MOSBAH',
  },
  header: {
    github: {
      caption: `github.com/ouassimBenMosbah`,
      link: 'https://github.com/ouassimBenMosbah',
    },
  },
  contact: {
    title: 'Contact',
    item1: {
      class: 'icon--phone',
      data: '06 26 74 08 55',
    },
    item2: {
      class: 'icon--email',
      data:
        '<a href="mailto:ouassim.benmosbah@gmail.com?subject=Recrutement">ouassim.benmosbah@gmail.com</a>',
    },
    item3: {
      class: 'icon--github-logo',
      data: `<a href="https://github.com/ouassimBenMosbah" target="_blank">github.com/ouassimBenMosbah</a>`,
    },
    item4: {
      class: 'icon--linkedin',
      data: `<a href="https://www.linkedin.com/in/ouassim-ben-mosbah/" target="_blank">linkedin.com/in/ouassim-ben-mosbah/</a>`,
    },
  },
  skill: {
    title: 'Compétences',
    data: {
      skill1: {
        title: `Programmation`,
        labels: `Angular 2+, NestJS, Node.js, Sequelize, TypeORM, Typescript, Ngrx, Ag-grid`,
      },
      skill2: {
        title: `Gestion de projet`,
        labels: `Méthodes agiles, jira, trello`,
      },
      skill3: {
        title: `Soft skills`,
        labels: `Capacité d'intégration, Force de proposition, Gestion d'équipe, Formation des collaborateurs`,
      },
    },
  },
  lang: {
    title: 'Langues',
    data: {
      lang1: {
        caption: 'Français',
        level: 'Langue maternelle',
      },
      lang2: {
        caption: 'Anglais',
        level: 'C1, TOEIC (930/990)',
      },
      lang3: {
        caption: 'Arabe',
        level: 'Langue maternelle',
      },
    },
  },
  interests: {
    title: "Centres d'intêrets",
    data: {
      interest1: {
        caption: 'Voyages',
      },
      interest2: {
        caption: 'Sport',
      },
      interest3: {
        caption: 'Nouvelles technologies',
      },
    },
  },
  aboutMe: {
    firstName: 'Ouassim',
    lastName: 'Ben Mosbah',
    position: 'Développeur fullstack',
  },
  experience: {
    title: 'Expérience',
    item1: {
      period: {
        start: 2018,
        end: 'Auj.',
      },
      location: 'Lyon, France',
      firm: 'CELLANCE',
      position: 'Développeur full stack',
      summary: `- Développements d'applications web. Participation aux processus de définition des besoins fonctionnels et des choix technologiques des applications.<br/><br/>
      - Participation active auprès des clients. Formation technique d'équipe. Aide à la gestion de l'équipe en préparant les sprints, le backlog, les revues de sprints et les entretiens d'embauches.<br/><br/>
      <b>Technologies utilisés:</b> <i>Angular 2+, Typescript, ngrx, Material, Cypress, Ag-grid, Nest, Node.js, Sequelize, TypeORM, MySQL, passport</i>`,
    },
    item2: {
      period: {
        start: '02/2018',
        end: '08/2018',
      },
      location: 'Lyon, France',
      firm: 'CELLANCE',
      position: 'Stage développeur web',
      summary: `- Développement d'applications de gestion de projets immobiliers et de logistique pour une entreprise d'entreposage<br/><br/>
      - Travail en méthode agile<br/><br/>
      <b>Technologies utilisés:</b> <i>Angular 2+, Typescript, ngrx, Material, Node.js, Sequelize, MySQL</i>`,
    },
    item3: {
      period: {
        start: '06/2017',
        end: '07/2017',
      },
      location: 'Montpellier, France',
      firm: 'LIRMM',
      position: 'Stage développeur',
      summary: `Conception et développement d’une interface de saisie des spécifications et génération automatique de la documentation.<br/><br/>
      <b>Technologies utilisés:</b> <i>Java, VBA</i>`,
    },
  },
  education: {
    title: 'Formation',
    item1: {
      period: {
        start: 2014,
        end: 2018,
      },
      location: 'Montpellier, France',
      school: 'Polytech Montpellier',
      degree: 'Ingénieur en informatique et gestion',
      summary: null,
    },
    item2: {
      period: {
        start: 2017,
        end: 2018,
      },
      location: 'Montpellier, France',
      school: 'Université de Montpellier',
      degree: 'Master en système d’information économique et financier',
      summary: null,
    },
    item3: {
      period: {
        start: 2012,
        end: 2014,
      },
      location: 'Nice, France',
      school: 'Université de Nice Sophia Antipolis',
      degree: 'Licence en informatique',
      summary: null,
    },
    item4: {
      period: {
        start: 2011,
        end: 2012,
      },
      location: 'Tunis, Tunisie',
      school: 'Lycée français Pierre Mendès France',
      degree: 'Baccalauréat scientifique',
      summary: null,
    },
  },
  project: {
    title: 'Projets',
    item1: {
      name: 'Short reckonings (tricount like)',
      summary: `
          <b><i>Angular 2+, Typescript, Algorithmique</i></b>
        `,
    },
    item2: {
      name: 'SMS analysis',
      summary: `
          <b><i>Python 3, Natural Processing Language (NPL), Sentiment analysis</i></b>
      `,
    },
    item3: {
      name: 'Prello (trello like)',
      summary: `
          <b><i>React, OAuth2, Node, Express, MongoDB</i></b>
      `,
    },
  },
};
