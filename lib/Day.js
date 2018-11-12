import React, { Component, Fragment } from 'react';
import config from './config';
import Hour from './Hour';

export default class Day extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const index = this.props.index || 1;

    // Color in the hours
    const hours = [];
    const isWorkDay = index >= config.workWeekStartsAt && index <= config.workWeekEndsAt;
    for (let i = 0; i < config.hoursPerNormalDay; i++) {
      const isSleeping = this.props.sleepStates[i];
      const hour = <Hour isWorkDay={isWorkDay} key={i} isSleeping={isSleeping} hour={i} />;
      hours.push(hour);
    }

    // Figure out what the next long-day looks like
    const nextSleepStates = this.props.sleepStates.slice(config.hoursPerNormalDay);
    const nextDay = <Day index={index + 1} sleepStates={nextSleepStates} />;

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
