import React from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import Section from '../components/Section';
import '../global-styles.css';
import TextButton from '../components/util/TextButton';
import TextButtonExternal from '../components/util/TextButtonExternal';

const Grid = styled.div`
  display: grid;
  margin-left: -2%;
  margin-right: -2%;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 10px;
  margin-bottom: 20px;
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-gap: 0;
  }
`;

const Item = styled.div`
  margin: 0;
  padding: 25px 15px;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1.5fr 1fr;
  h4,
  p {
    margin-bottom: 0;
  }
  svg {
    transition: all 0.2s;
  }
  &:hover {
    svg {
      transform: translateX(100%);
      transition: all 0.3s;
    }
  }
  &:not(:last-child) {
    border-bottom: 2px solid #20364d;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    svg {
      display: none;
    }
  }
`;

const ItemButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ProjectsPage = () => (
  <StaticQuery
    query={graphql`
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
                sourceCode
              }
            }
          }
        }
      }
    `}
    render={data => {
      const { edges } = data.allMarkdownRemark;
      return (
        <div>
          <Helmet>
            <title>That Guy That Codes | Projects</title>
            <link rel="canonical" href="https://thatguythat.codes" />
          </Helmet>
          <Header
            title="Projects"
            description="All my projects involving websites, applications, designs, and experiments."
            full
          />
          <Section>
            <Grid>
              {edges.map(edge => {
                const { frontmatter } = edge.node;
                return (
                  <Item key={frontmatter.path}>
                    <h4>{frontmatter.title}</h4>
                    <p>{frontmatter.description}</p>
                    <ItemButtons>
                      <TextButton primary color="#7469F4" to={frontmatter.path}>
                        Read
                      </TextButton>
                      {frontmatter.sourceCode ? (
                        <TextButtonExternal href={frontmatter.sourceCode}>
                          Source
                        </TextButtonExternal>
                      ) : (
                        ''
                      )}
                    </ItemButtons>
                  </Item>
                );
              })}
            </Grid>
          </Section>
          <Contact />
          <Footer />
        </div>
      );
    }}
  />
);

export default ProjectsPage;
