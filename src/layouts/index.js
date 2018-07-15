import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Sidebar from '../components/Sidebar'

import '../assets/scss/main.scss';

import profileImage from '../assets/images/michael.jpg'
import favicon16 from '../assets/favicons/favicon-16x16.png'
import favicon32 from '../assets/favicons/favicon-32x32.png'
let cdn = 'https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css'
let sha = 'sha384-OHBBOqpYHNsIqQy8hL1U+8OXf9hH6QRxi0+EODezv82DfnZoV7qoHAZDwMwEJvSw'


class TemplateWrapper extends React.Component {
  render () {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteKeywords = get(this, 'props.data.site.siteMetadata.keywords')
    const siteURL = get(this, 'props.data.site.siteMetadata.url')
    const siteDescription = get(this, 'props.data.site.siteMetadata.description')

    const { children } = this.props

    return (
      <div className="template-wrapper">
        <Helmet
          title={siteTitle}
          meta={[
            { name: 'viewport', content: 'width=device-width, initial-scale=1'},
            { name: 'description', content: siteDescription },
            { name: 'keywords', content: siteKeywords },
            { property: 'og:url', content: siteURL },
            { property: 'og:image', content: profileImage },
            { property: 'og:title', content: siteTitle },
            { property: 'og:description', content: siteDescription },
          ]}
          link={[
            { rel: 'icon', type: 'image/png', sizes: '16x16', href: favicon16 },
            { rel: 'icon', type: 'image/png', sizes: '32x32', href: favicon32 },
            { rel: 'stylesheet', integrity: sha, href: cdn, crossOrigin: 'anonymous' },
          ]}
        />
        <div className="template-wrapper-children">
          <Sidebar />

          { children() }
        </div>
      </div>
    )
  }
}

export default TemplateWrapper

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
        url
        keywords
      }
    }
  }
`
