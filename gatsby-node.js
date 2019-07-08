const _ = require("lodash")
const Promise = require("bluebird")
const path = require("path")
const select = require(`unist-util-select`)
const fs = require(`fs-extra`)

exports.createPages = async ({ graphql, page, actions }) => {
  const { createPage } = actions

  if (page && page.path.match(/^\/restrita/)) {
    page.matchPath = "/restrita/*"

    // Update the page.
    createPage(page)
  }

  try {
    const blogPost = path.resolve("./src/templates/blog-post.js")
    const result = await graphql(`
      {
        allMarkdownRemark(limit: 1000) {
          edges {
            node {
              frontmatter {
                path
              }
            }
          }
        }
      }
    `);

    if (result) {
      // Create blog posts pages.
      _.each(result.data.allMarkdownRemark.edges, edge => {
        createPage({
          path: edge.node.frontmatter.path,
          component: blogPost
        })
      });
    }
  } catch (error) {
    console.log('----> gatsby-node <----');
    console.log(error);
  }
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    /*
     * During the build step, `auth0-js` will break because it relies on
     * browser-specific APIs. Fortunately, we don’t need it during the build.
     * Using Webpack’s null loader, we’re able to effectively ignore `auth0-js`
     * during the build. (See `src/utils/auth.js` to see how we prevent this
     * from breaking the app.)
     */
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /auth0-js/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}