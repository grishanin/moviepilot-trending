import { dispatchAsync } from '../AppDispatcher';
import ActionTypes from '../ActionTypes';
import * as TrendingAPI from '../api/TrendingAPI';
import TrendingStore from '../stores/TrendingStore';

export function requestTrending(loadMore) {
  var page = TrendingStore.getCurrentPage();

  if (loadMore) {
    page++;
  }

  const requestCount = TrendingStore.getPageSize() * (page + 1);

  dispatchAsync(TrendingAPI.getTrending(requestCount), {
    request: ActionTypes.REQUEST_TRENDING,
    success: ActionTypes.REQUEST_TRENDING_SUCCESS,
    failure: ActionTypes.REQUEST_TRENDING_ERROR
  }, { loadMore, page });
}
