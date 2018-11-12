import React, { Component, Fragment } from 'react';
import config from './config';

export default class Hour extends Component {
  render() {
    const hour = this.props.hour;
    const sleepClass = this.props.isSleeping ? 'day__hour_asleep' : 'day__hour_awake';
    const isWorking = hour >= config.workStartsAt && hour <= config.workEndsAt;
    const workClass = isWorking && this.props.isWorkDay ? ' day__hour_working' : '';
    const formatted = config.formatHour(hour);
    return <div className={'day__hour ' + sleepClass + workClass}>{formatted}</div>;
  }
}
