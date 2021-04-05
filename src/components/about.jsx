import React from 'react'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';

const Box = styled.div`
.intro{
    margin-top: 10px;
    text-align: center;
    font-family: "Monaco", Sans-serif;
    color: #010466;
    height: auto;
    transition: all .5s;
}
.intro:hover{
    color: #ff2a00;
    letter-spacing: 5px;
}
.h5{
    text-align: center;
    font-family: "Monaco", Sans-serif;
    color: #010466;
    font-size: 1em;
    height: auto;
}

.ul{
    text-align: center;
    font-family: "Monaco", Sans-serif;
    color: #010466;
    font-weight: 460;
    height: auto;
    padding: 60px;
}
.ul li{
    list-style-type: none;
    text-align: center;
}
.ul li:hover {
    color: #ff2a00;
    transition: all .5s;
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