import React from 'react';
import Section from './Section';
import styled from 'styled-components';
import Logo from './util/Logo';
import './Header.css';
import Mouse from './Mouse';
import { Helmet } from 'react-helmet';
import NavLink from './util/NavLink';

const Container = styled.header`
  width: 100%;
  h1 {
    font-weight: 400;
  }
  h1,
  p {
    animation: slideUp 0.5s ease-in-out;
  }
  p {
    animation-delay: 0.1s;
    color: var(--primary-font-color);
    &:before {
      content: '>';
    }
  }
  &.tabs > a:not(:last-child) {
    margin-right: 15px;
  }
  nav {
    display: flex;
    justify-content: space-between;
  }
  @media screen and (max-width: 600px) {
    height: 100vh;
  }
`;

const Center = styled.div`
  padding: 5% 0;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const NavBar = styled.nav`
  margin-bottom: 200px;
  padding-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    a {
      margin-left: 20px;
    }
  }
  @media only screen and (max-width: 900px) {
    margin-bottom: 100px;
  }
`;

const SubPageHeader = props => {
  return (
    <Section css={'padding-bottom: 0;'}>
      <Container>
        <Helmet>
          <html lang="en" />
          <title>That Guy That Codes</title>
          <link rel="canonical" href="https://thatguythat.codes" />
          <meta
            name="description"
            content="Front end engineer portfolio website for Myles Enriquez."
          />
        </Helmet>
        <NavBar>
          <Logo to="/">TGTC</Logo>
          <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about/">About</NavLink>
            <NavLink to="/projects/">Projects</NavLink>
          </div>
        </NavBar>
        {props.title ? (
          <section>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
          </section>
        ) : (
          <section>
            <h1>Hello there!</h1>
            <p>
              My name is Myles and I'm a UI Engineer focused on building
              websites and applications with JavaScript.
            </p>
          </section>
        )}
        <Center>
          <Mouse color="#00ff9c" />
        </Center>
      </Container>
    </Section>
  );
};

export default SubPageHeader;
