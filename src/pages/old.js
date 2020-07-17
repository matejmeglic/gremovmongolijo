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
            <div>
           <a href="https://github.com/matejmeglic/gremovmongolijo/raw/master/src/contents/misc/Mongolia_2014BPv11.pdf">Poslovni načrt projekta.</a> <br /><br />
           <a href="https://github.com/matejmeglic/gremovmongolijo/raw/master/src/contents/misc/27032014_Statut_final.pdf">Statut HD Gremo v Mongolijo</a> <br /><br />
           </div> 
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
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {lang: {eq: "old"}}}) {
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