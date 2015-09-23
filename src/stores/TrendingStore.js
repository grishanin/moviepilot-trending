import { register } from '../AppDispatcher';
import { createStore } from '../utils/StoreUtils';
import ActionTypes from '../ActionTypes';

var state = {
  page: 0,
  pageSize: 10,
  collection: [],
  fetchCycle: 0
};

const TrendingStore = createStore({
  getState() {
    return state;
  },
  getCurrentPage() {
    return state.page;
  },
  getPageSize() {
    return state.pageSize;
  }
});

TrendingStore.dispatchToken = register(action => {
  switch (action.type) {
    case ActionTypes.REQUEST_TRENDING_SUCCESS:
      Object.assign(
        state, action.response,
        {refreshInterval: action.response.refresh_interval * 1000, page: action.page}
      );
      if (!action.loadMore) {
        state.fetchCycle++;
      }
      break;
    default:
      return;
  }

  TrendingStore.emitChange();
});

export default TrendingStore;
