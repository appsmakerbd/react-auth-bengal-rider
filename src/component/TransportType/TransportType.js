import React from 'react';
import './TransportType.css';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

const TransportType = (props) => {
    const {id,vehicle,image}=props.transportObject;
    return (
        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 card-box">
            <Link to={"/destination/"+vehicle} className="inner-box">
                <img src={image} alt={vehicle}/>
                <h2>{vehicle}</h2>
            </Link>
            
        </div>
    );
};

export default TransportType;