import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import Section from '../components/Section';
import '../global-styles.css';
import P from '../components/util/P';
import ContainerFluid from '../components/util/ContainerFluid';
import ProjectPosts from '../components/ProjectPosts';
import MiniResume from '../components/MiniResume';

const IndexPage = () => {
  return (
    <div>
      <Header full />
      <ContainerFluid bgColor="#20364D" color="white">
        <Section>
          <h3>More deets on what I do</h3>
          <P>
            > You know those shiny, easy-to-use digital interfaces that us
            humans desperately need to interact with all day, every day? Yeah I
            like to create those. I mainly build them with languages like
            JavaScript using frameworks like ReactJS.
          </P>
        </Section>
      </ContainerFluid>
      <Section centered>
        <h3>Micro projects</h3>
        <P align="center">
          > Not neccessarily projects that'll change the world, but enough to
          keep the gears in my head turning and working.
        </P>
        <ProjectPosts />
      </Section>
      <MiniResume />
      <Contact />
      <Footer />
    </div>
  );
};

export default IndexPage;
