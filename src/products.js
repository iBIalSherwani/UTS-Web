import React from 'react'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Header/navbar'
import Footer from './components/Footer/Footer'
import Logo from './components/Header/logo'
import Cat1 from './components/ProductsCat/heavymachinery'
import Cat2 from './components/ProductsCat/automobile'
import Cat3 from './components/ProductsCat/tissues'
import Cat4 from './components/ProductsCat/facemask'

const Box = styled.div`
background: rgb(0,212,255);
background: linear-gradient(156deg, rgba(0,212,255,1) 0%, rgba(2,159,220,1) 10%, rgba(4,118,193,1) 27%, rgba(5,87,172,1) 42%, rgba(8,38,140,1) 58%, rgba(24,9,121,1) 83%);
height: 100%;
width: 100%;
`
    
    function Products() {
        return(
        <Box>
                <Navbar>
    
                </Navbar>
                        <Logo>
                            
                        </Logo>
                        <Cat1>
                            
                        </Cat1>
                        <Cat2>

                        </Cat2>
                        <Cat3>

                        </Cat3>
                        <Cat4>
                            
                        </Cat4>
                        <Footer>
    
                        </Footer>
                     
            </Box>
        );
    
    }


export default Products;