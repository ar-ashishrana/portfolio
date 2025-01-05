import React from "react";
import Bar from "./Bar";
import Abouttext from "./Abouttext";

const Skills = (props) => {
  return (
    <>
      <section className="sec skills">
        <h2 className="title">{props.title}</h2>
        <div className="max-width">
          <div className="sec-content skills-content">
            <div className="column left">
              <Abouttext text="My creative skills & experiments" btn="Read more"/>
            </div>
            <div className="column right">
              <Bar name="HTML" val={90} />
              <Bar name="Css" val={75} />
              <Bar name="Javascript" val={70} />
              <Bar name="React" val={60} />
              <Bar name="PHP" val={65} />
              <Bar name="Laravel" val={60} />
              <Bar name="MySql" val={70} />
              <Bar name="Wordpress" val={70} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Skills;