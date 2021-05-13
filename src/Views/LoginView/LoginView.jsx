import { useState } from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import { ToastContainer } from 'react-toastify';
import Container from '../../components/Container';
import { authOperations } from '../../redux/auth';
import './LoginView.scss';

const LoginView = () => {
  const dispatch = useDispatch();

  const initialState = {
    email: '',
    password: '',
  };

  const [loginState, setLoginState] = useState(initialState);
  const { email, password } = loginState;

  const emailClasses = classNames('LoginForm_label', 'Loginform_label-email');

  const passwordClasses = classNames(
    'LoginForm_label',
    'Loginform_label-password',
  );

  const handleChange = ({ target: { name, value } }) => {
    setLoginState(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(authOperations.logIn(loginState));
  };

  return (
    <Container>
      <ToastContainer />
      <div>
        <h1>Account login</h1>
        <form autoComplete="off" onSubmit={handleSubmit} className="Loginform">
          <label className={emailClasses}>
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder=" "
              className="Loginform__input"
            />
          </label>
          <label className={passwordClasses}>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder=" "
              className="Loginform__input"
            />
          </label>
          <button type="submit" className="Loginform_button">
            Login
          </button>
        </form>
      </div>
    </Container>
  );
};

export default LoginView;
