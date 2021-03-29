import React from 'react'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';


const Crsl = styled.div`
#cf {
  height: 450px;
  width: 100%;
}

#cf img {
  position:absolute;
  left:0;
  -webkit-transition: opacity 1s ease-in-out;
  -moz-transition: opacity 1s ease-in-out;
  -o-transition: opacity 1s ease-in-out;
  transition: opacity 1s ease-in-out;
  height: 450px;
  width: 100%;
}

#cf img.top:hover {
  opacity:0;
}
`

const Carousel = () => {
	return(
    <Crsl>
<div id="cf">
  <img class="bottom" src="toilet-roll.jpg" />
  <img class="top" src="ZBWFP7.jpg" />
</div>

</Crsl>
	)
  
}

export default Carousel;