import React from 'react';
import Section from './Section';
import styled from 'styled-components';
import AInternal from './util/AInternal';
import Logo from './util/Logo';
import LogoGraphic from './LogoGraphic';
import './Header.css'
import Mouse from './Mouse';
import Button from './util/Button';

const Container = styled.header`
  width: 100%;
  h1 {
    font-weight: 900;
    font-size: 72px;
    color: white;
  }
  h1,
  p {
    animation: slideUp 0.5s ease-in-out;
  }
  p {
    animation-delay: 0.1s;
    padding-left: 10px;
    color: white;
    border-left: 2px solid #40FFC1;
  }
  &.tabs > a:not(:last-child){
    margin-right: 15px;
  }
  nav {
    display: flex;
    justify-content: space-between;
  }
  section {
    width: 75%;
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
  @media only screen and (max-width: 900px) {
    margin-bottom: 100px;
  }
`;

const Header = (props) => {
  return (
    <Section>
      <Container>
        <NavBar>
          <Logo to="/">
            TGTC
          </Logo>
          <div className="tabs">
            {/* <AInternal to="/about/">About</AInternal> */}
            <AInternal to="/resume/">Resume</AInternal>
            {/* <AInternal to="/contact/">Contact</AInternal> */}
          </div>
        </NavBar>
        {
          props.title ? 
          <section>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
          </section> 
          : 
          <section>
            <h1>Hello! My name is Myles.</h1>
            <p>I'm User Interface Engineer focused on designing and building web applications.</p>
            <Button primary>what i can do</Button>
            <Button>let's work together</Button>
          </section>
        }
        <Center>
          <Mouse />
        </Center>
      </Container>
    </Section>
  )
}

export default Header