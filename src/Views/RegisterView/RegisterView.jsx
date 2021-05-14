import { useState } from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import { ToastContainer } from 'react-toastify';
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

  const nameClasses = classNames(
    'RegisterForm_label',
    'Registerform_label-name',
  );

  const emailClasses = classNames(
    'RegisterForm_label',
    'Registerform_label-email',
  );

  const passwordClasses = classNames(
    'RegisterForm_label',
    'Registerform_label-password',
  );

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
      <ToastContainer />
      <div>
        <h1>Create account</h1>
        <form
          autoComplete="off"
          onSubmit={handleSubmit}
          className="Registerform"
        >
          <label className={nameClasses}>
            Name
            <input
              type="text"
              name="name"
              value={name}
              pattern="^\s*[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*\s*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              placeholder=" "
              onChange={handleInputChange}
              className="Registerform__input"
            />
          </label>
          <label className={emailClasses}>
            Email
            <input
              type="email"
              name="email"
              value={email}
              placeholder=" "
              onChange={handleInputChange}
              className="Registerform__input"
            />
          </label>
          <label className={passwordClasses}>
            Password
            <input
              type="password"
              name="password"
              value={password}
              placeholder=" "
              onChange={handleInputChange}
              className="Registerform__input"
            />
          </label>
          <button type="submit" className="Registerform_button">
            Registrate
          </button>
        </form>
      </div>
    </Container>
  );
};

export default RegisterView;
