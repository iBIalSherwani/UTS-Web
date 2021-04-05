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
background: rgb(9,206,247);
background: linear-gradient(139deg, rgba(9,206,247,0.3449754901960784) 90%, rgba(141,219,221,1) 100%);
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