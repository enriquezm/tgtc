module.exports = {
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: "markdown-pages",
      },
    },
    `gatsby-transformer-remark`,
  ],
}