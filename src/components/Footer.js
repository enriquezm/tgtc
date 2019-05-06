import React from 'react'
import AInternal from './util/AInternal';
import {GitHub, Linkedin, Codepen} from 'react-feather';
import styled from 'styled-components';
import './Footer.css'

const Container = styled.footer`
  ul {
    max-width: 200px;
    margin-bottom: 25px;
  }
  p {
    color: white;
  }
`;

const Footer = () => (
  <Container>
    <ul>
      <li><a className="primary" href="https://github.com/enriquezm"><GitHub /></a></li>
      <li><a className="primary" href="https://www.linkedin.com/in/mylesenriquez/"><Linkedin /></a></li>
      <li><a className="primary" href="https://codepen.io/mylesenri/"><Codepen /></a></li>
    </ul>
    <p>&copy;2019 <AInternal onDark to="/">thatguythat.codes</AInternal>, All Rights Reserved.</p>
  </Container>
)

export default Footer