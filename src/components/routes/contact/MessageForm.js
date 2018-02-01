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
  this.handleChange = this.handleChange.bind(this);
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
        <form method="POST" action="https://formspree.io/jkarlin29@yahoo.com">
          <label name="name" for="name">
            Name
            <input type="text" name="name" placeholder="Your Name" onChange={this.handleChange} />
          </label>
          <label name="phone" for="phone">
            Phone Number
            <input type="text" name="phone" placeholder="Your Phone Number" onChange={this.handleChange} />
          </label>
          <label name="email" for="email">
            Email Address
            <input type="text" name="email" placeholder="Your Email" onChange={this.handleChange} />
          </label>
           <label name="preference">
            I prefer to be contacted:
          </label>
          <label name="byphone">
            by phone
            <input type="checkbox" name="contact by" value="phone" onChange={this.handleChange} />
            </label>
          <label name="byemail">
            by email
            <input type="checkbox" name="contact by" value="email" onChange={this.handleChange} />
            </label>
          <label name="message" for="message">
            Message
            <textarea type="text" name="message" placeholder="Your Message" onChange={this.handleChange}></textarea>
          </label>
          <button type="submit">Send</button>
          <input type="hidden" name="_next" value="localhost:3000" />
        </form>
      </div>
    );
  }
}

export default MessageForm;
