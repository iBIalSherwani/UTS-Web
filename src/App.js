import React from 'react'
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomeScreen from './Home'
import Products from './products'
import Contact from './Contact'
import AboutUs from './AboutUs'
import HeavyM from './heavym'
import AutoM from './autom'
import FaceM from './faceM'
import Tissues from './tissues'

const Box = styled.div`

`

function App() {
  return (
    
    <Box>
      
      <Router> 
        <Route exact path="/" component={HomeScreen} />
        <Route path="/Products" component={Products} />
        <Route path="/Contact" component={Contact} />
        <Route path="/AboutUs" component={AboutUs} />
        <Route path="/View-Heavy-Machinery" component={HeavyM} />
        <Route path="/View-Auto-Mobile" component={AutoM} />
        <Route path="/View-Face-Mask" component={FaceM} />
        <Route path="/View-Tissues" component={Tissues} />

      </Router>  
      
    </Box>
  );
}

export default App;
