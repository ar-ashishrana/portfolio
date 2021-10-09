import React from 'react'
import Contactcard from './Contactcard'

const Contact = (props) => {
    return (
        <>
         <section className="sec contact" id="contact">
            <h2 className="title">{props.title}</h2>
                <div className="max-width">
                    <div className="sec-content contact-content">
                        <div className="column left">
                            <div className="text">Get in touch</div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus dolore necessitatibus praesentium pariatur iste quis beatae porro et, omnis facilis optio possimus molestias? Reprehenderit rerum doloribus optio moleciatis!</p>
                            <div className="icon">
                                <Contactcard icon="user" head="Name" subtitle="Ashish" />
                                <Contactcard icon="map-marker-alt" head="Address" subtitle="Gurugram Haryana(122506)" />
                                <Contactcard icon="envelope" head="Email" subtitle="ashishjaat451@gmail.com" />
                            </div>
                        </div>
                        <div className="column right">
                            <div className="text">Message Us</div>
                            <form action="">
                                <div className="fields">
                                    <div className="field name">
                                        <input type="text" name="name" id="" placeholder="Name" required />
                                    </div>
                                    <div className="field email">
                                        <input type="email" name="Email" id="" placeholder="Email" required />
                                    </div>
                                </div>
                                    <div className="field">
                                        <input type="text" name="Subject" id="" placeholder="Subject" required />
                                    </div>
                                    <div className="textarea">
                                        <textarea name="textarea" id="" cols="50" rows="10" placeholder="Describe your issue" required ></textarea>
                                    </div>
                                    <div className="button">
                                        <input type="submit" name="name" id="" value="Send Message" />
                                    </div>
                            </form>
                            </div>
                        </div>
                </div>
            </section>   
        </>
    )
}

export default Contact
