import React from 'react';
import { Row } from 'react-bootstrap';
import './ShowSearchResult.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233668.38703724756!2d90.27923971281079!3d23.78057325785754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1616244946332!5m2!1sen!2sbd" style={{border:0,width:'100%',height:'600px'}} allowFullScreen="" loading="lazy"></iframe>
            </div>
        </Row>
    );
};

export default ShowSearchResult;