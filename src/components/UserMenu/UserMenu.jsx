import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import Context from '../AppBar/AppBarContext';
import { authOperations } from '../../redux/auth';
import './UserMenu.scss';
import Container from '../Container';

const UserMenu = () => {
  const { toggleDropdown } = useContext(Context);
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.getEmail);
  const handleLogout = () => {
    dispatch(authOperations.logOut());
    toggleDropdown();
  };
  return (
    <div className="UserMenu__container">
      <span className="UserMenu__name">{email}</span>
      <button type="button" onClick={handleLogout} className="UserMenu__button">
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
