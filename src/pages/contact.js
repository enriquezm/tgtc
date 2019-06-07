import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import styled from 'styled-components';


const Container = styled.section`
  
`;

const ContactPage = () => {
  return (
    <Container>
      <Header title="Contact" description="Have an idea and need to get it rolling? Let's get in touch!" />
      <Contact />
      <Footer />
    </Container>
  )
};

export default ContactPage;