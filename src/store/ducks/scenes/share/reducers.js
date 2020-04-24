import { assetsPath } from '@config/app-settings';

const initialState = {
  intro: {
    heroCoverUrl: `${assetsPath}/covers/cookies.jpg`,
    copySite: {
      title: 'Share Site',
      brief: '#Clap2020 #ClapBecauseWeCare',
    },
    copyPoster: {
      title: 'Share Poster',
      brief: `Choose from 'story', 'square', or 'rectangle' formats.`,
      footnote: 'Remember to share with #Clap2020 #ClapBecauseWeCare hashtags!',
    },
    copyCountdown: {
      title: 'Share Countdown',
      brief: 'Remember: clap for three minutes at 0! Alternatively, use the reminder to thank a friend on the front lines or essential work.',
    },
  },
  social: {
    heroCoverUrl: `${assetsPath}/covers/medic.jpg`,
  },
  posters: {
    heroCoverUrl: `${assetsPath}/covers/tired-nurse.jpg`,
  },
  press: {
    heroCoverUrl: `${assetsPath}/covers/usa-flag.jpg`,
  },
};

const reducers = (state = initialState, action = {}) => {
  switch (action.type) {
    default: return state;
  }
};

export default reducers;
