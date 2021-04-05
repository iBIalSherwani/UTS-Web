import React from 'react'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.css';

const Bttn = styled.div`
float: right;
margin-right: 35px;
margin-top: -24px;

.dropbtn {
    color: #66dade;
    font-size: 14px;
    border: none;
    background-color: transparent;
  }
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #143059;
    min-width: 10px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }
.dropdown {
    position: relative;
    display: inline-block;
  }
.dropdown:hover .dropbtn {
    background-color: #143059;
}
.dropdown:hover .dropdown-content {
    display: block;
    background-color: #143059;

}
.dropdown-content a:hover {background-color: #ddd;}
.dropdown-content a {
    color: #8ba4c9;
    padding: 2px 6px;
    text-decoration: none;
    display: block;
  }
`

const Button = () => {
    return(
        <Bttn > 
            <div class='dropdown'>
                <button class='dropbtn'> Menu </button>
                    <div class='dropdown-content'>
                        <a href='#'> Home</a>
                        <a href='#'> Products</a>
                        <a href='#'> AboutUs</a>
                        <a href='#'> Partners</a>
                    </div>
            </div>            
        </Bttn>
    )
}


export default Button;