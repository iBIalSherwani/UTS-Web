import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



const Carousell = () => {
	return(
    
    <Carousel autoPlay showArrows={false} showThumbs={false} infiniteLoop={true} interval={6000}  >
      
                <div style={{ height: "350px" }} >
                    <img src="ftr.jpg"  />
                    <p className="legend" style={{ background: "linear-gradient(139deg, rgba(119,226,249,0.26094187675070024) 57%, rgba(144,170,171,0.40940126050420167) 100%)" , color: "black" , marginBottom: "-12px" }} >Legend 1</p>
                </div>
                <div style={{ height: "350px"}}>
                    <img src="ZBWFP7.jpg" />
                    <p className="legend" style={{ background: "linear-gradient(139deg, rgba(119,226,249,0.26094187675070024) 57%, rgba(144,170,171,0.40940126050420167) 100%)" , color: "black" , marginBottom: "-12px"}} >Legend 2</p>
                </div>
                <div style={{ height: "350px"}}>
                    <img src="ftr1.jpg" />
                    <p className="legend" style={{ background: "linear-gradient(139deg, rgba(119,226,249,0.26094187675070024) 57%, rgba(144,170,171,0.40940126050420167) 100%)" , color: "black" , marginBottom: "-12px" }} >Legend 3</p>
                </div>
            
</Carousel>

	)
  
}

export default Carousell;