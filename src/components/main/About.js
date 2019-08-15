import React from 'react'

class About extends React.Component {
    render() {
        return (
            <section id="two" >
                <div class="about">
                    <header className="major">
                        <h2>About Me</h2>
                    </header>
                    <p class="about-description">
                        Welcome to my personal page! I'm a student attending UC Berkeley with a 
                        passion for emerging technologies and their ability to change the way we 
                        interact with the world. This has led me to pursue opportunities at the 
                        intersection of technology and business. I hope to expand my perspective 
                        of the world by experiencing a multitude of different roles.
                        <br />
                        <br />
                        I also enjoy discovering new experiences outside of my work. My favorite 
                        activities are frisbee, hiking, and trying new foods. If you have any recommendations 
                        for places to visit, foods to eat, or just want to get in contact, feel free to 
                        drop me a note!
                        <br />
                        <br />
                    </p>
                </div>
            </section>
        )
    }
}

export default About