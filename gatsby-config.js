module.exports = {
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        tracingId: "UA-86061209-1"
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog/projects`,
        name: "markdown-pages",
      },
    },
    `gatsby-transformer-remark`,
  ],
}
