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
    clapTime: 'December 25th @ 7:00 PM',
    nextEvent: {
      datetime: '2020-12-10 19:00',
      day: 'Friday',
      date: 'December 10',
      time: '7:00 PM',
      meta: {
        title: 'Clap for Healthcare & Essential Workers',
        description: 'Visit www.clap2020.com for details',
        start: '2020-12-10T19:00:00',
        end: '2020-12-10T19:30:00',
        location: 'United States',
      },
      fbUrl: 'https://www.facebook.com/events/217497266335496/',
      icsUrl: `${assetsPath}/events/05-07_Clap-Healthcare-Essential.ics`,
    },
  },
  posters: [
    {
      format: 'story',
      url: 'https://i.picsum.photos/id/411/500/888.jpg',
      hdUrl: 'https://i.picsum.photos/id/411/1080/1920.jpg',
      bwUrl: 'https://i.picsum.photos/id/411/500/888.jpg?grayscale',
      thumbUrl: 'https://i.picsum.photos/id/411/250/444.jpg',
      bwThumbUrl: 'https://i.picsum.photos/id/411/250/444.jpg?grayscale',
    },
    {
      format: 'square',
      url: 'https://i.picsum.photos/id/411/500/500.jpg',
      hdUrl: 'https://i.picsum.photos/id/411/1080/1080.jpg',
      bwUrl: 'https://i.picsum.photos/id/411/500/500.jpg?grayscale',
      thumbUrl: 'https://i.picsum.photos/id/411/333/333.jpg',
      bwThumbUrl: 'https://i.picsum.photos/id/411/333/333.jpg?grayscale',
    },
    {
      format: 'rectangle',
      url: 'https://i.picsum.photos/id/411/888/500.jpg',
      hdUrl: 'https://i.picsum.photos/id/411/1920/1080.jpg',
      bwUrl: 'https://i.picsum.photos/id/411/888/500.jpg?grayscale',
      thumbUrl: 'https://i.picsum.photos/id/411/444/250.jpg',
      bwThumbUrl: 'https://i.picsum.photos/id/411/444/250.jpg?grayscale',
    },
  ],
  platforms: [
    {
      id: 'twitter',
      name: 'Twitter',
      url: 'https://www.twitter.com/crenexi',
      icon: 'twitter',
      accountId: '3139540908',
    },
    {
      id: 'facebook',
      name: 'Facebook',
      url: 'https://www.google.com',
      icon: 'facebook',
    },
    {
      id: 'instagram',
      name: 'Instagram',
      url: 'https://www.google.com',
      icon: 'instagram',
    },
  ],
  urls: {
    fbGroup: 'https://www.google.com',
    fbPage: 'https://www.google.com',
    fbPageDM: 'https://www.google.com',
    twFollowBase: 'https://twitter.com/intent/follow',
  },
};

const reducers = (state = initialState, action = {}) => {
  switch (action.type) {
    default: return state;
  }
};

export default reducers;
