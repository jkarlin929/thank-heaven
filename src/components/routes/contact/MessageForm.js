import React, { Component } from 'react';
import {Form, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';

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
        <Form inline method="POST" action="https://formspree.io/jkarlin29@yahoo.com">
        <FormGroup controlId="formInlineName">
          <ControlLabel name="name" for="name">
            Name
          </ControlLabel>{''}
            <FormControl type="text" name="name" placeholder="Your Name" onChange={this.handleChange}
          />
        </FormGroup>{''}
        <FormGroup controlId="formInlinePhone">
          <ControlLabel name="phone" for="phone">
            Phone Number
          </ControlLabel>{''}
            <FormControl type="text" name="phone" placeholder="Your Phone Number" onChange={this.handleChange} />
        </FormGroup>{''}
        <FormGroup controlId="formInlineEmail">
          <ControlLabel name="email" for="email">
            Email Address
          </ControlLabel>{''}
            <FormControl type="text" name="email" placeholder="Your Email" onChange={this.handleChange} />
        </FormGroup>{''}
        <FormGroup controlId="formInlinePreference">
          <ControlLabel name="preference">
            I prefer to be contacted:
          </ControlLabel>{''}
        </FormGroup>{''}
        <FormGroup controlId="formInlineByPhone">
          <ControlLabel name="byphone">
            by phone
          </ControlLabel>{''}
            <FormControl type="checkbox" name="contact by" value="phone" onChange={this.handleChange} />
        </FormGroup>{''}
        <FormGroup controlId="formInlineByEmail">
          <ControlLabel name="byemail">
            by email
          </ControlLabel>{''}
            <FormControl type="checkbox" name="contact by" value="email" onChange={this.handleChange} />
        </FormGroup>{''}
        <FormGroup controlId="formInlineMessage">
          <ControlLabel name="message" for="message">
            Message
          </ControlLabel>{''}
            <FormControl type="text" name="message" placeholder="Your Message" onChange={this.handleChange}></FormControl>
        </FormGroup>{''}
          <Button type="submit">Send</Button>
          <FormControl type="hidden" name="_next" value="localhost:3000" />
        </Form>
      </div>
    );
  }
}

export default MessageForm;