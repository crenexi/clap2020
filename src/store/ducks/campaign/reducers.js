import { assetsPath } from 'config/app-settings';

const initialState = {
  tags: {
    pretext: 'Spread the word with',
    text: '#Clap2020 #ClapBecauseWeCare',
    list: ['Clap2020', 'ClapBecauseWeCare'],
    listExtended: [
      'Clap2020',
      'ClapBecauseWeCare',
      'ThankYou',
      'HealthcareHeroes',
      'EssentialWorkers',
      'StayAtHome',
      'COVID19',
    ],
  },
  status: {
    clapTime: 'April 30th @ 7:00 PM',
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
  },
  posters: [
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
  ],
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
      icon: 'facebook',
    },
    {
      id: 'instagram',
      name: 'Instagram',
      url: 'https://www.instagram.com/clap2020nation',
      icon: 'instagram',
    },
  ],
  urls: {
    fbGroup: 'https://www.facebook.com/groups/clap2020/',
    fbPage: 'https://www.facebook.com/clap2020nation/',
    fbPageDM: 'https://m.me/clap2020nation',
  },
};

const reducers = (state = initialState, action = {}) => {
  switch (action.type) {
    default: return state;
  }
};

export default reducers;
