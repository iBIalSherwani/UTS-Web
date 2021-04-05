import React from 'react'
import styled from 'styled-components'
import Navbar from './components/Header/navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer/Footer'
import Logo from './components/Header/logo'
import AutoM from './components/ProductsCat/automobile'
import 'bootstrap/dist/css/bootstrap.min.css';


const Box = styled.div`
background: rgb(119,226,249);
background: linear-gradient(139deg, rgba(119,226,249,0.26094187675070024) 57%, rgba(144,170,171,0.40940126050420167) 100%);
height: 100%;
width: 100%;


`

function HeavyM() {
    return (
      
        <Box>
              
            <Navbar>

            </Navbar>
                
                    <Logo>
                        
                    </Logo>
                        
                     <AutoM>
                         
                     </AutoM>
                        
                                              
                    
                    <Footer>

                    </Footer>
                 
        </Box>
    );

}

export default HeavyM;