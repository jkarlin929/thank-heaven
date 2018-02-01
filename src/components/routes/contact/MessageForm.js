import React, { Component } from 'react';
class MessageForm extends Component {
  constructor(props) {
  super(props);
  this.state = {
    name: '',
    phone: '',
    email: '',
    contact: '',
    message: '',
    formSent: false
  }
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleChange = this.handleChange.bind(this);
}
  handleSubmit(e) {
    e.preventDefault();
    console.log('here is what you are submitting', this.state)
    fetch('/send', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name,
        phone: this.state.phone,
        email: this.state.email,
        contact: this.state.contact,
        message: this.state.message,
        formSent: this.state.formSent,
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.success) {
        this.setState({formSent: true})
      }
      else this.setState({formSent: false})
    })
    .catch((err) => {
      console.log(err)
    })
  }
  handleChange(e) {
    let name = e.target.name;
    let value = e.target.value
    this.setState({
      [name] : value
    })
  }
  render() {
    return (
      <div className="messageform">
      <h1>Send a Message</h1>
        <form method="POST" action="send" onSubmit={this.handleSubmit}>
          <label for="name">
            Name
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <label for="phone">
            Phone Number
            <input type="text" name="phone" onChange={this.handleChange} />
          </label>
          <label for="email">
            Email Address
            <input type="text" name="email" onChange={this.handleChange} />
          </label>
           <label>
            I prefer to be contacted:
          </label>
          <label>
            by phone
            <input type="radio" name="contact" onChange={this.handleChange} />
            </label>
          <label>
            by email
            <input type="radio" name="contact" onChange={this.handleChange} />
            </label>
          <label for="message">
            Message
            <input type="text" name="message" onChange={this.handleChange} />
          </label>
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}
export default MessageForm;
