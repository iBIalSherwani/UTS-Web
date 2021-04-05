import React from 'react'
import styled from 'styled-components'
import Navbar from './components/Header/navbar'
import Footer from './components/Footer/Footer'
import Logo from './components/Header/logo'
import AboutUs from './components/about'
import 'bootstrap/dist/css/bootstrap.min.css';


const Box = styled.div`
background: rgb(119,226,249);
background: linear-gradient(139deg, rgba(119,226,249,0.26094187675070024) 57%, rgba(144,170,171,0.40940126050420167) 100%);height: 100%;
width: 100%;

`

function aboutUs() {
    return (
        <Box>
            <Navbar>

            </Navbar>
                
                    <Logo>
                        
                    </Logo>
                    <AboutUs/>
                   
                    <Footer>

                    </Footer>
                 
        </Box>
    );

}

export default aboutUs;