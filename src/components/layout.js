import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import {useStaticQuery, graphql} from "gatsby"
import { rhythm } from "../utils/typography"

export default function Layout({ children }) {
    const data = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                title
              }
            }
          }
        `
      )
  
    return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 950px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
        `}
    >
      <Link to={`/`}>
        <h3
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
          `}
        >
          {data.site.siteMetadata.title}
        </h3>
      </Link>
      <Link
        to={`/old/`}
        css={css`
          float: right; margin-left:10px;
        `}
      >
        ...
      </Link>
      <Link
        to={`/en/`}
        css={css`
          float: right; margin-left:10px;
        `}
      >
        EN
      </Link>
      <Link
        to={`/`}
        css={css`
          float: right; margin-left:10px;
        `}
      >
        SLO
      </Link>

      {children}
    </div>
  )
}

