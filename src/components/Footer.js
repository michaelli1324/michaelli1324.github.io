import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li>
                            <a href="https://github.com/michaelli1324" target="_blank" className="icon fa-github">
                                <span className="label">Github</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/li-michael/" target="_blank" className="icon fa-linkedin">
                                <span className="label">LinkedIn</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
