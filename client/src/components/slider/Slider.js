import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Slider.css"

function Slider(props) {
  console.log(props.prod.slider)
  const prods = props.prod.slider
  return(
    <div className="slider-container">
    <Carousel autoPlay showArrows={true} infiniteLoop thumbWidth={0} >
      {prods.map((prod) => (
          <img src={prod.imgUrl} alt="" />
      ))}
    </Carousel>
    </div>

  )
}

export default Slider;
