import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker' 

const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 31.5002561,
      lng: 74.3228894
    },
    zoom: 15
  };
 
  render() {
    return (
      <div style={{ height: '27vh', width: '35%' , marginTop: '-150px' , float: 'right' , marginRight:'-9px'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAMTsk5nPN9DFmf5mEbrl843ScfBeCEDjo' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={31.5002561}
            lng={74.3228894}
            name="Unique Trading Soul"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;