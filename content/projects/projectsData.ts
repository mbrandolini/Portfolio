interface Project {
  slug: string;
  title: string;
  description: string;
  date: string;
  published: boolean;
  image: string; // Ruta de la imagen
  website: string;
}

export const projectsData: Project[] = [
  {
    slug: "powertraining-app",
    title: "Powertrainig App",
    description:
      "Power Training App is a platform designed for personal trainers, allowing them to create and assign customized workout plans, track their clients' progress, and manage training sessions efficiently.",
    date: "2024-10-10",
    published: true,
    image: "/images/PowertrainingApp.jpg",
    website: "https://powertra.vercel.app", // URL del sitio real
  },
  {
    slug: "stormcrest-software",
    title: "Stormcrest Software",
    description:
      "Stormcrest is the corporate site for the company Stormcrest. The site serves as a hub for company information, product releases, and news. I focused on creating a professional yet approachable design that aligns with the company’s brand identity.",
    date: "2023-05-21",
    published: true,
    image: "/images/StormcrestPortfolio-400x350.jpg",
    website: "https://stormcrest.com", // URL del sitio real
  },
  {
    slug: "ops-admin",
    title: "Ops Admin",
    description:
      "OPS Admin is a comprehensive administration platform. My task was to design a functional and intuitive interface that facilitates ease of use. The site integrates various administrative tools, providing a robust solution for business management.",
    date: "2022-03-01",
    published: true,
    image: "/images/opsAdminScreen.jpg",
    website: "https://ops-admin.com", // URL del sitio real
  },
  {
    slug: "ngande-gas-and-energy",
    title: "Ngande Gas and Energy",
    description:
      "National Gas & Electric is one of America’s fastest growing retail suppliers of electricity and natural gas. I aimed to create a welcoming online presence that reflects the community’s values and offerings, incorporating user-friendly navigation and informative content.",
    date: "2018-06-01",
    published: true,
    image: "/images/NgandEPortfolio-400x350.jpg",
    website: "https://ngande.com", // URL del sitio real
  },
  {
    slug: "echostrike-music",
    title: "Echostrike Music",
    description:
      "Echo Strike is a site dedicated to a high-energy music band. I designed the site to reflect the band’s dynamic and modern style, featuring multimedia content, tour information, and an integrated e-commerce platform for merchandise sales.",
    date: "2019-01-15",
    published: true,
    image: "/images/EchostrikeScreen.jpg",
    website: "https://echostrike.com", // URL del sitio real
  },
  {
    slug: "master-of-wills",
    title: "Master of Wills",
    description:
      "Master of Wills is an engaging and visually striking website for a strategic board game. I developed this site to provide a seamless user experience, integrating detailed game information, news, and an online store for game-related merchandise.",
    date: "2017-08-01",
    published: true,
    image: "/images/stormcrestGamesScreen.jpg",
    website: "https://masterofwills.com", // URL del sitio real
  },
  {
    slug: "stormcrest-games",
    title: "Stormcrest Games",
    description:
      "This Shopify-based site for Stormcrest Games showcases an extensive range of gaming products. I implemented custom themes and plugins to ensure a user-friendly shopping experience, optimizing the site for performance and conversion.",
    date: "2022-12-08",
    published: true,
    image: "/images/MoWShopifyPortfolio-400x350.jpg",
    website: "https://masterofwills.com", // URL del sitio real
  },
  {
    slug: "thornraver",
    title: "Thornraver",
    description:
      "The Thornraver site features rich graphics and interactive elements. I focused on creating an immersive experience for users, enhancing engagement through smooth navigation and compelling visuals.",
    date: "2017-06-01",
    published: true,
    image: "/images/ThornraverPortfolio-400x350.jpg",
    website: "https://thornraver.com", // URL del sitio real
  },
  {
    slug: "resequence",
    title: "ReSequence",
    description:
      "Resequence Game is a website for a sci-fi themed puzzle game. My role involved designing a site that reflects the futuristic and mysterious nature of the game. Key features include a sleek interface and promotional content.",
    date: "2019-06-15",
    published: true,
    image: "/images/ResequencePortfolio-400x350.jpg",
    website: "https://resequencegame.com", // URL del sitio real
  },
  {
    slug: "cec-emergencias",
    title: "Cec Emergencias",
    description:
      "CECEmergencias is a local emergency response service website. I focused on creating a highly functional and accessible site that provides critical information and services to users. The design ensures ease of navigation and quick access to emergency contact details.",
    date: "2017-03-20",
    published: true,
    image: "/images/CecPortfolio-400x350.jpg",
    website: "https://cecemergencias.com.ar", // URL del sitio real
  },
  {
    slug: "samu-emergencias",
    title: "Samu Emergencias",
    description:
      "SAMUEmergencias is another local emergency response service. Similar to CECEmergencias, this site needed to be reliable and user-friendly. I ensured the site is optimized for speed and mobile use, offering essential services and information in an intuitive format.",
    date: "2023-10-15",
    published: true,
    image: "/images/SamuPortfolio-400x350.jpg",
    website: "https://samuemergencias.com.ar", // URL del sitio real
  },
  {
    slug: "fuentes-aquamov",
    title: "Aquamov Fuentes de Agua Danzante",
    description:
      "Somos una empresa dedicada a la construcción y alquiler de fuentes de aguas que danzan al compás de música y luces. Desarrollamos proyectos con software propio, diseñamos todo tipo de trabajos, standard o personalizados.",
    date: "2022-06-01",
    published: true,
    image: "/images/Aquamov.jpg",
    website: "https://fuenteaguadanzante.com.ar", // URL del sitio real
  },
  {
    slug: "cooperativa-agua",
    title: "Cooperativa de Agua Villa Allende",
    description:
      "Bienvenidos a la Cooperativa de Provisión, Obras y Servicios Públicos de Villa Allende. Más de 42 años acompañando el crecimiento de Villa Allende ",
    date: "2022-07-01",
    published: true,
    image: "/images/Cooperativa.jpg",
    website: "https://coopva.com.ar", // URL del sitio real
  },
  {
    slug: "accesur-accesorios",
    title: "Accesur",
    description:
      "Accesur tu tienda de accesorios en el sur, desde Lago Pueblo a todo el país. La mejor tienda de accesorios para tus necesidades.",
    date: "2022-10-01",
    published: true,
    image: "/images/Accesur.jpg",
    website: "https://accesur.com.ar", // URL del sitio real
  },
];
