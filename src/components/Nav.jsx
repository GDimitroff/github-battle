import * as React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { sunIcon, moonIcon } from '../utils/icons';

export default function Nav({ theme, toggleTheme }) {
  return (
    <nav className="split">
      <NavLink
        to="/"
        className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
        GitHub Battle
      </NavLink>
      <ul className="row">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              'nav-link' + (isActive ? ' active' : '')
            }>
            Popular
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/battle"
            className={({ isActive }) =>
              'nav-link' + (isActive ? ' active' : '')
            }>
            Battle
          </NavLink>
        </li>
        <button className="btn secondary icon" onClick={toggleTheme}>
          {theme === 'light' ? moonIcon : sunIcon}
        </button>
      </ul>
    </nav>
  );
}

Nav.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};
