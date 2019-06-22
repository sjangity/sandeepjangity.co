export const ossProjects = [
  {
    key: 'sandeepjangity.co',
    keyShort: 'sandeepjangity',
    tech: 'React SPA',
    highlights: [
      'modern front-end, production-grade deploy',
      'material-ui',
      'styled-components',
      'CSS-in-JS',
    ],
    buttonText: 'Code',
    buttonVariant: 'outlined',
    link: 'https://github.com/sjangity/sandeepjangity.co',
  },
  {
    key: 'letseatsoftware.com',
    keyShort: 'letseatsoftware',
    tech: 'React SSG',
    highlights: ['Headless CMS', 'GraphQL', 'MongoDB'],
    buttonText: 'Code',
    buttonVariant: 'outlined',
    link: 'https://github.com/sjangity/letseatsoftware.com',
  },
  {
    key: 'fastrouteapp.com',
    keyShort: 'fastrouteapp',
    tech: 'iOS Swift',
    highlights: ['Objective-C to Swift Migration'],
    buttonText: 'Code',
    buttonVariant: 'outlined',
    link: 'https://github.com/sjangity/fastrouteapp-ios',
  },
  // {
  //   title: 'peerflight.com',
  //   tech: 'Native Obj-C Client',
  //   description: ['Web-Mobile Integration'],
  //   buttonText: 'Code',
  //   buttonVariant: 'outlined',
  //   link: 'https://github.com/sjangity/peerflight-ios',
  // },
];

const stockReactArch = {
  build: ['materialui', 'sketchapp', 'es6', 'styledcomp', 'react', 'webpack'],
  test: ['jest-enzyme'],
  deploy: ['nginx', 'linode'],
};

export const projects = [
  {
    key: 'sandeepjangity.co',
    url: 'https://sandeepjangity.co',
    isLive: 1,
    isOpenDefault: 1,
    code: 'https://github.com/sjangity/sandeepjangity.co',
    objective:
      'Non-CRA, production-grade (strict, a11y, webpack, etc.,) personal portfolio webapp as a React SPA deployed on a CentOS/Virtual Private Server.',
    title: 'React SPA',
    highlights: ['test2'],
    architecture: stockReactArch,
    stack: ['react', ''],
  },
  {
    key: 'letseatsoftware.com',
    url: 'https://letseatsoftware.com',
    isLive: 0,
    isOpenDefault: 0,
    code: 'https://github.com/sjangity/letseatsoftware.com',
    objective:
      'CRA-based, production-grade personal blog on React SSG, headless CMS, GraphQL and MongoDB tech.',
    title: 'React SSG, GraphQL Blog',
    highlights: ['test2'],
    architecture: stockReactArch,
    stack: ['react', ''],
  },
  {
    key: 'fastrouteapp.com',
    url: 'https://fastrouteapp.com',
    isLive: 1,
    isOpenDefault: 0,
    code: 'https://github.com/sjangity/sandeepjangity.co',
    objective:
      'App store approved iOS + Swift mobile client for fastrouteapp.com',
    title: 'iOS Swift Native Client',
    highlights: ['test2'],
    architecture: {
      ...stockReactArch,
      build: ['swift'],
      test: [],
    },

    stack: ['react', ''],
  },
  {
    key: 'peerflight.com',
    url: 'https://peerflight.com',
    isLive: 1,
    isOpenDefault: 0,
    code: 'https://github.com/sjangity/sandeepjangity.co',
    objective:
      'App store approved iOS + Objective-C mobile client for peerflight with backend running on LAMP-stack & VPS',
    title: 'ios Objective-C Native Client with Full-Web UI Integration',
    highlights: ['test2'],
    architecture: {
      ...stockReactArch,
      build: ['lamp', 'objc'],
      test: [],
    },

    stack: ['react', ''],
  },
];

export const projectHighlights = (key) => {
  return ossProjects
    .filter((pj) => pj.key === key)
    .map((item) => item.highlights)
    .reduce((acc, arr) => acc.concat.apply([], arr), []);
};

export const myThoughts = [
  {
    id: 'thought1',
    concept: 'On Performance',
    description: 'Does FP Javascript scale better than OOP JS?',
  },
  {
    id: 'thought4',
    concept: 'On Standards',
    description: 'Will Apple ever unlock full web push notifcation support?',
  },
  {
    id: 'thought3',
    concept: 'On Design Thinking',
    description: 'What are the tell-tale signs of GOOD UI design?',
  },
  {
    id: 'thought5',
    concept: 'On Automation',
    description:
      'how do you practice D-R-Y at all stages of product development?',
  },
];
