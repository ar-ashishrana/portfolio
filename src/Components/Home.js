import React from "react";
import "./style.css";
import Typing from "./Typing";
import Typed from 'typed.js';

const Home = () => {  
  return (
    <>
      <section className="home" id="home">
        <div className="max-width">
          <div className="home-content">
            <div className="text-1">Hello my Name is</div>
            <div className="text-2">Ashish</div>
            <div className="text-3">
              And I'm a <span><Typing /></span>
            </div>
            <a href="#">Hire me</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
