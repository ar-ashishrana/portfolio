// React version: "^16.12.0"
import React from "react";
import Typed from 'typed.js';
// Import the desired words
// import words from "./words";
class Typing extends React.Component {
    componentDidMount() {
      const options = {
          strings: [
          "Developer","Designer","Freelancer"
      ],
       typeSpeed: 100,
      backSpeed: 40,
      loop: true
      };
      this.typed = new Typed(this.el, options);
    }
    componentWillUnmount() {
      this.typed.destroy();
    }
  render() {
    return (
      <>
        <span
            style={{ whiteSpace: 'pre' }}
            ref={(el) => { this.el = el; }}
          />
      </>
    );
  }
}
export default Typing;