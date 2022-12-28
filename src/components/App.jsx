import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Section } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const data = localStorage.getItem('contacts');

    if (data) {
      const parsedData = JSON.parse(data);
      this.setState({
        contacts: parsedData,
      });
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  onFormSubmit = text => {
    const isAtList = this.state.contacts.find(
      contact => contact.name === text.name
    );
    if (isAtList) {
      alert(`${text.name} is already in contacts`);
      return;
    }
    const contact = {
      ...text,
      id: nanoid(),
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };

  onInputChange = filter => {
    this.setState({ filter });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const filteredContacts = this.filteredContacts();
    return (
      <Section>
        <h1>Phone book</h1>
        <ContactForm onFormSubmit={this.onFormSubmit} />
        <h2>Contacts</h2>
        <Filter onInputChange={this.onInputChange} />
        <ContactList
          data={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </Section>
    );
  }
}
