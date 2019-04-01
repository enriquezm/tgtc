import React from 'react';
import { graphql, Link } from 'gatsby';
import '../global-styles.css';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PostContentContainer = styled.div`
  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 10px;
  }
  p {
    margin-bottom: 20px;
  }
  img {
    width: 100%;
  }
  ul {
    margin: 20px 0;
    padding-left: 20px;
    > li {
      margin: 4px 0;
      list-style: circle;
    }
  }
`;
  
  
const Template = ({data, pageContext}) => { // 'data' is injected by the Graphql query below
  
  const {prev, next} = pageContext; 

  const {markdownRemark} = data; // data.markdownRemark holds our post data
  const title = markdownRemark.frontmatter.title;
  const description = markdownRemark.frontmatter.description;
  const html = markdownRemark.html;
  return (
    <div>
      <Header title={title} description={description} />

      <main className="flex-container">
        <section className="flex-column">
          <PostContentContainer className="flex-content">
            <div dangerouslySetInnerHTML={{__html: html}} />
          </PostContentContainer>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: {
      path: {eq: $path} 
    }) {
      html
      frontmatter {
        title
        description
      }
    }
  }
`

export default Template;
  