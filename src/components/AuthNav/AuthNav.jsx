import React from 'react';
import { NavLink } from 'react-router-dom';
import './AuthNav.scss';
const AuthNav = () => (
  <div>
    <NavLink
      to="/register"
      exact
      className="Navigation__link"
      activeClassName="Navigation__link--active"
    >
      register
    </NavLink>
    <NavLink
      to="/login"
      exact
      className="Navigation__link"
      activeClassName="Navigation__link--active"
    >
      login
    </NavLink>
  </div>
);

export default AuthNav;
