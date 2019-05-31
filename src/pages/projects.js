import React from "react"
import { Helmet } from "react-helmet"
import { graphql, Link } from "gatsby"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Contact from "../components/Contact"
import Section from "../components/Section"
import styled from "styled-components"
import "../global-styles.css";
import { ArrowRight } from 'react-feather';
import P from "../components/util/P";

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

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <div>
      <Helmet>
        <title>That Guy That Codes | Projects</title>
        <link rel="canonical" href="https://thatguythat.codes" />
      </Helmet>
      <Header title="Projects" description="A mix of websites, applications, designs, and experiments." full />
      <Section centered>
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
