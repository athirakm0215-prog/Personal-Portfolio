// src/data/projects.js
//
// This file is a LIST of 5 projects. Each { ... } block below = ONE card on the grid.
// Every block has:
//   cover  -> 1 image, shown on the card (Projects list page)
//   images -> 4 images, one per tab on the inner page (project, challenge, solution, result)
//
// 5 projects x (1 cover + 4 inner) = 25 images in total.
// Put the files in the "public" folder. In the code, write the path starting with "/"
// and WITHOUT the word "public".  e.g.  public/projects/p1-cover.jpg  ->  '/projects/p1-cover.jpg'
// You can name the files anything you like, just make the path match exactly.

const projects = [
  // ───────────── PROJECT 1 ─────────────
  {
    id: 'airfiber',
    title: 'AIRFIBER WEBSITE REWAMP',
    visitUrl: 'https://airfiber.co.in/',
    figmaUrl: 'https://www.figma.com/proto/PiEA41tmXtbLuBfaVGbx3Q/FIGMA-ANIMATION?node-id=716-334234&viewport=-1129%2C1325%2C0.06&t=krj8hIkt716MY4Pp-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=716%3A337877&page-id=716%3A330286',
    cover: '/projects/airfiber/cover.png', // 1 cover image
    images: {
      project: '/projects/airfiber/01.png', // 4 inner images
      challenge: '/projects/airfiber/02.png',
      solution: '/projects/airfiber/03.png',
      result: '/projects/airfiber/04.png',
    },
    content: {
  project: [
    'Connecting People Through Better Digital Experiences',
    'AirFiber is an internet service provider offering high-speed fiber broadband, OTT subscriptions and IPTV entertainment services. The project involved revamping its website to create a more engaging and user-friendly digital experience, helping customers explore internet plans, compare packages and discover available services.',
    'Role: UI/UX Designer • Tools: Figma • Type: Website Redesign',
  ],

  challenge: [
    'Simplifying a Complex Service Offering',
    'The existing website needed a clearer structure to communicate AirFiber’s range of broadband plans, entertainment bundles and promotional offers. Customers needed an easier way to understand package differences, compare speeds and find relevant service information without navigating through overwhelming content.',
  ],

  solution: [
    'A Clearer and More Engaging Digital Experience',
    'I redesigned the website with a structured layout, visually engaging sections and improved content hierarchy. Key service offerings, pricing plans and promotional offers were given better visibility. Clear calls to action and organised navigation help users explore packages, check service availability and connect with AirFiber more easily.',
  ],

  result: [
    'A More Accessible Way to Explore AirFiber',
    'The redesign delivered a more organised and visually engaging website experience, presenting AirFiber’s services and packages in a clearer format. The improved content structure helps visitors understand available offerings, explore plans and navigate towards relevant actions with greater ease.',
  ],
},
  },

  // ───────────── PROJECT 2 ─────────────
  {
    id: 'project-2',
    title: 'TAXAID.AI WEBSITE & APP',
    visitUrl: 'https://taxaidai.com/',
    figmaUrl: 'https://www.figma.com/proto/CwZXZIKhspJDGQPcyvpq3i/TAXAID.AI?node-id=2-139887&viewport=-1146%2C236%2C0.02&t=hwiSAMRZPSBO4Q9W-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2%3A129185&page-id=2%3A32063',
    cover: '/projects/taxaid/cover.png',
    images: {
      project: '/projects/taxaid/01.png',
      challenge: '/projects/taxaid/02.png',
      solution: '/projects/taxaid/03.png',
      result: '/projects/taxaid/04.png',
    },
   
content: {
  project: [
    'Simplifying Business Finance Through Intelligent Design',
    'TaxAid AI is an AI-powered financial management platform designed to help businesses monitor their financial health and make informed decisions. The project involved designing both the website and mobile application, creating a consistent digital experience that makes financial information, insights and AI-powered assistance easier to access and understand.',
    'Role: UI/UX Designer • Tools: Figma • Type: Website & Mobile App Design',
  ],

  challenge: [
    'Making Complex Financial Data Easier to Understand',
    'Financial platforms often present users with large amounts of data, reports and technical information, making it difficult to identify important insights quickly. The challenge was to simplify complex financial information, organise multiple data points effectively and create an intuitive experience that helps business owners understand their financial performance without feeling overwhelmed.',
  ],

  solution: [
    'Designing a Clear and Intelligent Financial Experience',
    'I designed a structured website and mobile application with a focus on clarity, accessibility and consistency. Through organised dashboards, clear data visualisation, intuitive navigation and carefully planned content hierarchy, the interface makes financial information easier to explore. The design also accommodates AI-powered assistance, helping users access relevant insights through a more conversational experience.',
  ],

  result: [
    'Bringing Financial Insights into a Seamless Experience',
    'The project delivered a cohesive digital experience across web and mobile platforms, presenting financial information in a more organised and approachable way. The redesigned interfaces create a clear pathway for users to monitor business performance, explore financial insights and interact with AI-powered assistance.',
  ],
},

  },

  // ───────────── PROJECT 3 ─────────────
  {
    id: 'project-3',
    title: 'FLYSTAR WEBSITE',
    visitUrl: 'https://flystar.in/',
    figmaUrl: 'https://www.figma.com/proto/PiEA41tmXtbLuBfaVGbx3Q/FIGMA-ANIMATION?node-id=712-3370&viewport=-1234%2C-3300%2C0.06&t=joozX6IpBMqxZ8DU-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=712%3A10849&page-id=712%3A1000',
    cover: '/projects/flystar/cover.png',
    images: {
      project: '/projects/flystar/01.png',
      challenge: '/projects/flystar/02.png',
      solution: '/projects/flystar/03.png',
      result: '/projects/flystar/04.png',
    },
   
content: {
  project: [
    'Designing a Digital Gateway to Aviation Education',
    'Flystar Aviation Academy is an aviation training institution offering professional aviation education and pilot training programs. The project involved designing its website to establish a strong digital presence, showcase its training programs and infrastructure, and help aspiring aviation professionals explore courses and admission opportunities.',
    'Role: UI/UX Designer • Tools: Figma • Type: Website Design',
  ],

  challenge: [
    'Presenting Aviation Education with Clarity and Credibility',
    'The challenge was to organise diverse aviation training programs, course information and institutional details into a structured digital experience. The website needed to communicate the academy’s expertise, highlight its facilities and build trust among prospective students while making it easy to explore courses and enquire about admissions.',
  ],

  solution: [
    'Creating an Engaging and Structured Aviation Experience',
    'I designed a visually engaging website with a clear content hierarchy, intuitive navigation and organised course sections. Dedicated sections for training programs, academy infrastructure, institutional credentials and admission information help visitors explore the offerings. The design balances aviation-inspired visual elements with a professional layout to reflect the academy’s identity.',
  ],

  result: [
    'Strengthening Flystar’s Digital Presence',
    'The website provides a cohesive digital platform to showcase Flystar’s aviation training programs, facilities and institutional strengths. The structured presentation of information helps prospective students understand the academy’s offerings, explore relevant programs and connect with the institution for further enquiries.',
  ],
},

  },

  // ───────────── PROJECT 4 ─────────────
  {
    id: 'project-4',
    title: 'KONCEPTSLAB WEBSITE REWAMP',
    visitUrl: 'https://www.konceptslab.com/',
    figmaUrl: 'https://www.figma.com/proto/PiEA41tmXtbLuBfaVGbx3Q/FIGMA-ANIMATION?node-id=714-142818&viewport=-2027%2C-528%2C0.06&t=8cgCqILz9oOnfUmb-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=714%3A116226&page-id=714%3A44897',
    cover: '/projects/kl/cover.png',
    images: {
      project: '/projects/kl/01.png',
      challenge: '/projects/kl/02.png',
      solution: '/projects/kl/03.png',
      result: '/projects/kl/04.png',
    },
   
  content: {
    project: [
      'Creating a Digital Identity for a Technology & Creative Agency',
      "Koncepts Lab is a technology and digital transformation company offering services across software development, creative design, digital marketing and business consulting. The project involved revamping the corporate website to create a modern digital presence that communicates the company's diverse capabilities while providing visitors with a seamless browsing experience.",
      'Role: UI/UX Designer • Tools: Figma • Type: Website Redesign',
    ],

    challenge: [
      'Bringing Diverse Services Under One Digital Experience',
      'With multiple service categories and a wide range of offerings, presenting the company’s capabilities in a clear and structured way was a key challenge. The website needed a better content hierarchy, intuitive navigation and a consistent visual experience to help visitors understand the brand and explore its services easily.',
    ],

    solution: [
      'A Modern and Structured Digital Experience',
      'I redesigned the website with a refreshed visual direction, improved content organisation and a user-focused layout. The service categories were structured to make information easier to discover, while clear navigation, engaging visual elements and consistent design patterns helped create a cohesive experience across the website.',
    ],

    result: [
      'A Stronger and More Engaging Online Presence',
      "The revamped website presents Koncepts Lab's services and capabilities through a more organised and visually engaging interface. It creates a consistent brand experience and makes it easier for potential clients to explore the company's offerings and connect with the team.",
    ],
  },
  },

  // ───────────── PROJECT 5 ─────────────
  {
    id: 'project-5',
    title: 'PARUDEESA LIVING WEBSITE',
    visitUrl: 'https://parudeesaliving.com/',
    figmaUrl: 'https://www.figma.com/',
    cover: '/projects/parudeesa/cover.png',
    images: {
      project: '/projects/parudeesa/01.png',
      challenge: '/projects/parudeesa/02.png',
      solution: '/projects/parudeesa/03.png',
      result: '/projects/parudeesa/04.png',
    },


content: {
  project: [
    'Creating a Digital Experience for Thoughtful Living',
    'Parudeesa Living is a nature-inspired residential community focused on comfortable living, wellness and meaningful connections. The project involved designing website pages that communicate the brand’s vision, showcase its lifestyle offerings and help visitors explore the community, amenities and living experience.',
    'Role: UI/UX Designer • Tools: Figma • Type: Website Design',
  ],

  challenge: [
    'Presenting a Complete Lifestyle Through Digital Design',
    'Communicating the vision of a residential community goes beyond showcasing properties. The website needed to bring together information about the community, lifestyle features, amenities and surroundings while maintaining a consistent visual identity and making the content easy for visitors to explore.',
  ],

  solution: [
    'Designing an Engaging and Informative Web Experience',
    'Designed website pages with a clear content hierarchy, engaging visual sections and consistent design elements. The layouts were structured to present the brand story, community features, lifestyle offerings and important information in an intuitive way, creating a cohesive browsing experience.',
  ],

  result: [
    'Bringing the Parudeesa Living Vision Online',
    'The website design brings together the brand’s identity, community vision and lifestyle offerings in a unified digital experience. The structured pages and engaging visual presentation help visitors understand the concept, discover its features and explore what Parudeesa Living has to offer.',
  ],
},

  },

  // The 6th card on the grid ("OTHER UI WORKS") is added by the page itself.
  // It has no cover image, so do not add it here.
];

export default projects;