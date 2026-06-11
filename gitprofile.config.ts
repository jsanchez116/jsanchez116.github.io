// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'jsanchez116', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects (Bioinformatics)',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 2, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['jsanchez116/BIOL4810/module02', 'jsanchez116/BIOL4810/module03', 'jsanchez116/BIOL4810/module04', 'jsanchez116/BIOL4810/FinalProject'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'The Effects of Bifidobacterium longum on the Immune System',
          description:
            'A review paper describing the currently known effects of B. longum on the immune system at varying life stages. This was written for the Writing Proficiency (WP) course, BIOL 4010 - Research and Technical Writing in Biology.',
          imageUrl:
            'https://github.com/jsanchez116/jsanchez116.github.io/raw/main/BlongumReviewArticleScreenShot.png',
          link: 'https://github.com/jsanchez116/jsanchez116.github.io/blob/main/Final%20Draft%20-%20B.%20longum%20Review%20Article.pdf',
        },
       
      ],
    },
  },
  seo: {
    title: 'Jose Sanchez Website',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'josesanchez4',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', 
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://jsanchez116.github.io',
    phone: '(209)606-9318',
    email: 'jjsanchez2003@yahoo.com',
  },
  resume: {
    fileUrl:
      'https://github.com/jsanchez116/jsanchez116.github.io/raw/main/UpdatedCV.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Simple staining',
    'Differential staining',
    'Endospore staining',
    'EnteroPluri test',
    'API® Staph kit',
    'Media Preparation',
    'useGalaxy',
    'Google Workspace',
    'Microsoft Office',
  ],
  coursework: [
    {
      'Sample Course # 1',
    'Sample Course # 2 + Lab',
    },
  ],
    
  experiences: [
    {
      company: 'Ceres USD',
      position: 'After-School Tutor',
      from: 'August 2025',
      to: 'Present',
    },
    
  ],

  educations: [
    {
      institution: 'California State University, Stanislaus',
      degree: 'B.S. Biological Sciences, General',
      from: '2021',
      to: '2026',
    },
  ],
  publications: [
    {
      title: 'Genome sequence of psychrophile Flavobacterium xanthum DSM3661 isolated from soil in Antarctica.',
      conferenceName: 'Under Revision',
      journalName: 'American Society for Microbiology',
      authors: 'Tricia A. Van Laar, Karisma Naidu, Arielle Names, Silvestre Garcia Pimentel, Jose Jesus Sanchez, Emma Yu',
      link: 'https://github.com/jsanchez116/jsanchez116.github.io/raw/main/MRAResearchPaper.pdf',
      description:
        'A microbiology resource announcement (MRA) relating to the bacterium Flavobacterium xanthum. This project was done as a collaboration with the Joint Genome Institute.',
    },
    
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
