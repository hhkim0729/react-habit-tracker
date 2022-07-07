import React, { memo } from 'react';

const Header = memo(({ totalCount }) => {
  return (
    <header className="header">
      <i className="fa-solid fa-calendar-check header-icon"></i>
      <span className="header-title">Habit Tracker</span>
      <span className="header-count">{totalCount}</span>
    </header>
  );
});

export default Header;
