import React from 'react'
import Helmet from 'react-helmet'

import Landing from '../components/main/Landing';
import About from '../components/main/About';
import Work from '../components/main/Work';
import Contact from '../components/main/Contact';
import Resume from '../components/main/Resume';

import Layout from '../components/layout'

class HomeIndex extends React.Component {

    render() {
        const siteTitle = "Michael Li"
        const siteDescription = "Personal Site for Michael Li"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <Landing />

                    <About />

                    <Work />

                    <Contact />

                    <Resume />

                </div>

            </Layout>
        )
    }
}

export default HomeIndex