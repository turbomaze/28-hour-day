import React, { Component, Fragment } from 'react';
import Day from './Day';

export default class App extends Component {
  render() {
    const hoursOfSleepPerNight = 9;

    return (
      <div className="container">
        <div className="title">28 Hour Day</div>

        <div className="week">
          <Day />
        </div>
      </div>
    );
  }
}
