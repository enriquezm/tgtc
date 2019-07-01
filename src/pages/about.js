import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import Section from '../components/Section';
import '../global-styles.css';

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
      <h2>My Story</h2>
      <p>
        I started coding my freshman year in college but I've been a builder
        ever since I could remember. I've always loved to figure out how things
        worked and tried to rebuild them. I guess that's why coding has always
        been fun for me.
      </p>
      <p>
        Throughout my coding career I've been involved in hackathons, building
        websites, building web applications, and some freelancing. I mainly
        focus on JavaScript, but with a background in computer science, I can
        pick up any language given a couple days. I love to explore and study
        new frameworks, tools, and concepts. But at the end of the day, I make
        sure the fundamentals continue to be my priority.
      </p>
      <p>
        My short goal as a developer is to create and learn as much as I can. As
        of right now, I want to get better at JavaScript. My long goal is to
        build a tool that could help out a niche of users.
      </p>
      <p>
        Outside of programming, I enjoy trail running and brazilian jiu jitsu.
      </p>
    </Section>
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
