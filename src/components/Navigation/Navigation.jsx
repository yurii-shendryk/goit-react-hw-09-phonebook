import { NavLink } from 'react-router-dom';
import Container from '../Container';
import routes from '../../routes';
import './Navigation.scss';

const Navigation = () => {
  return (
    <nav className="Navigation">
      <ul className="Navigation__list">
        <li className="Navigation__list-item">
          <NavLink
            exact
            to={routes.home}
            className="Navigation__link"
            activeClassName="Navigation__link--active"
          >
            Home
          </NavLink>
        </li>
        <li className="Navigation__list-item">
          <NavLink
            to={routes.contacts}
            className="Navigation__link"
            activeClassName="Navigation__link--active"
          >
            Contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
