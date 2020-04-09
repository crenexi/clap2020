const assetsPath = process.env.ASSETS_PATH;

const defaultContent = {
  nav: [
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
  ],
  footerNavs: {
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
        url: 'https://www.facebook.com/events/266720250995614',
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
    covidNav: [
      {
        title: 'Coronavirus Self-Checker',
        url: 'https://c19check.com/',
      },
      {
        title: 'CDC Coronavirus Center',
        url: 'https://www.cdc.gov/coronavirus/2019-ncov/index.html',
      },
      {
        title: 'JHU Global Case Dashboard',
        url: 'https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6',
      },
      {
        title: 'Hospital Resource Projections',
        url: 'https://covid19.healthdata.org/united-states-of-america',
      },
      {
        title: 'Coronavirus Response Fund for Nurses',
        url: 'https://covid19.healthdata.org/united-states-of-america',
      },
      {
        title: 'WHO COVID-19 Response Fund',
        url: 'https://www.who.int/emergencies/diseases/novel-coronavirus-2019/donate',
      },
      {
        title: 'Frontline Foods',
        url: 'https://c19check.com/',
      },
    ],
  },
  platforms: [
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
      icon: 'facebook-f',
    },
    {
      id: 'instagram',
      name: 'Instagram',
      url: 'https://www.instagram.com/clap2020nation',
      icon: 'instagram',
    },
  ],
  countdown: {
    eventDate: '2020-04-23',
    eventTime: '19:00',
    quoteCoverUrl: `${assetsPath}/covers/new-york.jpg`,
    featuredQuote: {
      text: 'Thank you to the administration of this healthcare system, and most importantly thank you to the front line workers. These people are true heroes in the truest sense of the word.',
      author: {
        name: 'Andrew Cuomo',
        title: 'Governor of New York',
      },
    },
  },
  fullHeader: {
    coverUrl: `${assetsPath}/covers/nurse.jpg`,
  },
  joinInvite: {
    preTitle: '#Clap2020 #ClapBecauseWeCare',
    title: 'They fight. We applaud.',
    subtitle: 'Across the globe, healthcare workers challenge the menace of COVID-19. Join us at your doorstep for three minutes on 4/23 to raise a thundering applause for doctors, nurses, first responders, essential workers, and society.',
    dateText: {
      day: 'Thursday',
      date: 'April 23',
      time: '7:00 PM',
    },
  },
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
  praiseTweets: [
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

export default defaultContent;
