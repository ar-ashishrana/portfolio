import React from 'react'
import Servicecard from './Servicecard'

const Services = () => {
    return (
        <>
            <section className="sec services" id="services">
                <h2 className="title">My Service</h2>
                <div className="max-width">
                    <div className="sec-content service-content">
                       <Servicecard title="Web Development" icon="paint-brush"/>
                       <Servicecard title="Advertising" icon="chart-line"/>
                       <Servicecard title="App design" icon="code"/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services
