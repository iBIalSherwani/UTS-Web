import React from 'react'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';

const Prod = styled.div`

.container{
    display: grid;
    grid-gap: 80px;
    grid-template-columns: repeat(auto-fit, minmax(186px, 1fr));
    position: relative;
    margin-bottom: 20px
}
#category{
    color: #010466;
    text-align: center;
    width: 100%;
    position: absolute;
    transition: all .7s;
}
#category:hover{
    color: #ff2a00;
    letter-spacing: 5px;
}
.item{
    text-align: center;
    margin-top: 40px;
    border: 3px solid #010466;
    border-radius: 10px;
    transition: all 0.1s;
}

.item:hover{
    border: 2px solid #010466;
    border-radius: 15px;

}

.buttonContainer .btn{
    height: 35px;
    width: 70%;
    text-align: center;
    background: rgb(12,0,150);
    background: linear-gradient(90deg, rgba(12,0,150,1) 0%, rgba(55,39,209,1) 30%, rgba(0,107,255,1) 85% );
    color: white;
    font-size: 10.5px;
    opacity:0.8;
    transition: all .4s;
}

.buttonContainer .btn:hover {
    opacity: 1;
    letter-spacing: 0.5px;
}
img{
    border-radius: 5px;
}

`
const Product = () => {
   return(
        <Prod>
            <div class="container">
            <h3 id="category"> 
                   PRODUCT LINE
                </h3>
               
                <div class="item">
                        <div class="pic">
                               <img src="toilet-roll.jpg" alt="product" /> 
                        </div>
                        <div class="buttonContainer">
                        <form method="get" action="/View-Heavy-Machinery">
                                <button class="btn">  View Heavy Machinery
                                </button>
                            </form>   
                               
                        </div>
                </div>
           
                <div class="item">
                        <div class="pic">
                               <img src="toilet-roll.jpg" alt="product" /> 
                               <div class="buttonContainer">
                               <form method="get" action="/View-Auto-Mobile">
                                <button class="btn">  View AutoMobile
                                </button>
                                </form>
                                  
                                </div>
                        </div>
                </div>
                <div class="item">
                        <div class="pic">
                               <img src="toilet-roll.jpg" alt="product" /> 
                               <div class="buttonContainer">
                               <form method="get" action="/View-Tissues">
                                <button class="btn">  View Tissues
                                </button>
                                </form>
                                 
                                </div>
                        </div>
                </div>
                <div class="item">
                        <div class="pic">
                               <img src="toilet-roll.jpg" alt="product" /> 
                               <div class="buttonContainer">
                               <form method="get" action="/View-Face-Mask">
                                <button class="btn">  View Face Mask
                                </button>
                                </form>
                                   
                                </div>
                        </div>
                </div>
            </div>
           
           
        </Prod>

    );
}

export default Product;