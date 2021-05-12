import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { authOperations } from './redux/auth';
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

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, []);
  return (
    <>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" component={HomePageView} />
          <Route path="/contacts" component={ContactsView} />
          <Route path="/register" component={RegisterView} />
          <Route path="/login" component={LoginView} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
