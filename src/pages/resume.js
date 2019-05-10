import React from 'react';
import Header from "../components/Header";
import Section from "../components/Section";
import Footer from "../components/Footer";
import styled from 'styled-components';


const Resume = styled.div`
  ul {
    margin: 5px 0;
    li {
      line-height: 1.5;
      font-weight: 300;
      &:before {
        content: '- ';
      }
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
      <Header title="Resume" description="What I've done and what I can do." />
      <Section>
        <Container>
          <h2>Education</h2>
          <div className="block">
            <h3>Information & Computer Science, B.A.</h3>
            <p>University of Hawaii at Manoa<br />
            2010-2015</p>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <h2>Experience</h2>
          <div className="block">
            <h3>Web Specialist January 2017 - Present</h3>
            <p>UNLV, University Marketing & Communications</p>
            <ul>
              <li>Converted spreadsheet GPA Calculator into an <a href="https://www.unlv.edu/academics/gpacalculator">interactive web application</a>, using JavaScript and Drupal.</li>
              <li>Redesigned and refactored degrees directory frontend user interface.</li>
              <li>Provided site analytics reports for department coordinators and team.</li>
              <li>Wrote documentation for degrees directory and site analytics using Gitbook.</li>
            </ul>
          </div>
          <hr></hr>
          <div className="block">
            <h3>Web Developer January 2016 - April 2016</h3>
            <p>Distance Course Design & Consulting</p>
            <ul>
              <li>Designed and developed the <a href="https://assist.coe.hawaii.edu/">Assist tutorial site</a> using a static site generator (Jekyll).</li>
              <li>Assisted developers with website enhancements within Wordpress sites.</li>
            </ul>
          </div>
          <hr></hr>
          <div className="block">
            <h3>Web Design Assistant May 2015 - January 2016</h3>
            <p>Distance Course Design & Consulting</p>
            <ul>
              <li>Designed infographics involving stats for the College of Education.</li>
              <li>Designed social media banners for the College of Education.</li>
              <li>Designed the development team t-shirt.</li>
            </ul>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <h2>Skills</h2>
          <div className="block">
            <p>(proficient): HTML, CSS, SCSS, JavaScript, Git, CLI, wireframing/prototyping</p>
            <p>(familiar): A11y, Nodejs, Gatsby, React, MySQL</p>
          </div>
        </Container>
      </Section>
      <Footer />
    </Resume>
  )
};

export default ResumePage;