import { combineReducers } from 'redux';
import { coreReducers } from './ducks/core';
import { campaignReducers } from './ducks/campaign';
import { scenesReducers } from './ducks/scenes';
import { formsReducers } from './ducks/forms';

const reducer = combineReducers({
  core: coreReducers,
  campaign: campaignReducers,
  scenes: scenesReducers,
  forms: formsReducers,
});

export default reducer;
