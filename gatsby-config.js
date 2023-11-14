/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Wep Application Starter`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "dynamic",
        "path": "./src/dynamic/"
      },
      __key: "dynamic"
    },
    
    "gatsby-transformer-json",
    "gatsby-transformer-remark"
  ],
}
