const assetsPath = process.env.ASSETS_PATH;

const defaultContent = {
  nav: [
    {
      linkTo: '/',
      title: 'Three Steps',
      subtitle: 'Spread the word to clap',
      icon: 'house-user',
    },
    {
      linkTo: '/share',
      title: 'Share Posters',
      subtitle: 'Tweet, send, and save',
      icon: 'image',
    },
    {
      linkTo: '/heroes',
      title: 'Fallen Heroes',
      subtitle: 'Stories of coronavirus',
      icon: 'head-side-mask',
    },
    {
      linkTo: '/get-ready',
      title: 'Countdown',
      subtitle: 'Clap for three minutes',
      icon: 'calendar-day',
    },
  ],
  platforms: [
    {
      id: 'twitter',
      name: 'Twitter',
      url: 'https://www.google.com',
      icon: 'twitter',
    },
    {
      id: 'instagram',
      name: 'Instagram',
      url: 'https://www.google.com',
      icon: 'instagram',
    },
    {
      id: 'facebook',
      name: 'Facebook',
      url: 'https://www.google.com',
      icon: 'facebook-f',
    },
  ],
  countdown: {
    eventDate: '2020-04-23',
    eventTime: '19:00',
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
  thankYou: {
    frontLineGroups: {
      featureVideos: [
        {
          title: 'Healthcare Heroes Tribute',
          src: 'https://youtu.be/A0BNO--7OdE',
          attribution: 'Andy Austin FNP-C',
          location: 'United States',
        },
        {
          title: 'Healthcare Heroes Tribute',
          src: 'https://youtu.be/aXOTKGFpHJQ',
          attribution: 'Andy Austin FNP-C',
          location: 'United States',
        },
        {
          title: 'Alarming Interview in the ER',
          src: 'https://youtu.be/jft5E7em858',
          attribution: 'CBS This Morning',
          location: 'Chicago, United States',
        },
        {
          title: 'Doctors & Nurses Demand Help',
          src: 'https://youtu.be/RvVKVzQ72SI',
          attribution: 'NBC News',
          location: 'New York City, United States',
        },
      ],
    },
    responseGroups: {
      featureVideos: [
        {
          title: 'Developing a Vaccine in Record Time',
          src: 'https://youtu.be/7SuKywEZ5AM',
          attribution: 'Wall Street Journal',
          location: 'World',
        },
        {
          title: 'New York Governor Thanks the National Guard',
          src: 'https://www.youtube.com/watch?v=p_LSilzVP74',
          attribution: 'ABC News',
          location: 'New York, United States',
        },
      ],
    },
    essentialGroups: {
      featuredVidoes: [
        {
          title: 'Essential Workers Push Back',
          src: 'https://youtu.be/mJ-Fh8bFNdY',
          attribution: 'Bloomberg',
          location: 'United States',
        },
        {
          title: 'Workers Applaud Cleaning Staff',
          src: 'https://youtu.be/HPrnEuzHnco',
          attribution: 'ABC News',
          location: 'Barcelona, Spain',
        },
      ],
    },
  },
  workforceGroups: [
    {
      name: 'ER Doctors',
      bucket: 'frontLines',
      icon: 'users-medical',
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
};

export default defaultContent;
