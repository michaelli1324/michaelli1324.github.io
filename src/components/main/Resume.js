import React from 'react';
import { Document, Page } from 'react-pdf'

import ResumePDF from '../../assets/files/LiMichael2021.pdf'

class Resume extends React.Component {
    render() {
        return (
            <section id="five">
                <div class="resume">
                    <div class="resume-content">
                        <a href={ResumePDF} target="_black">
                            <Document file={ResumePDF}>
                                <Page pageNumber={1} />
                            </Document>
                        </a>
                    </div>
                </div>
            </section>
        )
    }
}

export default Resume