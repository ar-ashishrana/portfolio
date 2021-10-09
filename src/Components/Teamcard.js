import React from 'react'

const Teamcard = (props) => {
    return (
        <>
        <div className="card">
        <div className="box">
          <img src={props.name} alt="" />
          <div className="text">{props.title}</div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
            nostrum veniam dignissimos aperiam nobis nesciunt ratione sequi
            architecto ipsa libero.
          </p>
        </div>
      </div>  
        </>
    )
}

export default Teamcard;

// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

// export default class VariableWidth extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       autoplay: true,
//       speed: 2000,
//       autoplaySpeed: 2000,
//       cssEase: "linear"
//     };
//     return (
//       <div>
//         <h2>Variable width</h2>
//         <Slider {...settings}>
//           <div style={{ width: 100 , backgroundColor: "blue", height: "150px"}}>
//             <p>100</p>
//           </div>
//           <div style={{ width: 175 , backgroundColor: "red", height: "150px"}}>
//             <p>175</p>
//             </div>
//             <div style={{ width: 100 , backgroundColor: "blue", height: "150px"}}>
//             <p>100</p>
//           </div>
//           <div style={{ width: 175 , backgroundColor: "red", height: "150px"}}>
//             <p>175</p>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }
