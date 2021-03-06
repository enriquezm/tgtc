import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import SubPageHeader from '../components/SubPageHeader';
import Footer from '../components/Footer';
import Section from '../components/Section';
import Contact from '../components/Contact';
import '../global-styles.css';
import '../prism-styles-override.css';

const PostContentContainer = styled.div`
  margin: 0 auto;
`;

const PostContent = styled.div`
  h1,
  h2 {
    margin-top: 50px;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 10px;
  }
  h3,
  h4,
  h5,
  h6 {
    margin-top: 50px;
  }
  p {
    margin-bottom: 20px;
  }
  a {
    text-decoration: none;
  }
  img {
    width: 100%;
  }
  ul,
  ol {
    margin: 20px 0;
    padding-left: 20px;
    > li {
      margin: 4px 0;
      list-style: circle;
      color: var(--primary-font-color);
    }
  }
  @media screen and (max-width: 450px) {
    padding: 3%;
  }
`;

const PostDate = styled.p`
  color: var(--primary-info);
`;

const Template = ({ data }) => {
  // 'data' is injected by the Graphql query below
  const { markdownRemark } = data;
  const { html } = markdownRemark;
  const { title, description, date } = markdownRemark.frontmatter;
  return (
    <div>
      <div
        css={`
          background-color: var(--secondary-bg-color);
        `}
      >
        <SubPageHeader title={title} description={description} />
      </div>
      <main>
        <Section css={'padding-top: 50px;'}>
          <PostContentContainer>
            <PostDate>Written on {date}</PostDate>
            <PostContent dangerouslySetInnerHTML={{ __html: html }} />
          </PostContentContainer>
        </Section>
      </main>
      <Contact />
      <Footer />
    </div>
  );
};

export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        description
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;

export default Template;
