import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import pic from "../contents/images/19.jpg"

export default function Home({data}) {
    return (
      <Layout>
        <img src={pic} alt="Gremo v Mongolijo" title="Gremo v Mongolijo" />
        <div>
          <h4>{data.allMarkdownRemark.totalCount} prispevkov</h4>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            
            <div key={node.id}>
            <Link
              to={node.fields.slug}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <h3
                css={css`
                  margin-bottom: ${rhythm(1 / 4)};
                `}
              >
                {node.frontmatter.title}{" "}
                <span
                  css={css`
                    color: #bbb;
                  `}
                >
                  — {node.frontmatter.date}
                </span>
              </h3>
              <div  css={css`
                    text-align: justify;
                  `}>
                    
                    <section dangerouslySetInnerHTML={{ __html: node.html }} />
                    </div>
              </Link>
            
            </div>
          ))}
        </div>
      </Layout>
    )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: ASC}, filter: {frontmatter: {lang: {eq: "slo"}}}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            lang
          }
          excerpt(pruneLength: 500)
          fields {
            slug
          }
          html
        }
      }
    }
  }
  
`