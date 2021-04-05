import React from 'react'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';

const Prod = styled.div`


.container{
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(186px, 1fr));
    position: relative;
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
    font-size: 20px;
    margin-top: 40px;
    margin-bottom: 40px;
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
    width: 40%;
    margin-left: 1px;
    background: rgb(12,0,150);
    background: linear-gradient(90deg, rgba(12,0,150,1) 0%, rgba(55,39,209,1) 30%, rgba(0,107,255,1) 85% );
    color: white;
    font-size: 12px;
    opacity:0.8;
    transition: all .4s;
}

.buttonContainer .btn:hover {
    opacity: 1;
    letter-spacing: 0.5px;
}
.productDetails{
    font-size: 12px;
    color: #1d6ad4;
    margin-bottom: 10px
}



`
const faceMask = () => {
   return(
        <Prod>
            
         
            
             
            <div class="container">
            <h3 id="category"> 
                   FACE MASK
                </h3>
               
                <div class="item">
                        <div class="pic">
                               <img src="toilet-roll.jpg" alt="product" /> 
                        </div>
                        <div class="buttonContainer">
                                <button class="btn">  Add To Cart
                                </button>
                                <button class="btn">  Buy Now
                                </button>
                                <div class="productDetails">
                                        <h5>PRODUCT NAME</h5>
                                        <a>PRODUCT PRICE</a>
                                </div>
                        </div>
                </div>
           
                <div class="item">
                        <div class="pic">
                               <img src="toilet-roll.jpg" alt="product" /> 
                               <div class="buttonContainer">
                                <button class="btn">  Add To Cart
                                </button>
                                <button class="btn">  Buy Now
                                </button>
                                    <div class="productDetails">
                                        <h5>PRODUCT NAME</h5>
                                        <a>PRODUCT PRICE</a>
                                    </div>
                                </div>
                        </div>
                </div>
                <div class="item">
                        <div class="pic">
                               <img src="toilet-roll.jpg" alt="product" /> 
                               <div class="buttonContainer">
                                <button class="btn">  Add To Cart
                                </button>
                                <button class="btn">  Buy Now
                                </button>
                                    <div class="productDetails">
                                        <h5>PRODUCT NAME</h5>
                                        <a>PRODUCT PRICE</a>
                                    </div>
                                </div>
                        </div>
                </div>
                <div class="item">
                        <div class="pic">
                               <img src="toilet-roll.jpg" alt="product" /> 
                               <div class="buttonContainer">
                                <button class="btn">  Add To Cart
                                </button>
                                <button class="btn">  Buy Now
                                </button>
                                    <div class="productDetails">
                                        <h5>PRODUCT NAME</h5>
                                        <a>PRODUCT PRICE</a>
                                    </div>
                                </div>
                        </div>
                </div>
            </div>
           
           
        </Prod>

    );
}

export default faceMask;