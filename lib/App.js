import React, { Component, Fragment } from 'react';
import config from './config';
import Day from './Day';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { sundaySleepStartsAt: 0, hoursOfSleepPerNight: 9 };
    this.changeSleepStart = this.changeSleepStart.bind(this);
    this.changeSleepAmount = this.changeSleepAmount.bind(this);
  }

  changeSleepStart(e) {
    this.setState({
      sundaySleepStartsAt: parseInt(e.target.value),
    });
  }

  changeSleepAmount(e) {
    this.setState({
      hoursOfSleepPerNight: parseInt(e.target.value),
    });
  }

  render() {
    const sleepAt = config.formatHour(this.state.sundaySleepStartsAt);

    return (
      <div className="container">
        <div className="title">28 Hour Day</div>

        <div className="controls">
          <div className="controls__row">
            Number of hours of sleep per night
            <input
              className="controls__slider"
              type="range"
              value={this.state.hoursOfSleepPerNight}
              min="1"
              max="16"
              step="1"
              onChange={this.changeSleepAmount}
            />
            : {this.state.hoursOfSleepPerNight} hours
          </div>
          <div className="controls__row">
            Start sleeping on Sunday at
            <input
              className="controls__slider"
              type="range"
              defaultValue="0"
              min="0"
              max="23"
              step="1"
              onChange={this.changeSleepStart}
            />
            : {sleepAt}
          </div>
        </div>

        <div className="week">
          <Day
            sleepStartsAt={this.state.sundaySleepStartsAt}
            hoursOfSleepPerNight={this.state.hoursOfSleepPerNight}
          />
        </div>
      </div>
    );
  }
}
