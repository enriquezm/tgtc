import React from 'react';
import { Linkedin, Mail } from 'react-feather';
import styled from 'styled-components';
import P from './util/P';
import Bold from './util/Bold';

const ContainerFluid = styled.section`
  background: #20364d;
  color: white;
`;

const ContainerFixed = styled.section`
  max-width: 992px;
  margin: 0 auto;
  padding: 3% 0;
  text-align: center;
  h3 {
    margin-bottom: 50px;
  }
  p {
    color: white;
  }
  @media screen and (max-width: 600px) {
    padding: 15% 3%;
  }
`;
const Row = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  a {
    border-radius: 8px;
    width: 200px;
    padding: 2%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: #685edb;
    }
    p {
      color: #eeedef;
      margin-bottom: 5px;
      &::first-child {
        font-weight: 900;
      }
    }
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const Contact = () => (
  <ContainerFluid>
    <ContainerFixed>
      <h3>Get in touch</h3>
      <P align="center" color="white">
        Have a job opportunity, idea, or want to collaborate? Shoot me a
        message!
      </P>
      <Row>
        <a href="mailto:enri.myles@gmail.com">
          <Mail />
          <p>
            <Bold>Email</Bold>
          </p>
          <p>enri.myles@gmail.com</p>
        </a>
        <a href="https://www.linkedin.com/in/mylesenriquez/">
          <Linkedin />
          <p>
            <Bold>LinkedIn</Bold>
          </p>
          <p>mylesenriquez</p>
        </a>
      </Row>
    </ContainerFixed>
  </ContainerFluid>
);

export default Contact;
