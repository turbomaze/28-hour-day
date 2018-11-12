import React, { Component, Fragment } from 'react';

export default class Hour extends Component {
  render() {
    const sleepClass = this.props.isSleeping ? 'day__hour_asleep' : 'day__hour_awake';
    return <div className={'day__hour ' + sleepClass}>{this.props.hour}</div>;
  }
}
