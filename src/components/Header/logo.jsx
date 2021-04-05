import React from 'react'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.css';

const Box = styled.div`
float: left;
position: absolute;
top: -1%;
left: -0.5%;

img{
    height: 100px;
    width: 140%;
}
`

const Logo = () => {
    return(
        <Box>
            <div>
                <img src='uts-logo.png' />
            </div>
        </Box>
    )
}

export default Logo;