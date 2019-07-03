import React from 'react';
import Section from './Section';
import styled from 'styled-components';
import Logo from './util/Logo';
import './Header.css';
import Mouse from './Mouse';
import { Helmet } from 'react-helmet';
import NavLink from './util/NavLink';
import GitHubButton from 'react-github-btn';
import { TwitterFollowButton } from 'react-twitter-embed';

const Container = styled.header`
  width: 100%;
  h1 {
    font-weight: 400;
  }
  h1,
  p {
    animation: slideUp 0.5s ease-in-out;
    width: 60%;
  }
  p {
    animation-delay: 0.1s;
    color: black;
  }
  &.tabs > a:not(:last-child) {
    margin-right: 15px;
  }
  nav {
    display: flex;
    justify-content: space-between;
  }
  @media screen and (max-width: 768px) {
    height: 100vh;
    h1,
    p {
      width: 100%;
    }
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

const SocialButtons = styled.div`
  width: 50%;
  display: flex;
`;

const ButtonWrapper = styled.div`
  margin-right: 15px;
`;

const Header = props => {
  return (
    <Section>
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
            {/* <AInternal to="/about/">About</AInternal> */}
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about/">About</NavLink>
            <NavLink to="/resume/">Resume</NavLink>
            {/* <AInternal to="/contact/">Contact</AInternal> */}
          </div>
        </NavBar>
        {props.title ? (
          <section>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
          </section>
        ) : (
          <section>
            <h1>Hi, I'm Myles.</h1>
            <p>
              I'm a Frontend Developer focused on building websites and
              applications with{' '}
              <a href="http://vanilla-js.com/">vanilla JavaScript</a>. Sometimes
              I'll also work with modern tech, like Gatsby and React (which is
              how{' '}
              <a href="https://github.com/enriquezm/tgtc">this whole site</a>{' '}
              was built).
            </p>
            <p>
              At the end of the day, I'm just a problem solver and builder. Give me a problem, and
              I'll find the solution.
            </p>
            <SocialButtons>
              <ButtonWrapper>
                <GitHubButton
                  href="https://github.com/enriquezm"
                  data-show-count="true"
                  aria-label="Follow @enriquezm on GitHub"
                >
                  Stalk Me
                </GitHubButton>
              </ButtonWrapper>
              <ButtonWrapper>
                <TwitterFollowButton screenName={'designthrottle'} />
              </ButtonWrapper>
            </SocialButtons>
          </section>
        )}
        <Center>
          <Mouse />
        </Center>
      </Container>
    </Section>
  );
};

export default Header;
