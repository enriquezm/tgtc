import React from "react"
import { Helmet } from "react-helmet"
import { graphql, Link } from "gatsby"
import Header from "../components/Header"
import Footer from "../components/Footer"
import "../global-styles.css";

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <div>
      <Helmet>
        <title>That Guy That Codes</title>
        <link rel="canonical" href="https://thatguythat.codes" />
      </Helmet>
      <Header />
      <main className="flex-container">
      <section className="flex-column">
        <div className="flex-content">
            <h2 className="margin-bottom-xs all-caps">Experiments</h2>
            <p className="margin-bottom-sm font-color-light-gray-super">Check out my designs, walkthroughs, source code, and demos.</p>

            <ul className="margin-bottom-md">
            {
              edges.map( edge => {
                const { frontmatter } = edge.node;
                return (
                  <li key={frontmatter.path}>
                    <Link 
                    className="margin-right-xs" 
                    to={frontmatter.path}>
                      <h3>{frontmatter.title}</h3>
                      <p className="font-color-light-gray-super margin-bottom-xs">{frontmatter.description}</p>
                    </Link>
                    {
                      frontmatter.source ? <a className="link-btn margin-right-xs margin-bottom-md" href={frontmatter.source}>Source</a> : null
                    }
                    {
                      frontmatter.demo ? <a className="link-btn margin-right-xs margin-bottom-md" href={frontmatter.demo}>Demo</a> : null
                    }
                    <p className="font-color-light-gray-super margin-top-sm">Tagged as <b className="tagger">{frontmatter.tag}</b></p>
                  <hr></hr>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </section>
    </main>
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
            source
            demo
            description
            tag
          }
        }
      }
    }
  }
`