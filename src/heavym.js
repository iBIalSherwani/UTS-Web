import React from 'react'
import styled from 'styled-components'
import Navbar from './components/Header/navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer/Footer'
import Logo from './components/Header/logo'
import HeavyM from './components/ProductsCat/heavymachinery'
import 'bootstrap/dist/css/bootstrap.min.css';


const Box = styled.div`
background: rgb(0,212,255);
background: linear-gradient(156deg, rgba(0,212,255,1) 0%, rgba(2,159,220,1) 10%, rgba(4,118,193,1) 27%, rgba(5,87,172,1) 42%, rgba(8,38,140,1) 58%, rgba(24,9,121,1) 83%);
height: 100%;
width: 100%;



`

function Heavym() {
    return (
      
        <Box>
              
            <Navbar>

            </Navbar>
                
                    <Logo>
                        
                    </Logo>
                        
                     
                        <HeavyM>

                        </HeavyM>
                                              
                    
                    <Footer>

                    </Footer>
                 
        </Box>
    );

}

export default Heavym;