/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const baseLanguage = require('./gatsby-config').siteMetadata.baseLanguage

const { languages } = require('./src/i18n/locales')

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  if (page.path.includes('404')) {
    return Promise.resolve()
  }

  return new Promise(resolve => {
    languages.forEach(({ value }) => {

      if (page.path.match(/^\/lead/) && !page.path.match(/^\/leads/)) {
        page.matchPath = (value !== baseLanguage) ? `/${value}/lead/*` : '/lead/*';
      }

      let pageLocalePath = (value !== baseLanguage) ? `/${value}${page.path}` : page.path

      if (pageLocalePath.length > 1) {
        pageLocalePath = pageLocalePath.replace(/\/$/, '')
      }

      const localePage = {
        ...page,
        originalPath: page.path,
        path: pageLocalePath,
        context: {
          locale: value,
          baseLocale: baseLanguage,
          originalPath: page.path,
        },
      }

      createPage(localePage)
    })

    resolve()
  })
}

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: 'empty'
    }
  })
}