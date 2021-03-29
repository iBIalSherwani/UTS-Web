import React from 'react'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.css';
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>


const Nav = styled.div`

ul {
    
    list-style-type: none;
    overflow: hidden;
    width:100%;
    margin-bottom: 5px;
  }
  
  li {
    float: left;
    margin-left: -60px;
  }
  
  li a {
    color: white;
    display: inline;
    text-align: center;
    padding: 50px;
    text-decoration: none;
    margin-left: 25px;
  }
  
  li a:hover{
    background-color: transparent;
    color: #1d6ad4;
  }
  

.Name{
    float: left;
    position: relative;
    margin-left: 30px;
    height: 30px;
    width: 40%;
    padding: 15px;
}
.Right{
    float: right;
    width: 60%;
    text-align: right;
    margin-top: -20px;
    margin-right: 5px;
    margin-bottom: 10px;
    padding: 8px;
}
  
`

const navBar = () => {
    
    return(
        <Nav>
            
            <div class="Name">
            <h4> UNIQUE TRADING SOUL </h4>
            </div>
            <div class="Right">
                <h5> 9:00 AM - 5:00 PM | +923004164002 </h5>
            </div>
            <div>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/Products">Products</a></li>
                    <li><a href="/Contact">Contact</a></li>
                    <li><a href="/AboutUs">AboutUs</a></li>
                </ul>
            </div>        
        </Nav>
    )
}
export default navBar;