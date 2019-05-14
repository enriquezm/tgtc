import React from 'react';
import Section from './Section';
import styled from 'styled-components';
import AInternal from './util/AInternal';
import Logo from './util/Logo';
import LogoGraphic from './LogoGraphic';
import './Header.css'
import Mouse from './Mouse';

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
    color: #949494;
  }
  &.tabs > a:not(:last-child){
    margin-right: 15px;
  }
  nav {
    display: flex;
    justify-content: space-between;
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
            <h1>Myles Enriquez</h1>
            <p>User Interface Engineer</p>
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