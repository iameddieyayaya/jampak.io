/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

 
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import Footer from './footer'

import Header from "./header"
import "./layout.css"

const Main = styled.main`

`

const Foot = styled.footer`

`


const Layout = ({ children }) => {
  
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
          <Header siteTitle={data.site.siteMetadata.title} />
          <Main>{children}</Main>
          <Foot>
              <Footer  siteTitle={data.site.siteMetadata.title} />
            </Foot>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
