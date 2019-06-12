import React from 'react';
import SubPageHeader from '../components/Header';
import Section from '../components/Section';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Resume = styled.div`
  h3 {
    font-size: 18px;
  }
  ul {
    list-style-position: inside;
    li {
      line-height: 1.5;
      font-weight: 300;
    }
  }
  .block {
    margin: 20px 0;
  }
`;

const Container = styled.div`
  @media only screen and (max-width: 900px) {
    padding: 3%;
  }
`;

const ResumePage = () => {
  return (
    <Resume>
      <SubPageHeader
        title="Resume"
        description="What I've done and what I can do."
      />
      <Section
        css={`
          padding-bottom: 0;
        `}
      >
        <Container>
          <h2>Summary</h2>
          <div className="block">
            <p>
              Versatile Front End Engineer with 5+ years of experience
              designing, developing, maintaining, and sometimes breaking
              websites and web applications. Specializes in JavaScript(Vanilla,
              Reactjs, Gatsbyjs) and user experience design.
            </p>
          </div>
        </Container>
      </Section>
      <Section
        css={`
          padding-bottom: 0;
        `}
      >
        <Container>
          <h2>Education</h2>
          <div className="block">
            <h3>Information & Computer Science, B.A.</h3>
            <p>
              University of Hawaii at Manoa
              <br />
              2010-2015
            </p>
          </div>
        </Container>
      </Section>
      <Section
        css={`
          padding-bottom: 0;
        `}
      >
        <Container>
          <h2>Experience</h2>
          <div className="block">
            <h3>Web Specialist January 2017 - Present</h3>
            <p>UNLV, University Marketing & Communications</p>
            <ul
              css={`
                list-style: circle;
              `}
            >
              <li>
                Converted spreadsheet GPA Calculator into an{' '}
                <a href="https://www.unlv.edu/academics/gpacalculator">
                  interactive web application
                </a>
                , using JavaScript and Drupal.
              </li>
              <li>
                Redesigned and refactored degrees directory frontend user
                interface.
              </li>
              <li>
                Provided site analytics reports for department coordinators and
                team.
              </li>
              <li>
                Wrote documentation for degrees directory and site analytics
                using Gitbook.
              </li>
            </ul>
          </div>
          <hr />
          <div className="block">
            <h3>Web Developer January 2016 - April 2016</h3>
            <p>Distance Course Design & Consulting</p>
            <ul
              css={`
                list-style: circle;
              `}
            >
              <li>
                Designed and developed the{' '}
                <a href="https://assist.coe.hawaii.edu/">
                  Assist tutorial site
                </a>{' '}
                using a static site generator (Jekyll).
              </li>
              <li>
                Assisted developers with website enhancements within Wordpress
                sites. Specifically the{' '}
                <a href="https://dcdc.coe.hawaii.edu/ltec-112/">
                  LTEC 112 website
                </a>
                .
              </li>
            </ul>
          </div>
          <hr />
          <div className="block">
            <h3>Web Design Assistant May 2015 - January 2016</h3>
            <p>Distance Course Design & Consulting</p>
            <ul
              css={`
                list-style: circle;
              `}
            >
              <li>
                Designed{' '}
                <a href="https://coe.hawaii.edu/doctoral-student-rating-knowledge-skills-and-dispositions">
                  infographics
                </a>{' '}
                involving stats for the College of Education.
              </li>
              <li>
                Designed social media banners for the College of Education.
              </li>
              <li>Designed the development team t-shirt.</li>
            </ul>
          </div>
        </Container>
      </Section>
      <Section
        css={`
          padding-bottom: 0;
        `}
      >
        <Container>
          <h2>Skills</h2>
          <div className="block">
            <p>
              (proficient): HTML, CSS, SCSS, JavaScript, Git, CLI,
              wireframing/prototyping
            </p>
            <p>(familiar): A11y, Nodejs, Gatsby, React, MySQL</p>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <h2>Recent Projects</h2>
          <div className="block">
            <p>
              <Link to="/project/ui-build-forecast-app">
                UI Build It - Forecast App
              </Link>{' '}
              - A walkthrough demonstrating the steps I take when converting a
              static mock up into an interactive React interface.
            </p>
            <p>
              <Link to="/project/rft-website-redesign">
                Redemption Fight Team Redesign
              </Link>{' '}
              - A website redesign project for a local martial arts gym.
            </p>
            <p>
              <a href="/projects">View more of my projects</a>
            </p>
          </div>
        </Container>
      </Section>
      <Contact />
      <Footer />
    </Resume>
  );
};

export default ResumePage;
