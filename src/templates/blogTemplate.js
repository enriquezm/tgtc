import React from 'react';
import { graphql, Link } from 'gatsby';
import '../global-styles.css';
import styled from 'styled-components';
import Header from '../components/Header';

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
`;
  
  
const Template = ({data, pageContext}) => { // 'data' is injected by the Graphql query below
  
  const {prev, next} = pageContext; 

  const {markdownRemark} = data; // data.markdownRemark holds our post data
  const title = markdownRemark.frontmatter.title;
  const html = markdownRemark.html;
  return (
    <div>
      <Header />

      <main className="flex-container">
        <section className="flex-column">
          <PostContentContainer className="flex-content">
            <h2>{title}</h2>
            <div dangerouslySetInnerHTML={{__html: html}} />
          </PostContentContainer>
        </section>
      </main>

      {prev && 
          <Link to={prev.frontmatter.path}>
            Previous Post
          </Link>
        }
      {next && 
        <Link to={next.frontmatter.path}>
          Next Post
        </Link>
      }
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
      }
    }
  }
`

export default Template;
  