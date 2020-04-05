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
  workforceGroups: [
    {
      name: 'ER Doctors',
      bucket: 'frontLine',
      icon: 'users-medical',
      coverUrl: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png',
      description: 'Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
    },
    {
      name: 'Doctors',
      bucket: 'frontLine',
      icon: 'user-md',
      coverUrl: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png',
      description: 'Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
    },
    {
      name: 'Nurses',
      bucket: 'frontLine',
      icon: 'user-nurse',
      coverUrl: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png',
      description: 'Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
    },
    {
      name: 'First Responders',
      bucket: 'frontLine',
      icon: 'ambulance',
      coverUrl: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png',
      description: 'Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
    },
    {
      name: 'Medical Staff',
      bucket: 'frontLine',
      icon: 'hospital-user',
      coverUrl: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png',
      description: 'Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
    },
    {
      name: 'Everyone',
      bucket: 'frontLine',
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
      icon: 'shipping-fast',
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
