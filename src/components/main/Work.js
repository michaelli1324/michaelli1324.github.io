import React from 'react';
import Gallery from '../../components/Gallery'

import AWS from '../../assets/images/thumbs/aws.png'
import Kelda from '../../assets/images/thumbs/kelda.png'
import Yext from '../../assets/images/thumbs/yext.png'
import BerkeleyTime from '../../assets/images/thumbs/berkeleytime.png'

const EXPERIENCE_IMAGES = [
    { id: '1', 
      background: '#FF9900', 
      thumbnail: AWS, 
      caption: 'Amazon AWS', 
      role: "Software Engineering Intern", 
      description: 'Reduce customer error on AWS fraud detection platform through a diff checker tool',
      link: 'https://aws.amazon.com/',
    },
    { id: '2', 
      background: '#FFFFFF', 
      thumbnail: Kelda, 
      caption: 'Kelda', 
      role: "Software Engineering Intern", 
      description: 'Utilize Kubernetes to develop ephemeral staging environments, enhancing developer productivity',
      link: 'https://www.kelda.io/',
    },
    { id: '3', 
      background: '#000000', 
      thumbnail: Yext, 
      caption: 'Yext', 
      role: "Software Engineering Intern", 
      description: 'Work with consulting team to build custom pages with optimized content to drive search traffic. and increase customer engagement',
      link: 'https://www.yext.com/',
    },
    { id: '4', 
      background: 'rgb(91, 177, 224)', 
      thumbnail: BerkeleyTime, 
      caption: 'BerkeleyTime', 
      role: "Product Manager", 
      description: 'Develop new features on the course discovery web application, allowing students to better navigate course enrollment on campus',
      link: 'https://berkeleytime.com',
    },
];

class Work extends React.Component {
    render() {
        return (
            <section id="three" class="work">
                <header class="major">
                  <h2>Experience</h2>
                </header>
                

                <Gallery images={EXPERIENCE_IMAGES.map(({ id, background, thumbnail, caption, role, description, link }) => ({
                    thumbnail,
                    background,
                    caption,
                    role,
                    description,
                    link,
                }))} />
            </section>
    );
    }
}

export default Work