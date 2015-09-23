import React, { Component } from 'react';
import Post from './Post';

export default class Posts extends Component {
  render() {
    return (
      <ul className="list">
        {this.props.collection.map(item => {
          return <li key={item.id} className="list__item">
            <Post {...item}
              refreshInterval={this.props.refreshInterval}
              loadMore={this.props.loadMore} />
          </li>;
        })}
      </ul>
    );
  }
}
