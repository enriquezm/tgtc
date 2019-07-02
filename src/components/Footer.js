import React from 'react';
import { GitHub, Linkedin, Codepen, Heart } from 'react-feather';
import styled from 'styled-components';
import './Footer.css';

const Container = styled.footer`
  background-color: #35303c;
  padding: 8%;
  ul {
    max-width: 200px;
    margin-bottom: 25px;
  }
  p {
    color: #c2c0c4;
    font-size: 14px;
    text-align: center;
  }
  a svg {
    stroke: #009fff;
  }
  a svg:hover {
    stroke: #007fcc;
  }
`;

const Footer = () => (
  <Container>
    <ul>
      <li>
        <a className="primary" href="https://github.com/enriquezm">
          <GitHub />
        </a>
      </li>
      <li>
        <a
          className="primary"
          href="https://www.linkedin.com/in/mylesenriquez/"
        >
          <Linkedin />
        </a>
      </li>
      <li>
        <a className="primary" href="https://codepen.io/mylesenri/">
          <Codepen />
        </a>
      </li>
    </ul>
    <p css={'vertical-align: center;'}>
      &copy; That Guy That Codes, All Rights Reserved. Built by{' '}
      <a href="https://github.com/enriquezm">Myles</a> with{' '}
      <a href="https://www.gatsbyjs.org/">Gatsby</a> and{' '}
      <Heart color="#f14839" size={14} />.
    </p>
  </Container>
);

export default Footer;
