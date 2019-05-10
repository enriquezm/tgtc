import React from 'react';
import { graphql} from 'gatsby';
import '../global-styles.css';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Section from '../components/Section';
import Contact from '../components/Contact';

const PostContentContainer = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 2%;
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
  @media screen and (max-width: 450px) {
    padding: 3%;
  }
`;

const LineBreak = styled.hr`
  border: 3px dashed #009FFF;
  width: 25%;
  margin: 30px auto;
`;
  
  
const Template = ({data, pageContext}) => { // 'data' is injected by the Graphql query below
  
  // eslint-disable-next-line
  const {prev, next} = pageContext; 

  const {markdownRemark} = data; // data.markdownRemark holds our post data
  const title = markdownRemark.frontmatter.title;
  const description = markdownRemark.frontmatter.description;
  const html = markdownRemark.html;
  return (
    <div>
      <Header title={title} description={description} />
      <LineBreak />
      <main>
        <Section>
          <PostContentContainer className="flex-content">
            <div dangerouslySetInnerHTML={{__html: html}} />
          </PostContentContainer>
        </Section>
      </main>
      <Contact />
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
  