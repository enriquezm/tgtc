import React from 'react';
import { graphql} from 'gatsby';
import '../global-styles.css';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Section from '../components/Section';
import Contact from '../components/Contact';
import '../prism-styles-override.css';

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
  width: 100%;
  border: 3px solid #8131FF;
  margin-bottom: 50px;
`;
  
  
const Template = ({data, pageContext}) => { // 'data' is injected by the Graphql query below
  
  // eslint-disable-next-line
  const {prev, next} = pageContext; 
  console.log(pageContext);

  const { markdownRemark } = data;
  const { html } = markdownRemark; 
  const { title, description, date } = markdownRemark.frontmatter;
  return (
    <div>
      <Header title={title} description={description} />
      <main>
        <Section>
          <PostContentContainer className="flex-content">
          <LineBreak />
          <p>Written on {date}</p>
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
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`

export default Template;
  