import React from 'react';
import tweenState from 'react-tween-state';

var Counter = React.createClass({
  mixins: [tweenState.Mixin],
  getInitialState() {
    return {
      value: 0,
      duration: 3000
    }
  },
  componentDidMount() {
    this.tweenState('value', {
      endValue: this.props.value,
      duration: this.state.duration,
      onEnd: () => {
        if (this.props.estimatedGrowth) {
          this.tweenState('value', {
            endValue: this.props.value + this.props.estimatedGrowth,
            duration: this.props.duration
          });
        }
      }
    });
  },
  componentWillReceiveProps(nextProps) {
    if (!nextProps.skipUpdate && nextProps.value > this.state.value) {
      this.tweenState('value', {
        duration: this.props.duration,
        endValue: nextProps.value
      });
    }
  },

  render() {
    return <span className="counter">{Math.round(this.getTweeningValue('value'))}</span>;
  }
});

export default Counter;
