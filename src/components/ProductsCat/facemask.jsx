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
    color: #d6ddff;
    text-align: center;
    width: 100%;
    position: absolute;
    transition: all .7s;
}
#category:hover{
    background: #B3E3FF;
    background: -webkit-radial-gradient(circle farthest-side at top left, #B3E3FF 0%, #FF3526 100%);
    background: -moz-radial-gradient(circle farthest-side at top left, #B3E3FF 0%, #FF3526 100%);
    background: radial-gradient(circle farthest-side at top left, #B3E3FF 0%, #FF3526 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
     
    letter-spacing: 10px;
}
.item{
    text-align: center;
    font-size: 20px;
    margin-top: 40px;
}

.buttonContainer .btn{
    height: 35px;
    width: 45%;
    margin-left: 1px;
    background: rgb(106,139,213);
    background: linear-gradient(139deg, rgba(106,139,213,1) 0%, rgba(100,191,209,1) 100%);
    color: white;
    font-size: 12px;

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