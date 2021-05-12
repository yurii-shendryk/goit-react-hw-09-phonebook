import { useState } from 'react';
import { useDispatch } from 'react-redux';
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
      <div>
        <h1>Login page</h1>
        <form autoComplete="off" onSubmit={handleSubmit} className="form">
          <label className="label">
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </label>
          <label className="label">
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    </Container>
  );
};

export default LoginView;
