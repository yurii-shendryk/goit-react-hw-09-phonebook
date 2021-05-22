import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Context from '../AppBar/AppBarContext';
import './AuthNav.scss';

const AuthNav = () => {
  const { toggleDropdown } = useContext(Context);
  return (
    <div className="AuthNav">
      <ul className="AuthNav__list">
        <li className="AuthNav__list-item">
          <NavLink
            to="/register"
            exact
            className="Navigation__link"
            activeClassName="Navigation__link--active"
            onClick={toggleDropdown}
          >
            Register
          </NavLink>
        </li>
        <li className="AuthNav__list-item">
          <NavLink
            to="/login"
            exact
            className="Navigation__link"
            activeClassName="Navigation__link--active"
            onClick={toggleDropdown}
          >
            Login
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AuthNav;
