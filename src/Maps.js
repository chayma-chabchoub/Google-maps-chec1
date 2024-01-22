import React from "react";
import GoogleMapReact from 'google-map-react';
import 'bootstrap/dist/css/bootstrap.min.css';

// this is a map  
const AnyReactComponent = ({ text }) => <div>{text}</div>;

function MapCard() {
  const defaultProps = {
    center: {
      lat: 35.8491766,
      lng: 10.5863952
    },
    zoom: 11
  };

  return (
    
    <div style={{ 
      boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
      borderRadius: "15px",
      overflow: 'hidden',
      width: '50%',
      marginLeft: '50px',
      marginTop: '20px',
      background: "#fff",
      position: "relative",
      padding: '20px',
      // marginBottom:'100px',
    
    }}>
      <div style={{ height: '80vh', borderRadius: '15px', overflow: 'hidden' ,}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBB9B-Rk8go54u0Ty2z-gNS28IhIQbG_lg" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          {/* Your map markers or components go here */}
        </GoogleMapReact>
      </div>
    </div>
  );
}

export default MapCard;
