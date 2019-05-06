import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Container = styled.form`
  padding: 2%;
`;

const Row = styled.div`
  display: flex;
  justify-content: ${props => props.justifyContent || 'flex-start'};
  margin-bottom: 20px;
  input {
    width: 47%;
  }
  textarea {
    width: 100%;
  }
  input,
  textarea {
    padding: 5px;
    font-weight: 300;
    border: none;
  }
`;

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      email: "",
      message: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  handleSubmit(event){
    event.preventDefault();
    alert(`Thank you ${this.state.firstName}!`);
    this.setState(
      {
        firstName: "",
        email: "",
        message: ""
      }
    );
  }
  render() {
    return (
      <Container 
        method="post" 
        onSubmit={this.handleSubmit}
        name="contact"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <Row justifyContent="space-between">
          <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
              placeholder="Name"
          />
          <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="Email"
          />
        </Row>
        <Row>
          <textarea placeholder="Message" name="message" value={this.state.message} onChange={this.handleChange}></textarea>
        </Row>
        <Row justifyContent="flex-end">
          <Button type="submit">Submit</Button>
        </Row>
      </Container>
    );
  }
}

export default Form;