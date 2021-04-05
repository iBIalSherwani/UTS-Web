import React from 'react'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.css';


const Nav = styled.div`
background: rgb(12,0,150);
background: linear-gradient(90deg, rgba(12,0,150,1) 0%, rgba(55,39,209,1) 41%, rgba(0,107,255,1) 63% );
height: 78px;
width: 100%;

ul {
    text-align: right;
    padding: 20px;
    z-index: 9999;
  }
  
  li {
    display: inline-block;
    padding: 3px;
  }
  
  li a {
    color: white;
    padding: 25px;
    text-decoration: none;
    transition: all 0.4s ease-in;
  }
  
  li a:hover{
    padding: 25px;
    color: black;
    background-color: #34c6eb;
  }
  

.Name{
    float: left;
    color: #a29e90;
    font-family: "axis extra bold";
    padding: 13px;
    margin-left: 35px;
    line-height: 0px;
}
#tag{
    font-size: 10px;
    text-align: right;
}

.checkbtn{
  font-size: 30px;
  color: white;
  float: right;
  cursor: pointer;
  display: none;
  line-height: 70px;
  margin-right: 40px;
}
#check{
  display: none;
}

@media (max-width: 858px){
  .checkbtn{
    display: block;
  }
  .Name{
    float: left;
    color: #a29e90;
    font-family: "axis extra bold";
    padding: 13px;
    margin-left: 35px;
    line-height: 0px;
}
  ul{
    margin-top: -3px;
  background: rgb(12,0,150);
  background: linear-gradient(90deg, rgba(12,0,150,1) 0%, rgba(55,39,209,1) 41%, rgba(0,107,255,1) 63% );
  position: absolute;
    width: 100%;
    height: 0;
    top: -125%;
    text-align: center;
    transition: all 0.5s ease-in-out ;
    transition-delay: 0s;
  }
 ul li{
    display: block;
    margin: 10px 0;
    line-height: 30px;
  }
 ul li a{
    font-size: 10px;
  }
  #check:checked ~ ul{
    
    top: 80px;
    height: 230px;
  }
}
section{
  background-size: cover;
  height: calc(35vh-78px);
}

`



const navBar = () => {
  
    return(
      
        <Nav>
          <head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
  <link rel="stylesheet" href="style.css" /> 
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"/>
</head>

            <div class="Name">
            <h4> UNIQUE TRADING SOUL </h4>
            <p id="tag"> TRADING THE WORLD AT YOUR DOOR STEP </p>
            </div>
            
            <div>
            <input type="checkbox" id="check"  />         
            <label for="check" class="checkbtn">
            <i class="fas fa-bars" />
            </label>

                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/Products">Products</a></li>
                    <li><a href="/Contact">Contact</a></li>
                    <li><a href="/AboutUs">AboutUs</a></li>
                </ul>
            </div> 
             
            <section> </section>        
        </Nav>
        
    )
    
}
export default navBar;