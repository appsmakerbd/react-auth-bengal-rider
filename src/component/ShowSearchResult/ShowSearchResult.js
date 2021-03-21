import React from 'react';
import { Row } from 'react-bootstrap';
import './ShowSearchResult.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GoogleMap from '../GoogleMap/GoogleMap';

const ShowSearchResult = (props) => {
    const {journeyDate,from,to,vehicle}=props.searchQuery;
    console.log(props.searchQuery);
    return (
        
        <Row>
            <div className="col-lg-4 col-md-4 col-sm-5 col-xs-12 left-box">
                <div className="inner-box">
                    <div className="journeyInfo">
                        <p><FontAwesomeIcon icon={["fas", "clock"]} /> {journeyDate}</p>
                        <p><FontAwesomeIcon icon={["fas", "map-pin"]} /> From: {from}</p>
                        <p><FontAwesomeIcon icon={["fas", "map-pin"]} />  To: {to}</p>
                    </div>
                    <ul>
                        {
                            //sd means single data
                            vehicle.map(sd => <li className="d-flex justify-content-between" key={sd.id}><img src={sd.image} alt={sd.vehicle}/> <span>{sd.vehicle}</span> <span><FontAwesomeIcon icon={["fas", "users"]} /> {sd.capacity} </span> <span>${sd.charge}</span></li> )
                        }
                    </ul>
                </div>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-7 col-xs-12 right-box">
                {/* Showing Google MAP API but I have no API KEy because I have no credit Card */}
                <GoogleMap></GoogleMap>
            </div>
        </Row>
    );
};

export default ShowSearchResult;