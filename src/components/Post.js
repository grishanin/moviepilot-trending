import React, { Component } from 'react';
import Counter from './Counter';

export default class Post extends Component {
  render() {
    return (
      <div className="post">
        <div className="post__title">
          {this.props.title}
        </div>
        <Counter
        value={this.props.tower_data.reads}
        estimatedGrowth={this.props.tower_data.estimated_view_growth}
        skipUpdate={this.props.loadMore}
        duration={this.props.refreshInterval} />
        {' - '}
        <Counter
        value={this.props.tower_data.shares}
        skipUpdate={this.props.loadMore}
        duration={this.props.refreshInterval} />
        {' - '}
        <Counter
        value={this.props.tower_data.comments}
        skipUpdate={this.props.loadMore}
        duration={this.props.refreshInterval} />
      </div>
    );
  }
}
