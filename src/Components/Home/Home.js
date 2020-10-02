import React from 'react'
import {movieURL} from '../../api';
import Card from '../Card/Card';

function Home() {
    return (
        <div className="homepage">
            <Card title = {"Popular Movies"} url={movieURL.popular} />
            <Card title = {"Top Rated Movies"} url={movieURL.topRated} />
            <Card title = {"Now Playing"} url={movieURL.now_playing} />
            <Card title = {"Upcoming Movies"} url={movieURL.upcoming} />
            
        </div>
    )
}

export default Home
