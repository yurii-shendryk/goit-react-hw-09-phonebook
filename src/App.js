import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Suspense, lazy } from 'react';
// eslint-disable-next-line
import { Switch, Route } from 'react-router-dom';
import { authOperations } from './redux/auth';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import AppBar from './components/AppBar';
import Loader from './components/Loader';

const HomePageView = lazy(() =>
  import('./Views/HomePageView' /* webpackChunkName: "home-page" */),
);

const ContactsView = lazy(() =>
  import('./Views/ContactsView' /* webpackChunkName: "contacts-page" */),
);

const RegisterView = lazy(() =>
  import('./Views/RegisterView' /* webpackChunkName: "register-page" */),
);
const LoginView = lazy(() =>
  import('./Views/LoginView' /* webpackChunkName: "login-page" */),
);

const PageNotFound = lazy(() =>
  import('./Views/ErrorPage' /* webpackChunkName: "404-page" */),
);

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Switch>
          <PublicRoute exact path="/">
            <HomePageView />
          </PublicRoute>
          <PrivateRoute path="/contacts" redirectTo="/login">
            <ContactsView />
          </PrivateRoute>
          <PublicRoute restricted path="/register" redirectTo="/contacts">
            <RegisterView />
          </PublicRoute>

          <PublicRoute restricted path="/login" redirectTo="/contacts">
            <LoginView />
          </PublicRoute>
          <PublicRoute>
            <PageNotFound />
          </PublicRoute>
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
