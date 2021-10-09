import React from 'react'
import Aboutimage from './Aboutimage';
import Abouttext from './Abouttext';

const About = (props) => {
    
    return (
        <>
        <section className="sec about" id="about">
            <h2 className="title">{props.title}</h2>
                <div className="max-width">
                    <div className="sec-content about-content">
                        <div className="column left">
                        <Aboutimage src="https://images.unsplash.com/photo-1457732815361-daa98277e9c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" />
                        </div>
                        <div className="column right">
                        <Abouttext text="I am Ashish and I'm a " span="Developer" btn="Download CV"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;