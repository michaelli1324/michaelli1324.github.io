module.exports = {
  plugins: [
    'gatsby-plugin-sass',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `open sans\:300,600`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-122310612-1",
        head: true
      }
    },
  ],
  siteMetadata: {
    title: 'Michael Li',
    description: 'Technology Innovator, Software Developer, Lifelong Learner',
    keywords: 'software development, web development, software engineer, portfolio, personal website',
    url: 'https://www.michaelli.me'
  }
};
