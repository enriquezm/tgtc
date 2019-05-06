import React from 'react';
import Section from './Section';
import styled from 'styled-components';
import AInternal from './util/AInternal';
import Logo from './util/Logo';
import './Header.css'

const Container = styled.header`
  animation: fadeIn 0.5s ease-in;
  width: 100%;
  height: ${props => props.viewHeight || "100vh"};
  h1 {
    font-weight: 400;
  }
  h1,
  p {
  animation: slideUp 0.5s ease-in-out;
  }
  p {
    animation-delay: 0.1s;
  }
  &.tabs > a:not(:last-child){
    margin-right: 15px;
  }
  nav {
    display: flex;
    justify-content: space-between;
  }
  @media only screen and (max-width: 900px) {
    padding: 3%;
  }
`;

const NavBar = styled.nav`
  margin-bottom: 200px;
  padding-top: 25px;
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
      <Container viewHeight={props.viewHeight}>
        <NavBar>
          <Logo to="/">
            tgtc
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
            <h1>Myles Enriquez</h1>
            <p>Frontend Engineer. Designer. Problem solver. That guy that codes.</p>
          </section>
        }
      </Container>
    </Section>
  )
}

export default Header