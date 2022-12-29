import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Section } from './App.styled';

export const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) || []
  );

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onFormSubmit = text => {
    const isAtList = contacts.find(contact => contact.name === text.name);
    if (isAtList) {
      alert(`${text.name} is already in contacts`);
      return;
    }
    const contact = {
      ...text,
      id: nanoid(),
    };
    setContacts(prevState => [...prevState, contact]);
  };

  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };

  const onInputChange = filter => {
    setFilter(filter);
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const filteredContacts = filterContacts();
  return (
    <Section>
      <h1>Phone book</h1>
      <ContactForm onFormSubmit={onFormSubmit} />
      <h2>Contacts</h2>
      <Filter onInputChange={onInputChange} />
      <ContactList data={filteredContacts} deleteContact={deleteContact} />
    </Section>
  );
};
