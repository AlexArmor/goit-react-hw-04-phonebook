import PropTypes from 'prop-types';
import { Component } from 'react';
import { Form } from './ContactForm.styled';
import { Title } from './ContactForm.styled';
import { InputName } from './ContactForm.styled';
import { InputNumber } from './ContactForm.styled';
import { BtnSubmit } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  inputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state);
    event.target.reset();
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Title>Name</Title>
        <InputName
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.inputChange}
        />
        <h3>Number</h3>
        <InputNumber
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.inputChange}
        />
        <BtnSubmit type="submit">Add contacts</BtnSubmit>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
