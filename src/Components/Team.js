import React from 'react'

const Team = (props) => {
    return (
        <>
            <section className="sec team">
            <h2 className="title">{props.title}</h2>
                <div className="max-width">
                    <div className="sec-content team-content">
                        <div className="column left">
                        </div>
                        <div className="column right">
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Team
