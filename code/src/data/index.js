export const ossProjects = [
  {
    key: 'sandeepjangity.co',
    tech: 'React SPA',
    description: [
      'production-grade deploy',
      'material-ui',
      'styled-components',
      'jss',
    ],
    buttonText: 'Code',
    buttonVariant: 'outlined',
    link: 'https://github.com/sjangity/sandeepjangity.co',
  },
  {
    key: 'letseatsoftware.com',
    tech: 'React SSG',
    description: ['Headless CMS', 'GraphQL', 'MongoDB'],
    buttonText: 'Code',
    buttonVariant: 'outlined',
    link: 'https://github.com/sjangity/letseatsoftware.com',
  },
  {
    key: 'fastrouteapp.com',
    tech: 'iOS Swift',
    description: ['Objective-C to Swift Migration'],
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
  build: ['es6', 'react', 'materialui', 'sketchapp', 'styledcomp', 'webpack'],
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
    objective: 'AMP / React Componetns / Custom JS',
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
    code: 'https://github.com/sjangity/sandeepjangity.co',
    objective: 'AMP / React Componetns / Custom JS',
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
    objective: 'AMP / React Componetns / Custom JS',
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
    objective: 'AMP / React Componetns / Custom JS',
    title: 'ios Objective-C Native Client with Full-Web UI Integration',
    highlights: ['test2'],
    architecture: {
      ...stockReactArch,
      build: ['lamp', 'swift'],
      test: [],
    },

    stack: ['react', ''],
  },
];
