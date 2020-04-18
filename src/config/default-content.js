const assetsPath = process.env.ASSETS_PATH;

// Endpoint: /ui/drawer-nav
const uiDrawerNav = [
  {
    linkTo: '/',
    title: 'Three Steps',
    subtitle: 'Spread the word',
    icon: 'house-user',
    disabled: false,
  },
  {
    linkTo: '/share',
    title: 'Share Posters',
    subtitle: 'Tweet, post, save',
    icon: 'image',
    disabled: false,
  },
  {
    linkTo: '/praise',
    title: 'Thank You',
    subtitle: 'Groups to recognize',
    icon: 'users',
    disabled: false,
  },
  {
    linkTo: '/heroes',
    title: 'Fallen Heroes',
    subtitle: 'Stories of coronavirus',
    icon: 'medal',
    disabled: true,
  },
  {
    linkTo: '/get-ready',
    title: 'Countdown',
    subtitle: 'Get ready to clap',
    icon: 'calendar-day',
    disabled: false,
  },
];

// Endpoint: /ui/footer-nav
const uiFooterNav = {
  metaNav: [
    {
      title: 'Posters to Share',
      url: 'https://www.facebook.com/pg/clap2020nation/photos/?tab=album&album_id=104599801212991',
    },
    {
      title: 'Twitter Profile',
      url: 'https://twitter.com/clap2020',
    },
    {
      title: 'Facebook Event',
      url: 'https://www.facebook.com/events/217497266335496/',
    },
    {
      title: 'Facebook Group',
      url: 'https://www.facebook.com/groups/clap2020',
    },
    {
      title: 'Instagram Profile',
      url: 'https://www.instagram.com/clap2020nation',
    },
    {
      title: 'Style Guide',
      url: 'https://www.clap2020.com/design',
    },
  ],
  covid19Nav: [
    {
      title: 'Coronavirus Self-Checker',
      url: 'https://c19check.com/',
    },
    {
      title: 'CDC Coronavirus Center',
      url: 'https://www.cdc.gov/coronavirus/2019-ncov/index.html',
    },
    {
      title: 'JHU U.S. Case Dashboard',
      url: 'https://www.arcgis.com/apps/opsdashboard/index.html#/409af567637846e3b5d4182fcd779bea',
    },
    {
      title: 'Hospital Resource Projections',
      url: 'https://covid19.healthdata.org/united-states-of-america',
    },
    {
      title: 'Response Fund for Nurses',
      url: 'https://www.nursingworld.org/foundation/programs/coronavirus-response-fund/',
    },
    {
      title: 'WHO COVID-19 Response Fund',
      url: 'https://www.who.int/emergencies/diseases/novel-coronavirus-2019/donate',
    },
    {
      title: 'Frontline Foods',
      url: 'https://www.frontlinefoods.org/',
    },
  ],
};

// Endpoint: /ui/full-header
const uiFullHeader = {
  title: [
    {
      coverUrl: `${assetsPath}/covers/woman-mask.jpg`,
      text: 'Raise a thunderous applause',
    },
    {
      coverUrl: `${assetsPath}/covers/nurse.jpg`,
      text: 'for the COVID-19 front lines',
    },
    {
      coverUrl: `${assetsPath}/covers/usa-flag.jpg`,
      text: 'across the United States',
    },
  ],
  subtitle: {
    coverUrl: `${assetsPath}/covers/urban-lights.jpg`,
    text: 'Clap at your doorstep for three minutes for doctors, nurses, first responders, essential workers, and the nation.',
  },
};

// Endpoint: /campaign/status
const campaignStatus = {
  clapTime: 'April 30th @ 7:00 PM',
  campaignTags: {
    pretext: 'Spread the word with',
    text: '#Clap2020 #ClapBecauseWeCare',
  },
  nextEvent: {
    datetime: '2020-04-30 19:00',
    day: 'Thursday',
    date: 'April 30',
    time: '7:00 PM',
    meta: {
      title: 'Clap for Healthcare & Essential Workers',
      description: 'Visit www.clap2020.com for details',
      start: '2020-04-30T19:00:00',
      end: '2020-04-30T19:30:00',
      location: 'United States',
    },
    fbUrl: 'https://www.facebook.com/events/217497266335496/',
    icsUrl: `${assetsPath}/events/04-30_Clap-Healthcare-Essential.ics`,
  },
};

// Endpoint: /campaign/posters
const campaignPosters = [
  {
    format: 'story',
    thumbUrl: 'https://api.time.com/wp-content/uploads/2019/03/kitten-report.jpg',
    hdUrl: 'https://api.time.com/wp-content/uploads/2019/03/kitten-report.jpg',
    url: 'https://api.time.com/wp-content/uploads/2019/03/kitten-report.jpg',
  },
  {
    format: 'square',
    thumbUrl: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png',
    hdUrl: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png',
    url: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png',
  },
  {
    format: 'rectangle',
    thumbUrl: 'https://r.ddmcdn.com/w_606/s_f/o_1/cx_0/cy_15/cw_606/ch_404/APL/uploads/2014/06/01-kitten-cuteness-1.jpg',
    hdUrl: 'https://r.ddmcdn.com/w_606/s_f/o_1/cx_0/cy_15/cw_606/ch_404/APL/uploads/2014/06/01-kitten-cuteness-1.jpg',
    url: 'https://r.ddmcdn.com/w_606/s_f/o_1/cx_0/cy_15/cw_606/ch_404/APL/uploads/2014/06/01-kitten-cuteness-1.jpg',
  },
];

// Endpoint: /campaign/platforms
const campaignPlatforms = [
  {
    id: 'twitter',
    name: 'Twitter',
    url: 'https://www.twitter.com/clap2020',
    icon: 'twitter',
    accountId: '1247599607317585920',
  },
  {
    id: 'facebook',
    name: 'Facebook',
    url: 'https://www.facebook.com/clap2020nation',
    icon: 'facebook',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    url: 'https://www.instagram.com/clap2020nation',
    icon: 'instagram',
  },
];

// Endpoint: /scenes/home
const sceneHome = {
  thisIsWar: {
    coverUrl: `${assetsPath}/covers/mask.jpg`,
    featuredQuote: {
      text: 'Our health care systems are at war with a pandemic virus.',
      author: {
        name: 'Craig R. Smith',
        title: 'Surgeon-In-Chief, NewYork-Presbyterian Hospital',
      },
    },
    warConditions: [
      {
        icon: 'coffin-cross',
        title: 'Resting in Peace',
        subtitle: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. ',
      },
      {
        icon: 'stretcher',
        title: 'Fighting the Front',
        subtitle: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. ',
      },
      {
        icon: 'head-side-cough',
        title: 'Working in Danger',
        subtitle: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. ',
      },
      {
        icon: 'head-side-mask',
        title: 'Facing Short Supplies',
        subtitle: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. ',
      },
      {
        icon: 'lungs-virus',
        title: 'Forced to Triage',
        subtitle: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. ',
      },
      {
        icon: 'door-open',
        title: 'Fired for Truth',
        subtitle: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. ',
      },
    ],
  },
  thankYouInvite: {
    heroImageUrl: `${assetsPath}/covers/rainy-street.jpg`,
  },
};

// Endpoint: /scenes/get-ready
const sceneGetReady = {
  quoteCoverUrl: `${assetsPath}/covers/new-york.jpg`,
  featuredQuote: {
    text: 'Thank you to the administration of this healthcare system, and most importantly thank you to the front line workers. These people are true heroes in the truest sense of the word.',
    author: {
      name: 'Andrew Cuomo',
      title: 'Governor of New York',
    },
  },
};

// Endpoint: /scenes/praise
const scenePraise = {
  workforceVideos: [
    {
      videoId: 'A0BNO--7OdE',
      isFeatured: true,
      bucket: 'frontLines',
      title: 'Healthcare Heroes Tribute',
      attribution: 'Andy Austin FNP-C',
      location: 'United States',
    },
    {
      videoId: 'aXOTKGFpHJQ',
      isFeatured: true,
      bucket: 'frontLines',
      title: 'Healthcare Heroes Tribute',
      attribution: 'Andy Austin FNP-C',
      location: 'United States',
    },
    {
      videoId: 'jft5E7em858',
      isFeatured: true,
      bucket: 'frontLines',
      title: 'Alarming Interview in the ER',
      attribution: 'CBS This Morning',
      location: 'Chicago, United States',
    },
    {
      videoId: 'RvVKVzQ72SI',
      isFeatured: true,
      bucket: 'frontLines',
      title: 'Doctors & Nurses Demand Help',
      attribution: 'NBC News',
      location: 'New York City, United States',
    },
    {
      videoId: '7SuKywEZ5AM',
      isFeatured: true,
      bucket: 'response',
      title: 'Developing a Vaccine in Record Time',
      attribution: 'Wall Street Journal',
      location: 'World',
    },
    {
      videoId: 'p_LSilzVP74',
      isFeatured: true,
      bucket: 'response',
      title: 'New York Governor Thanks the National Guard',
      attribution: 'ABC News',
      location: 'New York, United States',
    },
    {
      videoId: 'mJ-Fh8bFNdY',
      isFeatured: true,
      bucket: 'essential',
      title: 'Essential Workers Push Back',
      attribution: 'Bloomberg',
      location: 'United States',
    },
    {
      videoId: 'HPrnEuzHnco',
      isFeatured: true,
      bucket: 'essential',
      title: 'Workers Applaud Cleaning Staff',
      attribution: 'ABC News',
      location: 'Barcelona, Spain',
    },
  ],
  workforceGroups: [
    {
      name: 'ER Doctors',
      bucket: 'frontLines',
      icon: 'star-of-life',
      coverUrl: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png',
      description: 'Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
    },
    {
      name: 'Doctors',
      bucket: 'frontLines',
      icon: 'user-md',
      coverUrl: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png',
      description: 'Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
    },
    {
      name: 'Nurses',
      bucket: 'frontLines',
      icon: 'user-nurse',
      coverUrl: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png',
      description: 'Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
    },
    {
      name: 'First Responders',
      bucket: 'frontLines',
      icon: 'ambulance',
      coverUrl: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png',
      description: 'Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
    },
    {
      name: 'Medical Staff',
      bucket: 'frontLines',
      icon: 'hospital-user',
      coverUrl: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png',
      description: 'Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
    },
    {
      name: 'Everyone',
      bucket: 'frontLines',
      icon: 'house-user',
      coverUrl: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png',
      description: 'Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
    },
    {
      name: 'Scientific Community',
      bucket: 'response',
      icon: 'vials',
      coverUrl: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png',
      description: 'Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
    },
    {
      name: 'National Guard',
      bucket: 'response',
      icon: 'dolly-flatbed-alt',
      coverUrl: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png',
      description: 'Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
    },
    {
      name: 'Political Leaders',
      bucket: 'response',
      icon: 'podium',
      coverUrl: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png',
      description: 'Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
    },
    {
      name: 'Police & Fire',
      bucket: 'essential',
      icon: 'badge-sheriff',
      coverUrl: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png',
      description: 'Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
    },
    {
      name: 'Grocery & Pharmacy',
      bucket: 'essential',
      icon: 'shopping-cart',
      coverUrl: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png',
      description: 'Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
    },
    {
      name: 'Delivery Drivers',
      bucket: 'essential',
      icon: 'shipping-fast',
      coverUrl: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png',
      description: 'Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
    },
    {
      name: 'Transportation',
      bucket: 'essential',
      icon: 'car-bus',
      coverUrl: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png',
      description: 'Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
    },
    {
      name: 'Postal & Critical',
      bucket: 'essential',
      icon: 'city',
      coverUrl: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png',
      description: 'Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
    },
    {
      name: 'Government Workers',
      bucket: 'essential',
      icon: 'landmark-alt',
      coverUrl: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png',
      description: 'Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
    },
    {
      name: 'Supply Chain',
      bucket: 'essential',
      icon: 'truck-container',
      coverUrl: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png',
      description: 'Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
    },
    {
      name: 'Food Production',
      bucket: 'essential',
      icon: 'tractor',
      coverUrl: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png',
      description: 'Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
    },
  ],
  tweets: [
    {
      id: '1246234088878551040',
      author: 'FDNY',
      location: 'New York',
    },
    {
      id: '1246573320511860737',
      author: 'BloombergDotOrg',
      location: 'World',
    },
    {
      id: '1247700446963269633',
      author: 'jaime_joyce',
      location: 'New York',
    },
  ],
};

// Endpoint: /datasets/united-states
const datasetUnitedStates = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
  'D.C.',
];

const datasetTopCities = [
  { name: 'NYC', state: 'New York' },
  { name: 'Los Angeles', state: 'California' },
  { name: 'Chicago', state: 'Illinois' },
  { name: 'Dallas', state: 'Texas' },
  { name: 'Houston', state: 'Texas' },
  { name: 'Washington', state: 'D.C.' },
  { name: 'Miami', state: 'Florida' },
  { name: 'Philadelphia', state: 'Pennsylvania' },
  { name: 'Atlanta', state: 'Georgia' },
  { name: 'Boston', state: 'Massachusetts' },
  { name: 'Phoenix', state: 'Arizona' },
  { name: 'San Francisco', state: 'California' },
  { name: 'Riverside', state: 'California' },
  { name: 'Detroit', state: 'Michigan' },
  { name: 'Seattle', state: 'Washington' },
  { name: 'Minneapolis', state: 'Minnesota' },
  { name: 'San Diego', state: 'California' },
  { name: 'Tampa', state: 'Florida' },
  { name: 'Denver', state: 'Colorado' },
  { name: 'St. Louis', state: 'Missouri' },
  { name: 'Baltimore', state: 'Maryland' },
  { name: 'Orlando', state: 'Florida' },
  { name: 'Charlotte', state: 'North Carolina' },
  { name: 'San Antonio', state: 'Texas' },
  { name: 'Portland', state: 'Oregon' },
  { name: 'Sacramento', state: 'California' },
  { name: 'Pitsburgh', state: 'Pennsylvania' },
  { name: 'Las Vegas', state: 'Nevada' },
  { name: 'Cincinnati', state: 'Ohio' },
  { name: 'Austin', state: 'Texas' },
  { name: 'Kansas City', state: 'Missouri' },
  { name: 'Columbus', state: 'Ohio' },
  { name: 'Cleveland', state: 'Ohio' },
  { name: 'Indianapolis', state: 'Indiana' },
  { name: 'San Jose', state: 'California' },
  { name: 'Nashville', state: 'Tennessee' },
  { name: 'Virginia Beach', state: 'Virginia' },
  { name: 'Providence', state: 'Rhode Island' },
  { name: 'Milwaukee', state: 'Wisconsin' },
  { name: 'Jacksonville', state: 'Florida' },
  { name: 'Oklahoma City', state: 'Oklahoma' },
  { name: 'Memphis', state: 'Tennessee' },
  { name: 'Richmond', state: 'Virginia' },
  { name: 'Louisville', state: 'Kentucky' },
  { name: 'New Orlean', state: 'Louisiana' },
  { name: 'Salt Lake City', state: 'Utah' },
  { name: 'Hartford', state: 'Connecticut' },
  { name: 'Birmingham', state: 'Alabama' },
  { name: 'Buffalo', state: 'New York' },
  { name: 'Rochester', state: 'New York' },
  { name: 'Grand Rapids', state: 'Michigan' },
  { name: 'Tuscon', state: 'Arizona' },
  { name: 'Fresno', state: 'California' },
  { name: 'Tulsa', state: 'Oklahoma' },
  { name: 'Honolulu', state: 'Hawaii' },
  { name: 'Worcester', state: 'Massachusetts' },
  { name: 'Bridgeport', state: 'Connecticut' },
  { name: 'Omaha', state: 'Nebraska' },
  { name: 'Albuquerque', state: 'New Mexico' },
  { name: 'Greenville', state: 'South Carolina' },
  { name: 'Bakersfield', state: 'California' },
  { name: 'Knoxville', state: 'Tennessee' },
  { name: 'Albany', state: 'New York' },
  { name: 'McAllen', state: 'Texas' },
  { name: 'New Haven', state: 'Connecticut' },
  { name: 'Oxnard', state: 'California' },
  { name: 'El Paso', state: 'Texas' },
];

// Content
const defaultContent = {
  uiContent: {
    drawerNav: uiDrawerNav,
    footerNav: uiFooterNav,
    fullHeader: uiFullHeader,
  },
  campaignContent: {
    status: campaignStatus,
    posters: campaignPosters,
    platforms: campaignPlatforms,
  },
  sceneContent: {
    home: sceneHome,
    getReady: sceneGetReady,
    praise: scenePraise,
  },
  datasetContent: {
    unitedStates: datasetUnitedStates,
    topCities: datasetTopCities,
  },
};

export default defaultContent;
