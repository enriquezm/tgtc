import React from "react"
import { Helmet } from "react-helmet"
import { graphql, Link } from "gatsby"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Section from "../components/Section"
import styled, { keyframes } from "styled-components"
import "../global-styles.css";
import { ArrowRight } from 'react-feather';

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
  @media screen and (max-width: 450px) {
    grid-template-columns: 1fr;
    grid-gap: 0;
  }
`;

const fadeIn = keyframes`
  from {
    visibility: hidden;
    opacity: 0;
  }
  to {
    visibility: visible;
    opacity: 1;
  }
`;

const Item = styled(Link)`
  margin: 0;
  padding: 50px 25px;
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
    background-color: #FFBA08;
    &:hover {
      background-color: #cc9406;
    }
  }
  &:nth-child(6) {
    background-color: #F2AF07;
    &:hover {
      background-color: #c18c05;
    }
  }
  @media screen and (max-width: 768px) {
    svg {
      display: none;
    }
  }
`;

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <div>
      <Helmet>
        <title>That Guy That Codes</title>
        <link rel="canonical" href="https://thatguythat.codes" />
      </Helmet>
      <Header />
      <Section centered>
        <h3>Projects</h3>
          <Grid>
          {
            edges.map( edge => {
              const { frontmatter } = edge.node;
              return (
                <Item to={frontmatter.path}>
                  <h4>{frontmatter.title}</h4>
                  <p>{frontmatter.description}</p>
                  <ArrowRight />
                </Item>
              )
            })
          }
          </Grid>
       </Section>
      <Section centered>
        <h3>Experience</h3>
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
      <Footer />
    </div>
  );
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
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
            tag
          }
        }
      }
    }
  }
`