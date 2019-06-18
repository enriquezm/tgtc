import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import Section from '../components/Section';
import styled from 'styled-components';
import '../global-styles.css';
import { ArrowRight } from 'react-feather';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;

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

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <div>
      <Helmet>
        <title>That Guy That Codes | Recruiters</title>
        <link rel="canonical" href="https://thatguythat.codes" />
      </Helmet>
      <Header
        title="Recruiters"
        description="A glipse of who I am, what I've built, and where I want to go in my career."
        full
      />
      <Section centered>
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
