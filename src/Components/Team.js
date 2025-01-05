import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Teamcard from './Teamcard';
// import Slider from "react-slick";

const Team = (props) => {
    // const settings = {
    //     className: "slider variable-width",
    //     dots: true,
    //     infinite: true,
    //     centerMode: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     variableWidth: true
    //   };
    return (
        <>
            <section className="sec team" id="team">
                <h2 className="title">{props.title}</h2>
                <div className="max-width">
                    <div className="sec-content team-content">
                        <Teamcard title="Ashish" name="https://images.unsplash.com/photo-1603969409447-ba86143a03f6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGxhcHRvcCUyMGltZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />         
                        <Teamcard title="Ashish" name="https://images.unsplash.com/photo-1603969409447-ba86143a03f6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGxhcHRvcCUyMGltZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                        <Teamcard title="Ashish" name="https://images.unsplash.com/photo-1603969409447-ba86143a03f6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGxhcHRvcCUyMGltZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                    </div>
                </div>
            </section>
        </>
    )
}
// }
export default Team