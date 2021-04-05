import React from 'react'
import styled from 'styled-components'
import Navbar from './components/Header/navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer/Footer'
import Logo from './components/Header/logo'
import Carousel from './components/carousel'
import ProductLine from './components/productline'
import 'bootstrap/dist/css/bootstrap.min.css';

const Box = styled.div`
background: rgb(119,226,249);
background: linear-gradient(139deg, rgba(119,226,249,0.26094187675070024) 57%, rgba(144,170,171,0.40940126050420167) 100%);
height: auto;
width: 100%;


`

function Screen() {
    return (
      
        <Box>
              
            <Navbar>

            </Navbar>
                
                    <Logo>
                        
                    </Logo>
                        <Carousel>

                        </Carousel>
                       
                        <ProductLine>
                            
                        </ProductLine>
                    
                    <Footer>
                    
                    </Footer>
                 
        </Box>
    );

}

export default Screen;