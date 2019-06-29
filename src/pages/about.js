import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import Section from '../components/Section';
import '../global-styles.css';
import GithubData from '../components/GithubData';
import ProjectPosts from '../components/ProjectPosts';

const IndexPage = () => (
  <div>
    <Helmet>
      <title>That Guy That Codes | About</title>
      <link rel="canonical" href="https://thatguythat.codes" />
    </Helmet>
    <Header
      title="About Me"
      description="A glipse of who I am, what I've built, and where I want to go in my career."
      full
    />
    <Contact />
    <Footer />
  </div>
);

export default IndexPage;
