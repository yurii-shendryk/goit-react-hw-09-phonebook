import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import Container from '../../components/Container';
import './RegisterView.scss';

const RegisterView = () => {
  const dispatch = useDispatch();

  const initialState = {
    name: '',
    email: '',
    password: '',
  };
  const [registerState, setRegisterState] = useState(initialState);
  const { name, email, password } = registerState;

  const handleInputChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setRegisterState(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(authOperations.register(registerState));
  };

  return (
    <Container>
      <div>
        <h1>Register page</h1>
        <form autoComplete="off" onSubmit={handleSubmit} className="form">
          <label className="label">
            name
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleInputChange}
            />
          </label>
          <label className="label">
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
          </label>
          <label className="label">
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleInputChange}
            />
          </label>
          <button type="submit">Registrate</button>
        </form>
      </div>
    </Container>
  );
};

export default RegisterView;
