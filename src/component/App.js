import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import ContactList from './ContactList';
import AddContact from './AddContact';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [contacts, setContacts] = useState([]);
  const LOCAL_STORAGE_KEY = "contacts";

  // Add new contact
  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuidv4(), ...contact }]);
  };

  // Delete contact
  const delContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  // Load contacts from local storage
  useEffect(() => {
    const retrievedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrievedData) {
      setContacts(retrievedData);
    }
  }, []);

  // Save contacts to local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (


  <Router>
        <Header/> 
      <Routes>
        
        <Route path="/" element={<ContactList contacts={contacts} onDelete={delContact} />} />
        <Route path="/add" element={<AddContact addContactHandler={addContactHandler} />} />
      </Routes>
    </Router>
  
  );
}

export default App;