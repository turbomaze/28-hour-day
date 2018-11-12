import React, { Component, Fragment } from 'react';
import Day from './Day';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { sundaySleepStartsAt: 0, hoursOfSleepPerNight: 9 };
  }

  render() {
    return (
      <div className="container">
        <div className="title">28 Hour Day</div>

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
