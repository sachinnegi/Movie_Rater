import React from 'react'
import {movieURL} from '../../api';
import CardArray from '../CardArray/CardArray';
import './Home.css'
function Home() {
    return (
        <div className="homepage">
            <CardArray heading = {"Popular Movies"} url={movieURL.popular} />
            <CardArray heading = {"Top Rated Movies"} url={movieURL.topRated} />
            <CardArray heading = {"Now Playing"} url={movieURL.now_playing} />
            <CardArray heading = {"Upcoming Movies"} url={movieURL.upcoming} />
        </div>
    )
}

export default Home
