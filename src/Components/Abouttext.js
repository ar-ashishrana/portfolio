import React from "react";

const Abouttext = (props) => {
  return (
    <>
        <div className="text">{props.text}
           <span>{props.span}</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error,
          adipisci. Rem mollitia impedit nihil eius alias laborum debitis, quia
          facilis, omnis corrupti assumenda culpa eaque enim eos cupiditate,
          voluptatibus necessitatibus voluptas dolorem illo aliquam! Repellat,
          repellendus? Eius odio quia, odit distinctio dolorum ducimus a? Ipsum
          quia, voluptas, culpa illum harum saepe provident dicta minus nam
          natus nostrum adipisci quas voluptatibus iste veniam ex expedita
          accusamus incidunt iusto aspernatur reprehenderit neque et quo? Maxime
          in ipsum odio facere eaque eum tempora!
        </p>
        <a href="/">{props.btn}</a>
    </>
  );
};
export default Abouttext;