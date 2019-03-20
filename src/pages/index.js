import React from "react"
import { graphql, Link } from "gatsby"
import Header from "../components/Header"
import "../global-styles.css";

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <div>
      <Header />
      <main className="flex-container">
      <section className="flex-column">
        <div className="flex-content">
            <h2 className="margin-bottom-xs all-caps">Posts</h2>
            <p className="margin-bottom-sm font-color-light-gray-super">Case studies, walkthroughs, source code, and demos.</p>

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
          {/* <h2 className="margin-bottom-xs all-caps">Experiements</h2>
          <p className="margin-bottom-sm font-color-light-gray-super">Aren't quite full on projects, but help me better understand certain concepts.</p>
          <ul className="margin-bottom-md">
            <li className="margin-bottom-xs"><a href="#">habit rabbit</a></li>
            <li className="margin-bottom-xs"><a href="#">meos</a></li>
            <li className="margin-bottom-xs"><a href="#">git balloons</a></li>
          </ul> */}
          <h2 className="margin-bottom-xs all-caps">Connect</h2>
          <ul className="margin-bottom-md">
            <li className="margin-bottom-xs"><a href="https://github.com/enriquezm">github</a></li>
            <li className="margin-bottom-xs"><a href="mailto:enri.myles@gmail.com">enri.myles@gmail.com</a></li>
          </ul>
        </div>
      </section>

    </main>
      <footer>
        <p className="font-override font-color-light-gray-super">Slapped together by <a href="https://github.com/enriquez">Myles Enriquez</a>. <a href="https://github.com/enriquezm/engineering-portfolio">View on Github.</a></p>
      </footer>
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