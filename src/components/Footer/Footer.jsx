import React from 'react'
import styled from 'styled-components'
import Map from '../Maps'
import 'bootstrap/dist/css/bootstrap.css';

const Box = styled.div`
  
background: rgb(12,0,150);
    background: linear-gradient(90deg, rgba(12,0,150,1) 0%, rgba(55,39,209,1) 41%, rgba(0,107,255,1) 63% );
    height: 280px;
    width: 100%;
.main{
    float: left;
    color: white;
    padding: 15px;
    font-size: 12px;
    line-height: 14px;
    height: 260px;
    width: 100%;
}

#adj{
    margin-top: -4px;
}


.qr{
    float: left;
    text-align: left;
}

#qr{
    margin-right: -30px;
    margin-left: -30px;
    margin-top: -15px;
    padding: 50px;
    height: 200px;
}

#h3{
    color: red; 
    text-align: center;
    font-size: 10px;
    
}

  
`

const Footer = () => {
    return(
    <Box>
       
        <div class="main">
        <div class="qr">
            <img id="qr" src="/Products-pics/Contact-QR.jpg" />
        </div>
        <h5> <img src="addressxx.png" id="adj" />Address: </h5>
        <p> Office# 202/204, 2nd Floor, Garden Tower, 47-Babar Block, New Garden Town, Lahore</p>
        <h5> <img src="email.png" id="adj" /> Email:</h5>
        <p> uniquetradingsoul@gmail.com </p>
        <h5> <img src="phone-icon.png" id="adj" /> Phone: </h5>  
        <p>  +92-300-416-4002 <br></br>+92-334-4255131 </p>
        
    <Map></Map>
        </div>
        
        
        
       
        
        <div id="h3">  
        <p> 2018 Unique Trading Soul Company Private Limited. | Designed By: ~BS </p>
        </div>
    </Box>
    )
}



export default Footer;