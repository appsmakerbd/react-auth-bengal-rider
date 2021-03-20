import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import transportTypeJson from '../../Data/TransportType.json';
import TransportType from '../TransportType/TransportType';
import './Home.css';

const Home = () => {
    const [transportTypes,setTransportTypes]=useState(transportTypeJson);
    console.log(transportTypes);
    return (
        <div className="home-area">
            <div className="container">
                <Row>
                    {
                        transportTypes.map(transportType => <TransportType key={transportType.id} transportObject={transportType}></TransportType>)
                    }
                </Row>
            </div>
            
        </div>
    );
};

export default Home;