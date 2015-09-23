import { register } from '../AppDispatcher';
import { createStore, mergeIntoBag, isInBag } from '../utils/StoreUtils';
import ActionTypes from '../ActionTypes';

var _state = {
  page: 0,
  pageSize: 10,
  collection: [],
  fetchCycle: 0,
};

const TrendingStore = createStore({
  getState() {
    return _state;
  },
  getCurrentPage() {
    return _state.page;
  },
  getPageSize() {
    return _state.pageSize;
  }
});

TrendingStore.dispatchToken = register(action => {
  switch (action.type) {
    case ActionTypes.REQUEST_TRENDING:
      _state.page = action.page;
      break;
    case ActionTypes.REQUEST_TRENDING_SUCCESS:
      Object.assign(
        _state, action.response,
        {refresh_interval: action.response.refresh_interval * 1000}
      );
      if (!action.loadMore) {
        _state.fetchCycle++;
      }
      break;
    default:
      return;
  }

  TrendingStore.emitChange();
});

export default TrendingStore;
