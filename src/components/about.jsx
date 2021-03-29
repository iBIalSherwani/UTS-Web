import React from 'react'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';

const Box = styled.div`
height: 600px;
.intro{
    text-align: center;
    font-family: "Monaco", Sans-serif;
    color: #d6ddff;
    float: left;
    position: relative;
    height: auto;
    width: 100%;
    transition: all .7s;
}
.intro:hover{
    background: #B3E3FF;
    background: -webkit-radial-gradient(circle farthest-side at top left, #B3E3FF 0%, #FF3526 100%);
    background: -moz-radial-gradient(circle farthest-side at top left, #B3E3FF 0%, #FF3526 100%);
    background: radial-gradient(circle farthest-side at top left, #B3E3FF 0%, #FF3526 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
     
    letter-spacing: 10px;
}
.h5{
    text-align: center;
    font-family: "Monaco", Sans-serif;
    color: white;
    float: left;
    position: relative;
    font-size: 1em;
    height: auto;
    width: 100%;
}

.ul{
    text-align: center;
    font-family: "Monaco", Sans-serif;
    color: white;
    font-weight: 460;
    float: right;
    position: relative;
    height: auto;
    width: 100%;
    padding: 60px;
}

.ul li:hover {
    background: #B3E3FF;
background: -webkit-radial-gradient(circle farthest-side at top left, #B3E3FF 0%, #FF3526 100%);
background: -moz-radial-gradient(circle farthest-side at top left, #B3E3FF 0%, #FF3526 100%);
background: radial-gradient(circle farthest-side at top left, #B3E3FF 0%, #FF3526 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
transition: all .7s;
letter-spacing: 2px;
  }
`

const About = () => {
    return(
        <Box>
     
                    <div class='intro'> 
                        
                        <h5>
                            <b>INTRODUCTION </b>
                        </h5>
                        </div>
                        <div class="h5">
                        <p>
                            We, the Unique Trading Soul is a NTN and FBR registered Company with a team of Professionals.<br></br>
                            We import from China, the high class <b> Weight Wheel Balancer, Welding Machines </b> ( AC Type, DC inverter Type, Capacitor Discharge and Seam Welding Type ),
                            <b> Welding Nuts </b> ( Projection Welding Knurling Type, Flange Type ), <b> Hand Pallet Trucks </b> , <b> High Quality Facial Tissues and Toilet Rolls and Other Industrial Accessories <br></br> </b> and sell them on Competitive price in Local Market.
                            Our Source Companies export to a lot of countries all over the World, including Germany, Japan, France, Poland, South Korea, Australia, USA, Canada, UAE, Italy, Russia <br></br> and so many other Countires.
                            As increasing your Profit and bring you a Prosperous Business, we can offer you the best services.
                        </p>
                    </div>
                    <div class="ul">
                        <ul>
                            <li><b> EXCELLENT QUALITY </b></li>
                            <li><b> COMPETITIVE PRICE </b></li>
                            <li><b> PUNCTUAL DELIVERY </b></li>
                            <li><b> PROFESSIONAL QUALITY CONTROL </b></li>
                            <li><b> HONEST SERVICE </b></li>
                        </ul>
                    </div>
                
        </Box>
    );
}
export default About;