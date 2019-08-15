import React from 'react'

class Landing extends React.Component {
    render() {
        return (
            <section id="one" >
                <div class="landing">
                    <header className="major">
                        <h2>Hi, I'm <span class="name">Michael Li</span></h2>
                    </header>
                    <p class="landing-description">I am currently a student at UC Berkeley studying Electrical Engineering Computer Science (EECS) 
                        and Business Administration. Additionally, I am a member of the inaugural class in the &nbsp;
                        <a class="description-link" href="http://met.berkeley.edu/">Management, Entrepreneurship, &amp; Technology Program</a> 
                        &nbsp; here, a collaborative effort between Berkeley's College of Engineering and Haas School of Business.
                    </p>
                </div>
            </section>
        )
    }
}

export default Landing