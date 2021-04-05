import React from 'react'
import styled from 'styled-components'
import Navbar from './components/Header/navbar'
import ContactForm from './components/contactform'
import Footer from './components/Footer/Footer'
import Logo from './components/Header/logo'


const Box = styled.div`
background: rgb(119,226,249);
background: linear-gradient(139deg, rgba(119,226,249,0.26094187675070024) 57%, rgba(144,170,171,0.40940126050420167) 100%);
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
