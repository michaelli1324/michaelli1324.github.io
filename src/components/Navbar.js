import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

class Navbar extends React.Component {
    render() {
        return (
            <navbar class="navbar">
                <Link 
                    activeClass="active" 
                    className="navbar-item" 
                    to="two" 
                    spy={true} 
                    smooth={'easeInOutQuad'}
                >
                    About
                </Link>
                <Link 
                    activeClass="active" 
                    className="navbar-item" 
                    to="three" 
                    spy={true} 
                    smooth={'easeInOutQuad'}
                >
                    Work
                </Link>
                <Link 
                    activeClass="active" 
                    className="navbar-item" 
                    to="four" 
                    spy={true} 
                    smooth={'easeInOutQuad'}
                >
                    Contact
                </Link>
                <Link 
                    activeClass="active" 
                    className="navbar-item" 
                    to="five" 
                    spy={true} 
                    smooth={'easeInOutQuad'}
                >
                    Resume
                </Link>
            </navbar>
        )
    }
}

export default Navbar
