import { NavLink } from 'react-router-dom';
import Container from '../../components/Container';
import routes from '../../routes';
import { ReactComponent as ErrorImage } from './404 Error-rafiki.svg';
import './ErrorPage.scss';
const ErrorPage = () => {
  return (
    <Container>
      <p className="ErrorPage-title">Page not found</p>
      <ErrorImage className="ErrorPage__image" />
      <NavLink
        exact
        to={routes.home}
        className="Navigation__link ErrorPage__link"
        activeClassName="Navigation__link--active"
      >
        Return to Home
      </NavLink>
    </Container>
  );
};

export default ErrorPage;
