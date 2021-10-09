import React from "react";

const Servicecard = (props) => {
  return (
    <>
      <div className="card">
        <div className="box">
          <i className={`fas fa-${props.icon}`}></i>
          <div className="text">{props.title}</div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
            nostrum veniam dignissimos aperiam nobis nesciunt ratione sequi
            architecto ipsa libero.
          </p>
        </div>
      </div>
    </>
  );
};

export default Servicecard;
