import React from 'react';
import {tvShowURL} from '../../api';
import CardArray from '../CardArray/CardArray';


function TvShow() {
    return (
        
        <div className="homepage">
            <CardArray heading = {"Trending"} url={tvShowURL.trending} />
            <CardArray heading = {"Latest"} url={tvShowURL.latest} />
            <CardArray heading = {"Popular"} url={tvShowURL.popular} />
            <CardArray heading = {"Top Rated"} url={tvShowURL.topRated} />         
        </div>    
    )
}

export default TvShow
