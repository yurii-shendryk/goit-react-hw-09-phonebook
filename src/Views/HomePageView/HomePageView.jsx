import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import './HomePageView.scss';
import Container from '../../components/Container';

const HomePageView = () => {
  const name = useSelector(authSelectors.getName);
  const isLogedIn = useSelector(authSelectors.getIsAuthenticated);
  return (
    <Container>
      <div className="HomePageView__container">
        <ToastContainer />
        {isLogedIn ? (
          <h1>
            <span role="img" aria-label="greeting icon">
              📓
            </span>
            Welcome, {name}
            <span role="img" aria-label="greeting icon">
              📞
            </span>
          </h1>
        ) : (
          <h1>
            <span role="img" aria-label="greeting icon">
              📓
            </span>
            Welcome to phonebook
            <span role="img" aria-label="greeting icon">
              📞
            </span>
          </h1>
        )}
      </div>
    </Container>
  );
};

export default HomePageView;
