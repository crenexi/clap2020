import { assetsPath } from '@config/app-settings';

const initialState = {
  intro: {
    heroCoverUrl: `${assetsPath}/covers/cookies.jpg`,
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
