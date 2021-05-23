import { useContext } from 'react';
import PropTypes from 'prop-types';
import IconButton from '../IconButton';
import Context from '../AppBar/AppBarContext';
import { ReactComponent as IconMenu } from '../../icons/icon-menu.svg';
import { ReactComponent as IconCross } from '../../icons/icon-cross.svg';
import './MobileMenu.scss';

const MobileMenu = ({ children }) => {
  const { isOpen, toggleDropdown } = useContext(Context);

  return (
    <>
      <IconButton
        onClick={toggleDropdown}
        aria-label="mobile-menu"
        className="MobileMenu__button"
      >
        {isOpen ? (
          <IconCross className="MobileMenu__icon" />
        ) : (
          <IconMenu className="MobileMenu__icon" />
        )}
      </IconButton>
      <div
        className={
          isOpen ? 'MobileMenu__content  is-open' : 'MobileMenu__content'
        }
      >
        {children}
      </div>
    </>
  );
};

MobileMenu.defaultProps = {
  children: [],
};

MobileMenu.propTypes = {
  children: PropTypes.node,
};

export default MobileMenu;
