import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <div>
        <h2>Contact Manager</h2>
        
        <div >
          <Link to="/">Contact List</Link>
          <Link to="/add" style={{ marginLeft: '20px' }}>Add Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;