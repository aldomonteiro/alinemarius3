const _ = require("lodash")
const Promise = require("bluebird")
const path = require("path")
const select = require(`unist-util-select`)
const fs = require(`fs-extra`)

exports.createPages = async ({ graphql, page, actions }) => {
  const { createPage } = actions

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