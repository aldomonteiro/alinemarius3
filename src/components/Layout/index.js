import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import get from 'lodash/get';
import HeaderGeneric from './HeaderGeneric';
import Footer from './Footer';
import '../../assets/scss/main.scss'

export default ({ children }) =>
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
          title
        }
      }
    }`}
    render={data =>
      <div>
        <header>
          <Helmet title={get(data, 'site.siteMetadata.title')} />
          <HeaderGeneric />
        </header>
        <main id="main">
          {children}
        </main>
        <Footer />
      </div>}
  />