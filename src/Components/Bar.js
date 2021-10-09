import React from 'react'

const Bar = (props) => {
    return (
        <>
            <div className="bars">
                <div className="info">
                  <span>{props.name}</span>
                  <span>{props.val}%</span>
                </div>
                <div className={`line ${props.name} `}></div>
              </div>
        </>
    )
}

export default Bar
