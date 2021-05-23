import { useContext } from 'react';
import Context from '../AppBar/AppBarContext';
import './Logo.scss';

const Logo = () => {
  const { nodeRef } = useContext(Context);
  return (
    <div className="Logo" ref={nodeRef}>
      <span className="Logo--dark">Phone</span>
      <span className="Logo--light">book</span>
    </div>
  );
};
export default Logo;
