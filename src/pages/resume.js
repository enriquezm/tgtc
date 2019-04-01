import React from 'react';
import Header from "../components/Header";
import styled from 'styled-components';

const Resume = styled.div`
  section {
    margin-bottom: 30px;
    h2 {
      margin-bottom: 8px;
    }
    ul {
      margin: 5px 0;
      li {
        &:before {
          content: '- ';
        }
      }
    }
    .block {
      margin: 20px 0;
    }
  }
`;

const ResumePage = () => {
  return (
    <Resume>
      <Header title="Resume" description="What I've done and I can do." />
      <section>
        <h2>Education</h2>
        <div className="block">
          <h3>Information & Computer Science, B.A.</h3>
          <p>University of Hawaii at Manoa<br />
          2010-2015</p>
        </div>
      </section>
      <section>
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
          <h3>Web Developer May 2011 - May 2013</h3>
          <p>Distance Course Design & Consulting</p>
          <ul>
            <li>Designed and developed the <a href="https://assist.coe.hawaii.edu/">Assist tutorial site</a> using a static site generator (Jekyll).</li>
            <li>Assisted developers with website enhancements within Wordpress sites.</li>
          </ul>
        </div>
        <hr></hr>
        <div className="block">
          <h3>Web Design Assistant August 2010 - May 2011</h3>
          <p>Distance Course Design & Consulting</p>
          <ul>
            <li>Designed infographics involving stats for the College of Education.</li>
            <li>Designed social media banners for the College of Education.</li>
            <li>Designed the development team t-shirt.</li>
          </ul>
        </div>
      </section>
      <section>
        <h2>Projects</h2>
        <div className="block">
          <h3>Habit Rabbit</h3>
          <p>A habit forming application. Aimed to start, manage, and maintain a habit.</p>
          <p>Utilizes: Reactjs, Nodejs, mysql</p>
          <p>Source: https://github.com/enriquezm/habbit-hub</p>
        </div>
        <div className="block">
          <h3>Scoreboard Application</h3>
          <p>React application connecting to a firebase database.</p>
          <p>Utilizes: Reactjs, Firebase</p>
          <p>Demo:</p>
        </div>
      </section>
      <section>
        <h2>Skills</h2>
        <div className="block">
          <p>(proficient): HTML, CSS, SCSS, JavaScript, Git, CLI, wireframing/prototyping</p>
          <p>(familiar): A11y, Nodejs, Gatsby, React, MySQL</p>
        </div>
      </section>
    </Resume>
  )
};

export default ResumePage;