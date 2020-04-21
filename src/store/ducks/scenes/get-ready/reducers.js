import { assetsPath } from 'config/app-settings';

const initialState = {
  quoteCoverUrl: `${assetsPath}/covers/new-york.jpg`,
  featuredQuote: {
    text: 'Thank you to the administration of this healthcare system, and most importantly thank you to the front line workers. These people are true heroes in the truest sense of the word.',
    author: {
      name: 'Andrew Cuomo',
      title: 'Governor of New York',
    },
  },
};

const reducers = (state = initialState, action = {}) => {
  switch (action.type) {
    default: return state;
  }
};

export default reducers;
