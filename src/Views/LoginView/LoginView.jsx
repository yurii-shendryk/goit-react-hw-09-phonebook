import { useState } from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import { ToastContainer } from 'react-toastify';
import Container from '../../components/Container';
import { authOperations } from '../../redux/auth';
import './LoginView.scss';

const LoginView = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const updateEmail = ({ currentTarget }) => {
    setEmail(currentTarget.value);
  };

  const [password, setPassword] = useState('');

  const updatePassword = ({ currentTarget }) => {
    setPassword(currentTarget.value);
  };
  const emailClasses = classNames('LoginForm_label', 'Loginform_label-email');

  const passwordClasses = classNames(
    'LoginForm_label',
    'Loginform_label-password',
  );

  const handleSubmit = event => {
    event.preventDefault();
    const user = {
      email,
      password,
    };
    dispatch(authOperations.logIn(user));
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
              onChange={updateEmail}
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
              onChange={updatePassword}
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
