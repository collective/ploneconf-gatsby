/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  console.log('CREATE PAGES');
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
    }
  `);
  []
    .concat(
      result.data.allPloneDocument.edges,
      result.data.allPloneTalk.edges,
      result.data.allPloneFolder.edges,
      result.data.allPlonePerson.edges
    )
    .forEach(({ node }) => {
      const { related_people, _type } = node;
      if (_type === 'Talk') {
        const related_uids =
          related_people && related_people.length > 0
            ? related_people[0]._id
            : '';
        createPage({
          path: node._path,
          component: path.resolve('./src/templates/talk.js'),
          context: {
            relator: related_uids,
          },
        });
      } else {
        createPage({
          path: node._path,
          component: path.resolve('./src/templates/default.js'),
        });
      }
    });
};
