import React from 'react'
import Header from "../components/Header"
import styled from 'styled-components';

const Resume = styled.div`
  section {
    margin-bottom: 20px;
  }
`

const ResumePage = () => {
  return (
    <Resume>
      <Header />
      <section>
        <h2>Education</h2>
        <div className="school-block">
          <p>Information & Computer Science, B.A.<br />
          University of Hawaii at Manoa<br />
          2010-2015</p>
        </div>
      </section>
      <section>
        <h2>Experience</h2>
        <div className="job-block">
          <h3>Web Specialist January 2017 - Present</h3>
          <p>UNLV, University Marketing & Communications</p>
          <ul>
            <li>Converted spreadsheet GPA Calculator into an interactive web application, using JavaScript and Drupal (https://www.unlv.edu/academics/gpacalculator).</li>
            <li>Redesigned and refactored degrees directory frontend user interface.</li>
            <li>Provided site analytics reports for department coordinators and team.</li>
            <li>Wrote documentation for degrees directory and site analytics using Gitbook.</li>
          </ul>
        </div>
        <div className="job-block">
          <h3>Web Developer May 2011 - May 2013</h3>
          <p>Distance Course Design & Consulting</p>
          <ul>
            <li>Designed and developed the Assist tutorial site using a static site generator (Jekyll).</li>
            <li>Assisted developers with website enhancements within Wordpress sites.</li>
          </ul>
        </div>
        <div className="job-block">
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
        <div className="project-block">
          <h3>Habit Rabbit</h3>
          <p>A habit forming application. Aimed to start, manage, and maintain a habit.</p>
          <p>Utilizes: Reactjs, Nodejs, mysql</p>
          <p>Source: https://github.com/enriquezm/habbit-hub</p>
        </div>
        <div className="project-block">
          <h3>Scoreboard Application</h3>
          <p>React application connecting to a firebase database.</p>
          <p>Utilizes: Reactjs, Firebase</p>
          <p>Demo:</p>
        </div>
      </section>
      <section>
        <h2>Skills</h2>
        <p>(proficient): HTML, CSS, SCSS, JavaScript, Git, CLI, wireframing/prototyping</p>
        <p>(familiar): A11y, Nodejs, Gatsby, React, MySQL</p>
      </section>
    </Resume>
  )
}

export default ResumePage