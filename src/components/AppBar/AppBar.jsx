import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';
import Container from '../Container';
import './AppBar.scss';
const AppBar = () => {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  return (
    <Container>
      <header className="AppBar__header">
        <Navigation />
        {isAuthenticated ? <UserMenu /> : <AuthNav />}
      </header>
    </Container>
  );
};

export default AppBar;
