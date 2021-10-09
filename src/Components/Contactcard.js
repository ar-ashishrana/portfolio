import React from "react";

const Contactcard = (props) => {
  return (
    <>
      <div className="row">
        <i className={`fas fa-${props.icon}`}></i>
        <div className="info">
          <div className="head">{props.head}</div>
          <div className="sub-title">{props.subtitle}</div>
        </div>
      </div>
    </>
  );
};

export default Contactcard;
