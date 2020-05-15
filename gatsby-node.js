const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `contents` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark(sort: {fields: frontmatter___date, order: ASC}, filter: {fields: {slug: {regex: "/^.slo/"}}}) {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "DD MMMM, YYYY")
              lang
            }
            fields {
              slug
            }
          }
        }
      }
    }
    
    
  `)
  

var posts = result.data.allMarkdownRemark.edges
posts.forEach((post, index) => {
  
console.log(post.node.fields.slug);


  createPage({
    path: post.node.fields.slug,
    component: path.resolve(`./src/templates/blog-post.js`),
    context: {
      slug: post.node.fields.slug,
      previous: index === 0 ? null : posts[index-1].node,
      previousLang: post.node.frontmatter.lang,
      next: index === (posts.length -1) ? null : posts[index+1].node,
      nextLang: post.node.frontmatter.lang,
      title: post.node.frontmatter.title
    },
  })
})





const resultEn = await graphql(`
    query {
      allMarkdownRemark(sort: {fields: frontmatter___date, order: ASC}, filter: {fields: {slug: {regex: "/^.en/"}}}) {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "DD MMMM, YYYY")
              lang
            }
            fields {
              slug
            }
          }
        }
      }
    }
    
    
  `)
  

postsEn = resultEn.data.allMarkdownRemark.edges
postsEn.forEach((post, index) => {
  
console.log(post.node.fields.slug);


  createPage({
    path: post.node.fields.slug,
    component: path.resolve(`./src/templates/blog-post.js`),
    context: {
      slug: post.node.fields.slug,
      previous: index === 0 ? null : postsEn[index-1].node,
      previousLang: post.node.frontmatter.lang,
      next: index === (postsEn.length -1) ? null : postsEn[index+1].node,
      nextLang: post.node.frontmatter.lang,
      title: post.node.frontmatter.title
    },
  })
})




}