import React from 'react';
import { graphql, Link } from 'gatsby';
import '../global-styles.css';
import styled from 'styled-components';

const PostContentContainer = styled.div`
  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 10px;
  }
  p {
    margin-bottom: 20px;
  }
`;
  
  
const Template = ({data, pageContext}) => { // 'data' is injected by the Graphql query below
  
  const {prev, next} = pageContext; 

  const {markdownRemark} = data; // data.markdownRemark holds our post data
  const title = markdownRemark.frontmatter.title;
  const html = markdownRemark.html;
  return (
    <div>
      <header className="flex-container flex-split margin-bottom-lg">
        <div>
          <div className="flex-content">
            <Link to="/"><h1>Myles Enriquez</h1></Link>
            <p className="font-color-violet">Frontend Engineer</p>
            <div>
              <a className="link-btn" href="#">resume</a>
              <a className="link-btn" href="https://github.com/enriquezm">github</a>
            </div>
          </div>
        </div>
        <div>
          <div className="flex-content">
            <p className="font-override">v1.1</p>
          </div>
        </div>
      </header>

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
  