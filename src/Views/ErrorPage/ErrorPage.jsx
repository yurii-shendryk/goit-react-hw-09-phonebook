import { NavLink } from 'react-router-dom';
import Container from '../../components/Container';
import routes from '../../routes';
import { ReactComponent as ErrorImage } from './404 Error-rafiki.svg';
import './ErrorPage.scss';
const ErrorPage = () => {
  return (
    <Container>
      <div className="ErrorPage-container">
        <p className="ErrorPage-title">Page not found</p>
        <ErrorImage className="ErrorPage-image" />
        <NavLink
          exact
          to={routes.home}
          className="Navigation__link"
          activeClassName="Navigation__link--active"
        >
          Return to Home
        </NavLink>
      </div>
    </Container>
  );
};

export default ErrorPage;
