import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import searchData from '../../Data/Search.json';
import { useParams } from 'react-router';
import './Destination.css';
import ShowSearchResult from '../ShowSearchResult/ShowSearchResult';
import ShowSearchForm from '../ShowSearchForm/ShowSearchForm';

const Destination = () => {
    //Reading Link
    const {transportation}=useParams();

    //Filtering from json
    const vehicle=searchData.filter(pd => pd.vehicle === transportation);

    //console.log(vehicle);
    const [searchAction,setSearchAction]=useState(false);
    const [search,setSearch]=useState({
        from:"",
        to:"",
        journeyDate:"",
        vehicle:vehicle
    });

    const handDestination=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        
        //copying object data from state
        const newSearch={...search}
        //assigning new value
        newSearch[name]=value;
        setSearch(newSearch);
        //console.log(search);

    }

    const handleSearch=(event)=>{
        event.preventDefault();
        setSearchAction(true);
    }


    return (
        <div className="container destination-area">
            {
                searchAction? <ShowSearchResult searchQuery={search}></ShowSearchResult> : <ShowSearchForm handleSearch={handleSearch} handDestination={handDestination}></ShowSearchForm>
            }
            
        </div>
    );
};

export default Destination;