import React from 'react'
import styled from 'styled-components'
import Navbar from './components/Header/navbar'
import ContactForm from './components/contactform'
import Footer from './components/Footer/Footer'
import Logo from './components/Header/logo'


const Box = styled.div`
background: rgb(0,212,255);
background: linear-gradient(156deg, rgba(0,212,255,1) 0%, rgba(2,159,220,1) 10%, rgba(4,118,193,1) 27%, rgba(5,87,172,1) 42%, rgba(8,38,140,1) 58%, rgba(24,9,121,1) 83%);
height: 415px;
width: 100%;
`

function Contact() {
    return (
        <Box>
            <Navbar>

            </Navbar>
                
                    <Logo>
                        
                    </Logo>
                        <ContactForm>

                        </ContactForm>
                

                    <Footer>

                    </Footer>
                 
        </Box>
    );

}

export default Contact;
