import React from 'react';
import { Link, graphql } from 'gatsby';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import Section from '../components/Section';
import styled from 'styled-components';
import '../global-styles.css';
import { ArrowRight } from 'react-feather';
import P from '../components/util/P';
import ContainerFluid from '../components/util/ContainerFluid';
import TextButton from '../components/util/TextButton';

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

const Grid = styled.div`
  display: grid;
  margin-left: -2%;
  margin-right: -2%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 10px;
  margin-bottom: 20px;
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-gap: 0;
  }
`;

const Item = styled(Link)`
  margin: 0;
  padding: 50px 25px;
  text-align: center;
  h4,
  p {
    color: white;
  }
  svg {
    stroke: white;
    transition: all 0.2s;
  }
  &:hover {
    svg {
      transform: translateX(100%);
      transition: all 0.3s;
    }
  }
  @media screen and (max-width: 768px) {
    svg {
      display: none;
    }
  }
`;

const linkContainerStyles = {
  display: 'flex',
  justifyContent: 'center',
};

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <div>
      <Header full />
      <ContainerFluid bgColor="#35303c" color="#c2c0c4">
        <Section centered>
          <h3>A little about me</h3>
          <P align="center">
            I've always viewed myself as a creative and someone who likes to do things a little different. When the time is appropriate, I like to think outside of the boundaries that we sometimes put on ourselves and see where we can go. I mainly write in JavaScript. I have experience with frameworks like React but whenever possible, my favorite flavor is vanilla. I build for the human experience and always try to work in best practices in UX and Accesibility. Whenever I'm not coding, I'm studying Brazilian Jiu Jitsu or running some miles in the outback trails.
          </P>
        </Section>
      </ContainerFluid>
      <Section centered>
        <h3>What I've been up to</h3>
        <P align="center">
          Here are a mixture of websites, applications, designs, and
          experiments.
        </P>
        <Grid>
          {edges.map(edge => {
            const { frontmatter } = edge.node;
            return (
              <Item
                css={`
                  background-color: ${frontmatter.color};
                `}
                key={frontmatter.path}
                to={frontmatter.path}
              >
                <h4>{frontmatter.title}</h4>
                <p>{frontmatter.description}</p>
                <ArrowRight />
              </Item>
            );
          })}
        </Grid>
        <div style={linkContainerStyles}>
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

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { draft: { eq: false } } }
      limit: 6
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            description
            color
          }
        }
      }
    }
  }
`;
