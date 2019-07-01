import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import Section from '../components/Section';
import ProjectPosts from '../components/ProjectPosts';
import '../global-styles.css';

const IndexPage = () => (
  <div>
    <Helmet>
      <title>That Guy That Codes | Projects</title>
      <link rel="canonical" href="https://thatguythat.codes" />
    </Helmet>
    <Header
      title="Projects"
      description="All my projects involving websites, applications, designs, and experiments."
      full
    />
    <Section>
      <ProjectPosts />
    </Section>
    <Contact />
    <Footer />
  </div>
);

export default IndexPage;