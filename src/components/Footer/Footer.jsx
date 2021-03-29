import React from 'react'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.css';

const Box = styled.div`
  
.main{
background: url('ftr1.jpg'); 
background-repeat: no-repeat;
height: 200px;
width: 100%;
text-align: center;
margin-bottom: -20px;
}
.h3{
    text-align: center;
    font-size:10px;
}
`
const Footer = () => {
    return(
    <Box>
        <div class="main">
        <p> Certified and Associated with </p>
        <img src="ISO-Certified-Co-Logo-Blue.jpg" />
        </div>
        <div class="h3">
        <a> 2018 Unique Trading Soul Company Private Limited. | Designed By: ~BS </a>
        </div>
    </Box>
    )
}

export default Footer;