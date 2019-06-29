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
    <Section>
      <h2>My Coder's Code</h2>
      <p>
        The following items are adopted from the{' '}
        <a href="https://www.amazon.com/Pragmatic-Programmer-Journeyman-Master/dp/020161622X">
          Pragmatic Programmer
        </a>
        . I try to stick to these as my own personal programmer's code.
      </p>
      <ul>
        <li>Provide options, don't make lame excuses.</li>
        <li>DRY - Don't Repeat Yourself.</li>
        <li>Use the power of command shells.</li>
        <li>Always use source code control.</li>
        <li>Invest regularly in your knowledge portfolio.</li>
        <li>Prototype to learn.</li>
        <li>Fix the problem, not the blame.</li>
        <li>Design to test.</li>
      </ul>
    </Section>
    <Contact />
    <Footer />
  </div>
);

export default IndexPage;
