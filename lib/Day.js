import React, { Component, Fragment } from 'react';
import config from './config';

export default class Day extends Component {
  constructor(props) {
    super(props);

    this.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  }

  render() {
    const index = this.props.index || 1;
    const hours = [];
    for (let i = 0; i < config.hoursPerNormalDay; i++) {
      hours.push(<div className="day__hour">{i}</div>);
    }

    return (
      <Fragment>
        <div className="day">
          <div className="day__label">{this.days[index - 1]}</div>
          <div className="day__hours">{hours}</div>
        </div>

        {index < config.daysPerWeek ? <Day index={index + 1} /> : null}
      </Fragment>
    );
  }
}
