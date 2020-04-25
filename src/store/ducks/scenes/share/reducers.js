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
      brief: `Choose from three formats`,
      footnote: 'Remember to share with #Clap2020 #ClapBecauseWeCare hashtags!',
    },
    copyCountdown: {
      title: 'Share Countdown',
      brief: 'Remember: clap for three minutes at 0! Alternatively, use the reminder to thank a friend on the front lines or in essential work.',
    },
  },
  social: {
    heroCoverUrl: `${assetsPath}/covers/medic.jpg`,
    quickShare: {
      title: 'Keep It Simple',
      subtitle: 'We call on you to rally your family, friends, and neighbors to join the clap. All it takes is a share.',
    },
    quickTweet: {
      title: '',
      subtitle: `Active in the Twitterverse? Tired of polarizing tweets and grim lockdown drama? Shake it up by with a positive call to clap and show of appreciation to healthcare and essential workers.`,
    },
    dialogInvite: {
      title: 'Choose Size & State',
      subtitle: 'Support healthcare & essential lines today.',
    },
    featuredQuote: {
      text: 'The teamwork right now is inspiring. ICU nurses are tough; we fight for our patients; we have one another’s backs. Doctors may be the architects of what happens in the hospital. But we are the builders. And so we build, even amid chaos and disintegration. We build, even as a silent enemy attempts to undo everything we’ve done. We build and we build, shift after shift, as fast — and as best — as we can.',
      author: {
        name: 'Simone Hannah-Clark',
        title: 'ICU Nurse in New York',
      },
    },
  },
  posters: {
    heroCoverUrl: `${assetsPath}/covers/tired-nurse.jpg`,
  },
  press: {
    heroCoverUrl: `${assetsPath}/covers/usa-flag.jpg`,
    joinTheCause: {
      title: 'Meet the Moment',
      subtitle: 'Because they are',
    },
  },
};

const reducers = (state = initialState, action = {}) => {
  switch (action.type) {
    default: return state;
  }
};

export default reducers;
