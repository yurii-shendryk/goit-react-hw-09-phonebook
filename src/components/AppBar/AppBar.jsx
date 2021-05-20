import { useState } from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import Context from './AppBarContext';
import MobileMenu from '../MobileMenu';
import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';
import Container from '../Container';
import './AppBar.scss';

const AppBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <header className="AppBar__header">
        <div className="AppBar__logo">
          <span className="AppBar__logo--dark">Phone</span>
          <span className="AppBar__logo--light">book</span>
        </div>
        <Context.Provider value={{ isOpen, toggleDropdown }}>
          <MobileMenu>
            <Navigation />
            {isAuthenticated ? <UserMenu /> : <AuthNav />}
          </MobileMenu>
        </Context.Provider>
      </header>
    </Container>
  );
};

export default AppBar;
