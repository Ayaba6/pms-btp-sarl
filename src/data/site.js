// Données centralisées du site PMS BTP Sarl.
// Les photos se trouvent dans public/images/realisations (versions web optimisées).

const img = (name) => `/images/realisations/${name}.jpg`;

export const contact = {
  phones: ['+226 70 12 97 97', '+226 76 21 72 71'],
  phoneHref: 'tel:+22670129797',
  whatsapp: 'https://wa.me/22670129797',
  email: 'esfsalgo@gmail.com',
  city: 'Ouagadougou, Burkina Faso',
  postal: 'BP 98 Ouagadougou 07',
  website: 'www.pms-btp.com',
  hours: 'Lundi – Samedi · 08h00 – 18h00',
};

export const categories = [
  'Tous',
  'Bâtiment',
  'Hydraulique',
  'Génie civil & aménagement',
  'Industrie & transport',
];

export const projects = [
  {
    slug: 'complexe-educatif',
    title: 'Complexe éducatif R+2',
    category: 'Bâtiment',
    status: 'Livré',
    summary:
      "Construction clé en main d'un bâtiment d'enseignement à trois niveaux : salles de classe, dortoirs, réfectoire, galeries couvertes et aménagement paysager de la cour.",
    facts: ['Bâtiment R+2', 'Salles de classe & dortoirs', 'Réfectoire', 'Aménagements paysagers'],
    cover: img('ecole-drone-facade'),
    images: [
      img('ecole-drone-facade'),
      img('ecole-facade'),
      img('ecole-drone-ensemble'),
      img('ecole-entree'),
      img('ecole-couloir'),
      img('ecole-classe'),
      img('ecole-refectoire'),
      img('ecole-dortoir'),
      img('ecole-dortoir-2'),
      img('ecole-jardin'),
      img('ecole-vue-cour'),
      img('ecole-drone-front'),
    ],
  },
  {
    slug: 'villa-contemporaine',
    title: 'Villa contemporaine R+2',
    category: 'Bâtiment',
    status: 'Livré',
    summary:
      "Résidence urbaine sur trois niveaux : façades à parements pierre et brique, escalier hélicoïdal extérieur, terrasse équipée de panneaux solaires et château d'eau autonome.",
    facts: ['Résidence R+2', 'Escalier hélicoïdal', 'Énergie solaire', "Château d'eau privé"],
    cover: img('villa-drone'),
    images: [
      img('villa-drone'),
      img('villa-rue'),
      img('villa-entree'),
      img('villa-escalier'),
      img('villa-drone-3'),
      img('villa-terrasse'),
      img('villa-plafond'),
      img('villa-facade-detail'),
      img('forage-reservoir'),
      img('villa-drone-2'),
    ],
  },
  {
    slug: 'mosquee',
    title: 'Mosquée & coupole',
    category: 'Bâtiment',
    status: 'Chantier en cours',
    summary:
      "Gros œuvre d'un édifice cultuel : structure en béton armé, coupole centrale, quatre minarets et mezzanine intérieure. Chantier suivi et mené par nos équipes.",
    facts: ['Béton armé', 'Coupole maçonnée', '4 minarets', 'Mezzanine'],
    cover: img('mosquee-drone'),
    images: [
      img('mosquee-drone'),
      img('mosquee-facade'),
      img('mosquee-coupole'),
      img('mosquee-drone-2'),
      img('mosquee-interieur'),
      img('mosquee-escalier'),
    ],
  },
  {
    slug: 'forage-chateau-eau',
    title: "Forage & château d'eau solaire",
    category: 'Hydraulique',
    status: 'Livré',
    summary:
      "Réalisation d'un forage équipé d'un château d'eau métallique alimenté par pompage solaire, avec bornes fontaines pour la distribution sur le site.",
    facts: ['Forage hydraulique', 'Pompage solaire', 'Réservoir surélevé', 'Bornes fontaines'],
    cover: img('forage-chateau'),
    images: [img('forage-chateau'), img('forage-chateau-drone'), img('forage-borne')],
  },
  {
    slug: 'cloture-portail',
    title: 'Clôture, portail & guérite',
    category: 'Génie civil & aménagement',
    status: 'Livré',
    summary:
      "Sécurisation complète d'un domaine : mur de clôture, portail monumental à double vantail, éclairage solaire et poste de garde.",
    facts: ['Mur de clôture', 'Portail métallique', 'Guérite', 'Éclairage solaire'],
    cover: img('portail'),
    images: [img('portail'), img('portail-2'), img('guerite')],
  },
  {
    slug: 'entrepot',
    title: 'Entrepôt & bâtiment technique',
    category: 'Génie civil & aménagement',
    status: 'Livré',
    summary:
      "Construction d'un bâtiment de stockage avec couverture en bac acier, larges portes de chargement et locaux annexes.",
    facts: ['Couverture bac acier', 'Portes de chargement', 'Locaux annexes'],
    cover: img('hangar-drone'),
    images: [img('hangar-drone'), img('hangar-facade'), img('hangar-drone-2')],
  },
  {
    slug: 'amenagements-exterieurs',
    title: 'Aménagements extérieurs & annexes',
    category: 'Génie civil & aménagement',
    status: 'Livré',
    summary:
      "Viabilisation d'un grand domaine : terrain de sport, place centrale, logements annexes et réseaux de circulation.",
    facts: ['Terrain de sport', 'Place centrale', 'Logements annexes'],
    cover: img('site-drone'),
    images: [img('site-drone'), img('terrain-sport'), img('annexe')],
  },
  {
    slug: 'maintenance-industrielle',
    title: 'Maintenance & fournitures industrielles',
    category: 'Industrie & transport',
    status: 'Livré',
    summary:
      "Maintenance d'installations de concassage-criblage et de centrales à béton (convoyeurs, cribles, silos) et fourniture de pièces d'usure : bandes transporteuses, rouleaux, raclettes, colles et produits de garnissage.",
    facts: ['Concassage & criblage', 'Convoyeurs & silos', "Pièces d'usure", 'Bandes transporteuses'],
    cover: img('maintenance-concasseur'),
    images: [
      img('maintenance-concasseur'),
      img('maintenance-convoyeurs'),
      img('maintenance-criblage'),
      img('maintenance-silo'),
      img('maintenance-centrale'),
      img('maintenance-convoyeurs-2'),
      img('fournitures-bande'),
      img('fournitures-rouleaux'),
      img('fournitures-rouleau-impact'),
      img('fournitures-raclettes'),
      img('fournitures-colles'),
      img('fournitures-redibak'),
    ],
  },
  {
    slug: 'transport-granulats',
    title: 'Transport de matériaux & granulats',
    category: 'Industrie & transport',
    status: 'Livré',
    summary:
      "Acheminement de sable, gravier et granulats par camions-bennes et semi-remorques, du site d'extraction jusqu'au chantier.",
    facts: ['Camions-bennes', 'Semi-remorques', 'Sable & gravier', 'Livraison sur chantier'],
    cover: img('transport-benne'),
    images: [
      img('transport-benne'),
      img('transport-semi'),
      img('transport-camion'),
      img('transport-chargement'),
      img('transport-semi-2'),
      img('granulats-stock'),
    ],
  },
];

export const services = [
  {
    key: 'btp',
    title: 'Bâtiment & Travaux Publics',
    short: 'Constructions neuves, réhabilitations, voiries et réseaux divers.',
    long:
      "Bâtiments scolaires, résidentiels, administratifs, cultuels ou industriels : nous prenons en charge le gros œuvre comme le second œuvre, de l'implantation à la remise des clés.",
    image: img('ecole-facade'),
    // 4 miniatures, une par activité listée : gros œuvre, structure béton armé, finitions, ouvrage livré
    gallery: ['mosquee-facade', 'mosquee-interieur', 'villa-plafond', 'villa-escalier'].map(img),
    points: ['Gros œuvre & béton armé', 'Second œuvre & finitions', 'Voiries & réseaux divers', 'Réhabilitation'],
  },
  {
    key: 'forage',
    title: 'Forage Minier & Hydraulique',
    short: "Forages d'eau, châteaux d'eau, pompage solaire et forages miniers.",
    long:
      "Nous réalisons des forages pour l'eau potable, l'irrigation et les activités minières, et les équipons de systèmes de pompage solaire et de réservoirs surélevés.",
    image: img('forage-chateau'),
    gallery: ['forage-borne', 'forage-chateau-drone', 'forage-reservoir', 'forage-site'].map(img),
    points: ["Forages d'eau potable", "Châteaux d'eau", 'Pompage solaire', 'Forage minier'],
  },
  {
    key: 'amenagement',
    title: 'Génie civil & Aménagement',
    short: 'Périmètres maraîchers irrigués, barrages, bas-fonds, clôtures et terrains.',
    long:
      "Aménagements hydro-agricoles — périmètres maraîchers irrigués, barrages et bas-fonds — mais aussi murs de clôture, portails, terrains de sport et cours paysagères : nous structurons vos sites avec des ouvrages durables.",
    image: img('amenagement-barrage'),
    gallery: ['perimetre-maraicher', 'portail', 'terrain-sport', 'ecole-jardin'].map(img),
    points: [
      'Périmètres maraîchers irrigués',
      'Aménagement de barrages',
      'Aménagement de bas-fonds',
      'Clôtures & portails',
      'Terrassement',
      'Terrains de sport & espaces paysagers',
    ],
  },
  {
    key: 'industrie',
    title: 'Maintenance & Équipements Industriels',
    short: 'Maintenance préventive et corrective, fourniture d’équipements.',
    long:
      "Interventions techniques sur équipements et installations industrielles, et fourniture de matériel adapté à vos sites de production ou d'exploitation.",
    image: img('maintenance-concasseur'),
    gallery: ['maintenance-convoyeurs', 'maintenance-silo', 'fournitures-rouleaux', 'fournitures-colles'].map(img),
    points: [
      'Concassage, criblage & convoyeurs',
      'Silos & centrales à béton',
      'Bandes transporteuses & rouleaux',
      "Pièces d'usure, colles & garnissage",
    ],
  },
  {
    key: 'transport',
    title: 'Transport & Logistique',
    short: 'Acheminement sécurisé de matériaux, marchandises et engins.',
    long:
      "Avec nos camions-bennes et semi-remorques, nous transportons sable, gravier, granulats, marchandises et équipements, dans les délais et en toute sécurité.",
    image: img('transport-benne'),
    gallery: ['transport-semi', 'transport-camion', 'transport-chargement', 'granulats-stock'].map(img),
    points: ['Sable, gravier & granulats', 'Camions-bennes & semi-remorques', 'Marchandises & équipements'],
  },
  {
    key: 'commerce',
    title: 'Commerce Général & Fournitures',
    short: 'Négoce, import-export et fournitures de bureau.',
    long:
      "Approvisionnement des structures publiques et privées en fournitures de bureau, consommables et marchandises diverses.",
    image: null,
    points: ['Fournitures de bureau', 'Consommables', 'Import-export'],
  },
];

export const stats = [
  { value: '+20', label: 'Projets réalisés' },
  { value: '+10', label: 'Clients accompagnés' },
  { value: '6', label: "Domaines d'activité" },
  { value: '100%', label: 'Engagement qualité' },
];

export const heroSlides = [
  { image: img('ecole-drone-facade'), caption: 'Complexe éducatif R+2' },
  { image: img('villa-drone'), caption: 'Villa contemporaine R+2' },
  { image: img('mosquee-drone'), caption: 'Mosquée — gros œuvre' },
];
