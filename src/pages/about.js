import React from 'react'

import '../assets/scss/about/style.scss'

const AboutPage = () => (
  <div className="about container animated fadeIn">
    <h1 className="about-heading">About Me</h1>

    <div className="about-content">
      <p className="about-description">
        Welcome to my personal page! I'm a student attending UC Berkeley with a
        passion for emerging technologies and their ability to change the way we
        interact with the world. This has led me to pursue opportunities at the
        intersection of technology and business. I hope to expand my
        perspective of the world by experiencing a multitude of different roles.
        <br />
        <br />
        I also enjoy discovering new experiences outside of my work. My favorite
        activities are frisbee, hiking, and trying new foods . If you have
        any recommendations for places to visit, foods to eat, or just want to
        get in contact, feel free to drop me a note!
        <br />
        <br />
      </p>
      {false &&
        <p className="about-emojis">
          &nbsp;🚙    🚗     🚗       🚚      🚕        🚜                                   🔥⛩️  ⛩️🔥 ⛩️  ⛩️   <br/>
          🚐 🚗  🚕   🚚   🚐🚕   🚓 🚙  🚗🚕                     🚧      ⛩️    🏠    🏣🏛️  ⛩️   <br/>
          &nbsp;   🚎 🚑  🚚  🚕    🚓   🚕 🚕  🚎🚕 🚗                🚧      🔥   🏠🔥🏯🦖  ⛩️   <br/>
          &nbsp;&nbsp;🚙 🚕 🚓 🚛   🚕  🚙  🚕  🚕     🚓  🚕               🚧      ⛩️  🏫🏚️🏪🏠  ⛩️   <br/>
          🚒    🚗       🚕      🚚     🚕        🚐        🚗                        ⛩️ 🔥  ⛩️ ⛩️🔥⛩️   <br/>
        </p>
      }
    </div>
  </div>
)

export default AboutPage
