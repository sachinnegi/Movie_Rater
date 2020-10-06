import React from 'react'
import {movieURL} from '../../api';
import CardArray from '../CardArray/CardArray';
import CarouselAnimation from '../Carousel/CarouselAnimation'
import './Home.css'
function Home({getMovie}) {
    return (
        <div className="homepage">
            <CarouselAnimation/>
            <CardArray heading = {"Popular Movies"} url={movieURL.popular} getMovie = {getMovie} />
            <CardArray heading = {"Top Rated Movies"} url={movieURL.topRated} getMovie = {getMovie} />
            <CardArray heading = {"Now Playing"} url={movieURL.now_playing} getMovie = {getMovie} />
            <CardArray heading = {"Upcoming Movies"} url={movieURL.upcoming} getMovie = {getMovie} />
        </div>
    )
}

export default Home
