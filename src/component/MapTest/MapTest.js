import React from 'react';
import GoogleMapReact from 'google-map-react';

const MapTest = () => {
    return (
        <div style={{width:'600px',height:'600px',border:'1px solid blue'}}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
                >
                <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                />
                </GoogleMapReact>
        </div>
    );
};

export default MapTest;