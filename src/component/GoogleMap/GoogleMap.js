import React from 'react';
import GoogleMapReact from 'google-map-react';

const GoogleMap = () => {
    const defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
      };
    return (
        <div style={{width:'600px',height:'600px',border:'1px solid blue'}}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                >
                
                </GoogleMapReact>
        </div>
    );
};

export default GoogleMap;