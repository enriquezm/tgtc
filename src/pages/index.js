import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import Section from '../components/Section';
import styled from 'styled-components';
import '../global-styles.css';
import P from '../components/util/P';
import ContainerFluid from '../components/util/ContainerFluid';
import TextButton from '../components/util/TextButton';
import ProjectPosts from '../components/ProjectPosts';

const Row = styled.div`
  display: flex;
  justify-content: ${props => props.justifyContent};
`;

const ResumeLeft = styled.div`
  width: 50%;
  text-align: right;
  padding: 50px 20px;
  border-right: 2px solid #eeeeee;
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

const IndexPage = () => {
  return (
    <div>
      <Header full />
      <ContainerFluid bgColor="#35303c" color="#c2c0c4">
        <Section centered>
          <h3>A little about me</h3>
          <P align="center">
            I've always viewed myself as a creative and someone who likes to do
            things a little different. When the time is appropriate, I like to
            think outside of the boundaries that I sometimes put on myself and
            see where I can go. I mainly write in vanilla JavaScript but I also
            have experience with frameworks like React. I build for the human
            experience and always try to work using best practices in UX and
            Accesibility. Whenever I'm not coding, I'm studying Brazilian Jiu
            Jitsu or trail running.
          </P>
        </Section>
      </ContainerFluid>
      <Section centered>
        <h3>What I've been up to</h3>
        <P align="center">
          Here are a mixture of websites, applications, designs, and
          experiments.
        </P>
        <ProjectPosts />
        <div css={'display: flex; justify-content: flex-end;'}>
          <TextButton to="/projects/">More Projects</TextButton>
        </div>
      </Section>
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
              <b>Web Specialist @ UNLV</b>
            </p>
            <p>
              Maintain{' '}
              <a href="https://www.unlv.edu/academics/degrees">
                Degrees Directory
              </a>
              . Report Google Analytics on department websites. Minor Web
              Development within Drupal and Wordpress CMS.
            </p>
          </ResumeRight>
        </Row>
        <Row justifyContent="center">
          <ResumeLeft>
            <p>
              <b>Web Developer @ DCDC</b>
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
              <b>Web & Design Assistant @ DCDC</b>
            </p>
            <p>
              Design and create social media banners using Adobe
              Illustrator/Photoshop. Design and create surveyed infographics.
            </p>
          </ResumeRight>
        </Row>
      </Section>
      <Contact />
      <Footer />
    </div>
  );
};

export default IndexPage;
