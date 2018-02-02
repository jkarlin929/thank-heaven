import React, { Component } from 'react';
import {Form, Col, FormGroup, ControlLabel, FormControl, Button, Checkbox} from 'react-bootstrap';


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
        <Form horizontal method="POST" action="https://formspree.io/jkarlin29@yahoo.com">
        <FormGroup controlId="formHorizontalName">
          <Col componentClass={ControlLabel} sm={2} name="name" for="name">
            Name
          </Col>
          <Col sm={10}>
            <FormControl type="text" name="name" placeholder="Name" onChange={this.handleChange}
          />
        </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPhone">
          <Col componentClass={ControlLabel} sm={2} name="phone" for="phone">
            Phone Number
          </Col>
          <Col sm={10}>
            <FormControl type="text" name="phone" placeholder="Your Phone Number" onChange={this.handleChange} />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2} name="email" for="email">
            Email Address
          </Col>
          <Col sm={10}>
            <FormControl type="text" name="email" placeholder="Your Email" onChange={this.handleChange} />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalByPhoneOrByEmail">
        <Col componentClass={ControlLabel} sm={2} name="preference">
            I prefer to be contacted:
          </Col>
        <Col componentClass={ControlLabel} sm={2}>
            <Checkbox inline type="checkbox" name="contact by" value="phone" onChange={this.handleChange}>by phone</Checkbox>
            <Checkbox inline type="checkbox" name="contact by" value="email" onChange={this.handleChange}>by email</Checkbox>
        </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalMessage">
          <Col componentClass={ControlLabel} sm={2} name="message" for="message">
            Message
          </Col>
          <Col sm={10}>
            <FormControl type="text" name="message" placeholder="Your Message" onChange={this.handleChange}></FormControl>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="submit">Send</Button>
          </Col>
        </FormGroup>
            <FormControl type="hidden" name="_next" value="/" />
        </Form>;
      </div>
    );
  }
}

export default MessageForm;