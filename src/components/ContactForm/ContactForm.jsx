import PropTypes from 'prop-types';
import { useState } from 'react';
import { Form } from './ContactForm.styled';
import { Title } from './ContactForm.styled';
import { InputName } from './ContactForm.styled';
import { InputNumber } from './ContactForm.styled';
import { BtnSubmit } from './ContactForm.styled';

export const ContactForm = ({ onFormSubmit }) => {
  const [userData, setUserData] = useState({});

  const inputChange = event => {
    setUserData(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    onFormSubmit(userData);
    event.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Name</Title>
      <InputName
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={inputChange}
      />
      <h3>Number</h3>
      <InputNumber
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={inputChange}
      />
      <BtnSubmit type="submit">Add contacts</BtnSubmit>
    </Form>
  );
};

ContactForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
