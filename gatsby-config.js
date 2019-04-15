const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

console.log(`Using environment config: '${activeEnv}'`)

if (typeof process.env.REPOSITORY_URL !== 'undefined') {
  const mendatoryEnvVars = [
    'SITE_URL',
    'BASE_LANGUAGE',
    'BASE_SITE_TITLE',
  ]
  const missingEnvVars = []

  mendatoryEnvVars.forEach(mendatoryEnvVar => {
    if (typeof process.env[mendatoryEnvVar] === 'undefined') {
      missingEnvVars.push(mendatoryEnvVar)
    }
  })

  if (missingEnvVars.length > 0) {
    console.log('MISSING ENV VARS', JSON.stringify(missingEnvVars))
    throw `Cannot build without these env variables ${missingEnvVars.join(', ')}`
  }
} else {
  require("dotenv").config({
    path: `.env.${activeEnv}`,
  })
}

module.exports = {
  siteMetadata: {
    siteUrl: process.env.SITE_URL,
    baseLanguage: process.env.BASE_LANGUAGE,
    title: process.env.BASE_SITE_TITLE,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    // 'gatsby-plugin-sass',
    // `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    // 'gatsby-transformer-sharp',
    // 'gatsby-plugin-sharp',
    // {
    //   resolve: 'gatsby-plugin-robots-txt',
    //   options: {
    //     host: 'https://toiture.conecto.ca/',
    //     sitemap: 'https://toiture.conecto.ca/sitemap.xml',
    //     policy: [{
    //       userAgent: '*',
    //       // allow: '/',
    //       disallow: ['*']
    //     }]
    //   }
    // },
    // {
    //   resolve: 'gatsby-plugin-sitemap',
    //   options: {
    //     output: `/sitemap.xml`,
    //   }
    // },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    // 'gatsby-plugin-remove-trailing-slashes',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
