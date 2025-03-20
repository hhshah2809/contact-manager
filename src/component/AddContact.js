import React from 'react';
import { useNavigate } from 'react-router-dom';

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("All fields are mandatory");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
    this.props.navigate('/'); // Redirect to the contact list after adding
  };

  render() {
    return (
      <>
        <br />
        <br />
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name: </label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              placeholder="Enter Name"
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email: </label>
            <input
              type="text"
              name="email"
              value={this.state.email}
              placeholder="Enter email"
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </>
    );
  }
}

// Wrap AddContact with a function component to use the useNavigate hook
export default function AddContactWrapper(props) {
  const navigate = useNavigate();
  return <AddContact {...props} navigate={navigate} />;
}