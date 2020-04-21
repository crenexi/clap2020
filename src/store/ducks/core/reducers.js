import { assetsPath } from 'config/app-settings';

const initialState = {
  meta: {
    error404CoverUrl: `${assetsPath}/meta/errors/lost-in-jumanji.gif`,
  },
  drawerNav: [
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
  footerNav: {
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
  },
  fullHeader: {
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
  },
};

const reducers = (state = initialState, action = {}) => {
  switch (action.type) {
    default: return state;
  }
};

export default reducers;
