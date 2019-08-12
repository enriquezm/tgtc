import React from 'react';
import { GitHub, Linkedin, Codepen, Heart } from 'react-feather';
import styled from 'styled-components';
import './Footer.css';

const Container = styled.footer`
  padding: 8%;
  ul {
    max-width: 200px;
    margin-bottom: 25px;
  }
  p {
    color: var(--primary-font-color);
    font-size: 14px;
    text-align: center;
  }
  a svg {
    stroke: var(--primary-link-color);
  }
  a svg:hover {
    stroke: var(--primary-link-color);
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
      <Heart color="rgba(0, 255, 156, 1)" size={14} />.
    </p>
  </Container>
);

export default Footer;
