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

  getSleepStates() {
    const sleepStates = [];
    const hoursPerWeek = config.daysPerWeek * config.hoursPerNormalDay;
    const daysPerShortWeek = hoursPerWeek / config.hoursPerDay;

    // 6 long-days
    for (let i = 0; i < daysPerShortWeek; i++) {
      for (let j = 0; j < this.state.hoursOfSleepPerNight; j++) {
        sleepStates.push(true);
      }

      for (let j = this.state.hoursOfSleepPerNight; j < config.hoursPerDay; j++) {
        sleepStates.push(false);
      }
    }

    // Move the hours at the end to the front
    const partToShift = sleepStates.slice(-1 * this.state.sundaySleepStartsAt);
    return partToShift.concat(sleepStates);
  }

  render() {
    const sleepAt = config.formatHour(this.state.sundaySleepStartsAt);
    const sleepStates = this.getSleepStates();

    return (
      <div className="container">
        <div className="title">
          <span className="title__text">28 Hour Day</span>
          <a
            className="github-button"
            href="https://github.com/turbomaze/28-hour-day/fork"
            data-icon="octicon-repo-forked"
            data-size="large"
            aria-label="Fork turbomaze/28-hour-day on GitHub">
            Fork
          </a>
          <span>&nbsp;</span>
          <a
            className="github-button"
            href="https://github.com/turbomaze/28-hour-day"
            data-icon="octicon-star"
            data-size="large"
            aria-label="Star turbomaze/28-hour-day on GitHub">
            Star
          </a>
        </div>

        <div className="controls">
          <div className="controls__row">
            Number of hours of sleep per night
            <input
              className="controls__slider"
              type="range"
              value={this.state.hoursOfSleepPerNight}
              min="1"
              max="20"
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
              value={this.state.sundaySleepStartsAt}
              min="0"
              max="23"
              step="1"
              onChange={this.changeSleepStart}
            />
            : {sleepAt}
          </div>
        </div>

        <div className="legend">
          <div className="legend__item">
            <div className="legend__item__color legend__item__color_1">&nbsp;</div>
            <div>Wakefulness</div>
          </div>
          <div className="legend__item">
            <div className="legend__item__color legend__item__color_2">&nbsp;</div>
            <div>Sleep</div>
          </div>
          <div className="legend__item">
            <div className="legend__item__color legend__item__color_3">&nbsp;</div>
            <div>Work</div>
          </div>
          <div className="legend__item">
            <div className="legend__item__color legend__item__color_4">&nbsp;</div>
            <div>Sleep/work conflict</div>
          </div>
        </div>

        <div className="week">
          <Day sleepStates={sleepStates} />
        </div>
      </div>
    );
  }
}
