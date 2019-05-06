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
    padding: 5px 10px;
    font-weight: 300;
    border: none;
  }
`;

const Form = () => (
  <Container
    method="post"
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
          placeholder="Name"
      />
      <input
          type="text"
          name="email"
          placeholder="Email"
      />
      </Row>
      <Row>
      <textarea 
        placeholder="Message" 
        name="message"
      >
      </textarea>
      </Row>
      <Row justifyContent="flex-end">
        <Button type="submit">Submit</Button>
      </Row>
  </Container>
)

export default Form;