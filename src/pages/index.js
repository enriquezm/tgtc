import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import AInternal from "../components/util/AInternal";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Section from "../components/Section";
import styled from "styled-components";
import "../global-styles.css";
import { ArrowRight } from 'react-feather';
import P from "../components/util/P";
import ContainerFluid from "../components/util/ContainerFluid";

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
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 10px;
  margin-bottom: 20px;
  @media screen and (max-width: 450px) {
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
  &:nth-child(1) {
    background-color: #8131FF;
    &:hover {
      background-color: #6727cc;
    }
  }
  &:nth-child(2) {
    background-color: #009FFF;
    &:hover {
      background-color: #007fcc;
    }
  }
  &:nth-child(3) {
    background-color: #50C5B7;
    &:hover {
      background-color: #409d92;
    }
  }
  &:nth-child(4) {
    background-color: #EF5A4C;
    &:hover {
      background-color: #bf483c;
    }
  }
  &:nth-child(5) {
    background-color: #e5a707;
    &:hover {
      background-color: #b78505;
    }
  }
  &:nth-child(6) {
    background-color: #554D61;
    &:hover {
      background-color: #4d4658;
    }
  }
  &:nth-child(7) {
    background-color: #50C5B7;
    &:hover {
      background-color: #409d92;
    }
  }
  @media screen and (max-width: 768px) {
    svg {
      display: none;
    }
  }
`;

const linkContainerStyles = {
  display: "flex",
  justifyContent: "flex-end",
};

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <div>
      <Helmet>
        <title>That Guy That Codes</title>
        <link rel="canonical" href="https://thatguythat.codes" />
      </Helmet>
      <Header full />
      <ContainerFluid bgColor="#35303c" color="#c2c0c4">
        <Section centered>
          <h3>About</h3>
          <P align="center">
            I started my coding career in college and eventually received my degree in computer science. After graduating, I dove into the JavaScript world and have been teaching myself ever since. I'm always trying to improve my problem-solving skills and I love teamwork/collaboration.I mainly work with JavaScript but am always trying to learn new programming language concepts as a whole.
          </P>
        </Section>
      </ContainerFluid>
      <Section centered>
        <h3>Projects</h3>
        <P align="center">Here are a mixture of websites, applications, designs, and experiments.</P>
          <Grid>
          {
            edges.map( edge => {
              const { frontmatter } = edge.node;
              return (
                <Item key={frontmatter.path} to={frontmatter.path}>
                  <h4>{frontmatter.title}</h4>
                  <p>{frontmatter.description}</p>
                  <ArrowRight />
                </Item>
              )
            })
          }
          </Grid>
          <div style={linkContainerStyles}>
            <Link to="/projects/">Check out more projects</Link>
          </div>
       </Section>
      <Section centered>
        <h3>Experience</h3>
        <P align="center">A little of where I've been and what I did.</P>
        <Row justifyContent="center">
          <ResumeLeft>
            <p><b>Jan 2017 - Present</b></p>
          </ResumeLeft>
          <ResumeRight>
            <p><b>Web Specialist @ UNLV</b></p>
            <p>Maintain Degrees Directory. Report Google Analytics. Minor Web Development.</p>
          </ResumeRight>
        </Row>
        <Row justifyContent="center">
          <ResumeLeft>
            <p><b>Web Developer @ DCDC</b></p>
            <p>Develop websites from wireframes and mockups. Find and correct bugs on existing sites.</p>
          </ResumeLeft>
          <ResumeRight>
            <p><b>Jan 2016 - Apr 2016</b></p>
          </ResumeRight>
        </Row>
        <Row justifyContent="center">
          <ResumeLeft>
            <p><b>May 2015 - Jan 2016</b></p>
          </ResumeLeft>
          <ResumeRight>
            <p><b>Web & Design Assistant @ DCDC</b></p>
            <p>Design and create social media banners. Design and create surveyed infographics.</p>
          </ResumeRight>
        </Row>
      </Section>
      <Contact />
      <Footer />
    </div>
  );
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 6
      sort: { 
        order: DESC, 
        fields: [frontmatter___date] 
      }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            description
          }
        }
      }
    }
  }
`
