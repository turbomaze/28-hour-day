import React, { Component, Fragment } from 'react';
import config from './config';

export default class Hour extends Component {
  render() {
    const sleepClass = this.props.isSleeping ? 'day__hour_asleep' : 'day__hour_awake';
    const formatted = config.formatHour(this.props.hour);
    return <div className={'day__hour ' + sleepClass}>{formatted}</div>;
  }
}
