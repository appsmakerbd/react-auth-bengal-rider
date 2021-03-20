import React from 'react';
import { Row } from 'react-bootstrap';
import './Destination.css';

const Destination = () => {
    return (
        <div className="container destination-area">
            <Row>
                <div className="col-lg-4 col-md-4 col-sm-5 col-xs-12 left-box">
                    <div className="inner-box">
                        <form>
                            <div className="form-group">
                                <label for="from">Pick From</label>
                                <input  type="text" id="from" class="form-control" name="from" placeholder="Your Location"/>
                            </div>
                            <div className="form-group">
                                <label for="to">To</label>
                                <input  type="text" id="to" class="form-control" name="to" placeholder="Destination"/>
                            </div>
                            <div className="form-group">
                                <label for="date">Journey Date</label>
                                <input  type="date" id="date" class="form-control" name="date" placeholder="Pick a date"/>
                            </div>
                            <div className="form-group">
                                <input className="btn btn-primary" type="submit" value="search"/>
                            </div>
                        </form>
                    </div>
                    
                </div>
                
                <div className="col-lg-8 col-md-8 col-sm-7 col-xs-12 right-box">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233668.38703724756!2d90.27923971281079!3d23.78057325785754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1616244946332!5m2!1sen!2sbd" style={{border:0,width:'100%',height:'600px'}} allowfullscreen="" loading="lazy"></iframe>
                </div>
            </Row>
        </div>
    );
};

export default Destination;