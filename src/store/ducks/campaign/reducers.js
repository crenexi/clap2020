import { assetsPath } from '@config/app-settings';

const initialState = {
  tags: {
    pretext: 'Spread the word with',
    text: '#Clap2020 #ClapBecauseWeCare',
    message: 'To all healthcare & essential workers, thank you!',
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
    clapTime: 'May 7th @ 7:00 PM',
    nextEvent: {
      datetime: '2020-05-07 19:00',
      day: 'Thursday',
      date: 'May 7',
      time: '7:00 PM',
      meta: {
        title: 'Clap for Healthcare & Essential Workers',
        description: 'Visit www.clap2020.com for details',
        start: '2020-05-07T19:00:00',
        end: '2020-05-07T19:30:00',
        location: 'United States',
      },
      fbUrl: 'https://www.facebook.com/events/217497266335496/',
      icsUrl: `${assetsPath}/events/05-07_Clap-Healthcare-Essential.ics`,
    },
  },
  posters: [
    {
      format: 'story',
      url: 'https://api.time.com/wp-content/uploads/2019/03/kitten-report.jpg',
      hdUrl: 'https://api.time.com/wp-content/uploads/2019/03/kitten-report.jpg',
      bwUrl: 'https://api.time.com/wp-content/uploads/2019/03/kitten-report.jpg',
      thumbUrl: 'https://api.time.com/wp-content/uploads/2019/03/kitten-report.jpg',
      bwThumbUrl: 'https://i.pinimg.com/originals/cd/19/4a/cd194a266b020484999d73daee9f0aba.jpg',
    },
    {
      format: 'square',
      url: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png',
      hdUrl: 'data:image/jpeg;base64,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',
      bwUrl: 'data:image/jpeg;base64,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',
      thumbUrl: 'data:image/jpeg;base64,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',
      bwThumbUrl: 'https://i.pinimg.com/originals/cd/19/4a/cd194a266b020484999d73daee9f0aba.jpg',
    },
    {
      format: 'rectangle',
      url: 'https://r.ddmcdn.com/w_606/s_f/o_1/cx_0/cy_15/cw_606/ch_404/APL/uploads/2014/06/01-kitten-cuteness-1.jpg',
      hdUrl: 'https://r.ddmcdn.com/w_606/s_f/o_1/cx_0/cy_15/cw_606/ch_404/APL/uploads/2014/06/01-kitten-cuteness-1.jpg',
      bwUrl: 'https://r.ddmcdn.com/w_606/s_f/o_1/cx_0/cy_15/cw_606/ch_404/APL/uploads/2014/06/01-kitten-cuteness-1.jpg',
      thumbUrl: 'https://r.ddmcdn.com/w_606/s_f/o_1/cx_0/cy_15/cw_606/ch_404/APL/uploads/2014/06/01-kitten-cuteness-1.jpg',
      bwThumbUrl: 'https://i.pinimg.com/originals/cd/19/4a/cd194a266b020484999d73daee9f0aba.jpg',
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
    twFollowBase: 'https://twitter.com/intent/follow',
  },
};

const reducers = (state = initialState, action = {}) => {
  switch (action.type) {
    default: return state;
  }
};

export default reducers;
