import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import HeaderGeneric from '../components/Layout/HeaderGeneric'

class MQF extends React.Component {
  render () {
    console.log(this.props.data);
    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
        <HeaderGeneric />
        <div id="main">
          <section id="content" className="main">
            <h1>{this.props.data.markdownRemark.frontmatter.title}</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: this.props.data.markdownRemark.html
              }}
            />
          </section>
        </div>

      </div>
    )
  }
}

export default MQF

export const pageQuery = graphql`
  query MQF {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { path: { eq: "/mamaes-que-fazem/" } }) {
        id
        html
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
        }
      }  
  }
`
