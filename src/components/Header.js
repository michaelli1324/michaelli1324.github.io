import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

import Footer from './Footer'
import Navbar from './Navbar'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <Link to="one" className="image avatar" spy={true} smooth={'easeInOutQuad'}><img src={avatar} alt="" /></Link>
                    <Navbar />
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
