/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

require('dotenv').config();
const path = require('path');
const parseHTMLToReact = require('gatsby-source-plone/utils').parseHTMLtoReact;

exports.onCreateNode = ({ node }) => {
  if (node.hero_text) {
    node.hero_text.react = parseHTMLToReact(
      node.hero_text.data,
      process.env.baseUrl,
      node._path,
    );
  }
  if (node._type === 'Training') {
    if (node.what_learn) {
      node.what_learn.react = parseHTMLToReact(
        node.what_learn.data,
        process.env.baseUrl,
        node._path,
      );
    }
    if (node.prerequisites) {
      node.prerequisites.react = parseHTMLToReact(
        node.prerequisites.data,
        process.env.baseUrl,
        node._path,
      );
    }
    if (node.things_to_bring) {
      node.things_to_bring.react = parseHTMLToReact(
        node.things_to_bring.data,
        process.env.baseUrl,
        node._path,
      );
    }
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allPloneDocument {
        edges {
          node {
            _path
            _type
          }
        }
      }
      allPloneFolder {
        edges {
          node {
            _path
            _type
          }
        }
      }
      allPloneTalk {
        edges {
          node {
            _path
            _type
            related_people {
              _id
            }
          }
        }
      }
      allPlonePerson {
        edges {
          node {
            _path
            _type
          }
        }
      }
      allPloneTraining {
        edges {
          node {
            _path
            _type
            related_people {
              _id
            }
          }
        }
      }
    }
  `);
  []
    .concat(
      result.data.allPloneDocument.edges,
      result.data.allPloneTalk.edges,
      result.data.allPloneFolder.edges,
      result.data.allPlonePerson.edges,
      result.data.allPloneTraining.edges,
    )
    .forEach(({ node }) => {
      const { _type } = node;
      switch (_type) {
        /*case 'Talk':
          createPage({
            path: node._path,
            component: path.resolve('./src/templates/talk.js'),
          });
          break;*/
        default:
          createPage({
            path: node._path,
            component: path.resolve('./src/templates/default.js'),
          });
          break;
      }
    });
};
