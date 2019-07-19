import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import P from './util/P';

const Row = styled.div`
  display: flex;
  justify-content: ${props => props.justifyContent};
  b {
    color: white;
  }
`;

const ResumeLeft = styled.div`
  width: 50%;
  text-align: right;
  padding: 50px 20px;
  border-right: 2px solid #20364d;
  p {
    margin-bottom: 10px;
  }
`;

const ResumeRight = styled.div`
  width: 50%;
  padding: 50px 20px;
  p {
    margin-bottom: 10px;
  }
`;

const MiniResume = () => (
  <Section centered>
    <h3>Experience</h3>
    <P align="center">A little of where I've been and what I did.</P>
    <Row justifyContent="center">
      <ResumeLeft>
        <p>
          <b>Jan 2017 - Present</b>
        </p>
      </ResumeLeft>
      <ResumeRight>
        <p>
          <b>Web Specialist @ University of Nevada, Las Vegas</b>
        </p>
        <p>
          Maintain{' '}
          <a href="https://www.unlv.edu/academics/degrees">Degrees Directory</a>
          . Report Google Analytics on department websites. Minor Web
          Development within Drupal and Wordpress CMS.
        </p>
      </ResumeRight>
    </Row>
    <Row justifyContent="center">
      <ResumeLeft>
        <p>
          <b>Web Developer @ College of Education, UHM</b>
        </p>
        <p>
          Develop websites from provided wireframes and mockups. Find and
          correct bugs on existing Wordpress sites.
        </p>
      </ResumeLeft>
      <ResumeRight>
        <p>
          <b>Jan 2016 - Apr 2016</b>
        </p>
      </ResumeRight>
    </Row>
    <Row justifyContent="center">
      <ResumeLeft>
        <p>
          <b>May 2015 - Jan 2016</b>
        </p>
      </ResumeLeft>
      <ResumeRight>
        <p>
          <b>Web & Design Assistant @ College of Education, UHM</b>
        </p>
        <p>
          Design and create social media banners using Adobe
          Illustrator/Photoshop. Design and create surveyed infographics.
        </p>
      </ResumeRight>
    </Row>
  </Section>
);

export default MiniResume;
