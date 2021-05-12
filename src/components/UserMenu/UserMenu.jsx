import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import './UserMenu.scss';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getName);
  const handleLogout = () => {
    dispatch(authOperations.logOut());
  };
  return (
    <div className="UserMenu__container">
      <span className="UserMenu__name">Welcome, {name}</span>
      <button type="button" onClick={handleLogout} className="UserMenu__button">
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
