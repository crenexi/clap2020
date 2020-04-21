import combineReducers from 'redux';
import { homeReducers } from './home';
import { getReadyReducers } from './get-ready';
import { praiseReducers } from './praise';
import { shareReducers } from './share';

const reducer = combineReducers({
  home: homeReducers,
  getReady: getReadyReducers,
  praise: praiseReducers,
  share: shareReducers,
});

export default reducer;
