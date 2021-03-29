import React from 'react'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';

const Prod = styled.div`


.container{
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(186px, 1fr));
    position: relative;
    margin-bottom: 20px

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
    width: 60%;
    margin-left: 1px;
    background: rgb(106,139,213);
    background: linear-gradient(139deg, rgba(106,139,213,1) 0%, rgba(100,191,209,1) 100%);
    color: white;
    font-size: 12px;
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