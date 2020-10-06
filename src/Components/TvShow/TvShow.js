import React from 'react';
import {tvShowURL} from '../../api';
import CardArray from '../CardArray/CardArray';


function TvShow({getMovie}) {
    return (
        
        <div className="homepage">
            <CardArray heading = {"Trending"} url={tvShowURL.trending} getMovie = {getMovie} />
            <CardArray heading = {"Latest"} url={tvShowURL.latest} getMovie = {getMovie} />
            <CardArray heading = {"Popular"} url={tvShowURL.popular} getMovie = {getMovie} />
            <CardArray heading = {"Top Rated"} url={tvShowURL.topRated} getMovie = {getMovie} />         
        </div>    
    )
}

export default TvShow
