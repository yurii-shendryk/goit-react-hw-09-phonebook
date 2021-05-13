import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import './UserMenu.scss';

const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.getEmail);
  const handleLogout = () => {
    dispatch(authOperations.logOut());
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
