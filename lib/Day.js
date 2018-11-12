import React, { Component, Fragment } from 'react';
import config from './config';
import Hour from './Hour';

export default class Day extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const index = this.props.index || 1;
    const sleepEnd = this.props.sleepStartsAt + this.props.hoursOfSleepPerNight;

    // Color in the hours
    const hours = [];
    for (let i = 0; i < config.hoursPerNormalDay; i++) {
      const isSleeping = i >= this.props.sleepStartsAt && i < sleepEnd;
      const hour = <Hour key={i} isSleeping={isSleeping} hour={i} />;
      hours.push(hour);
    }

    // Figure out what the next long-day looks like
    const hoursAwakePerDay = config.hoursPerDay - this.props.hoursOfSleepPerNight;
    const nextSleepStartsAt = (sleepEnd + hoursAwakePerDay) % config.hoursPerNormalDay;
    const nextDay = (
      <Day
        index={index + 1}
        sleepStartsAt={nextSleepStartsAt}
        hoursOfSleepPerNight={this.props.hoursOfSleepPerNight}
      />
    );

    return (
      <Fragment>
        <div className="day">
          <div className="day__label">{config.days[index - 1]}</div>
          <div className="day__hours">{hours}</div>
        </div>

        {index < config.daysPerWeek ? nextDay : null}
      </Fragment>
    );
  }
}
