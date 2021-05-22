import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Context from '../AppBar/AppBarContext';
import routes from '../../routes';
import { authSelectors } from '../../redux/auth';

import './Navigation.scss';

const Navigation = () => {
  const { toggleDropdown } = useContext(Context);
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  return (
    <div className="Navigation">
      <ul className="Navigation__list">
        <li className="Navigation__list-item">
          <NavLink
            exact
            to={routes.home}
            className="Navigation__link"
            activeClassName="Navigation__link--active"
            onClick={toggleDropdown}
          >
            Home
          </NavLink>
        </li>
        {isAuthenticated && (
          <li className="Navigation__list-item">
            <NavLink
              to={routes.contacts}
              className="Navigation__link"
              activeClassName="Navigation__link--active"
              onClick={toggleDropdown}
            >
              Contacts
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navigation;
