import { Component } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

let cx = classNames.bind(styles);

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmitForm(this.state);
    this.reset();
  };

  reset = () =>
    this.setState({
      name: '',
      number: '',
    });

  render() {
    const nameClasses = cx('ContactForm_label', 'ContactForm_label--name');
    const numberClasses = cx('ContactForm_label', 'ContactForm_label--number');
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={styles.ContactForm}>
        <label className={nameClasses}>
          Name
          <input
            type="text"
            name="name"
            className={styles.ContactForm__input}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            placeholder=" "
            required
            value={name}
            onChange={this.handleInputChange}
          />
        </label>
        <label className={numberClasses}>
          Nubmer
          <input
            type="tel"
            name="number"
            className={styles.ContactForm__input}
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            placeholder=" "
            required
            value={number}
            onChange={this.handleInputChange}
          />
        </label>

        <button type="submit" className={styles.ContactForm_button}>
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};

export default ContactForm;
