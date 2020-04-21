import { assetsPath } from '@config/app-settings';

const initialState = {
  threeSteps: {
    featuredTweetId: '1248388629476470789',
  },
  noiseMethods: [
    {
      title: 'Claps & Cheers',
      subtitle: 'The classic. A global phenomenon of clapping for healthcare & essential workers. Bring some thunder.',
      icon: 'hands-wash',
    },
    {
      title: 'Bells & Whistles',
      subtitle: 'What if I told you that stainless steel whistle for coaching 4-year-old soccer can now cheer for nurses?',
      icon: 'whistle',
    },
    {
      title: 'Pots & Pans',
      subtitle: 'Endless household items are taken up to make some noise. How about a pan & spatula?',
      icon: 'house',
    },
    {
      title: 'Honks & Sirens',
      subtitle: 'Fire and police departments have demonstrated incredible, parade-like support.',
      icon: 'siren',
    },
    {
      title: 'Stadium Items',
      subtitle: 'Remember that horn you got for $23 at some disastrous game? It\'s not wasted if it roars for doctors.',
      icon: 'megaphone',
    },
    {
      title: 'Instruments',
      subtitle: 'Talented much? Get out there at clap time and show your musical support. Show some love.',
      icon: 'trumpet',
    },
  ],
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

const reducers = (state = initialState, action = {}) => {
  switch (action.type) {
    default: return state;
  }
};

export default reducers;
