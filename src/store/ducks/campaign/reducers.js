const initialState = {
  clapTime: 'April 30th @ 7:00 PM',
  campaignTags: {
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
};

const reducers = (state = initialState, action = {}) => {
  switch (action.type) {
    default: return state;
  }
};

export default reducers;
