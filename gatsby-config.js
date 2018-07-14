module.exports = {
  plugins: [
    'gatsby-plugin-sass',
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
        trackingId: "<your-tracking-id-here>",
        head: true
      }
    },
  ],
  siteMetadata: {
    title: 'Michael',
    description: 'Technology Innovator, Software Developer, Lifelong Learner',
    keywords: 'software development, web development, software engineer, portfolio, personal website',
    url: 'https://www.michaelli.me'
  }
};
