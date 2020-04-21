import combineReducers from 'redux';
import homeReducers from './home/reducers';
import getReadyReducers from './get-ready/reducers';
import praiseReducers from './praise/reducers';
import shareReducers from './share/reducers';

const reducer = combineReducers({
  home: homeReducers,
  getReady: getReadyReducers,
  praise: praiseReducers,
  share: shareReducers,
});

export default reducer;
