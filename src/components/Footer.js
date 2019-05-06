import React from 'react'
import {GitHub, Linkedin, Codepen} from 'react-feather';
import styled from 'styled-components';
import './Footer.css'

const Container = styled.footer`
  background-color: #35303c;
  ul {
    max-width: 200px;
    margin-bottom: 25px;
  }
  p {
    color: white;
    font-size: 16px;
    text-align: center;
  }
  a svg {
    stroke: #009FFF;
  }
  a svg:hover {
    stroke: #007fcc;
  }
`;

const Footer = () => (
  <Container>
    <ul>
      <li><a className="primary" href="https://github.com/enriquezm"><GitHub /></a></li>
      <li><a className="primary" href="https://www.linkedin.com/in/mylesenriquez/"><Linkedin /></a></li>
      <li><a className="primary" href="https://codepen.io/mylesenri/"><Codepen /></a></li>
    </ul>
    <p>&copy;2019 That Guy That Codes, All Rights Reserved.</p>
  </Container>
)

export default Footer;