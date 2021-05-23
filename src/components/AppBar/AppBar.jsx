import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { authSelectors } from '../../redux/auth';
import Context from './AppBarContext';
import MobileMenu from '../MobileMenu';
import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';
import Container from '../Container';
import './AppBar.scss';
import Logo from '../Logo';

const AppBar = () => {
  const nodeRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Context.Provider value={{ isOpen, toggleDropdown, nodeRef }}>
      <header className="AppBar__header">
        <Container>
          <nav className="AppBar__nav">
            <CSSTransition
              in={true}
              appear={true}
              timeout={500}
              classNames="AppBar__Logo-slideIn"
              nodeRef={nodeRef}
              unmountOnExit
            >
              <Logo />
            </CSSTransition>
            <MobileMenu>
              <Navigation />
              {isAuthenticated ? <UserMenu /> : <AuthNav />}
            </MobileMenu>
          </nav>
        </Container>
      </header>
    </Context.Provider>
  );
};

export default AppBar;
