import React, { PureComponent } from 'react';

export default class Header extends PureComponent {
  render() {
    return (
      <header className="header">
        <i className="fa-solid fa-calendar-check header-icon"></i>
        <span className="header-title">Habit Tracker</span>
        <span className="header-count">{this.props.totalCount}</span>
      </header>
    );
  }
}
