import React from 'react';
import ContactCard from './ContactCard';

const ContactList = (props) => {
  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        key={contact.id}
        contact={contact}
        onDelete={props.onDelete}
      />
    );
  });

  return (
    <div className="ui celled list">
      {props.contacts.length > 0 ? renderContactList : <p>No contacts available.</p>}
    </div>
  );
};

export default ContactList;