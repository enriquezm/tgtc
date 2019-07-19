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
        <Section centered>
          <h3>A little about me</h3>
          <P align="center">
            I started coding my freshman year in college but I've been a builder
            ever since I could remember. I've always loved to figure out how
            things worked and tried to rebuild them. I guess that's why coding
            has always been fun for me. Fast forward a few years and I'm here,
            coding websites and applications with JavaScript.
          </P>
        </Section>
      </ContainerFluid>
      <Section centered>
        <h3>Some side stuff</h3>
        <P align="center">
          I try to keep busy with side projects that help me learn and keep up
          to date with modern tech, best practices, etc.
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
