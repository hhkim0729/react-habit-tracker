import React, { Component } from 'react';

export default class Header extends Component {
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
