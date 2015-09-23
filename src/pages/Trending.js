import React, { Component } from 'react';
import Posts from '../components/Posts';
import { requestTrending } from '../actions/TrendingActionCreators';
import TrendingStore from '../stores/TrendingStore';
import connectToStores from '../utils/connectToStores';

@connectToStores([TrendingStore], TrendingStore.getState)
export default class Trending extends Component {
  timeoutId = null;

  componentDidMount() {
    requestTrending();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.fetchCycle !== this.props.fetchCycle) {
      this.timeoutId = setTimeout(requestTrending, nextProps.refresh_interval);
    }
  }
  componentWillUnmount() {
    window.clearTimeout(this.timeoutId);
  }
  render() {
    return (
      <div>
        <Posts {...this.props} />
        <a href="#" onClick={requestTrending.bind(null, true)}>load more</a>
      </div>
    );
  }
}
