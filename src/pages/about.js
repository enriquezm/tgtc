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
import GithubData from '../components/GithubData';

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
        <title>Myles Enriquez | ThatGuyThatCodes</title>
        <link rel="canonical" href="https://thatguythat.codes" />
      </Helmet>
      <Header
        title="About Me"
        description="A glipse of who I am, what I've built, and where I want to go in my career."
        full
      />
      <Section>
        <h2>My Coder's Code</h2>
        <p>
          The following items are adopted from the{' '}
          <a href="https://www.amazon.com/Pragmatic-Programmer-Journeyman-Master/dp/020161622X">
            Pragmatic Programmer
          </a>
          . I try to stick to these as my own personal programmer's code.
        </p>
        <ul>
          <li>Provide options, don't make lame excuses.</li>
          <li>DRY - Don't Repeat Yourself.</li>
          <li>Use the power of command shells.</li>
          <li>Always use source code control.</li>
          <li>Invest regularly in your knowledge portfolio.</li>
          <li>Prototype to learn.</li>
          <li>Fix the problem, not the blame.</li>
          <li>Design to test.</li>
        </ul>
      </Section>
      <Section>
        <h2>Activity</h2>
        <p>My latest activity on Github.</p>
        <GithubData />
      </Section>
      <Section>
        <h2>Side Projects</h2>
        <p>Some projects I've worked on to keep the mind busy.</p>
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
